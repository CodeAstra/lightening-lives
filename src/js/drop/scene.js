// Design 09 · Drop: the 3D scene.
//
// One dried blood spot card lies open among thousands of closed ones. On load its cover swings
// back, a drop of blood falls from above into the collection circle, and the spot it makes soaks
// into the paper. As the reader scrolls, the camera rises over the sample, then the cover
// folds shut and the camera pulls back: one sample, then a batch, then a map of India laid out in
// cards and seen from straight above, north up. On the map the cards of a state light up for what
// the reader has chosen to see (a condition, or where the company has worked); the states' borders
// are drawn over the cards as lines, the states a layer marks are named, and pointing at a state,
// or choosing it from the page's menu, picks it out. The same renderer later shows a single unused card beside the contact options.
//
// The card follows the company's own: a small matchbook card with a cover flap that carries the
// logo, one dashed collection circle on filter paper underneath, and a pocket with a barcode and
// sample code. Its drawing here is this design's, not a copy of the printed artwork.
//
// Only the drop, the cover and the camera move; the card stays where it lies. One soft key light
// gives the paper its shading and the cover and the drop their shadows, and the light is balanced
// so a surface facing straight up keeps the page's exact colours.

import {
  BoxGeometry, BufferAttribute, CanvasTexture, Color, DirectionalLight, Fog, Group, HemisphereLight,
  InstancedBufferAttribute, InstancedMesh, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial, Object3D, PCFShadowMap,
  PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, ShadowMaterial, SphereGeometry, Vector2, Vector3, Vector4, WebGLRenderer,
} from 'three';
import logoUrl from '../../../assets/logo.png';
import { GRID, PLACES, RUNS } from './india-cells.js';
import { STATES } from './india-states.js';
import { BORDERS } from './india-borders.js';
import { LAYERS } from './map-layers.js';

const DEG = Math.PI / 180;
const FOV = 30;

// The closed card, and the layers it is made of. Lengths along the card are shares of its height,
// measured from the hinge at the top.
const CARD = { w: 0.5, h: 1.1 };
const LAYER = { back: 0.008, paper: 0.004, pocket: 0.006, flap: 0.006 };
const THICKNESS = LAYER.back + LAYER.paper + LAYER.pocket + LAYER.flap;
const FLAP = 0.53; // the cover flap, hinged at the top edge
const POCKET = 0.47; // the barcode pocket at the foot
const PAPER = { from: 0.045, to: 0.6, width: 0.86 }; // filter paper, tucked into the pocket
const RING = { at: 0.285, r: 0.155 }; // the one collection circle: centre along the card, radius
// Every card carries its own code: a shared prefix, then six digits. They are illustrative, not
// real samples. The open card has a fixed one; the field's are generated, each one different.
const CODE_PREFIX = 'SCM / ';
const OPEN_CARD_CODE = 100001;
const OPEN_CARD_SEED = 41.3; // picks its barcode's pattern, as each field card's seed does
const fieldCode = (index) => 100000 + ((index * 617531 + 4127) % 900000);
// Where the pocket's print sits, as shares of the pocket's width and height
const BARCODE = { x0: 0.15, x1: 0.85, y0: 0.17, y1: 0.66, modules: 64 };
// A barcode is a row of four-module symbols, each one of these bar/space patterns. Built this way no
// bar or gap ever runs wider than four modules, as on a real code, and 14 of every 24 modules are ink.
const BAR_SYMBOLS = [0b1011, 0b1101, 0b1001, 0b0110, 0b1010, 0b0101];
const BAR_FILL = 14 / 24;
const BAR_TAPS = 10; // samples the shader takes across the barcode under one pixel
const CODE_ROW = { y0: 0.715, y1: 0.865, baseline: 0.82, font: 52 };
const OPEN = 106 * DEG; // how far the cover stands back when open

// The sample: one drop into the one circle. `at` is when it is let go, in seconds from the start;
// `dx` and `dz` are where it lands, measured from the middle of the spot; `soak` is its share of the
// finished spot. It is slowed to about a third of real speed. (This is a list so that the sample can
// be made of more than one drop: add entries, and share `soak` out between them so it sums to 1.)
const DROPS = [
  { at: 1.5, dx: 0, dz: 0, soak: 1 },
];
const DROP = { radius: 0.032, from: 1.8, fall: 0.58, land: 0.14, soak: 1.7 };

// Light. A surface facing straight up receives SKY + KEY * sin(elevation) = pi, which is exactly
// what a matte material needs to show its own colour unchanged.
const KEY = { from: new Vector3(-1.5, 2.7, 1.9), intensity: 1.75 };
const SKY = Math.PI - KEY.intensity * (KEY.from.y / KEY.from.length());

// Where the subject sits in the stage. `across` and `up` are the shares of the available width and
// height it may fill, and `at` is how far across that width its centre sits. Beside the text, the
// available width is the page's own centred column, not the window, so text and subject stay
// together however wide the window is.
const WIDE = { across: 0.8, at: 0.74, up: 0.84, shiftY: 0 }; // text on the left, scene centre-right
const NARROW = { across: 0.86, at: 0.5, up: 0.46, shiftY: 0.2 }; // scene in the upper half, text below
const PANEL = { across: 0.84, at: 0.5, up: 0.86, shiftY: 0 }; // the contact section's own frame

