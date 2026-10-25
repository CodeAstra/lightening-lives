// The R3 sweep (plan, "Requirements from the Phase 1 review"): every page at every size of the screen
// matrix, checked for what a reader would trip over.
//   npm run build                       first: the sweep serves dist/ as it stands
//   npm run sweep                       the home page at every size
//   npm run sweep -- / /solutions/      the pages named, at every size
//   npm run sweep -- / --sizes 1440x900,3440x1440 --out some/folder --jobs 3
// Needs agent-browser (npm i -g agent-browser && agent-browser install).
//
// The checks, at each size (R3's "What passes", 1 to 5):
//   1 scroll   no horizontal scroll: scrollWidth equals innerWidth
//   2 overlap  no two visible things meet by more than 2 px: every text line box, picture, button,
//              input, summary, tag and chip box against every other that is not its ancestor or
//              descendant; checked once the film has ended, and on the hero at 0.5, 1.6, 3.4 and
//              5.2 s into the film
//   3 film     where the film fills the opening beside the text, its drawing never comes within 3rem
//              of the text's widest line: the text (and the header, the caption bar and the labels)
//              are hidden, the film is held at each of those moments and at its end, and the
//              screenshot is searched, in the rows the text occupies, for the leftmost pixel that is
//              not the page's ice white. The veil stays: it is what the reader sees the film through,
//              and the field of cards behind the subject reaches under the text by design
//   4 screen   on a television or laptop the heading, lead and both buttons are on the first screen;
//              on a phone the first button is within 1.25 screens; on a landscape phone the film and
//              its labels are whole on the first screen, or set beside the text
//   5 strip    from 2560 px wide the content spans at least half the window, to 3840 px, and 40% beyond
//   6 controls on a phone held upright, every link, button, summary and field a reader can see is at
//              least 44 px tall (R3 item 7; plan Task 6.4 Step 4), but a link inside a sentence
//              (WCAG 2.5.8's inline exception)
//   7 type     at 390 px wide, no text a reader can see is under 16 px (R3 item 7); each size under it
//              is listed with where it is. The label voice (labels, tags, chips, the tagline) is
//              counted in the notes, not failed: it keeps DESIGN.md's sizes until the user decides
//              (Task 2.0 Step 7 ruling)
// --reduced-motion runs every page as a reader who has asked for reduced motion (the film is then
// the still with "Play the film").
// Writes a picture of each page at each size (its first screen, and the whole page scaled down) to
// the output folder (default: a folder in the system's temporary directory, printed at the end), and
// a table to the console. Exits with 1 if anything fails.
import { execFile } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import sharp from 'sharp';

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

// The screen matrix (R3), in CSS pixels, with the class each size is judged as.
const MATRIX = [
  ['phone', 320, 568], ['phone', 360, 640], ['phone', 375, 667], ['phone', 390, 844], ['phone', 430, 932],
  ['landscape', 667, 375], ['landscape', 844, 390], ['landscape', 932, 430],
  ['tablet', 768, 1024], ['tablet', 820, 1180], ['tablet', 1024, 1366], ['tablet', 1024, 768], ['tablet', 1180, 820],
  ['laptop', 1280, 720], ['laptop', 1366, 768], ['laptop', 1440, 900], ['laptop', 1536, 864],
  ['desktop', 1920, 1080], ['desktop', 2560, 1440],
  ['tv', 960, 540], ['tv', 1280, 720], ['tv', 1920, 1080], ['tv', 3840, 2160],
  ['ultrawide', 2560, 1080], ['ultrawide', 3440, 1440], ['ultrawide', 5120, 1440],
];
const MOMENTS = [0.5, 1.6, 3.4, 5.2];

// --- Arguments ---
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const at = args.indexOf(`--${name}`);
  if (at === -1) return fallback;
  const [value] = args.splice(at, 2).slice(1);
  return value;
};
const reduced = args.includes('--reduced-motion');
const sizesArg = option('sizes', '');
const out = path.resolve(option('out', '') || mkdtempSync(path.join(tmpdir(), 'll-sweep-')));
const jobs = Math.max(1, Number(option('jobs', '3')));
const urls = args.filter((a) => a.startsWith('/'));
if (!urls.length) urls.push('/');
const sizes = sizesArg
  ? sizesArg.split(',').flatMap((s) => {
    const [w, h] = s.split('x').map(Number);
    const known = MATRIX.filter(([, mw, mh]) => mw === w && mh === h);
    return known.length ? known : [[w < h ? 'phone' : 'laptop', w, h]];
  })
  : MATRIX;
