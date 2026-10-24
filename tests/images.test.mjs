// Phase 3: the photographs. Every source in src/images-src becomes 640, 1280 and (when it is wide
// enough) 1920 px WebPs; every picture a page shows is in its widths, offered whole through srcset,
// and credited; the footer credits only what its page shows. Run `npm run images` after adding a
// source; the build does not run it.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load as cheerio } from 'cheerio';
import sharp from 'sharp';
import Eleventy from '@11ty/eleventy';
import { load, pages } from './helpers.mjs';

// The plan's shortlist (Task 3.1): the basename is the contract the pages are written against.
const SHORTLIST = [
  'place-nandurbar', 'place-kothagudem', 'place-jharkhand', 'place-hyderabad',
  'place-udaipur', 'place-mysore', 'place-gudalur', 'place-valsad',
  'lab-thermal-cycler', 'lab-gel', 'lab-pipette', 'lab-bench',
  'method-fingerprick', 'method-paper',
  'care-newborn', 'care-phc', 'care-anganwadi',
];
const LICENCES = /^(CC0 1\.0|Public domain|CC BY(-SA)? [1-4]\.0|Unsplash Licence)$/;
const SRC = 'src/images-src';
const sources = () => readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f)).map((f) => ({ file: `${SRC}/${f}`, base: f.replace(/\.\w+$/, '') }));
const credits = () => JSON.parse(readFileSync('src/site/_data/credits.json', 'utf8'));
const images = () => JSON.parse(readFileSync('src/site/_data/images.json', 'utf8'));
const placed = ($) => $('img[src^="/assets/img/"]').filter((i, el) => !/^\/assets\/img\/(site-|social)/.test(el.attribs.src));
const baseOf = (src) => src.replace(/^\/assets\/img\//, '').replace(/-(640|1280|1920)\.webp$/, '');

test('every picture on the shortlist has a source of at least 1600 px on its long side', async () => {
  const have = new Set(sources().map((s) => s.base));
  for (const base of SHORTLIST) assert.ok(have.has(base), `${base} has no source in ${SRC}/`);
  for (const { file } of sources()) {
    const { width, height } = await sharp(file).metadata();
    assert.ok(Math.max(width, height) >= 1600 && Math.max(width, height) <= 2400, `${file}: ${width}x${height}`);
  }
});

test('every source is written at 640 and 1280, and at 1920 when it is that wide, metadata stripped', async () => {
  for (const { file, base } of sources()) {
    const { width } = await sharp(file).metadata();
    const widths = [640, 1280, ...(width >= 1920 ? [1920] : [])];
    for (const w of widths) {
      const out = `src/assets/img/${base}-${w}.webp`;
      assert.ok(existsSync(out), out);
      const m = await sharp(out).metadata();
      assert.equal(m.format, 'webp', out);
      assert.equal(m.width, w, out);
      assert.equal(m.exif, undefined, `${out} keeps EXIF`);
      assert.equal(m.xmp, undefined, `${out} keeps XMP`);
    }
    if (width < 1920) assert.ok(!existsSync(`src/assets/img/${base}-1920.webp`), `${base}-1920.webp is an upscale`);
    // The manifest the picture include reads agrees with the files, to the pixel (the <img>'s
    // width and height reserve its box before it loads).
    assert.deepEqual(images()[base]?.widths, widths, `images.json for ${base}`);
    assert.equal(images()[base]?.height640, (await sharp(`src/assets/img/${base}-640.webp`).metadata()).height, `images.json height640 for ${base}`);
  }
});

test('the screening card\'s printed number, at the left edge of method-paper, is cut away', async () => {
  // The source shows part of a card's serial number in its left 13%: a sample code, which no
  // published picture may show. The published widths start 16% in.
  const { width, height } = await sharp(`${SRC}/method-paper.jpg`).metadata();
  const kept = width - Math.round(width * 0.16);
  assert.equal(images()['method-paper'].height640, Math.round((640 * height) / kept));
  const m = await sharp('src/assets/img/method-paper-1280.webp').metadata();
  assert.equal(m.height, Math.round((1280 * height) / kept));
});

test('every source is credited in CREDITS.md, and credits.json is that table', () => {
  const md = readFileSync('src/assets/img/CREDITS.md', 'utf8');
  const rows = credits();
  for (const { base } of sources()) {
    assert.match(md, new RegExp('^\\| `' + base + '` \\|', 'm'), `${base} has no row in CREDITS.md`);
    const row = rows.find((r) => r.basename === base);
    assert.ok(row, `${base} is not in credits.json`);
    for (const key of ['shows', 'label', 'author', 'licence', 'source', 'sourceUrl']) assert.ok(row[key], `${base}: ${key}`);
    assert.match(row.licence, LICENCES, `${base}: ${row.licence}`);
    if (/^CC BY/.test(row.licence)) assert.match(row.licenceUrl, /^https:\/\/creativecommons\.org\/licenses\//, `${base}: licence link`);
    assert.match(row.sourceUrl, /^https:\/\//, `${base}: source link`);
  }
  // The map's outline is credited too, though it is data, not a photograph.
  assert.ok(rows.find((r) => r.basename === 'map-india'), 'the map outline is credited');
  // A licence that does not allow commercial use or changes is never on the list.
  assert.doesNotMatch(md, /\bNC\b|\bND\b|NonCommercial|NoDerivatives/);
});

test('every placed image exists in both widths and is credited', () => {
  const md = readFileSync('src/assets/img/CREDITS.md', 'utf8');
  for (const url of pages()) {
    const $ = load(url);
    placed($).each((i, el) => {
      const base = baseOf(el.attribs.src);
      assert.ok(existsSync(`dist/assets/img/${base}-640.webp`) && existsSync(`dist/assets/img/${base}-1280.webp`), base);
      if (el.attribs.srcset) assert.match(el.attribs.srcset, /1280w/, base); // the widest available is offered
      assert.match(md, new RegExp('`' + base + '`'), `${base} is not credited`);
    });
  }
});

test('every placed photograph comes through the picture include: every width, sizes, lazy, dimensions', () => {
  for (const url of pages()) {
    const $ = load(url);
    placed($).each((i, el) => {
      const base = baseOf(el.attribs.src);
      const entry = images()[base];
      assert.ok(entry, `${url}: ${base} is not in images.json`);
      assert.equal(el.attribs.src, `/assets/img/${base}-640.webp`, `${url}: ${base} src`);
      assert.equal(el.attribs.srcset, entry.widths.map((w) => `/assets/img/${base}-${w}.webp ${w}w`).join(', '), `${url}: ${base} srcset`);
      assert.ok(el.attribs.sizes, `${url}: ${base} sizes`);
      assert.equal(el.attribs.loading, 'lazy', `${url}: ${base} loading`);
      assert.equal(el.attribs.decoding, 'async', `${url}: ${base} decoding`);
      assert.deepEqual([Number(el.attribs.width), Number(el.attribs.height)], [640, entry.height640], `${url}: ${base} dimensions`);
      assert.ok((el.attribs.alt ?? '').trim().split(/\s+/).length >= 4, `${url}: ${base} alt`);
    });
  }
});

test('the home page shows the three place photographs, captioned by state', () => {
  const $ = load('/');
  const figures = $('.fieldwork figure');
  assert.deepEqual(figures.map((i, f) => baseOf($(f).find('img').attr('src'))).get(), ['place-nandurbar', 'place-kothagudem', 'place-jharkhand']);
  assert.deepEqual(figures.map((i, f) => $(f).find('figcaption').text().trim()).get(), ['Maharashtra', 'Telangana', 'Jharkhand']);
  assert.match(figures.eq(0).find('img').attr('alt'), /Toranmal, Nandurbar district, Maharashtra/);
});

test('the footer credits what its page shows, and says the photographs are representative', () => {
  const $ = load('/');
  const items = $('.credits li[data-credit]');
  const shown = new Set(placed($).map((i, el) => baseOf(el.attribs.src)).get());
  assert.deepEqual(new Set(items.map((i, li) => li.attribs['data-credit']).get()), new Set([...shown, 'map-india']));
  for (const row of credits().filter((r) => shown.has(r.basename))) {
    const li = $(`.credits li[data-credit="${row.basename}"]`);
    assert.ok(li.text().includes(row.label), `${row.basename}: label`);
    assert.ok(li.text().includes(row.author), `${row.basename}: author`);
    assert.equal(li.find(`a[href="${row.sourceUrl}"]`).length, 1, `${row.basename}: source link`);
    if (row.licenceUrl) assert.equal(li.find(`a[href="${row.licenceUrl}"]`).length, 1, `${row.basename}: licence link`);
  }
  // rel="license" would declare the licence of the page itself, and the page is the company's
  // (content 5.17): a photograph's licence is linked plainly.
  assert.equal($('[rel~="license"]').length, 0, 'a link declares the page\'s own licence');
  assert.match($('.credits').text(), /representative/i);
  // The line is the content file's (4.2), not the build's own copy.
  const line = $('.credits > p').first().text().trim();
  assert.ok(readFileSync('content/website-content.md', 'utf8').includes(`**Representative line:** ${line}`), `"${line}" is not in content 4.2`);
});

// Fixture pages, rendered through the real config, layout and data, test the include and the
// footer's filter where no built page does yet.
let dir;
let built;
let broken; // a fixture that fails to render fails only the tests that read the fixtures
before(async () => { try {
  dir = mkdtempSync(path.join(tmpdir(), 'll-images-'));
  const input = path.join(dir, 'site');
  cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
  cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
  cpSync('src/js/map', path.join(dir, 'js', 'map'), { recursive: true });
  writeFileSync(path.join(input, 'lab.njk'), `---
title: Lab | Lightening Lives
description: A fixture page that shows one laboratory photograph through the picture include.
h1: Laboratory
lead: A lead.
---
{% from "picture.njk" import picture with context %}
<section class="section"><div class="wrap">{{ picture('lab-gel', 'Agarose gel under blue light with bands of DNA.') }}</div></section>
`);
  writeFileSync(path.join(input, 'bare.njk'), `---
title: Bare | Lightening Lives
description: A fixture page that shows no photograph and no map at all.
h1: Bare
lead: A lead.
---
`);
  const eleventy = new Eleventy(input, path.join(dir, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
  built = Object.fromEntries((await eleventy.toJSON()).map((p) => [p.url, cheerio(p.content)]));
} catch (error) { broken = error; } });
const fixture = (url) => { if (broken) throw broken; return built[url]; };
after(() => rmSync(dir, { recursive: true, force: true }));

test('picture() defaults sizes to half the window on wide screens, and offers the 1920 source where it exists', () => {
  const img = fixture('/lab/')('main img');
  assert.equal(img.attr('sizes'), '(min-width: 60rem) 50vw, 100vw');
  const widths = images()['lab-gel'].widths;
  assert.equal(img.attr('srcset'), widths.map((w) => `/assets/img/lab-gel-${w}.webp ${w}w`).join(', '));
  assert.equal(img.attr('loading'), 'lazy');
});

test('a page credits only its own pictures; a page with none has no credits disclosure', () => {
  const lab = fixture('/lab/')('.credits li[data-credit]').map((i, li) => li.attribs['data-credit']).get();
  assert.deepEqual(lab, ['lab-gel']);
  assert.equal(fixture('/bare/')('.credits').length, 0);
});

test('images.mjs is idempotent', () => {
  execSync('npm run images', { stdio: 'ignore' });
  const probe = ['src/assets/img/place-hyderabad-640.webp', 'src/site/_data/credits.json', 'src/site/_data/images.json', 'src/site/favicon.ico'];
  const a = probe.map((f) => statSync(f).mtimeMs);
  execSync('npm run images', { stdio: 'ignore' });
  assert.deepEqual(probe.map((f) => statSync(f).mtimeMs), a);
});
