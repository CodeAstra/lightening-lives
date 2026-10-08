// Design 03 · Scale: the 3D scene.
//
// One dried blood spot card, held up close. As the reader scrolls, the card is set down among its
// neighbours and the camera pulls back: one sample, then a batch, then a map of India laid out in
// cards. The same renderer later shows a single unused card beside the contact options.
//
// Everything is unlit and flat-coloured on purpose, so the scene keeps the page's exact palette.
// Depth comes from perspective, haze and one soft shadow.

import {
  BoxGeometry, CanvasTexture, Color, ExtrudeGeometry, Fog, Group, InstancedMesh, Mesh, MeshBasicMaterial,
  Object3D, PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, Shape, Vector2, Vector3, WebGLRenderer,
} from 'three';
import { GRID, PLACES, SPANS } from './india-cells.js';

const DEG = Math.PI / 180;
const FOV = 30;
const CARD = { w: 0.92, h: 0.58, t: 0.012, r: 0.032 };
const RING_R = 0.064; // collection circle radius, in card units
const RINGS = [-0.31, -0.155, 0, 0.155, 0.31].map((x) => ({ x, z: 0.078 }));
const HELD = { y: 0.3, rx: 0.44, ry: 0.22, rz: -0.05 }; // the card while it is held above its slot

// Camera stops. `span` is how much of the world should fit across the usable part of the view
// (wide screens: the right half; narrow screens: the upper half).
// `fog` and `haze` are multiples of the camera's distance to its subject: cards beyond `fog` fade into
// the page colour, and so do cards nearer than `haze`, which leaves only the subject's own depth in focus.
const OFF = [-2, -1];
const STOPS = [
  { at: 'card', span: 1.5, narrow: 1.3, el: 27, az: -28, held: 1, fog: [1.0, 1.85], haze: [0.72, 0.99] },
  { at: 'card', span: 1.32, narrow: 1.12, el: 64, az: -8, held: 1, fog: [1.25, 2.6], haze: [0.3, 0.7] },
  { at: 'card', span: 7.4, narrow: 5.2, el: 43, az: -6, held: 0, fog: [1.2, 3.2], haze: OFF },
  { at: 'india', span: 97, narrow: 96, spanH: 112, el: 83, az: 0, held: 0, fog: [30, 40], haze: OFF },
];
const BLANK = { at: 'card', span: 1.3, narrow: 1.3, el: 38, az: 22, held: 1, fog: [30, 40], haze: OFF };

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
// Rest at each stop for a moment, then ease to the next.
const hold = (t) => {
  const x = clamp((t - 0.14) / 0.72, 0, 1);
  return x * x * x * (x * (x * 6 - 15) + 10);
};

