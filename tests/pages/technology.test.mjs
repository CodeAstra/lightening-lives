// Phase 4, Task 4.1: the Technology page (content/website-content.md 5.2, with 4.3, 4.5 and 4.6).
// The copy is 5.2's as written: [TBC] brackets stripped with the sentence before them kept, an entry
// whose body is only a bracket omitted (the Time row, the publications), and a heading kept alone
// where only its body was a bracket (the globally published patent).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load } from '../helpers.mjs';

let cached;
const $ = (...args) => (cached ??= load('/technology/'))(...args);
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const links = (selector) => $(selector).map((i, a) => [[text(a), $(a).attr('href')]]).get();

test('title, description, label, h1, lead and the three chips (4.3, 4.6)', () => {
  assert.equal($('title').text(), 'Technology | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'How Lightening Lives runs a genetic test from a dried blood spot: no DNA extraction, room temperature transport, screening and confirmation in one, on standard PCR equipment. Patented in India and Japan.');
  assert.equal($('.page-open .label').length, 0); // no label over the heading (25 October 2026)
  assert.equal(text('h1'), 'How a spot of blood on a card becomes a genetic diagnosis');
  assert.equal($('h1').length, 1);
  assert.equal(text('.page-open .lead'), 'Conventional genetic testing was designed for the laboratory. We designed ours for where testing has to happen: a primary health centre, or a maternity ward far from any genetics laboratory.');
  assert.deepEqual(texts('.page-open .tag'), ['Approved by ICMR', 'Patented in India and Japan', 'Dried blood spot']);
  assert.equal($('.page-open .tag-proof').length, 2);
});

test('the h2s are 5.2\'s, in its order', () => {
  assert.deepEqual(texts('main h2'), [
    'Where conventional testing stops', 'The same question, three ways of answering it', 'From card to result in six steps',
    'What a laboratory needs', 'Patented, approved, published', 'A card made for the field',
    'The standard we design to, letter by letter', 'Have a condition in mind?']);
  // Every section is labelled by its own heading.
  $('main > section').each((i, s) => assert.equal($(`#${$(s).attr('aria-labelledby')}`).closest('section')[0], s));
});

test('the anchors 3.2 names exist', () => {
  for (const id of ['compared', 'method', 'laboratory', 'patents']) assert.equal($(`#${id}`).length, 1, id);
});

test('where conventional testing stops: three columns', () => {
  assert.deepEqual(texts('.audiences > li h3'), ['Screening tests', 'Confirmatory tests', 'What a programme needs']);
  assert.match(texts('.audiences > li p')[1], /^One to two millilitres of venous blood, .* For a newborn, a wait of 72 hours\.$/);
});

test('the compare table: a real table with a caption, scoped headers and 7 rows', () => {
  const table = $('#compared table.compare-table');
  assert.equal(table.length, 1);
  assert.equal(table.find('caption').length, 1);
  assert.deepEqual(table.find('thead th[scope=col]').map((i, th) => text(th)).get(), ['Conventional screening tests', 'Conventional confirmatory tests', 'LitLife™']);
  const rows = table.find('tbody tr');
  assert.equal(rows.length, 7);
  assert.deepEqual(rows.map((i, tr) => text($(tr).find('th[scope=row]'))).get(),
    ['Sample', 'Collection', 'Storage and transport', 'Pre-processing', 'Throughput', 'A second test to confirm', 'Newborns']);
  assert.deepEqual(rows.map((i, tr) => text($(tr).find('td').last())).get(),
    ['A spot of blood on a card', 'Finger prick', 'Room temperature', 'None', 'High', 'No', 'At birth']);
  // On a narrow screen each cell is labelled with its column's name (the stacked form, CSS only).
  rows.find('td').each((i, td) => assert.ok(['Conventional screening tests', 'Conventional confirmatory tests', 'LitLife™'].includes($(td).attr('data-label'))));
  assert.doesNotMatch(text('#compared'), /Sensitivity|Specificity/);
  assert.match(text('#compared'), /From our presentation to the haematology community, October 2026\./);
});

test('the method: six numbered steps, each with its picture', () => {
  assert.equal($('#method ol li').length, 6);
  assert.ok($('#method ol').is('.steps-numbered'));
  // Preflight's list-style: none drops the list role in Safari/VoiceOver; the role puts it back (M7).
  assert.equal($('#method ol').attr('role'), 'list');
  assert.deepEqual(texts('#method ol > li h3'), ['Collect', 'Punch', 'Prepare', 'Amplify', 'Separate', 'Read']);
  const srcs = $('#method ol > li img').map((i, img) => $(img).attr('src')).get();
  assert.equal(srcs.length, 6);
  assert.deepEqual(srcs.slice(0, 2), ['/assets/img/site-drop.webp', '/assets/img/site-batch.webp']);
  assert.deepEqual(srcs.slice(2).map((s) => s.replace(/^\/assets\/img\/|-640\.webp$/g, '')), ['lab-pipette', 'lab-thermal-cycler', 'lab-gel', 'lab-bench']);
  $('#method img').each((i, img) => assert.ok(($(img).attr('alt') ?? '').length > 20, $(img).attr('src')));
  assert.match(text('#method'), /There is no DNA extraction step\./);
  assert.match(text('#method'), /affected, carrier or unaffected\./);
  // method-paper is another maker's card: never on this page.
  assert.doesNotMatch($('main').html(), /method-paper/);
});

test('the method: the stand-ins are labelled representative where they are seen (5.2, Phase 4 review)', () => {
  const LINE = 'Photographs of steps 3 to 6 are representative images, not pictures of our own laboratory.';
  const note = $('#method .steps-note');
  assert.equal(note.length, 1);
  assert.equal(text(note), LINE);
  // Under the steps, not inside them, and not a lead.
  assert.ok(note.prev().is('ol.steps-numbered'));
  assert.ok(!note.is('.lead'));
  // Said once on the page, and in other words than the footer's credits line (R1).
  assert.equal($('body *').filter((i, el) => $(el).children().length === 0 && text(el) === LINE).length, 1);
  const footerLine = text($('footer .credits > p').first());
  assert.match(footerLine, /representative/);
  assert.notEqual(footerLine, LINE);
});

test('what a laboratory needs: four rows, monitoring folded in (25 October 2026), the Time row omitted', () => {
  assert.deepEqual(texts('#laboratory .rows > li h3'), ['Equipment', 'Space and storage', 'People', 'Monitoring']);
  assert.match(text('#monitoring'), /mobile app at the point of collection/);
  assert.match(text('#laboratory'), /not a genetics institute\./);
});

test('patents: four items, the published patent as its heading alone', () => {
  assert.equal($('#patents .proof > li').length, 4);
  assert.deepEqual(texts('#patents .hl'), ['India and Japan', 'globally published', 'ICMR', 'CSIR-CCMB']);
  const published = $('#patents .proof > li').eq(1);
  assert.equal(text(published.find('h3')), 'A globally published patent');
  assert.equal(published.find('p').length, 0);
});

test('the card is the drawn card, never another maker\'s', () => {
  const img = $('main img[src="/assets/img/site-blank.webp"]');
  assert.equal(img.length, 1);
  assert.ok(img.attr('alt').length > 20);
  assert.match(text('main'), /The card opens like a matchbook\./);
});

test('REASSURED from the shared partial, with the sentence under it', () => {
  assert.equal($('#reassured .criteria > li').length, 9);
  assert.equal($('#reassured [data-word] button').length, 9);
  assert.match(text('#reassured'), /The criteria were published in 2019 as an update to ASSURED, the list the World Health Organization's tropical disease research programme drew up for diagnostic tests in places with few resources\./);
});

test('no bracket renders; the notice is absent; the closing band asks its own question', () => {
  assert.doesNotMatch(text('main'), /\[TBC|PLACEHOLDER|\]/);
  assert.equal($('.notice').length, 0);
  assert.equal(text('.closing h2'), 'Have a condition in mind?');
  assert.equal(text('.closing .lead'), 'Tell us what you need to detect. We develop the test.');
  assert.deepEqual(links('.closing .btn-solid'), [['Develop a test with us', '/solutions/develop-a-test/']]);
  assert.deepEqual(links('.closing .btn-line'), [['Contact us', '/contact/']]);
});

test('the footer credits the four photographs the page shows', () => {
  assert.deepEqual($('footer [data-credit]').map((i, li) => $(li).attr('data-credit')).get().sort(),
    ['lab-bench', 'lab-gel', 'lab-pipette', 'lab-thermal-cycler']);
});
