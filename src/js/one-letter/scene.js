// Design 04 · One Letter: the 3D scene.
//
// A strand of DNA built like a paper model. Every base is a tile with its letter on it, and the
// tiles climb round the strand like the steps of a spiral stair, two to a step, between two rails.
// The page opens looking along the strand as it writes itself into the distance. As the reader
// scrolls, the camera travels forward to the start of one gene, then closes on one letter of it:
// the A that is a T in sickle cell disease. That tile can be turned over to show either letter.
//
// The four letters take the four colours of the company's logo, and sun yellow is kept for the one
// tile the story is about. Every colour and the typeface are read from the page's CSS custom
// properties, so the comparison toolbar's variations reach the scene too.

import {
  BoxGeometry, CanvasTexture, Color, Curve, DirectionalLight, DoubleSide, Fog, Group, HemisphereLight,
  InstancedMesh, Mesh, MeshBasicMaterial, MeshLambertMaterial, Object3D, PCFShadowMap, PerspectiveCamera,
  SRGBColorSpace, Scene, Shape, ShapeGeometry, TubeGeometry, Vector3, WebGLRenderer,
} from 'three';
import { PAIR, SITE_AT, START_AT, STRAND } from './sequence.js';

const DEG = Math.PI / 180;
const FOV = 30;

// The strand keeps the proportions of real DNA: about ten and a half letters to a full turn, each
// a third of the strand's radius further along. It twists the way DNA does, to the right.
const RADIUS = 1;
const RISE = 0.3;
const TWIST = (360 / 10.5) * DEG;
const TILE = { from: 0.07, width: 0.46, thick: 0.06 }; // a tile runs from near the axis out to its rail
const LENGTH = RADIUS - TILE.from;
const MID = TILE.from + LENGTH / 2;
const RAIL = 0.042; // radius of the two rails the tiles hang between
const LETTER_AT = 0.27; // the letter's centre, as a share of the tile's length in from its outer end
const BASES = ['A', 'T', 'G', 'C'];
const SUN = { rays: 16, outer: 0.5, inner: 0.37 }; // the burst behind the tile once it shows the changed letter

// Light. Tile faces look back along the strand, toward the camera, and the key light comes from
// behind the camera, so each tile throws a soft shadow on the next. Sky and key are balanced so a
// face in full light keeps its palette colour: SKY + KEY x (how squarely the light meets it) = pi.
const KEY = { from: new Vector3(-0.62, 0.7, 0.35).normalize(), intensity: 1.5 };
const SKY = Math.PI - KEY.intensity * -KEY.from.x;
const SHADOW = { half: 14, ahead: 7, size: 2048 }; // the lit volume travels with the camera's subject

// Camera stops. The camera sits behind and above the strand and looks along it, so the letters
// read away into the distance. `at` is the letter looked at, `along` the angle between the line of
// sight and the strand, and `around` where the camera sits round it: 90 is directly above, more
// leans the far end of the strand to the left. `fog` is how far beyond the subject tiles start to
// fade into the page, and where they are gone.
const STOPS = [
  { at: 58, dist: 10.6, narrow: 15.5, along: 34, around: 113, fog: [8, 42] },
  { at: START_AT + 4, dist: 10.8, narrow: 16.5, along: 38, around: 102, fog: [9, 46] },
  { at: SITE_AT, dist: 6.6, narrow: 9, along: 46, around: 95, fog: [5, 30] },
];
// Page load: how far past the first stop the strand is written out, and how long that takes.
const INTRO = { reach: 47, seconds: 1.9, wait: 0.55 };
// Where the subject sits. Beside the text it is placed a share of the way across the page's own
// column, not the window's, so text and strand stay together however wide the window is. Under
// the text, on narrow screens, it is centred. `shiftY` moves it up by a share of the view's height.
const WIDE = { across: 0.71, shiftY: -0.02 };
const NARROW = { across: 0.5, shiftY: 0.25 };
// The strand's turn that brings the story's tile to the top, facing the camera at the last stop.
const SITE_SPIN = (90 - STOPS[2].around) * DEG - SITE_AT * TWIST;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
// Between two stops: a short rest at each end, an even glide in between.
const travel = (t) => smoother(clamp((t - 0.07) / 0.86, 0, 1));

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

// One rail: a helix through the outer ends of one strand's tiles.
class Rail extends Curve {
  constructor(turn, length) {
    super();
    this.turn = turn;
    this.length = length;
  }

