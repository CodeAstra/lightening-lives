// The kits in 3D on Solutions (25 October 2026: the user asked for "a proper 3D version of the kit,
// rather than making the kit image 3D"). Each card's stage ([data-kit3d]) holds the box's photograph
// until its own WebGL view has drawn the box from its print artwork (src/assets/kits/<kit>/*.webp),
// then the canvas takes its place. The box rests turned to show its front, top and side; a mouse
// over the card turns it a little towards the pointer; dragging, or the arrow keys when the stage
// has the focus, turn it freely; it eases back to rest when let go. Nothing turns by itself, and for a
// reader who has asked for less motion nothing eases: the box moves only while it is moved.
// A stage draws only while it is on screen and moving; one view per card keeps each independent.
import {
  AmbientLight, CanvasTexture, Color, DirectionalLight, Group, LinearMipmapLinearFilter, Mesh,
  MeshBasicMaterial, MeshLambertMaterial, NoToneMapping, PerspectiveCamera, PlaneGeometry, Scene,
  SRGBColorSpace, TextureLoader, WebGLRenderer,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const REST = { yaw: -0.62, pitch: 0.36 }; // the resting turn: front, top and right side in view
const PITCH = [-0.15, 1.05];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const loader = new TextureLoader();
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// A soft round shadow under the box: a radial gradient on a plane, cheaper and softer than a shadow map.
function contactShadow() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, 'rgba(43,37,34,0.40)');
  grad.addColorStop(0.55, 'rgba(43,37,34,0.13)');
  grad.addColorStop(1, 'rgba(43,37,34,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return new MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
}

function texture(url, renderer) {
  return new Promise((resolve, reject) => loader.load(url, (t) => {
    t.colorSpace = SRGBColorSpace;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    t.minFilter = LinearMipmapLinearFilter;
    resolve(t);
  }, undefined, reject));
}

