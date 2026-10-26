// The motion module (plan, Task 2.1; DESIGN.md, Motion): everything outside the film either answers the
// reader, briefly, or shows once, the first time it comes into view, what a section says happening (the
// testing model, the comparison, the path of a new test); nothing at all for a reader who has asked for
// less motion. Nothing is scrubbed, and the one thing that repeats, the partners' logos changing in
// place, stops when pointed at, focused or tapped (25 October 2026, evening).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
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
  // The kits in 3D on Solutions: three.js again, without the film.
  assert.ok(gz('dist/assets/js/site-kits.js') <= 160 * 1024, `site-kits.js ${Math.round(gz('dist/assets/js/site-kits.js') / 1024)} KB`);
  // The gel is flat (26 October 2026): no bundle of its own.
  assert.ok(!existsSync('dist/assets/js/site-gel.js'), 'no site-gel.js');
  // GSAP is the page's, not the film's: in site.js or in a chunk site.js imports.
  const site = readFileSync('dist/assets/js/site.js', 'utf8');
  const chunks = [...site.matchAll(/from\s*"\.\/(chunk-[\w-]+\.js)"/g)].map((m) => readFileSync(`dist/assets/js/${m[1]}`, 'utf8'));
  assert.ok([site, ...chunks].some((js) => /GreenSock|gsap/i.test(js)), 'GSAP is loaded with the page');
  assert.ok(gz('dist/assets/js/site.js') + chunks.reduce((sum, js) => sum + gzipSync(js).length, 0) <= 90 * 1024, 'site.js with its chunks');
});

test('nothing loops: the stylesheet has no endless animation, and the partners\' logos stop when asked (WCAG 2.2.2)', () => {
  const css = readFileSync('src/css/site.css', 'utf8');
  const loops = [...css.matchAll(/([^{}]+)\{[^}]*\binfinite\b[^}]*\}/g)].map((m) => m[1].trim());
  assert.deepEqual(loops, [], 'no endless CSS animation');
  assert.doesNotMatch(code(), /repeat:\s*-1|yoyo/);
  // The logos change every few seconds, only while seen, and hold while pointed at, focused or tapped;
  // they are bound under the reduced-motion guard, so never for a reader who asked for less.
  assert.match(code(), /function cycleLogos\(signal\)/);
  assert.match(code(), /cycleLogos\(stop\.signal\)/);
  for (const event of ['pointerenter', 'focusin', "'click'", 'visibilitychange', 'IntersectionObserver']) assert.ok(code().includes(event), event);
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
    press: '.btn, .nav-link, .tag, .action',
    arrow: '.link',
    go: 'svg[data-icon="arrow-right"], svg[data-icon="arrow-up-right"]',
    slide: '.actions a',
    settle: 'main > section.section:not(.page-open) > .wrap > :first-child:not(.sr-only), main > section.section:not(.page-open) > .wrap > .sr-only + *',
    segment: '.seg',
    disclosure: 'details:not([data-menu])',
    menu: 'details[data-menu]',
    gel: '[data-gel]',
    gelLane: '.lane',
    gelBand: '.lane-band',
    logos: '[data-logos]',
    model: '.model',
    compare: '.compare-table',
    develop: '.develop-path',
    sequence: '.method-steps, .start-steps',
    mosaic: '[data-mosaic]',
    tile: '[data-mosaic-tile]',
  });
  // Every query in motion.js goes through all(BOUND.…) or looks inside an element it was given.
  const queries = [...code().matchAll(/\.querySelector(?:All)?\(\s*(['"`][^'"`]*['"`]|[^)'"`]+)/g)].map((m) => m[1]);
  for (const q of queries) assert.ok(!/^['"`]/.test(q.trim()) || /^['"`](svg|input:checked|label|span|\.menu-panel|:scope > :not\(summary\)|:scope > summary|\[data-logo-pool\]|\.logo-cycle|\[data-logo-status\]|\.model-phase-test|\.model-phase-care|\.model-step|\.is-ours|\.develop-node|\.tile-pic|\.tile-img|\.tile-words)['"`]$/.test(q.trim()), `unlisted query ${q}`);
  assert.doesNotMatch(code(), /document\.querySelectorAll\(\s*['"`]/);
});
