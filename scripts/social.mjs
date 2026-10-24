// Photographs each page's preview card (src/site/_social/card.njk, built at /_social/<slug>/) at
// 1200 by 630 into src/assets/img/social/<slug>.png, which the page's og:image names. The home page
// keeps the film's end, social.png (npm run stills).
//   npm run build && npm run social     (needs agent-browser: npm i -g agent-browser && agent-browser install)
// Serves dist/ itself on a free port. Stops with an error if a title runs past three lines or the
// card does not fit; removes the PNG of a page that is no longer built.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (p) => path.join(root, p);
const outDir = at('src/assets/img/social');
const session = 'll-social';
const scratch = mkdtempSync(path.join(tmpdir(), 'll-social-'));

if (!existsSync(at('dist/index.html'))) throw new Error('Build the site first: npm run build');
const cards = existsSync(at('dist/_social')) ? readdirSync(at('dist/_social')).sort() : [];

// dist/, served as GitHub Pages would serve it.
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = createServer((req, res) => {
  let file = at(`dist${decodeURIComponent(new URL(req.url, 'http://x').pathname)}`);
  if (file.endsWith('/')) file += 'index.html';
  if (!file.startsWith(at('dist')) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const site = `http://127.0.0.1:${server.address().port}`;

// Asynchronous, so that the server above can answer the browser while the script waits on it.
const exec = promisify(execFile);
const browser = async (...args) => (await exec('agent-browser', ['--session', session, ...args], { encoding: 'utf8' })).stdout;
const run = async (js) => {
  // An immediately invoked async function, so that the evaluation can await and returns its value.
  const result = (await browser('eval', `(async () => { ${js} })()`)).trim();
  try { return JSON.parse(JSON.parse(result)); } catch { return result; }
};

const failures = [];
try {
  mkdirSync(outDir, { recursive: true });
  if (cards.length) await browser('set', 'viewport', '1200', '630', '1');
  for (const slug of cards) {
    await browser('open', `${site}/_social/${slug}/`);
    await run('await document.fonts.ready; return 1;');
    const m = await run(`const card = document.querySelector('.social-card').getBoundingClientRect();
      const h1 = document.querySelector('.social-card h1');
      const lines = Math.round(h1.getBoundingClientRect().height / parseFloat(getComputedStyle(h1).lineHeight));
      const fonts = [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family).join();
      return JSON.stringify({ w: card.width, h: card.height, lines, over: document.documentElement.scrollHeight > 630 || document.documentElement.scrollWidth > 1200, fonts })`);
    if (m.w !== 1200 || m.h !== 630 || m.over) failures.push(`${slug}: the card is ${m.w} by ${m.h}${m.over ? ' and overflows the window' : ''}`);
    if (m.lines > 3) failures.push(`${slug}: the title runs to ${m.lines} lines (three at most: shorten og_title)`);
    if (!/Archivo/.test(m.fonts)) failures.push(`${slug}: the type did not load (${m.fonts})`);
    const shot = path.join(scratch, `${slug}.png`);
    await browser('screenshot', shot);
    const png = await sharp(shot).resize(1200, 630, { fit: 'cover', position: 'left top' }).png({ compressionLevel: 9, palette: true, quality: 92, effort: 10 }).toBuffer();
    writeFileSync(path.join(outDir, `${slug}.png`), png);
    console.log(`  ${slug}.png: ${m.lines} line(s) of title, ${Math.round(png.length / 1024)} KB`);
  }
  // A card whose page is gone goes with it.
  for (const f of readdirSync(outDir).filter((f) => f.endsWith('.png'))) {
    if (!cards.includes(f.replace(/\.png$/, ''))) { rmSync(path.join(outDir, f)); console.log(`  Removed ${f}: its page is not built`); }
  }
} finally {
  if (cards.length) await browser('close').catch(() => {});
  server.close();
  rmSync(scratch, { recursive: true, force: true });
}
if (!cards.length) console.log('  No card to make: only the home page is built, and it keeps social.png.');
if (failures.length) { console.error(failures.map((f) => `  ✗ ${f}`).join('\n')); process.exit(1); }
