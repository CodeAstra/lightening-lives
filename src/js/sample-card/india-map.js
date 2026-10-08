// Design 01 · Sample Card: the hero map of India.
// It starts as the flat print already on the page (same projection, same scale), then tilts
// back and the highlighted states rise off the card. Flat inks only, no lighting: it should
// read as a printed diagram that has gained depth, not as a rendered model.

import {
  BoxGeometry, Color, ExtrudeGeometry, Group, Mesh, MeshBasicMaterial, OrthographicCamera,
  Path, Raycaster, SRGBColorSpace, Scene, Shape, Vector2, Vector3, WebGLRenderer,
} from 'three';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { PLACES, SICKLE, SICKLE_BELT, STATES, THAL } from './india-data.js';

const FLAT_VIEW = 106; // map units across the flat print's box (the static SVG's viewBox height)
const FLAT_INSET = 0.74; // the flat print sits in the middle 74% of the ring
const VIEW = FLAT_VIEW / FLAT_INSET; // map units across the whole stage

const DEG = Math.PI / 180;
// Tilting foreshortens the map, so the camera closes in as it lifts to keep the ring full.
const REST = { tilt: 41 * DEG, yaw: -9 * DEG, zoom: 1.3 };
const HEIGHT = { flat: 0.02, base: 0.9, low: 1.7, raised: 4.6, hover: 1.7, pin: 7.5 };
const TINT = { low: 0.09, raised: 0.23, hover: 0.62 };

