// The test-page layout (plan, Task 5.0; the controller's Phase 5 rulings 1, 2, 3, 7 and 9): the
// sickle cell, thalassaemia, SMA, DMD and LGMD pages select layout: test-page.njk and differ only in
// their front matter and copy. Fixture pages are rendered through the site's real config, layouts,
// partials and data in a temporary folder, as tests/front-matter.test.mjs does, so no fixture ever
// reaches dist/.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load } from 'cheerio';
import Eleventy from '@11ty/eleventy';
import { FileSystemConfigLoader, HtmlValidate } from 'html-validate';

let dir;
let built;
let cardable;

// Every section a test page can have, with brackets where the content file has them: a chip, a row
// and a source that are only a bracket, and brackets after a sentence in a paragraph, a row and a
// source.
const full = `---
layout: test-page.njk
title: "Sickle cell anaemia: LitLife™-SCA | Lightening Lives"
description: A fixture test page with every section the layout offers.
label: Haemoglobinopathy
h1: Sickle cell anaemia
lead: LitLife™-SCA screens for and confirms sickle cell anaemia in one test, from a dried blood spot.
leadLine: Early detection. Timely care. Better outcomes.
chips:
  - { text: Approved by ICMR, proof: true }
  - { text: Dried blood spot }
  - { text: "[TBC: Made in India mark permission, Part 8 item 24]" }
condition:
  h2: The condition
  paragraphs:
    - Sickle cell disease is an inherited blood disorder in which red blood cells become rigid and sickle-shaped.
    - A person with one copy of the sickle gene is a carrier, usually healthy and often unaware.
  source: "National Health Mission, Guidelines for Prevention and Control of Hemoglobinopathies in India (2016) [TBC: confirm each statement against the guidelines, Part 8 item 11]"
why:
  h2: Why it needs testing at scale
  paragraphs:
    - The Government of India launched the National Sickle Cell Anaemia Elimination Mission in July 2023.
    - "India's National Policy for Rare Diseases lists SMA among the conditions for which treatment is supported. [TBC: the policy reference and wording, Part 8 item 11]"
  picture: { name: care-newborn, alt: A newborn's heel held in a gloved hand. }
test:
  h2: LitLife™-SCA
  rows:
    - { title: What it is, body: "A dried blood spot molecular test for screening and confirmation of sickle cell anaemia. [TBC: the box says \\"India's first\\". Add those words only if the company can support them.]" }
    - { title: Patents, body: "Granted in India and Japan, with a patent published internationally." }
    - { title: Validation, body: "[TBC: Part 8 item 9]" }
  boxes:
    - { name: box-bthal, alt: The LitLife™-BThal box., caption: LitLife™-BThal }
    - { name: box-alphathal, alt: The LitLife™-AlphaThal box., caption: LitLife™-AlphaThal }
where:
  h2: Where it has been used
  body: Population screening for sickle cell anaemia in nine states and Delhi. Newborn screening in Rajasthan and Maharashtra.
  map: true
  link: { text: See all our work, href: /our-work/ }
box:
  body: LitLife™-SMA is packed in two parts.
  lists:
    - { title: Sample collection kit, items: [A dried blood spot card, A single-use lancet, An alcohol swab, A cotton ball] }
    - { title: Reagent kit, items: [Reagent A, Reagent B] }
  boxes:
    - { name: box-sma, alt: The front of the LitLife™-SMA box., caption: LitLife™-SMA }
who:
  items:
    - State and district health programmes screening for sickle cell disease
    - Hospitals and laboratories that confirm a diagnosis
family:
  - { text: Thalassaemia and other haemoglobinopathies, href: /solutions/thalassaemia/, note: "Including LitLife™-SiBThal217, for sickle cell anaemia and beta thalassaemia together." }
  - { text: Duchenne muscular dystrophy, href: /solutions/develop-a-test/#musculopathies }
closing:
  h2: Planning sickle cell screening?
  body: Tell us the district, the numbers and the laboratory you have in mind.
  solid: { text: Ask about LitLife™-SCA, condition: sickle-cell-anaemia }
---
`;

