// Captures the film's stills, the map's stills and the preview card from the running site, so they
// show this site's own film (its type, its drop, its fifteen sites) and can be taken again the same
// way whenever the picture changes.
//   npm run dev        in one terminal
//   npm run stills     in another (needs agent-browser: npm i -g agent-browser && agent-browser install)
// Writes into src/assets/img: site-blank, site-drop, site-sample, site-batch and site-map (the film,
// held at a moment and cropped round its subject), site-map-sickle, -thal and -work (the drawn map
// under each layer), and social.png (1200 by 630, the opening at the film's end).
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = process.argv[2] || 'http://localhost:8080/';
const session = 'll-stills';
const scratch = mkdtempSync(path.join(tmpdir(), 'll-stills-'));
// Each picture is made in a folder of its own and copied into src/assets/img at the end: a file
// changing under the running site would reload the page in the middle of the capture.
const staged = path.join(scratch, 'out');
mkdirSync(staged);
const out = (name) => path.join(staged, name);

const browser = (...args) => execFileSync('agent-browser', ['--session', session, ...args], { encoding: 'utf8' });
const run = (js) => {
  // A block of its own, so that names declared in one evaluation do not clash with the next.
  const result = execFileSync('agent-browser', ['--session', session, 'eval', '--stdin'], { input: `{ ${js} }`, encoding: 'utf8' }).trim();
  try { return JSON.parse(JSON.parse(result)); } catch { return result; }
};
const pause = (ms) => browser('wait', String(ms));
const shot = (name) => { const file = path.join(scratch, name); browser('screenshot', file); return file; };

// Opens the page at a window size and waits until the film is drawing and the type has arrived.
function open(width, height, scale = 1) {
  browser('set', 'viewport', String(width), String(height), String(scale));
  browser('open', `${site}?stills=${Date.now()}`);
  for (let i = 0; i < 40 && !run('document.documentElement.classList.contains("film-ready")'); i += 1) pause(250);
  run('document.fonts.ready.then(() => 1)');
  pause(1500); // the canvas fades in over 0.7 s, and the heading rises in over 0.8 s
}
const hide = (selectors) => run(`const s = document.createElement('style'); s.textContent = '${selectors} { visibility: hidden !important; }'; document.head.append(s); 1`);
// Holds the film at a second; it is drawn at once, and shown on the next frame.
const hold = (seconds) => { run(`window.llFilm.show(${seconds}); window.scrollTo(0, 0); 1`); pause(400); };

const webp = (input, crop, file, size) => sharp(input).extract(crop).resize(size).webp({ quality: 78, effort: 6 }).toFile(out(file));

// --- The film: an 1800 by 1000 window, cropped round the film's subject (DESIGN.md: it sits 74% of
// the way across the page's column), as the approved stills were taken.
open(1800, 1000);
hide('.site-header, .hero-text, .hero-veil, .film-foot, .hero-foot'); // the partners' row is the page's, not the film's
const frame = run('const r = document.querySelector("[data-frame]").getBoundingClientRect(); JSON.stringify({ left: r.left, width: r.width })');
const centre = Math.round(frame.left + frame.width * 0.74);
const square = { left: centre - 500, top: 0, width: 1000, height: 1000 };
const card = { left: centre - 400, top: 0, width: 800, height: 1000 };
for (const [file, seconds, crop, places] of [
  ['site-blank.webp', 0.5, card, false], // the open card before the drop, for the contact section (see below)
  ['site-drop.webp', 1.3, square, false], // the drop above the card: the film's stand-in
  ['site-sample.webp', 2.65, square, false], // the spot soaked into the paper
  ['site-batch.webp', 3.4, square, false], // the card among its batch
  ['site-map.webp', 6.56, square, true], // the map, with the places named
]) {
  run(`document.querySelector('[data-places]').style.visibility = '${places ? 'visible' : 'hidden'}'; 1`);
  // The blank card is the card with its cover fully open (by 0.48 s) and no drop yet, which the film
  // never shows at once (the drop starts to swell at 0.24 s): for that one frame the swell waits.
  const blank = file === 'site-blank.webp';
  if (blank) run('window.llSwell = window.llFilm.timing.swell; window.llFilm.timing.swell = [9, 9.5]; 1');
  hold(seconds);
  if (blank) run('window.llFilm.timing.swell = window.llSwell; 1');
  await webp(shot(file.replace('.webp', '.png')), crop, file, { width: crop.width, height: crop.height });
  console.log(`  ${file}: the film at ${seconds} s`);
}

// --- The map, drawn, under each layer: a square round it, taken at twice the pixels.
open(1440, 900, 2);
for (const layer of ['sickle', 'thal', 'work']) {
  run(`document.querySelector('input[value=${layer}]').click(); document.querySelector('[data-map]').scrollIntoView({ block: 'center', behavior: 'instant' }); 1`);
  browser('mouse', 'move', '1', '1');
  pause(1600); // the colours spread over the map
  const box = run('const r = document.querySelector("[data-map]").getBoundingClientRect(); JSON.stringify({ left: r.left, top: r.top, width: r.width, height: r.height })');
  const side = Math.round(Math.max(box.width, box.height) * 2);
  const crop = { left: Math.round((box.left + box.width / 2) * 2 - side / 2), top: Math.round((box.top + box.height / 2) * 2 - side / 2), width: side, height: side };
  await webp(shot(`map-${layer}.png`), crop, `site-map-${layer}.webp`, { width: 1000, height: 1000 });
  console.log(`  site-map-${layer}.webp: the map under its ${layer} layer`);
}

// --- The preview card: the opening at the film's end, heading and all, at 1440 by 756 (the card's
// shape), made 1200 by 630. Only the film's button is left out; it does nothing in a picture.
open(1440, 756);
hide('.film-toggle');
// The partners' logos hold still for the picture, as they do while focused.
run(`document.querySelector('.logo-cycle')?.dispatchEvent(new FocusEvent('focusin')); 1`);
hold(6.56);
await sharp(shot('social.png')).resize(1200, 630).png({ palette: true, quality: 90, effort: 10 }).toFile(out('social.png'));
console.log('  social.png: the opening at the film\'s end, 1200 by 630');

browser('close');
for (const file of readdirSync(staged)) copyFileSync(path.join(staged, file), path.join(root, 'src/assets/img', file));
rmSync(scratch, { recursive: true, force: true });
console.log('  Copied into src/assets/img.');