function random(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- Textures, all drawn in code ------------------------------------------------------------

// The printed face of a dried blood spot card: a few blank fields and five collection circles.
function drawCard(canvas, theme) {
  const W = canvas.width;
  const H = canvas.height;
  const ctx = canvas.getContext('2d');
  const rand = random(7);
  ctx.fillStyle = theme.paper;
  ctx.fillRect(0, 0, W, H);

  // Paper fibres: faint, short, in every direction
  for (let i = 0; i < 1400; i += 1) {
    const x = rand() * W;
    const y = rand() * H;
    const length = 5 + rand() * 16;
    const angle = rand() * Math.PI;
    ctx.strokeStyle = rand() < 0.5 ? 'rgba(255,255,255,0.55)' : 'rgba(40,70,40,0.035)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
  }

  const ink = theme.ink;
  ctx.fillStyle = ink;
  ctx.strokeStyle = ink;
  ctx.textBaseline = 'alphabetic';

  ctx.font = '600 25px "Anek Latin", system-ui, sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('DRIED BLOOD SPOT CARD', 58, 86);
  ctx.letterSpacing = '0px';

  ctx.font = '500 21px "Anek Latin", system-ui, sans-serif';
  ctx.globalAlpha = 0.78;
  const fields = [['Sample ID', 58, 150, 300], ['Date', 400, 150, 230], ['Collected by', 58, 204, 572]];
  fields.forEach(([label, x, y, width]) => {
    ctx.fillText(label, x, y);
    const start = x + ctx.measureText(label).width + 12;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(start, y + 2);
    ctx.lineTo(x + width, y + 2);
    ctx.stroke();
  });
  // A square to stick a label in, top right
  ctx.lineWidth = 2;
  ctx.setLineDash([7, 6]);
  ctx.strokeRect(W - 58 - 250, 54, 250, 152);
  ctx.setLineDash([]);
  ctx.font = '500 19px "Anek Latin", system-ui, sans-serif';
  ctx.fillText('Label', W - 58 - 238, 84);
  ctx.globalAlpha = 1;

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(58, 250);
  ctx.lineTo(W - 58, 250);
  ctx.stroke();

  // Five collection circles
  const radius = (RING_R / CARD.w) * W;
  RINGS.forEach((ring, index) => {
    const cx = W / 2 + (ring.x / CARD.w) * W;
    const cy = H / 2 + (ring.z / CARD.h) * H;
    ctx.lineWidth = 3;
    ctx.setLineDash([9, 7]);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.font = '600 20px "Anek Latin", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.globalAlpha = 0.7;
    ctx.fillText(String(index + 1), cx, cy + radius + 40);
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';
  });
}

// One blood spot. Alpha falls away from the centre past an uneven edge, so a rising or falling
// alpha threshold makes the spot soak outward the way blood wicks into filter paper.
function drawSpot(canvas, blood) {
  const size = canvas.width;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const rand = random(23);
  const lobes = [2, 3, 4, 5, 7].map((k) => ({ k, amp: (0.11 * rand()) / k + 0.006, phase: rand() * Math.PI * 2 }));
  const [r, g, b] = blood;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = (x + 0.5) / size - 0.5;
      const dy = (y + 0.5) / size - 0.5;
      const dist = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx);
      let edge = 0.4;
      lobes.forEach((lobe) => { edge *= 1 + lobe.amp * Math.sin(lobe.k * angle + lobe.phase); });
      const q = dist / edge;
      const height = 1 - 0.5 * q * q + (rand() - 0.5) * 0.02;
      // Dried blood is darkest at the rim, where the drop stopped spreading
      const rim = smooth(clamp((q - 0.55) / 0.45, 0, 1));
      const shade = 1.08 - 0.3 * rim + (rand() - 0.5) * 0.05;
      const i = (y * size + x) * 4;
      image.data[i] = clamp(r * shade, 0, 255);
      image.data[i + 1] = clamp(g * shade, 0, 255);
      image.data[i + 2] = clamp(b * shade, 0, 255);
      image.data[i + 3] = clamp(height, 0, 1) * 255;
    }
  }
  ctx.putImageData(image, 0, 0);
}

// The soft shadow under the held card
function drawShadow(canvas) {
  const size = canvas.width;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, size, size);
  ctx.filter = `blur(${size * 0.075}px)`;
  ctx.fillStyle = '#000';
  const w = size * 0.58;
  const h = w * (CARD.h / CARD.w);
  ctx.beginPath();
  ctx.roundRect((size - w) / 2, (size - h) / 2, w, h, size * 0.03);
  ctx.fill();
}

function texture(canvas) {
  const map = new CanvasTexture(canvas);
  map.colorSpace = SRGBColorSpace;
  map.anisotropy = 8;
  return map;
}

