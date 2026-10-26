// Technology (content file 5.2; seven sections since 25 October 2026, the reviewer's site map, 3.1):
// for clinicians and laboratory heads. The opening, the method in the poster's six pictures with the
// read-out large, the comparison, what a laboratory needs, approvals and patents, documents on
// request, and the close asking for the dossier.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load } from '../helpers.mjs';

const $ = load('/technology/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();

test('the page: title, description, a two-tone heading, no label, the proof and the dossier', () => {
  assert.equal($('title').text(), 'Dried blood spot PCR, no DNA extraction | Lightening Lives');
  assert.equal(text('h1'), "Molecular diagnosis, without the molecular laboratory's burden.");
  assert.equal(text('h1 .h-mark'), "without the molecular laboratory's burden.");
  assert.equal($('.page-open .label').length, 0);
  assert.deepEqual(texts('.page-open .page-proof .cred-text'), ['ICMR approved', 'Patents granted in India and Japan', 'No DNA extraction']);
  assert.deepEqual($('.page-open .page-actions a').map((i, a) => $(a).attr('href')).get(), ['#documents']);
});

test('the seven sections, in the reviewer\'s order', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['method', 'compared', 'laboratory', 'approvals', 'documents']);
  assert.equal($('main > section.closing').length, 1);
  assert.equal($('#reassured, #limits, #card').length, 0, 'cut: REASSURED (home only), where testing stops, the card');
});

test('the method: the poster\'s six pictures, the read-out large with its controls in a disclosure', () => {
  assert.deepEqual(texts('#method .method-steps h3').map((t) => t.replace(/^Step \d+: /, '')), ['Spot', 'Punch', 'Mix', 'Amplify', 'Separate']);
  $('#method img').each((i, img) => assert.match(img.attribs.src, /^\/assets\/img\/work-method-\d-/));
  assert.equal($('#method img').length, 6);
  assert.equal(text('#method .method-read h3').replace(/^Step 6: /, ''), 'Read');
  assert.ok(!$('#method details.method-controls').is('[open]'));
  assert.equal($('#method .method-controls li').length, 3);
});

test('compared: a real table, ten rows, ours pointed out', () => {
  assert.equal($('#compared table.compare-table caption').length, 1);
  assert.equal($('#compared tbody tr').length, 10);
  assert.equal($('#compared tbody td.is-ours').length, 10);
  assert.deepEqual(texts('#compared tbody th').slice(-2), ['Specificity', 'Sensitivity']);
});

test('the laboratory: eight terms; what the dossier answers says so and leads to it', () => {
  assert.equal($('#laboratory .lab-needs > div').length, 8);
  assert.deepEqual($('#laboratory .is-dossier dd a').map((i, a) => $(a).attr('href')).get(), ['#documents', '#documents']);
});

test('approvals and documents; nothing unconfirmed renders', () => {
  assert.deepEqual(texts('#approvals h3'), ['ICMR approved', 'Patents granted in India and Japan', 'A globally published patent', 'Built on CSIR-CCMB know-how']);
  assert.equal($('#patents').length, 1, 'the old anchor stays');
  assert.equal($('#documents .doc-list li').length, 3);
  // The dossier is asked for through the enquiry form, its topic named (26 October 2026).
  assert.equal($('.closing .btn-solid').attr('href'), '/contact/?topic=dossier');
  assert.equal($('.closing .btn-solid').attr('data-topic'), 'dossier');
  assert.equal($('#documents .btn').attr('data-topic'), 'dossier');
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|CONFIRM|TBC/);
});
