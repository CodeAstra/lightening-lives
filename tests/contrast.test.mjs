// Phase 6, Task 6.4 Step 3a: DESIGN.md's contrast table, re-measured on the built stylesheet. The
// three text colours (canopy, moss, leaf) on every surface they are set on (mist, paper, sprout, stone
// and glass over mist), the solid button's paper on leaf, and canopy on the one pointed-out fill (life
// green lightened through paper, 22%: the comparison table's column and the 404 page's line). Every
// pair at least 4.5:1 (WCAG 2, AA, text of any size).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync('dist/assets/css/site.css', 'utf8');
const token = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*([^;]+);`));
  assert.ok(m, `--${name} in the built CSS`);
  return m[1].trim();
};
const rgba = (value) => {
  // The built stylesheet is minified: #fff, #f0f9ff, #ffffff9e (with alpha).
  let hex = value.match(/^#([0-9a-f]{3,8})$/i)?.[1];
  if (hex) {
    if (hex.length <= 4) hex = [...hex].map((d) => d + d).join('');
    const [r, g, b, a = 255] = hex.match(/../g).map((d) => parseInt(d, 16));
    return [r, g, b, a / 255];
  }
  const fn = value.match(/^rgba?\(([^)]+)\)$/);
  assert.ok(fn, value);
  const [r, g, b, a = 1] = fn[1].split(',').map((s) => Number(s.trim()));
  return [r, g, b, a];
};
// A colour laid over another: its alpha mixes it with what is under it.
const over = (top, under, alpha = top[3]) => top.slice(0, 3).map((c, i) => c * alpha + under[i] * (1 - alpha)).concat(1);
const luminance = ([r, g, b]) => {
  const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
export const ratio = (a, b) => { const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

test('the ratio is WCAG 2\'s: black on white is 21, a colour on itself 1', () => {
  assert.equal(Math.round(ratio([0, 0, 0], [255, 255, 255]) * 100) / 100, 21);
  assert.equal(ratio([12, 74, 110], [12, 74, 110]), 1);
});

test('every text colour on every surface it is set on is at least 4.5:1', () => {
  const c = Object.fromEntries(['mist', 'paper', 'sprout', 'stone', 'leaf', 'canopy', 'moss', 'sun', 'glass', 'glass-strong'].map((n) => [n, rgba(token(n))]));
  const surfaces = {
    mist: c.mist,
    paper: c.paper,
    sprout: c.sprout,
    stone: c.stone,
    'glass over mist': over(c.glass, c.mist),
    'strong glass over mist': over(c['glass-strong'], c.mist),
    'sun through paper (22%)': over(c.sun, c.paper, 0.22),
  };
  const found = [];
  for (const text of ['canopy', 'moss', 'leaf']) {
    for (const [name, surface] of Object.entries(surfaces)) {
      const r = ratio(c[text], surface);
      found.push(`${text} on ${name} ${r.toFixed(2)}`);
      assert.ok(r >= 4.5, `${text} on ${name}: ${r.toFixed(2)}`);
    }
  }
  assert.ok(ratio(c.paper, c.leaf) >= 4.5, 'paper on leaf (the solid button)');
  assert.ok(ratio(c.paper, c.canopy) >= 4.5, 'paper on canopy');
  // DESIGN.md's figures, to two places, where it gives them.
  assert.equal(ratio(c.canopy, c.mist).toFixed(2), '8.87');
  assert.equal(ratio(c.moss, c.mist).toFixed(2), '7.11');
  assert.equal(ratio(c.leaf, c.mist).toFixed(2), '5.57');
  assert.equal(ratio(c.paper, c.leaf).toFixed(2), '5.93');
});
