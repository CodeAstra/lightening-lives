// Phase 4, Task 4.2: the Solutions page (content/website-content.md 5.3, with 3.1's note on the DMD and
// LGMD rows, 4.4, 4.5, 4.7 and 7.1). The copy is 5.3's as written: [TBC] brackets stripped with the
// sentence before them kept; the seven test rows are the home page's, from one shared include.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import nunjucks from 'nunjucks';
import { load } from '../helpers.mjs';

let cached;
const $ = (...args) => (cached ??= load('/solutions/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();
const ASK = '/solutions/develop-a-test/#musculopathies';

test('title, description, label, h1 and lead (5.3, 4.6)', () => {
  assert.equal($('title').text(), 'Diagnostic solutions | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Molecular tests for sickle cell anaemia, thalassaemia, HbD and HbE, spinal muscular atrophy, Duchenne and limb-girdle muscular dystrophy, from a dried blood spot, for hospitals, laboratories and health programmes.');
  assert.equal(text('.page-open .label'), 'Solutions');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Diagnostic solutions for inherited conditions');
  assert.equal(text('.page-open .lead'), 'We develop tests for inherited blood and muscle conditions, and make each one something an institution can run: assay, card, method, training and counselling.');
});

test('the h2s are 5.3\'s, in its order, each labelling its own section', () => {
  assert.deepEqual(texts('main h2'), [
    'Two families of conditions, one way of testing', 'Developed so far', 'What you get when we work together',
    'How a test arrives', 'Questions we are asked', 'Tell us what your programme needs']);
  $('main > section').each((i, s) => assert.equal($(`#${$(s).attr('aria-labelledby')}`).closest('section')[0], s));
});

test('the anchors 3.2 names exist', () => {
  for (const id of ['haemoglobinopathies', 'musculopathies', 'faq']) assert.equal($(`#${id}`).length, 1, id);
  // The "In development" band was cut on 25 October 2026: it repeated the last row of "Developed so far".
  assert.equal($('#in-development').length, 0);
});

test('two families: two columns, their words, their tests and their links', () => {
  assert.match(text('#families .lead'), /^Every test works the same way: a spot of blood on a card, no DNA extraction, a modest laboratory\. What differs is the condition\.$/);
  assert.equal($('.families > *').length, 2);
  assert.deepEqual(texts('.families > * > h3'), ['Haemoglobinopathies', 'Musculopathies']);
  assert.deepEqual($('.families > *').map((i, li) => $(li).attr('id')).get(), ['haemoglobinopathies', 'musculopathies']);
  // Each column's body, split at a sentence into what the condition is and what a test does (R1).
  assert.deepEqual(texts('#haemoglobinopathies > p:not(.label)'), [
    'Inherited disorders of haemoglobin. They are India\'s most common single-gene conditions, and most families learn of them only after an affected child is born.',
    'Carrier screening, diagnosis and newborn screening, from the same card.']);
  assert.deepEqual(texts('#musculopathies > p:not(.label)'), [
    'Inherited conditions that weaken the muscles. Children are often thought to be weak or undernourished, and families wait years for a diagnosis.',
    'A genetic result ends the wait, opens the treatment that exists, and tells the family who else carries the condition.']);
  assert.deepEqual(texts('#haemoglobinopathies .family-tests li'), ['LitLife™-SCA', 'LitLife™-SiBThal217', 'LitLife™-BThal', 'LitLife™-AlphaThal', 'HbD and HbE testing']);
  assert.deepEqual(texts('#musculopathies .family-tests li'), ['LitLife™-SMA', 'DMD test', 'LGMD test']);
  assert.deepEqual(links('#haemoglobinopathies a'), [
    ['Sickle cell anaemia', '/solutions/sickle-cell-anaemia/'], ['Thalassaemia and other haemoglobinopathies', '/solutions/thalassaemia/']]);
  // The two tests whose pages are not open yet go to Develop a test (content 3.1).
  assert.deepEqual(links('#musculopathies a'), [
    ['Spinal muscular atrophy', '/solutions/spinal-muscular-atrophy/'], ['Duchenne muscular dystrophy', ASK], ['Limb-girdle muscular dystrophy', ASK]]);
});

test('developed so far: seven rows, headed one level under the section', () => {
  const section = $('#developed');
  assert.equal(text(section.find('.lead')), 'Each of these began with an institution that needed it. The next can begin with yours.');
  const rows = section.find('.test-row');
  assert.equal(rows.length, 7);
  assert.equal($('.test-row').length, 7);
  assert.deepEqual(rows.map((i, li) => text($(li).find('h3'))).get(), [
    'Sickle cell anaemia', 'Thalassaemia and other haemoglobinopathies', 'Spinal muscular atrophy', 'Duchenne muscular dystrophy',
    'Limb-girdle muscular dystrophy', 'In development', 'The condition you need next']);
  assert.equal(rows.find('h4').length, 0);
  assert.deepEqual(rows.map((i, li) => links($(li).find('a'))).get(), [
    ['About this test', '/solutions/sickle-cell-anaemia/'], ['About these tests', '/solutions/thalassaemia/'],
    ['About this test', '/solutions/spinal-muscular-atrophy/'], ['Ask about this test', ASK], ['Ask about this test', ASK],
    ['What we are developing', '/solutions/develop-a-test/#in-development'], ['Talk to us about a new test', '/solutions/develop-a-test/']]);
});

test('what you get: six rows, each keeping its sentence, no brackets, and the footnote', () => {
  const section = $('h2').filter((i, h) => text(h) === 'What you get when we work together').closest('section');
  const rows = section.find('.rows > li');
  assert.equal(rows.length, 6);
  assert.deepEqual(rows.map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['A test developed for the condition', 'An assay built and validated for what your programme needs to detect.'],
    ['A sample that can be taken anywhere', 'A spot of blood on a card, carried at room temperature. Collection is simple and minimally invasive.'],
    ['A method your laboratory can run', 'Written for laboratories with minimal infrastructure, with no DNA extraction step.*'],
    ['Training for the people who run it', 'Hands-on workshops for laboratory staff and health workers.'],
    ['A way to watch the programme', 'Test details captured on a mobile app, for real-time monitoring.'],
    ['Help with what follows a result', 'Genetic and social counselling for patients and carriers, awareness programmes, and patient support groups.']]);
  assert.equal(text(section.find('.footnote')), '* Where applicable for developed assays.');
});

test('how a test arrives: the one place "kit" is said, and the row of boxes', () => {
  const section = $('#how-a-test-arrives');
  assert.equal(section.length, 1);
  assert.match(text(section), /Each test is packed as a kit: a sample collection kit for the people who take the samples, and, where the laboratory needs it, a reagent kit\. Our tests are made in India by a third-party manufacturer that holds a quality certification\./);
  // Four stills: the LitLife™-SCA box is withheld until the company gives written permission for the
  // CSIR-CCMB logo its pictures carry and confirms their printed claims (content 7.1, Part 8 items 4, 25).
  const imgs = $('.boxes img');
  assert.equal(imgs.length, 4);
  const names = ['LitLife™-SiBThal217', 'LitLife™-BThal', 'LitLife™-AlphaThal', 'LitLife™-SMA'];
  assert.deepEqual(imgs.map((i, img) => $(img).attr('src').replace(/^\/assets\/img\/|-\d+\.webp$/g, '')).get(),
    ['box-sibthal217', 'box-bthal', 'box-alphathal', 'box-sma']);
  imgs.each((i, img) => {
    const alt = $(img).attr('alt');
    assert.ok(alt.includes(`${names[i]} box`), alt);
    assert.doesNotMatch(alt, /\bkits?\b/i, alt);
  });
  assert.deepEqual(texts('.boxes figcaption'), names);
  // The open place: a carton drawn in CSS, not a picture.
  const open = $('.boxes .open');
  assert.equal(open.length, 1);
  assert.equal(open.find('img').length, 0);
  assert.equal(text(open), 'The condition you need next');
  assert.equal(open.find('a').attr('href'), '/solutions/develop-a-test/');
  // "kit" nowhere else on the page (content 5.3; tests/content-rules.test.mjs checks every page).
  const rest = $('main').clone();
  rest.find('#how-a-test-arrives').remove();
  assert.doesNotMatch(rest.text(), /\bkits?\b/i);
});

const QUESTIONS = [
  ['Do you test individuals?', 'No. We work with hospitals, laboratories, clinicians, NGOs, CSR funders and government health programmes. If you are looking for a test for yourself or your family, please speak to your doctor or visit your nearest government health facility.'],
  ['What does our laboratory need to run the tests?', 'A thermal cycler, a gel electrophoresis tank and a punch, a bench, and staff who have run PCR or have been trained. We help set the method up and train your staff.'],
  ['How do samples reach the laboratory?', 'On the card, at room temperature, by ordinary courier or post. No cold chain.'],
  ['Are the tests approved?', 'LitLife™-SCA, our sickle cell test, is approved by ICMR. The technology behind our tests is patented in India and Japan.'],
  ['Does a positive result need a second test?', 'For LitLife™-SCA and LitLife™-SMA, no: the test screens and confirms.'],
  ['Can you develop a test for a condition that isn\'t listed?', 'Yes. Each test we have developed began with an institution that needed it. Tell us the condition and the setting, and we take it from there.'],
  ['How do we start?', 'Write to us with the condition, who will be tested and roughly how many, where samples will be collected and which laboratory will run them. We reply with how we would approach it.'],
];

test('questions we are asked: seven disclosures, closed, answers without their brackets', () => {
  const details = $('#faq .faq details');
  assert.equal($('.faq details').length, 7);
  assert.deepEqual(details.map((i, d) => [[text($(d).find('summary')), text($(d).find('summary').nextAll())]]).get(), QUESTIONS);
  details.each((i, d) => assert.equal($(d).attr('open'), undefined));
});

test('the questions are a FAQPage in structured data, word for word what the page shows', () => {
  const data = $('script[type="application/ld+json"]').map((i, s) => JSON.parse($(s).text())).get().filter((d) => d['@type'] === 'FAQPage');
  assert.equal(data.length, 1);
  assert.equal(data[0]['@context'], 'https://schema.org');
  const entities = data[0].mainEntity;
  assert.equal(entities.length, 7);
  for (const e of entities) assert.equal(e['@type'], 'Question');
  assert.deepEqual(entities.map((e) => e.name), texts('.faq summary'));
  assert.deepEqual(entities.map((e) => [e.name, e.acceptedAnswer['@type'], e.acceptedAnswer.text]), QUESTIONS.map(([q, a]) => [q, 'Answer', a]));
});

test('an answer holding "</script" cannot end the structured data early, and still parses to its words (M2)', () => {
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/site/_includes'));
  const items = [{ q: 'Is <b> a tag?', a: 'Yes. </script><script>alert(1)</script> & more.' }];
  const html = env.renderString('{% from "faq.njk" import faq %}{{ faq(items) }}', { items });
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
  assert.doesNotMatch(json, /</);
  const data = JSON.parse(json);
  assert.equal(data.mainEntity[0].name, items[0].q);
  assert.equal(data.mainEntity[0].acceptedAnswer.text, items[0].a);
});

test('no bracket renders; the notice is present; the closing band is 4.5\'s', () => {
  // What renders: the structured data is a script, and its JSON has brackets of its own.
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[TBC|PLACEHOLDER|\]/);
  assert.match(text('.notice'), /^For individuals Looking for a test for yourself or your family\? We work with institutions and don't test individuals\./);
  assert.equal(text('.closing h2'), 'Tell us what your programme needs');
  assert.equal(text('.closing .lead'), 'Tell us the condition you need to test for and where the testing will happen. We will take it from there.');
  assert.deepEqual(links('.closing .btn-solid'), [['Partner with us', '/partnerships/']]);
  assert.deepEqual(links('.closing .btn-line'), [['Contact us', '/contact/']]);
});

test('the LitLife™-SCA box is neither placed nor published (the CSIR-CCMB logo, without written permission)', () => {
  assert.equal($('img').filter((i, img) => /box-sca/.test(`${$(img).attr('src')} ${$(img).attr('srcset') ?? ''}`)).length, 0);
  assert.doesNotMatch($('html').html(), /box-sca/);
  assert.deepEqual(readdirSync('dist/assets/img').filter((f) => f.startsWith('box-sca')), []);
  assert.deepEqual(readdirSync('src/assets/img').filter((f) => f.startsWith('box-sca')), []);
  assert.deepEqual(readdirSync('src/images-src').filter((f) => f.startsWith('box-sca')), []);
});

test('the company\'s own pictures are not stand-ins: no credits and no "representative" line', () => {
  assert.equal($('footer .credits').length, 0);
  assert.doesNotMatch($('footer').text(), /representative/i);
});