// The conditions as rows (Thalassaemia), one body 57 words long; no "Why" (5.5 has none); the place
// it has been used as words and a link, without the map; no "In the box"; the heading of "Who" its own.
const rows = `---
layout: test-page.njk
title: Thalassaemia, HbD and HbE testing | Lightening Lives
description: A fixture test page whose conditions are rows and whose places are words, without the map.
label: Haemoglobinopathy
h1: Thalassaemia and other haemoglobinopathies
lead: Tests for the haemoglobin disorders a programme meets alongside sickle cell anaemia.
chips:
  - { text: Dried blood spot }
condition:
  h2: The conditions
  rows:
    - { title: Beta thalassaemia, body: "The body makes too little of the beta chain of haemoglobin. The severe form, thalassaemia major, needs blood transfusions for life. Carriers are usually healthy; their mild anaemia is often mistaken for iron deficiency. On average 3 to 4 in 100 Indians are carriers; when both parents are, each pregnancy has a 1 in 4 chance of thalassaemia major." }
    - { title: Alpha thalassaemia, body: "Changes in the alpha-globin genes, most often deletions." }
test:
  h2: The tests
  rows:
    - { title: LitLife™-BThal, body: A dried blood spot molecular test for diagnosis of beta thalassaemia. }
where:
  h2: Where they have been used
  body: Population screening for sickle-beta thalassaemia in Maharashtra, Gujarat and Telangana.
  link: { text: See all our work, href: /our-work/ }
who:
  h2: Who they are for
  items:
    - Hospitals and laboratories that diagnose thalassaemia
family:
  - { text: Sickle cell anaemia, href: /solutions/sickle-cell-anaemia/ }
closing:
  h2: Planning thalassaemia screening?
  body: Tell us who you plan to screen and where the samples will be tested.
  solid: { text: Ask about thalassaemia testing, condition: thalassaemia }
---
`;

// A page whose test is not yet described (DMD and LGMD, ruling 9): every chip, source and row only a
// bracket, and no optional section.
const bare = `---
layout: test-page.njk
title: Duchenne muscular dystrophy testing | Lightening Lives
description: A fixture test page with nothing optional and its test's rows still to come.
label: Musculopathy
h1: Duchenne muscular dystrophy
lead: A genetic test for DMD that gives a boy a diagnosis years sooner.
chips:
  - { text: "[TBC: Dried blood spot; others as confirmed]" }
condition:
  h2: The condition
  paragraphs:
    - DMD is an inherited muscle condition that affects about 1 in 3,500 boys.
  source: "[TBC: Part 8 item 11]"
why:
  h2: Why an earlier diagnosis matters
  paragraphs:
    - The first signs are easily put down to weakness or poor nutrition.
test:
  h2: The test
  rows:
    - { title: Name, body: "[TBC: Part 8 item 9]" }
    - { title: The sample, body: "[TBC: dried blood spot, as for the other tests]" }
who:
  items:
    - Laboratories that test for neuromuscular conditions
family:
  - { text: Spinal muscular atrophy, href: /solutions/spinal-muscular-atrophy/ }
closing:
  h2: Need DMD testing for your patients?
  body: Tell us about your clinic or laboratory and the numbers you see.
  solid: { text: Ask about DMD testing, condition: duchenne-muscular-dystrophy }
---
`;

const draft = bare.replace('title: Duchenne', 'draft: true\ntitle: Duchenne');

// Brackets appended where the layout prints front matter: the content file often ends a heading or
// a line with "[TBC: …]", and none of it may render (title, description, label, h1, the section h2s,
// a row's title, the closing's h2, body and solid text).
const TBC = ' [TBC: Part 8 item 1]';
const bracketed = rows
  .replace('title: Thalassaemia, HbD and HbE testing | Lightening Lives', `title: "Thalassaemia, HbD and HbE testing | Lightening Lives${TBC}"`)
  .replace('description: A fixture', `description: "A fixture${TBC}" #`)
  .replace('label: Haemoglobinopathy', `label: "Haemoglobinopathy${TBC}"`)
  .replace('h1: Thalassaemia and other haemoglobinopathies', `h1: "Thalassaemia and other haemoglobinopathies${TBC}"`)
  .replace('h2: The conditions', `h2: "The conditions${TBC}"`)
  .replace('title: Beta thalassaemia,', `title: "Beta thalassaemia${TBC}",`)
  .replace('h2: The tests', `h2: "The tests${TBC}"`)
  .replace('h2: Where they have been used', `h2: "Where they have been used${TBC}"`)
  .replace('h2: Who they are for', `h2: "Who they are for${TBC}"`)
  .replace('h2: Planning thalassaemia screening?', `h2: "Planning thalassaemia screening?${TBC}"`)
  .replace('body: Tell us who you plan', `body: "Tell us who you plan to screen and where the samples will be tested.${TBC}" #`)
  .replace('text: Ask about thalassaemia testing,', `text: "Ask about thalassaemia testing${TBC}",`);