  getPoint(t, target = new Vector3()) {
    const x = t * this.length;
    const angle = (x / RISE) * TWIST + this.turn;
    return target.set(x, Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS);
  }
}

// ---- A tile's face, drawn in code -----------------------------------------------------------

const FACE = { w: 256, h: Math.round((256 * LENGTH) / TILE.width) };

function drawFace(canvas, letter, fill, ink, family) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, FACE.w, FACE.h);
  ctx.fillStyle = ink;
  ctx.font = `800 ${Math.round(FACE.w * 0.74)}px ${family}, Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  // Centred on the capital's own height, so every letter sits at the same place on its tile.
  const capital = ctx.measureText(letter).actualBoundingBoxAscent;
  ctx.fillText(letter, FACE.w / 2, FACE.h * LETTER_AT + capital / 2);
}

function texture(canvas) {
  const map = new CanvasTexture(canvas);
  map.colorSpace = SRGBColorSpace;
  map.anisotropy = 8;
  return map;
}

function sunShape() {
  const shape = new Shape();
  for (let i = 0; i < SUN.rays * 2; i += 1) {
    const angle = (i / (SUN.rays * 2)) * Math.PI * 2;
    const reach = i % 2 === 0 ? SUN.outer : SUN.inner;
    if (i === 0) shape.moveTo(Math.cos(angle) * reach, Math.sin(angle) * reach);
    else shape.lineTo(Math.cos(angle) * reach, Math.sin(angle) * reach);
  }
  shape.closePath();
  return shape;
}

// ---- Scene ----------------------------------------------------------------------------------

function init(root) {
  const story = root.querySelector('[data-story]');
  const stage = root.querySelector('[data-stage]');
  const steps = [...root.querySelectorAll('[data-step]')];
  const mount = root.querySelector('[data-scene]');
  const pageColumn = root.querySelector('[data-frame]');
  const pinList = root.querySelector('[data-pins]');
  const pins = new Map([...root.querySelectorAll('[data-pin]')].map((el) => [el.dataset.pin, el]));
  const trail = root.querySelector('[data-trail]');
  const trailLinks = trail ? [...trail.querySelectorAll('a')] : [];

  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 200);
  scene.fog = new Fog(0xffffff, 1, 10);
  scene.background = new Color();

  // --- The strand: two tiles to a step, one for each letter of the pair ---
  const strand = new Group();
  scene.add(strand);
  const place = (object, index, turn) => {
    const angle = index * TWIST + turn;
    object.position.set(index * RISE, Math.cos(angle) * MID, Math.sin(angle) * MID);
    object.rotation.set(angle, 0, 0);
  };

  // The strand writes itself in on arrival: tiles beyond the front have not been set down yet.
  const front = { value: -1e6 };
  const written = (material) => {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uFront = front;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uFront;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          #ifdef USE_INSTANCING
            transformed *= 1.0 - smoothstep( uFront - 4.0, uFront, instanceMatrix[ 3 ].x );
          #endif`);
    };
    material.customProgramCacheKey = () => 'written';
    return material;
  };

  // BoxGeometry face order: +x, -x, then the four thin sides. The two broad faces carry the letter.
  const tileGeometry = new BoxGeometry(TILE.thick, LENGTH, TILE.width);
  const faces = (far, near, side) => [far, near, side, side, side, side];
  const laid = { A: [], T: [], G: [], C: [] };
  for (let index = 0; index < STRAND.length; index += 1) {
    if (index === SITE_AT) continue; // that step is built separately, so its tiles can turn over
    laid[STRAND[index]].push({ index, turn: 0 });
    laid[PAIR[STRAND[index]]].push({ index, turn: Math.PI });
  }
  const rand = random(404);
  const dummy = new Object3D();
  const shade = new Color();
  const base = {};
  BASES.forEach((letter) => {
    const faceCanvas = Object.assign(document.createElement('canvas'), { width: FACE.w, height: FACE.h });
    const map = texture(faceCanvas);
    const face = written(new MeshLambertMaterial({ map }));
    const side = written(new MeshLambertMaterial());
    const tiles = new InstancedMesh(tileGeometry, faces(face, face, side), laid[letter].length);
    laid[letter].forEach(({ index, turn }, i) => {
      place(dummy, index, turn);
      dummy.updateMatrix();
      tiles.setMatrixAt(i, dummy.matrix);
      tiles.setColorAt(i, shade.setScalar(0.965 + rand() * 0.035)); // cut by hand: no two quite the same
    });
    tiles.instanceMatrix.needsUpdate = true;
    tiles.frustumCulled = false;
    tiles.castShadow = true;
    tiles.receiveShadow = true;
    strand.add(tiles);
    base[letter] = { canvas: faceCanvas, map, face, side };
  });

  const length = (STRAND.length - 1) * RISE;
  const railMaterial = new MeshLambertMaterial();
  const rails = [0, Math.PI].map((turn) => {
    const rail = new Mesh(new TubeGeometry(new Rail(turn, length), STRAND.length * 3, RAIL, 6, false), railMaterial);
    rail.frustumCulled = false;
    rail.castShadow = true;
    rail.receiveShadow = true;
    strand.add(rail);
    return rail;
  });
  const railIndices = rails[0].geometry.index.count;

  // --- The step the story is about. Each of its two tiles has the usual letter on one face and
  // the changed one on the other, and turns over to show it. ---
  const usual = STRAND[SITE_AT]; // A
  const changed = PAIR[usual]; // T: in sickle cell disease the pair A-T reads T-A
  const site = new Group();
  strand.add(site);
  const turning = [{ turn: 0, shows: usual, hides: changed }, { turn: Math.PI, shows: changed, hides: usual }].map((half, k) => {
    const holder = new Group();
    place(holder, SITE_AT, half.turn);
    const hiddenCanvas = Object.assign(document.createElement('canvas'), { width: FACE.w, height: FACE.h });
    const hidden = new MeshLambertMaterial({ map: texture(hiddenCanvas) });
    const shown = new MeshLambertMaterial({ map: base[half.shows].map });
    const side = new MeshLambertMaterial();
    const tile = new Mesh(tileGeometry, faces(hidden, shown, side));
    tile.castShadow = true;
    tile.receiveShadow = true;
    holder.add(tile);
    site.add(holder);
    return { ...half, holder, tile, hiddenCanvas, hidden, side, way: k === 0 ? 1 : -1 };
  });
  // The logo's sun, behind the letter once it is found.
  const sunMaterial = new MeshBasicMaterial({ side: DoubleSide });
  const sun = new Mesh(new ShapeGeometry(sunShape()).rotateY(Math.PI / 2), sunMaterial);
  sun.position.set(TILE.thick * 0.5 + 0.02, LENGTH / 2 - LENGTH * LETTER_AT, 0);
  sun.visible = false;
  turning[0].holder.add(sun);
  const letterAnchor = new Object3D();
  letterAnchor.position.set(0, LENGTH / 2 - LENGTH * LETTER_AT, 0);
  turning[0].holder.add(letterAnchor);

  // --- Light ---
  const sky = new HemisphereLight(0xffffff, 0xffffff, SKY);
  const key = new DirectionalLight(0xffffff, KEY.intensity);
  key.castShadow = true;
  key.shadow.mapSize.set(SHADOW.size, SHADOW.size);
  // The soft filter's reach has to stay well inside a tile's thickness, or lit faces speckle with
  // the shadow of their own far side. Three texels of this map are about 0.04; a tile is 0.06 thick.
  key.shadow.radius = 3;
  key.shadow.bias = -0.0003;
  key.shadow.normalBias = 0.012;
  Object.assign(key.shadow.camera, { left: -SHADOW.half, right: SHADOW.half, top: SHADOW.half, bottom: -SHADOW.half, near: 1, far: 60 });
  key.shadow.camera.updateProjectionMatrix();
  scene.add(sky, key, key.target);
  // The lit volume moves in whole texels of its shadow map, so shadows do not crawl as it travels.
  const lightRight = new Vector3().crossVectors(new Vector3(0, 1, 0), KEY.from).normalize();
  const lightUp = new Vector3().crossVectors(KEY.from, lightRight);
  const texel = (SHADOW.half * 2) / SHADOW.size;
  const lit = new Vector3();
  function aimLight(x) {
    const across = Math.round((x * lightRight.x) / texel) * texel;
    const up = Math.round((x * lightUp.x) / texel) * texel;
    lit.copy(KEY.from).multiplyScalar(x * KEY.from.x).addScaledVector(lightRight, across).addScaledVector(lightUp, up);
    key.target.position.copy(lit);
    key.position.copy(lit).addScaledVector(KEY.from, 30);
  }

  // --- Theme: every colour and the typeface come from the page's CSS custom properties ---
  const theme = {};
  function applyTheme() {
    const style = getComputedStyle(document.documentElement);
    const read = (name) => style.getPropertyValue(name).trim();
    theme.ground = read('--ground');
    theme.sun = read('--sun');
    theme.family = read('--ff-display') || 'Georgia';
    scene.background.set(theme.ground);
    scene.fog.color.set(theme.ground);
    sky.groundColor.set(theme.ground); // light off the page fills the undersides with its tint
    BASES.forEach((letter) => {
      const ink = read(`--${letter.toLowerCase()}`);
      const fill = read(`--${letter.toLowerCase()}-tile`);
      drawFace(base[letter].canvas, letter, fill, ink, theme.family);
      base[letter].map.needsUpdate = true;
      base[letter].side.color.set(fill).multiplyScalar(0.94);
      base[letter].ink = ink;
    });
    turning.forEach((half) => {
      drawFace(half.hiddenCanvas, half.hides, theme.sun, base[half.hides].ink, theme.family);
      half.hidden.map.needsUpdate = true;
    });
    sunMaterial.color.set(read('--ray'));
    railMaterial.color.set(read('--rail'));
    paintSite();
  }
  const sideFrom = new Color();
  const sideTo = new Color();
  function paintSite() {
    turning.forEach((half) => {
      sideFrom.copy(base[half.shows].side.color);
      sideTo.set(theme.sun).multiplyScalar(0.94);
      half.side.color.copy(sideFrom).lerp(sideTo, smooth(clamp(turned, 0, 1)));
    });
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, layout: WIDE, shiftX: 0, ratio: Math.min(window.devicePixelRatio || 1, 2) };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const drag = { on: false, id: 0, x: 0, speed: 0 };
  let live = false; // is the stage on screen
  let target = 0; // scroll position within the story, 0..2
  let progress = 0;
  let velocity = 0;
  let idle = 0; // the strand's own slow turn
  let twist = 0; // and the turn the reader has given it by dragging
  let variant = 0; // 0 the usual letter, 1 the changed one
  let turned = 0;
  let turnSpeed = 0;
  let introStart = 0;
  let introDone = false;
  let running = false;
  let lastTime = 0;
  let slowFrames = 0;
  let countedFrames = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function pin(label, x, y, z) {
    point.set(x, y, z).project(camera);
    label.style.transform = `translate(${((point.x * 0.5 + 0.5) * view.width).toFixed(1)}px, ${((-point.y * 0.5 + 0.5) * view.height).toFixed(1)}px)`;
  }

  function frame() {
    const index = clamp(Math.floor(progress), 0, STOPS.length - 2);
    const from = STOPS[index];
    const to = STOPS[index + 1];
    const t = travel(progress - index);
    const narrow = view.layout === NARROW;

    // A window much wider than it is tall has room to spare beside the strand, so the camera
    // comes a little closer there and the strand fills more of it.
    const closer = narrow ? 1 : clamp(1.42 - view.aspect * 0.26, 0.82, 1);
    const distance = closer * Math.exp(lerp(Math.log(narrow ? from.narrow : from.dist), Math.log(narrow ? to.narrow : to.dist), t));
    const along = (lerp(from.along, to.along, t) + pointer.y * -1.3) * DEG;
    const around = (lerp(from.around, to.around, t) + pointer.x * 2.6) * DEG;
    focus.set(lerp(from.at, to.at, t) * RISE, 0, 0);
    eye.set(
      focus.x - distance * Math.cos(along),
      distance * Math.sin(along) * Math.sin(around),
      distance * Math.sin(along) * Math.cos(around),
    );
    camera.position.copy(eye);
    camera.lookAt(focus);
    camera.near = clamp(distance * 0.1, 0.1, 5);
    camera.far = distance + 140;
    camera.setViewOffset(view.width, view.height, -view.shiftX * view.width, view.layout.shiftY * view.height, view.width, view.height);

    scene.fog.near = distance + lerp(from.fog[0], to.fog[0], t);
    scene.fog.far = distance + lerp(from.fog[1], to.fog[1], t);
    aimLight(focus.x + SHADOW.ahead);

    // The strand turns freely until the camera closes on the letter, then settles with that tile on top.
    const lock = smooth(clamp((progress - 1.4) / 0.5, 0, 1));
    const settled = SITE_SPIN + Math.round((idle - SITE_SPIN) / (Math.PI * 2)) * Math.PI * 2;
    strand.rotation.x = lerp(idle, settled, lock) + twist;

    // Turning the tile over: it lifts clear of its neighbours, turns, and settles back.
    const lift = Math.sin(clamp(turned, 0, 1) * Math.PI);
    turning.forEach((half) => {
      half.tile.rotation.y = turned * Math.PI * half.way;
      half.tile.position.set(-lift * 0.16, lift * 0.3, 0);
    });
    const risen = smooth(clamp((turned - 0.35) / 0.65, 0, 1));
    sun.visible = risen > 0.01;
    sun.scale.setScalar(Math.max(0.001, risen));
    sun.rotation.x = (1 - risen) * -1.1;
    paintSite();

    renderer.render(scene, camera);

    if (pinList) {
      const gene = pins.get('gene');
      const letter = pins.get('site');
      const atGene = smooth(clamp((progress - 0.72) / 0.22, 0, 1)) * (1 - smooth(clamp((progress - 1.18) / 0.24, 0, 1)));
      const atLetter = smooth(clamp((progress - 1.78) / 0.2, 0, 1));
      camera.updateMatrixWorld();
      if (gene) {
        gene.style.opacity = String(atGene);
        if (atGene > 0.01) pin(gene, START_AT * RISE, 0, 0);
      }
      if (letter) {
        letter.style.opacity = String(atLetter);
        if (atLetter > 0.01) {
          letterAnchor.getWorldPosition(point);
          pin(letter, point.x, point.y, point.z);
        }
      }
    }
    // How far through the story the camera is, for the styles that follow it.
    stage.style.setProperty('--p', (clamp(progress / (STOPS.length - 1), 0, 1)).toFixed(4));
    if (trail) {
      const active = clamp(Math.round(progress), 0, STOPS.length - 1);
      trailLinks.forEach((link, i) => {
        if (i === active) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    }
  }

  function tick(now) {
    if (!live) { running = false; return; }
    // A frame's timestamp can predate the moment wake() was called, so never step backwards.
    const elapsedFrame = (now - lastTime) / 1000;
    const dt = clamp(elapsedFrame, 0.001, 0.05);
    lastTime = now;
    let moving = false;

    // The camera follows the scroll on a critically damped spring, so it gathers speed and comes
    // to rest without a jolt, however the wheel or trackpad delivers its steps.
    const stiffness = 38;
    velocity += (stiffness * (target - progress) - 2 * Math.sqrt(stiffness) * velocity) * dt;
    progress += velocity * dt;
    if (Math.abs(target - progress) < 0.0003 && Math.abs(velocity) < 0.002) {
      progress = target;
      velocity = 0;
    } else moving = true;

    if (Math.abs(pointer.tx - pointer.x) > 0.0005 || Math.abs(pointer.ty - pointer.y) > 0.0005) {
      pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 3));
      pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 3));
      moving = true;
    }

    // The strand's own slow turn, and whatever turn the reader has given it. Near the letter the
    // strand has to sit still to be read, so both ease away there.
    const lock = smooth(clamp((progress - 1.4) / 0.5, 0, 1));
    if (lock < 0.999) {
      idle += dt * 0.13 * (1 - lock);
      moving = true;
    }
    if (!drag.on) {
      twist += drag.speed * dt;
      drag.speed *= Math.exp(-dt * 2.4);
      if (lock > 0.01) twist *= Math.exp(-dt * 4 * lock);
      if (Math.abs(drag.speed) > 0.002 || (lock > 0.01 && Math.abs(twist) > 0.0005)) moving = true;
      else if (lock > 0.01) twist = 0;
    }

    // The tile turns over on a spring of its own.
    const turnStiffness = 46;
    turnSpeed += (turnStiffness * (variant - turned) - 2 * Math.sqrt(turnStiffness) * turnSpeed) * dt;
    turned += turnSpeed * dt;
    if (Math.abs(variant - turned) < 0.0005 && Math.abs(turnSpeed) < 0.003) {
      turned = variant;
      turnSpeed = 0;
    } else moving = true;

    // Page load: the strand is set down tile by tile, away from the reader, as far as the eye can
    // follow it. Everything beyond that is already lost in the distance, and appears at the end.
    if (!introDone) {
      const elapsed = (now - introStart) / 1000;
      const start = STOPS[0].at * RISE;
      front.value = lerp(start - 13, start + INTRO.reach, smooth(clamp(elapsed / INTRO.seconds, 0, 1)));
      rails.forEach((rail) => rail.geometry.setDrawRange(0, Math.floor(clamp((front.value - 2) / length, 0, 1) * (railIndices / 36)) * 36));
      site.visible = false;
      introDone = elapsed > INTRO.seconds;
      if (introDone) {
        front.value = 1e6;
        rails.forEach((rail) => rail.geometry.setDrawRange(0, Infinity));
        site.visible = true;
      }
      moving = true;
    }

    frame();

    // If this machine cannot keep up, render fewer pixels rather than fewer frames.
    if (moving && view.ratio > 1) {
      countedFrames += 1;
      if (elapsedFrame > 0.024) slowFrames += 1;
      if (countedFrames >= 45) {
        if (slowFrames > 22) {
          view.ratio = Math.max(1, view.ratio - 0.25);
          renderer.setPixelRatio(view.ratio);
          renderer.setSize(view.width, view.height, false);
        }
        countedFrames = 0;
        slowFrames = 0;
      }
    }

    if (moving) requestAnimationFrame(tick);
    else running = false;
  }
  function wake() {
    if (running || !live || document.hidden) return;
    running = true;
    lastTime = performance.now();
    requestAnimationFrame(tick);
  }

  function resize() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;
    view.width = width;
    view.height = height;
    view.aspect = width / height;
    view.layout = width >= 900 && view.aspect > 1.05 ? WIDE : NARROW;
    const column = pageColumn ? pageColumn.getBoundingClientRect() : null;
    const whole = mount.getBoundingClientRect();
    view.shiftX = column && column.width ? (column.left - whole.left + column.width * view.layout.across) / width - 0.5 : 0;
    renderer.setPixelRatio(view.ratio);
    renderer.setSize(width, height, false);
    camera.aspect = view.aspect;
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

  const observer = new IntersectionObserver((entries) => {
    live = entries[0].isIntersecting;
    if (live && !introStart) introStart = performance.now() + INTRO.wait * 1000;
    if (live) { resize(); wake(); }
  }, { rootMargin: '10% 0px' });
  observer.observe(stage);

  window.addEventListener('scroll', readScroll, { passive: true });
  window.addEventListener('resize', () => { resize(); readScroll(); });
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(mount);

  window.addEventListener('pointermove', (event) => {
    if (!live || reducedMotion.matches) return;
    if (drag.on && event.pointerId === drag.id) {
      const moved = (event.clientX - drag.x) * 0.0075;
      twist += moved;
      drag.speed = lerp(drag.speed, moved * 60, 0.4);
      drag.x = event.clientX;
      wake();
      return;
    }
    if (event.pointerType === 'touch') return;
    const rect = canvas.getBoundingClientRect();
    pointer.tx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    pointer.ty = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
    wake();
  }, { passive: true });
  // Drag sideways to turn the strand in the hand. Vertical drags stay with the page (touch-action).
  stage.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 && event.pointerType === 'mouse') return;
    drag.on = true;
    drag.id = event.pointerId;
    drag.x = event.clientX;
    drag.speed = 0;
    stage.classList.add('is-turning');
  });
  const release = (event) => {
    if (!drag.on || event.pointerId !== drag.id) return;
    drag.on = false;
    stage.classList.remove('is-turning');
    wake();
  };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);

  // The page's switch between the usual letter and the changed one.
  document.addEventListener('ll:variant', (event) => {
    variant = event.detail === 'sickle' ? 1 : 0;
    wake();
  });
  document.addEventListener('ll:theme', () => {
    applyTheme();
    if (document.fonts && document.fonts.load) document.fonts.load(`800 64px ${theme.family}`).then(() => { applyTheme(); wake(); }).catch(() => {});
    wake();
  });
  document.addEventListener('visibilitychange', wake);
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    document.documentElement.classList.remove('story-live');
  });

  mount.appendChild(canvas);
  applyTheme();
  // The tiles are lettered in the page's display face; draw them again once it has arrived.
  if (document.fonts && document.fonts.load) {
    document.fonts.load(`800 64px ${theme.family}`).then(() => { applyTheme(); wake(); }).catch(() => {});
  }
  const chosen = root.querySelector('[data-variant-choice]:checked');
  variant = chosen && chosen.value === 'sickle' ? 1 : 0;
  turned = variant;
  readScroll();
  progress = target;
  live = true;
  introStart = performance.now() + INTRO.wait * 1000;
  // Arriving part-way down the story (a reload, a shared link): the strand is already written.
  if (progress > 0.35) {
    introDone = true;
    front.value = 1e6;
  }
  resize();
  frame();
  // A late arrival (slow connection) still upgrades the page from its still images.
  document.documentElement.classList.add('story-live', 'scene-ready');
}

try {
  init(document);
} catch (error) {
  // No WebGL after all: the page falls back to its still images.
  document.documentElement.classList.remove('story-live');
  console.warn('One Letter: 3D scene unavailable, showing still images instead.', error);
}
