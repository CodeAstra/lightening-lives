// The stylesheet carries the chosen design: its tokens, its self-hosted type, the page's scaling, and
// no new px sizes. Reads dist/, which `npm test` builds first.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path, { join } from 'node:path';

const built = () => readFileSync('dist/assets/css/site.css', 'utf8');

test('tokens carry the chosen variation', () => {
  const css = built().replace(/\s+/g, '').toLowerCase();
  for (const s of ['--ff-display:"Quicksand"', '--ff-body:"Nunito"', '--ff-mono:"Nunito"', '--display-weight:700', '--display-tracking:-.02em', '--label-weight:800', '--label-tracking:.08em', '--sun:#ffc53d', '--leaf:#0369a1'])
    assert.ok(css.includes(s.toLowerCase()), s);
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

test('the type is self-hosted, in the six weights the design names and no others', () => {
  const faces = built().match(/@font-face\{[^}]*\}/g) ?? [];
  const loaded = new Set();
  for (const face of faces) {
    const family = face.match(/font-family:\s*"?'?([A-Za-z]+)/)[1];
    const weight = face.match(/font-weight:\s*(\d+)/)[1];
    loaded.add(`${family} ${weight}`);
    assert.match(face, /font-display:\s*swap/, `${family} ${weight} swaps`);
    const urls = [...face.matchAll(/url\(["']?([^)"']+)["']?\)/g)].map((m) => m[1]);
    assert.ok(urls.length > 0, `${family} ${weight} has a source`);
    for (const url of urls) {
      assert.doesNotMatch(url, /^(https?:)?\/\//, `${url} is not external`);
      // Relative to the stylesheet at /assets/css/site.css.
      const file = path.join('dist/assets/css', url);
      assert.ok(file.startsWith('dist/assets/fonts/') && existsSync(file), `${url} resolves to a file in dist/assets/fonts`);
    }
  }
  assert.deepEqual([...loaded].sort(), ['Nunito 400', 'Nunito 600', 'Nunito 700', 'Nunito 800', 'Quicksand 600', 'Quicksand 700']);
});

test('the page scales with the window and the column is capped', () => {
  const css = built().replace(/\s+/g, '');
  assert.match(css, /html\{[^}]*font-size:clamp\(100%,\.5vw\+\.55rem,137\.5%\)/);
  assert.match(css, /--frame:82rem/);
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
  const site = pxSizes(readFileSync('src/css/site.css', 'utf8'));
  const design = pxSizes(readFileSync('designs/src/css/lumen.css', 'utf8'));
  assert.ok(design > 0, 'the counter finds the design\'s own px sizes');
  assert.equal(site, design);
});