function hexToRgb(css) {
  const probe = hexToRgb.ctx || (hexToRgb.ctx = document.createElement('canvas').getContext('2d'));
  probe.fillStyle = '#000';
  probe.fillStyle = css.trim();
  const hex = probe.fillStyle;
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

// ---- Scene ----------------------------------------------------------------------------------

function init(root) {
  const story = root.querySelector('[data-story]');
  const stage = root.querySelector('[data-stage]');
  const steps = [...root.querySelectorAll('[data-step]')];
  const stageMount = root.querySelector('[data-scene]');
  const blankMount = root.querySelector('[data-scene-blank]');
  const railLinks = [...root.querySelectorAll('[data-rail] a')];
  const rail = root.querySelector('[data-rail]');
  const placeList = root.querySelector('[data-places]');
  const placeLabels = new Map([...root.querySelectorAll('[data-place]')].map((el) => [el.dataset.place, el]));

  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 100);
  scene.fog = new Fog(0xffffff, 1, 10);
  scene.background = new Color();

  // --- Theme: every colour comes from the page's CSS custom properties ---
  const theme = {};
  const cardCanvas = Object.assign(document.createElement('canvas'), { width: 1024, height: 646 });
  const spotCanvas = Object.assign(document.createElement('canvas'), { width: 256, height: 256 });
  const shadowCanvas = Object.assign(document.createElement('canvas'), { width: 256, height: 256 });
  const cardMap = texture(cardCanvas);
  const heroMap = texture(cardCanvas);
  heroMap.repeat.set(1 / CARD.w, 1 / CARD.h);
  heroMap.offset.set(0.5, 0.5);
  const spotMap = texture(spotCanvas);
  drawShadow(shadowCanvas);
  const shadowMap = texture(shadowCanvas);

  const paperUniform = { value: new Vector3() };
  const fadeUniform = { value: 0 };
  const hazeUniform = { value: new Vector2(-2, -1) };

  // The field's materials fade toward the page colour both far from the camera (ordinary fog) and close
  // to it, so the card in hand is the only thing in focus. `before` runs just ahead of the fade.
  const focused = (material, before = '') => {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uHaze = hazeUniform;
      shader.uniforms.uPaper = paperUniform;
      shader.uniforms.uFade = fadeUniform;
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec2 uHaze;\nuniform vec3 uPaper;\nuniform float uFade;')
        .replace('#include <fog_fragment>', `${before}
          float llFar = smoothstep( fogNear, fogFar, vFogDepth );
          float llNear = 1.0 - smoothstep( uHaze.x, uHaze.y, vFogDepth );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, max( llFar, llNear ) );`);
    };
    return material;
  };

  const cardTop = focused(new MeshBasicMaterial({ map: cardMap }));
  const cardSide = focused(new MeshBasicMaterial());
  const heroTop = new MeshBasicMaterial({ map: heroMap });
  const heroSide = new MeshBasicMaterial();
  // Only the card in hand carries full-strength blood colour. The field's spots sit back as soft marks,
  // and far away, where a spot is smaller than a pixel, they dissolve into the paper altogether.
  const spotMaterial = focused(
    new MeshBasicMaterial({ map: spotMap, alphaTest: 0.5, alphaToCoverage: true }),
    'gl_FragColor.rgb = mix( gl_FragColor.rgb, uPaper, uFade );',
  );

  // --- The field: one card per grid cell inside India's outline ---
  const cells = [];
  SPANS.forEach((row, r) => {
    for (let i = 0; i < row.length; i += 2) {
      for (let c = row[i]; c <= row[i + 1]; c += 1) {
        cells.push({ x: GRID.x0 + (c + 0.5) * GRID.pitchX, z: GRID.z0 + (r + 0.5) * GRID.pitchZ });
      }
    }
  });
  const nearest = (place) => cells.reduce((best, cell) => (
    Math.hypot(cell.x - place.x, cell.z - place.z) < Math.hypot(best.x - place.x, best.z - place.z) ? cell : best
  ));
  const heroCell = nearest(PLACES.find((place) => place.id === 'hyd'));
  const field = cells.filter((cell) => cell !== heroCell);

  const cards = new InstancedMesh(
    new BoxGeometry(CARD.w, CARD.t, CARD.h),
    [cardSide, cardSide, cardTop, cardSide, cardSide, cardSide],
    field.length,
  );
  const spotGeometry = new PlaneGeometry(1, 1);
  spotGeometry.rotateX(-Math.PI / 2);
  const spots = new InstancedMesh(spotGeometry, spotMaterial, field.length * RINGS.length);
  cards.frustumCulled = false;
  spots.frustumCulled = false;

  const rand = random(101);
  const dummy = new Object3D();
  const child = new Object3D();
  dummy.add(child);
  const baseTint = new Float32Array(field.length);
  field.forEach((cell, index) => {
    // Laid out by hand: nearly square to the grid, never exactly
    dummy.position.set(cell.x + (rand() - 0.5) * 0.024, CARD.t / 2, cell.z + (rand() - 0.5) * 0.02);
    dummy.rotation.set(0, (rand() - 0.5) * 0.05, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrixWorld(true);
    cards.setMatrixAt(index, dummy.matrixWorld);
    baseTint[index] = 0.955 + rand() * 0.045;

    RINGS.forEach((ring, k) => {
      const size = RING_R * 2 * (0.88 + rand() * 0.2);
      child.position.set(ring.x + (rand() - 0.5) * 0.014, CARD.t / 2 + 0.0009, ring.z + (rand() - 0.5) * 0.014);
      child.rotation.set(0, rand() * Math.PI * 2, 0);
      child.scale.set(size * (0.95 + rand() * 0.1), 1, size);
      child.updateMatrixWorld(true);
      spots.setMatrixAt(index * RINGS.length + k, child.matrixWorld);
    });
  });
  cards.instanceMatrix.needsUpdate = true;
  spots.instanceMatrix.needsUpdate = true;
  scene.add(cards, spots);

  // Cards around the places the company has worked glow sun-yellow in the widest view.
  const lit = [];
  PLACES.forEach((place) => {
    field.forEach((cell, index) => {
      const distance = Math.hypot(cell.x - place.x, (cell.z - place.z) * 1.25);
      if (distance < 1.9) lit.push({ index, weight: 1 - smooth(clamp((distance - 0.7) / 1.2, 0, 1)) * 0.75 });
    });
  });

  // --- The card in hand ---
  const hero = new Group();
  hero.position.set(heroCell.x, 0, heroCell.z);
  hero.rotation.order = 'YXZ';
  const outline = new Shape();
  const hw = CARD.w / 2;
  const hh = CARD.h / 2;
  outline.moveTo(-hw + CARD.r, -hh);
  outline.lineTo(hw - CARD.r, -hh);
  outline.absarc(hw - CARD.r, -hh + CARD.r, CARD.r, -Math.PI / 2, 0, false);
  outline.lineTo(hw, hh - CARD.r);
  outline.absarc(hw - CARD.r, hh - CARD.r, CARD.r, 0, Math.PI / 2, false);
  outline.lineTo(-hw + CARD.r, hh);
  outline.absarc(-hw + CARD.r, hh - CARD.r, CARD.r, Math.PI / 2, Math.PI, false);
  outline.lineTo(-hw, -hh + CARD.r);
  outline.absarc(-hw + CARD.r, -hh + CARD.r, CARD.r, Math.PI, Math.PI * 1.5, false);
  const heroGeometry = new ExtrudeGeometry(outline, { depth: CARD.t, bevelEnabled: false, curveSegments: 6 });
  heroGeometry.rotateX(-Math.PI / 2);
  hero.add(new Mesh(heroGeometry, [heroTop, heroSide]));

  const heroSpots = RINGS.map((ring, k) => {
    const material = new MeshBasicMaterial({ map: spotMap, alphaTest: 1.01, alphaToCoverage: true });
    const mesh = new Mesh(spotGeometry, material);
    const size = RING_R * 2 * [1.04, 0.97, 1.08, 0.94, 1.02][k];
    mesh.position.set(ring.x + [0.004, -0.006, 0.002, 0.005, -0.003][k], CARD.t + 0.0009, ring.z + [-0.004, 0.003, 0.005, -0.002, 0.004][k]);
    mesh.rotation.y = [0.4, 2.1, 3.7, 5.2, 1.3][k];
    mesh.scale.set(size, 1, size);
    hero.add(mesh);
    return material;
  });
  scene.add(hero);

  const shadow = new Mesh(
    new PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
    new MeshBasicMaterial({ map: shadowMap, transparent: true, depthWrite: false, opacity: 0 }),
  );
  shadow.position.set(heroCell.x, CARD.t + 0.002, heroCell.z);
  shadow.renderOrder = 2;
  scene.add(shadow);

  function applyTheme() {
    const style = getComputedStyle(document.documentElement);
    const read = (name) => style.getPropertyValue(name).trim();
    theme.mist = read('--mist');
    theme.paper = read('--paper');
    theme.ink = read('--leaf');
    theme.sun = read('--sun');
    theme.canopy = read('--canopy');
    theme.meadow = read('--meadow');
    scene.background.set(theme.mist);
    scene.fog.color.set(theme.mist);
    drawCard(cardCanvas, theme);
    cardMap.needsUpdate = true;
    heroMap.needsUpdate = true;
    drawSpot(spotCanvas, hexToRgb(read('--blood')));
    spotMap.needsUpdate = true;
    const paper = hexToRgb(theme.paper);
    paperUniform.value.set(paper[0] / 255, paper[1] / 255, paper[2] / 255);
    const edge = new Color(theme.paper).lerp(new Color(theme.canopy), 0.2);
    cardSide.color.copy(edge);
    heroSide.color.copy(edge);
    shadow.material.color.set(theme.canopy);
    tintField(lastGlow, lastFar, true);
  }

  const sunColor = new Color();
  const meadowColor = new Color();
  const tint = new Color();
  let lastGlow = 0;
  let lastFar = 0;
  // Up close a card is paper. From far away the field turns meadow green so the map reads against
  // the page, and the cards around the places we have worked turn sun yellow.
  function tintField(glow, far, force) {
    if (!force && Math.abs(glow - lastGlow) < 0.004 && Math.abs(far - lastFar) < 0.004) return;
    sunColor.set(theme.sun);
    meadowColor.set(theme.meadow);
    if (force || Math.abs(far - lastFar) >= 0.004) {
      // The texture already carries the paper colour; the tint only varies each card a little.
      field.forEach((cell, index) => {
        cards.setColorAt(index, tint.set(1, 1, 1).lerp(meadowColor, far).multiplyScalar(baseTint[index]));
      });
    }
    lit.forEach(({ index, weight }) => {
      tint.set(1, 1, 1).lerp(meadowColor, far).multiplyScalar(baseTint[index]).lerp(sunColor, glow * weight);
      cards.setColorAt(index, tint);
    });
    cards.instanceColor.needsUpdate = true;
    heroTop.color.set(1, 1, 1).lerp(meadowColor, far).lerp(sunColor, glow);
    lastGlow = glow;
    lastFar = far;
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, wide: true };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let mode = null; // 'story' | 'blank' | null (nothing on screen)
  let target = 0; // scroll position within the story, 0..3
  let progress = 0;
  let introStart = 0;
  let introDone = false;
  let running = false;
  let lastTime = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function distanceFor(stop) {
    const tan = Math.tan((FOV * DEG) / 2);
    const inStory = mode !== 'blank';
    const acrossFraction = inStory ? (view.wide ? 0.5 : 0.86) : 0.86;
    const upFraction = inStory ? (view.wide ? 0.84 : 0.46) : 0.9;
    const across = (view.wide ? stop.span : stop.narrow) / (2 * tan * view.aspect * acrossFraction);
    const up = stop.spanH ? stop.spanH / (2 * tan * upFraction) : 0;
    return Math.max(across, up);
  }

  function frame() {
    const blank = mode === 'blank';
    const index = blank ? 0 : clamp(Math.floor(progress), 0, STOPS.length - 2);
    const from = blank ? BLANK : STOPS[index];
    const to = blank ? BLANK : STOPS[index + 1];
    const t = blank ? 0 : hold(progress - index);

    const distance = Math.exp(lerp(Math.log(distanceFor(from)), Math.log(distanceFor(to)), t));
    const elevation = (lerp(from.el, to.el, t) + pointer.y * -1.6) * DEG;
    const azimuth = (lerp(from.az, to.az, t) + pointer.x * 2.4) * DEG;
    // The card is set down early in the move, before the camera has travelled far.
    const held = lerp(from.held, to.held, smooth(clamp(t * 2.2, 0, 1)));

    hero.position.y = HELD.y * held;
    hero.rotation.set(HELD.rx * held, HELD.ry * held, HELD.rz * held);
    shadow.material.opacity = 0.2 * held;
    shadow.scale.setScalar(1.55 + 0.5 * held);
    shadow.position.set(heroCell.x + 0.05 * held, CARD.t + 0.002, heroCell.z - 0.07 * held);

    const atCard = (stop) => (stop.at === 'card' ? 1 : 0);
    const cardness = lerp(atCard(from), atCard(to), t);
    focus.set(heroCell.x * cardness, HELD.y * 0.82 * held, lerp(1.2, heroCell.z, cardness));
    eye.set(
      focus.x + distance * Math.cos(elevation) * Math.sin(azimuth),
      focus.y + distance * Math.sin(elevation),
      focus.z + distance * Math.cos(elevation) * Math.cos(azimuth),
    );
    camera.position.copy(eye);
    camera.lookAt(focus);
    camera.near = clamp(distance * 0.12, 0.05, 30);
    camera.far = distance * 3 + 80;

    // The subject sits right of centre on wide screens and in the upper half on narrow ones.
    const shiftX = blank ? 0 : view.wide ? 0.22 : 0;
    const shiftY = blank ? 0 : view.wide ? 0 : 0.2;
    camera.setViewOffset(view.width, view.height, -shiftX * view.width, shiftY * view.height, view.width, view.height);

    scene.fog.near = distance * lerp(from.fog[0], to.fog[0], t);
    scene.fog.far = distance * lerp(from.fog[1], to.fog[1], t);
    hazeUniform.value.set(distance * lerp(from.haze[0], to.haze[0], t), distance * lerp(from.haze[1], to.haze[1], t));
    fadeUniform.value = lerp(0.42, 1, smooth(clamp((distance - 22) / 40, 0, 1)));
    cards.visible = !blank;
    spots.visible = !blank && fadeUniform.value < 0.999;

    const glow = blank ? 0 : smooth(clamp((progress - 2.5) / 0.42, 0, 1));
    tintField(glow, smooth(clamp((distance - 40) / 110, 0, 1)), false);

    renderer.render(scene, camera);

    if (placeList) {
      placeList.style.opacity = String(blank ? 0 : glow);
      if (glow > 0.01 && !blank) {
        camera.updateMatrixWorld();
        PLACES.forEach((place) => {
          const label = placeLabels.get(place.id);
          if (!label) return;
          point.set(place.x, 0, place.z).project(camera);
          label.style.transform = `translate(${((point.x * 0.5 + 0.5) * view.width).toFixed(1)}px, ${((-point.y * 0.5 + 0.5) * view.height).toFixed(1)}px)`;
        });
      }
    }
    if (rail) {
      rail.style.setProperty('--p', String(clamp((progress - 1) / 2, 0, 1)));
      const active = progress < 1.5 ? 0 : progress < 2.5 ? 1 : 2;
      railLinks.forEach((link, i) => {
        if (i === active) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    }
  }

  function tick(now) {
    if (!mode) { running = false; return; }
    // A frame's timestamp can predate the moment wake() was called, so never step backwards.
    const dt = clamp((now - lastTime) / 1000, 0.001, 0.05);
    lastTime = now;
    let moving = false;

    const ease = 1 - Math.exp(-dt * 5.5);
    if (Math.abs(target - progress) > 0.0004) { progress += (target - progress) * ease; moving = true; } else progress = target;
    if (Math.abs(pointer.tx - pointer.x) > 0.0005 || Math.abs(pointer.ty - pointer.y) > 0.0005) {
      pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 4));
      pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 4));
      moving = true;
    }

    // Page load: the five spots soak into the card, one after another.
    if (mode === 'blank') {
      heroSpots.forEach((material) => { material.alphaTest = 1.01; });
    } else if (!introDone) {
      const elapsed = (now - introStart) / 1000;
      heroSpots.forEach((material, k) => {
        const local = clamp((elapsed - 0.55 - k * 0.3) / 1.15, 0, 1);
        material.alphaTest = lerp(1.01, 0.5, 1 - (1 - local) ** 3);
      });
      introDone = elapsed > 0.55 + 4 * 0.3 + 1.15;
      moving = true;
    } else {
      heroSpots.forEach((material) => { material.alphaTest = 0.5; });
    }

    frame();
    if (moving) requestAnimationFrame(tick);
    else running = false;
  }
  function wake() {
    if (running || !mode) return;
    running = true;
    lastTime = performance.now();
    requestAnimationFrame(tick);
  }

  // --- Where the canvas lives, and how big it is ---
  function resize() {
    const mount = mode === 'blank' ? blankMount : stageMount;
    if (!mount) return;
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;
    view.width = width;
    view.height = height;
    view.aspect = width / height;
    view.wide = mode === 'blank' ? view.aspect > 0.9 : width >= 900 && view.aspect > 1.05;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    camera.aspect = view.aspect;
    wake();
  }
  function setMode(next) {
    if (next === mode) return;
    mode = next;
    if (!mode) return;
    const mount = mode === 'blank' ? blankMount : stageMount;
    if (canvas.parentNode !== mount) mount.appendChild(canvas);
    if (mode === 'story' && !introStart) introStart = performance.now() + 250;
    resize();
    wake();
  }

  // Each step of the text has a camera stop. The camera reaches a stop when that step's block has
  // scrolled fully into the stage, and travels between stops in proportion to the scroll in between.
  function readScroll() {
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const scrolled = stickyTop - story.getBoundingClientRect().top;
    const tops = steps.map((step) => step.offsetTop);
    let value = 0;
    for (let k = 0; k < tops.length - 1; k += 1) {
      if (scrolled >= tops[k]) value = k + clamp((scrolled - tops[k]) / Math.max(1, tops[k + 1] - tops[k]), 0, 1);
    }
    target = clamp(value, 0, STOPS.length - 1);
    wake();
  }

  const visible = { story: false, blank: false };
  const choose = () => setMode(visible.blank && !visible.story ? 'blank' : visible.story ? 'story' : visible.blank ? 'blank' : null);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === stage) visible.story = entry.isIntersecting;
      else visible.blank = entry.isIntersecting;
    });
    choose();
  }, { rootMargin: '10% 0px' });
  observer.observe(stage);
  if (blankMount) observer.observe(blankMount);

  window.addEventListener('scroll', readScroll, { passive: true });
  window.addEventListener('resize', () => { resize(); readScroll(); });
  if ('ResizeObserver' in window) {
    const sizes = new ResizeObserver(resize);
    sizes.observe(stageMount);
    if (blankMount) sizes.observe(blankMount);
  }
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch' || reducedMotion.matches || !mode) return;
    const rect = canvas.getBoundingClientRect();
    pointer.tx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    pointer.ty = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
    wake();
  }, { passive: true });
  document.addEventListener('ll:theme', () => { applyTheme(); wake(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  // The card's print uses the page typeface; redraw once it has loaded.
  if (document.fonts && document.fonts.load) {
    document.fonts.load('600 25px "Anek Latin"').then(() => { applyTheme(); wake(); }).catch(() => {});
  }
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    document.documentElement.classList.remove('story-live');
  });

  applyTheme();
  readScroll();
  progress = target;
  visible.story = true;
  choose();
  frame();
  // A late arrival (slow connection) still upgrades the page from its still images.
  document.documentElement.classList.add('story-live', 'scene-ready');
}

try {
  init(document);
} catch (error) {
  // No WebGL after all: the page falls back to its still images.
  document.documentElement.classList.remove('story-live');
  console.warn('Scale: 3D scene unavailable, showing still images instead.', error);
}
