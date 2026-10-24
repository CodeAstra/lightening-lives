// The home page: the approved Lumen page (designs/lumen.html) in its sections and order, with the
// content file's revised copy (content/website-content.md 5.1) and its one new section, "Who we are".
// The copy below is 5.1's, as written, with [TBC] brackets stripped and the sentence before them kept.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from './helpers.mjs';

const $ = load('/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

test('the page is 5.1\'s: title, description, and no inner-page opening or closing band', () => {
  assert.equal($('title').text(), 'Lightening Lives | Genetic testing from a spot of blood on a card');
  assert.equal($('meta[name=description]').attr('content'), 'Molecular diagnostics for inherited blood and muscle conditions, from a dried blood spot. Approved by ICMR, patented in India and Japan, screened at 15 sites. Hyderabad.');
  assert.equal($('.page-open').length, 0);
  assert.equal($('.closing').length, 0);
});

test('the sections are the approved page\'s, in its order, with "Who we are" before the vision', () => {
  assert.deepEqual($('main > section').map((i, s) => $(s).attr('id')).get(),
    ['top', 'how', 'why', 'tests', 'proof', 'map', 'reassured', 'partners', 'programmes', 'who', 'vision', 'contact']);
  assert.deepEqual(texts('main h2:not(.label)'), [
    'From one card to a national programme', 'Molecular diagnostics without the limits of conventional testing',
    'Our diagnostic portfolio', 'What stands behind the tests', 'Where the need is, and where we work',
    'The standard we design to, letter by letter', 'We work with institutions', 'A test is the middle of the story',
    'Founded by a physician and scientist', 'Tell us what your programme needs']);
  // Every section is labelled by its own heading.
  $('main > section').each((i, s) => assert.equal($(`#${$(s).attr('aria-labelledby')}`).closest('section').attr('id'), $(s).attr('id'), $(s).attr('id')));
});

test('the opening film: heading, lead, buttons, note and captions', () => {
  assert.equal(text('h1'), 'Genetic testing from a spot of blood on a card.');
  assert.equal($('h1').closest('section').attr('id'), 'top');
  assert.equal(text('.hero-lead'), 'Lightening Lives is an innovation-driven healthcare technology company in Hyderabad. We develop molecular diagnostics for inherited blood and muscle conditions that are designed to work where the patients are, and build them into solutions that hospitals, laboratories and public health programmes can run.');
  assert.deepEqual(links('.hero-actions a'), [['Partner with us', '/partnerships/'], ['See our solutions', '/solutions/']]);
  assert.ok($('.hero-actions a').first().is('.btn-solid') && $('.hero-actions a').last().is('.btn-line'));
  assert.equal(text('.hero-note'), 'Our sickle cell test is approved by ICMR and patented in India and Japan. We work with institutions and public health programmes.');
  assert.deepEqual(texts('.hero [data-film-caption]'), ['A spot of blood, dried on a card.', 'From card to result without a DNA extraction step.', 'Built for screening at the scale of a nation.']);
  // The captions are hidden from screen readers: "How it works" says the same with more to say.
  assert.equal($('.film-captions').attr('aria-hidden'), 'true');
  assert.equal($('.hero button.film-toggle').attr('aria-label'), 'Pause the film');
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

test('How it works: the three steps, in the film\'s words', () => {
  assert.equal(text('#how .lead'), 'Our tests are simple, affordable and usable outside specialised laboratories, so that molecular diagnosis can reach everyone.');
  assert.deepEqual(texts('#how .steps .label'), ['One card', 'One batch', 'One programme']);
  assert.deepEqual(texts('#how h3'), ['A spot of blood, dried on a card.', 'From card to result without a DNA extraction step.', 'Built for screening at the scale of a nation.']);
  assert.deepEqual(texts('#how .steps p:not(.label)'), [
    'That is the whole sample: a finger prick, a card, and no needle, no tube and no cold chain. Collection is simple and minimally invasive, and the card travels at room temperature to the nearest testing centre.',
    'A small punch from the dried spot goes straight into the reaction. The assay runs on standard PCR equipment in a modest laboratory, many cards at a time, and screens and confirms in the same test.',
    'We have run population and newborn screening at 15 sites across India, and developed a test for the National Sickle Cell Anaemia Elimination Mission. Test details are captured on a mobile app, so a programme can follow its screening as it happens.']);
  assert.equal($('#how .steps img').length, 3);
  assert.deepEqual(links('#how a.link'), [['How the technology works', '/technology/']]);
});

test('Why: five words and eight rows', () => {
  assert.equal(text('#why .lead'), 'Conventional genetic tests need venous blood, a cold chain, a specialist laboratory and, for screening, a second test to confirm. So they rarely reach the people who need them most. We design ours the other way round.');
  assert.equal(text('#better-h'), 'Genetic diagnosis, made');
  assert.deepEqual(texts('#why .better li'), ['Faster', 'Simpler', 'More affordable', 'More accessible', 'More scalable']);
  assert.deepEqual($('#why .why > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['A spot of blood, not a tube', 'A finger prick onto a card. No venepuncture, no EDTA tube, no pre-processing.'],
    ['Room temperature, not a cold chain', 'Cards keep and travel at room temperature, so samples can come from anywhere a health worker can reach.'],
    ['Screening and confirmation in one', 'One test does both, so a positive result needs no second test and no second visit.*'],
    ['Extraction-free molecular diagnostics', 'No separate DNA extraction step.*'],
    ['From birth', 'Newborns can be tested at birth. Conventional confirmatory tests wait 72 hours.*'],
    ['Minimal laboratory infrastructure', 'Standard PCR equipment and a gel tank. No specialised laboratory.'],
    ['High-throughput, automation-friendly', 'Many cards in one run, on a workflow that can be automated.'],
    ['For one patient or a whole district', 'Designed for a diagnosis in a clinic and for large-scale public health programmes.']]);
  assert.equal(text('#why .footnote'), '* Where applicable for developed assays.');
});

test('the portfolio: four kinds, then seven tests ending with the open place', () => {
  assert.equal(text('#tests .lead'), 'Four kinds of genetic test, in two families so far, with more assays under development.');
  assert.deepEqual($('#tests .kinds > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Monogenic disorders', 'Haemoglobinopathies and musculopathies: inherited disorders of haemoglobin, and inherited conditions that weaken the muscles. The two families we have developed tests for so far.'],
    ['Pharmacogenetic variants', 'How a person\'s genes change their response to a medicine, for personalised therapy. In development.'],
    ['Rare genetic disorders', 'Testing for rare and inherited conditions.'],
    ['Custom molecular diagnostic assays', 'Assays designed for a research study or a clinical service.']]);
  assert.equal(text('#tests .sofar h3'), 'Developed so far');
  assert.equal(text('#tests .sofar p'), 'Each of these began with an institution that needed it. The next can begin with yours.');

  const rows = $('#tests li.test.test-row');
  assert.equal(rows.length, 7);
  const row = (i) => rows.eq(i);
  assert.deepEqual(rows.map((i, li) => [[text($(li).find('h4')), text($(li).find('.label'))]]).get(), [
    ['Sickle cell anaemia', 'Haemoglobinopathy'], ['Thalassaemia and other haemoglobinopathies', 'Haemoglobinopathy'],
    ['Spinal muscular atrophy', 'Musculopathy'], ['Duchenne muscular dystrophy', 'Musculopathy'],
    ['Limb-girdle muscular dystrophy', 'Musculopathy'], ['In development', 'Coming soon'], ['The condition you need next', '']]);
  assert.deepEqual(rows.map((i, li) => text($(li).find('.test-what > p'))).get(), [
    'LitLife™-SCA screens for and confirms sickle cell anaemia in one test from a dried blood spot. Developed with CSIR-CCMB know-how for the National Sickle Cell Anaemia Elimination Mission.',
    'LitLife™-BThal and LitLife™-AlphaThal for beta and alpha thalassaemia, LitLife™-SiBThal217 for sickle cell anaemia and beta thalassaemia together, and testing for HbD and HbE.',
    'LitLife™-SMA screens for and confirms SMA from a dried blood spot. Designed for newborn screening, where finding SMA before symptoms changes what treatment can do.',
    'A genetic test for DMD: an earlier diagnosis for a boy losing strength, and carrier testing for his mother and sisters.',
    'A genetic test for LGMD, where the first symptom and a diagnosis are often years apart, and the subtype decides the care.',
    'A blood coagulation panel for inherited bleeding disorders, and pharmacogenomics testing.',
    'Tell us what your programme or laboratory needs to detect. We develop the test, to the same REASSURED standard as the ones above.']);
  // Tags: proof tags filled; a row whose tags are only a bracket has none.
  assert.deepEqual(row(0).find('.tag').map((i, t) => [[text(t), $(t).is('.tag-proof')]]).get(),
    [['Approved by ICMR', true], ['Patented in India and Japan', true], ['Dried blood spot', false]]);
  assert.deepEqual(texts(row(1).find('.tag')), ['Dried blood spot']);
  assert.deepEqual(texts(row(2).find('.tag')), ['Dried blood spot', 'No DNA extraction']);
  for (const i of [3, 4, 5, 6]) assert.equal(row(i).find('.tags').length, 0, `row ${i}`);
  // Each row's link; DMD and LGMD point to Develop a test until their pages open (content 3.1).
  assert.deepEqual(rows.map((i, li) => links($(li).find('a'))).get(), [
    ['About this test', '/solutions/sickle-cell-anaemia/'], ['About these tests', '/solutions/thalassaemia/'],
    ['About this test', '/solutions/spinal-muscular-atrophy/'],
    ['Ask about this test', '/solutions/develop-a-test/#musculopathies'], ['Ask about this test', '/solutions/develop-a-test/#musculopathies'],
    ['What we are developing', '/solutions/develop-a-test/#in-development'], ['Talk to us about a new test', '/solutions/develop-a-test/']]);
  assert.equal($('#tests details').length, 0, 'the "About the condition" disclosures moved to the tests\' pages');
});

test('Evidence: four proof names in DNA blue', () => {
  assert.deepEqual(texts('#proof .hl'), ['ICMR', 'India and Japan', 'CSIR-CCMB', '15 sites']);
  assert.deepEqual($('#proof .proof > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Approved by ICMR', 'LitLife™-SCA, our sickle cell test, is approved by the Indian Council of Medical Research.'],
    ['Patented in India and Japan', 'The technology behind our tests holds patents granted in India and Japan, and a patent published internationally.'],
    ['Working with CSIR-CCMB', 'An MOU with the CSIR-Centre for Cellular and Molecular Biology, Hyderabad, covers developing and commercialising the sickle cell assay.'],
    ['Proven at 15 sites', 'Population and newborn screening in nine states and Delhi, from Udaipur to Gudalur, and a test developed for the National Sickle Cell Anaemia Elimination Mission.']]);
});

test('the map: three layers, each with its sentence, and a still without script', () => {
  assert.deepEqual($('#map input[name=map-layer]').map((i, el) => [[el.attribs.value, text($(el).next('span'))]]).get(),
    [['sickle', 'Sickle cell'], ['thal', 'Thalassaemia'], ['work', 'Our work']]);
  assert.deepEqual($('#map input[name=map-layer]').map((i, el) => el.attribs['data-readout']).get(), [
    'Sickle cell disease is most common in a belt across central India, from Gujarat to Odisha.',
    'Thalassaemia is found across India: on average, 3 to 4 people in 100 are carriers. Higher frequencies are reported in Punjab, Delhi, Gujarat, Maharashtra and West Bengal.',
    'Our laboratory is in Hyderabad. We have run population and newborn screening at 15 sites across India, from Delhi to Gudalur.']);
  assert.equal($('#map input[name=map-layer]:checked').val(), 'sickle');
  assert.equal(text('[data-map-readout]'), 'Sickle cell disease is most common in a belt across central India, from Gujarat to Odisha.');
  assert.equal(text('#map .hint-point'), 'Point at a state to see what the map says about it.');
  assert.equal(text('#map .hint-tap'), 'Tap a state to see what the map says about it.');
  assert.equal($('#map [data-map] img.map-still').length, 1);
  assert.match(text('#map .sr-only:not(legend)'), /Where we have worked: population and newborn screening at 15 sites across India: Delhi; Udaipur; Bhopal; Jamshedpur; Bilaspur; Nandurbar, Nagpur, Dhule, Chandrapur and Mumbai; Valsad; Kothagudem and Hyderabad; Mysore; and Gudalur\.$/);
  assert.equal($('#map [aria-live=polite]').length, 1);
});

test('REASSURED: nine letters as buttons and nine criteria in the company\'s words', () => {
  assert.equal(text('#reassured .lead'), 'REASSURED is a published set of nine criteria for diagnostic tests that work in low-resource settings. Here is what each one means in our tests.');
  const names = ['Real-time connectivity', 'Ease of specimen collection', 'Affordable', 'Sensitive', 'Specific', 'User-friendly', 'Rapid and robust', 'Equipment-free or simple', 'Deliverable to end-users'];
  assert.deepEqual($('#reassured [data-word] button').map((i, b) => [[text(b), b.attribs['aria-label']]]).get(),
    names.map((n) => [n[0], `${n[0]}: ${n}`]));
  assert.deepEqual($('#reassured .criteria > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    [names[0], 'Test details are captured on a mobile app, so a programme can follow its screening as it happens.'],
    [names[1], 'A spot of blood from a finger prick, dried on a card. Minimally invasive.'],
    [names[2], 'Priced for programmes that test whole populations, and for the health system that pays.'],
    [names[3], 'Few false negatives.'],
    [names[4], 'Few false positives.'],
    [names[5], 'Extraction-free, with an automation-friendly workflow and minimal training.'],
    [names[6], 'Quick turnaround and high-throughput screening. Cards keep at room temperature.'],
    [names[7], 'Minimal laboratory infrastructure: standard PCR equipment, no specialised laboratory.'],
    [names[8], 'Designed for one patient in a clinic and for large-scale public health programmes.']]);
  assert.match(text('#reassured'), /Source Land et al\., Nature Microbiology \(2019\)/);
});

test('Who we work with: three audiences, a link and the notice', () => {
  assert.equal(text('#partners .lead'), 'Hospitals, laboratories and public health programmes come to us with a condition they need to screen for or diagnose. Most of that work begins as a collaboration.');
  assert.deepEqual($('#partners .audiences > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Hospitals, laboratories and clinicians', 'Genetic tests for inherited blood and muscle conditions, designed to run with minimal laboratory infrastructure. We help set the method up and train your staff.'],
    ['District health officers and government programmes', 'Tests developed for national health programmes, for screening at population scale, with counselling and follow-up alongside.'],
    ['NGOs and CSR funders', 'A partner for large, population-level screening: the testing, the method for the field, and support for the families it identifies.']]);
  assert.deepEqual(links('#partners a.link'), [['How a collaboration works', '/partnerships/#how-it-starts']]);
  assert.equal(text('#partners .notice .label'), 'For individuals');
  assert.equal(text('#partners .notice p'), 'Looking for a test for yourself or your family? We work with institutions and don\'t test individuals. Please speak to your doctor or visit your nearest government health facility.');
});

