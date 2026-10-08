// Design 03 · Scale: the 3D scene.
//
// One dried blood spot card lies open among thousands of closed ones. On load its cover swings
// back and a blood spot soaks into the collection circle. As the reader scrolls, the camera rises
// over the sample, then the cover folds shut and the camera pulls back: one sample, then a batch,
// then a map of India laid out in cards. The same renderer later shows a single unused card
// beside the contact options.
//
// The card follows the company's own: a small matchbook card with a cover flap that carries the
// logo, one dashed collection circle on filter paper underneath, and a pocket with a barcode and
// sample code. Its drawing here is this design's, not a copy of the printed artwork.
//
// Nothing floats. The card stays where it lies; only its cover and the camera move. One soft key
// light gives the paper its shading and the cover its shadow, and the light is balanced so a
// surface facing straight up keeps the page's exact colours.

import {
  BoxGeometry, BufferAttribute, CanvasTexture, Color, DirectionalLight, Fog, Group, HemisphereLight,
  InstancedBufferAttribute, InstancedMesh, Mesh, MeshBasicMaterial, MeshLambertMaterial, Object3D, PCFShadowMap,
  PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, ShadowMaterial, Vector2, Vector3, Vector4, WebGLRenderer,
} from 'three';
import logoUrl from '../../../assets/logo.png';
import { GRID, PLACES, SPANS } from './india-cells.js';

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

// Light. A surface facing straight up receives SKY + KEY * sin(elevation) = pi, which is exactly
// what a matte material needs to show its own colour unchanged.
const KEY = { from: new Vector3(-1.5, 2.7, 1.9), intensity: 1.75 };
const SKY = Math.PI - KEY.intensity * (KEY.from.y / KEY.from.length());

// Where the subject sits in the stage, as shares of its width and height.
const WIDE = { across: 0.6, up: 0.84, shiftX: 0.145, shiftY: 0 }; // text on the left, scene centre-right
const NARROW = { across: 0.86, up: 0.46, shiftX: 0, shiftY: 0.2 }; // scene in the upper half, text below
const PANEL = { across: 0.84, up: 0.86, shiftX: 0, shiftY: 0 }; // the contact section's own frame

// Camera stops. `span` and `tall` are how much of the world must fit across and up the subject's
// share of the view. `fog` and `haze` are multiples of the camera's distance to its subject: cards
// beyond `fog` fade into the page colour, and so do cards nearer than `haze`, which leaves only
// the subject's own depth in focus.
const OFF = [-2, -1];
const STOPS = [
  { at: 'card', aim: -0.12, span: 1.9, narrow: 1.3, tall: 1.5, el: 33, az: -30, open: 1, fog: [0.98, 1.7], haze: [0.66, 0.96] },
  { at: 'card', aim: -0.24, span: 1.6, narrow: 1.0, tall: 1.52, el: 61, az: -24, open: 1, fog: [1.2, 2.6], haze: [0.3, 0.72] },
  { at: 'card', aim: 0, span: 9.4, narrow: 5.2, tall: 0, el: 44, az: -13, open: 0, fog: [1.25, 3.3], haze: OFF },
  { at: 'india', aim: 0, span: 97, narrow: 96, tall: 112, el: 83, az: 0, open: 0, fog: [30, 40], haze: OFF },
];
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

function setCodeFont(ctx, size) {
  ctx.font = `500 ${size}px "Anek Latin", system-ui, sans-serif`;
  ctx.fontStretch = 'condensed';
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
  const railLinks = [...root.querySelectorAll('[data-rail] a')];
  const rail = root.querySelector('[data-rail]');
  const placeList = root.querySelector('[data-places]');
  const placeLabels = new Map([...root.querySelectorAll('[data-place]')].map((el) => [el.dataset.place, el]));
  const partList = root.querySelector('[data-parts]');
  const partLabels = new Map([...root.querySelectorAll('[data-part]')].map((el) => [el.dataset.part, el]));

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

  // Cards around the places the company has worked glow sun-yellow in the widest view.
  const lit = [];
  PLACES.forEach((place) => {
    field.forEach((cell, index) => {
      const distance = Math.hypot(cell.x - place.x, cell.z - place.z);
      if (distance < 1.9) lit.push({ index, weight: 1 - smooth(clamp((distance - 0.7) / 1.2, 0, 1)) * 0.75 });
    });
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
    tint.set(1, 1, 1).lerp(meadowColor, far).lerp(sunColor, glow);
    flapOutside.color.copy(tint);
    pocketFace.color.copy(tint);
    lastGlow = glow;
    lastFar = far;
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, layout: WIDE, ratio: Math.min(window.devicePixelRatio || 1, 2) };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let mode = null; // 'story' | 'blank' | null (nothing on screen)
  let target = 0; // scroll position within the story, 0..3
  let progress = 0;
  let velocity = 0;
  let introStart = 0;
  let introDone = false;
  let opened = 0; // page load: how far the cover has swung open so far, 0..1
  let running = false;
  let lastTime = 0;
  let slowFrames = 0;
  let countedFrames = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function distanceFor(stop) {
    const tan = Math.tan((FOV * DEG) / 2);
    const across = (view.layout === NARROW ? stop.narrow : stop.span) / (2 * tan * view.aspect * view.layout.across);
    const up = stop.tall / (2 * tan * view.layout.up);
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
    const elevation = (lerp(from.el, to.el, t) + pointer.y * -1.4) * DEG;
    const azimuth = (lerp(from.az, to.az, t) + pointer.x * 2.2) * DEG;

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
    camera.setViewOffset(view.width, view.height, -view.layout.shiftX * view.width, view.layout.shiftY * view.height, view.width, view.height);

    scene.fog.near = distance * lerp(from.fog[0], to.fog[0], t);
    scene.fog.far = distance * lerp(from.fog[1], to.fog[1], t);
    hazeUniform.value.set(distance * lerp(from.haze[0], to.haze[0], t), distance * lerp(from.haze[1], to.haze[1], t));
    softUniform.value = blank ? 0 : 0.42 * (1 - smooth(clamp((distance - 5) / 12, 0, 1)));
    cards.visible = !blank;
    // Shadows only matter while the cover can be seen standing; far away they are sub-pixel.
    key.castShadow = distance < 40;

    const glow = blank ? 0 : smooth(clamp((progress - 2.5) / 0.42, 0, 1));
    tintField(glow, blank ? 0 : smooth(clamp((distance - 40) / 110, 0, 1)), false);

    renderer.render(scene, camera);

    if (placeList) {
      placeList.style.opacity = String(glow);
      if (glow > 0.01) {
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

    // Page load: the cover swings open, then the blood spot soaks into the circle.
    if (mode === 'blank') {
      spotMaterial.alphaTest = 1.01; // an unused card
    } else if (!introDone) {
      const elapsed = (now - introStart) / 1000;
      opened = smoother(clamp((elapsed - 0.4) / 1.25, 0, 1));
      const soak = clamp((elapsed - 1.55) / 1.5, 0, 1);
      spotMaterial.alphaTest = lerp(1.01, 0.5, 1 - (1 - soak) ** 3);
      introDone = elapsed > 3.1;
      moving = true;
    } else {
      opened = 1;
      spotMaterial.alphaTest = 0.5;
    }

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
  // The card's print uses the page typeface and the logo; redraw as each becomes available.
  if (document.fonts && document.fonts.load) {
    document.fonts.load('500 52px "Anek Latin"').then(() => { applyTheme(); wake(); }).catch(() => {});
  }
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
  console.warn('Scale: 3D scene unavailable, showing still images instead.', error);
}
