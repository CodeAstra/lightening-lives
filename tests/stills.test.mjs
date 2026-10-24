// The film's stills and the preview card, captured from this site's own film and map (Archivo on the
// cards since 25 October 2026, the drop at 0.027, fifteen sites), not copied from the approved page, whose
// stills were taken with Roboto Mono and the larger drop (DESIGN.md, Imagery).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { load } from './helpers.mjs';

// Width and height from a WebP's or PNG's header.
function size(file) {
  const b = readFileSync(file);
  if (b.toString('ascii', 1, 4) === 'PNG') return [b.readUInt32BE(16), b.readUInt32BE(20)];
  const kind = b.toString('ascii', 12, 16);
  if (kind === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  if (kind === 'VP8L') { const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
  if (kind === 'VP8X') return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
  throw new Error(`${file}: not a WebP or PNG`);
}
const md5 = (file) => createHash('md5').update(readFileSync(file)).digest('hex');
const $ = load('/');

test('every still the home page shows is there at the size its markup gives', () => {
  const stills = $('img[src^="/assets/img/site-"]');
  assert.ok(stills.length >= 5);
  stills.each((i, img) => {
    const file = `dist${img.attribs.src}`;
    assert.ok(existsSync(file), file);
    assert.deepEqual(size(file), [Number(img.attribs.width), Number(img.attribs.height)], file);
  });
  // The map's stills, one per layer, swapped in by the script while the map is not live.
  const layers = $('input[name=map-layer]').map((i, el) => el.attribs['data-still']).get();
  assert.deepEqual(layers, ['/assets/img/site-map-sickle.webp', '/assets/img/site-map-thal.webp', '/assets/img/site-map-work.webp']);
  for (const src of layers) assert.deepEqual(size(`dist${src}`), [1000, 1000], src);
});

test('the stills are this site\'s own captures, not the approved page\'s', () => {
  const approved = new Set(readdirSync('designs/assets/img').filter((f) => f.startsWith('lumen-')).map((f) => md5(`designs/assets/img/${f}`)));
  const ours = readdirSync('src/assets/img').filter((f) => f.startsWith('site-'));
  assert.ok(ours.length >= 8, ours.join());
  for (const f of ours) assert.ok(!approved.has(md5(`src/assets/img/${f}`)), `${f} is a copy of an approved still`);
  // And each is a different picture.
  assert.equal(new Set(ours.map((f) => md5(`src/assets/img/${f}`))).size, ours.length);
});

test('the preview card is the 1200 x 630 PNG the page names, light enough to share', () => {
  assert.equal($('meta[property="og:image"]').attr('content'), 'https://lighteninglives.in/assets/img/social.png');
  assert.ok(existsSync('dist/assets/img/social.png'));
  assert.deepEqual(size('dist/assets/img/social.png'), [1200, 630]);
  assert.ok(statSync('dist/assets/img/social.png').size <= 300 * 1024, `${statSync('dist/assets/img/social.png').size} bytes`);
  const alt = $('meta[property="og:image:alt"]').attr('content') ?? '';
  assert.match(alt, /Genetic testing from a spot of blood on a card\./);
  assert.match(alt, /map of India/);
});
