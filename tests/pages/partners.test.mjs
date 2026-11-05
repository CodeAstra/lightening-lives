// Partners (since the client review of 27 October 2026, plan 2026-11-05 Task 6): the partner network.
// Who we work with, in three groups, each logo with its name under it. The ways to partner moved to
// /partner-with-us/; an old link to one of them (/partners/#programmes) is handed on there.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/partners/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const PARTNERS = JSON.parse(readFileSync('src/site/_data/partners.json', 'utf8'));

test('the page: title, description, kicker, heading, lead; no proof row', () => {
  assert.equal($('title').text(), 'Our genetic screening partners in India | Lightening Lives');
  assert.equal($('meta[name=description]').attr('content'), 'CSIR-CCMB, Tata Trusts, Tata Steel Foundation and patient groups across India: the institutions, foundations and NGOs Lightening Lives works with.');
  assert.deepEqual($('.page-open .label').map((i, e) => $(e).text().trim()).get(), ['Our partner network']);
  assert.equal(text('h1'), 'Who we work with across science, philanthropy and community care.');
  assert.equal(text('h1 .h-mark'), 'across science, philanthropy and community care.');
  assert.equal(text('.page-open .lead'), 'Thirteen organisations so far: the scientific institutions behind our tests, the foundations that fund screening, and the patient groups that bring it to families.');
  assert.equal($('.page-open .page-proof').length, 0);
});

test('three groups, each a section with its logos, every logo named under it', () => {
  assert.deepEqual($('main section[id]').map((i, s) => $(s).attr('id')).get(), ['science', 'foundations', 'patients']);
  for (const [id, n] of [['science', 3], ['foundations', 2], ['patients', 8]]) {
    const logos = $(`#${id} .register li`);
    assert.equal(logos.length, n, id);
    const want = PARTNERS.logos.filter((p) => p.group === id && p.published).map((p) => p.name);
    assert.deepEqual(logos.map((i, li) => text($(li).find('.register-name'))).get(), want, id);
    logos.each((i, li) => assert.equal($(li).find('img').attr('alt'), '', 'the name is printed, so the picture is not read twice'));
  }
  assert.equal(text('#science h2'), 'Science, R&D and incubation. Where the tests come from.');
  assert.equal(text('#foundations h2'), 'Foundations and CSR. Who funds the screening.');
  assert.equal(text('#patients h2'), 'Patient and community organisations. Who brings it to families.');
});

test('old links to the ways to partner are handed on to Partner With Us', () => {
  const script = $('script:not([src]):not([type])').filter((i, s) => /partner-with-us/.test($(s).text())).text();
  assert.match(script, /laboratories\|programmes\|funders\|how-it-starts\|start/);
  assert.match(script, /location\.replace\('\/partner-with-us\/' \+ location\.hash\)/);
});

test('the close: join them', () => {
  assert.equal(text('.closing h2'), 'Join them. Partner with us.');
  assert.equal($('.closing .btn-solid').attr('href'), '/partner-with-us/');
  assert.equal($('.closing .btn-line').attr('href'), '/our-work/');
});

test('nothing unconfirmed renders', () => {
  assert.doesNotMatch($('main').clone().find('script').remove().end().text(), /\[|CONFIRM|TBC/);
});