// Camera stops. `span` and `tall` are how much of the world must fit across and up the subject's
// share of the view. `fog` and `haze` are multiples of the camera's distance to its subject: cards
// beyond `fog` fade into the page colour, and so do cards nearer than `haze`, which leaves only
// the subject's own depth in focus.
const OFF = [-2, -1];
const STOPS = [
  { at: 'card', aim: -0.12, span: 1.9, narrow: 1.3, tall: 1.5, el: 33, az: -30, open: 1, fog: [0.98, 1.7], haze: [0.66, 0.96] },
  { at: 'card', aim: -0.24, span: 1.6, narrow: 1.0, tall: 1.52, el: 61, az: -24, open: 1, fog: [1.2, 2.6], haze: [0.3, 0.72] },
  { at: 'card', aim: 0, span: 9.4, narrow: 5.2, tall: 0, el: 44, az: -13, open: 0, fog: [1.25, 3.3], haze: OFF },
  // The map is seen from straight above, north up (a hair under 90 degrees keeps "up" defined), and it
  // stays put for a second step while the reader chooses what it shows. (On a narrow screen each of
  // the two is fitted to the room its own text leaves: see fitMap.)
  { at: 'india', aim: 0, span: 97, narrow: 96, tall: 112, el: 89.6, az: 0, open: 0, fog: [30, 40], haze: OFF },
  { at: 'india', aim: 0, span: 97, narrow: 96, tall: 112, el: 89.6, az: 0, open: 0, fog: [30, 40], haze: OFF },
];
const MAP_FROM = 2.55; // scroll position from which the cards are being read as a map
// The map first shows where we work, with nothing drawn on it but those places. Borders and state
// names belong to the next step, where the reader chooses what it shows: they come up between these
// two scroll positions, as the map changes over to the reader's choice.
const LINES = [3.4, 3.6];
const RIPPLE = 0.011; // seconds per unit of distance: a change of layer spreads out across the map
// A name sits at the middle of its state. Where neighbours' names would run into each other, or a
// name would cover a place too small to be seen under it, these move it a little, in map units east
// and south.
const NAME_NUDGE = { MP: [-4.2, -0.6], CG: [0.3, 2.4], OD: [3.2, 0.9], DL: [5.4, 0.3] };
const NAMES_FROM = 2.6; // pixels to a map unit: the smallest map that can carry its states' names
// On a narrow screen the map is smaller and the names are not, so they need moving further.
const NAME_NUDGE_NARROW = { GJ: [-4.5, -0.6], MP: [-1.5, -4.2], MH: [1.5, 1.5], CG: [-1.2, 3.4], OD: [7.2, 4.4], DL: [8.2, 0.4], PB: [-1.5, -1], WB: [5.5, 3] };
const CHOICE_FROM = 3.5; // from here the map shows what the reader has chosen, not where we have worked
const MARK = { state: 0.9, hover: 0.6 }; // how far a marked state's cards go to yellow, and a pointed-at state's to white
const BLANK = { at: 'card', aim: -0.2, span: 1.02, narrow: 1.02, tall: 1.34, el: 38, az: -24, open: 1, fog: [30, 40], haze: OFF };

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

// ---- The card's print, drawn in code --------------------------------------------------------

const PX = 512; // canvas pixels across the card's width
const px = (share) => Math.round(share * CARD.h * (PX / CARD.w)); // a share of the card's length, in pixels

function paperStock(ctx, width, height, base, seed, fibres) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, width, height);
  const rand = random(seed);
  for (let i = 0; i < fibres; i += 1) {
    const x = rand() * width;
    const y = rand() * height;
    const length = 4 + rand() * 14;
    const angle = rand() * Math.PI;
    ctx.strokeStyle = rand() < 0.5 ? 'rgba(255,255,255,0.6)' : 'rgba(40,70,40,0.04)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
  }
}

// Cover flap, outside: the company's logo.
function drawFlap(canvas, theme, logo) {
  const ctx = canvas.getContext('2d');
  paperStock(ctx, canvas.width, canvas.height, theme.paper, 11, 500);
  if (logo) {
    const size = canvas.width * 0.9;
    ctx.drawImage(logo, (canvas.width - size) / 2, (canvas.height - size) / 2 - canvas.height * 0.01, size, size);
  }
}

