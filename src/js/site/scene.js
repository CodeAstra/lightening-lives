// The home page's opening film, ported from the approved design (designs/src/js/lumen/scene.js) with
// the client's chosen drop (0.027 of the card's length, 23 October 2026) as its own and nothing left
// that the comparison toolbar could change. The code printed on the cards is set in the page's label
// typeface (--ff-mono, Nunito), and everything the film shows is read from the page's colour tokens.
//
// The card and the field of cards are Design 09's, but nothing here follows the scroll, and nothing
// is left of that design's stops. The scene plays by itself, as one take of six and a half seconds in
// which the camera never comes to rest until the last frame:
//
//   One drop        the card's cover swings back; a drop of blood swells, hangs, lets go and falls
//                   into the collection circle, and the spot it makes soaks into the paper
//   One batch       the camera is already climbing: the cover folds shut under it and the card is
//                   one of a batch
//   One programme   and it goes on climbing, until the cards are a map of India, seen from straight
//                   above, with the places the company works pinned on it
//
// Everything on screen is a function of the film's time alone, so any moment can be shown directly:
// that is what makes replaying and pausing simple, and why nothing here needs easing springs. The
// film's whole timing is two tables below: TAKE, where the camera is at each second, and TIMING, when
// everything else happens.
//
// The card follows the company's own: a small matchbook card with a cover flap that carries the
// logo, one dashed collection circle on filter paper underneath, and a pocket with a barcode and
// sample code. Its drawing here is this design's, not a copy of the printed artwork.

import {
  BoxGeometry, BufferAttribute, BufferGeometry, CanvasTexture, Color, DirectionalLight, Fog, Group, HemisphereLight,
  InstancedBufferAttribute, InstancedMesh, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial, Object3D, PCFShadowMap,
  PerspectiveCamera, PlaneGeometry, SRGBColorSpace, Scene, ShadowMaterial, Vector2, Vector3, Vector4, WebGLRenderer,
} from 'three';
// The full logo for the card's cover (the design's own 768 px file, never redrawn). It is inlined into
// this bundle, so the canvas that draws it stays same-origin and the site ships no extra file.
import logoUrl from './logo-768.png';
// The map's data: one list of states, places and what the company does where.
import { GRID, LABELS, PLACES, RUNS } from '../map/india-cells.js';
import { STATES } from '../map/india-states.js';
import { LAYERS } from '../map/map-layers.js';

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

// The sample: one drop. It swells from nothing at the point it hangs from, draws out into the shape
// of a drop, lets go, and falls into the middle of the circle. Lengths are in the card's units.
const DROP = {
  // Once it has let go: about a sixth of the collection circle's radius (RING.r). The client asked for
  // it smaller on 13 October 2026 (0.05 became 0.036) and chose 0.027 on 23 October. Do not enlarge it
  // without being asked (DESIGN.md, "Opening film").
  radius: 0.027,
  hang: 0.6, // the point it hangs from, above the paper
};

// Light. A surface facing straight up receives SKY + KEY * sin(elevation) = pi, which is exactly
// what a matte material needs to show its own colour unchanged.
const KEY = { from: new Vector3(-1.5, 2.7, 1.9), intensity: 1.75 };
const SKY = Math.PI - KEY.intensity * (KEY.from.y / KEY.from.length());

// Where the subject sits in the film's frame. `across` and `up` are the shares of the available
// width and height it may fill, centred in that width, and `shiftY` moves it up by that share of the
// height. In the wide layout the film fills the whole opening with the text over its left side, and
// the available width is the room the text leaves: from the text's widest line, plus `GAP` root ems,
// to the right edge of the page's column (R3: the map once ran under the text on wide screens, where
// a fixed share of the column was used). The subject sits a little low, clear of the header.
const WIDE = { across: 0.96, up: 0.79, shiftY: -0.032 };
const NARROW = { across: 0.9, up: 0.86, shiftY: 0 }; // the film in a frame of its own, text above and below
const GAP = 4.5; // rem between the text's widest line and the subject's room: the page's veil is solid
// for 3rem past that line and gone by 5rem (site.css, .hero-veil)

