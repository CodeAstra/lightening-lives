// Phase 3: the photographs. Every source in src/images-src becomes 640, 1280 and (when it is wide
// enough) 1920 px WebPs; every picture a page shows is in its widths, offered whole through srcset,
// and credited; the footer credits only what its page shows. Run `npm run images` after adding a
// source; the build does not run it.
// Task 4.2: the company's own pictures (basenames starting box- or person-) are small and are not
// stand-ins. They are never upscaled: each is written at the stock widths it is wide enough for and,
// below 1280, at its own width as the widest (a source under 640 once, at its own width). They need
// no row in CREDITS.md, and a page whose only photographs are the company's own shows no credits.
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
  'lab-gel', 'lab-pipette', 'lab-bench',
  'method-fingerprick', 'method-paper',
  'care-newborn', 'care-anganwadi',
];
const LICENCES = /^(CC0 1\.0|Public domain|CC BY(-SA)? [1-4]\.0|Unsplash Licence)$/;
const SRC = 'src/images-src';
const OWN = /^(box|person|work)-/; // the company's own: boxes, portraits, its posters and papers
const all = () => readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f)).map((f) => ({ file: `${SRC}/${f}`, base: f.replace(/\.\w+$/, '') }));
const sources = () => all().filter((s) => !OWN.test(s.base)); // the stock photographs
const own = () => all().filter((s) => OWN.test(s.base));
// The widths the company's own picture of a given width is written at.
const ownWidths = (width) => {
  const widths = [640, 1280, 1920].filter((w) => w <= width);
  if (width < 1280 && !widths.includes(width)) widths.push(width);
  return widths;
};
const credits = () => JSON.parse(readFileSync('src/site/_data/credits.json', 'utf8'));
const images = () => JSON.parse(readFileSync('src/site/_data/images.json', 'utf8'));
const placed = ($) => $('img[src^="/assets/img/"]').filter((i, el) => !/^\/assets\/img\/(site-|social)/.test(el.attribs.src));
const baseOf = (src) => src.replace(/^\/assets\/img\//, '').replace(/-\d+\.webp$/, '');

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
    assert.equal(images()[base]?.height, (await sharp(`src/assets/img/${base}-640.webp`).metadata()).height, `images.json height for ${base}`);
  }
});

test('the company\'s own pictures are written at their true widths, never upscaled', async () => {
  assert.ok(own().length >= 4, 'the box stills are sources');
  for (const { file, base } of own()) {
    const { width } = (await sharp(file).metadata()).autoOrient;
    const widths = ownWidths(width);
    assert.deepEqual(images()[base]?.widths, widths, `images.json for ${base}`);
    for (const w of widths) {
      const out = `src/assets/img/${base}-${w}.webp`;
      assert.ok(existsSync(out), out);
      const m = await sharp(out).metadata();
      assert.equal(m.width, w, `${out} is named by its true width`);
      assert.equal(m.exif, undefined, `${out} keeps EXIF`);
    }
    // Nothing wider than the source, under any name.
    const written = readdirSync('src/assets/img').filter((f) => f.startsWith(`${base}-`)).map((f) => Number(f.slice(base.length + 1, -'.webp'.length)));
    assert.deepEqual(written.sort((a, b) => a - b), widths, `${base}: files written`);
    assert.equal(images()[base].height, (await sharp(`src/assets/img/${base}-${widths[0]}.webp`).metadata()).height, `images.json height for ${base}`);
  }
  assert.deepEqual(ownWidths(476), [476]);
  assert.deepEqual(ownWidths(1118), [640, 1118]);
  assert.deepEqual(ownWidths(640), [640]);
  assert.deepEqual(ownWidths(2000), [640, 1280, 1920]);
});

test('the screening card\'s printed number, at the left edge of method-paper, is cut away', async () => {
  // The source shows part of a card's serial number in its left 13%: a sample code, which no
  // published picture may show. The published widths start 16% in.
  const { width, height } = await sharp(`${SRC}/method-paper.jpg`).metadata();
  const kept = width - Math.round(width * 0.16);
  assert.equal(images()['method-paper'].height, Math.round((640 * height) / kept));
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
      if (OWN.test(base)) {
        // The company's own: every width it lists is there; no credit is owed.
        for (const w of images()[base].widths) assert.ok(existsSync(`dist/assets/img/${base}-${w}.webp`), `${base}-${w}`);
        assert.doesNotMatch(md, new RegExp('`' + base + '`'), `${base} is the company's own, not a credited stand-in`);
        return;
      }
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
      assert.equal(el.attribs.src, `/assets/img/${base}-${entry.widths[0]}.webp`, `${url}: ${base} src`);
      assert.equal(el.attribs.srcset, entry.widths.map((w) => `/assets/img/${base}-${w}.webp ${w}w`).join(', '), `${url}: ${base} srcset`);
      assert.ok(el.attribs.sizes, `${url}: ${base} sizes`);
      // Lazy, but for the first slides of Our work's photographs, which are seen at once.
      if (!$(el).closest('[data-gallery-slide]').length || $(el).closest('li').index() > 1) assert.equal(el.attribs.loading, 'lazy', `${url}: ${base} loading`);
      assert.equal(el.attribs.decoding, 'async', `${url}: ${base} decoding`);
      assert.deepEqual([Number(el.attribs.width), Number(el.attribs.height)], [entry.widths[0], entry.height], `${url}: ${base} dimensions`);
      // A photograph's alt describes it; a portrait's (person-, Task 4.5) is the person's name, which
      // can be three words ("Mr. Abhishek Chandak").
      // A kit in Solutions' opening lineup is decorative: the link's own words name the kit.
      if ($(el).is('.lineup-img')) { assert.equal(el.attribs.alt, '', `${url}: ${base} in the lineup`); return; }
      if (/^person-/.test(base)) assert.ok((el.attribs.alt ?? '').trim(), `${url}: ${base} alt`);
      else assert.ok((el.attribs.alt ?? '').trim().split(/\s+/).length >= 4, `${url}: ${base} alt`);
    });
  }
});

