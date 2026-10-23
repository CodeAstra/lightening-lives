// Design 05 · Tree: the 3D scene.
//
// The company's emblem, made as a paper sculpture and lit like a photograph of one. Its parts are
// cut from card and mounted at different depths in front of the page, as if the page were a white
// wall: the sun's rays, the sun's disc, the figure with raised arms, and five folded leaves held
// off the disc on brass pins. Each part throws its shadow on the ones behind it and on the wall.
//
// On arrival the parts lie flat against the wall and lift forward one after another, and the
// leaves unfold. As the reader scrolls, the camera closes on the five leaves, one for each test
// the company has developed so far, and a sixth, new leaf opens beside them: the place for the
// next condition a programme needs. Then the camera closes on the figure at the centre. The light
// follows the pointer, so the shadows move with it.
//
// Every colour is read from the page's CSS custom properties, so the comparison toolbar's
// variations reach the scene too.

import {
  BufferGeometry, CanvasTexture, Color, CylinderGeometry, DepthTexture, DirectionalLight, DoubleSide,
  ExtrudeGeometry, Float32BufferAttribute, Group, Mesh, MeshStandardMaterial, Object3D, OrthographicCamera,
  PCFShadowMap, PMREMGenerator, PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, ShaderMaterial,
  ShadowMaterial, Shape, Vector2, Vector3, WebGLRenderTarget, WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const DEG = Math.PI / 180;
const FOV = 30;

// The emblem, in its own units: the sun's disc is 2 across its radius and centred on the origin.
// Depths are distances in front of the plane the figure's back sits on; the wall is behind all of it.
const CARD = 0.045; // thickness of the card everything is cut from
const WALL = -1.05;
const SUN = { disc: 2, rays: 18, outer: 3.05, inner: 2.36, raysAt: -0.5, discAt: -0.24 };
const TREE = { scale: 1.1, y: -0.05, at: 0.1 }; // the figure and its leaves, as a group
const HEAD = { y: 0.14, radius: 0.2 };
// The five leaves, left to right: where each springs from, the way it points (degrees clockwise
// from straight up), its size, how far forward it is mounted and how far its tip leans out.
const LEAVES = [
  { base: [-0.72, 0.22], angle: -54, length: 0.98, width: 0.56, at: 0.3, lean: 9 },
  { base: [-0.33, 0.46], angle: -36, length: 0.97, width: 0.52, at: 0.42, lean: 12 },
  { base: [0, 0.56], angle: 0, length: 1.02, width: 0.48, at: 0.52, lean: 14 },
  { base: [0.33, 0.46], angle: 36, length: 0.97, width: 0.52, at: 0.4, lean: 11 },
  { base: [0.72, 0.22], angle: 54, length: 0.98, width: 0.56, at: 0.28, lean: 8 },
];
// The new leaf: smaller, paler, only part unfolded. It is not part
// of the logo, so it is not there on arrival; it grows from the right arm when the camera comes to
// the leaves.
const BUD = { base: [0.5, -0.03], angle: 101, length: 0.78, width: 0.44, at: 0.38, lean: 13, fold: 32 };
// A leaf is folded along its midrib. The angle is how far each half is turned up from flat.
const FOLD = { closed: 84, rest: 21, shown: 13 };
const PIN = 0.012; // radius of the brass pins the leaves are mounted on
const PIN_AT = 0.34; // and how far up a leaf its pin sits, as a share of the leaf's length

// Light, as for a small relief on a gallery wall: a warm key light from in front, above and to the
// left, which throws every part's shadow down and to the right; the room's own soft light; and a
// cool light from the side that picks out the cut edges. `follow` is how far the key light moves
// with the pointer.
const KEY = { from: new Vector3(-0.32, 0.42, 0.85), intensity: 1.65, colour: 0xfff2e0, follow: [0.42, 0.3] };
const RIM = { from: new Vector3(0.75, 0.25, 0.3).normalize(), intensity: 0.35, colour: 0xe3ecff };
const ROOM = 0.52;
// The lens. `aperture` sets how quickly things off the plane of focus soften, and `blur` is the
// softest they get, as a share of the view's height.
const LENS = { aperture: 26, blur: 0.008, taps: 24 };

// Camera stops: the whole emblem, then its five leaves, then the figure at its centre. `at` is the
// point looked at, `around` and `above` the camera's angles from straight on. `across` is where
// that point sits beside the text: a share of the way across the page's own column, not the
// window's, so text and emblem stay together however wide the window is.
// On a narrow screen the emblem sits above the text, not beside it, so each stop has its own
// framing there: `lift` is how far above centre the point looked at sits, as a share of the height.
const STOPS = [
  { at: [0, 0.05], dist: 17.5, around: -15, above: 3, across: 0.725, narrow: { dist: 27, lift: 0.2 } },
  { at: [0.05, 0.7], dist: 11.8, around: -6, above: 2, across: 0.79, narrow: { at: [0, 0.75], dist: 17.5, lift: 0.22 } },
  { at: [0, -0.45], dist: 10.8, around: 12, above: -2, across: 0.77, narrow: { dist: 13.5, lift: 0.24 } },
];
// Arrival: when each part lifts off the wall, in seconds, and how long a lift takes.
const INTRO = { wait: 0.35, lift: 1.05, rays: 0, disc: 0.16, figure: 0.4, leaves: 0.62, apart: 0.1 };

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

// ---- Card, drawn in code --------------------------------------------------------------------

// Texture size: the leaves fill a fair part of a large screen at the closer stops; a phone needs half.
const FACE = Math.max(window.innerWidth, window.innerHeight) < 900 ? 256 : 512;
const CORE = '#F5F2E8'; // the board inside coloured card, seen at its cut edges

// Dyed card is never one flat colour: it is cloudy, and full of fibres and flecks.
function cardStock(ctx, fill, seed, fibres = 1) {
  const size = FACE;
  const scale = size / 512;
  const rand = random(seed);
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 12; i += 1) {
    const x = rand() * size;
    const y = rand() * size;
    const r = (0.16 + rand() * 0.3) * size;
    const cloud = ctx.createRadialGradient(x, y, 0, x, y, r);
    cloud.addColorStop(0, rand() < 0.5 ? 'rgba(255,255,255,0.055)' : 'rgba(70,58,36,0.035)');
    cloud.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = cloud;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  ctx.lineWidth = Math.max(1, scale);
  for (let i = 0; i < 1100; i += 1) {
    const x = rand() * size;
    const y = rand() * size;
    const run = (3 + rand() * 13) * scale;
    const angle = rand() * Math.PI;
    ctx.strokeStyle = rand() < 0.55 ? `rgba(255,255,255,${(0.22 * fibres).toFixed(3)})` : 'rgba(72,60,40,0.08)';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * run, y + Math.sin(angle) * run);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(64,54,38,0.1)';
  for (let i = 0; i < 220; i += 1) ctx.fillRect(rand() * size, rand() * size, (1 + rand()) * scale, (1 + rand()) * scale);
}

// A leaf: green card, scored down its midrib, with a few veins pressed in on either side.
function leafVeins(ctx, relief) {
  const size = FACE;
  ctx.lineCap = 'round';
  ctx.lineWidth = size * 0.012;
  ctx.beginPath();
  ctx.moveTo(size / 2, size);
  ctx.lineTo(size / 2, size * 0.04);
  ctx.stroke();
  ctx.lineWidth = size * (relief ? 0.008 : 0.006);
  for (let k = 0; k < 4; k += 1) {
    const from = size * (0.86 - k * 0.19);
    [-1, 1].forEach((side) => {
      ctx.beginPath();
      ctx.moveTo(size / 2, from);
      ctx.quadraticCurveTo(size / 2 + side * size * 0.13, from - size * 0.1, size / 2 + side * size * 0.34, from - size * 0.2);
      ctx.stroke();
    });
  }
}
function drawLeaf(canvas, fill, vein, seed) {
  const ctx = canvas.getContext('2d');
  cardStock(ctx, fill, seed);
  ctx.strokeStyle = vein;
  ctx.globalAlpha = 0.5;
  leafVeins(ctx, false);
  ctx.globalAlpha = 1;
}

// The sun's rays: amber card, edged in the sun's own yellow as the logo's are.
function drawRays(canvas, fill, edge, outline) {
  const size = FACE;
  const ctx = canvas.getContext('2d');
  cardStock(ctx, fill, 89);
  const at = (point) => [(point.x / (SUN.outer * 2) + 0.5) * size, (0.5 - point.y / (SUN.outer * 2)) * size];
  ctx.strokeStyle = edge;
  ctx.lineJoin = 'round';
  ctx.lineWidth = size * 0.036; // half of it falls outside the card and is cut away
  ctx.beginPath();
  outline.forEach((point, i) => (i ? ctx.lineTo(...at(point)) : ctx.moveTo(...at(point))));
  ctx.closePath();
  ctx.stroke();
}

// Any card's surface as a relief, for the light to catch: its tooth, and a leaf's veins.
function drawRelief(canvas, veined) {
  const size = FACE;
  const scale = size / 512;
  const ctx = canvas.getContext('2d');
  const rand = random(veined ? 71 : 53);
  ctx.fillStyle = 'rgb(150,150,150)';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 7000; i += 1) {
    const tone = rand() < 0.5 ? 255 : 0;
    ctx.fillStyle = `rgba(${tone},${tone},${tone},${(0.04 + rand() * 0.07).toFixed(3)})`;
    ctx.fillRect(rand() * size, rand() * size, (1 + rand() * 1.6) * scale, (1 + rand() * 1.6) * scale);
  }
  ctx.lineWidth = Math.max(1, scale);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  for (let i = 0; i < 700; i += 1) {
    const x = rand() * size;
    const y = rand() * size;
    const run = (3 + rand() * 13) * scale;
    const angle = rand() * Math.PI;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * run, y + Math.sin(angle) * run);
    ctx.stroke();
  }
  if (veined) {
    ctx.strokeStyle = 'rgb(88,88,88)';
    leafVeins(ctx, true);
  }
}

