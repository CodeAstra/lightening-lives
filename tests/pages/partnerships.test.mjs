// Phase 4, Task 4.4: the Partnerships page (content/website-content.md 5.14, with 4.4, 4.6 and 4.7).
// The copy is 5.14's as written: [TBC] brackets stripped with the sentence before them kept, the note
// under the steps not rendered. The collaborators are typeset from src/site/_data/collaborators.json
// (no logos without written permission); the closing band's four actions are the home page's, from
// one data source (src/site/_data/actions.json).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

let cached;
const $ = (...args) => (cached ??= load('/partnerships/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();
const COLLABORATORS = JSON.parse(readFileSync('src/site/_data/collaborators.json', 'utf8'));

test('title, description, label, h1 and lead (5.14, 4.6)', () => {
  assert.equal($('title').text(), 'Partner with us | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'How hospitals, laboratories, government programmes, NGOs and CSR funders work with Lightening Lives on genetic screening and diagnosis, and who it already works with.');
  assert.equal(text('.page-open .label'), 'Partner with us');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'Most of our work begins as a collaboration');
  assert.equal(text('.page-open .lead'), 'You bring the condition you need to screen for or diagnose. We bring the test, the method, the training and the counselling that follows a result.');
});

test('the h2s are 5.14\'s, in its order, each labelling its own section', () => {
  assert.deepEqual(texts('main h2'), [
    'How we partner with you', 'How a collaboration starts', 'Our collaborators', 'Questions we are asked', 'Tell us what your programme needs']);
  $('main > section').each((i, s) => assert.equal($(`#${$(s).attr('aria-labelledby')}`).closest('section')[0], s));
});

test('the anchors 3.2 names exist, and the home page\'s link lands on one', () => {
  for (const id of ['how-it-starts', 'collaborators']) assert.equal($(`#${id}`).length, 1, id);
  assert.equal(load('/')('#partners a[href="/partnerships/#how-it-starts"]').length, 1);
});

test('how we partner with you: four columns, the fourth keeping its sentence without the bracket', () => {
  const section = $('h2').filter((i, h) => text(h) === 'How we partner with you').closest('section');
  const columns = section.find('.audiences > li');
  assert.equal(columns.length, 4);
  assert.deepEqual(columns.map((i, li) => [[text($(li).find('h3')), text($(li).find('p'))]]).get(), [
    ['Community screening and awareness camps', 'For district programmes, NGOs and CSR funders: screening a community where a condition runs, and explaining the condition while we do.'],
    ['Patient, carrier and newborn testing', 'For hospitals, laboratories and clinicians: the test for the patient in front of you, the family around them, and the newborn in the ward.'],
    ['Genetic counselling for families', 'For every programme: counselling for patients and carriers, and support groups for the families a programme finds.'],
    ['Laboratory set-up, training and consultancy', 'For laboratories adopting the method: equipment advice, hands-on training, and help planning a programme or a grant.']]);
});

test('how a collaboration starts: four numbered steps, each opening with its bold title as written', () => {
  const steps = $('#how-it-starts ol li');
  assert.equal(steps.length, 4);
  assert.ok($('#how-it-starts ol').is('.steps-numbered.steps-text'));
  assert.equal($('#how-it-starts ol').attr('role'), 'list');
  assert.deepEqual(steps.map((i, li) => text($(li).find('b'))).get(), [
    'You tell us the condition and the setting.', 'We agree the scope.', 'We develop the test, or adapt one we have.', 'We train your team and stay with the programme,']);
  assert.deepEqual(steps.map((i, li) => text(li)).get(), [
    'You tell us the condition and the setting. Who will be tested, roughly how many, where samples will be collected and which laboratory will run them.',
    'We agree the scope. What the test must detect, how results will be reported and monitored, and what training and counselling the programme needs.',
    'We develop the test, or adapt one we have.',
    'We train your team and stay with the programme, through reporting, counselling and follow-up.']);
  // The draft's note under the steps is for the company, not the reader (Part 8 item 36).
  assert.doesNotMatch(text('#how-it-starts'), /draft|engagement|Correct it/);
});

test('our collaborators: the lead and the thirteen names, typeset in content order, no logos', () => {
  const section = $('#collaborators');
  assert.equal(text(section.find('.lead')), 'Organisations we work with.');
  assert.equal(COLLABORATORS.length, 13);
  assert.equal(section.find('li').length, 13);
  assert.deepEqual(texts('#collaborators .collaborators li'), COLLABORATORS);
  assert.equal(section.find('img, svg, picture').length, 0);
});

test('approved by ICMR: its heading and body follow the names, ICMR set as a proof name', () => {
  const section = $('#collaborators');
  const h3 = section.find('h3');
  assert.equal(h3.length, 1);
  assert.equal(text(h3), 'Approved by ICMR');
  assert.equal(text(h3.find('.hl')), 'ICMR');
  assert.equal(text(h3.next('p')), 'LitLife™-SCA, our sickle cell test, is approved by the Indian Council of Medical Research.');
  // Placed as the content file places it: after the names.
  const all = section.find('*').toArray();
  assert.ok(all.indexOf(h3[0]) > all.indexOf(section.find('.collaborators')[0]));
});

const QUESTIONS = [
  ['We are an NGO with no laboratory. Can we still run screening?', 'Yes. Cards travel at room temperature to a nearby testing centre, so the laboratory need not be yours. Tell us where you plan to screen and we will say how the samples would be tested.'],
  ['We are a hospital laboratory. What would it take to run the tests ourselves?', 'A thermal cycler, a gel tank and a punch, and staff who have run PCR or have been trained. We help set the method up.'],
  ['What happens to the families a programme identifies?', 'Counselling for patients and carriers, a path to treatment where it exists, and support groups. That is part of the programme, not an extra.'],
  ['Do you work with CSR funders?', 'Yes. Most population-level screening is funded that way or by government. Tell us the community and the condition, and we will propose a programme.'],
];

test('questions we are asked: four disclosures, closed, answers without their brackets', () => {
  const details = $('.faq details');
  assert.equal(details.length, 4);
  assert.deepEqual(details.map((i, d) => [[text($(d).find('summary')), text($(d).find('summary').nextAll())]]).get(), QUESTIONS);
  details.each((i, d) => assert.equal($(d).attr('open'), undefined));
});

test('the page\'s own questions are its one FAQPage in structured data, word for word', () => {
  const data = $('script[type="application/ld+json"]').map((i, s) => JSON.parse($(s).text())).get().filter((d) => d['@type'] === 'FAQPage');
  assert.equal(data.length, 1);
  assert.deepEqual(data[0].mainEntity.map((e) => [e.name, e.acceptedAnswer.text]), QUESTIONS);
});

test('the closing band: its heading and body, and the four actions in place of the two buttons', () => {
  assert.equal(text('.closing h2'), 'Tell us what your programme needs');
  assert.equal(text('.closing .lead'), 'Choose where you would like to begin.');
  assert.equal($('.closing .btn').length, 0);
  assert.deepEqual(links('.closing .actions a.action'), [
    ['Explore a partnership', 'mailto:admin@lighteninglives.in?subject=Partnership'],
    ['Request tests', 'mailto:admin@lighteninglives.in?subject=Request%20tests'],
    ['Ask about awareness and counselling', 'mailto:admin@lighteninglives.in?subject=Awareness%20and%20counselling'],
    ['Talk to sales', 'mailto:admin@lighteninglives.in?subject=Sales']]);
  // One source: the same list, word for word and link for link, as the home page's.
  const strip = (html) => html.replace(/\s+/g, ' ').trim();
  assert.equal(strip($('.closing .actions').html()), strip(load('/')('#contact .actions').html()));
});

test('no bracket renders; the notice is present', () => {
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[TBC|PLACEHOLDER|\[|\]/);
  assert.equal($('.notice').length, 1);
  assert.match(text('.notice'), /^For individuals Looking for a test for yourself or your family\? We work with institutions and don't test individuals\./);
});

test('no photographs: nothing could read as a partner, so no credits either', () => {
  assert.equal($('main img').length, 0);
  assert.doesNotMatch($('html').html(), /care-phc/);
  assert.equal($('footer .credits').length, 0);
});
