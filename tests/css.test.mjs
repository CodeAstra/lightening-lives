// The stylesheet carries the chosen design: its tokens, its self-hosted type, the page's scaling, and
// no new px sizes. Reads dist/, which `npm test` builds first.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path, { join } from 'node:path';

const built = () => readFileSync('dist/assets/css/site.css', 'utf8');

test('tokens carry the chosen variation', () => {
  const css = built().replace(/\s+/g, '').toLowerCase();
  for (const s of ['--ff-display:"Quicksand"', '--ff-body:"Nunito"', '--ff-mono:"Nunito"', '--display-weight:700', '--display-tracking:-.02em', '--label-weight:800', '--label-tracking:.08em', '--sun:#6ee7b7', '--leaf:#0369a1'])
    assert.ok(css.includes(s.toLowerCase()), s);
});

test('the highlight is life green, and no amber is left (DESIGN.md, 24 October 2026)', () => {
  const css = built().replace(/\s+/g, '').toLowerCase();
  assert.doesNotMatch(css, /#ffc53d/);
  assert.doesNotMatch(css, /255,197,61/);
});

test('a proof name is set in DNA blue with nothing drawn under it', () => {
  // The last .hl rule wins: the colour falls back to --leaf and the decoration to none.
  const rules = built().replace(/\s+/g, '').match(/\.hl\{[^}]*\}/g) ?? [];
  const last = rules.at(-1) ?? '';
  assert.match(last, /color:var\(--mark-ink,var\(--leaf\)\)/);
  assert.match(last, /text-decoration-line:var\(--mark-line,none\)/);
});

test('no font is loaded from Google', () => {
  for (const f of readdirSync('dist', { recursive: true }).filter((f) => f.endsWith('.html')))
    assert.doesNotMatch(readFileSync(join('dist', f), 'utf8'), /fonts\.googleapis|fonts\.gstatic/, f);
  assert.doesNotMatch(built(), /fonts\.googleapis|fonts\.gstatic/);
});

test('the type is self-hosted: Quicksand 600 to 700 and Nunito 400 to 800, one variable file a family and subset', () => {
  // Variable faces (Task 6.4 Step 2: four font files or fewer a page): each family is one file for
  // latin, and one for latin-ext, which a browser fetches only for a character outside latin. The
  // weights each face offers are the design's range and no wider (DESIGN.md: Quicksand 600 and 700;
  // Nunito 400, 600, 700 and 800).
  const faces = built().match(/@font-face\{[^}]*\}/g) ?? [];
  const ranges = new Map();
  const files = new Set();
  for (const face of faces) {
    const family = face.match(/font-family:\s*"?'?([A-Za-z]+)/)[1];
    const weight = face.match(/font-weight:\s*(\d+(?:\s+\d+)?)/)[1].replace(/\s+/, ' ');
    ranges.set(family, [...(ranges.get(family) ?? []), weight]);
    assert.match(face, /font-display:\s*swap/, `${family} ${weight} swaps`);
    const urls = [...face.matchAll(/url\(["']?([^)"']+)["']?\)/g)].map((m) => m[1]);
    assert.equal(urls.length, 1, `${family} ${weight} has one source`);
    for (const url of urls) {
      assert.doesNotMatch(url, /^(https?:)?\/\//, `${url} is not external`);
      // Relative to the stylesheet at /assets/css/site.css.
      const file = path.join('dist/assets/css', url);
      assert.ok(file.startsWith('dist/assets/fonts/') && existsSync(file), `${url} resolves to a file in dist/assets/fonts`);
      files.add(file);
    }
  }
  assert.deepEqual(Object.fromEntries(ranges), { Quicksand: ['600 700', '600 700'], Nunito: ['400 800', '400 800'] });
  // Latin text needs two files; a page with a latin-ext character, four at most.
  assert.equal(files.size, 4);
  // The minifier writes latin's U+0000-00FF as U+??.
  assert.equal(faces.filter((f) => /unicode-range:\s*U\+(\?\?|0+-0*FF)(,|;|$)/i.test(f)).length, 2);
});

test('the page scales with the window, and on very large screens it keeps growing (R3, Step 6)', () => {
  // 16 px to 1440 px, then with the window to 24 px (150%, reached at 3040 px; it stopped at 22 px
  // before). The column is 82rem until half the window plus its padding is wider, up to 96rem: the
  // content spans at least half the window to 3840 px and 40% at 5120 px (DESIGN.md, Layout).
  const css = built().replace(/\s+/g, '');
  assert.match(css, /html\{[^}]*font-size:clamp\(100%,\.5vw\+\.55rem,150%\)/);
  assert.match(css, /--frame:clamp\(82rem,50vw\+9rem,96rem\)/);
});

// px tokens in declarations that set a size: borders, outlines, shadows, blur and the keyframes
// (the hero text's rise) are left out, since DESIGN.md sets those in px on purpose.
function pxSizes(source) {
  const css = source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/@keyframes[^{]*\{(?:[^{}]*\{[^}]*\})*[^}]*\}/g, '');
  const skip = /^(box-shadow|outline|outline-offset|border.*|--shadow|--blur|backdrop-filter|-webkit-backdrop-filter)$/;
  let count = 0;
  for (const [, prop, value] of css.matchAll(/([\w-]+)\s*:\s*([^;{}]+)/g))
    if (!skip.test(prop)) count += (value.match(/\d*\.?\d+px\b/g) ?? []).length;
  return count;
}

