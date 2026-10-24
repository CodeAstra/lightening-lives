// The motion module (plan, Task 2.1; DESIGN.md, Motion): everything outside the film moves only in
// answer to the reader, briefly, and not at all for a reader who has asked for less motion; the one
// scroll-linked motion is a section's opening settling in once (decision D1, B). Nothing loops.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

const src = () => readFileSync('src/js/site/motion.js', 'utf8');
const code = () => src().replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

test('motion module respects reduced motion', () => {
  assert.match(src(), /export function initMotion/);
  assert.match(src(), /prefers-reduced-motion/); // the guard is read, not assumed
  // It is called from the page's behaviour.
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /initMotion\(/);
});

test('bundle budgets', () => {
  const gz = (f) => gzipSync(readFileSync(f)).length;
  assert.ok(gz('dist/assets/js/site.js') <= 90 * 1024, `site.js ${Math.round(gz('dist/assets/js/site.js') / 1024)} KB`);
  assert.ok(gz('dist/assets/js/site-scene.js') <= 260 * 1024, `site-scene.js ${Math.round(gz('dist/assets/js/site-scene.js') / 1024)} KB`);
  // GSAP is the page's, not the film's: it is in site.js.
  assert.match(readFileSync('dist/assets/js/site.js', 'utf8'), /GreenSock|gsap/i);
});

test('nothing loops', () => {
  const css = readFileSync('dist/assets/css/site.css', 'utf8');
  assert.doesNotMatch(css, /animation-iteration-count:\s*infinite|\binfinite\b/);
  assert.doesNotMatch(code(), /repeat:\s*-1|yoyo/);
});

test('the one scroll-linked motion settles in once and is never scrubbed (D1, B)', () => {
  assert.match(code(), /ScrollTrigger/);
  assert.match(code(), /once:\s*true/);
  assert.doesNotMatch(code(), /scrub|pin:\s*true|parallax/);
});

test('every tween can be interrupted, and answers the keyboard as it answers the pointer', () => {
  assert.match(code(), /overwrite:\s*'auto'/);
  for (const [pointer, key] of [['pointerenter', 'focus'], ['pointerleave', 'blur'], ['pointerdown', 'keydown']])
    assert.ok(code().includes(pointer) && code().includes(key), `${pointer} and ${key}`);
});

test('what GSAP moves, the stylesheet no longer transitions, so nothing moves twice', () => {
  const css = readFileSync('src/css/site.css', 'utf8').replace(/\s+/g, ' ');
  // The link's arrow and the contact row's slide are GSAP's while motion is on.
  assert.doesNotMatch(css, /\.link svg \{[^}]*transition/);
  assert.doesNotMatch(css, /\.actions a \{[^}]*transition:[^;]*padding-left/);
  assert.doesNotMatch(css, /\.film-caption \{[^}]*transition/);
  assert.match(css, /\.motion-on \.link:hover svg[^{]*\{[^}]*translate: none/);
});

test('initMotion binds exactly the listed selectors, and reaches elements only through the list (Task 2.3)', async () => {
  // A later page cannot add a motion by accident: a new one is a new line here and in motion.js.
  const { BOUND } = await import('../src/js/site/motion.js').catch(() => ({ BOUND: null })) ?? {};
  const listed = BOUND ?? Function(`return ${src().match(/export const BOUND = (\{[\s\S]*?\n\});/)[1]}`)();
  assert.deepEqual(listed, {
    press: '.btn, .nav-link, .tag, .test-row, .action',
    arrow: '.link',
    slide: '.actions a',
    caption: '[data-film-caption]',
    settle: 'main > section.section > .wrap > :first-child, main > section.vision > .wrap',
    segment: '.seg',
    disclosure: 'details.map-sources, details.about, .faq details, details.credits',
    menu: 'details[data-menu]',
  });
  // Every query in motion.js goes through all(BOUND.…) or looks inside an element it was given.
  const queries = [...code().matchAll(/\.querySelector(?:All)?\(\s*(['"`][^'"`]*['"`]|[^)'"`]+)/g)].map((m) => m[1]);
  for (const q of queries) assert.ok(!/^['"`]/.test(q.trim()) || /^['"`](svg|input:checked|label|span|\.menu-panel|:scope > :not\(summary\))['"`]$/.test(q.trim()), `unlisted query ${q}`);
  assert.doesNotMatch(code(), /document\.querySelectorAll\(\s*['"`]/);
});
