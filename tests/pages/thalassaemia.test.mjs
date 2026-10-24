// Phase 5, Task 5.2: Thalassaemia and other haemoglobinopathies (content/website-content.md 5.5, with
// 4.3 to 4.5), on the test-page layout (Task 5.0). The copy is 5.5's as written, brackets stripped with
// the sentence before them kept, and a row that is only a bracket left out. 5.5 has no "Why" section,
// so the page has none. The controller's Phase 5 rulings: the solid closing button is the email (3),
// the three box stills end "The tests" (5), no map here (6), and the page links to its family and to
// Develop a test (7).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TOWNS, exists, load } from '../helpers.mjs';

const URL = '/solutions/thalassaemia/';
let cached;
const $ = (...args) => (cached ??= load(URL))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

// The towns of the 15 sites (content 6.1, R2): places are named by state, not town.

test('the route is built', () => {
  assert.ok(exists(URL), `${URL} has no page in dist/`);
});

test('title, description, label, h1, lead and chips (5.5, 4.3, 4.6)', () => {
  assert.equal($('title').text(), 'Thalassaemia, HbD and HbE testing | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Molecular tests for beta and alpha thalassaemia, sickle-beta thalassaemia, HbD and HbE from a dried blood spot: LitLife™-BThal, LitLife™-AlphaThal and LitLife™-SiBThal217.');
  assert.equal(text('.page-open .label'), 'Haemoglobinopathy');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Thalassaemia and other haemoglobinopathies');
  assert.equal(text('.page-open .lead'), 'Tests for the haemoglobin disorders a programme meets alongside sickle cell anaemia: beta and alpha thalassaemia, sickle-beta thalassaemia, HbD and HbE. All from a spot of blood on a card.');
  assert.deepEqual($('.page-open .tag').map((i, t) => [[text(t), $(t).hasClass('tag-proof')]]).get(), [
    ['Dried blood spot', false], ['Room temperature transport', false]]);
});

test('the sections, in ruling 1\'s order, under 5.5\'s headings, with no "Why" section', () => {
  const bands = $('main > section').map((i, s) => $(s).attr('id') ?? ($(s).hasClass('page-open') ? 'opening' : 'closing')).get();
  assert.deepEqual(bands, ['opening', 'the-condition', 'the-test', 'where-used', 'who-and-family', 'closing']);
  assert.deepEqual(texts('main h2'), [
    'The conditions', 'The tests', 'Where they have been used', 'Who they are for', 'Also in this family', 'Planning thalassaemia screening?']);
  assert.equal($('#why').length, 0);
});

test('the conditions: four rows, then the source line without its bracket', () => {
  assert.deepEqual(texts('#the-condition .rows h3'), ['Beta thalassaemia', 'Alpha thalassaemia', 'Sickle-beta thalassaemia', 'HbE and HbD']);
  assert.deepEqual(texts('#the-condition .rows p'), [
    'The body makes too little of the beta chain of haemoglobin. The severe form, thalassaemia major, needs blood transfusions for life. Carriers are usually healthy; their mild anaemia is often mistaken for iron deficiency. On average 3 to 4 in 100 Indians are carriers; when both parents are, each pregnancy has a 1 in 4 chance of thalassaemia major.',
    'Changes in the alpha-globin genes, most often deletions. The effect runs from no symptoms to a lifelong anaemia, depending on how many of the four genes are affected. Routine screening often misses it.',
    'A person who inherits the sickle gene from one parent and a beta thalassaemia gene from the other. It can look like sickle cell disease, and it is common where both conditions run, as they do in the central belt. Telling the two apart matters for care and for counselling.',
    'Two other variants of haemoglobin. HbE is common in eastern and north-eastern India, and with a beta thalassaemia gene it can cause a serious anaemia. HbD, found in Punjab and Gujarat, can be mistaken for the sickle gene on a screening test.']);
  assert.equal(text('#the-condition .source'), 'National Health Mission, Guidelines for Prevention and Control of Hemoglobinopathies in India (2016)');
  assert.ok($('#the-condition .source').prev().is('.rows'), 'the source sits under the conditions');
});

