// Design 04 · Strand: the 3D scene.
//
// A strand of DNA built like a paper model, and lit like a photograph of one. Every base is a tile
// of dyed card with its letter pressed into it, and the tiles climb round the strand like the steps
// of a spiral stair, two to a step, between two wire rails.
// The page opens looking along the strand as it writes itself into the distance. As the reader
// scrolls, the camera travels forward to a stretch where five tiles turn over to sun yellow, one
// for each group of inherited conditions the company tests for, each with the logo's sun rising
// behind it; then it closes on the first of them.
//
// The four letters take the four colours of the company's logo, and sun yellow is kept for the
// tiles a test has found. Every colour and the typeface are read from the page's CSS custom
// properties, so the comparison toolbar's variations reach the scene too.

import {
  BoxGeometry, CanvasTexture, Color, Curve, DepthTexture, DirectionalLight, ExtrudeGeometry, Fog, Group, InstancedMesh,
  Mesh, MeshStandardMaterial, Object3D, OrthographicCamera, PCFShadowMap, PMREMGenerator, PerspectiveCamera,
  PlaneGeometry, SRGBColorSpace, Scene, ShaderMaterial, Shape, TubeGeometry, Vector2, Vector3, WebGLRenderTarget,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const DEG = Math.PI / 180;
const FOV = 30;

// The strand keeps the proportions of real DNA: about ten and a half letters to a full turn, each
// a third of the strand's radius further along. It twists the way DNA does, to the right.
const RADIUS = 1;
const RISE = 0.3;
const TWIST = (360 / 10.5) * DEG;
const TILE = { from: 0.07, width: 0.46, thick: 0.05 }; // a tile runs from near the axis out to its rail
const LENGTH = RADIUS - TILE.from;
const MID = TILE.from + LENGTH / 2;
const RAIL = 0.027; // radius of the two wire rails the tiles hang between
const LETTER_AT = 0.27; // the letter's centre, as a share of the tile's length in from its outer end
const LETTER_SIZE = 0.68; // and its type size, as a share of the tile's width
const BASES = ['A', 'T', 'G', 'C'];
const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
const SUN = { rays: 16, outer: 0.5, inner: 0.37, thick: 0.018 }; // the cut-out behind a tile once it has turned over

// The strand's letters are illustrative: a thousand of them, generated from a fixed seed so that
// every visit sees the same strand. They are not a real sequence.
const STRAND = (() => {
  let state = 11;
  let letters = '';
  for (let i = 0; i < 1000; i += 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    letters += 'ACGT'[state >>> 30];
  }
  return letters;
})();
// The tiles the story lights up, one for each group of conditions the company tests for. They are
// two full turns of the strand apart, so all five face the same way and can be seen together.
const MARKS = [300, 321, 342, 363, 384];
// Set by hand: how far a tile may sit off true, in radians of pitch and lean and in length along the strand.
const LOOSE = { pitch: 0.085, lean: 0.06, slip: 0.018 };

// Light, as for a small model on a table. Tile faces look back along the strand, toward the camera.
// A warm key light comes from behind the camera, so each tile throws a shadow on the next; the
// room's own walls and ceiling fill the shadows softly; a cool light from the far side picks out
// edges. Together they bring a face in full light to about its own colour, no brighter.
const KEY = { from: new Vector3(-0.62, 0.7, 0.35).normalize(), intensity: 2.45, colour: 0xfff2e0 };
const RIM = { from: new Vector3(0.55, 0.3, -0.78).normalize(), intensity: 0.5, colour: 0xe3ecff };
const ROOM = 0.8;
// The lens. Close to a small model, a camera holds only a shallow slice of it in focus: the tiles
// at the subject are sharp and those nearer or further soften. `aperture` sets how quickly, and
// `blur` is the softest it gets, as a share of the view's height.
const LENS = { aperture: 8.5, blur: 0.012, taps: 28 };
const SHADOW = { half: 14, ahead: 7, size: 2048 }; // the lit volume travels with the camera's subject

// Camera stops. The camera sits behind and above the strand and looks along it, so the letters
// read away into the distance. `at` is the letter looked at, `along` the angle between the line of
// sight and the strand, and `around` where the camera sits round it: 90 is directly above, more
// leans the far end of the strand to the left. `fog` is how far beyond the subject tiles start to
// fade into the page, and where they are gone.
// On a narrow screen the strand sits above the text, not beside it, so each stop has its own
// framing there: `across` and `lift` are where the letter looked at sits, as shares of the view's
// width from the left and of its height above centre.
const STOPS = [
  { at: 58, dist: 10.6, along: 34, around: 113, fog: [8, 42], narrow: { dist: 15.5, across: 0.5, lift: 0.25 } },
  { at: MARKS[0] + 12, dist: 13.5, along: 20, around: 100, fog: [18, 80], narrow: { at: MARKS[0] + 26, dist: 34, across: 0.3, lift: 0.215 } },
  { at: MARKS[0], dist: 6.6, along: 46, around: 95, fog: [5, 30], narrow: { dist: 9, across: 0.46, lift: 0.21 } },
];
// When, in the story's progress from stop to stop, the strand settles with the marked tiles on top
// and the tiles turn over: the first at `from`, each of the others `apart` later.
const LOCK = { from: 0.4, over: 0.45 };
const TURN = { from: 0.62, apart: 0.075 };
// Page load: how far past the first stop the strand is written out, and how long that takes.
const INTRO = { reach: 47, seconds: 1.9, wait: 0.55 };
// Where the subject sits beside the text: a share of the way across the page's own column, not
// the window's, so text and strand stay together however wide the window is. `lift` moves it up by
// a share of the view's height. Narrow screens take both from each stop.
const WIDE = { across: 0.71, lift: -0.02 };
const NARROW = {};
// The strand's turn that brings the marked tiles to the top, facing a camera sitting `around` it.
const spinFor = (around) => (90 - around) * DEG - MARKS[0] * TWIST;

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

// ---- A tile, drawn in code ------------------------------------------------------------------

// Texture size: a tile fills a good part of a large screen at the last stop; a phone needs half.
const FACE_W = Math.max(window.innerWidth, window.innerHeight) < 900 ? 256 : 512;
const FACE = { w: FACE_W, h: Math.round((FACE_W * LENGTH) / TILE.width) };
const CORE = '#F6F3EA'; // the board inside a tile, seen at its cut edges

function letterFont(ctx, family) {
  ctx.font = `800 ${Math.round(FACE.w * LETTER_SIZE)}px ${family}, Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
}
// Centred on the capital's own height, so every letter sits at the same place on its tile.
function setLetter(ctx, letter) {
  const capital = ctx.measureText(letter).actualBoundingBoxAscent;
  ctx.fillText(letter, FACE.w / 2, FACE.h * LETTER_AT + capital / 2);
}

// Dyed card is never one flat colour: it is cloudy, and full of fibres and flecks.
function cardStock(ctx, fill, seed) {
  const { w, h } = FACE;
  const scale = w / 512;
  const rand = random(seed);
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 16; i += 1) {
    const x = rand() * w;
    const y = rand() * h;
    const r = (0.16 + rand() * 0.3) * w;
    const cloud = ctx.createRadialGradient(x, y, 0, x, y, r);
    cloud.addColorStop(0, rand() < 0.5 ? 'rgba(255,255,255,0.055)' : 'rgba(70,58,36,0.032)');
    cloud.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = cloud;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  ctx.lineWidth = Math.max(1, scale);
  for (let i = 0; i < 1500; i += 1) {
    const x = rand() * w;
    const y = rand() * h;
    const run = (3 + rand() * 13) * scale;
    const angle = rand() * Math.PI;
    ctx.strokeStyle = rand() < 0.55 ? 'rgba(255,255,255,0.3)' : 'rgba(72,60,40,0.09)';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * run, y + Math.sin(angle) * run);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(64,54,38,0.11)';
  for (let i = 0; i < 300; i += 1) ctx.fillRect(rand() * w, rand() * h, (1 + rand()) * scale, (1 + rand()) * scale);
}

// A tile's face: card, the letter in ink, and the shade the tiles above cast toward the strand's centre.
function drawFace(canvas, letter, fill, ink, family, seed) {
  const { w, h } = FACE;
  const ctx = canvas.getContext('2d');
  cardStock(ctx, fill, seed);
  ctx.globalAlpha = 0.93; // ink soaks in; a little of the card shows through it
  ctx.fillStyle = ink;
  letterFont(ctx, family);
  setLetter(ctx, letter);
  ctx.globalAlpha = 1;
  const shade = ctx.createLinearGradient(0, h, 0, h * 0.36);
  shade.addColorStop(0, 'rgba(56,50,42,0.27)');
  shade.addColorStop(0.45, 'rgba(56,50,42,0.1)');
  shade.addColorStop(1, 'rgba(56,50,42,0)');
  ctx.fillStyle = shade;
  ctx.fillRect(0, h * 0.36, w, h * 0.64);
}

// The same face as a relief, for the light to catch: the card's tooth, and the letter pressed into it.
function drawRelief(canvas, letter, family, seed) {
  const { w, h } = FACE;
  const scale = w / 512;
  const ctx = canvas.getContext('2d');
  const rand = random(seed + 7);
  ctx.fillStyle = 'rgb(150,150,150)';
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 9000; i += 1) {
    const tone = rand() < 0.5 ? 255 : 0;
    ctx.fillStyle = `rgba(${tone},${tone},${tone},${(0.04 + rand() * 0.07).toFixed(3)})`;
    ctx.fillRect(rand() * w, rand() * h, (1 + rand() * 1.6) * scale, (1 + rand() * 1.6) * scale);
  }
  ctx.lineWidth = Math.max(1, scale);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  for (let i = 0; i < 900; i += 1) {
    const x = rand() * w;
    const y = rand() * h;
    const run = (3 + rand() * 13) * scale;
    const angle = rand() * Math.PI;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * run, y + Math.sin(angle) * run);
    ctx.stroke();
  }
  ctx.filter = `blur(${(1.5 * scale).toFixed(1)}px)`;
  ctx.fillStyle = 'rgb(92,92,92)';
  letterFont(ctx, family);
  setLetter(ctx, letter);
  ctx.filter = 'none';
}

// A tile's cut edge: the board inside, between the two coloured papers it is faced with.
function drawEdge(canvas, near, far) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = CORE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const paper = Math.round(canvas.width * 0.14);
  ctx.fillStyle = near;
  ctx.fillRect(0, 0, paper, canvas.height);
  ctx.fillStyle = far;
  ctx.fillRect(canvas.width - paper, 0, paper, canvas.height);
}

function canvasOf(width, height) {
  return Object.assign(document.createElement('canvas'), { width, height });
}
function texture(canvas, colour = true) {
  const map = new CanvasTexture(canvas);
  if (colour) map.colorSpace = SRGBColorSpace;
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
    // The marked tiles are built separately, so they can turn over.
    if (!MARKS.includes(index)) laid[STRAND[index]].push({ index, turn: 0 });
    laid[PAIR[STRAND[index]]].push({ index, turn: Math.PI });
  }
  const rand = random(404);
  const dummy = new Object3D();
  const shade = new Color();
  const base = {};
  // Card: matt, with a tooth the light can catch.
  const card = (maps) => new MeshStandardMaterial({ roughness: 0.93, metalness: 0, bumpScale: 2.6, dithering: true, ...maps });
  BASES.forEach((letter, n) => {
    const faceCanvas = canvasOf(FACE.w, FACE.h);
    const reliefCanvas = canvasOf(FACE.w, FACE.h);
    const edgeCanvas = canvasOf(32, 4);
    const map = texture(faceCanvas);
    const relief = texture(reliefCanvas, false);
    const edge = texture(edgeCanvas);
    const face = written(card({ map, bumpMap: relief }));
    const side = written(card({ map: edge }));
    const tiles = new InstancedMesh(tileGeometry, faces(face, face, side), laid[letter].length);
    laid[letter].forEach(({ index, turn }, i) => {
      place(dummy, index, turn);
      // Set by hand: each tile sits a little off true.
      dummy.rotateY((rand() - 0.5) * LOOSE.pitch);
      dummy.rotateZ((rand() - 0.5) * LOOSE.lean);
      dummy.position.x += (rand() - 0.5) * LOOSE.slip;
      dummy.updateMatrix();
      tiles.setMatrixAt(i, dummy.matrix);
      tiles.setColorAt(i, shade.setScalar(0.94 + rand() * 0.06)); // and no two sheets of card are quite one colour
    });
    tiles.instanceMatrix.needsUpdate = true;
    tiles.frustumCulled = false;
    tiles.castShadow = true;
    tiles.receiveShadow = true;
    strand.add(tiles);
    base[letter] = { canvas: faceCanvas, reliefCanvas, edgeCanvas, map, relief, edge, seed: 31 + n * 17 };
  });

  const length = (STRAND.length - 1) * RISE;
  // Wire: polished enough to carry the room's lights along its length.
  const railMaterial = new MeshStandardMaterial({ metalness: 1, roughness: 0.34 });
  const rails = [0, Math.PI].map((turn) => {
    const rail = new Mesh(new TubeGeometry(new Rail(turn, length), STRAND.length * 6, RAIL, 8, false), railMaterial);
    rail.frustumCulled = false;
    rail.castShadow = true;
    rail.receiveShadow = true;
    strand.add(rail);
    return rail;
  });
  const railIndices = rails[0].geometry.index.count;
  const railStep = 8 * 6; // indices in one ring of a rail

  // --- The marked tiles. Each has its letter on sun-yellow card on its other face and turns over
  // to show it, with the logo's sun, cut from card, rising behind it. ---
  const marked = new Group();
  strand.add(marked);
  const sunCanvas = canvasOf(FACE.w, FACE.w);
  const sunMaterial = card({ map: texture(sunCanvas) });
  const sunGeometry = new ExtrudeGeometry(sunShape(), { depth: SUN.thick, bevelEnabled: false }).rotateY(Math.PI / 2);
  const letterHeight = LENGTH / 2 - LENGTH * LETTER_AT;
  const sites = MARKS.map((index) => {
    const letter = STRAND[index];
    const holder = new Group();
    place(holder, index, 0);
    const foundCanvas = canvasOf(FACE.w, FACE.h);
    const edgeCanvas = canvasOf(32, 4);
    const found = card({ map: texture(foundCanvas), bumpMap: base[letter].relief });
    const shown = card({ map: base[letter].map, bumpMap: base[letter].relief });
    const side = card({ map: texture(edgeCanvas) });
    const tile = new Mesh(tileGeometry, faces(found, shown, side));
    tile.castShadow = true;
    tile.receiveShadow = true;
    const sun = new Mesh(sunGeometry, sunMaterial);
    sun.position.set(TILE.thick * 0.5 + 0.012 + SUN.thick, letterHeight, 0);
    sun.castShadow = true;
    sun.receiveShadow = true;
    sun.visible = false;
    const anchor = new Object3D();
    anchor.position.set(0, letterHeight, 0);
    holder.add(tile, sun, anchor);
    marked.add(holder);
    return { letter, holder, tile, sun, anchor, foundCanvas, edgeCanvas, found, side, turned: 0, speed: 0 };
  });

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
  key.shadow.mapSize.set(SHADOW.size, SHADOW.size);
  // The soft filter's reach has to stay inside a tile's thickness, or lit faces speckle with the
  // shadow of their own far side. Three texels of this map are about 0.04; a tile is 0.05 thick.
  key.shadow.radius = 3;
  key.shadow.bias = -0.0003;
  key.shadow.normalBias = 0.012;
  Object.assign(key.shadow.camera, { left: -SHADOW.half, right: SHADOW.half, top: SHADOW.half, bottom: -SHADOW.half, near: 1, far: 60 });
  key.shadow.camera.updateProjectionMatrix();
  scene.add(rim, key, key.target);
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
    BASES.forEach((letter) => {
      const tile = base[letter];
      tile.ink = read(`--${letter.toLowerCase()}`);
      tile.fill = read(`--${letter.toLowerCase()}-tile`);
      drawFace(tile.canvas, letter, tile.fill, tile.ink, theme.family, tile.seed);
      drawRelief(tile.reliefCanvas, letter, theme.family, tile.seed);
      drawEdge(tile.edgeCanvas, tile.fill, tile.fill);
      tile.map.needsUpdate = true;
      tile.relief.needsUpdate = true;
      tile.edge.needsUpdate = true;
    });
    // The tiles that turn over are faced with sun-yellow card on their other side.
    sites.forEach((site, k) => {
      drawFace(site.foundCanvas, site.letter, theme.sun, base[site.letter].ink, theme.family, 211 + k);
      drawEdge(site.edgeCanvas, base[site.letter].fill, theme.sun);
      site.found.map.needsUpdate = true;
      site.side.map.needsUpdate = true;
    });
    const sunCtx = sunCanvas.getContext('2d');
    sunCtx.save();
    sunCtx.scale(1, FACE.w / FACE.h);
    cardStock(sunCtx, read('--ray'), 97);
    sunCtx.restore();
    sunMaterial.map.needsUpdate = true;
    railMaterial.color.set(read('--rail'));
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, layout: WIDE, shiftX: 0, ratio: Math.min(window.devicePixelRatio || 1, 2), lens: true };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const drag = { on: false, id: 0, x: 0, speed: 0 };
  let live = false; // is the stage on screen
  let target = 0; // scroll position within the story, 0..2
  let progress = 0;
  let velocity = 0;
  let idle = 0; // the strand's own slow turn
  let twist = 0; // and the turn the reader has given it by dragging
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
    const t = travel(progress - index);
    const narrow = view.layout === NARROW;
    const from = narrow ? { ...STOPS[index], ...STOPS[index].narrow } : STOPS[index];
    const to = narrow ? { ...STOPS[index + 1], ...STOPS[index + 1].narrow } : STOPS[index + 1];

    // A window much wider than it is tall has room to spare beside the strand, so the camera
    // comes a little closer there and the strand fills more of it.
    const closer = narrow ? 1 : clamp(1.42 - view.aspect * 0.26, 0.82, 1);
    const distance = closer * Math.exp(lerp(Math.log(from.dist), Math.log(to.dist), t));
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
    const shiftX = narrow ? lerp(from.across, to.across, t) - 0.5 : view.shiftX;
    const lift = narrow ? lerp(from.lift, to.lift, t) : WIDE.lift;
    camera.setViewOffset(view.width, view.height, -shiftX * view.width, lift * view.height, view.width, view.height);

    scene.fog.near = distance + lerp(from.fog[0], to.fog[0], t);
    scene.fog.far = distance + lerp(from.fog[1], to.fog[1], t);
    aimLight(focus.x + SHADOW.ahead);

    // The strand turns freely until the camera reaches the marked tiles, then settles with them on top.
    const lock = smooth(clamp((progress - LOCK.from) / LOCK.over, 0, 1));
    const rest = spinFor(lerp(from.around, to.around, t));
    const settled = rest + Math.round((idle - rest) / (Math.PI * 2)) * Math.PI * 2;
    strand.rotation.x = lerp(idle, settled, lock) + twist;

    // Turning a tile over: it lifts clear of its neighbours, turns, and settles back, and its sun rises.
    sites.forEach((site) => {
      const lift = Math.sin(clamp(site.turned, 0, 1) * Math.PI);
      site.tile.rotation.y = site.turned * Math.PI;
      site.tile.position.set(-lift * 0.16, lift * 0.3, 0);
      const risen = smooth(clamp((site.turned - 0.35) / 0.65, 0, 1));
      site.sun.visible = risen > 0.01;
      site.sun.scale.setScalar(Math.max(0.001, risen));
      site.sun.rotation.x = (1 - risen) * -1.1;
    });

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

    if (pinList) {
      // Each marked tile is named once it has turned over. Closing on the first, the others' names go.
      camera.updateMatrixWorld();
      const closing = 1 - smooth(clamp((progress - 1.2) / 0.3, 0, 1));
      sites.forEach((site, k) => {
        const label = pins.get(String(k));
        if (!label) return;
        const shown = smooth(clamp(site.turned * 2 - 1, 0, 1)) * (k === 0 ? 1 : closing);
        label.style.opacity = String(shown);
        if (shown < 0.01) return;
        site.anchor.getWorldPosition(point);
        pin(label, point.x, point.y, point.z);
      });
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

    // The strand's own slow turn, and whatever turn the reader has given it. At the marked tiles
    // the strand has to sit still to be read, so both ease away there.
    const lock = smooth(clamp((progress - LOCK.from) / LOCK.over, 0, 1));
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

    // The marked tiles turn over one after another as the camera arrives, each on a spring of its
    // own, and turn back if the reader scrolls back up.
    const turnStiffness = 40;
    sites.forEach((site, k) => {
      const want = progress > TURN.from + k * TURN.apart ? 1 : 0;
      site.speed += (turnStiffness * (want - site.turned) - 2 * Math.sqrt(turnStiffness) * site.speed) * dt;
      site.turned += site.speed * dt;
      if (Math.abs(want - site.turned) < 0.0005 && Math.abs(site.speed) < 0.003) {
        site.turned = want;
        site.speed = 0;
      } else moving = true;
    });

    // Page load: the strand is set down tile by tile, away from the reader, as far as the eye can
    // follow it. Everything beyond that is already lost in the distance, and appears at the end.
    if (!introDone) {
      const elapsed = (now - introStart) / 1000;
      const start = STOPS[0].at * RISE;
      front.value = lerp(start - 13, start + INTRO.reach, smooth(clamp(elapsed / INTRO.seconds, 0, 1)));
      rails.forEach((rail) => rail.geometry.setDrawRange(0, Math.floor(clamp((front.value - 2) / length, 0, 1) * (railIndices / railStep)) * railStep));
      marked.visible = false;
      introDone = elapsed > INTRO.seconds;
      if (introDone) {
        front.value = 1e6;
        rails.forEach((rail) => rail.geometry.setDrawRange(0, Infinity));
        marked.visible = true;
      }
      moving = true;
    }

    frame();

    // If this machine cannot keep up, give up the lens first, which costs the most, and after
    // that render fewer pixels rather than fewer frames.
    if (moving && (view.ratio > 1 || view.lens)) {
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
    view.shiftX = column && column.width ? (column.left - whole.left + column.width * WIDE.across) / width - 0.5 : 0;
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
  readScroll();
  progress = target;
  // Arriving part-way down the story: the tiles up to there have already turned.
  sites.forEach((site, k) => { site.turned = progress > TURN.from + k * TURN.apart ? 1 : 0; });
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
  console.warn('Strand: 3D scene unavailable, showing still images instead.', error);
}
