// Technology (content file 5.2; seven sections since 25 October 2026, the reviewer's site map, 3.1;
// rewritten to the client review of 27 October 2026, plan 2026-11-05 Task 3): for clinicians and
// laboratory heads. The opening, the six-step method with the read-out as a clear gel, the
// comparison, what a laboratory needs, the evidence, the technical dossier, and the close asking for
// a lab demo.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/technology/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();

test('the page: title, kicker, the client\'s heading and lead, four credentials, two asks', () => {
  assert.equal($('title').text(), 'Dried blood spot PCR, no DNA extraction | Lightening Lives');
  // The client review's opening label (U2, 5 November 2026).
  assert.deepEqual($('.page-open .label').map((i, e) => $(e).text().trim()).get(), ['Indigenous molecular diagnosis platform']);
  assert.equal(text('h1'), "Without the molecular laboratory's burden.");
  assert.equal(text('h1 .h-mark'), "laboratory's burden.");
  assert.equal(text('.page-open .lead'), 'LitLife™ reads disease-causing mutations directly from a dried blood spot. No DNA extraction. No cold chain. No second confirmatory test. Built for hospitals, diagnostic lab networks and public health programmes.');
  assert.deepEqual(texts('.page-open .page-proof .cred-text'), ['ICMR approved', 'Patents granted in India and Japan', 'Built on CSIR-CCMB know-how', '100% sensitivity and specificity']);
  assert.equal($('.page-open .page-proof .cred').last().find('a').attr('href'), '#approvals', 'the 100% says where it comes from');
  const acts = $('.page-open .page-actions a').map((i, a) => [[text(a), $(a).attr('data-topic'), $(a).is('.btn-solid')]]).get();
  assert.deepEqual(acts, [['Request the technical dossier', 'dossier', true], ['Book a lab demo', 'demo', false]]);
});

test('the sections, in the reviewer\'s order', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['method', 'compared', 'laboratory', 'approvals', 'documents']);
  assert.equal($('main > section.closing').length, 1);
  assert.deepEqual(texts('main > section[id] h2'), [
    'The six-step method. Nothing hidden.',
    'Compared. One test where there were two.',
    'If you run PCR today, you can run LitLife™.',
    'Approved. Patented. Published.',
    'The technical dossier. On request.',
  ]);
});

test('the method: five pictures, then step 6, "Read and report", as the clear labelled gel', () => {
  assert.equal(text('#method .lead'), 'Textbook PCR and agarose gel electrophoresis. Our patented innovation lets them work directly on a raw dried blood spot, with no DNA extraction.');
  assert.deepEqual(texts('#method .method-steps h3').map((t) => t.replace(/^Step \d+: /, '')), ['Spot', 'Punch', 'Mix', 'Amplify', 'Separate']);
  assert.equal($('#method img').length, 5, 'the poster\'s sixth picture made way for the drawn gel');
  assert.equal(text('#method .method-read h3').replace(/^Step 6: /, ''), 'Read and report');
  assert.equal(text('#method .method-read figcaption > p'), 'Bands read as patient, carrier or unaffected, and the result is reported the same day.');
  // The home page's gel, one component (src/site/_includes/gel.njk): five named lanes.
  assert.deepEqual(texts('#method [data-gel] .lane-name'), ['Marker', 'Patient', 'Unaffected', 'Carrier', 'Control']);
  assert.equal($('#method [data-gel] .gel-key-btn').length, 3);
  assert.ok(!$('#method details.method-controls').is('[open]'));
  assert.equal($('#method .method-controls li').length, 3);
});

test('compared: a real table, ten rows, ours pointed out in the client\'s words', () => {
  assert.equal(text('#compared .lead'), 'Stop choosing between cheap, inaccurate screening and costly, complex confirmation. LitLife™ replaces both in a single step.');
  assert.equal(text('#compared caption'), 'Data: our presentation to the haematology community, October 2026.');
  assert.equal($('#compared tbody tr').length, 10);
  const ours = Object.fromEntries($('#compared tbody tr').map((i, tr) => [[text($(tr).find('th')), text($(tr).find('td.is-ours'))]]).get());
  assert.equal(ours.Collection, 'Finger or heel prick');
  assert.equal(ours['Storage and transport'], 'Room temperature, no cold chain');
  assert.equal(ours['Pre-processing'], 'None: direct to PCR');
  assert.equal(ours.Throughput, 'High: scalable for mass screening');
  assert.equal(ours['A second test to confirm'], 'No: screens and confirms in one go');
  assert.equal(ours.Newborns, 'Yes, at birth');
});

test('the laboratory: eight rows in the client\'s names; the dossier answers two; no app is claimed', () => {
  assert.equal(text('#laboratory .lead'), 'Built for everyday diagnostic labs and hospitals, not only genetics institutes. Use the equipment you already own.');
  assert.deepEqual(texts('#laboratory .lab-needs dt'), ['Equipment needed', 'DNA extraction', 'Sample logistics', 'Throughput', 'Time to result', 'Storage and shelf life', 'Staff and training', 'Monitoring']);
  assert.match(text('#laboratory .lab-needs > div:first-child dd'), /No proprietary system\.$/);
  assert.deepEqual($('#laboratory .is-dossier dd a').map((i, a) => $(a).attr('href')).get(), ['#documents', '#documents']);
  assert.doesNotMatch(text('main'), /mobile app/i, 'P2: "We do not have it now"');
});

test('the evidence and the dossier: one ask for the dossier; the close asks for a lab demo', () => {
  assert.equal(text('#approvals .lead'), 'The clinical and regulatory evidence that hospital purchase committees, NABL-accredited labs and government technical bodies ask for.');
  assert.deepEqual(texts('#approvals h3'), ['ICMR approved', 'Patents granted in India and Japan', 'A globally published patent', 'Built on CSIR-CCMB know-how']);
  assert.equal(text('#approvals li:first-child p'), 'LitLife™-SCA, validated by ICMR with 100% sensitivity and specificity for sickle cell anaemia.');
  assert.equal($('#patents').length, 1, 'the old anchor stays');
  assert.equal($('#documents .doc-list li').length, 3);
  assert.deepEqual($('#documents .btn').map((i, a) => [[text(a), $(a).attr('data-topic')]]).get(), [['Request the technical dossier', 'dossier']]);
  assert.equal($('.closing .btn-solid').attr('data-topic'), 'demo');
  assert.equal(text('.closing .btn-solid'), 'Book a lab demo');
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|CONFIRM|TBC/);
});

test('the enquiry form knows the lab demo as a topic', () => {
  const enquire = JSON.parse(readFileSync('src/site/_data/enquire.json', 'utf8'));
  assert.equal(enquire.topics.demo, 'A laboratory demonstration');
});