test('the tests: five rows, the bracket-only Validation row left out', () => {
  assert.deepEqual($('#the-test .rows > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['LitLife™-BThal', 'A dried blood spot molecular test for diagnosis of beta thalassaemia.'],
    ['LitLife™-AlphaThal', 'A dried blood spot molecular test for diagnosis of alpha thalassaemia.'],
    ['LitLife™-SiBThal217', 'A dried blood spot molecular test for diagnosis of sickle cell anaemia and beta thalassaemia together, for programmes in the belt where both run.'],
    ['HbD and HbE', 'Testing for the HbD and HbE variants is also available.'],
    ['The sample', 'A spot of blood, dried on a card. Cards keep and travel at room temperature.']]);
});

test('the three box stills end "The tests", named as Solutions names them (ruling 5)', () => {
  assert.equal($('.boxes img').length, 3);
  assert.ok($('#the-test .boxes').prev().is('.rows'), 'the boxes follow the rows');
  assert.deepEqual(texts('#the-test .boxes figcaption'), ['LitLife™-BThal', 'LitLife™-AlphaThal', 'LitLife™-SiBThal217']);
  assert.deepEqual($('#the-test .boxes img').map((i, img) => $(img).attr('alt')).get(), [
    'The LitLife™-BThal box, printed with the Lightening Lives logo, red blood cells and a strand of DNA.',
    'The LitLife™-AlphaThal box, printed with the Lightening Lives logo, red blood cells and a strand of DNA.',
    'The LitLife™-SiBThal217 box, printed with the Lightening Lives logo, sickled red blood cells and a strand of DNA.']);
  assert.match($('#the-test .boxes img').first().attr('src'), /^\/assets\/img\/box-bthal-/);
  assert.equal($('.boxes .open').length, 0, 'no open place on a test page');
});

test('where they have been used: Maharashtra, Gujarat and Telangana, no town and no map (R2, ruling 6)', () => {
  const where = text('#where-used');
  assert.equal(text('#where-used .story > p:first-child'), 'Population screening for sickle-beta thalassaemia in Maharashtra, Gujarat and Telangana, and newborn screening in Maharashtra. Population screening for beta thalassaemia in Maharashtra and Telangana.');
  for (const state of ['Maharashtra', 'Gujarat', 'Telangana']) assert.ok(where.includes(state), state);
  for (const town of TOWNS) assert.ok(!where.includes(town), `names no town: ${town}`);
  assert.equal($('[data-map]').length, 0);
  assert.deepEqual(links('#where-used a.link'), [['See all our work', '/our-work/']]);
});

test('who they are for, and the family: Sickle cell anaemia, then Develop a test (ruling 7)', () => {
  assert.deepEqual(texts('#who-it-is-for li'), [
    'Hospitals and laboratories that diagnose thalassaemia',
    'Programmes screening couples, families and newborns for carrier status',
    'Sickle cell programmes in districts where beta thalassaemia also runs',
    'Patient organisations working with affected families']);
  assert.deepEqual(links('#also-in-this-family a'), [
    ['Sickle cell anaemia', '/solutions/sickle-cell-anaemia/'],
    ['Develop a test with us', '/solutions/develop-a-test/']]);
  assert.deepEqual(texts('#also-in-this-family li p'), ['LitLife™-SCA.']);
});

test('the closing band: its ask, the email naming the condition, Partner with us, and the notice (ruling 3)', () => {
  const band = $('main > section').last();
  assert.ok(band.hasClass('closing'));
  assert.equal(text(band.find('h2')), 'Planning thalassaemia screening?');
  assert.equal(text(band.find('.lead')), 'Tell us who you plan to screen and where the samples will be tested.');
  assert.deepEqual([text(band.find('.btn-solid')), band.find('.btn-solid').attr('href')],
    ['Ask about thalassaemia testing', 'mailto:admin@lighteninglives.in?subject=Request%20tests&body=Condition%3A%20Thalassaemia%2C%20HbD%20or%20HbE']);
  assert.deepEqual([text(band.find('.btn-line')), band.find('.btn-line').attr('href')], ['Partner with us', '/partnerships/']);
  assert.equal($('.notice').length, 1);
});
