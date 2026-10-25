// The icon system (DESIGN.md, Icons; plan 2026-10-25 Task 1): Lucide line icons inlined at build time,
// decorative unless labelled, and three filled social marks. An unknown name fails the build.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { icon, brand } from '../src/lib/icons.mjs';

test('a decorative icon: one stroke, hidden from assistive technology, sized by CSS', () => {
  const svg = icon('droplet');
  assert.match(svg, /^<svg class="icon"/);
  assert.match(svg, /aria-hidden="true"/);
  assert.match(svg, /focusable="false"/);
  assert.match(svg, /stroke-width="1\.75"/);
  assert.doesNotMatch(svg, /\swidth=|\sheight=/);
  assert.match(svg, /<path /);
});

test('a labelled icon is an image with that name', () => {
  const svg = icon('droplet', 'Sample');
  assert.match(svg, /role="img" aria-label="Sample"/);
  assert.doesNotMatch(svg, /aria-hidden/);
});

test('an unknown icon stops the build', () => {
  assert.throws(() => icon('no-such-icon'), /Unknown icon: no-such-icon/);
});

test('the social marks are filled and decorative', () => {
  for (const name of ['linkedin', 'youtube', 'x']) {
    const svg = brand(name);
    assert.match(svg, /fill="currentColor"/, name);
    assert.match(svg, /aria-hidden="true"/, name);
    assert.match(svg, /<path /, name);
  }
});

test('no page ships an empty icon', () => {
  const html = (dir) => readdirSync(dir, { recursive: true }).filter((f) => f.endsWith('.html')).map((f) => join(dir, f));
  for (const file of html('dist')) {
    for (const [svg] of readFileSync(file, 'utf8').matchAll(/<svg class="icon[^"]*"[\s\S]*?<\/svg>/g))
      assert.match(svg, /<(path|circle|rect|line|polyline|polygon|ellipse)\b/, file);
  }
});
