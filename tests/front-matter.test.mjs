// The front matter every page uses (label, h1, lead, chips, notice, closing, film, draft) does what
// the plan's Task 0.3 promises. Fixture pages are rendered through the site's real config, layout,
// partials and data, in a temporary folder, so no test page ever reaches dist/.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { load } from 'cheerio';
import Eleventy from '@11ty/eleventy';

let dir;
let built;

const fixtures = {
  'inner.njk': `---
title: Inner page | Lightening Lives
description: A fixture page with every part of an inner page's opening set in its front matter.
label: Diagnose
h1: Diagnostic solutions for inherited conditions
lead: We develop molecular tests for inherited blood and muscle conditions.
chips:
  - { text: Approved by ICMR, proof: true }
  - { text: Dried blood spot }
notice: true
---
<section class="section" id="body-copy"><div class="wrap"><p>Body.</p></div></section>
`,
  'asks.njk': `---
title: Asks | Lightening Lives
description: A fixture page whose closing band asks its own question with its own buttons.
h1: Sickle cell anaemia
lead: A lead.
closing:
  h2: Planning sickle cell screening?
  body: Tell us the district, the numbers and the laboratory you have in mind.
  solid: { text: Ask about LitLife™-SCA, href: "mailto:admin@lighteninglives.in?subject=LitLife%E2%84%A2-SCA" }
  line: { text: Partner with us, href: /partners/ }
---
`,
  'no-closing.njk': `---
title: No closing | Lightening Lives
description: A fixture page that has no closing band but does carry the notice for individuals.
h1: Contact
lead: A lead.
closing: false
notice: true
---
`,
  'film.njk': `---
title: Film | Lightening Lives
description: A fixture page standing in for the home page, which opens on the film and writes its own sections.
film: true
---
<section class="hero"><h1>Genetic testing from a spot of blood on a card.</h1></section>
`,
  'draft.njk': `---
title: Draft | Lightening Lives
description: A fixture page that is not ready, so it must not be built at all.
h1: Duchenne muscular dystrophy
lead: A lead.
draft: true
---
`,
};

before(async () => {
  dir = mkdtempSync(path.join(tmpdir(), 'll-front-matter-'));
  const input = path.join(dir, 'site');
  cpSync('src/site/_includes', path.join(input, '_includes'), { recursive: true });
  cpSync('src/site/_data', path.join(input, '_data'), { recursive: true });
  // The data reads the map's module (src/site/_data/work.js), so the folder keeps src/'s shape.
  cpSync('src/js/map', path.join(dir, 'js', 'map'), { recursive: true });
  for (const [name, body] of Object.entries(fixtures)) writeFileSync(path.join(input, name), body);
  // Eleventy lets the folders given here override the config's dir only when source is 'cli'.
  const eleventy = new Eleventy(input, path.join(dir, 'out'), { configPath: 'eleventy.config.mjs', quietMode: true, source: 'cli' });
  const pages = await eleventy.toJSON();
  built = Object.fromEntries(pages.map((p) => [p.url, load(p.content)]));
});

after(() => rmSync(dir, { recursive: true, force: true }));

test('an inner page opens with its label, h1, lead and chips in the seven-and-five split', () => {
  const $ = built['/inner/'];
  const head = $('main > section').first().find('.section-head');
  assert.equal(head.length, 1);
  assert.equal(head.find('.label').length, 0, 'the label stays in the front matter, for the breadcrumbs; no line over the heading (25 October 2026)');
  assert.equal(head.find('h1').text().trim(), 'Diagnostic solutions for inherited conditions');
  assert.equal(head.find('.lead').text().trim(), 'We develop molecular tests for inherited blood and muscle conditions.');
  assert.ok(head.find('h1').parent().is('.lg\\:col-span-7'), 'the heading takes seven columns');
  assert.ok(head.find('.lead').parent().is('.lg\\:col-span-5'), 'the lead takes five');
  assert.deepEqual(head.find('.tags .tag').map((i, t) => [[$(t).text().trim(), $(t).hasClass('tag-proof')]]).get(),
    [['Approved by ICMR', true], ['Dried blood spot', false]]);
  // The page's own sections follow the opening.
  assert.equal($('main > section').eq(1).attr('id'), 'body-copy');
});

test('an opening without a label or chips leaves them out', () => {
  const head = built['/asks/']('main > section').first().find('.section-head');
  assert.equal(head.find('.label').length, 0);
  assert.equal(head.find('.tags').length, 0);
});

test('the closing band is the content file\'s 4.5 unless the page asks its own question', () => {
  const band = (url) => built[url]('main > section').last();
  const plain = band('/inner/');
  assert.ok(plain.hasClass('closing'));
  assert.equal(plain.find('h2').text().trim(), 'Tell us what your programme needs');
  assert.equal(plain.find('p.lead').text().trim(), 'Tell us the condition you need to test for and where the testing will happen. We will take it from there.');
  assert.deepEqual([plain.find('.btn-solid').text().trim(), plain.find('.btn-solid').attr('href')], ['Partner with us', '/partners/']);
  assert.deepEqual([plain.find('.btn-line').text().trim(), plain.find('.btn-line').attr('href')], ['Contact us', '/contact/']);

  const own = band('/asks/');
  assert.equal(own.find('h2').text().trim(), 'Planning sickle cell screening?');
  assert.equal(own.find('p.lead').text().trim(), 'Tell us the district, the numbers and the laboratory you have in mind.');
  assert.deepEqual([own.find('.btn-solid').text().trim(), own.find('.btn-solid').attr('href')], ['Ask about LitLife™-SCA', 'mailto:admin@lighteninglives.in?subject=LitLife%E2%84%A2-SCA']);
  assert.deepEqual([own.find('.btn-line').text().trim(), own.find('.btn-line').attr('href')], ['Partner with us', '/partners/']);
});

test('the notice appears only on pages that ask for it, with or without a closing band', () => {
  assert.equal(built['/inner/']('.notice').length, 1);
  assert.match(built['/inner/']('.closing .notice').text(), /For individuals/);
  assert.equal(built['/asks/']('.notice').length, 0);
  const $ = built['/no-closing/'];
  assert.equal($('.closing').length, 0);
  assert.equal($('.notice').length, 1);
  assert.match($('.notice').text(), /We work with institutions and don't test individuals/);
});

test('the film page writes its own sections and loads the WebGL gate; other pages do neither', () => {
  const film = built['/film/'];
  assert.equal(film('.section-head').length, 0);
  assert.equal(film('.closing').length, 0);
  assert.match(film('head').html(), /WebGL2RenderingContext/);
  assert.doesNotMatch(built['/inner/']('head').html(), /WebGL2RenderingContext/);
});

test('a draft page is not built', () => {
  // A boolean, not the page itself: a failing assertion on a cheerio object prints its whole tree.
  assert.ok(!('/draft/' in built), 'the draft page was not built');
  assert.ok(built['/inner/'], 'the other fixtures were built');
});