const WORK_NOTES = {
  TS: 'Laboratory in Hyderabad. Field work in Kothagudem.',
  MH: 'Field work in Nandurbar.',
  JH: 'Field work.',
};
// A layer raises some states fully (`raised`) and may raise others a little, with a lighter tint
// (`low`). Sickle cell is most common in a belt across central India, so the states that belt runs
// through stand tall and the other focus states of the national mission only just lift.
const sickleNote = (id) => {
  if (SICKLE_BELT.includes(id)) return 'In the central belt, where sickle cell is most common. Mission focus state.';
  return SICKLE.includes(id) ? 'Mission focus state.' : '';
};
const LAYERS = {
  sickle: { raised: new Set(SICKLE_BELT), low: new Set(SICKLE.filter((id) => !SICKLE_BELT.includes(id))), wash: 0, note: sickleNote },
  thal: { raised: new Set(THAL), wash: 0.09, note: (id) => (THAL.includes(id) ? 'Higher carrier frequency reported in parts.' : '') },
  work: { raised: new Set(Object.keys(WORK_NOTES)), wash: 0, note: (id) => WORK_NOTES[id] || '' },
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Colours are mixed in sRGB so they match the CSS and the static SVG exactly.
const probe = document.createElement('canvas').getContext('2d');
function toRgb(css) {
  probe.fillStyle = '#000';
  probe.fillStyle = css.trim();
  const hex = probe.fillStyle;
  if (hex[0] === '#') return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return hex.match(/[\d.]+/g).slice(0, 3).map((n) => Number(n) / 255);
}
const mix = (a, b, t) => a.map((channel, i) => channel + (b[i] - channel) * t);
const paint = (color, rgb) => color.setRGB(rgb[0], rgb[1], rgb[2], SRGBColorSpace);

function ringToPath(target, ring) {
  target.moveTo(ring[0], ring[1]);
  for (let i = 2; i < ring.length; i += 2) target.lineTo(ring[i], ring[i + 1]);
  target.closePath();
  return target;
}

function init(stage) {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  stage.appendChild(canvas);

  const overlay = document.createElement('div');
  overlay.className = 'map-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  stage.appendChild(overlay);
  const tip = document.createElement('div');
  tip.className = 'map-tip';
  overlay.appendChild(tip);

  const scene = new Scene();
  const camera = new OrthographicCamera(-VIEW / 2, VIEW / 2, VIEW / 2, -VIEW / 2, 1, 1000);
  camera.position.set(0, 0, 400);
  const tiltGroup = new Group();
  const yawGroup = new Group();
  tiltGroup.add(yawGroup);
  scene.add(tiltGroup);

  const wallMaterial = new MeshBasicMaterial();
  const lineMaterial = new LineMaterial({ linewidth: 1, worldUnits: false });
  const stalkMaterial = new MeshBasicMaterial();

  let theme = null;
  let layer = LAYERS[stage.dataset.layer] ? stage.dataset.layer : 'sickle';
  let hovered = null;

  // --- States -------------------------------------------------------------
  const hyderabad = PLACES.find((place) => place.id === 'hyd').at;
  const states = STATES.map((data) => {
    const shapes = data.p.map(([outer, ...holes]) => {
      const shape = ringToPath(new Shape(), outer);
      holes.forEach((hole) => shape.holes.push(ringToPath(new Path(), hole)));
      return shape;
    });
    const cap = new MeshBasicMaterial({ polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const mesh = new Mesh(new ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false }), [cap, wallMaterial]);
    mesh.scale.z = HEIGHT.flat;

    // Inked outline on the top face. As a child of the mesh it rides up with the extrusion.
    const segments = [];
    data.p.forEach((polygon) => polygon.forEach((ring) => {
      for (let i = 0; i < ring.length; i += 2) {
        const j = (i + 2) % ring.length;
        segments.push(ring[i], ring[i + 1], 1, ring[j], ring[j + 1], 1);
      }
    }));
    mesh.add(new LineSegments2(new LineSegmentsGeometry().setPositions(segments), lineMaterial));
    yawGroup.add(mesh);

    const state = {
      id: data.id,
      name: data.n,
      mesh,
      cap,
      h: HEIGHT.flat,
      rgb: [1, 1, 1],
      // The lift spreads outward from Hyderabad, where the tests are developed.
      delay: Math.hypot(data.c[0] - hyderabad[0], data.c[1] - hyderabad[1]) * 0.011,
    };
    mesh.userData.state = state;
    return state;
  });
  const meshes = states.map((state) => state.mesh);
  const byId = Object.fromEntries(states.map((state) => [state.id, state]));

  // --- Pins ---------------------------------------------------------------
  const pins = PLACES.map((place) => {
    const geometry = new BoxGeometry(0.34, 0.34, 1);
    geometry.translate(0, 0, 0.5);
    const stalk = new Mesh(geometry, stalkMaterial);
    stalk.position.set(place.at[0], place.at[1], 0);
    stalk.scale.z = 0.001;
    yawGroup.add(stalk);

    const element = document.createElement('span');
    element.className = 'map-pin';
    element.dataset.side = place.at[0] < -8 ? 'left' : 'right';
    const dot = document.createElement('i');
    const label = document.createElement('b');
    label.textContent = place.n;
    element.append(dot, label);
    overlay.appendChild(element);
    return { place, stalk, element, state: byId[place.s], length: 0 };
  });

  // --- Theme --------------------------------------------------------------
  function readTheme() {
    const style = getComputedStyle(document.documentElement);
    const token = (name) => toRgb(style.getPropertyValue(name));
    theme = { card: token('--card'), green: token('--green'), sun: token('--sun'), ink: token('--ink') };
    paint(wallMaterial.color, theme.green);
    paint(lineMaterial.color, theme.green);
    paint(stalkMaterial.color, theme.ink);
  }
  function capTarget(state) {
    if (state === hovered) return mix(theme.card, theme.sun, TINT.hover);
    const active = LAYERS[layer];
    if (active.raised.has(state.id)) return mix(theme.card, theme.green, TINT.raised);
    return mix(theme.card, theme.green, active.low && active.low.has(state.id) ? TINT.low : active.wash);
  }
  function heightTarget(state) {
    const active = LAYERS[layer];
    const lift = active.raised.has(state.id) ? HEIGHT.raised : active.low && active.low.has(state.id) ? HEIGHT.low : HEIGHT.base;
    return lift + (state === hovered ? HEIGHT.hover : 0);
  }

  // --- Pose and animation -------------------------------------------------
  const pose = { tilt: 0, yaw: 0, zoom: 1, dragYaw: 0, dragTilt: 0 };
  let lifted = false; // false while the map is still the flat print
  let dragging = false;
  let visible = true;
  let frameId = 0;
  let lastTime = 0;
  let idleFrames = 0;
  let size = 0;
  const point = new Vector3();

  // Jump straight to the current targets (first paint, theme changes, reduced motion).
  function settle() {
    states.forEach((state) => {
      state.h = lifted ? heightTarget(state) : HEIGHT.flat;
      state.rgb = capTarget(state);
      state.wait = 0;
    });
    pins.forEach((pin) => { pin.length = lifted && layer === 'work' ? HEIGHT.pin : 0; });
  }

  function step(dt) {
    let moving = false;
    const ease = 1 - Math.exp(-dt * 7);
    const quick = 1 - Math.exp(-dt * 12);

    const tiltTarget = lifted ? REST.tilt : 0;
    const yawTarget = lifted ? REST.yaw : 0;
    if (!dragging) {
      pose.dragYaw += (0 - pose.dragYaw) * (1 - Math.exp(-dt * 2.2));
      pose.dragTilt += (0 - pose.dragTilt) * (1 - Math.exp(-dt * 2.2));
    }
    pose.tilt += (tiltTarget - pose.tilt) * ease;
    pose.yaw += (yawTarget - pose.yaw) * ease;
    pose.zoom += ((lifted ? REST.zoom : 1) - pose.zoom) * ease;
    if (Math.abs(camera.zoom - pose.zoom) > 1e-4) {
      camera.zoom = pose.zoom;
      camera.updateProjectionMatrix();
      moving = true;
    }
    const tilt = clamp(pose.tilt + pose.dragTilt, 0, 62 * DEG);
    const yaw = pose.yaw + pose.dragYaw;
    if (Math.abs(tiltGroup.rotation.x + tilt) > 1e-5 || Math.abs(yawGroup.rotation.z - yaw) > 1e-5) moving = true;
    tiltGroup.rotation.x = -tilt;
    yawGroup.rotation.z = yaw;

    states.forEach((state) => {
      if (state.wait > 0) {
        state.wait -= dt;
        moving = true;
        return;
      }
      const targetH = lifted ? heightTarget(state) : HEIGHT.flat;
      if (Math.abs(targetH - state.h) > 0.002) {
        state.h += (targetH - state.h) * (state === hovered ? quick : ease);
        moving = true;
      }
      state.mesh.scale.z = Math.max(HEIGHT.flat, state.h);

      const target = capTarget(state);
      const delta = Math.abs(target[0] - state.rgb[0]) + Math.abs(target[1] - state.rgb[1]) + Math.abs(target[2] - state.rgb[2]);
      if (delta > 0.002) {
        state.rgb = mix(state.rgb, target, quick);
        moving = true;
      }
      paint(state.cap.color, state.rgb);
    });

    const pinTarget = lifted && layer === 'work' ? HEIGHT.pin : 0;
    pins.forEach((pin) => {
      if (Math.abs(pinTarget - pin.length) > 0.01) {
        pin.length += (pinTarget - pin.length) * ease;
        moving = true;
      }
      pin.stalk.position.z = pin.state.mesh.scale.z;
      pin.stalk.scale.z = Math.max(0.001, pin.length);
    });
    return moving;
  }

  function placePins() {
    pins.forEach((pin) => {
      point.set(pin.place.at[0], pin.place.at[1], pin.state.mesh.scale.z + pin.length);
      point.applyMatrix4(yawGroup.matrixWorld).project(camera);
      const x = (point.x * 0.5 + 0.5) * size;
      const y = (-point.y * 0.5 + 0.5) * size;
      pin.element.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
  }

  function render() {
    renderer.render(scene, camera);
    placePins();
  }

  function frame(time) {
    frameId = requestAnimationFrame(frame);
    const dt = Math.min(0.05, Math.max(0.001, (time - lastTime) / 1000));
    lastTime = time;
    if (step(dt)) {
      idleFrames = 0;
      render();
    } else if ((idleFrames += 1) > 30) {
      stop(); // settled: nothing redraws until the next interaction calls start()
    }
  }
  function start() {
    if (frameId || !visible || document.hidden) return;
    idleFrames = 0;
    lastTime = performance.now();
    frameId = requestAnimationFrame(frame);
  }
  function stop() {
    cancelAnimationFrame(frameId);
    frameId = 0;
  }

  // --- Sizing -------------------------------------------------------------
  function resize() {
    const next = Math.round(stage.clientWidth);
    if (!next || next === size) return;
    size = next;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(size, size, false);
    lineMaterial.resolution.set(size, size);
    lineMaterial.linewidth = clamp((0.34 * size) / VIEW, 0.9, 1.6);
    render();
  }

  // --- Interaction --------------------------------------------------------
  const raycaster = new Raycaster();
  const pointer = new Vector2();
  function pick(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes, false)[0];
    return hit ? hit.object.userData.state : null;
  }
  function showTip(state, event) {
    if (!state) {
      tip.classList.remove('is-on');
      return;
    }
    const note = LAYERS[layer].note(state.id);
    tip.replaceChildren();
    const name = document.createElement('strong');
    name.textContent = state.name;
    tip.append(name, note);
    const rect = stage.getBoundingClientRect();
    const x = clamp(event.clientX - rect.left + 14, 0, rect.width - tip.offsetWidth);
    const y = clamp(event.clientY - rect.top - tip.offsetHeight - 12, 0, rect.height);
    tip.style.transform = `translate(${x.toFixed(0)}px, ${y.toFixed(0)}px)`;
    tip.classList.add('is-on');
  }
  function hover(state, event) {
    hovered = state;
    showTip(state, event);
    start();
  }

  let drag = null;
  let tapTimer = 0;
  canvas.addEventListener('pointerdown', (event) => {
    if (!lifted) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, yaw: pose.dragYaw, tilt: pose.dragTilt, moved: false };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (drag && drag.id === event.pointerId) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) > 5) {
        drag.moved = true;
        dragging = true;
        stage.classList.add('is-dragging');
        hover(null, event);
      }
      if (drag.moved) {
        pose.dragYaw = clamp(drag.yaw + dx * 0.006, -0.62, 0.62);
        pose.dragTilt = clamp(drag.tilt + dy * 0.004, -0.2, 0.3);
        start();
      }
      return;
    }
    if (event.pointerType === 'mouse' && lifted) hover(pick(event), event);
  });
  const release = (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const wasTap = !drag.moved && event.type === 'pointerup';
    drag = null;
    dragging = false;
    stage.classList.remove('is-dragging');
    if (wasTap && event.pointerType !== 'mouse') {
      // Touch has no hover: a tap names the state for a moment.
      hover(pick(event), event);
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => hover(null, event), 2600);
    }
  };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') hover(null, event);
  });

  document.addEventListener('ll:map-layer', (event) => {
    if (!LAYERS[event.detail.layer]) return;
    layer = event.detail.layer;
    hover(null, event);
    if (reducedMotion.matches) {
      settle();
      step(0);
      render();
    }
    start();
  });
  document.addEventListener('ll:theme', () => {
    readTheme();
    if (reducedMotion.matches) settle();
    step(0);
    render();
    start();
  });

  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    stop();
    stage.classList.remove('is-live');
  });
  canvas.addEventListener('webglcontextrestored', () => {
    stage.classList.add('is-live');
    render();
    start();
  });

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  }).observe(stage);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  new ResizeObserver(resize).observe(stage);

  // --- First paint: match the flat print, then lift ----------------------
  readTheme();
  settle();
  step(0);
  resize();
  render();
  stage.classList.add('is-live');

  const lift = () => {
    lifted = true;
    if (reducedMotion.matches) {
      pose.tilt = REST.tilt;
      pose.yaw = REST.yaw;
      pose.zoom = REST.zoom;
      settle();
      step(0);
      render();
    } else {
      states.forEach((state) => { state.wait = 0.25 + state.delay; });
    }
    start();
  };
  setTimeout(lift, reducedMotion.matches ? 0 : 420);
}

const stage = document.getElementById('india-map');
if (stage) {
  try {
    init(stage);
  } catch (error) {
    // No WebGL, or the context was refused: the flat print stays in place.
    stage.classList.remove('is-live');
    console.warn('India map: falling back to the flat print.', error);
  }
}
