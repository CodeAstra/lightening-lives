// The home page (content/website-content.md 5.1, cut to nine sections by the marketing review of 25
// October 2026, built with the fi.co patterns the user liked; eight since the hero's redo the same day,
// the partners sliding along its foot): the film; Innovate,
// Diagnose, REASSURED, Transform lives; one platform; the need and our work; three ways to partner.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from './helpers.mjs';

const $ = load('/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();
const CRIT = JSON.parse(readFileSync('src/site/_data/reassuredCopy.json', 'utf8'));
const PARTNERS = JSON.parse(readFileSync('src/site/_data/partners.json', 'utf8'));

test('the page: title, description, and no inner-page opening or closing band', () => {
  assert.equal($('title').text(), 'Genetic testing for every community in India | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Genetic testing for inherited conditions, from a dried blood spot. Currently for hospitals, diagnostic labs, public health programmes and NGOs in India.');
  assert.equal($('.page-open').length, 0);
  assert.equal($('.closing').length, 0);
});

test('eight sections, in the review\'s order, each labelled by its own heading', () => {
  assert.deepEqual($('main > section').map((i, s) => $(s).attr('id')).get(),
    ['top', 'innovate', 'diagnose', 'reassured', 'model', 'tests', 'map', 'contact']);
  assert.deepEqual(texts('main h2'), [
    'Where we work: 10 states', 'We work with', 'Innovate. Patient, carrier or unaffected, read in one run.', 'Diagnose. What changes when you switch.',
    'The standard we design to, letter by letter', 'Transform lives. Six steps, from a finger prick to a family in care.',
    'One platform. Built for any inherited condition.', 'Where the need is, and where we work',
    'Partner with us. Tell us what you need to test for.']);
  $('main > section').each((i, s) => assert.equal($(`#${$(s).attr('aria-labelledby')}`).closest('section').attr('id'), $(s).attr('id'), $(s).attr('id')));
});

test('two-tone headings: the key phrase in DNA blue, never life green, and no eyebrow labels', () => {
  assert.equal(text('h1 .h-mark'), 'reaches every community.');
  assert.deepEqual(texts('main h2 .h-mark'), ['Innovate.', 'Diagnose.', 'letter by letter', 'Transform lives.', 'Built for any inherited condition.', 'and where we work', 'Tell us what you need to test for.']);
  const css = readFileSync('dist/assets/css/site.css', 'utf8').replace(/\s+/g, '');
  assert.match(css, /\.h-mark\{color:var\(--leaf\)/);
});

test('the opening: heading, lead with the category, buttons, the proof with icons; no caption and no replay', () => {
  assert.equal(text('h1'), 'Genetic testing that reaches every community.');
  assert.equal($('h1').closest('section').attr('id'), 'top');
  assert.equal(text('.hero-lead'), 'Genetic and molecular diagnostics from a dried blood spot: one test to screen and confirm, patient, carrier or unaffected, built to the REASSURED standard.');
  assert.ok(text('.hero-lead').split(' ').length <= 25, 'R1: the home lead is at most 25 words');
  assert.equal($('.hero-lead a.lead-link').attr('href'), '#reassured');
  assert.deepEqual(links('.hero-actions a'), [['Partner with us', '/contact/'], ['How the test works', '/technology/']]);
  assert.equal($('.hero-actions a').first().attr('data-enquire'), '', 'opens the enquiry form');
  assert.ok($('.hero-actions a').first().is('.btn-solid') && $('.hero-actions a').last().is('.btn-line'));
  // The proof as credentials (25 October 2026, evening): each a badge led by a mark of its kind, and a
  // link to where it can be checked.
  assert.deepEqual(texts('.hero-proof .cred-text'), ['ICMR approved', 'Patents granted in India and Japan', '15 sites, 9 states and Delhi']);
  assert.equal($('.hero-proof .cred-seal svg.icon').length, 1, 'ICMR: a seal');
  assert.deepEqual(texts('.hero-proof .cred-codes b'), ['IN', 'JP'], 'the patents: the two countries');
  assert.equal($('.hero-proof .cred-sites svg.icon').length, 1, 'the sites: a pin, not a big number');
  assert.equal($('.hero-proof .cred-codes').attr('aria-hidden'), 'true');
  assert.deepEqual($('.hero-proof .cred a').map((i, a) => a.attribs.href).get(), ['/technology/#approvals', '/technology/#patents', '/our-work/#sites']);
  // The film plays once, within five seconds, and rests on the map: no caption line, no replay.
  assert.equal($('[data-film-caption], .film-toggle, [data-film-toggle]').length, 0);
  const scene = readFileSync('src/js/site/scene.js', 'utf8');
  const end = Number(scene.match(/end: ([\d.]+), \/\/ the film is over/)[1]);
  const speed = Number(scene.match(/const SPEED = ([\d.]+);/)[1]);
  assert.ok(end / speed < 5, `the film runs ${(end / speed).toFixed(2)} s`);
  assert.match(scene, /film\.time \+= clamp\(elapsed, 0\.001, 0\.125\) \* SPEED/);
  // The text comes before the film in the page, so the keyboard reaches the buttons before the pins.
  const order = $('.hero').children().map((i, el) => $(el).attr('class')).get();
  assert.ok(order.indexOf('hero-text') < order.indexOf('film-screen'), order.join(' '));
});

test('the film\'s pins: every state we work in, each a named button opening one card that links to the map', () => {
  const pins = $('.hero [data-places] .place-pin');
  assert.deepEqual(pins.map((i, b) => $(b).attr('aria-label')).get(), ['Delhi', 'Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Jharkhand', 'Chhattisgarh', 'Maharashtra', 'Telangana', 'Karnataka', 'Tamil Nadu']);
  pins.each((i, b) => {
    assert.equal($(b).attr('type'), 'button');
    assert.equal($(b).attr('aria-expanded'), 'false');
    assert.equal($(b).attr('aria-controls'), 'place-card');
    assert.equal($(b).find('img.place-emblem[alt=""]').length, 1);
  });
  // Not usable until the film has pinned them (scene.js lifts inert).
  assert.ok($('[data-places-wrap]').is('[inert]'));
  assert.equal(text('#places-h'), 'Where we work: 10 states');
  const card = $('#place-card');
  assert.ok(card.is('[hidden]'));
  assert.equal(card.attr('aria-live'), 'polite');
  assert.equal(card.find('a[data-place-link]').attr('href'), '#map');
  const main = readFileSync('src/js/site/main.js', 'utf8');
  assert.match(main, /function initPins\(\)/);
  assert.match(main, /ll:map-show/);
  assert.match(main, /Escape/);
});

test('the announcement: none in a build for the site once its last day has passed; the dates decide', async () => {
  const data = JSON.parse(readFileSync('src/site/_data/announcements.json', 'utf8'));
  assert.ok(Array.isArray(data.items));
  // The example has ended, so the built page has no pill.
  assert.equal($('.hero-news').length, 0);
  const { upcoming } = await import('../src/lib/announcements.mjs');
  const run = { text: 'Join the SMA Run', when: '13–14 October', link: { text: 'Register here', href: '/contact/' }, start: '2026-10-01', end: '2026-10-14' };
  const at = (iso) => Date.parse(iso);
  assert.deepEqual(upcoming([run], at('2026-09-30T12:00:00+05:30')).map((i) => i.live), [false], 'before its first day: kept, not live');
  assert.deepEqual(upcoming([run], at('2026-10-01T00:00:00+05:30')).map((i) => i.live), [true], 'from midnight of its first day, Indian time');
  assert.deepEqual(upcoming([run], at('2026-10-14T23:59:00+05:30')).map((i) => i.live), [true], 'through its last day');
  assert.deepEqual(upcoming([run], at('2026-10-15T00:00:01+05:30')), [], 'gone the next day');
  assert.deepEqual(upcoming([run], at('2026-10-25T12:00:00+05:30'), true).map((i) => i.preview), [true], 'the dev server previews the latest');
  assert.deepEqual(upcoming([{ ...run, link: undefined }], at('2026-10-05T12:00:00+05:30')), [], 'an item without a link is not shown');
  const later = { ...run, text: 'Later', start: '2026-11-01', end: '2026-11-02' };
  assert.deepEqual(upcoming([later, run], at('2026-10-05T12:00:00+05:30')).map((i) => i.text), ['Join the SMA Run', 'Later'], 'soonest first');
  // The page checks the dates again in the reader's browser.
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /function initNews\(\)/);
});

test('the film is gated before first paint and falls back to a still', () => {
  const home = readFileSync('dist/index.html', 'utf8');
  const head = home.slice(0, home.indexOf('</head>'));
  assert.match(head, /WebGL2RenderingContext/);
  assert.match(head, /film-can/);
  assert.match(head, /film-live/);
  assert.match(head, /prefers-reduced-motion: reduce/);
  // The still is always in the markup, and the film's button for a reader who asked for less motion.
  const still = $('.hero [data-film-screen] img.film-poster');
  assert.equal(still.length, 1);
  assert.ok(still.attr('alt').length > 40);
  assert.doesNotMatch(still.attr('alt'), /single drop|one drop/i);
  const play = $('.hero [data-film-screen] button.film-play');
  assert.equal(text(play), 'Play the film');
  assert.ok(play.is('[hidden]'), 'shown by the script only where the film can play');
});

test('who works with us: a row of cells along the opening\'s foot whose logos change in place, all thirteen in turn', () => {
  const published = PARTNERS.logos.filter((p) => p.published);
  assert.equal(published.length, 13);
  assert.equal($('#partners').closest('section').attr('id'), 'top');
  // Every name, for a screen reader; the cells themselves are pictures of the same thing, hidden.
  assert.deepEqual(texts('#partners .logo-cycle ul.sr-only li'), published.map((p) => p.name));
  const cells = $('#partners .logo-cells');
  assert.equal(cells.attr('aria-hidden'), 'true');
  assert.equal(cells.find('.logo-cell').length, 6);
  cells.find('img').each((i, img) => {
    const p = published[i];
    assert.equal(img.attribs.alt, '');
    assert.ok(img.attribs.width && img.attribs.height, p.name);
    // Each logo carries its own proportions, so the stylesheet sizes it without squeezing it.
    assert.equal(img.attribs.style, `--ratio: ${Math.round((p.width / p.height) * 1000) / 1000}`, p.name);
  });
  // The pool the cells draw from: all thirteen, in order.
  const pool = JSON.parse(cells.attr('data-logo-pool'));
  assert.deepEqual(pool.map((l) => l.src), published.map((p) => `/assets/logo/partners/${p.file}`));
  // No visible label and no button (the user, 25 October 2026): its heading is for screen readers, and
  // the row itself takes the focus, which holds it, as pointing at it does; a tap stops and starts it.
  assert.ok($('#partners-h').is('.sr-only'));
  assert.equal($('#partners button, #partners a').length, 0);
  assert.equal($('#partners .logo-cycle').attr('tabindex'), '0');
  assert.equal($('#partners .logo-cycle').attr('role'), 'group');
  const motion = readFileSync('src/js/site/motion.js', 'utf8');
  assert.match(motion, /function cycleLogos\(signal\)/);
  assert.match(motion, /pointerenter[\s\S]*focusin[\s\S]*'click'[\s\S]*Enter/);
  assert.match(motion, /visibilitychange/);
  assert.match(motion, /IntersectionObserver/);
  const css = readFileSync('src/css/site.css', 'utf8');
  assert.match(css, /\.hero-foot \{ margin: 2\.25rem calc\(var\(--gutter\) \* -1\) 0;/, 'the full width of the window');
  assert.doesNotMatch(css, /\.marquee/, 'the sliding strip is gone');
});

test('Innovate: the gel as the poster draws it, four icon-led points, and the way to the method', () => {
  // The poster's gel (25 October 2026): its lanes and bands, the control empty.
  assert.deepEqual(texts('#innovate .lane-name'), ['Marker', 'Patient', 'Unaffected', 'Carrier', 'Control']);
  assert.deepEqual($('#innovate .lane').map((i, l) => $(l).find('.lane-band').length).get(), [12, 2, 2, 3, 0]);
  assert.ok($('#innovate [role=img]').attr('aria-label').length > 60);
  // Flat since 26 October 2026 (the user: the 3D gel "does not serve the purpose"; "remove Run
  // again"): no stage, no WebGL bundle, no replay. The references are marked as such, the empty
  // control says why, and the key under the gel says which band means what and lights that lane.
  assert.equal($('#innovate [data-gel-stage], #innovate canvas, #innovate [data-gel-run]').length, 0);
  assert.doesNotMatch(text('#innovate'), /Run again/);
  assert.deepEqual($('#innovate .lane').map((i, l) => l.attribs.class).get(), ['lane lane-marker', 'lane', 'lane', 'lane', 'lane lane-control']);
  assert.equal(text('#innovate .lane-control .lane-note'), 'No DNA');
  assert.deepEqual(texts('#innovate .gel-key-text strong'), ['Patient', 'Unaffected', 'Carrier']);
  assert.deepEqual(texts('#innovate .gel-key-text > span'), ['Bottom band', 'Middle band', 'Middle and bottom']);
  assert.deepEqual($('#innovate [data-gel-lane]').map((i, b) => [[b.attribs['data-gel-lane'], b.attribs['aria-pressed']]]).get(), [['1', 'false'], ['2', 'false'], ['3', 'false']]);
  assert.doesNotMatch(readFileSync('src/js/site/main.js', 'utf8'), /site-gel/);
  assert.match(readFileSync('src/js/site/main.js', 'utf8'), /ll:gel-ran/);
  assert.deepEqual(texts('#innovate .ticks strong'), ['Screening cum confirmatory.', 'From birth.', 'No cold chain.', 'No DNA extraction.']);
  assert.equal($('#innovate .ticks svg.icon').length, 4);
  assert.deepEqual(links('#innovate a.link'), [['How the test works', '/technology/']]);
});

test('Diagnose: the poster\'s comparison, six rows, ours pointed out, short labels on a phone', () => {
  assert.deepEqual(texts('#diagnose tbody th'), ['Sample', 'Storage and transport', 'Pre-processing', 'A second test to confirm', 'Newborns', 'Throughput']);
  assert.deepEqual(texts('#diagnose thead th'), ['Conventional screening tests', 'Conventional confirmatory tests', 'LitLife™']);
  assert.equal($('#diagnose td.is-ours').length, 6);
  assert.deepEqual([...new Set($('#diagnose td').map((i, td) => td.attribs['data-label']).get())], ['Screening', 'Confirmation', 'LitLife™']);
  assert.doesNotMatch(text('#diagnose'), /sensitivity|specificity/i);
});

test('REASSURED: nine letters as buttons over nine criteria in the poster\'s words, each with its icon', () => {
  assert.equal(texts('#reassured [data-word] button').join(''), 'REASSURED');
  const rows = $('#reassured [data-criteria] > li');
  assert.equal(rows.length, 9);
  rows.each((i, li) => {
    const c = CRIT.items[i];
    // Led by its letter, large (25 October 2026); the name keeps its hyphens from breaking.
    assert.equal(text($(li).children('.crit-letter')), c.letter, c.name);
    assert.equal(text($(li).find('.crit-name')).replace(/\u2011/g, '-'), c.name, c.name);
    assert.equal(text($(li).find('p')), c.line, c.name);
    assert.equal($(li).find('.crit-icon svg.icon').length, 1, c.name);
  });
  assert.equal(text('#reassured .lead'), 'We are an innovation-driven company developing REASSURED genetic tests, making molecular diagnosis accessible to all.');
  // The user, 25 October 2026: "Avoid one drop of blood and everything else can be used".
  assert.doesNotMatch(text('#reassured'), /drop of blood|single drop|one drop/i);
  assert.doesNotMatch(text('#reassured'), /^Criteria:|Criteria: Land/, 'the source line went at the user\'s request');
});

test('Transform lives: the poster\'s six steps, testing then care, each with its icon', () => {
  assert.deepEqual(texts('#model .model-step h3'), ['1 Collect', '2 Transport', '3 Test', '4 Report', '5 Treat and counsel', '6 Follow up']);
  assert.equal($('#model .model-step .icon-tile svg.icon').length, 6);
  assert.equal($('#model .model-step.is-care').length, 2);
  assert.deepEqual(texts('#model .model-phase'), ['Testing', 'Care']);
});

test('one platform: two families of tests, what is in development, and the open place', () => {
  assert.deepEqual(texts('#tests .family h3'), ['Blood disorders', 'Muscle disorders']);
  assert.deepEqual($('#tests .family-list a > span:first-child').map((i, s) => text(s)).get(), [
    'Sickle cell anaemia', 'Sickle-beta thalassaemia', 'Beta thalassaemia', 'Alpha thalassaemia', 'HbD and HbE',
    'Spinal muscular atrophy', 'Duchenne muscular dystrophy', 'Limb-girdle muscular dystrophy']);
  assert.match(text('#tests .family-dev'), /blood coagulation panel and pharmacogenomics/);
  assert.equal($('#tests a.next-tile').attr('href'), '/solutions/#develop');
  assert.match(text('#tests a.next-tile'), /Your condition next\./);
  // Unpublished pages are not linked (DMD and LGMD wait for their facts).
  $('#tests a').each((i, a) => assert.doesNotMatch(a.attribs.href, /duchenne|limb-girdle/, a.attribs.href));
});

test('the map: three layers, each with its sentence, and a still without script', () => {
  assert.deepEqual($('#map input[name=map-layer]').map((i, el) => [[el.attribs.value, text($(el).next('span'))]]).get(),
    [['sickle', 'Sickle cell'], ['thal', 'Thalassaemia'], ['work', 'Our work']]);
  assert.deepEqual($('#map input[name=map-layer]').map((i, el) => el.attribs['data-readout']).get(), [
    'Sickle cell disease is most common in a belt across central India, from Gujarat to Odisha.',
    'Thalassaemia is found across India: on average, 3 to 4 people in 100 are carriers. Higher frequencies are reported in Punjab, Delhi, Gujarat, Maharashtra and West Bengal.',
    'Our laboratory is in Hyderabad, Telangana. We have run population and newborn screening at 15 sites in nine states and Delhi.']);
  assert.equal($('#map input[name=map-layer]:checked').val(), 'sickle');
  assert.equal(text('[data-map-readout]'), 'Sickle cell disease is most common in a belt across central India, from Gujarat to Odisha.');
  assert.equal(text('#map .hint-point'), 'Point at a state to see what the map says about it.');
  assert.equal(text('#map .hint-tap'), 'Tap a state to see what the map says about it.');
  // With a remote or a keyboard and no pointer, as on a television (content 5.1, R3).
  assert.equal(text('#map .hint-select'), 'Select a state to see what the map says about it.');
  assert.equal($('#map [data-map] img.map-still').length, 1);
  assert.match(text('#map .sr-only:not(legend)'), /Where we have worked: population and newborn screening at 15 sites in nine states and Delhi: Delhi, Rajasthan, Madhya Pradesh, Jharkhand, Chhattisgarh, Maharashtra, Gujarat, Telangana, Karnataka and Tamil Nadu\.$/);
  assert.equal($('#map [aria-live=polite]').length, 1);
});

test('our latest work, under the map: three real items, each a compact card with its kind', () => {
  assert.equal(text('#map .work-row-h'), 'Our latest work');
  assert.deepEqual(texts('#map .work-kind'), ['Field programmes', 'Conference poster', 'Patents']);
  assert.deepEqual($('#map .work-card a').map((i, a) => a.attribs.href).get(), ['/our-work/#sites', '/our-work/', '/technology/#patents']);
  assert.deepEqual(links('#map .work-row > a.link'), [['All our work', '/our-work/']]);
});

test('three ways to partner, signed by the founder, with the email and the phone', () => {
  assert.deepEqual(texts('#contact .door-who'), ['Hospitals and laboratories', 'Public health programmes', 'CSR and NGOs']);
  assert.equal($('#contact .door .icon-tile svg.icon').length, 3);
  assert.match(text('#contact .signed'), /Dr\. Giriraj Ratan Chandak, MD, PhD, DNB\. Founder and CEO; formerly Chief Scientist at CSIR-CCMB and Director of CDFD\./);
  assert.deepEqual($('#contact .signed-reach a').map((i, a) => a.attribs.href).get(), ['mailto:admin@lighteninglives.in', 'tel:+919182588191']);
});

test('copy rules: no "one drop", no town in the copy, no kit headline, no placeholder', () => {
  const copy = text('main');
  assert.doesNotMatch(copy, /single drop|one drop|drop of blood/i);
  assert.doesNotMatch(copy, /\[(CONFIRM|TBC)|PLACEHOLDER/);
  for (const town of ['Udaipur', 'Bhopal', 'Jamshedpur', 'Bilaspur', 'Nandurbar', 'Nagpur', 'Dhule', 'Chandrapur', 'Mumbai', 'Valsad', 'Kothagudem', 'Mysuru', 'Mysore', 'Gudalur', 'Toranmal'])
    assert.ok(!copy.includes(town) && !$('main img').toArray().some((img) => (img.attribs.alt || '').includes(town)), town);
  assert.doesNotMatch(texts('main h2, main h3').join(' '), /\bkits?\b/i);
});
