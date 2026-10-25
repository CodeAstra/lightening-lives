// Captures each kit's 3D box at rest (src/js/kits/viewer.js) as the still Solutions shows before the
// 3D view has drawn, and without WebGL: src/images-src/box-render-<kit>.png; and the same box cut to
// its own edges and shadow for the opening's lineup: src/images-src/box-lineup-<kit>.png.
//   npm run build && node scripts/serve.mjs 8090 & npm run kit-stills     (needs agent-browser)
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = process.argv[2] || 'http://localhost:8090/';
const session = 'll-kit-stills';
const browser = (...args) => execFileSync('agent-browser', ['--session', session, ...args], { encoding: 'utf8' });
// agent-browser prints the result as JSON; a string result that is itself JSON is read once more.
const run = (js) => {
  const out = JSON.parse(execFileSync('agent-browser', ['--session', session, 'eval', '--stdin'], { input: js, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim());
  if (typeof out !== 'string') return out;
  try { return JSON.parse(out); } catch { return out; }
};

browser('set', 'viewport', '1440', '900');
browser('open', `${site}solutions/?kit-stills=${Date.now()}`);
// Bring every stage into view so each draws, then wait for all five.
run(`(async () => { for (const s of document.querySelectorAll('[data-kit3d]')) { s.scrollIntoView({ block: 'center' }); await new Promise((r) => setTimeout(r, 600)); } return 1; })().then(String)`);
for (let i = 0; i < 40; i += 1) {
  if (Number(run(`Object.keys(window.llKits || {}).length`)) === 5) break;
  browser('wait', '300');
}
const kits = run(`Object.keys(window.llKits || {})`);
for (const kit of kits) {
  const url = run(`window.llKits[${JSON.stringify(kit)}](960, 768)`);
  const file = path.join(root, `src/images-src/box-render-${kit}.png`);
  const png = Buffer.from(url.split(',')[1], 'base64');
  writeFileSync(file, png);
  console.log(`  ${path.relative(root, file)}`);
  const lineup = path.join(root, `src/images-src/box-lineup-${kit}.png`);
  await sharp(await sharp(png).trim({ threshold: 1 }).toBuffer()).extend({ top: 6, bottom: 6, left: 6, right: 6, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(lineup);
  console.log(`  ${path.relative(root, lineup)}`);
}
browser('close');
