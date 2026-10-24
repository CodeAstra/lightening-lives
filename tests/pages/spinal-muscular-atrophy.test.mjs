// Phase 5, Task 5.3: Spinal muscular atrophy (content/website-content.md 5.6, with 4.3 to 4.5), on the
// test-page layout (Task 5.0). The copy is 5.6's as written, brackets stripped with the sentence before
// them kept, and a row or source that is only a bracket left out. The controller's Phase 5 rulings: the
// solid closing button is the email (3), and the page links to its family, DMD and LGMD by Develop a
// test while their pages are drafts, and to Develop a test (7).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exists, load } from '../helpers.mjs';

const URL = '/solutions/spinal-muscular-atrophy/';
const ASK = '/solutions/develop-a-test/#musculopathies';
let cached;
const $ = (...args) => (cached ??= load(URL))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

test('the route is built', () => {
  assert.ok(exists(URL), `${URL} has no page in dist/`);
});

test('title, description, label, h1, lead, the line under it and chips (5.6, 4.3, 4.6)', () => {
  assert.equal($('title').text(), 'Spinal muscular atrophy: LitLife™-SMA | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'LitLife™-SMA screens for and confirms spinal muscular atrophy from a dried blood spot, with no DNA extraction. Designed for newborn screening, where early detection changes what treatment can do.');
  assert.equal(text('.page-open .label'), 'Musculopathy');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Spinal muscular atrophy');
  assert.equal(text('.page-open .lead'), 'LitLife™-SMA screens for and confirms spinal muscular atrophy from a dried blood spot. It is built for newborn screening, where finding SMA before symptoms changes what treatment can do.');
  assert.equal(text('.page-open .lead-line'), 'Early detection. Timely care. Better outcomes.');
  assert.deepEqual($('.page-open .tag').map((i, t) => [[text(t), $(t).hasClass('tag-proof')]]).get(), [
    ['Dried blood spot', false], ['No DNA extraction', false], ['Room temperature transport', false]]);
});

test('the sections, in ruling 1\'s order, under 5.6\'s headings', () => {
  const bands = $('main > section').map((i, s) => $(s).attr('id') ?? ($(s).hasClass('page-open') ? 'opening' : 'closing')).get();
  assert.deepEqual(bands, ['opening', 'the-condition', 'why', 'the-test', 'in-the-box', 'who-and-family', 'closing']);
  assert.deepEqual(texts('main h2'), [
    'The condition', 'Why newborn screening matters', 'LitLife™-SMA', 'In the box', 'Who it is for', 'Also in this family',
    'Planning newborn screening for SMA?']);
});

test('the condition, with no source line while its source is only a bracket', () => {
  assert.deepEqual(texts('#the-condition .story p'), [
    'SMA is an inherited neuromuscular condition. A missing or faulty SMN1 gene leaves the nerve cells that control muscles without a protein they need, and they die. Muscles weaken progressively, and in the severe forms breathing and swallowing are affected within the first months of life.',
    'Most people with SMA have lost both copies of the gene; about 1 in 40 adults carries one faulty copy without knowing, and a study in north India found closer to 1 in 30.']);
  assert.equal($('#the-condition .source').length, 0);
});

test('why newborn screening matters: the words, the bracket stripped, beside the newborn photograph', () => {
  assert.deepEqual(texts('#why .story p'), [
    'Treatments for SMA now exist, and they work best when started early, ideally before symptoms appear. By the time weakness is noticed, nerve cells have already been lost.',
    'That makes the first weeks of life the time to look, and it means a test that can be run for every newborn, from a heel-prick spot on a card, at a cost a programme can bear. India\'s National Policy for Rare Diseases lists SMA among the conditions for which treatment is supported at designated Centres of Excellence.']);
});

test('the care-newborn photograph: through picture(), an alt that names no person, credited as representative', () => {
  const img = $('#why img[src*="care-newborn"]');
  assert.equal(img.length, 1);
  assert.match(img.attr('src'), /^\/assets\/img\/care-newborn-\d+\.webp$/);
  assert.ok(img.attr('srcset'), 'a srcset, as picture() writes it');
  const alt = img.attr('alt');
  assert.ok(alt && alt.length > 10, 'the photograph is described');
  assert.doesNotMatch(alt, /\b[A-Z][a-z]+ [A-Z][a-z]+\b|Bonnie|Kittle|mother|father/, 'no person is named or presumed');
  assert.equal($('footer [data-credit="care-newborn"]').length, 1, 'the footer credits it');
  assert.match(text('footer .credits'), /These photographs are representative images, not pictures of our own work\./);
});

test('the test: four rows, the two bracket-only rows left out and the trailing brackets stripped', () => {
  assert.deepEqual($('#the-test .rows > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['What it is', 'A dried blood spot molecular test for screening and confirmation of spinal muscular atrophy, designed for newborn screening.'],
    ['The sample', 'A spot of blood, dried on a card. Minimally invasive.'],
    ['The chemistry', 'Direct PCR, optimised for dried blood spots. No DNA extraction is required.'],
    ['In the laboratory', 'Rapid turnaround, high-throughput performance and an easy workflow.']]);
});

test('in the box: the words, two lists of four and two under their names, and the SMA box', () => {
  assert.equal(text('#in-the-box .story > p'), 'LitLife™-SMA is packed in two parts.');
  assert.deepEqual(texts('#in-the-box .kit .label'), ['Sample collection kit', 'Reagent kit']);
  assert.deepEqual($('#in-the-box .kit ul').map((i, ul) => $(ul).children('li').length).get(), [4, 2]);
  assert.deepEqual(texts('#in-the-box .kit li'), ['A dried blood spot card', 'A single-use lancet', 'An alcohol swab', 'A cotton ball', 'Reagent A', 'Reagent B']);
  assert.deepEqual($('#in-the-box .boxes img').map((i, img) => $(img).attr('alt')).get(),
    ['The front of the LitLife™-SMA box: the Lightening Lives logo above the test\'s name, among drawings of DNA, muscle and nerve cells.']);
  assert.deepEqual(texts('#in-the-box .boxes figcaption'), ['LitLife™-SMA']);
});

test('who it is for, and the family: DMD and LGMD by Develop a test while they are drafts, then Develop a test (ruling 7)', () => {
  assert.deepEqual(texts('#who-it-is-for li'), [
    'Newborn screening programmes',
    'Maternity hospitals and paediatric units',
    'Paediatric neurologists and the laboratories that serve them',
    'Patient organisations working with affected families']);
  assert.deepEqual(links('#also-in-this-family a'), [
    ['Duchenne muscular dystrophy', ASK],
    ['Limb-girdle muscular dystrophy', ASK],
    ['Develop a test with us', '/solutions/develop-a-test/']]);
});

test('the closing band: its ask, the email naming the condition, Partner with us, and the notice (ruling 3)', () => {
  const band = $('main > section').last();
  assert.ok(band.hasClass('closing'));
  assert.equal(text(band.find('h2')), 'Planning newborn screening for SMA?');
  assert.equal(text(band.find('.lead')), 'Tell us how many births you expect to screen and which laboratory will run the tests.');
  assert.deepEqual([text(band.find('.btn-solid')), band.find('.btn-solid').attr('href')],
    ['Ask about LitLife™-SMA', 'mailto:admin@lighteninglives.in?subject=Request%20tests&body=Condition%3A%20Spinal%20muscular%20atrophy']);
  assert.deepEqual([text(band.find('.btn-line')), band.find('.btn-line').attr('href')], ['Partner with us', '/partnerships/']);
  assert.equal($('.notice').length, 1);
});
