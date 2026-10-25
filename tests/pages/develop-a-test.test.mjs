// Phase 5, Task 5.4: Develop a test (content/website-content.md 5.9, with 3.1, 3.2, 4.5 and 4.6), the
// open place. Its own template, not a test's page (the controller's Phase 5 ruling 8): no notice, its
// asks go to /contact/, "Ask about DMD or LGMD testing" is the email asking for tests, and the closing
// line button goes to Solutions' "Developed so far". The copy is 5.9's as written: the [TBC] brackets
// in the lead, the rows, the kinds and step 3 are stripped with the sentence before them kept (step 3
// keeps its title alone), and the note under the steps, only a bracket, is left out.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exists, load } from '../helpers.mjs';

const URL = '/solutions/develop-a-test/';
let cached;
const $ = (...args) => (cached ??= load(URL))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

test('the route is built', () => {
  assert.ok(exists(URL), `${URL} has no page in dist/`);
});

test('title, description, label, h1 and lead, the bracket stripped (5.9, 4.6)', () => {
  assert.equal($('title').text(), 'Develop a genetic test with us | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Tell us the inherited condition your programme or laboratory needs to detect. Lightening Lives develops and validates the test. A coagulation panel and pharmacogenomics are in development now.');
  assert.equal(text('.page-open .label'), 'Develop a test');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Tell us the condition. We develop the test');
  assert.equal(text('.page-open .lead'), 'Every test we have developed so far began with an institution that needed it. Yours can be next: any inherited condition, to the same REASSURED standard.');
  assert.equal($('.page-open .tag').length, 0);
});

test('the h2s are 5.9\'s, in its order, and 3.2\'s anchors exist', () => {
  assert.deepEqual(texts('main h2'), [
    'Duchenne and limb-girdle muscular dystrophy', 'What we are developing now', 'What we take on', 'What to tell us',
    'How it goes', 'Start with the condition']);
  for (const id of ['musculopathies', 'in-development']) assert.equal($(`[id="${id}"]`).length, 1, id);
});

test('also developed (#musculopathies): the words, and the email asking for tests (ruling 8)', () => {
  assert.equal(text('#musculopathies h2'), 'Duchenne and limb-girdle muscular dystrophy');
  assert.equal(text('#musculopathies .story > p:not(:has(a))'), 'We have developed tests for Duchenne muscular dystrophy and limb-girdle muscular dystrophy, alongside LitLife™-SMA. Write to us with your clinic or laboratory and the numbers you see, and we will send the details.');
  assert.deepEqual(links('#musculopathies a'), [['Ask about DMD or LGMD testing', 'mailto:admin@lighteninglives.in?subject=Request%20tests']]);
});

test('in development: two rows, brackets stripped, and the ask to /contact/ (ruling 8)', () => {
  assert.equal($('#in-development .rows li').length, 2);
  assert.deepEqual($('#in-development .rows > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Blood coagulation panel', 'Genetic testing for inherited bleeding disorders such as haemophilia A and B. The panel will confirm a diagnosis, identify carriers and support family counselling.'],
    ['Pharmacogenomics', 'Testing for the genetic differences that change how a person responds to a medicine, so that the drug and the dose can be chosen for the person.']]);
  assert.deepEqual(links('#in-development a'), [['Ask about a test in development', '/contact/']]);
});

test('what we take on: the four kinds of test, as the home page\'s cards', () => {
  assert.equal($('#what-we-take-on .kinds > li').length, 4);
  assert.deepEqual($('#what-we-take-on .kinds > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Monogenic disorders', 'Conditions caused by a change in a single gene, such as the haemoglobinopathies and musculopathies we already test for.'],
    ['Pharmacogenetic variants', 'Tests for the genetic differences that change how a person responds to a medicine.'],
    ['Rare genetic disorders', 'Tests for rare inherited conditions, developed when an institution needs one.'],
    ['Custom molecular diagnostic assays', 'Assays designed for a research study or a clinical service.']]);
});

test('what to tell us: the five points, one to a line', () => {
  assert.equal($('#what-to-tell-us .lines li').length, 5);
  assert.deepEqual(texts('#what-to-tell-us li'), [
    'The condition, and the genes or variants if you know them',
    'Who will be tested, and roughly how many',
    'Where samples will be collected, and which laboratory will run the tests',
    'Whether the test is for screening, for diagnosis or for research',
    'Any regulatory or programme requirements it has to meet']);
});

test('how it goes: four numbered steps in words, step 3 its title alone, no note under them', () => {
  assert.equal($('#how-it-goes ol li').length, 4);
  assert.ok($('#how-it-goes ol').is('.steps-numbered.steps-text'));
  assert.equal($('#how-it-goes ol').attr('role'), 'list');
  assert.deepEqual(texts('#how-it-goes .run-in'), ['We agree what the test must do.', 'We develop it.', 'We validate it.', 'We help you put it to work.']);
  assert.deepEqual(texts('#how-it-goes ol > li'), [
    'We agree what the test must do. What it detects, on what sample, in what kind of laboratory.',
    'We develop it. The assay, and the method for running it.',
    'We validate it.',
    'We help you put it to work. Training for your staff, the app for monitoring, and awareness and counselling where the programme calls for them.']);
  assert.equal($('#how-it-goes p').length, 4, 'no line under the steps');
});

test('no bracket renders anywhere on the page', () => {
  assert.doesNotMatch(text('main'), /\[(TBC|PLACEHOLDER)/);
});

test('the closing band: its ask, Talk to us to /contact/, See what we have developed, and no notice (ruling 8)', () => {
  const band = $('main > section').last();
  assert.ok(band.hasClass('closing'));
  assert.equal(text(band.find('h2')), 'Start with the condition');
  assert.equal(text(band.find('.lead')), 'Write to us with the five points above, or as many of them as you have.');
  assert.deepEqual([text(band.find('.btn-solid')), band.find('.btn-solid').attr('href')], ['Talk to us about a new test', '/contact/']);
  assert.deepEqual([text(band.find('.btn-line')), band.find('.btn-line').attr('href')], ['See what we have developed', '/solutions/#developed']);
  assert.equal(load('/solutions/')('#developed h2').text().trim(), 'Developed so far', 'the line button lands on "Developed so far"');
  assert.equal($('.notice').length, 0);
});

test('the bands alternate back from the closing band\'s paper; the kinds stand on paper', () => {
  const bands = $('main > section').get();
  for (let i = 1; i < bands.length; i++) {
    const back = bands.length - 1 - i;
    assert.equal($(bands[i]).hasClass('bg-paper'), back % 2 === 0, `band ${i} (${$(bands[i]).attr('id') ?? 'closing'})`);
  }
  assert.ok($('#what-we-take-on').hasClass('bg-paper'), 'DESIGN.md: the kinds are glass cards on a lit paper band');
});
