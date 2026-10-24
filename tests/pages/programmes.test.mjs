// Phase 4, Task 4.3: the Programmes page (content/website-content.md 5.10, with 4.4, 4.5 and 4.6).
// The copy is 5.10's as written: [TBC] brackets stripped with the sentence before them kept, the
// [PLACEHOLDER] lines under Awareness and Counselling left out, and the prenatal row of "Where
// screening fits" omitted whole until Part 8 item 29 closes (the PC-PNDT Act). The three accounts
// from the field are each split into two paragraphs at a sentence (R1), words unchanged.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load } from '../helpers.mjs';

let cached;
const $ = (...args) => (cached ??= load('/programmes/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();
const sectionOf = (h2) => $('main h2').filter((i, h) => text(h) === h2).closest('section');

test('title, description, label, h1 and lead (5.10, 4.6)', () => {
  assert.equal($('title').text(), 'Screening, counselling and follow-up programmes | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'Lightening Lives runs its tests inside a six-step model: sample collection, transport, testing, reporting, treatment with counselling, and follow-up. Awareness programmes, genetic counselling, support groups and training.');
  assert.equal(text('.page-open .label'), 'Transform lives');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'A test is the middle of the story');
  assert.equal(text('.page-open .lead'), 'A result only transforms a life if something happens next. Our testing model goes from finger prick to follow-up, and we run awareness and counselling programmes, mostly for the government.');
});

test('the h2s are 5.10\'s, in its order', () => {
  assert.deepEqual(texts('main h2'), [
    'Six steps, from the sample to the follow-up', 'Before the test: awareness', 'After the result: counselling',
    'Patient support groups', 'Where screening fits in a life', 'Training the people who run the tests',
    'Help with setting up a programme', 'Where we have worked', 'From the field', 'Planning a screening programme?']);
});

test('the anchors 3.2 names exist', () => {
  for (const id of ['testing-model', 'counselling', 'training', 'from-the-field']) assert.equal($(`#${id}`).length, 1, id);
});

test('the testing model: six numbered steps, the poster\'s, in its order', () => {
  const steps = $('#testing-model ol > li');
  assert.equal(steps.length, 6);
  assert.ok($('#testing-model ol').is('.steps-numbered'));
  assert.equal($('#testing-model ol').attr('role'), 'list');
  const first = ['Sample collection.', 'Transport to a nearby testing centre.', 'Molecular testing.', 'Test reporting.',
    'Patient management through proper treatment.', 'Follow-up of patients.'];
  steps.each((i, li) => assert.ok(text(li).startsWith(first[i]), `${i + 1}: ${text(li).slice(0, 50)}`));
  assert.match(text(steps.eq(0)), /and the details captured on the app\.$/);
  assert.match(text(steps.eq(1)), /No cold chain, no ice box\.$/);
  assert.match(text(steps.eq(5)), /so that families are not alone with a diagnosis\.$/);
  // Any picture a step has names its subject.
  $('#testing-model img').each((i, img) => assert.ok(($(img).attr('alt') ?? '').length > 20, $(img).attr('src')));
});

test('awareness, counselling and support groups keep their bodies, without the placeholders', () => {
  assert.match(text(sectionOf('Before the test: awareness').find('#awareness')), /Community screening and awareness camps are run together, so that a camp both explains and tests\.$/);
  assert.match(text('#counselling'), /^After the result: counselling Counselling helps families understand a result .* it means knowing who else to test\.$/);
  assert.match(text(sectionOf('Patient support groups')), /work with patient organisations for the conditions we test for\.$/);
  assert.doesNotMatch(text('main'), /how the sessions are run|who counsels/);
});

test('where screening fits: four rows, the prenatal row omitted until Part 8 item 29', () => {
  const rows = sectionOf('Where screening fits in a life').find('.rows > li');
  assert.equal(rows.length, 4);
  assert.deepEqual(rows.find('h3').map((i, h) => text(h)).get(),
    ['At birth', 'In the community', 'After a diagnosis in the family', 'Before marriage or conception']);
  assert.match(text(rows.eq(0)), /Our tests for sickle cell anaemia and SMA can be run from birth\.$/);
  assert.doesNotMatch(text('main'), /During pregnancy|Prenatal|prenatal|PC-PNDT/);
});

test('training and setting up keep their sentences', () => {
  assert.match(text('#training'), /advise on laboratory set-up and consultancy for hospitals and programmes\.$/);
  assert.match(text(sectionOf('Help with setting up a programme').find('h2').parent()), /the laboratory and reviews of progress\.$/);
});

test('where we have worked: the three place photographs, labelled by state, and the link', () => {
  const s = sectionOf('Where we have worked');
  assert.match(text(s), /Population and newborn screening at 15 sites across India, with government programmes, hospitals and NGOs\./);
  assert.deepEqual(s.find('.fieldwork figcaption').map((i, f) => text(f)).get(), ['Maharashtra', 'Telangana', 'Jharkhand']);
  assert.deepEqual(s.find('.fieldwork img').map((i, img) => $(img).attr('src').replace(/^\/assets\/img\/|-640\.webp$/g, '')).get(),
    ['place-nandurbar', 'place-kothagudem', 'place-jharkhand']);
  s.find('.fieldwork img').each((i, img) => assert.ok($(img).attr('alt').length > 20));
  assert.deepEqual(links(s.find('a.link')), [['See all our work', '/our-work/']]);
});

test('from the field: the lead and three accounts, each in two paragraphs', () => {
  const field = $('#from-the-field');
  assert.equal(text(field.find('.lead')), 'Three accounts from our work with institutions. Details that could identify a family have been left out.');
  const accounts = field.find('.accounts > li');
  assert.equal(accounts.length, 3);
  assert.deepEqual(accounts.find('h3').map((i, h) => text(h)).get(), ['A diagnosis at three', 'Two carriers, one plan', 'What had been called fate']);
  accounts.each((i, li) => assert.equal($(li).find('p').length, 2, `account ${i + 1}`));
  assert.match(text(accounts.eq(0)), /^A diagnosis at three A three-year-old boy in a village in Madhya Pradesh .* instead of spending years without an answer\.$/);
  assert.match(text(accounts.eq(1)), /^Two carriers, one plan A couple in Chhattisgarh .* They now have a healthy child\.$/);
  assert.match(text(accounts.eq(2)), /^What had been called fate In a village in Odisha, .* how it is passed on and what their choices are\.$/);
  // The fourth account, from Jharkhand, is held back (content 5.10's note).
  assert.doesNotMatch(text(field), /six-year-old girl/);
});

test('places by state (R2): no town in the visible copy', () => {
  const towns = /Nandurbar|Jamshedpur|Gudalur|Udaipur|Bhopal|Bilaspur|Nagpur|Dhule|Valsad|Chandrapur|Mumbai|Kothagudem|Mysore|Patratu|Toranmal|Kinnerasani|Masinagudi|Dhenkanal/;
  assert.doesNotMatch($('main').clone().find('img').remove().end().text(), towns);
});

test('no bracket renders; the notice is present; the closing band asks about programmes', () => {
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[TBC|PLACEHOLDER|\[|\]/);
  assert.equal($('.notice').length, 1);
  assert.match(text('.notice'), /^For individuals Looking for a test for yourself or your family\? We work with institutions and don't test individuals\./);
  assert.equal(text('.closing h2'), 'Planning a screening programme?');
  assert.equal(text('.closing .lead'), 'Tell us the community, the condition and who you are working with.');
  assert.deepEqual(links('.closing .btn-solid'), [['Ask about our programmes', '/contact/']]);
  assert.deepEqual(links('.closing .btn-line'), [['Partner with us', '/partnerships/']]);
});

test('the footer credits the photographs the page shows, and only those', () => {
  const shown = new Set($('main img').map((i, img) => $(img).attr('src').replace(/^\/assets\/img\/|-\d+\.webp$/g, '')).get()
    .filter((n) => !n.startsWith('site-')));
  assert.deepEqual($('footer [data-credit]').map((i, li) => $(li).attr('data-credit')).get().sort(), [...shown].sort());
  for (const name of ['place-nandurbar', 'place-kothagudem', 'place-jharkhand']) assert.ok(shown.has(name), name);
  // care-phc names a real centre: never a partner or our work, so not placed as one here.
  assert.doesNotMatch($('main').html(), /method-paper/);
});
