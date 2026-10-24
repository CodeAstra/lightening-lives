// The opening film and the page's behaviour, ported from designs/src/js/lumen/: two bundles, the film
// fetched only when it will play, the client's settled drop and take, and nothing of the comparison
// toolbar. The film's markup on the home page (the gate, the still, "Play the film") is checked in
// home.test.mjs, with the page that carries it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const bundle = (name) => readFileSync(`dist/assets/js/${name}`, 'utf8');
const source = (file) => readFileSync(`src/js/site/${file}`, 'utf8');

test('both bundles build', () => {
  assert.ok(existsSync('dist/assets/js/site.js'), 'site.js');
  assert.ok(existsSync('dist/assets/js/site-scene.js'), 'site-scene.js');
});

test('three.js is in the film\'s bundle only, so pages without the film never download it', () => {
  assert.match(bundle('site-scene.js'), /WebGLRenderer|WebGL2RenderingContext/);
  assert.doesNotMatch(bundle('site.js'), /WebGLRenderer|ShaderMaterial|three\.module/);
  // The card's logo is drawn into a canvas, so it is inlined: no separate file to fetch or ship.
  assert.match(bundle('site-scene.js'), /data:image\/png;base64,/);
});

test('the page fetches the film from beside its own bundle', () => {
  // site.js is an ES module, where document.currentScript is null: the film's address must come
  // from import.meta.url, or the film never loads.
  const site = bundle('site.js');
  assert.match(site, /site-scene\.js/);
  assert.match(site, /import\.meta\.url/);
  assert.doesNotMatch(source('main.js').replace(/\/\/.*$/gm, ''), /document\.currentScript/);
});

test('the drop is the chosen size and the take is the approved length', () => {
  const scene = source('scene.js');
  const drop = scene.match(/const DROP = \{[\s\S]*?\n\};/)?.[0] ?? '';
  assert.match(drop, /\bradius:\s*0\.027\b/, 'DROP.radius is 0.027 of the card\'s length');
  const timing = scene.match(/const TIMING = \{[\s\S]*?\n\};/)?.[0] ?? '';
  assert.match(timing, /\bend:\s*6\.56\b/, 'the take ends at 6.56 s');
  // The page never varies the drop or the pace any more: nothing may read them over the settled values.
  assert.doesNotMatch(scene, /--film-drop|--film-pace/);
});

test('nothing of the comparison toolbar is left in the page\'s scripts', () => {
  for (const file of readdirSync('src/js/site').filter((f) => f.endsWith('.js')))
    assert.doesNotMatch(source(file), /ll:theme|['"`]ll-|compare|localStorage/, file);
});

test('the film renders at no more than twice the window\'s pixels', () => {
  // A 3840 x 2160 window is drawn at most 7680 x 4320 device pixels; the scene lowers it further on
  // a slow machine.
  assert.match(source('scene.js'), /ratio:\s*Math\.min\(window\.devicePixelRatio \|\| 1, 2\)/);
});

test('the film waits for the opening to be painted, and compiles its shaders before its first frame', () => {
  // Measured with Lighthouse in Task 1.5: fetched at once and compiled on its first draw, the film's
  // start-up was one 1.7 s task on the emulated phone (mobile performance 57); fetched after the
  // first paint and compiled ahead of its first frame, it is three short ones (96).
  assert.match(source('main.js').replace(/\/\/.*$/gm, ''), /requestAnimationFrame\(\(\) => setTimeout\(load, 0\)\)/);
  assert.match(source('scene.js'), /renderer\.compileAsync\(scene, camera\)\.then\(begin, begin\)/);
  assert.match(source('scene.js'), /if \(!path\.distance \|\| !compiled\) return;/);
});