// An "In the box" whose lists have only brackets for items.
const emptyBox = full.replace(/box:\n  body:[\s\S]*?\nwho:/, `box:
  body: The box holds what the programme needs.
  lists:
    - { title: Sample collection kit, items: ["[TBC: Part 8 item 3]", "[TBC: Part 8 item 4]"] }
    - { title: Reagent kit, items: [Reagent A] }
who:`);

const fixtures = { 'full.njk': full, 'rows.njk': rows, 'bare.njk': bare, 'draft.njk': draft, 'bracketed.njk': bracketed, 'emptybox.njk': emptyBox };

// A page built on its own, to see whether the build stops: resolves to the error's message, or null.
async function buildError(name, body) {
  const d = mkdtempSync(path.join(tmpdir(), 'll-test-layout-'));
  try {
    const input = path.join(d, 'site');
    cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
    cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
    cpSync('src/js/map', path.join(d, 'js', 'map'), { recursive: true });
    writeFileSync(path.join(input, name), body);
    const eleventy = new Eleventy(input, path.join(d, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
    await eleventy.toJSON();
    return null;
  } catch (e) {
    process.exitCode = 0; // Eleventy marks the process failed when a build stops; this stop is the test's point.
    return String(e.originalError?.originalError?.message ?? e.originalError?.message ?? e.message) + String(e.message);
  } finally {
    rmSync(d, { recursive: true, force: true });
  }
}

before(async () => {
  dir = mkdtempSync(path.join(tmpdir(), 'll-test-layout-'));
  const input = path.join(dir, 'site');
  cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
  cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
  // The data reads the map's module (src/site/_data/work.js), so the folder keeps src/'s shape.
  cpSync('src/js/map', path.join(dir, 'js', 'map'), { recursive: true });
  for (const [name, body] of Object.entries(fixtures)) writeFileSync(path.join(input, name), body);
  // A page that lists the collection the preview cards are made from, so a draft can be seen not to be in it.
  writeFileSync(path.join(input, 'cards.njk'), '---\npermalink: /cards.json\nlayout: false\n---\n[{% for p in collections.cardable %}"{{ p.url }}"{% if not loop.last %},{% endif %}{% endfor %}]');
  // Eleventy lets the folders given here override the config's dir only when source is 'cli'.
  const eleventy = new Eleventy(input, path.join(dir, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
  const pages = await eleventy.toJSON();
  built = Object.fromEntries(pages.filter((p) => p.url.endsWith('/')).map((p) => [p.url, { $: load(p.content), html: p.content }]));
  cardable = JSON.parse(pages.find((p) => p.url === '/cards.json').content);
});

after(() => rmSync(dir, { recursive: true, force: true }));

const page = (url) => built[url].$;
const text = ($, el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = ($, sel) => $(sel).map((i, e) => text($, e)).get();
// The id of each band in main, the opening's and the closing band's named by their class.
const bands = ($) => $('main > section').map((i, s) => $(s).attr('id') ?? ($(s).hasClass('page-open') ? 'opening' : $(s).hasClass('closing') ? 'closing' : '?')).get();

test('the sections render in ruling 1\'s order', () => {
  assert.deepEqual(bands(page('/full/')),
    ['opening', 'the-condition', 'why', 'the-test', 'where-used', 'in-the-box', 'who-and-family', 'closing']);
  const $ = page('/full/');
  assert.deepEqual($('#who-and-family .pair > div').map((i, d) => $(d).attr('id')).get(), ['who-it-is-for', 'also-in-this-family']);
  // Every band is named by its own heading.
  for (const id of ['the-condition', 'why', 'the-test', 'where-used', 'in-the-box']) {
    const h = $(`#${id}`).attr('aria-labelledby');
    assert.ok(h && $(`#${h}`).is('h2'), `${id} is named by its h2`);
  }
});

test('every optional section is left out when its front matter is absent', () => {
  assert.deepEqual(bands(page('/bare/')), ['opening', 'the-condition', 'why', 'the-test', 'who-and-family', 'closing']);
  assert.deepEqual(bands(page('/rows/')), ['opening', 'the-condition', 'the-test', 'where-used', 'who-and-family', 'closing']);
  assert.equal(page('/rows/')('#why').length, 0, 'no why front matter, no empty heading');
});

test('the opening: label, h1, lead, the line under the lead, and chips without a bracket-only chip', () => {
  const $ = page('/full/');
  const head = $('.page-open .section-head');
  assert.equal(head.find('.label').length, 0); // no label over the heading (25 October 2026)
  assert.equal(text($, head.find('h1')), 'Sickle cell anaemia');
  assert.equal(text($, head.find('.lead-line')), 'Early detection. Timely care. Better outcomes.');
  assert.ok(head.find('.lead').next().is('.lead-line'), 'the line sits under the lead');
  assert.deepEqual(head.find('.tag').map((i, t) => [[text($, t), $(t).hasClass('tag-proof')]]).get(),
    [['Approved by ICMR', true], ['Dried blood spot', false]]);
  // A page with no line has none; a page whose chips are all brackets has no tags at all.
  assert.equal(page('/rows/')('.lead-line').length, 0);
  assert.equal(page('/bare/')('.page-open .tags').length, 0);
});

test('the condition: its h2, its paragraphs or its rows, and a source line without its bracket', () => {
  let $ = page('/full/');
  assert.equal(text($, '#the-condition h2'), 'The condition');
  assert.deepEqual(texts($, '#the-condition .story p:not(.source)'), [
    'Sickle cell disease is an inherited blood disorder in which red blood cells become rigid and sickle-shaped.',
    'A person with one copy of the sickle gene is a carrier, usually healthy and often unaware.',
  ]);
  assert.equal(text($, '#the-condition .source'), 'National Health Mission, Guidelines for Prevention and Control of Hemoglobinopathies in India (2016)');
  $ = page('/rows/');
  assert.equal(text($, '#the-condition h2'), 'The conditions');
  assert.deepEqual(texts($, '#the-condition .rows h3'), ['Beta thalassaemia', 'Alpha thalassaemia']);
  assert.equal($('#the-condition .source').length, 0, 'no source, no line');
  // A source that is only a bracket is left out.
  assert.equal(page('/bare/')('#the-condition .source').length, 0);
});

test('why: its own h2, the paragraphs with a trailing bracket stripped, and its picture', () => {
  const $ = page('/full/');
  assert.equal(text($, '#why h2'), 'Why it needs testing at scale');
  assert.deepEqual(texts($, '#why .story p:not(.source)'), [
    'The Government of India launched the National Sickle Cell Anaemia Elimination Mission in July 2023.',
    'India\'s National Policy for Rare Diseases lists SMA among the conditions for which treatment is supported.',
  ]);
  assert.match($('#why img').attr('src'), /^\/assets\/img\/care-newborn-640\.webp$/);
  assert.equal($('#why img').attr('alt'), 'A newborn\'s heel held in a gloved hand.');
  assert.equal(page('/rows/')('#why img').length, 0);
});

test('the test: its h2 and rows, a bracket-only row omitted and a trailing bracket stripped, then any boxes', () => {
  const $ = page('/full/');
  assert.equal(text($, '#the-test h2'), 'LitLife™-SCA');
  assert.deepEqual($('#the-test .rows > li').map((i, li) => [[text($, $(li).find('h3')), text($, $(li).find('p'))]]).get(), [
    ['What it is', 'A dried blood spot molecular test for screening and confirmation of sickle cell anaemia.'],
    ['Patents', 'Granted in India and Japan, with a patent published internationally.'],
  ]);
  assert.deepEqual($('#the-test .boxes img').map((i, img) => $(img).attr('alt')).get(), ['The LitLife™-BThal box.', 'The LitLife™-AlphaThal box.']);
  assert.deepEqual(texts($, '#the-test .boxes figcaption'), ['LitLife™-BThal', 'LitLife™-AlphaThal']);
  assert.ok($('#the-test .boxes').prev().is('.rows'), 'the boxes follow the rows');
  assert.equal(page('/rows/')('#the-test .boxes').length, 0);
});

test('a test whose rows are all brackets keeps its h2 and says "Details on request." in their place', () => {
  const $ = page('/bare/');
  assert.equal(text($, '#the-test h2'), 'The test');
  assert.equal($('#the-test .rows').length, 0);
  assert.deepEqual(texts($, '#the-test p'), ['Details on request.']);
});

test('where it has been used: the map opened on Our work, or words alone, each with its link', () => {
  let $ = page('/full/');
  const where = $('#where-used');
  assert.equal(text($, where.find('h2')), 'Where it has been used');
  assert.equal(where.find('[data-map]').length, 1, 'the map is drawn here');
  assert.equal(where.find('input[name=map-layer]:checked').val(), 'work');
  assert.equal(text($, where.find('.map-body')), 'Population screening for sickle cell anaemia in nine states and Delhi. Newborn screening in Rajasthan and Maharashtra.');
  assert.deepEqual([text($, where.find('a.link')), where.find('a.link').attr('href')], ['See all our work', '/our-work/']);
  assert.equal($('[data-map]').length, 1, 'one map on the page');
  $ = page('/rows/');
  assert.equal($('[data-map]').length, 0, 'no map without map: true');
  assert.equal(text($, '#where-used h2'), 'Where they have been used');
  assert.equal(text($, '#where-used .story > p:first-child'), 'Population screening for sickle-beta thalassaemia in Maharashtra, Gujarat and Telangana.');
  assert.deepEqual([text($, '#where-used a.link'), $('#where-used a.link').attr('href')], ['See all our work', '/our-work/']);
});

test('every page link keeps its arrow with its last word (pageLink, links.njk), the map\'s link too', () => {
  for (const [url, sel] of [['/full/', '#where-used a.link'], ['/rows/', '#where-used a.link'], ['/full/', '#also-in-this-family a.link']]) {
    const $ = page(url);
    $(sel).each((i, a) => {
      assert.ok($(a).hasClass('link-name'), `${url} ${sel}`);
      assert.equal($(a).find('.whitespace-nowrap > svg').length, 1, `${url} ${sel}: the arrow sits with the last word`);
      assert.equal($(a).children('svg').length, 0, `${url} ${sel}: no arrow on its own`);
    });
  }
});

test('in the box: its h2, words and lists, each list under its title, then the box', () => {
  const $ = page('/full/');
  assert.equal(text($, '#in-the-box h2'), 'In the box');
  assert.equal(text($, '#in-the-box .story > p'), 'LitLife™-SMA is packed in two parts.');
  assert.deepEqual(texts($, '#in-the-box .kit .label'), ['Sample collection kit', 'Reagent kit']);
  assert.deepEqual($('#in-the-box .kit ul').map((i, ul) => $(ul).children('li').length).get(), [4, 2]);
  assert.deepEqual(texts($, '#in-the-box .boxes figcaption'), ['LitLife™-SMA']);
  assert.equal($('#in-the-box').length, 1);
  // Without box, no section.
  assert.equal(page('/rows/')('#in-the-box').length, 0);
});

test('who it is for and also in this family share a band; the family links come from front matter, then Develop a test', () => {
  let $ = page('/full/');
  assert.equal(text($, '#who-it-is-for h2'), 'Who it is for');
  assert.deepEqual(texts($, '#who-it-is-for li'), [
    'State and district health programmes screening for sickle cell disease',
    'Hospitals and laboratories that confirm a diagnosis',
  ]);
  assert.equal(text($, '#also-in-this-family h2'), 'Also in this family');
  const links = (doc) => doc('#also-in-this-family a').map((i, a) => [[text(doc, a), doc(a).attr('href')]]).get();
  assert.deepEqual(links($), [
    ['Thalassaemia and other haemoglobinopathies', '/solutions/thalassaemia/'],
    ['Duchenne muscular dystrophy', '/solutions/develop-a-test/#musculopathies'],
    ['Develop a test with us', '/solutions/develop-a-test/'],
  ]);
  assert.deepEqual(texts($, '#also-in-this-family li p'), ['Including LitLife™-SiBThal217, for sickle cell anaemia and beta thalassaemia together.']);
  $ = page('/rows/');
  assert.equal(text($, '#who-it-is-for h2'), 'Who they are for');
  assert.deepEqual(links($), [['Sickle cell anaemia', '/solutions/sickle-cell-anaemia/'], ['Develop a test with us', '/solutions/develop-a-test/']]);
});

test('the closing band carries the notice; its solid button is the email, its line button Partner with us', () => {
  const expected = {
    '/full/': ['Planning sickle cell screening?', 'Ask about LitLife™-SCA', 'Sickle cell anaemia'],
    '/rows/': ['Planning thalassaemia screening?', 'Ask about thalassaemia testing', 'Thalassaemia, HbD or HbE'],
    '/bare/': ['Need DMD testing for your patients?', 'Ask about DMD testing', 'Duchenne muscular dystrophy'],
  };
  for (const [url, [h2, solid, name]] of Object.entries(expected)) {
    const $ = page(url);
    const band = $('main > section').last();
    assert.ok(band.hasClass('closing') && band.hasClass('bg-paper'), url);
    assert.equal(text($, band.find('h2')), h2);
    assert.deepEqual([text($, band.find('.btn-solid')), band.find('.btn-solid').attr('href')],
      [solid, `mailto:admin@lighteninglives.in?subject=Request%20tests&body=${encodeURIComponent(`Condition: ${name}`)}`], url);
    assert.deepEqual([text($, band.find('.btn-line')), band.find('.btn-line').attr('href')], ['Partner with us', '/partners/'], url);
    assert.equal($('.notice').length, 1, url);
    assert.equal(band.find('.notice').length, 1, `${url}: the notice is in the closing band`);
  }
});

test('front matter printed by the layout is unbracketed: title, description, label, h1, h2s, a row title, the closing', () => {
  const { $, html } = built['/bracketed/'];
  assert.doesNotMatch(html, /TBC/);
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|\]/);
  assert.equal($('title').text(), 'Thalassaemia, HbD and HbE testing | Lightening Lives');
  assert.equal(text($, 'h1'), 'Thalassaemia and other haemoglobinopathies');
  assert.equal($('.page-open .label').length, 0); // no label over the heading (25 October 2026)
  assert.equal(text($, '#the-condition h2'), 'The conditions');
  assert.equal(text($, '#the-condition .rows h3:first'), 'Beta thalassaemia');
  assert.equal(text($, '#closing-h'), 'Planning thalassaemia screening?');
  assert.equal(text($, '.closing .btn-solid'), 'Ask about thalassaemia testing');
});

test('an In the box list whose items are all brackets, and its title, are left out', () => {
  const $ = page('/emptybox/');
  assert.deepEqual(texts($, '#in-the-box .kit .label'), ['Reagent kit']);
  assert.equal($('#in-the-box .kit ul').length, 1);
  assert.equal($('#in-the-box ul:empty').length, 0);
});

test('a required key left out stops the build, naming the page and the key', async () => {
  const without = {
    condition: full.replace(/\ncondition:\n[\s\S]*?\nwhy:/, '\nwhy:'),
    test: full.replace(/test:\n  h2: LitLife™-SCA\n/, 'nottest:\n  h2: LitLife™-SCA\n'),
    who: full.replace(/\nwho:\n/, '\nnotwho:\n'),
    closing: full.replace(/\nclosing:\n/, '\nnotclosing:\n'),
  };
  for (const [key, body] of Object.entries(without)) {
    const message = await buildError('missing.njk', body);
    assert.ok(message, `${key}: the build stops`);
    assert.match(message, new RegExp(`missing\\.njk.*${key}|${key}.*missing\\.njk`, 's'), `${key}: names the page and the key`);
  }
});

test('the bands alternate back from the closing band\'s paper, whichever sections a page has', () => {
  for (const url of ['/full/', '/rows/', '/bare/']) {
    const $ = page(url);
    const surfaces = $('main > section:not(.page-open)').map((i, s) => ($(s).hasClass('bg-paper') ? 'paper' : 'mist')).get();
    const expected = surfaces.map((s, i) => ((surfaces.length - 1 - i) % 2 === 0 ? 'paper' : 'mist'));
    assert.deepEqual(surfaces, expected, url);
  }
});

test('no bracket renders anywhere on a test page', () => {
  for (const url of ['/full/', '/rows/', '/bare/']) {
    assert.doesNotMatch(built[url].html, /\[(TBC|PLACEHOLDER)|TBC:/, url);
    const $ = page(url);
    assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|\]/, url);
  }
});

test('a draft is not built and is in no collection', () => {
  assert.ok(!('/draft/' in built), 'the draft page was not built');
  assert.ok(!cardable.includes('/draft/'), 'the draft has no preview card');
  assert.ok(cardable.includes('/bare/'), 'its twin without draft: true is built');
});

test('the markup is valid', async () => {
  // The project's own rules (.htmlvalidate.json), as tests/build.test.mjs applies them to dist/.
  const validator = new HtmlValidate(new FileSystemConfigLoader());
  for (const url of ['/full/', '/rows/', '/bare/']) {
    const report = await validator.validateString(built[url].html, path.resolve(`fixture${url.replace(/\//g, '-')}.html`));
    assert.ok(report.valid, `${url}: ${report.results.flatMap((r) => r.messages.map((m) => `${m.ruleId}: ${m.message}`)).join('; ')}`);
  }
});