// Filter paper: a cooler, more fibrous sheet than the card stock, so it reads as a separate layer,
// with the one dashed collection circle.
function drawPaper(canvas, theme) {
  const W = canvas.width;
  const ctx = canvas.getContext('2d');
  paperStock(ctx, W, canvas.height, '#f5f7f7', 5, 2600);
  const scale = W / (CARD.w * PAPER.width);
  const cy = (RING.at - PAPER.from) * CARD.h * scale;
  ctx.strokeStyle = theme.ink;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.setLineDash([20, 19]);
  ctx.beginPath();
  ctx.arc(W / 2, cy, RING.r * scale, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
}

let codeFamily = '"Nunito"'; // the page's text face, read from its CSS
function setCodeFont(ctx, size) {
  ctx.font = `700 ${size}px ${codeFamily}, system-ui, sans-serif`;
  ctx.textBaseline = 'alphabetic';
}

// Where the code sits across a pocket: the prefix, then six digit cells of equal width, centred.
function measureCode(ctx) {
  setCodeFont(ctx, CODE_ROW.font);
  const prefix = ctx.measureText(CODE_PREFIX).width;
  let widest = 0;
  for (let digit = 0; digit < 10; digit += 1) widest = Math.max(widest, ctx.measureText(String(digit)).width);
  const advance = Math.ceil(widest) + 2;
  const start = (PX - (prefix + advance * 6)) / 2;
  return { start, digits: start + prefix, advance };
}

// Pocket: only what every card shares, the stock and the code's prefix. Each card's own bars and
// digits are printed over it in the shader.
function drawPocket(canvas, theme, layout) {
  const W = canvas.width;
  const H = canvas.height;
  const ctx = canvas.getContext('2d');
  paperStock(ctx, W, H, theme.paper, 17, 450);
  ctx.fillStyle = theme.ink;
  setCodeFont(ctx, CODE_ROW.font);
  ctx.textAlign = 'left';
  ctx.fillText(CODE_PREFIX, layout.start, H * CODE_ROW.baseline);
}

// The ten digits, one per cell, for the shader to print from. Each cell is a digit cell of
// the pocket's code row, stretched to fill a fixed-size cell here; the shader maps it back.
const DIGIT_CELL = { w: 64, h: 192 };
function drawDigits(canvas, layout) {
  const ctx = canvas.getContext('2d');
  const rowHeight = (CODE_ROW.y1 - CODE_ROW.y0) * px(POCKET);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(DIGIT_CELL.w / layout.advance, 0, 0, DIGIT_CELL.h / rowHeight, 0, 0);
  ctx.fillStyle = '#fff';
  setCodeFont(ctx, CODE_ROW.font);
  ctx.textAlign = 'center';
  const baseline = (CODE_ROW.baseline - CODE_ROW.y0) * px(POCKET);
  for (let digit = 0; digit < 10; digit += 1) ctx.fillText(String(digit), (digit + 0.5) * layout.advance, baseline);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// A closed card seen from above: the flap over the top, the pocket below it.
function drawClosed(canvas, flap, pocket) {
  const ctx = canvas.getContext('2d');
  ctx.drawImage(flap, 0, 0);
  ctx.drawImage(pocket, 0, flap.height);
  // The flap's free edge sits a little proud of the pocket.
  const edge = ctx.createLinearGradient(0, flap.height, 0, flap.height + 14);
  edge.addColorStop(0, 'rgba(30,60,35,0.26)');
  edge.addColorStop(1, 'rgba(30,60,35,0)');
  ctx.fillStyle = edge;
  ctx.fillRect(0, flap.height, canvas.width, 14);
}

// Inside of the cover: plain card stock.
function drawInside(canvas, theme) {
  paperStock(canvas.getContext('2d'), canvas.width, canvas.height, theme.paper, 29, 500);
}

// One blood spot. Alpha falls away from the centre past an uneven edge, so a falling alpha
// threshold makes the spot soak outward the way blood wicks into filter paper.
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

// The soft darkening around a card where it meets its neighbours: a blurred rim with the card's
// own footprint cut out of it, so it never dulls the card itself.
const CONTACT = 0.7; // the footprint's length as a share of the texture
function drawContact(canvas) {
  const size = canvas.width;
  const ctx = canvas.getContext('2d');
  const h = size * CONTACT;
  const w = h * (CARD.w / CARD.h);
  const x = (size - w) / 2;
  const y = (size - h) / 2;
  ctx.clearRect(0, 0, size, size);
  ctx.filter = `blur(${size * 0.035}px)`;
  ctx.fillStyle = '#000';
  ctx.fillRect(x - size * 0.02, y - size * 0.02, w + size * 0.04, h + size * 0.04);
  ctx.filter = 'none';
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillRect(x, y, w, h);
  ctx.globalCompositeOperation = 'source-over';
}

function canvasOf(width, height) {
  return Object.assign(document.createElement('canvas'), { width, height });
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
  const pageColumn = root.querySelector('[data-frame]');
  const railLinks = [...root.querySelectorAll('[data-rail] a')];
  const rail = root.querySelector('[data-rail]');
  const placeList = root.querySelector('[data-places]');
  const placeLabels = new Map([...root.querySelectorAll('[data-place]')].map((el) => [el.dataset.place, el]));
  const partList = root.querySelector('[data-parts]');
  const partLabels = new Map([...root.querySelectorAll('[data-part]')].map((el) => [el.dataset.part, el]));
  const layerInputs = [...root.querySelectorAll('input[name="map-layer"]')];
  const lines = root.querySelector('[data-map-lines]');
  const nameList = root.querySelector('[data-state-names]');

  const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 100);
  scene.fog = new Fog(0xffffff, 1, 10);
  scene.background = new Color();

  // --- Theme: every colour comes from the page's CSS custom properties ---
  const theme = {};
  const flapCanvas = canvasOf(PX, px(FLAP));
  const pocketCanvas = canvasOf(PX, px(POCKET));
  const digitCanvas = canvasOf(DIGIT_CELL.w * 10, DIGIT_CELL.h);
  const closedCanvas = canvasOf(PX, px(FLAP) + px(POCKET));
  const paperCanvas = canvasOf(PX, Math.round(PX * ((PAPER.to - PAPER.from) * CARD.h) / (CARD.w * PAPER.width)));
  const insideCanvas = canvasOf(256, 300);
  const spotCanvas = canvasOf(256, 256);
  const contactCanvas = canvasOf(256, 256);
  const maps = {
    flap: texture(flapCanvas),
    pocket: texture(pocketCanvas),
    closed: texture(closedCanvas),
    paper: texture(paperCanvas),
    inside: texture(insideCanvas),
    spot: texture(spotCanvas),
    digits: texture(digitCanvas),
  };
  drawContact(contactCanvas);
  const contactMap = texture(contactCanvas);
  let logo = null;

  const hazeUniform = { value: new Vector2(-2, -1) };
  const softUniform = { value: 0 };
  // The field fades toward the page colour both far from the camera (ordinary fog) and close to
  // it, and sits back a little overall while the camera is near, so the open card is the only
  // full-strength thing in view.
  const focused = (material, also) => {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uHaze = hazeUniform;
      shader.uniforms.uSoft = softUniform;
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec2 uHaze;\nuniform float uSoft;')
        .replace('#include <fog_fragment>', `
          float llFar = smoothstep( fogNear, fogFar, vFogDepth );
          float llNear = 1.0 - smoothstep( uHaze.x, uHaze.y, vFogDepth );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, max( uSoft, max( llFar, llNear ) ) );`);
      if (also) also(shader);
    };
    if (also) material.customProgramCacheKey = () => 'field-print';
    return material;
  };

  // Every card prints its own barcode and six-digit code. The textures are shared, so the print
  // that differs is drawn per card in the shader: the bars from a pattern seeded by the card, the
  // digits from a strip of the ten numerals. `share` is how much of the face's texture, measured
  // up from the card's foot, is pocket.
  const print = {
    uInk: { value: new Color() },
    uDigits: { value: maps.digits },
    uBar: { value: new Vector4(BARCODE.x0, BARCODE.x1, BARCODE.y0, BARCODE.y1) },
    uCode: { value: new Vector4(0, 1, CODE_ROW.y0, CODE_ROW.y1) }, // first digit's left edge, digit advance, row top, row bottom
  };
  const printed = (share) => (shader) => {
    Object.assign(shader.uniforms, print);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec3 aCodeA;
        attribute vec3 aCodeB;
        attribute float aSeed;
        varying vec3 vCodeA;
        varying vec3 vCodeB;
        varying float vSeed;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vCodeA = aCodeA;
        vCodeB = aCodeB;
        vSeed = aSeed;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uInk;
        uniform sampler2D uDigits;
        uniform vec4 uBar;
        uniform vec4 uCode;
        varying vec3 vCodeA;
        varying vec3 vCodeB;
        varying float vSeed;
        // One module of this card's barcode: which four-module symbol it belongs to is picked by a
        // hash of the symbol's position and the card's seed, then the module reads its bit from it.
        float llBar( float module ) {
          float symbol = floor( module / 4.0 );
          float place = mod( floor( module ), 4.0 );
          float pick = floor( fract( sin( symbol * 12.9898 + vSeed * 78.233 ) * 43758.5453 ) * ${BAR_SYMBOLS.length}.0 );
          float bits = ${BAR_SYMBOLS.map((bits, i) => (i < BAR_SYMBOLS.length - 1 ? `pick < ${i}.5 ? ${bits}.0 : ` : `${bits}.0`)).join('')};
          return mod( floor( bits / exp2( 3.0 - place ) ), 2.0 );
        }
        // How much ink falls on this point of the face. Derivatives are taken outside any branch,
        // and the result is masked rather than branched, so it is well defined everywhere.
        float llPrint( vec2 uv ) {
          float py = 1.0 - uv.y / ${share.toFixed(4)}; // 0 at the pocket's top edge, 1 at the card's foot
          float module = ( uv.x - uBar.x ) / ( uBar.y - uBar.x ) * ${BARCODE.modules.toFixed(1)};
          float width = fwidth( module );
          // The bars are averaged under the pixel, weighted toward its centre. While bars are wider
          // than a pixel the average is narrow and their edges stay sharp; as they shrink below one
          // it widens, so a distant barcode greys into soft stripes, as a printed one does, instead
          // of breaking into dashes.
          float reach = width * mix( 0.75, 1.4, smoothstep( 0.35, 1.0, width ) );
          float ink = 0.0;
          float cover = 0.0;
          for ( int i = 0; i < ${BAR_TAPS}; i ++ ) {
            float t = ( float( i ) + 0.5 ) / ${BAR_TAPS / 2}.0 - 1.0;
            float at = module + t * reach;
            float weight = ( 1.0 - abs( t ) ) * step( 0.0, at ) * step( at, ${BARCODE.modules.toFixed(1)} );
            cover += weight;
            ink += weight * llBar( at );
          }
          // Once a pixel spans whole symbols, the samples are too few: use the barcode's overall tone.
          float soft = fwidth( py ) * 0.5 + 0.00001;
          float rows = smoothstep( uBar.z - soft, uBar.z + soft, py ) * ( 1.0 - smoothstep( uBar.w - soft, uBar.w + soft, py ) );
          float bars = mix( ink, cover * ${BAR_FILL.toFixed(3)}, smoothstep( 2.0, 4.0, width ) ) / ${BAR_TAPS / 2}.0 * rows;

          float cell = ( uv.x - uCode.x ) / uCode.y;
          float row = ( py - uCode.z ) / ( uCode.w - uCode.z );
          vec2 smoothUv = vec2( cell / 10.0, 1.0 - row );
          vec2 gradX = dFdx( smoothUv );
          vec2 gradY = dFdy( smoothUv );
          float inCode = step( 0.0, cell ) * step( cell, 5.999 ) * step( 0.0, row ) * step( row, 1.0 );
          float slot = clamp( floor( cell ), 0.0, 5.0 );
          vec3 triple = slot < 2.5 ? vCodeA : vCodeB;
          float place = slot < 2.5 ? slot : slot - 3.0;
          float digit = floor( ( place < 0.5 ? triple.x : ( place < 1.5 ? triple.y : triple.z ) ) + 0.5 );
          vec2 glyphUv = vec2( ( digit + clamp( fract( cell ), 0.03, 0.97 ) ) / 10.0, 1.0 - row );
          float glyph = textureGrad( uDigits, glyphUv, gradX, gradY ).r * inCode;
          return max( bars, glyph );
        }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        diffuseColor.rgb = mix( diffuseColor.rgb, uInk, llPrint( vMapUv ) );`);
  };
  const fieldTop = focused(new MeshLambertMaterial({ map: maps.closed }), printed(POCKET));
  const fieldEdge = focused(new MeshLambertMaterial());
  const edge = new MeshLambertMaterial(); // card stock seen edge-on, and the plain back
  const flapOutside = new MeshLambertMaterial({ map: maps.flap });
  const flapInside = new MeshLambertMaterial({ map: maps.inside });
  const pocketFace = new MeshLambertMaterial({ map: maps.pocket });
  pocketFace.onBeforeCompile = printed(1);
  pocketFace.customProgramCacheKey = () => 'card-print';
  const paperFace = new MeshLambertMaterial({ map: maps.paper });
  const spotMaterial = new MeshLambertMaterial({ map: maps.spot, alphaTest: 1.01, alphaToCoverage: true });

  // --- The field: one closed card per grid cell inside India's outline ---
  const cells = [];
  RUNS.forEach((row, r) => {
    for (let i = 0; i < row.length; i += 3) {
      for (let c = row[i]; c <= row[i + 1]; c += 1) {
        cells.push({ x: GRID.x0 + (c + 0.5) * GRID.pitchX, z: GRID.z0 + (r + 0.5) * GRID.pitchZ, state: row[i + 2] });
      }
    }
  });
  const nearest = (place) => cells.reduce((best, cell) => (
    Math.hypot(cell.x - place.x, cell.z - place.z) < Math.hypot(best.x - place.x, best.z - place.z) ? cell : best
  ));
  const home = nearest(PLACES.find((place) => place.id === 'hyd')); // the open card lies in Hyderabad's cell
  const field = cells.filter((cell) => cell !== home);

  const cards = new InstancedMesh(
    new BoxGeometry(CARD.w, THICKNESS, CARD.h),
    [fieldEdge, fieldEdge, fieldTop, fieldEdge, fieldEdge, fieldEdge],
    field.length,
  );
  cards.frustumCulled = false;
  cards.receiveShadow = true;
  const rand = random(101);
  const dummy = new Object3D();
  const baseTint = new Float32Array(field.length);
  const codeA = new Float32Array(field.length * 3); // each card's code, as two groups of three digits
  const codeB = new Float32Array(field.length * 3);
  const seeds = new Float32Array(field.length); // and the seed of its barcode
  field.forEach((cell, index) => {
    const digits = String(fieldCode(index)).split('').map(Number);
    codeA.set(digits.slice(0, 3), index * 3);
    codeB.set(digits.slice(3), index * 3);
    seeds[index] = 1 + rand() * 97;
    // Laid out by hand: nearly square to the grid, never exactly
    dummy.position.set(cell.x + (rand() - 0.5) * 0.02, THICKNESS / 2, cell.z + (rand() - 0.5) * 0.024);
    dummy.rotation.set(0, (rand() - 0.5) * 0.06, 0);
    dummy.updateMatrix();
    cards.setMatrixAt(index, dummy.matrix);
    baseTint[index] = 0.955 + rand() * 0.045;
  });
  cards.instanceMatrix.needsUpdate = true;
  cards.geometry.setAttribute('aCodeA', new InstancedBufferAttribute(codeA, 3));
  cards.geometry.setAttribute('aCodeB', new InstancedBufferAttribute(codeB, 3));
  cards.geometry.setAttribute('aSeed', new InstancedBufferAttribute(seeds, 1));
  scene.add(cards);

  // How close each card lies to a place the company has worked: those cards glow on the "our work" layer.
  const nearPlace = new Float32Array(field.length);
  PLACES.forEach((place) => {
    field.forEach((cell, index) => {
      const distance = Math.hypot(cell.x - place.x, cell.z - place.z);
      if (distance < 1.9) nearPlace[index] = Math.max(nearPlace[index], 1 - smooth(clamp((distance - 0.7) / 1.2, 0, 1)) * 0.75);
    });
  });
  const cardState = Int8Array.from(field, (cell) => cell.state);
  // What the map shows. Each state eases toward the level its layer gives it, and toward being picked out.
  const map = {
    chosen: (layerInputs.find((input) => input.checked) || { value: 'sickle' }).value, // the reader's choice
    showing: 'work',
    goal: Float32Array.from(STATES, (state) => LAYERS.work.level(state.id)), // where each state's level is heading
    next: new Float32Array(STATES.length), // and where it will head once a change of layer reaches it
    due: new Float64Array(STATES.length), // when that is (0 = nothing waiting)
    level: new Float32Array(STATES.length),
    hover: new Float32Array(STATES.length),
    places: 1, // how much the cards round our places glow
    hovered: -1, // the state under the pointer
    pinned: -1, // the state chosen by a click or a tap
    amount: 0, // 0 while the cards are still cards, 1 once they are a map
    lines: 0, // 0 until the reader is choosing what the map shows, then 1
    settled: false,
  };
  const picked = () => (map.hovered !== -1 ? map.hovered : map.pinned);

  // The borders: one outline per state, in an SVG laid over the canvas. Seen from straight above, the
  // map is the same picture at a different size and place, so the outlines only need moving and
  // scaling to stay on it. They also take the pointer, so a state is picked out by its true shape.
  const SVG = 'http://www.w3.org/2000/svg';
  const outlineGroup = document.createElementNS(SVG, 'g');
  const outlines = BORDERS.map((d, state) => {
    const path = document.createElementNS(SVG, 'path');
    path.setAttribute('d', d);
    path.dataset.state = String(state);
    outlineGroup.appendChild(path);
    return path;
  });
  if (lines) lines.appendChild(outlineGroup);
  // And the names: every state has one, shown while its layer marks it fully or while it is picked out.
  const names = STATES.map((state) => {
    const item = document.createElement('li');
    const name = document.createElement('b');
    name.textContent = state.n;
    item.appendChild(name);
    if (nameList) nameList.appendChild(item);
    return item;
  });

  // --- The open card: back, filter paper, pocket, and a cover hinged at the top edge ---
  const card = new Group();
  card.position.set(home.x, 0, home.z);
  card.rotation.y = 0.035; // as hand-laid as its neighbours
  const top = -CARD.h / 2; // the hinge end, in card space
  const part = (width, thickness, length, y, z, faces) => {
    const mesh = new Mesh(new BoxGeometry(width, thickness, length), faces);
    mesh.position.set(0, y + thickness / 2, z + length / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };
  // BoxGeometry face order: +x, -x, +y (up), -y (down), +z, -z
  const faces = (up, down = edge) => [edge, edge, up, down, edge, edge];
  card.add(part(CARD.w, LAYER.back, CARD.h, 0, top, faces(edge)));
  card.add(part(CARD.w * PAPER.width, LAYER.paper, (PAPER.to - PAPER.from) * CARD.h, LAYER.back, top + PAPER.from * CARD.h, faces(paperFace)));
  const pocket = part(CARD.w, LAYER.pocket, POCKET * CARD.h, LAYER.back + LAYER.paper, top + (1 - POCKET) * CARD.h, faces(pocketFace));
  // Its code and barcode come from the same shader as the field's, so the card the camera followed
  // looks like its neighbours once its cover is shut.
  const ownDigits = String(OPEN_CARD_CODE).split('').map(Number);
  const onEveryCorner = (values) => new BufferAttribute(
    Float32Array.from({ length: pocket.geometry.attributes.position.count * values.length }, (_, i) => values[i % values.length]),
    values.length,
  );
  pocket.geometry.setAttribute('aCodeA', onEveryCorner(ownDigits.slice(0, 3)));
  pocket.geometry.setAttribute('aCodeB', onEveryCorner(ownDigits.slice(3)));
  pocket.geometry.setAttribute('aSeed', onEveryCorner([OPEN_CARD_SEED]));
  card.add(pocket);
  const hinge = new Group();
  hinge.position.set(0, LAYER.back + LAYER.paper + LAYER.pocket, top);
  const flap = part(CARD.w, LAYER.flap, FLAP * CARD.h, 0, 0, faces(flapOutside, flapInside));
  flap.receiveShadow = false; // nothing stands over the cover, and edge-on to the light it would only shade itself
  hinge.add(flap);
  card.add(hinge);

  const spotGeometry = new PlaneGeometry(1, 1);
  spotGeometry.rotateX(-Math.PI / 2);
  const spot = new Mesh(spotGeometry, spotMaterial);
  // A real spot rarely lands dead centre or fills the circle.
  spot.position.set(-0.012, LAYER.back + LAYER.paper + 0.0008, top + RING.at * CARD.h + 0.008);
  spot.rotation.y = 0.7;
  spot.scale.set(RING.r * 2 * 0.9, 1, RING.r * 2 * 0.84);
  spot.receiveShadow = true;
  card.add(spot);

  // The drop that makes it: a bead that falls, flattens where it lands, and is gone into the paper.
  const surface = LAYER.back + LAYER.paper;
  const dropGeometry = new SphereGeometry(DROP.radius, 28, 20);
  const drops = DROPS.map((drop) => {
    const bead = new Mesh(dropGeometry, new MeshPhongMaterial({ shininess: 110, specular: 0x6a5050, transparent: true }));
    bead.position.set(spot.position.x + drop.dx, surface + DROP.radius, spot.position.z + drop.dz);
    bead.castShadow = true;
    bead.visible = false;
    card.add(bead);
    return bead;
  });
  scene.add(card);

  // Points on the card that the part labels are pinned to
  const anchor = (parent, x, y, z) => {
    const point = new Object3D();
    point.position.set(x, y, z);
    parent.add(point);
    return point;
  };
  const anchors = {
    cover: anchor(hinge, -CARD.w * 0.3, 0, FLAP * CARD.h * 0.62),
    circle: anchor(card, -RING.r * 0.72, THICKNESS / 2, top + RING.at * CARD.h + RING.r * 0.7),
    code: anchor(card, -CARD.w * 0.36, THICKNESS, top + (1 - POCKET * 0.3) * CARD.h),
  };

  // --- Light ---
  const sky = new HemisphereLight(0xffffff, 0xffffff, SKY);
  const key = new DirectionalLight(0xffffff, KEY.intensity);
  key.position.set(home.x + KEY.from.x, KEY.from.y, home.z + KEY.from.z);
  key.target.position.set(home.x, 0, home.z);
  key.castShadow = true;
  // The soft filter reads the shadow map across a disc. That disc has to stay narrower than the
  // card's thinnest layer allows (about 0.01 across, for the 0.004 filter paper), or each lit
  // face speckles with the shadow of its own underside. Map size and radius are set together to
  // keep it there: doubling one means halving the other.
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.radius = 5;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.003;
  Object.assign(key.shadow.camera, { left: -1.5, right: 1.5, top: 1.5, bottom: -1.5, near: KEY.from.length() - 1.6, far: KEY.from.length() + 1.6 });
  key.shadow.camera.updateProjectionMatrix();
  scene.add(sky, key, key.target);

  // The bare surface between and beyond the cards shows only the shadows that fall on it.
  const ground = new Mesh(new PlaneGeometry(8, 8).rotateX(-Math.PI / 2), new ShadowMaterial({ opacity: 0.22 }));
  ground.position.set(home.x, 0.0005, home.z);
  ground.receiveShadow = true;
  scene.add(ground);
  // A soft darkening around the open card, where it meets its neighbours
  const contact = new Mesh(
    new PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
    new MeshBasicMaterial({ map: contactMap, transparent: true, depthWrite: false, opacity: 0.2 }),
  );
  contact.position.set(home.x, THICKNESS + 0.0015, home.z);
  contact.rotation.y = card.rotation.y;
  contact.scale.set(CARD.h / CONTACT, 1, CARD.h / CONTACT);
  contact.renderOrder = 2;
  scene.add(contact);

  function applyTheme() {
    const style = getComputedStyle(document.documentElement);
    const read = (name) => style.getPropertyValue(name).trim();
    theme.mist = read('--mist');
    theme.paper = read('--paper');
    theme.ink = read('--canopy');
    theme.sun = read('--sun');
    theme.meadow = read('--meadow');
    codeFamily = read('--ff-body') || codeFamily;
    drops.forEach((bead) => bead.material.color.set(read('--drop') || read('--blood')));
    scene.background.set(theme.mist);
    scene.fog.color.set(theme.mist);
    sky.groundColor.set(theme.mist); // light bounced back up off the surface takes the page's tint
    drawFlap(flapCanvas, theme, logo);
    const layout = measureCode(pocketCanvas.getContext('2d'));
    drawPocket(pocketCanvas, theme, layout);
    drawClosed(closedCanvas, flapCanvas, pocketCanvas);
    drawDigits(digitCanvas, layout);
    print.uInk.value.set(theme.ink);
    print.uCode.value.set(layout.digits / PX, layout.advance / PX, CODE_ROW.y0, CODE_ROW.y1);
    drawPaper(paperCanvas, theme);
    drawInside(insideCanvas, theme);
    drawSpot(spotCanvas, hexToRgb(read('--blood')));
    Object.values(maps).forEach((map) => { map.needsUpdate = true; });
    edge.color.set(theme.paper);
    fieldEdge.color.set(theme.paper);
    ground.material.color.set(theme.ink);
    contact.material.color.set(theme.ink);
    paintField(true);
  }

  const sunColor = new Color();
  const meadowColor = new Color();
  const tint = new Color();
  const painted = { glow: -1, far: -1 };
  let glow = 0; // how far the marks have come up, as the camera arrives over the map
  let far = 0; // how far the cards have turned from paper to the green of a map
  // Up close a card is paper. From far away the field turns meadow green so the map reads against
  // the page. On the map, a state's cards turn sun yellow by as much as the layer marks it, the
  // cards round our places glow on the "our work" layer, and a state being pointed at lightens.
  function paintField(force) {
    if (!force && map.settled && Math.abs(glow - painted.glow) < 0.004 && Math.abs(far - painted.far) < 0.004) return;
    sunColor.set(theme.sun);
    meadowColor.set(theme.meadow);
    const base = tint.set(1, 1, 1).lerp(meadowColor, far);
    const br = base.r, bg = base.g, bb = base.b;
    const sr = sunColor.r, sg = sunColor.g, sb = sunColor.b;
    if (!cards.instanceColor) cards.setColorAt(0, tint);
    const colours = cards.instanceColor.array;
    for (let index = 0; index < field.length; index += 1) {
      const state = cardState[index];
      const mark = Math.max(map.level[state] * MARK.state, nearPlace[index] * map.places) * glow;
      const light = map.hover[state] * MARK.hover * map.amount;
      const shade = baseTint[index];
      let r = (br + (sr - br) * mark) * shade;
      let g = (bg + (sg - bg) * mark) * shade;
      let b = (bb + (sb - bb) * mark) * shade;
      r += (1 - r) * light; g += (1 - g) * light; b += (1 - b) * light;
      colours[index * 3] = r; colours[index * 3 + 1] = g; colours[index * 3 + 2] = b;
    }
    cards.instanceColor.needsUpdate = true;
    // The card the camera followed lies in Hyderabad's cell, one of our places.
    const own = Math.max(map.level[home.state] * MARK.state, map.places) * glow;
    tint.set(1, 1, 1).lerp(meadowColor, far).lerp(sunColor, own);
    flapOutside.color.copy(tint);
    pocketFace.color.copy(tint);
    painted.glow = glow;
    painted.far = far;
  }

  // A change of layer spreads across the map from the middle of what the new layer marks: each state
  // turns when the change reaches it.
  function showLayer(name, now) {
    map.showing = name;
    const layer = LAYERS[name];
    let x = 0, z = 0, weight = 0;
    STATES.forEach((state) => {
      const level = layer.level(state.id);
      if (level >= 0.9) { x += state.x; z += state.z; weight += 1; }
    });
    const from = weight ? { x: x / weight, z: z / weight } : PLACES.find((place) => place.id === 'hyd');
    STATES.forEach((state, index) => {
      map.next[index] = layer.level(state.id);
      map.due[index] = now + Math.hypot(state.x - from.x, state.z - from.z) * RIPPLE * 1000;
    });
  }

  // The map eases toward its layer, and toward and away from the state that is picked out.
  function easeMap(now, dt) {
    const step = 1 - Math.exp(-dt * 7);
    const chosen = picked();
    let moving = false;
    const toward = (value, goal) => {
      if (Math.abs(goal - value) < 0.002) return goal;
      moving = true;
      return value + (goal - value) * step;
    };
    for (let state = 0; state < STATES.length; state += 1) {
      if (map.due[state]) {
        if (now >= map.due[state]) { map.goal[state] = map.next[state]; map.due[state] = 0; }
        moving = true;
      }
      map.level[state] = toward(map.level[state], map.goal[state]);
      map.hover[state] = toward(map.hover[state], state === chosen ? 1 : 0);
    }
    map.places = toward(map.places, LAYERS[map.showing].places);
    map.settled = !moving;
    return moving;
  }

  // Picking a state out: its outline is drawn heavier and on top, its name is shown, and the page is
  // told, so it can say what the map knows about that state.
  let announced = null;
  function pickOut() {
    const state = picked();
    outlines.forEach((path, index) => path.classList.toggle('is-on', index === state));
    if (state !== -1) outlineGroup.appendChild(outlines[state]);
    names.forEach((item, index) => item.classList.toggle('is-on', index === state));
    const detail = { state: state === -1 ? null : STATES[state].id, pinned: map.pinned === -1 ? null : STATES[map.pinned].id };
    const key = `${detail.state}|${detail.pinned}`;
    if (key !== announced) {
      announced = key;
      document.dispatchEvent(new CustomEvent('ll:map-state', { detail }));
    }
    wake();
  }
  const hover = (state) => { if (state !== map.hovered) { map.hovered = state; pickOut(); } };
  const keep = (state) => { if (state !== map.pinned) { map.pinned = state; pickOut(); } };
  const stateOf = (target) => {
    const path = target && target.closest ? target.closest('[data-state]') : null;
    return path ? Number(path.dataset.state) : -1;
  };

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, layout: WIDE, across: WIDE.across, shiftX: 0, ratio: Math.min(window.devicePixelRatio || 1, 2) };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let mode = null; // 'story' | 'blank' | null (nothing on screen)
  let target = 0; // scroll position within the story, 0..3
  let progress = 0;
  let velocity = 0;
  let introStart = 0;
  let introDone = false;
  let opened = 0; // page load: how far the cover has swung open so far, 0..1
  let soaked = 0; // and how far the spot has soaked into the paper, 0..1
  let running = false;
  let lastTime = 0;
  let slowFrames = 0;
  let countedFrames = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // On a narrow screen the text lies under the map, and how much of the stage it leaves depends on
  // the screen and on the text. So each map stop is measured: the map gets the room above its own
  // step's text, as it stands when the camera arrives, and sits in the middle of that room.
  const mapRoom = new Map(); // camera stop -> { up, shiftY }
  function fitMap() {
    mapRoom.clear();
    if (view.layout !== NARROW) return;
    STOPS.forEach((stop, index) => {
      const text = stop.at === 'india' && steps[index] ? steps[index].querySelector('.step-text') : null;
      if (!text || !text.offsetHeight) return;
      const above = text.getBoundingClientRect().top - steps[index].getBoundingClientRect().top;
      const free = clamp(above / view.height, 0.3, 0.56);
      mapRoom.set(stop, { up: free * 0.9, shiftY: 0.5 - free / 2 });
    });
  }
  const roomFor = (stop) => mapRoom.get(stop) || view.layout;

  function distanceFor(stop) {
    const tan = Math.tan((FOV * DEG) / 2);
    const across = (view.layout === NARROW ? stop.narrow : stop.span) / (2 * tan * view.aspect * view.across);
    const up = stop.tall / (2 * tan * roomFor(stop).up);
    return Math.max(across, up);
  }

  function pin(label, object) {
    object.getWorldPosition(point).project(camera);
    label.style.transform = `translate(${((point.x * 0.5 + 0.5) * view.width).toFixed(1)}px, ${((-point.y * 0.5 + 0.5) * view.height).toFixed(1)}px)`;
  }

  function frame() {
    const blank = mode === 'blank';
    const index = blank ? 0 : clamp(Math.floor(progress), 0, STOPS.length - 2);
    const from = blank ? BLANK : STOPS[index];
    const to = blank ? BLANK : STOPS[index + 1];
    const t = blank ? 0 : travel(progress - index);

    const distance = Math.exp(lerp(Math.log(distanceFor(from)), Math.log(distanceFor(to)), t));
    // The camera leans a little toward the pointer while it is among the cards. Over the map it does
    // not: the map stays square to the window.
    map.amount = blank ? 0 : smooth(clamp((progress - MAP_FROM) / 0.42, 0, 1));
    const lean = 1 - map.amount;
    const elevation = (lerp(from.el, to.el, t) + pointer.y * -1.4 * lean) * DEG;
    const azimuth = (lerp(from.az, to.az, t) + pointer.x * 2.2 * lean) * DEG;

    // The cover folds over the first half of the pull-back, easing in and out like a hand closing it.
    const open = lerp(from.open, to.open, smoother(clamp(t / 0.55, 0, 1))) * (blank ? 1 : opened);
    hinge.rotation.x = -OPEN * open;
    contact.material.opacity = 0.22 * open;

    const atCard = (stop) => (stop.at === 'card' ? 1 : 0);
    const cardness = lerp(atCard(from), atCard(to), t);
    focus.set(home.x * cardness, 0.05 * cardness, lerp(1.2, home.z + lerp(from.aim, to.aim, t), cardness));
    eye.set(
      focus.x + distance * Math.cos(elevation) * Math.sin(azimuth),
      focus.y + distance * Math.sin(elevation),
      focus.z + distance * Math.cos(elevation) * Math.cos(azimuth),
    );
    camera.position.copy(eye);
    camera.lookAt(focus);
    camera.near = clamp(distance * 0.12, 0.05, 30);
    camera.far = distance * 3 + 80;
    camera.setViewOffset(view.width, view.height, -view.shiftX * view.width, lerp(roomFor(from).shiftY, roomFor(to).shiftY, t) * view.height, view.width, view.height);

    scene.fog.near = distance * lerp(from.fog[0], to.fog[0], t);
    scene.fog.far = distance * lerp(from.fog[1], to.fog[1], t);
    hazeUniform.value.set(distance * lerp(from.haze[0], to.haze[0], t), distance * lerp(from.haze[1], to.haze[1], t));
    softUniform.value = blank ? 0 : 0.42 * (1 - smooth(clamp((distance - 5) / 12, 0, 1)));
    cards.visible = !blank;
    // Shadows only matter while the cover can be seen standing; far away they are sub-pixel.
    key.castShadow = distance < 40;

    glow = map.amount;
    far = blank ? 0 : smooth(clamp((distance - 40) / 110, 0, 1));
    paintField(false);

    renderer.render(scene, camera);

    // Borders and names come up with the reader's choice of layer.
    map.lines = blank ? 0 : smooth(clamp((progress - LINES[0]) / (LINES[1] - LINES[0]), 0, 1));
    if (lines) {
      lines.style.opacity = String(map.lines);
      lines.classList.toggle('is-live', map.lines > 0.98);
    }
    if (nameList) nameList.style.opacity = String(map.lines);
    if (map.lines > 0.001) {
      camera.updateMatrixWorld();
      // Where the map's origin falls on the stage, and how many pixels one unit of it covers
      point.set(0, 0, 0).project(camera);
      const x0 = (point.x * 0.5 + 0.5) * view.width;
      const y0 = (-point.y * 0.5 + 0.5) * view.height;
      point.set(1, 0, 0).project(camera);
      const scale = (point.x * 0.5 + 0.5) * view.width - x0;
      outlineGroup.setAttribute('transform', `translate(${x0.toFixed(2)} ${y0.toFixed(2)}) scale(${scale.toFixed(4)})`);
      const chosen = picked();
      // Below this size the names a layer shows would run into one another, so only a picked state is named.
      const roomy = scale >= NAMES_FROM ? 1 : 0;
      names.forEach((item, state) => {
        // While our places are named on the map, a picked state is shown by its outline alone: its name
        // would sit on top of theirs.
        const shown = (state === chosen ? 1 : clamp((map.level[state] - 0.8) / 0.2, 0, 1) * roomy) * (1 - map.places);
        item.style.opacity = shown.toFixed(3);
        if (shown < 0.01) return;
        const nudge = (view.layout === NARROW ? NAME_NUDGE_NARROW : NAME_NUDGE)[STATES[state].id] || [0, 0];
        item.style.transform = `translate(${(x0 + (STATES[state].x + nudge[0]) * scale).toFixed(1)}px, ${(y0 + (STATES[state].z + nudge[1]) * scale).toFixed(1)}px)`;
      });
    }
    if (placeList) {
      // Our places are pinned once the camera has all but arrived over the map.
      const named = (blank ? 0 : smooth(clamp((progress - 2.76) / 0.2, 0, 1))) * map.places;
      placeList.style.opacity = String(named);
      if (named > 0.01) {
        camera.updateMatrixWorld();
        PLACES.forEach((place) => {
          const label = placeLabels.get(place.id);
          if (!label) return;
          point.set(place.x, 0, place.z).project(camera);
          label.style.transform = `translate(${((point.x * 0.5 + 0.5) * view.width).toFixed(1)}px, ${((-point.y * 0.5 + 0.5) * view.height).toFixed(1)}px)`;
        });
      }
    }
    if (partList) {
      // The card's parts are named while the camera is over the sample, and only then.
      const naming = blank ? 0 : smooth(clamp((progress - 0.62) / 0.3, 0, 1)) * (1 - smooth(clamp((progress - 1.08) / 0.22, 0, 1)));
      partList.style.opacity = String(naming);
      if (naming > 0.01) {
        camera.updateMatrixWorld();
        partLabels.forEach((label, name) => { if (anchors[name]) pin(label, anchors[name]); });
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
    const elapsedFrame = (now - lastTime) / 1000;
    const dt = clamp(elapsedFrame, 0.001, 0.05);
    lastTime = now;
    let moving = false;

    // The camera follows the scroll on a critically damped spring: it gathers speed and comes to
    // rest without a jolt at either end, however the wheel or trackpad delivers its steps.
    const stiffness = 42;
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

    // Page load: the cover swings open, then the drop falls into the circle and the spot it makes
    // soaks outward. A reader who has already scrolled on finds the sample taken.
    if (!introDone && mode === 'story') {
      const elapsed = progress > 1.2 ? Infinity : (now - introStart) / 1000;
      opened = smoother(clamp((elapsed - 0.4) / 1.25, 0, 1));
      soaked = 0;
      DROPS.forEach((drop, k) => {
        const bead = drops[k];
        const fallen = (elapsed - drop.at) / DROP.fall;
        if (fallen <= 0) return;
        if (fallen < 1) {
          // Falling: it gathers speed, and stretches a little as it does
          const stretch = 1 + 0.26 * fallen;
          bead.visible = true;
          bead.material.opacity = 1;
          bead.position.y = surface + DROP.radius + DROP.from * (1 - fallen * fallen);
          bead.scale.set(1 / Math.sqrt(stretch), stretch, 1 / Math.sqrt(stretch));
          return;
        }
        // Landed: it flattens and is taken up by the paper, and the spot spreads from it
        const flat = clamp(((fallen - 1) * DROP.fall) / DROP.land, 0, 1);
        bead.visible = flat < 1;
        bead.position.y = surface + DROP.radius * (1 - 0.82 * flat);
        bead.scale.set(1 + 1.15 * flat, 1 - 0.84 * flat, 1 + 1.15 * flat);
        bead.material.opacity = 1 - flat * flat;
        soaked += drop.soak * (1 - (1 - clamp((elapsed - drop.at - DROP.fall) / DROP.soak, 0, 1)) ** 3);
      });
      const last = DROPS[DROPS.length - 1];
      introDone = elapsed > last.at + DROP.fall + DROP.soak;
      moving = true;
    }
    if (introDone) {
      opened = 1;
      soaked = 1;
    }
    if (mode === 'blank' || introDone) drops.forEach((bead) => { bead.visible = false; });
    spotMaterial.alphaTest = mode === 'blank' ? 1.01 : lerp(1.01, 0.5, soaked); // the contact section's card is unused

    // The map shows where we have worked as the camera arrives, then whatever the reader has chosen.
    const showing = progress < CHOICE_FROM ? 'work' : map.chosen;
    if (showing !== map.showing) showLayer(showing, now);
    if (mode === 'story' && easeMap(now, dt)) moving = true;

    frame();

    // If this machine cannot keep up while things are moving, render fewer pixels rather than fewer frames.
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
    view.layout = mode === 'blank' ? PANEL : width >= 900 && view.aspect > 1.05 ? WIDE : NARROW;
    const whole = mount.getBoundingClientRect();
    const room = view.layout === WIDE && pageColumn ? pageColumn.getBoundingClientRect() : whole;
    view.across = (room.width * view.layout.across) / width;
    view.shiftX = (room.left - whole.left + room.width * view.layout.at) / width - 0.5;
    if (mode === 'story') fitMap();
    renderer.setPixelRatio(view.ratio);
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

  window.addEventListener('scroll', () => {
    readScroll();
    if (target < LINES[0]) { hover(-1); keep(-1); } // scrolled back to where no state can be picked out
  }, { passive: true });
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
  // Pointing at a state picks it out for as long as the pointer is on it. A click or a tap keeps it
  // picked out; a click or tap on the same state, or off the map, lets it go.
  if (lines) {
    lines.addEventListener('pointerover', (event) => { if (event.pointerType !== 'touch') hover(stateOf(event.target)); });
    lines.addEventListener('pointerout', (event) => { if (stateOf(event.relatedTarget) === -1) hover(-1); });
  }
  stage.addEventListener('click', (event) => {
    if (mode !== 'story' || map.lines < 0.98 || (event.target.closest && event.target.closest('a'))) return;
    const state = stateOf(event.target);
    keep(state === map.pinned ? -1 : state);
  });
  layerInputs.forEach((input) => input.addEventListener('change', () => {
    if (input.checked) map.chosen = input.value;
    wake();
  }));
  // The card's print uses the page's typeface and the logo; redraw as each becomes available.
  const loadCodeFont = () => {
    const family = getComputedStyle(document.documentElement).getPropertyValue('--ff-body').trim() || codeFamily;
    if (document.fonts && document.fonts.load) document.fonts.load(`700 52px ${family}`).then(() => { applyTheme(); wake(); }).catch(() => {});
  };
  document.addEventListener('ll:theme', () => { applyTheme(); loadCodeFont(); requestAnimationFrame(refit); wake(); });
  // The text is reset when its typeface arrives, or is changed, and may then leave the map a different room.
  const refit = () => { if (mode === 'story') { fitMap(); wake(); } };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', refit);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  loadCodeFont();
  const image = new Image();
  image.onload = () => { logo = image; applyTheme(); wake(); };
  image.src = logoUrl;
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
  console.warn('Drop: 3D scene unavailable, showing still images instead.', error);
}