function canvasOf(size) {
  return Object.assign(document.createElement('canvas'), { width: size, height: size });
}
function texture(canvas, colour = true) {
  const map = new CanvasTexture(canvas);
  if (colour) map.colorSpace = SRGBColorSpace;
  map.anisotropy = 8;
  return map;
}

// ---- Shapes ---------------------------------------------------------------------------------

function raysOutline() {
  const points = [];
  for (let i = 0; i < SUN.rays * 2; i += 1) {
    const angle = (i / (SUN.rays * 2)) * Math.PI * 2 + Math.PI / 2;
    const reach = i % 2 === 0 ? SUN.outer : SUN.inner;
    points.push(new Vector2(Math.cos(angle) * reach, Math.sin(angle) * reach));
  }
  return points;
}

// The figure's body: feet together, arms raised and tapering to the hands.
function bodyShape() {
  const shape = new Shape();
  shape.moveTo(-0.27, -1.47);
  shape.quadraticCurveTo(-0.16, -1.2, -0.14, -0.9);
  shape.bezierCurveTo(-0.13, -0.45, -0.38, -0.05, -0.7, 0.2);
  shape.bezierCurveTo(-0.42, 0.02, -0.14, -0.22, 0, -0.42);
  shape.bezierCurveTo(0.14, -0.22, 0.42, 0.02, 0.7, 0.2);
  shape.bezierCurveTo(0.38, -0.05, 0.13, -0.45, 0.14, -0.9);
  shape.quadraticCurveTo(0.16, -1.2, 0.27, -1.47);
  shape.quadraticCurveTo(0, -1.53, -0.27, -1.47);
  return shape;
}