test('no px sizes beyond those the design already has', () => {
  // Rules the site no longer needs (the map's town pins, R2) take their px with them, so the site may
  // have fewer than lumen.css, never more.
  const site = pxSizes(readFileSync('src/css/site.css', 'utf8'));
  const design = pxSizes(readFileSync('designs/src/css/lumen.css', 'utf8'));
  assert.ok(design > 0, 'the counter finds the design\'s own px sizes');
  assert.ok(site <= design, `site.css has ${site} px sizes, lumen.css ${design}`);
});

test('on wide windows the film\'s frame stretches across the opening, at any shape', () => {
  // The still's layout centres the frame (justify-self: center); browsers that align absolutely
  // positioned boxes would then shrink the live film to its canvas's shape, leaving bare sides on a
  // 21:9 window. The live film's rule stretches it back. Measured in the browser in Task 1.5.
  const css = readFileSync('dist/assets/css/site.css', 'utf8').replace(/\s+/g, '');
  const wide = css.split('@media(min-width:56.25rem)and(min-aspect-ratio:21/20)').slice(1).join('');
  assert.match(wide, /html\.film-live\.film-screen\{[^}]*justify-self:stretch/);
});

// The block a media query opens in the built stylesheet, up to its closing brace.
const mediaBlock = (css, query) => {
  const start = css.indexOf(`@media ${query}{`);
  assert.ok(start !== -1, query);
  let depth = 0;
  for (let i = css.indexOf('{', start); i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}' && --depth === 0) return css.slice(start, i + 1);
  }
  return css.slice(start);
};

test('the tables\' list forms drop the head row, not clip it: their entries name themselves (M1)', () => {
  const css = built();
  const sites = mediaBlock(css, '(max-width:63.99rem)');
  assert.match(sites, /\.sites thead\{[^}]*display:none/);
  assert.doesNotMatch(sites, /\.sites thead\{[^}]*clip-path/);
  const compare = mediaBlock(css, '(max-width:47.99rem)');
  assert.match(compare, /\.compare-table thead\{[^}]*display:none/);
  assert.doesNotMatch(compare, /\.compare-table thead\{[^}]*clip-path/);
});

test('the sticky sites head sticks at the top, naming no variable that is never set (M8)', () => {
  assert.doesNotMatch(built(), /\.sites thead\{[^}]*--compare-h/);
  assert.match(built(), /\.sites thead\{[^}]*top:0[;}]/);
});

test('Recent work\'s middots are drawn, not read aloud (M3)', () => {
  const rule = built().match(/\.entries-kinds li:before\{[^}]*\}/)?.[0] ?? '';
  assert.match(rule, /content:"·"\s*\/\s*""/);
});

test('the drawn carton has rem sizes for a browser without container units (M8)', () => {
  // The minifier drops a fallback declaration written before the cqi one, so the fallback is a
  // @supports block.
  assert.match(built(), /\.carton\{[^}]*width:42cqi/);
  const fallback = mediaBlock(built().replace('@supports not (width:1cqi){', '@media FALLBACK{'), 'FALLBACK');
  assert.match(fallback, /\.carton\{[^}]*width:[\d.]+rem[^}]*height:[\d.]+rem/);
  assert.match(fallback, /\.carton:before\{[^}]*height:[\d.]+rem/);
  assert.match(fallback, /\.carton:after\{[^}]*width:[\d.]+rem/);
});

test('every page preloads the two latin type files, so the text is not set twice (Task 6.4: CLS)', async () => {
  const { pages, load } = await import('./helpers.mjs');
  const latin = [...readFileSync('src/css/fonts.css', 'utf8').matchAll(/url\(\.\.\/fonts\/([\w-]+\.woff2)\)/g)].map((m) => m[1]).filter((f) => !f.includes('-ext-'));
  assert.equal(latin.length, 2);
  for (const url of pages({ include404: true })) {
    const $ = load(url);
    const preloads = $('link[rel=preload][as=font]');
    assert.deepEqual(preloads.map((i, l) => l.attribs.href).get().sort(), latin.map((f) => `/assets/fonts/${f}`).sort(), url);
    preloads.each((i, l) => {
      assert.equal(l.attribs.type, 'font/woff2', url);
      assert.ok('crossorigin' in l.attribs, `${url}: a font preload needs crossorigin`);
      assert.ok(existsSync(`dist${l.attribs.href}`), l.attribs.href);
    });
  }
});

test('every weight the stylesheet asks for is one the design names (a variable face draws any weight in its range)', () => {
  const asked = [...built().matchAll(/font-weight:\s*(\d+)(?=[;}\s!])(?!\s+\d)/g)].map((m) => Number(m[1]));
  assert.ok(asked.length > 20);
  assert.deepEqual([...new Set(asked)].filter((w) => ![400, 600, 700, 800].includes(w)), []);
});