// The camera's one take. Each row is where the camera is at that second (`at`); between rows it
// follows a smooth curve through them (see `curve`), so it has no stop to arrive at or to leave: it
// is moving when the film opens, it keeps moving, and it comes to rest once, on the map. To change
// the film's pace, change the seconds; to change what it shows on the way, change the rest.
// `span` and `tall` are how much of the world must fit across and up the subject's share of the view
// (`narrow` is the span on a small screen), and `lift` is how far above the table the camera looks.
// `aim` moves that point along the card, towards its hinge. `out` is how far the frame has moved off
// the one card, towards holding the whole country. `fog` and `haze` are multiples of the camera's
// distance to its subject: cards beyond `fog` fade into the page colour, and so do cards nearer than
// `haze`, which leaves only the subject's own depth in focus.
const OFF = [-2, -1];
const TAKE = [
  // Low beside the card, so that the drop's fall has height on the screen, and drifting in round it.
  { at: 0, span: 1.76, narrow: 1.54, tall: 1.5, el: 22, az: -38, aim: -0.2, lift: 0.2, out: 0, fog: [0.98, 1.7], haze: [0.66, 0.96] },
  // The drop lands: the nearest the camera comes. From here it only climbs and pulls back.
  { at: 1.6, span: 1.6, narrow: 1.4, tall: 1.36, el: 28, az: -29, aim: -0.2, lift: 0.2, out: 0, fog: [0.98, 1.7], haze: [0.66, 0.96] },
  // Over the sample while the spot soaks into the paper.
  { at: 2.88, span: 2.1, narrow: 1.5, tall: 1.9, el: 46, az: -21, aim: -0.12, lift: 0.1, out: 0, fog: [1.2, 2.6], haze: [0.3, 0.72] },
  // Passing a batch of cards.
  { at: 4.16, span: 9.4, narrow: 5.2, tall: 4.6, el: 64, az: -11, aim: 0, lift: 0.04, out: 0, fog: [1.25, 3.3], haze: OFF },
  // The map, from straight above, north up (a hair under 90 degrees keeps "up" defined).
  { at: 6.4, span: 97, narrow: 96, tall: 112, el: 89.6, az: 0, aim: 0, lift: 0, out: 1, fog: [30, 40], haze: OFF },
];

// When everything else happens, in seconds from the start. The drop is the one thing given time: it
// hangs long enough to be seen as a drop, and falls far slower than a real one would, though briskly
// enough not to keep the film waiting (`release` + `fall` is the second it lands, which is where the
// camera's second row is). Each line under the film stays up long enough to read.
const TIMING = {
  open: [0, 0.48], // the cover swings back
  swell: [0.24, 0.88], // the drop grows where it hangs
  release: 1.04, // it lets go
  fall: 0.56, // and takes this long to reach the paper
  land: 0.16, // the paper draws it in
  soak: 0.96, // and the spot spreads
  shut: [2.72, 3.52], // the cover folds shut again, as the spot finishes spreading
  marked: [5.2, 6.0], // the places the company works come up on the map
  pinned: [5.92, 6.4], // and are pinned and named, as the camera comes to rest
  end: 6.56, // the film is over
};
// The film's seconds run this much faster than the reader's, so that it is over within five seconds
// of starting (6.56 / 1.4 = 4.69 s): moving content that starts by itself and stops by itself within
// five seconds needs no button to pause it (WCAG 2.2.2), and the replay button went on 25 October 2026.
const SPEED = 1.4;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const between = (time, [from, to]) => clamp((time - from) / (to - from), 0, 1);