// One half of a leaf, flat, from the midrib out to its edge. `side` is -1 for the left half.
function leafHalf(side, length, width) {
  const along = 20;
  const across = 4;
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let i = 0; i <= along; i += 1) {
    const t = i / along;
    const half = (width / 2) * Math.sin(Math.PI * t ** 0.88) ** 0.82; // widest a little below the middle
    for (let j = 0; j <= across; j += 1) {
      const s = j / across;
      // The leaf bellies forward a little along its length, and its tip curls back.
      positions.push(side * s * half, t * length, length * (0.05 * Math.sin(Math.PI * t) - 0.05 * t * t));
      uvs.push(0.5 + (side * s * half) / width, t);
    }
  }
  for (let i = 0; i < along; i += 1) {
    for (let j = 0; j < across; j += 1) {
      const a = i * (across + 1) + j;
      const b = a + 1;
      const c = a + across + 1;
      const d = c + 1;
      if (side > 0) indices.push(a, b, c, b, d, c);
      else indices.push(a, c, b, b, c, d);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

// Brings the UVs ExtrudeGeometry gives (the shape's own units) into the 0..1 square of a texture.
function fitUvs(geometry, span, centreY = 0) {
  const uv = geometry.attributes.uv;
  for (let i = 0; i < uv.count; i += 1) uv.setXY(i, uv.getX(i) / span + 0.5, (uv.getY(i) - centreY) / span + 0.5);
}

// ---- Scene ----------------------------------------------------------------------------------

function init(root) {
  const story = root.querySelector('[data-story]');
  const stage = root.querySelector('[data-stage]');
  const steps = [...root.querySelectorAll('[data-step]')];
  const mount = root.querySelector('[data-scene]');
  const pageColumn = root.querySelector('[data-frame]');
  const pins = [...root.querySelectorAll('[data-pin]')].map((el) => ({ el, leaf: Number(el.dataset.pin) }));
  const trail = root.querySelector('[data-trail]');
  const trailLinks = trail ? [...trail.querySelectorAll('a')] : [];

  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 200);
  scene.background = new Color();

  // --- Materials ---
  // Card: matt, with a tooth the light can catch.
  const card = (options) => new MeshStandardMaterial({ roughness: 0.93, metalness: 0, bumpScale: 2.2, dithering: true, ...options });
  const tooth = texture(canvasOf(FACE), false);
  const veins = texture(canvasOf(FACE), false);
  drawRelief(tooth.image, false);
  drawRelief(veins.image, true);
  const discCanvas = canvasOf(FACE);
  const raysCanvas = canvasOf(FACE);
  const figureCanvas = canvasOf(FACE);
  const leafCanvas = canvasOf(FACE);
  const budCanvas = canvasOf(FACE);
  const discFace = card({ map: texture(discCanvas), bumpMap: tooth });
  const raysFace = card({ map: texture(raysCanvas), bumpMap: tooth });
  const figureFace = card({ map: texture(figureCanvas), bumpMap: tooth });
  const leafFace = card({ map: texture(leafCanvas), bumpMap: veins, side: DoubleSide });
  const budFace = card({ map: texture(budCanvas), bumpMap: veins, side: DoubleSide });
  const core = card({ color: CORE });
  const brass = new MeshStandardMaterial({ metalness: 1, roughness: 0.3 });

  // --- The emblem ---
  const emblem = new Group();
  scene.add(emblem);
  const casts = (mesh, receives = true) => {
    mesh.castShadow = true;
    mesh.receiveShadow = receives;
    return mesh;
  };
  const parts = []; // everything that lifts off the wall on arrival: { object, at, flat, from }

  const outline = raysOutline();
  const raysGeometry = new ExtrudeGeometry(new Shape(outline), { depth: CARD, bevelEnabled: false });
  fitUvs(raysGeometry, SUN.outer * 2);
  const rays = casts(new Mesh(raysGeometry, [raysFace, core]));
  emblem.add(rays);
  parts.push({ object: rays, at: SUN.raysAt, flat: WALL + 0.01, from: INTRO.rays });

  // CylinderGeometry's materials run: side, then the two caps.
  const disc = casts(new Mesh(new CylinderGeometry(SUN.disc, SUN.disc, CARD, 96).rotateX(Math.PI / 2), [core, discFace, discFace]));
  emblem.add(disc);
  parts.push({ object: disc, at: SUN.discAt, flat: WALL + 0.01 + CARD, from: INTRO.disc });

  const tree = new Group();
  tree.position.y = TREE.y;
  tree.scale.setScalar(TREE.scale);
  emblem.add(tree);
  const figure = new Group();
  const cut = { depth: CARD, bevelEnabled: true, bevelThickness: 0.007, bevelSize: 0.007, bevelSegments: 2, curveSegments: 28 };
  const bodyGeometry = new ExtrudeGeometry(bodyShape(), cut);
  fitUvs(bodyGeometry, 1.9, -0.65);
  figure.add(casts(new Mesh(bodyGeometry, figureFace)));
  const head = casts(new Mesh(new CylinderGeometry(HEAD.radius, HEAD.radius, CARD + 0.014, 48).rotateX(Math.PI / 2), figureFace));
  head.position.set(0, HEAD.y, CARD / 2);
  figure.add(head);
  tree.add(figure);
  parts.push({ object: figure, at: TREE.at / TREE.scale, flat: (WALL + 0.01 + CARD * 2) / TREE.scale, from: INTRO.figure });

  const pinGeometry = new CylinderGeometry(PIN, PIN, 1, 8).rotateX(Math.PI / 2);
  const leaves = LEAVES.map((spec, k) => {
    // Turned to point its own way, then leaned so its tip stands out from the wall.
    const holder = new Group();
    holder.rotation.order = 'ZXY';
    holder.rotation.z = -spec.angle * DEG;
    holder.position.set(spec.base[0], spec.base[1], 0);
    const halves = [-1, 1].map((side) => {
      const half = new Mesh(leafHalf(side, spec.length, spec.width), leafFace);
      half.castShadow = true;
      holder.add(half);
      return half;
    });
    const tip = new Object3D();
    tip.position.set(0, spec.length + 0.06, 0);
    holder.add(tip);
    // The pin that holds it off the disc: straight back from a third of the way up the leaf,
    // where the leaf itself hides it from the front.
    const pin = new Mesh(pinGeometry, brass);
    pin.castShadow = true;
    pin.position.set(spec.base[0] + Math.sin(spec.angle * DEG) * spec.length * PIN_AT, spec.base[1] + Math.cos(spec.angle * DEG) * spec.length * PIN_AT, 0);
    tree.add(holder, pin);
    const leaf = { spec, holder, halves, tip, pin, open: 0, phase: k * 1.7, rate: 0.5 + k * 0.07 };
    parts.push({ object: holder, at: spec.at / TREE.scale, flat: (WALL + 0.012 + CARD * 3 + k * 0.004) / TREE.scale, from: INTRO.leaves + k * INTRO.apart, leaf });
    return leaf;
  });

  // The new leaf, made the same way.
  const bud = (() => {
    const holder = new Group();
    holder.rotation.order = 'ZXY';
    holder.rotation.z = -BUD.angle * DEG;
    holder.position.set(BUD.base[0], BUD.base[1], BUD.at / TREE.scale);
    const halves = [-1, 1].map((side) => {
      const half = new Mesh(leafHalf(side, BUD.length, BUD.width), budFace);
      half.castShadow = true;
      holder.add(half);
      return half;
    });
    const tip = new Object3D();
    tip.position.set(0, BUD.length + 0.04, 0);
    holder.add(tip);
    holder.visible = false;
    tree.add(holder);
    return { holder, halves, tip };
  })();

  // --- The wall: it shows nothing but the shadows that fall on it ---
  const wall = new Mesh(new PlaneGeometry(60, 40), new ShadowMaterial({ opacity: 0.13 }));
  wall.position.set(0, 0, WALL);
  wall.receiveShadow = true;
  scene.add(wall);

  // --- Light ---
  const studio = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = studio.fromScene(room, 0.04).texture;
  scene.environmentIntensity = ROOM;
  room.dispose();
  studio.dispose();
  const rim = new DirectionalLight(RIM.colour, RIM.intensity);
  rim.position.copy(RIM.from).multiplyScalar(30);
  const key = new DirectionalLight(KEY.colour, KEY.intensity);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.radius = 7;
  key.shadow.bias = -0.0006;
  key.shadow.normalBias = 0.012;
  Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 5, far: 60 });
  key.shadow.camera.updateProjectionMatrix();
  scene.add(rim, key, key.target);
  const lightFrom = new Vector3();

  // --- The lens: the scene is drawn to a picture with its depth, then that picture is drawn to the
  // screen with everything off the plane of focus softened. ---
  const film = new WebGLRenderTarget(1, 1, { samples: 4, depthTexture: new DepthTexture(1, 1), colorSpace: SRGBColorSpace });
  const lens = new ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      tPicture: { value: film.texture },
      tDepth: { value: film.depthTexture },
      uNear: { value: 0.1 },
      uFar: { value: 200 },
      uFocus: { value: 10 },
      uAperture: { value: LENS.aperture },
      uBlur: { value: 0 }, // in pixels of the picture
      uPixel: { value: new Vector2(1, 1) },
    },
    vertexShader: 'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }',
    fragmentShader: `
      #include <common>
      #include <packing>
      uniform sampler2D tPicture;
      uniform sampler2D tDepth;
      uniform float uNear;
      uniform float uFar;
      uniform float uFocus;
      uniform float uAperture;
      uniform float uBlur;
      uniform vec2 uPixel;
      varying vec2 vUv;
      float distanceAt( vec2 uv ) {
        return - perspectiveDepthToViewZ( texture2D( tDepth, uv ).x, uNear, uFar );
      }
      // How soft a point at this distance is: nothing at the plane of focus, more either side of it.
      float softness( float distance ) {
        return clamp( abs( 1.0 / uFocus - 1.0 / distance ) * uAperture - 0.06, 0.0, 1.0 );
      }
      void main() {
        float here = distanceAt( vUv );
        float soft = softness( here );
        vec4 sum = texture2D( tPicture, vUv );
        float count = 1.0;
        float turn = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) * PI2;
        for ( int i = 0; i < ${LENS.taps}; i ++ ) {
          float reach = sqrt( ( float( i ) + 0.5 ) / ${LENS.taps}.0 );
          float angle = float( i ) * 2.39996323 + turn;
          vec2 uv = vUv + vec2( cos( angle ), sin( angle ) ) * reach * uBlur * uPixel;
          float there = distanceAt( uv );
          // A neighbour spreads over this point as far as its own softness reaches. One that lies
          // behind this point cannot spread over it, only show round it as far as this point is soft.
          float spread = softness( there );
          if ( there > here ) spread = min( spread, soft );
          float weight = smoothstep( reach - 0.08, reach + 0.08, spread );
          sum += texture2D( tPicture, uv ) * weight;
          count += weight;
        }
        gl_FragColor = sum / count;
        #include <colorspace_fragment>
      }`,
  });
  const print = new Scene();
  print.add(new Mesh(new PlaneGeometry(2, 2), lens));
  const printer = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // --- Theme: every colour comes from the page's CSS custom properties ---
  function applyTheme() {
    const style = getComputedStyle(document.documentElement);
    const read = (name) => style.getPropertyValue(name).trim();
    scene.background.set(read('--ground'));
    cardStock(discCanvas.getContext('2d'), read('--sun'), 97);
    drawRays(raysCanvas, read('--ray'), read('--sun'), outline);
    cardStock(figureCanvas.getContext('2d'), read('--figure'), 41, 0.3); // dark card shows its fibres less
    drawLeaf(leafCanvas, read('--leaf'), read('--vein'), 23);
    drawLeaf(budCanvas, read('--bud'), read('--leaf'), 67);
    [discFace, raysFace, figureFace, leafFace, budFace].forEach((material) => { material.map.needsUpdate = true; });
    brass.color.set(read('--wire'));
    wall.material.color.set(read('--shadow'));
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, narrow: false, column: null, ratio: Math.min(window.devicePixelRatio || 1, 2), lens: true };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const drag = { on: false, id: 0, x: 0, speed: 0 };
  let live = false; // is the stage on screen
  let target = 0; // scroll position within the story, 0..2
  let progress = 0;
  let velocity = 0;
  let clock = 0; // seconds the emblem has been in view
  let built = 0; // seconds since the parts began to lift off the wall
  let twist = 0; // the turn the reader has given the emblem by dragging
  let running = false;
  let lastTime = 0;
  let slowFrames = 0;
  let countedFrames = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Where every part is: lifted off the wall as far as the arrival has got, and, while the camera
  // is on the leaves, the leaves brought forward and opened a little more.
  function pose() {
    const shown = smooth(clamp((progress - 0.45) / 0.4, 0, 1)) * (1 - smooth(clamp((progress - 1.3) / 0.4, 0, 1)));
    parts.forEach((part) => {
      const lifted = smoother(clamp((built - part.from) / INTRO.lift, 0, 1));
      const leaf = part.leaf;
      part.object.position.z = lerp(part.flat, part.at + (leaf ? shown * 0.2 : 0), lifted);
      if (!leaf) return;
      // A leaf unfolds as it lifts, leans out, and is never quite still.
      const flutter = Math.sin(clock * leaf.rate + leaf.phase);
      const fold = (lerp(FOLD.closed, lerp(FOLD.rest, FOLD.shown, shown), lifted) + flutter * 1.3 * lifted) * DEG;
      leaf.halves[0].rotation.y = fold;
      leaf.halves[1].rotation.y = -fold;
      leaf.holder.rotation.x = (leaf.spec.lean + shown * 5 + flutter * 0.8) * DEG * lifted;
      leaf.holder.rotation.z = (-leaf.spec.angle + Math.sin(clock * leaf.rate * 0.7 + leaf.phase * 1.3) * 0.7 * lifted) * DEG;
      // Its pin runs from the disc's face out to the leaf's foot.
      const back = (SUN.discAt + CARD / 2) / TREE.scale;
      const reach = leaf.holder.position.z + Math.sin(leaf.holder.rotation.x) * leaf.spec.length * PIN_AT - 0.012;
      const length = Math.max(0.001, reach - back);
      leaf.pin.scale.z = length;
      leaf.pin.position.z = back + length / 2;
      leaf.pin.visible = lifted > 0.3;
    });
    // The new leaf grows when the camera comes to the leaves, and stays.
    const grown = smoother(clamp((progress - 0.55) / 0.4, 0, 1)) * smoother(clamp((built - INTRO.leaves) / INTRO.lift, 0, 1));
    bud.holder.visible = grown > 0.01;
    bud.holder.scale.setScalar(Math.max(0.001, grown));
    const quiver = Math.sin(clock * 0.9 + 4);
    const budFold = (lerp(FOLD.closed, BUD.fold, grown) + quiver * 2) * DEG;
    bud.halves[0].rotation.y = budFold;
    bud.halves[1].rotation.y = -budFold;
    bud.holder.rotation.x = (BUD.lean + quiver) * DEG;
    emblem.rotation.y = twist;
  }

  function frame() {
    const index = clamp(Math.floor(progress), 0, STOPS.length - 2);
    const t = travel(progress - index);
    const from = view.narrow ? { ...STOPS[index], ...STOPS[index].narrow } : STOPS[index];
    const to = view.narrow ? { ...STOPS[index + 1], ...STOPS[index + 1].narrow } : STOPS[index + 1];

    // A window much wider than it is tall has room to spare beside the emblem, so the camera
    // comes a little closer there and the emblem fills more of it.
    const closer = view.narrow ? 1 : clamp(1.42 - view.aspect * 0.26, 0.82, 1);
    const distance = closer * Math.exp(lerp(Math.log(from.dist), Math.log(to.dist), t));
    const around = (lerp(from.around, to.around, t) + pointer.x * 3) * DEG;
    const above = (lerp(from.above, to.above, t) + pointer.y * -1.6) * DEG;
    focus.set(lerp(from.at[0], to.at[0], t), lerp(from.at[1], to.at[1], t), 0);
    eye.set(
      focus.x + distance * Math.sin(around) * Math.cos(above),
      focus.y + distance * Math.sin(above),
      distance * Math.cos(around) * Math.cos(above),
    );
    camera.position.copy(eye);
    camera.lookAt(focus);
    camera.near = clamp(distance * 0.2, 0.5, 5);
    camera.far = distance + 30;
    const lift = view.narrow ? lerp(from.lift, to.lift, t) : 0;
    const across = lerp(from.across, to.across, t);
    const shiftX = !view.narrow && view.column ? (view.column.left + view.column.width * across) / view.width - 0.5 : 0;
    camera.setViewOffset(view.width, view.height, -shiftX * view.width, lift * view.height, view.width, view.height);

    // The light follows the pointer, and the shadows with it.
    lightFrom.copy(KEY.from);
    lightFrom.x += pointer.x * KEY.follow[0];
    lightFrom.y -= pointer.y * KEY.follow[1];
    key.position.copy(lightFrom.normalize().multiplyScalar(30));

    pose();

    if (view.lens) {
      lens.uniforms.uNear.value = camera.near;
      lens.uniforms.uFar.value = camera.far;
      lens.uniforms.uFocus.value = distance;
      renderer.setRenderTarget(film);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(print, printer);
    } else {
      renderer.render(scene, camera);
    }

    // Each leaf is named, just beyond its tip, while the camera is on the leaves.
    const naming = smooth(clamp((progress - 0.74) / 0.2, 0, 1)) * (1 - smooth(clamp((progress - 1.2) / 0.22, 0, 1)));
    camera.updateMatrixWorld();
    pins.forEach((pin) => {
      pin.el.style.opacity = String(naming);
      const leaf = pin.el.dataset.pin === 'bud' ? bud : leaves[pin.leaf];
      if (naming < 0.01 || !leaf) return;
      leaf.tip.getWorldPosition(point).project(camera);
      pin.el.style.transform = `translate(${((point.x * 0.5 + 0.5) * view.width).toFixed(1)}px, ${((-point.y * 0.5 + 0.5) * view.height).toFixed(1)}px)`;
    });
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
    clock += dt;
    built += dt;

    // The camera follows the scroll on a critically damped spring, so it gathers speed and comes
    // to rest without a jolt, however the wheel or trackpad delivers its steps.
    const stiffness = 38;
    velocity += (stiffness * (target - progress) - 2 * Math.sqrt(stiffness) * velocity) * dt;
    progress += velocity * dt;
    if (Math.abs(target - progress) < 0.0003 && Math.abs(velocity) < 0.002) {
      progress = target;
      velocity = 0;
    }
    pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 3));
    pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 3));

    // A push from the reader turns the emblem a little; it swings back to face the room.
    if (!drag.on) {
      twist += drag.speed * dt;
      drag.speed *= Math.exp(-dt * 3);
      twist *= Math.exp(-dt * 2.2);
    }
    twist = clamp(twist, -0.7, 0.7);

    frame();

    // If this machine cannot keep up, give up the lens first, which costs the most, and after
    // that render fewer pixels rather than fewer frames.
    if (view.ratio > 1 || view.lens) {
      countedFrames += 1;
      if (elapsedFrame > 0.024) slowFrames += 1;
      if (countedFrames >= 45) {
        if (slowFrames > 22) {
          if (view.lens) view.lens = false;
          else view.ratio = Math.max(1, view.ratio - 0.25);
          sizePicture();
        }
        countedFrames = 0;
        slowFrames = 0;
      }
    }

    // The leaves are never quite still, so the scene keeps drawing for as long as it is on screen.
    requestAnimationFrame(tick);
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
    view.narrow = !(width >= 900 && view.aspect > 1.05);
    const column = pageColumn ? pageColumn.getBoundingClientRect() : null;
    const whole = mount.getBoundingClientRect();
    view.column = column && column.width ? { left: column.left - whole.left, width: column.width } : null;
    sizePicture();
    camera.aspect = view.aspect;
    wake();
  }
  function sizePicture() {
    renderer.setPixelRatio(view.ratio);
    renderer.setSize(view.width, view.height, false);
    const wide = Math.round(view.width * view.ratio);
    const high = Math.round(view.height * view.ratio);
    film.setSize(wide, high);
    lens.uniforms.uPixel.value.set(1 / wide, 1 / high);
    lens.uniforms.uBlur.value = LENS.blur * high;
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
    if (live) { resize(); wake(); }
  }, { rootMargin: '10% 0px' });
  observer.observe(stage);

  window.addEventListener('scroll', readScroll, { passive: true });
  window.addEventListener('resize', () => { resize(); readScroll(); });
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(mount);

  window.addEventListener('pointermove', (event) => {
    if (!live || reducedMotion.matches) return;
    if (drag.on && event.pointerId === drag.id) {
      const moved = (event.clientX - drag.x) * 0.005;
      twist += moved;
      drag.speed = lerp(drag.speed, moved * 60, 0.4);
      drag.x = event.clientX;
      return;
    }
    if (event.pointerType === 'touch') return;
    const rect = canvas.getBoundingClientRect();
    pointer.tx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    pointer.ty = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
  }, { passive: true });
  // Drag sideways to turn the emblem. Vertical drags stay with the page (touch-action).
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
  };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);

  document.addEventListener('ll:theme', applyTheme);
  document.addEventListener('visibilitychange', wake);
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    document.documentElement.classList.remove('story-live');
  });

  mount.appendChild(canvas);
  applyTheme();
  readScroll();
  progress = target;
  built = -INTRO.wait;
  // Arriving part-way down the story (a reload, a shared link): the emblem is already assembled.
  if (progress > 0.35) built = 60;
  live = true;
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
  console.warn('Tree: 3D scene unavailable, showing still images instead.', error);
}