// One size can sit in two classes (1280x720 and 1920x1080 are laptops or desktops and televisions):
// it is run once and judged as the stricter, which is the television's.
const unique = [];
for (const size of sizes) {
  const same = unique.find(([, w, h]) => w === size[1] && h === size[2]);
  if (!same) unique.push([...size]);
  else if (size[0] === 'tv') same[0] = 'tv';
}
mkdirSync(out, { recursive: true });
if (!existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/ has no site in it: run npm run build first.');
  process.exit(2);
}

// --- A server for dist/, as GitHub Pages serves it ---
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.txt': 'text/plain', '.xml': 'application/xml' };
const server = createServer((req, res) => {
  let file = path.join(dist, path.normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, ''));
  try { if (statSync(file).isDirectory()) file = path.join(file, 'index.html'); } catch { file = path.join(dist, '404.html'); res.statusCode = 404; }
  try { res.setHeader('content-type', TYPES[path.extname(file)] || 'application/octet-stream'); res.end(readFileSync(file)); } catch { res.statusCode = 404; res.end(); }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

// --- The browser ---
function browser(session) {
  const call = async (...a) => (await run('agent-browser', ['--session', session, ...a], { encoding: 'utf8', maxBuffer: 64 << 20 })).stdout;
  const evaluate = async (js) => {
    const child = execFile('agent-browser', ['--session', session, 'eval', '--stdin'], { encoding: 'utf8', maxBuffer: 64 << 20 });
    const done = new Promise((resolve, reject) => {
      let stdout = '';
      child.stdout.on('data', (d) => { stdout += d; });
      child.on('close', (code) => (code ? reject(new Error(`eval failed (${code})`)) : resolve(stdout)));
    });
    child.stdin.end(`(async () => { ${js} })().then((v) => JSON.stringify(v))`);
    const text = (await done).trim();
    try { return JSON.parse(JSON.parse(text)); } catch { return text; }
  };
  return { call, evaluate, close: () => call('close').catch(() => {}) };
}

// In the page: the things a reader sees, as boxes in page coordinates, and the pairs that meet.
const MEASURE = String.raw`
const seen = (el) => {
  for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
    const s = getComputedStyle(e);
    if (s.visibility === 'hidden' || s.display === 'none' || Number(s.opacity) < 0.05) return false;
    // Visually hidden (.sr-only, or the same clip under another name, as the sites table's mark names
    // on a wide screen): for screen readers, not the eye.
    if (e.matches('.sr-only') || s.clipPath === 'inset(50%)') return false;
    // Inside a closed disclosure, only its summary is shown.
    const shut = e.parentElement && e.parentElement.matches('details:not([open])');
    if (shut && e.tagName !== 'SUMMARY') return false;
  }
  return true;
};
const boxes = [];
// What a container clips away is not seen: a box is cut to every ancestor that hides its overflow (a
// logo rolling out of its cell, 25 October 2026).
const clip = (el, r) => {
  let { left, top, right, bottom } = r;
  for (let e = el.parentElement; e && e !== document.body; e = e.parentElement) {
    const s = getComputedStyle(e);
    if (s.overflowX === 'visible' && s.overflowY === 'visible') continue;
    const c = e.getBoundingClientRect();
    left = Math.max(left, c.left); top = Math.max(top, c.top); right = Math.min(right, c.right); bottom = Math.min(bottom, c.bottom);
  }
  return { left, top, width: right - left, height: bottom - top };
};
const add = (el, raw, kind) => {
  const r = clip(el, raw);
  if (r.width < 3 || r.height < 3) return;
  boxes.push({ el, kind, x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height });
};
const scope = document.querySelector(SCOPE) || document.body;
const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
const range = document.createRange();
for (let n = walker.nextNode(); n; n = walker.nextNode()) {
  if (!n.textContent.trim() || !seen(n.parentElement)) continue;
  if (n.parentElement.closest('svg, script, style, noscript, template')) continue;
  range.selectNodeContents(n);
  for (const r of range.getClientRects()) add(n.parentElement, r, 'text');
}
const things = 'img, button, input, select, textarea, summary, .tag, .places b, .map-names li.is-shown b';
for (const el of scope.querySelectorAll(things)) if (seen(el)) add(el, el.getBoundingClientRect(), el.matches('.places b, .map-names b') ? 'chip' : el.tagName.toLowerCase());
const docW = document.documentElement.scrollWidth;
const live = boxes.filter((b) => b.x + b.w > 0 && b.x < docW);
const label = (el) => {
  const id = el.closest('[id]') ? '#' + el.closest('[id]').id + ' ' : '';
  const name = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '');
  return id + name + ' "' + (el.textContent || el.alt || '').replace(/\s+/g, ' ').trim().slice(0, 28) + '"';
};
const hits = [];
for (let i = 0; i < live.length; i += 1) {
  for (let j = i + 1; j < live.length; j += 1) {
    const a = live[i]; const b = live[j];
    if (a.el === b.el || a.el.contains(b.el) || b.el.contains(a.el)) continue;
    // The film's own button stands on its still by design (DESIGN.md: reduced motion, "a solid Play
    // the film button on it").
    const onStill = (p, q) => p.el.matches('img.film-poster') && q.el.closest('[data-film] button');
    if (onStill(a, b) || onStill(b, a)) continue;
    const dx = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
    const dy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
    if (dx > 2 && dy > 2) hits.push(label(a.el) + ' x ' + label(b.el) + ' (' + Math.round(dx) + 'x' + Math.round(dy) + ')');
  }
}
`;

async function sweepOne(page, [kind, width, height], url) {
  const tag = `${url.replace(/\//g, '_') || '_'}-${width}x${height}${reduced ? '-rm' : ''}`;
  const result = { url, size: `${width}x${height}`, kind, fails: [], notes: [] };
  await page.call('set', 'viewport', String(width), String(height));
  if (reduced) await page.call('set', 'media', 'light', 'reduced-motion');
  await page.call('open', `${base}${url}`);
  // The type, and the film's end (or that it will not play here).
  const film = await page.evaluate(`
    await document.fonts.ready;
    const f = document.querySelector('[data-film]');
    if (!f) return 'none';
    const t0 = Date.now();
    while (Date.now() - t0 < 25000) {
      const c = document.documentElement.classList;
      if (f.dataset.filmState === 'ended' && c.contains('film-ready')) break;
      if (!c.contains('film-can') && Date.now() - t0 > 1500) return 'still';
      // Reduced motion: the still with "Play the film"; the film waits to be asked.
      if (c.contains('film-can') && !c.contains('film-live') && Date.now() - t0 > 1500) return 'still';
      await new Promise((r) => setTimeout(r, 200));
    }
    await new Promise((r) => setTimeout(r, 900)); // the hero's text has risen in, the chips have faded up
    return f.dataset.filmState;
  `);
  result.notes.push(`film ${film}`);
  if (film !== 'none' && film !== 'still' && film !== 'ended') result.fails.push(`the film did not end (${film})`);

  // 1 and 2, the whole page, scrolled through first so that lazy pictures have their size. The page
  // scrolls smoothly for anchor links; here it must jump, or it is measured on its way back.
  const page1 = await page.evaluate(`
    document.documentElement.style.scrollBehavior = 'auto';
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.8) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    scrollTo(0, 0); await new Promise((r) => setTimeout(r, 300));
    const SCOPE = 'body';
    ${MEASURE}
    const fs = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const wrap = document.querySelector('main .wrap');
    const pad = wrap ? parseFloat(getComputedStyle(wrap).paddingLeft) + parseFloat(getComputedStyle(wrap).paddingRight) : 0;
    return { sw: document.documentElement.scrollWidth, iw: innerWidth, hits, fs, content: wrap ? wrap.getBoundingClientRect().width - pad : 0 };
  `);
  if (page1.sw !== page1.iw) result.fails.push(`scroll: scrollWidth ${page1.sw} vs innerWidth ${page1.iw}`);
  for (const h of page1.hits) result.fails.push(`overlap: ${h}`);
  // 5 (R3): from 2560 px the content (the column inside its padding) spans half the window up to
  // 3840 px, and 40% beyond.
  const share = page1.content / width;
  if (width >= 2560 && share < (width <= 3840 ? 0.5 : 0.4) - 0.001) result.fails.push(`strip: the content spans ${Math.round(share * 100)}% of the window`);
  result.notes.push(`root ${page1.fs}px`, `content ${Math.round(page1.content)}px (${Math.round(share * 100)}%)`);

  // 6 and 7: controls on a phone held upright, and type at 390 px.
  if (width <= 430 && width < height) {
    const sizes = await page.evaluate(`
      const SCOPE = 'body';
      const seen = (el) => {
        for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
          const s = getComputedStyle(e);
          if (s.visibility === 'hidden' || s.display === 'none' || Number(s.opacity) < 0.05) return false;
          if (e.matches('.sr-only') || s.clipPath === 'inset(50%)') return false;
          const shut = e.parentElement && e.parentElement.matches('details:not([open])');
          if (shut && e.tagName !== 'SUMMARY') return false;
        }
        return true;
      };
      const where = (el) => (el.closest('[id]') ? '#' + el.closest('[id]').id + ' ' : '') + el.tagName.toLowerCase() + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.') : '');
      const small = [];
      for (const el of document.querySelectorAll('a[href], button, summary, input, select, textarea')) {
        if (!seen(el)) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        // A link inside a sentence: drawn inline, among other words of its block.
        const block = el.parentElement.closest('p, li, td, dd, address');
        const inline = getComputedStyle(el).display === 'inline' && block && block.textContent.trim().length > el.textContent.trim().length;
        if (!inline && r.height < 43.5) small.push(where(el) + ' "' + el.textContent.replace(/\\s+/g, ' ').trim().slice(0, 24) + '" ' + Math.round(r.height) + 'px');
      }
      const type = new Map();
      const VOICE = '.label, .tag, .brand-line, .places, .map-names, .state-facts, [class*="label"]';
      let voice = 0;
      if (innerWidth === 390) {
        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        for (let n = w.nextNode(); n; n = w.nextNode()) {
          if (!n.textContent.trim() || !seen(n.parentElement) || n.parentElement.closest('svg, script, style, noscript, template')) continue;
          const px = parseFloat(getComputedStyle(n.parentElement).fontSize);
          if (px < 15.95) {
            // The label voice (labels, tags, chips, the tagline beside the emblem) keeps DESIGN.md's
            // sizes until the user decides (Task 2.0 Step 7 ruling): counted, not failed.
            if (n.parentElement.closest(VOICE)) { voice += 1; continue; }
            const k = where(n.parentElement) + ' ' + px + 'px'; type.set(k, (type.get(k) || 0) + 1);
          }
        }
      }
      return { small, voice, type: [...type].map(([k, c]) => k + (c > 1 ? ' x' + c : '')) };
    `);
    for (const c of sizes.small) result.fails.push(`controls: ${c}`);
    for (const t of sizes.type) result.fails.push(`type: ${t}`);
    if (sizes.voice) result.notes.push(`label voice under 16px: ${sizes.voice} (exempt)`);
  }

  // 4, the first screen.
  const first = await page.evaluate(`
    const hero = document.querySelector('.hero');
    if (!hero) return null;
    const r = (s) => { const e = document.querySelector(s); if (!e) return null; const b = e.getBoundingClientRect(); return { top: b.top, bottom: b.bottom, left: b.left, right: b.right }; };
    const btns = [...document.querySelectorAll('.hero-actions a')].map((a) => a.getBoundingClientRect());
    const chips = [...document.querySelectorAll('.places b')].map((b) => b.getBoundingClientRect()).map((b) => ({ top: b.top, bottom: b.bottom, left: b.left, right: b.right }));
    return { ih: innerHeight, iw: innerWidth, h1: r('.hero h1'), lead: r('.hero-lead'), b1: btns[0] && { top: btns[0].top, bottom: btns[0].bottom }, b2: btns[1] && { top: btns[1].top, bottom: btns[1].bottom }, screen: r('.film-screen'), text: r('.hero-text') || r('.hero h1'), chips, live: document.documentElement.classList.contains('film-live') };
  `);
  if (first) {
    const { ih } = first;
    // Televisions and laptops (R3), and the other wide screens, which stand in the same layout; a
    // tablet held upright is set as a phone is, and judged as one.
    const upright = kind === 'tablet' && first.iw < ih;
    if (upright && (!first.b1 || first.b1.top > ih * 1.25)) result.fails.push(`first screen: first button's top at ${Math.round(first.b1?.top)}, over 1.25 screens (${Math.round(ih * 1.25)})`);
    if (kind === 'tv' || kind === 'laptop' || kind === 'desktop' || kind === 'ultrawide' || (kind === 'tablet' && !upright)) {
      if (!first.b2 || first.b2.bottom > ih) result.fails.push(`first screen: second button's bottom at ${Math.round(first.b2?.bottom)} of ${ih}`);
    }
    if (kind === 'phone' && (!first.b1 || first.b1.top > ih * 1.25)) result.fails.push(`first screen: first button's top at ${Math.round(first.b1?.top)}, over 1.25 screens (${Math.round(ih * 1.25)})`);
    // A phone held sideways: the film and its labels whole on the first screen, beside the text or
    // under it, never cut by the fold.
    // (Where the film fills the opening, which may run past the first screen by design, its drawing
    // is checked against the fold below, with check 3.)
    const filling = await page.evaluate(`const f = document.querySelector('.hero-frame'); return !!f && getComputedStyle(f).display !== 'none';`);
    if (kind === 'landscape' && first.live && first.screen) {
      const top = filling ? 0 : first.screen.top; const bottom = filling ? ih : first.screen.bottom;
      const whole = (filling || (first.screen.top >= 0 && first.screen.bottom <= ih + 1))
        && first.chips.every((c) => c.top >= Math.max(top, 0) - 1 && c.bottom <= Math.min(bottom, ih) + 1 && c.left >= 0 && c.right <= first.iw);
      if (!whole) result.fails.push(`first screen: the film's frame ends at ${Math.round(first.screen.bottom)} of ${ih}, or a label leaves it`);
      result.notes.push(filling ? 'film fills the opening' : first.screen.left >= first.h1.right - 1 ? 'film beside the text' : 'film under the heading');
    }
    result.notes.push(`button 2 at ${Math.round(first.b2?.bottom ?? 0)}/${ih}`);
  }

  // 2 again on the hero at four moments, and 3 at those moments and at the end.
  if (film === 'ended') {
    const wide = await page.evaluate(`return !!document.querySelector('.hero-frame') && getComputedStyle(document.querySelector('.hero-frame')).display !== 'none';`);
    for (const t of [...MOMENTS, null]) {
      const at = t === null ? 'end' : `${t}s`;
      const hero = await page.evaluate(`
        scrollTo(0, 0);
        window.llFilm.show(${t === null ? 'window.llFilm.timing.end' : t});
        await new Promise((r) => setTimeout(r, 650)); // the caption's 0.45 s fade has finished
        const SCOPE = '.hero';
        ${MEASURE}
        return hits;
      `);
      for (const h of hero) result.fails.push(`overlap at ${at}: ${h}`);
      if (!wide) continue;
      // The text's band and its widest line, then the film alone.
      const band = await page.evaluate(`
        const text = document.querySelector('[data-hero-text]');
        let top = Infinity, bottom = -Infinity, right = -Infinity;
        const w = document.createTreeWalker(text, NodeFilter.SHOW_TEXT); const range = document.createRange();
        for (let n = w.nextNode(); n; n = w.nextNode()) { if (!n.textContent.trim()) continue; range.selectNodeContents(n); for (const r of range.getClientRects()) { if (r.width < 1) continue; top = Math.min(top, r.top); bottom = Math.max(bottom, r.bottom); right = Math.max(right, r.right); } }
        text.querySelectorAll('a').forEach((a) => { const r = a.getBoundingClientRect(); top = Math.min(top, r.top); bottom = Math.max(bottom, r.bottom); right = Math.max(right, r.right); });
        const s = document.createElement('style'); s.id = 'sweep-hide';
        s.textContent = '.site-header, .hero-text, .film-foot, .places { visibility: hidden !important; }';
        document.head.append(s);
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        return { top, bottom, right, rem: parseFloat(getComputedStyle(document.documentElement).fontSize) };
      `);
      const file = path.join(out, `${tag}-film-${at}.png`);
      await page.call('screenshot', file);
      await page.evaluate(`document.getElementById('sweep-hide')?.remove(); return 1;`);
      const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
      const y0 = Math.max(0, Math.floor(band.top)); const y1 = Math.min(info.height, Math.ceil(band.bottom));
      let leftmost = Infinity;
      for (let y = y0; y < y1; y += 1) {
        for (let x = 0; x < Math.min(leftmost, info.width); x += 1) {
          const k = (y * info.width + x) * info.channels;
          const [r, g, b] = [data[k], data[k + 1], data[k + 2]];
          if (Math.min(r, g, b) < 215 || Math.max(r, g, b) - Math.min(r, g, b) > 40) { leftmost = x; break; }
        }
      }
      const clear = leftmost - band.right;
      if (clear < band.rem * 3 - 1) result.fails.push(`film at ${at}: drawn ${Math.round(clear)} px from the text (needs ${Math.round(band.rem * 3)})`);
      if (t === null) {
        result.notes.push(`film clear ${Number.isFinite(clear) ? Math.round(clear) : 'all'} px`);
        // At its end the film is the map alone on the page's ice white: it must be whole on the first
        // screen, touching neither the fold nor the window's right edge.
        const drawn = (x, y) => { const k = (y * info.width + x) * info.channels; const [r, g, b] = [data[k], data[k + 1], data[k + 2]]; return Math.min(r, g, b) < 215 || Math.max(r, g, b) - Math.min(r, g, b) > 40; };
        let cut = 0;
        for (let x = Math.ceil(band.right); x < info.width; x += 1) if (drawn(x, info.height - 2)) cut += 1;
        for (let y = 0; y < info.height; y += 1) if (drawn(info.width - 2, y)) cut += 1;
        if (cut) result.fails.push(`film at end: the map is cut by the fold or the window's edge (${cut} px drawn on the last row or column)`);
      }
    }
    // Back to the end, and let it finish there, so the pictures show the film as a reader leaves it.
    await page.evaluate(`window.llFilm.show(window.llFilm.timing.end); window.llFilm.play(); await new Promise((r) => setTimeout(r, 300)); return 1;`);
  }

  // Pictures: the first screen, and the whole page scaled down.
  const firstFile = path.join(out, `${tag}-first.png`);
  await page.call('screenshot', firstFile);
  const fullFile = path.join(out, `${tag}-full-raw.png`);
  await page.call('screenshot', '--full', fullFile);
  const meta = await sharp(fullFile).metadata();
  await sharp(fullFile, { limitInputPixels: false }).resize({ width: Math.min(meta.width, 1200) }).png({ compressionLevel: 9, palette: true }).toFile(path.join(out, `${tag}-full.png`));
  return result;
}

const queue = [];
for (const url of urls) for (const size of unique) queue.push([size, url]);
const results = [];
await Promise.all(Array.from({ length: Math.min(jobs, queue.length) }, async (_, n) => {
  const page = browser(`ll-sweep-${process.pid}-${n}`);
  try {
    while (queue.length) {
      const [size, url] = queue.shift();
      try { results.push(await sweepOne(page, size, url)); } catch (error) { results.push({ url, size: `${size[1]}x${size[2]}`, kind: size[0], fails: [`sweep error: ${error.message}`], notes: [] }); }
      const last = results.at(-1);
      process.stdout.write(`${last.fails.length ? 'FAIL' : 'pass'}  ${last.url} ${last.size}\n`);
    }
  } finally { await page.close(); }
}));
server.close();

results.sort((a, b) => a.url.localeCompare(b.url) || unique.findIndex(([, w, h]) => `${w}x${h}` === a.size) - unique.findIndex(([, w, h]) => `${w}x${h}` === b.size));
console.log('\n| Page | Size | Class | Result | Notes |\n| --- | --- | --- | --- | --- |');
for (const r of results) console.log(`| ${r.url} | ${r.size} | ${r.kind} | ${r.fails.length ? `FAIL (${r.fails.length})` : 'pass'} | ${r.notes.join('; ')} |`);
const failed = results.filter((r) => r.fails.length);
for (const r of failed) {
  console.log(`\n${r.url} ${r.size}:`);
  for (const f of r.fails.slice(0, 25)) console.log(`  - ${f}`);
  if (r.fails.length > 25) console.log(`  … and ${r.fails.length - 25} more`);
}
console.log(`\nPictures: ${out}`);
process.exit(failed.length ? 1 : 0);