async function mount(stage) {
  const model = JSON.parse(stage.dataset.kit3d);
  const canvas = document.createElement('canvas');
  canvas.className = 'kit-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NoToneMapping;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new Scene();
  // Matte card under soft light: printed colour stays true where a face looks at the light, and each
  // face of the box is a shade apart, the top lightest, so its shape reads.
  scene.add(new AmbientLight(0xffffff, 1.55));
  const key = new DirectionalLight(0xffffff, 1.35);
  key.position.set(-1.6, 4, 2.6);
  scene.add(key);

  // The box: W x H x D from the kit's own proportions, scaled so its longest side is 2.
  const [w, h, d] = model.box;
  const s = 2 / Math.max(w, h, d);
  const geometry = new RoundedBoxGeometry(w * s, h * s, d * s, 3, 0.03);
  const base = `/assets/kits/${model.kit}/`;
  const names = { right: 'right', left: model.left || 'left', back: model.back || 'back' };
  const urls = { px: names.right, nx: names.left, py: 'top', pz: 'front', nz: names.back };
  const maps = {};
  await Promise.all(Object.entries(urls).map(async ([k, n]) => { maps[k] = await texture(`${base}${n}.webp`, renderer); }));
  const paper = (map) => new MeshLambertMaterial({ map });
  const materials = [
    paper(maps.px), paper(maps.nx), paper(maps.py),
    new MeshLambertMaterial({ color: new Color(model.bottom) }),
    paper(maps.pz), paper(maps.nz),
  ];
  const box = new Mesh(geometry, materials);
  const turn = new Group();
  turn.add(box);
  scene.add(turn);
  const shadow = new Mesh(new PlaneGeometry(w * s * 1.7, d * s * 1.9), contactShadow());
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = (-h * s) / 2 - 0.005;
  scene.add(shadow);

  const camera = new PerspectiveCamera(28, 1, 0.1, 50);
  const state = { yaw: REST.yaw, pitch: REST.pitch, tyaw: REST.yaw, tpitch: REST.pitch, vyaw: 0, dragging: false, visible: true, raf: 0 };

  function place() {
    // The camera looks down at the pitch, from far enough that the box fills about three quarters of the stage.
    const r = 5.6;
    camera.position.set(0, Math.sin(state.pitch) * r, Math.cos(state.pitch) * r);
    camera.lookAt(0, -0.05, 0);
    turn.rotation.y = state.yaw;
    shadow.rotation.z = -state.yaw;
  }
  function size() {
    const { width, height } = stage.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    draw();
  }
  function draw() { place(); renderer.render(scene, camera); }

  // Easing towards the target turn: drawn only while something is still moving.
  function tick() {
    state.raf = 0;
    const k = reduced.matches ? 1 : 0.14;
    if (!state.dragging && Math.abs(state.vyaw) > 0.0004 && !reduced.matches) { state.tyaw += state.vyaw; state.vyaw *= 0.92; }
    state.yaw += (state.tyaw - state.yaw) * k;
    state.pitch += (state.tpitch - state.pitch) * k;
    draw();
    const moving = Math.abs(state.tyaw - state.yaw) > 0.0005 || Math.abs(state.tpitch - state.pitch) > 0.0005 || Math.abs(state.vyaw) > 0.0004;
    if (moving && state.visible) state.raf = requestAnimationFrame(tick);
  }
  const wake = () => { if (!state.raf) state.raf = requestAnimationFrame(tick); };
  const rest = () => { state.tyaw = REST.yaw; state.tpitch = REST.pitch; state.vyaw = 0; wake(); };

  // A mouse over the card turns the box a little towards it.
  const card = stage.closest('.kit-card') || stage;
  card.addEventListener('pointermove', (e) => {
    if (state.dragging || e.pointerType !== 'mouse' || reduced.matches) return;
    const r = stage.getBoundingClientRect();
    const x = clamp((e.clientX - r.left) / r.width - 0.5, -0.6, 0.6);
    const y = clamp((e.clientY - r.top) / r.height - 0.5, -0.6, 0.6);
    state.tyaw = REST.yaw + x * 0.9;
    state.tpitch = clamp(REST.pitch + y * 0.35, PITCH[0], PITCH[1]);
    wake();
  });
  card.addEventListener('pointerleave', () => { if (!state.dragging) rest(); });

  // Dragging turns it freely; a flick carries on a little.
  let last = null;
  stage.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    e.preventDefault(); // no native drag of the picture beneath, which would cancel the pointer
    state.dragging = true; state.vyaw = 0; last = { x: e.clientX, y: e.clientY };
    try { stage.setPointerCapture(e.pointerId); } catch {}
    stage.classList.add('is-dragging');
  });
  stage.addEventListener('pointermove', (e) => {
    if (!state.dragging || !last) return;
    const dx = e.clientX - last.x; const dy = e.clientY - last.y;
    last = { x: e.clientX, y: e.clientY };
    const r = stage.getBoundingClientRect();
    const dyaw = (dx / r.width) * Math.PI * 1.6;
    state.tyaw += dyaw; state.vyaw = dyaw;
    state.tpitch = clamp(state.tpitch + (dy / r.height) * 1.6, PITCH[0], PITCH[1]);
    if (reduced.matches) { state.yaw = state.tyaw; state.pitch = state.tpitch; }
    wake();
  });
  const release = (e) => {
    if (!state.dragging) return;
    state.dragging = false; last = null; stage.classList.remove('is-dragging');
    if (e && stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
    // the flick, then rest a moment later unless the pointer is still over the card
    setTimeout(() => { if (!state.dragging && !card.matches(':hover')) rest(); }, reduced.matches ? 0 : 1400);
    wake();
  };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  stage.addEventListener('dragstart', (e) => e.preventDefault());

  // The arrow keys turn it; Home sets it back.
  stage.addEventListener('keydown', (e) => {
    const step = { ArrowLeft: [-0.3, 0], ArrowRight: [0.3, 0], ArrowUp: [0, -0.15], ArrowDown: [0, 0.15] }[e.key];
    if (step) {
      e.preventDefault();
      state.tyaw += step[0]; state.tpitch = clamp(state.tpitch + step[1], PITCH[0], PITCH[1]); wake();
    } else if (e.key === 'Home' || e.key === 'Escape') { e.preventDefault(); rest(); }
  });
  stage.addEventListener('blur', () => { if (!card.matches(':hover')) rest(); });

  if ('ResizeObserver' in window) new ResizeObserver(size).observe(stage);
  new IntersectionObserver((entries) => {
    state.visible = entries[entries.length - 1].isIntersecting;
    if (state.visible) wake();
  }).observe(stage);
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); stage.classList.remove('is-3d'); });

  stage.prepend(canvas);
  size();
  stage.classList.add('is-3d');
  // For capturing the stills the page shows before (or without) WebGL (npm run kit-stills): the box at
  // rest, drawn at a given size on a clear ground.
  window.llKits = window.llKits || {};
  window.llKits[model.kit] = (width = 960, height = 768) => {
    renderer.setSize(width, height, false);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    state.yaw = state.tyaw = REST.yaw; state.pitch = state.tpitch = REST.pitch;
    shadow.visible = true; draw();
    const url = canvas.toDataURL('image/png');
    size();
    return url;
  };
}

// Each stage is set up as it comes near the screen, so the textures of boxes further down wait.
export function initKits(root = document) {
  const stages = [...root.querySelectorAll('[data-kit3d]')];
  if (!stages.length) return;
  const start = (stage) => mount(stage).catch((error) => {
    console.warn('Lightening Lives: a kit could not be drawn in 3D; its photograph stays.', error);
  });
  if (!('IntersectionObserver' in window)) { stages.forEach(start); return; }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      io.unobserve(entry.target);
      start(entry.target);
    }
  }, { rootMargin: '300px 0px' });
  stages.forEach((s) => io.observe(s));
}

initKits();
