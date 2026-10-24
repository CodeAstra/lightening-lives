// Phase 5, Task 5.1: Sickle cell anaemia (content/website-content.md 5.4, with 4.3 to 4.5), on the
// test-page layout (Task 5.0). The copy is 5.4's as written, brackets stripped with the sentence before
// them kept. The controller's Phase 5 rulings: the solid closing button is the email (3), the SCA box
// is withheld (4), the map is drawn under "Where it has been used" (6), and the page links to its
// family and to Develop a test (7).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { TOWNS, exists, load } from '../helpers.mjs';

const URL = '/solutions/sickle-cell-anaemia/';
let cached;
const $ = (...args) => (cached ??= load(URL))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

// The towns of the 15 sites (content 6.1, R2): places are named by state, not town.

test('the route is built', () => {
  assert.ok(exists(URL), `${URL} has no page in dist/`);
});

test('title, description, label, h1, lead and chips (5.4, 4.3, 4.6)', () => {
  assert.equal($('title').text(), 'Sickle cell anaemia: LitLife™-SCA | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'LitLife™-SCA screens for and confirms sickle cell anaemia in one test from a dried blood spot. Approved by ICMR, patented in India and Japan, used at 15 sites across India.');
  assert.equal(text('.page-open .label'), 'Haemoglobinopathy');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Sickle cell anaemia');
  assert.equal(text('.page-open .lead'), 'LitLife™-SCA screens for and confirms sickle cell anaemia in one test, from a dried blood spot. Approved by ICMR, and used at 15 sites in nine states and Delhi.');
  assert.equal($('.lead-line').length, 0);
  assert.deepEqual($('.page-open .tag').map((i, t) => [[text(t), $(t).hasClass('tag-proof')]]).get(), [
    ['Approved by ICMR', true], ['Patented in India and Japan', true], ['Dried blood spot', false],
    ['Room temperature transport', false], ['From birth', false]]);
});

test('the sections, in ruling 1\'s order, under 5.4\'s headings', () => {
  const bands = $('main > section').map((i, s) => $(s).attr('id') ?? ($(s).hasClass('page-open') ? 'opening' : 'closing')).get();
  assert.deepEqual(bands, ['opening', 'the-condition', 'why', 'the-test', 'where-used', 'in-the-box', 'who-and-family', 'closing']);
  assert.deepEqual(texts('main h2'), [
    'The condition', 'Why it needs testing at scale', 'LitLife™-SCA', 'Where it has been used', 'In the box',
    'Who it is for', 'Also in this family', 'Planning sickle cell screening?']);
});

test('the condition and why it needs testing at scale, as 5.4 writes them', () => {
  assert.deepEqual(texts('#the-condition .story p'), [
    'Sickle cell disease is an inherited blood disorder in which red blood cells become rigid and sickle-shaped. They slow or block blood flow, causing pain, anaemia, infections and organ damage.',
    'A person with one copy of the sickle gene is a carrier, usually healthy and often unaware; when both parents are carriers, each pregnancy has a 1 in 4 chance of the disease. In India it is most common among tribal communities, in a belt across the centre of the country from Gujarat to Odisha.']);
  assert.deepEqual(texts('#why .story p'), [
    'The Government of India launched the National Sickle Cell Anaemia Elimination Mission in July 2023, with the aim of eliminating sickle cell disease as a public health problem by 2047. The mission has 17 focus states.',
    'Reaching that aim means testing very large numbers of people, many of them in districts a long way from a genetics laboratory, and knowing, for each one, whether they are affected, a carrier or neither. A screening test that needs a second test to confirm leaves that last question open.']);
});

test('the test: eight rows, every one keeping its sentence and losing its bracket', () => {
  assert.deepEqual($('#the-test .rows > li').map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['What it is', 'A dried blood spot molecular test for screening and confirmation of sickle cell anaemia. One test does both, so a positive result needs no second test.'],
    ['What it tells you', 'Whether a person has sickle cell disease, carries the sickle gene, or neither.'],
    ['Approval', 'Approved by the Indian Council of Medical Research, Department of Health Research, Government of India.'],
    ['Patents', 'Granted in India and Japan, with a patent published internationally.'],
    ['The science', 'Built on CSIR-CCMB know-how. An MOU with the CSIR-Centre for Cellular and Molecular Biology, Hyderabad, covers developing and commercialising the assay.'],
    ['The sample', 'A spot of blood, dried on a card. Collection is simple and minimally invasive. Cards keep and travel at room temperature.'],
    ['Newborns', 'Can be tested at birth.'],
    ['Where it is made', 'In India, by a third-party manufacturer that holds a quality certification.']]);
  assert.doesNotMatch(text('#the-test'), /India's first|\[|\]/);
});

test('where it has been used: the map opened on Our work, the nine states and Delhi, and no town (R2, ruling 6)', () => {
  const where = $('#where-used');
  assert.equal(where.find('[data-map]').length, 1);
  assert.equal($('[data-map]').length, 1, 'one map on the page');
  assert.equal(where.find('input[name=map-layer]:checked').val(), 'work');
  const body = text(where.find('.map-body'));
  assert.equal(body, 'Population screening for sickle cell anaemia in nine states and Delhi: Rajasthan, Madhya Pradesh, Jharkhand, Chhattisgarh, Maharashtra, Gujarat, Telangana, Karnataka and Tamil Nadu. Newborn screening in Rajasthan and Maharashtra.');
  const [population, newborn] = body.split('. Newborn');
  for (const state of ['Delhi', 'Rajasthan', 'Madhya Pradesh', 'Jharkhand', 'Chhattisgarh', 'Maharashtra', 'Gujarat', 'Telangana', 'Karnataka', 'Tamil Nadu']) {
    assert.ok(population.includes(state), `population screening names ${state}`);
  }
  assert.match(newborn, /Rajasthan and Maharashtra\.$/);
  for (const town of TOWNS) assert.ok(!body.includes(town), `the words name no town: ${town}`);
  // The map's own sentence names the laboratory's city (an address, kept by R2); no site's town appears.
  for (const town of TOWNS.filter((t) => t !== 'Hyderabad')) assert.ok(!text(where).includes(town), `the section names no town: ${town}`);
  assert.deepEqual(links('#where-used a.link'), [['See all our work', '/our-work/']]);
});

test('in the box: the words and four things, and no picture of the withheld SCA box (ruling 4)', () => {
  assert.equal(text('#in-the-box .story > p'), 'The sample collection kit holds what a health worker needs to take one sample.');
  assert.deepEqual(texts('#in-the-box li'), ['A dried blood spot card', 'A single-use lancet', 'An alcohol swab', 'A cotton ball']);
  assert.equal($('#in-the-box li').length, 4);
  assert.equal($('.boxes').length, 0, 'no row of boxes on the SCA page');
  assert.equal(readdirSync('dist', { recursive: true }).filter((f) => /box-sca/i.test(f)).length, 0, 'no box-sca file in dist/');
});

test('who it is for, and the family: Thalassaemia, then Develop a test (ruling 7)', () => {
  assert.deepEqual(texts('#who-it-is-for li'), [
    'State and district health programmes screening for sickle cell disease',
    'Hospitals and laboratories that confirm a diagnosis',
    'Newborn screening programmes in the sickle cell belt',
    'NGOs and CSR funders running screening in tribal districts']);
  assert.deepEqual(links('#also-in-this-family a'), [
    ['Thalassaemia and other haemoglobinopathies', '/solutions/thalassaemia/'],
    ['Develop a test with us', '/solutions/develop-a-test/']]);
  assert.deepEqual(texts('#also-in-this-family li p'), ['including LitLife™-SiBThal217, which tests for sickle cell anaemia and beta thalassaemia together.']);
});

test('the closing band: its ask, the email naming the condition, Partner with us, and the notice (ruling 3)', () => {
  const band = $('main > section').last();
  assert.ok(band.hasClass('closing'));
  assert.equal(text(band.find('h2')), 'Planning sickle cell screening?');
  assert.equal(text(band.find('.lead')), 'Tell us the district, the numbers and the laboratory you have in mind.');
  assert.deepEqual([text(band.find('.btn-solid')), band.find('.btn-solid').attr('href')],
    ['Ask about LitLife™-SCA', 'mailto:admin@lighteninglives.in?subject=Request%20tests&body=Condition%3A%20Sickle%20cell%20anaemia']);
  assert.deepEqual([text(band.find('.btn-line')), band.find('.btn-line').attr('href')], ['Partner with us', '/partnerships/']);
  assert.equal($('.notice').length, 1);
});