// A smooth curve through `values` at `times` that never overshoots them (a monotone cubic). It is
// already moving at the first value and at rest on the last, and wherever the values keep rising or
// keep falling it never stops in between: that is what makes the camera's path one take.
function curve(times, values) {
  const last = times.length - 1;
  const gap = (i) => times[i + 1] - times[i];
  const rate = (i) => (values[i + 1] - values[i]) / gap(i);
  const slope = values.map((_, i) => {
    if (i === 0) return rate(0);
    if (i === last) return 0;
    const before = rate(i - 1);
    const after = rate(i);
    if (before * after <= 0) return 0;
    const a = 2 * gap(i) + gap(i - 1);
    const b = gap(i) + 2 * gap(i - 1);
    return (a + b) / (a / before + b / after);
  });
  return (time) => {
    if (time <= times[0]) return values[0];
    if (time >= times[last]) return values[last];
    let i = 0;
    while (time > times[i + 1]) i += 1;
    const h = gap(i);
    const t = (time - times[i]) / h;
    const t2 = t * t;
    const t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * values[i] + (t3 - 2 * t2 + t) * h * slope[i]
      + (3 * t2 - 2 * t3) * values[i + 1] + (t3 - t2) * h * slope[i + 1];
  };
}

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
  const filmRoot = root.querySelector('[data-film]');
  const mount = root.querySelector('[data-film-screen]');
  const pageColumn = root.querySelector('[data-frame]');
  const heroText = root.querySelector('[data-hero-text]');
  const placeList = root.querySelector('[data-places]');
  const placesWrap = root.querySelector('[data-places-wrap]');
  const foot = root.querySelector('.hero-foot'); // the partners' band, laid over the film's foot on a wide screen
  const placeLabels = new Map([...root.querySelectorAll('[data-place]')].map((el) => [el.dataset.place, el]));

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
  const home = nearest(PLACES.find((place) => place.id === 'hyderabad')); // the open card lies in Hyderabad's cell
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

  // How strongly each card is marked once the cards are a map: the nine states and Delhi where the
  // company has worked, as the map's Our work layer marks them (R2: states, not towns). 0.9 is the
  // map's own MARK, so the film's end and the map below agree.
  const marked = new Float32Array(field.length);
  field.forEach((cell, index) => { marked[index] = LAYERS.work.level(STATES[cell.state].id) * 0.9; });

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

  // The drop that makes it. Its surface is a profile spun round an upright axis, and the profile can
  // be anything from a ball to a hanging drop with a drawn-out neck, so it is reshaped as it swells,
  // lets go, falls and lands. `point` draws the top in to a point (0 is a ball); `neck` stretches
  // the top half upwards.
  const surface = LAYER.back + LAYER.paper;
  const RINGS = 32;
  const SIDES = 40;
  const dropGeometry = new BufferGeometry();
  const dropAt = new Float32Array((RINGS + 1) * (SIDES + 1) * 3);
  const dropNormal = new Float32Array(dropAt.length);
  const dropIndex = [];
  for (let j = 0; j < RINGS; j += 1) {
    for (let i = 0; i < SIDES; i += 1) {
      const a = j * (SIDES + 1) + i;
      const c = a + SIDES + 1;
      dropIndex.push(a, c, a + 1, a + 1, c, c + 1);
    }
  }
  dropGeometry.setIndex(dropIndex);
  dropGeometry.setAttribute('position', new BufferAttribute(dropAt, 3));
  dropGeometry.setAttribute('normal', new BufferAttribute(dropNormal, 3));
  const outline = new Float32Array((RINGS + 1) * 2);
  const shaped = { point: -1, neck: -1 };
  function shapeDrop(point, neck) {
    if (Math.abs(point - shaped.point) < 0.002 && Math.abs(neck - shaped.neck) < 0.002) return;
    shaped.point = point;
    shaped.neck = neck;
    for (let j = 0; j <= RINGS; j += 1) {
      const angle = (j / RINGS) * Math.PI; // 0 at the top, pi at the foot
      const up = Math.cos(angle);
      outline[j * 2] = DROP.radius * Math.sin(angle) * (point > 0 ? Math.sin(angle / 2) ** point : 1);
      outline[j * 2 + 1] = DROP.radius * up * (1 + neck * Math.max(0, up));
    }
    for (let j = 0; j <= RINGS; j += 1) {
      const before = Math.max(j - 1, 0);
      const after = Math.min(j + 1, RINGS);
      // The outline runs from top to foot, so its outward normal is its direction turned a quarter-turn.
      let nx = -(outline[after * 2 + 1] - outline[before * 2 + 1]);
      let ny = outline[after * 2] - outline[before * 2];
      if (j === 0) { nx = 0; ny = 1; }
      if (j === RINGS) { nx = 0; ny = -1; }
      const length = Math.hypot(nx, ny) || 1;
      nx /= length;
      ny /= length;
      for (let i = 0; i <= SIDES; i += 1) {
        const turn = (i / SIDES) * Math.PI * 2;
        const k = (j * (SIDES + 1) + i) * 3;
        dropAt[k] = outline[j * 2] * Math.sin(turn);
        dropAt[k + 1] = outline[j * 2 + 1];
        dropAt[k + 2] = outline[j * 2] * Math.cos(turn);
        dropNormal[k] = nx * Math.sin(turn);
        dropNormal[k + 1] = ny;
        dropNormal[k + 2] = nx * Math.cos(turn);
      }
    }
    dropGeometry.attributes.position.needsUpdate = true;
    dropGeometry.attributes.normal.needsUpdate = true;
  }
  shapeDrop(0, 0);
  const bead = new Mesh(dropGeometry, new MeshPhongMaterial({ shininess: 64, specular: 0xe6d2cd, transparent: true }));
  bead.position.set(spot.position.x, surface + DROP.radius, spot.position.z);
  bead.castShadow = true;
  bead.frustumCulled = false; // its shape changes under it
  bead.visible = false;
  card.add(bead);
  scene.add(card);

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
    codeFamily = read('--ff-mono') || read('--ff-body') || codeFamily;
    bead.material.color.set(read('--drop') || read('--blood'));
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
    painted.glow = -1; // the field is repainted with the next frame
  }

  const sunColor = new Color();
  const meadowColor = new Color();
  const tint = new Color();
  const painted = { glow: -1, far: -1 };
  // Up close a card is paper. From far away the field turns meadow blue so the map reads against
  // the page, and the cards that are marked turn life green (--sun). Half-way there is a pale mint
  // (#B6F3DB), not a third blue-green: a marked card is lightened first and moved to green
  // after, as the map on the page is.
  const PALE = 0.45; // the half-way colour: this far from white towards the sun
  function paintField(glow, far, force) {
    if (!force && Math.abs(glow - painted.glow) < 0.004 && Math.abs(far - painted.far) < 0.004) return;
    sunColor.set(theme.sun);
    meadowColor.set(theme.meadow);
    const base = tint.set(1, 1, 1).lerp(meadowColor, far);
    const br = base.r, bg = base.g, bb = base.b;
    const sr = sunColor.r, sg = sunColor.g, sb = sunColor.b;
    const pr = 1 + (sr - 1) * PALE, pg = 1 + (sg - 1) * PALE, pb = 1 + (sb - 1) * PALE;
    if (!cards.instanceColor) cards.setColorAt(0, tint);
    const colours = cards.instanceColor.array;
    for (let index = 0; index < field.length; index += 1) {
      const mark = marked[index] * glow;
      const shade = baseTint[index];
      const t = Math.min(mark, 0.5) * 2; // the way to the pale mint
      const u = Math.max(mark - 0.5, 0) * 2; // and on to the sun
      colours[index * 3] = (br + (pr - br) * t + (sr - pr) * u) * shade;
      colours[index * 3 + 1] = (bg + (pg - bg) * t + (sg - pg) * u) * shade;
      colours[index * 3 + 2] = (bb + (pb - bb) * t + (sb - pb) * u) * shade;
    }
    cards.instanceColor.needsUpdate = true;
    // The card the camera followed lies in Hyderabad's cell, one of our places.
    tint.set(1, 1, 1).lerp(meadowColor, far).lerp(sunColor, glow);
    flapOutside.color.copy(tint);
    pocketFace.color.copy(tint);
    painted.glow = glow;
    painted.far = far;
  }

  // --- State ---
  const view = { width: 0, height: 0, aspect: 1, layout: WIDE, across: WIDE.across, up: WIDE.up, shiftX: 0, shiftY: WIDE.shiftY, ratio: Math.min(window.devicePixelRatio || 1, 2) };
  // The film: where it has got to, and why it is or is not running. Like a video it runs at its own
  // pace from start to end, whatever the page is doing: only the reader's pause button or a hidden
  // tab stops it. While its frame is off screen (`away`) it keeps time without being drawn.
  const film = { time: 0, held: false, ended: false, away: false, started: false };
  let compiled = false; // nothing is drawn until the shaders are ready (see the end of init)
  const playing = () => film.started && !film.held && !film.ended && !document.hidden;
  let running = false;
  let lastTime = 0;
  let slowFrames = 0;
  let countedFrames = 0;
  const eye = new Vector3();
  const focus = new Vector3();
  const point = new Vector3();

  // The camera's path: one curve through the take for each thing about it that changes.
  const takeTimes = TAKE.map((mark) => mark.at);
  const along = (read) => curve(takeTimes, TAKE.map(read));
  const path = {
    elevation: along((mark) => mark.el),
    azimuth: along((mark) => mark.az),
    aim: along((mark) => mark.aim),
    lift: along((mark) => mark.lift),
    out: along((mark) => mark.out),
    fogNear: along((mark) => mark.fog[0]),
    fogFar: along((mark) => mark.fog[1]),
    hazeNear: along((mark) => mark.haze[0]),
    hazeFar: along((mark) => mark.haze[1]),
    distance: null, // depends on the frame's shape: see setDistances()
    furthest: 1,
  };
  function distanceFor(mark) {
    const tan = Math.tan((FOV * DEG) / 2);
    const across = (view.layout === NARROW ? mark.narrow : mark.span) / (2 * tan * view.aspect * view.across);
    const up = mark.tall / (2 * tan * view.up);
    return Math.max(across, up);
  }
  // How far the camera stands from its subject along the take, for a frame of this shape. Distances
  // are kept as logarithms, so that pulling back looks as steady as it is; and once the drop has
  // landed the camera never comes back in, whatever the frame's shape.
  function setDistances() {
    const distances = TAKE.map(distanceFor);
    for (let i = 2; i < distances.length; i += 1) distances[i] = Math.max(distances[i], distances[i - 1]);
    path.distance = curve(takeTimes, distances.map(Math.log));
    path.furthest = distances[distances.length - 1];
  }

  // The drop at a given second: hidden, swelling where it hangs, falling, or being drawn into the paper.
  function dropAtTime(time) {
    const tip = surface + DROP.hang; // the point it hangs from
    const { swell, release, fall, land } = TIMING;
    const lands = release + fall;
    if (time < swell[0] || time >= lands + land) { bead.visible = false; return; }
    bead.visible = true;
    bead.material.opacity = 1;
    const hung = (neck) => tip - DROP.radius * (1 + neck); // where its middle is while its top is at the tip
    if (time < release) {
      // Swelling: it grows from a bead, and its top draws out as its weight comes on
      const grown = smooth(clamp((time - swell[0]) / (swell[1] - swell[0]), 0, 1));
      const heavy = smooth(clamp((time - swell[1]) / (release - swell[1]), 0, 1));
      const size = 0.16 + 0.84 * grown;
      const neck = 0.25 + 0.55 * grown + 0.5 * heavy;
      shapeDrop(0.5 + 0.7 * grown + 0.25 * heavy, neck);
      bead.scale.setScalar(size);
      bead.position.y = tip - DROP.radius * size * (1 + neck);
      return;
    }
    if (time < lands) {
      // Falling: it gathers speed, and its neck draws back in as it goes
      const fallen = (time - release) / fall;
      const settle = smooth(clamp(fallen / 0.7, 0, 1));
      const neck = lerp(1.3, 0.42, settle);
      shapeDrop(lerp(1.45, 0.95, settle), neck);
      bead.scale.setScalar(1);
      bead.position.y = lerp(hung(1.3), surface + DROP.radius * 0.94, fallen * fallen);
      return;
    }
    // Landed: it flattens, and the paper takes it up
    const flat = clamp((time - lands) / land, 0, 1);
    shapeDrop(lerp(0.95, 0, flat), lerp(0.42, 0, flat));
    bead.scale.set(1 + 1.25 * flat, 1 - 0.86 * flat, 1 + 1.25 * flat);
    bead.position.y = surface + DROP.radius * 0.94 * (1 - 0.86 * flat);
    bead.material.opacity = 1 - flat * flat;
  }

  // Draws the film as it stands at film.time.
  function frame() {
    if (!path.distance || !compiled) return; // the frame has no size yet, or nothing to draw it with
    const time = film.time;
    const distance = Math.exp(path.distance(time));
    const elevation = path.elevation(time) * DEG;
    const azimuth = path.azimuth(time) * DEG;

    // The cover swings back as the film opens, and folds shut again as the camera leaves the card.
    const open = smoother(between(time, TIMING.open)) * (1 - smoother(between(time, TIMING.shut)));
    hinge.rotation.x = -OPEN * open;
    contact.material.opacity = 0.22 * open;

    dropAtTime(time);
    const soaked = 1 - (1 - clamp((time - TIMING.release - TIMING.fall) / TIMING.soak, 0, 1)) ** 3;
    spotMaterial.alphaTest = lerp(1.01, 0.5, soaked);

    // The camera looks at the card until the frame starts to move off it, towards the middle of the
    // country. That move is measured on the screen, not on the ground, so the card slides steadily
    // from the middle of the frame to its place on the map.
    const off = path.out(time) * (distance / path.furthest);
    focus.set(home.x * (1 - off), path.lift(time), lerp(home.z + path.aim(time), 1.2, off));
    eye.set(
      focus.x + distance * Math.cos(elevation) * Math.sin(azimuth),
      focus.y + distance * Math.sin(elevation),
      focus.z + distance * Math.cos(elevation) * Math.cos(azimuth),
    );
    camera.position.copy(eye);
    camera.lookAt(focus);
    camera.near = clamp(distance * 0.12, 0.05, 30);
    camera.far = distance * 3 + 80;
    camera.setViewOffset(view.width, view.height, -view.shiftX * view.width, view.shiftY * view.height, view.width, view.height);
    camera.updateProjectionMatrix();

    scene.fog.near = distance * path.fogNear(time);
    scene.fog.far = distance * path.fogFar(time);
    hazeUniform.value.set(distance * path.hazeNear(time), distance * path.hazeFar(time));
    softUniform.value = 0.42 * (1 - smooth(clamp((distance - 5) / 12, 0, 1)));
    // Shadows only matter while the cover can be seen standing; far away they are sub-pixel.
    key.castShadow = distance < 40;

    const glow = smooth(between(time, TIMING.marked)); // how far the marks have come up
    const far = smooth(clamp((distance - 40) / 110, 0, 1)); // how far the cards have turned from paper to map green
    paintField(glow, far, false);

    renderer.render(scene, camera);

    if (placeList) {
      const pinned = smooth(between(time, TIMING.pinned));
      placeList.style.opacity = pinned.toFixed(3);
      // Once the pins are all but in place they answer the reader (main.js, initPins).
      if (pinned > 0.98 && placesWrap && placesWrap.inert) {
        placesWrap.inert = false;
        placesWrap.classList.add('is-ready');
      }
      if (pinned > 0.01) {
        camera.updateMatrixWorld();
        const spots = [];
        LABELS.forEach((place) => {
          const label = placeLabels.get(place.id);
          if (!label) return;
          point.set(place.x, 0, place.z).project(camera);
          const x = (point.x * 0.5 + 0.5) * view.width;
          const y = (-point.y * 0.5 + 0.5) * view.height;
          label.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
          spots.push({ id: place.id, x, y });
        });
        arrangePlaces(spots);
      }
    }
    showProgress();
  }

  // The pins and their names (25 October 2026: every state we work in, the emblem as the pin). The pins
  // are sized so that no two meet, however small the map is drawn; then each name, in the list's order,
  // takes the first place beside its pin (under it, then right, left, above) where it meets no pin, no
  // name already placed, the page's text or the edge of the film. A name with no such place is left
  // off; its pin stays. Sizes are measured once for each size of the film.
  const PIN = { min: 12, gap: 3, edge: 4 }; // px: the smallest pin, the clear space round it, and inside the film's edge
  let measuredFor = '';
  const nameSize = new Map();
  let pinMax = 32;
  function arrangePlaces(spots) {
    if (!spots.length) return;
    const sizeKey = `${view.width}x${view.height}`;
    if (measuredFor !== sizeKey) {
      measuredFor = sizeKey;
      placeList.style.removeProperty('--pin');
      const probe = placeList.querySelector('.place-emblem');
      pinMax = probe ? probe.offsetWidth || 32 : 32;
      placeLabels.forEach((li, id) => {
        const name = li.querySelector('b');
        nameSize.set(id, name && name.offsetWidth ? { w: name.offsetWidth, h: name.offsetHeight } : null);
      });
    }
    let nearest = Infinity;
    for (let i = 0; i < spots.length; i += 1) for (let j = i + 1; j < spots.length; j += 1) nearest = Math.min(nearest, Math.hypot(spots[i].x - spots[j].x, spots[i].y - spots[j].y));
    const pin = clamp(Math.floor(nearest - PIN.gap * 2), PIN.min, pinMax);
    placeList.style.setProperty('--pin', `${pin}px`);
    const r = pin / 2 + PIN.gap;
    const taken = spots.map((spot) => ({ l: spot.x - r, r: spot.x + r, t: spot.y - r, b: spot.y + r }));
    const meets = (a, b) => a.l < b.r && b.l < a.r && a.t < b.b && b.t < a.b;
    const left = view.textRight ?? -Infinity;
    spots.forEach((spot) => {
      const label = placeLabels.get(spot.id);
      const name = label.querySelector('b');
      const size = nameSize.get(spot.id);
      if (!name || !size) return;
      const { w, h } = size;
      const sides = [
        [-w / 2, r], // under
        [r, -h / 2], // right
        [-r - w, -h / 2], // left
        [-w / 2, -r - h], // above
      ];
      let chosen = null;
      for (const [dx, dy] of sides) {
        const box = { l: spot.x + dx, r: spot.x + dx + w, t: spot.y + dy, b: spot.y + dy + h };
        if (box.l < Math.max(PIN.edge, left) || box.r > view.width - PIN.edge || box.t < PIN.edge || box.b > view.height - PIN.edge) continue;
        if (taken.some((other) => meets(box, other))) continue;
        chosen = [dx, dy, box];
        break;
      }
      if (chosen) {
        taken.push(chosen[2]);
        name.style.left = `${chosen[0].toFixed(1)}px`;
        name.style.top = `${chosen[1].toFixed(1)}px`;
        name.style.visibility = '';
      } else {
        name.style.visibility = 'hidden';
      }
    });
  }

  // Whether the film is playing, paused (a hidden tab) or over, for the stylesheet.
  const shown = { state: '' };
  function showProgress() {
    const state = film.ended ? 'ended' : playing() || !film.started ? 'playing' : 'paused';
    if (state !== shown.state) {
      shown.state = state;
      if (filmRoot) filmRoot.dataset.filmState = state;
    }
  }

  function tick(now) {
    // A frame's timestamp can predate the moment wake() was called, so never step backwards.
    const elapsed = (now - lastTime) / 1000;
    lastTime = now;
    const moving = playing();
    if (moving) {
      film.time += clamp(elapsed, 0.001, 0.125) * SPEED; // real time down to eight frames a second; slower than that, the film slows too
      if (film.time >= TIMING.end) {
        film.time = TIMING.end;
        film.ended = true;
      }
    }
    if (film.away) showProgress();
    else frame();

    // If this machine cannot keep up, render fewer pixels rather than fewer frames.
    if (moving && !film.away && view.ratio > 1) {
      countedFrames += 1;
      if (elapsed > 0.024) slowFrames += 1;
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

    if (playing()) requestAnimationFrame(tick);
    else running = false;
  }
  // Draws one frame, and keeps drawing for as long as the film is running.
  function wake() {
    if (running) return;
    running = true;
    lastTime = performance.now();
    requestAnimationFrame(tick);
  }

  function seek(time) {
    film.time = clamp(time, 0, TIMING.end);
    film.ended = false;
    film.held = false;
    film.started = true;
    wake();
  }

  // --- Where the canvas lives, and how big it is ---
  // The right edge of the hero's text as it is set: its widest line of words, or a button.
  function textEdge() {
    if (!heroText) return -Infinity;
    let edge = -Infinity;
    const range = document.createRange();
    const walker = document.createTreeWalker(heroText, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.textContent.trim()) continue;
      range.selectNodeContents(node);
      for (const rect of range.getClientRects()) if (rect.width > 0) edge = Math.max(edge, rect.right);
    }
    heroText.querySelectorAll('a, button').forEach((el) => { edge = Math.max(edge, el.getBoundingClientRect().right); });
    return edge;
  }
  function resize() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;
    view.width = width;
    view.height = height;
    view.aspect = width / height;
    // Which layout this is is the stylesheet's decision: the wide one is the one in which the page's
    // column is marked out.
    const whole = mount.getBoundingClientRect();
    const column = pageColumn ? pageColumn.getBoundingClientRect() : whole;
    view.layout = pageColumn && column.width > 0 ? WIDE : NARROW;
    view.textRight = -Infinity; // where the page's text ends, in the film's pixels: no pin's name crosses it
    let room = whole;
    if (view.layout === WIDE) {
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const edge = textEdge();
      if (Number.isFinite(edge)) view.textRight = edge - whole.left + rem;
      if (filmRoot && Number.isFinite(edge)) filmRoot.style.setProperty('--text-edge', `${(edge - filmRoot.getBoundingClientRect().left).toFixed(1)}px`);
      const left = Math.max(column.left, edge + GAP * rem);
      room = { left, width: Math.max(column.right - left, width * 0.2) };
    }
    view.across = (room.width * view.layout.across) / width;
    view.shiftX = (room.left - whole.left + room.width / 2) / width - 0.5;
    // The opening is at least 36rem tall, so on a short window (a phone held sideways, a television's
    // browser at 960 by 540) it runs past the first screen: the subject is fitted into the part of it
    // that is on the first screen, so the map is never cut by the fold (R3, defect 3).
    // On a wide screen the partners' band lies over the film's foot, so the subject is fitted above it.
    const band = view.layout === WIDE && foot && getComputedStyle(foot).position === 'absolute' ? foot.offsetHeight : 0;
    const shown = clamp(Math.min(window.innerHeight - (whole.top + window.scrollY), height) - band, height * 0.5, height);
    view.up = view.layout.up * (shown / height);
    view.shiftY = 0.5 - (shown * (0.5 - view.layout.shiftY)) / height;
    renderer.setPixelRatio(view.ratio);
    renderer.setSize(width, height, false);
    camera.aspect = view.aspect;
    setDistances();
    wake();
  }
  mount.appendChild(canvas);
  window.addEventListener('resize', resize);
  if ('ResizeObserver' in window) {
    const watch = new ResizeObserver(resize);
    watch.observe(mount);
    if (heroText) watch.observe(heroText); // the text reflows when its typeface arrives
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);

  // Scrolling the film off screen does not stop it: it keeps its own time, and is only not drawn
  // until it is back. A hidden tab does stop it, and it carries on from where it was.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      film.away = !entries[entries.length - 1].isIntersecting;
      wake();
    }, { rootMargin: '80px 0px' }).observe(mount);
  }
  document.addEventListener('visibilitychange', wake);

  // The card's print uses the page's typeface and the logo; redraw as each becomes available.
  const loadCodeFont = () => {
    const tokens = getComputedStyle(document.documentElement);
    const family = tokens.getPropertyValue('--ff-mono').trim() || tokens.getPropertyValue('--ff-body').trim() || codeFamily;
    if (document.fonts && document.fonts.load) document.fonts.load(`700 52px ${family}`).then(() => { applyTheme(); wake(); }).catch(() => {});
  };
  loadCodeFont();
  const image = new Image();
  image.onload = () => { logo = image; applyTheme(); wake(); };
  image.src = logoUrl;
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    document.documentElement.classList.remove('film-live', 'film-ready');
  });

  applyTheme();
  resize();
  // The shaders are compiled before the first frame, off the main thread where the browser can
  // (KHR_parallel_shader_compile), so that compiling them does not hold up the rest of the page.
  const begin = () => {
    try {
      compiled = true;
      frame();
      document.documentElement.classList.add('film-live', 'film-ready');
      // The film starts once the card's print has had a moment to arrive, so it opens on a finished card.
      const start = () => { if (!film.started) { film.started = true; wake(); } };
      if (logo) setTimeout(start, 150);
      else image.addEventListener('load', () => setTimeout(start, 150));
      setTimeout(start, 1400);
    } catch (error) {
      unavailable(error);
    }
  };
  renderer.compileAsync(scene, camera).then(begin, begin);
  // For checking the film and capturing stills from it: hold it at a given second (drawn at once),
  // play it from where it stands, and read its timing.
  window.llFilm = {
    show(time) { seek(time); film.held = true; frame(); },
    play: () => seek(film.time),
    timing: TIMING,
    take: TAKE,
  };
}

// No WebGL after all (a browser can offer WebGL 2 and still refuse a context): the page keeps its
// still image, and a "Play the film" button that can no longer play anything goes with the film.
function unavailable(error) {
  document.documentElement.classList.remove('film-can', 'film-live', 'film-ready');
  const play = document.querySelector('[data-film-play]');
  if (play) play.hidden = true;
  console.warn('Lightening Lives: the film is unavailable, showing a still image instead.', error);
}

try {
  init(document);
} catch (error) {
  unavailable(error);
}