test('the home page shows one place photograph, for the field programmes, named by its state', () => {
  const $ = load('/');
  const pics = $('#map .work-card img').map((i, img) => baseOf(img.attribs.src)).get();
  assert.deepEqual(pics, ['place-nandurbar', 'work-poster-v9']);
  assert.equal($('#map .work-card img').first().attr('alt'), 'A monsoon-green gorge in Maharashtra.');
});

test('the credits: none in any footer; every photograph and the map by others credited on Terms (25 October 2026)', () => {
  assert.equal(load('/')('footer .credits, footer [data-credit]').length, 0);
  const $ = load('/terms/');
  const others = credits().filter((r) => !OWN.test(r.basename));
  assert.deepEqual($('#credits li[data-credit]').map((i, li) => li.attribs['data-credit']).get().sort(), others.map((r) => r.basename).sort());
  for (const row of others) {
    const li = $(`#credits li[data-credit="${row.basename}"]`);
    assert.ok(li.text().includes(row.label), `${row.basename}: label`);
    assert.ok(li.text().includes(row.author), `${row.basename}: author`);
    assert.ok(li.find(`a[href="${row.sourceUrl}"]`).length >= 1, `${row.basename}: source link`);
    if (row.licenceUrl) assert.ok(li.find(`a[href="${row.licenceUrl}"]`).length >= 1, `${row.basename}: licence link`);
  }
  assert.equal($('[rel~="license"]').length, 0, 'a link declares the page\'s own licence');
  assert.equal($('#credits > .wrap > p').first().text().trim(), JSON.parse(readFileSync('src/site/_data/site.json', 'utf8')).footer.representative);
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
  writeFileSync(path.join(input, 'own.njk'), `---
title: Own | Lightening Lives
description: A fixture page that shows only one of the company's own pictures.
h1: Own
lead: A lead.
---
{% from "picture.njk" import picture with context %}
<section class="section"><div class="wrap">{{ picture('box-bthal', 'The LitLife™-BThal box, printed with red blood cells.') }}</div></section>
`);
  writeFileSync(path.join(input, 'mixed.njk'), `---
title: Mixed | Lightening Lives
description: A fixture page that shows one of the company's own pictures and one stand-in.
h1: Mixed
lead: A lead.
---
{% from "picture.njk" import picture with context %}
<section class="section"><div class="wrap">{{ picture('box-bthal', 'The LitLife™-BThal box, printed with red blood cells.') }}{{ picture('lab-gel', 'Agarose gel under blue light with bands of DNA.') }}</div></section>
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


test('picture() gives a small picture of the company\'s own its true size: the one width, and its height', () => {
  const img = fixture('/own/')('main img');
  const entry = images()['box-bthal'];
  assert.equal(img.attr('src'), `/assets/img/box-bthal-${entry.widths[0]}.webp`);
  assert.equal(img.attr('srcset'), entry.widths.map((w) => `/assets/img/box-bthal-${w}.webp ${w}w`).join(', '));
  assert.deepEqual([Number(img.attr('width')), Number(img.attr('height'))], [entry.widths[0], entry.height]);
});

test('the company\'s own pictures are never in the credits', () => {
  const listed = load('/terms/')('#credits li[data-credit]').map((i, li) => li.attribs['data-credit']).get();
  assert.ok(listed.length > 0);
  for (const base of listed) assert.doesNotMatch(base, OWN, base);
});
test('images.mjs is idempotent', () => {
  execSync('npm run images', { stdio: 'ignore' });
  const probe = ['src/assets/img/place-hyderabad-640.webp', 'src/site/_data/credits.json', 'src/site/_data/images.json', 'src/site/favicon.ico'];
  const a = probe.map((f) => statSync(f).mtimeMs);
  execSync('npm run images', { stdio: 'ignore' });
  assert.deepEqual(probe.map((f) => statSync(f).mtimeMs), a);
});

// Phase 6, Task 6.4 Step 3b: image weight. Every published picture within its budget: a 1280-wide
// WebP 200 KB, a 640-wide 80 KB; each preview card (assets/img/social/) 300 KB; the film's stills
// (site-*) 120 KB.
test('every published picture is within its weight budget', () => {
  const KB = 1024;
  const dir = 'dist/assets/img';
  const over = [];
  const check = (file, limit) => { const size = statSync(`${dir}/${file}`).size; if (size > limit * KB) over.push(`${file} ${Math.round(size / KB)} KB > ${limit} KB`); };
  const names = readdirSync(dir);
  for (const f of names.filter((n) => n.endsWith('-1280.webp'))) check(f, 200);
  for (const f of names.filter((n) => n.endsWith('-640.webp'))) check(f, 80);
  for (const f of names.filter((n) => /^site-.*\.(webp|png|jpg)$/.test(n))) check(f, 120);
  for (const f of readdirSync(`${dir}/social`).filter((n) => n.endsWith('.png'))) check(`social/${f}`, 300);
  assert.ok(names.filter((n) => n.endsWith('-1280.webp')).length > 10);
  assert.deepEqual(over, []);
});