test('Programmes: the story after the test, and the three place photographs labelled as places', () => {
  assert.equal(text('#programmes .lead'), 'After the result come treatment, counselling and follow-up. We run awareness and counselling programmes, mostly on behalf of the government, and help set up patient support groups.');
  assert.match(text('#programmes'), /Sample collection, transport, testing, reporting, treatment with counselling, follow-up: our testing model covers all six, so that a result leads somewhere\./);
  assert.deepEqual(links('#programmes a.link'), [['See our programmes', '/programmes/']]);
  assert.equal($('#programmes h3, #programmes .label').filter((i, e) => /Where our field work has taken us/.test(text(e))).length, 1);
  assert.deepEqual(texts('#programmes figcaption'), ['Nandurbar, Maharashtra', 'Kothagudem, Telangana', 'Patratu Valley, Jharkhand']);
});

test('Who we are: the founders, in text only, with two links', () => {
  assert.equal(text('#who .label'), 'Who we are');
  assert.equal(text('#who p:not(.label):not(:has(a))'), 'Lightening Lives was founded by Dr. Giriraj Ratan Chandak, formerly Chief Scientist at the CSIR-Centre for Cellular and Molecular Biology and a former Director of the Centre for DNA Fingerprinting and Diagnostics, with Mrs. Nidhi Chandak. The company draws on more than 25 years of work in genetic and molecular diagnostics.');
  assert.deepEqual(links('#who a'), [['About the company', '/about/'], ['Meet the team', '/about/team/']]);
  assert.equal($('#who img').length, 0, 'the founders\' portrait belongs on About and Team');
});

test('the vision keeps the company\'s own sentence', () => {
  assert.equal(text('#vision .label'), 'Our vision');
  assert.equal(text('.vision-line'), 'To make precision genetic diagnosis accessible to every individual, through innovative technologies that need only a single drop of blood.');
});

test('Contact: four actions that open an email with the subject filled in', () => {
  assert.equal(text('#contact .lead'), 'Choose where you would like to begin.');
  assert.deepEqual(links('#contact .actions a.action'), [
    ['Explore a partnership', 'mailto:admin@lighteninglives.in?subject=Partnership'],
    ['Request tests', 'mailto:admin@lighteninglives.in?subject=Request%20tests'],
    ['Ask about awareness and counselling', 'mailto:admin@lighteninglives.in?subject=Awareness%20and%20counselling'],
    ['Talk to sales', 'mailto:admin@lighteninglives.in?subject=Sales']]);
  assert.match(text('#contact'), /Write or call admin@lighteninglives\.in \+91 91825 88191/);
  assert.equal($('#contact a[href="tel:+919182588191"]').length, 1);
  assert.match(text('#contact'), /We work with institutions\. Each request is discussed on its own terms, based on your institutional or regulatory requirements\./);
});
