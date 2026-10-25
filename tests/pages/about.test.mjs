// About (content file 5.8; one page since 25 October 2026, the reviewer's site map, 3.1): the founder in
// full, everyone else by a tap. The opening with the mission, the company at a glance, the founders,
// and the people (#team) in one grid where a card with a bio opens. /about/team/ forwards here.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/about/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const TEAM = JSON.parse(readFileSync('src/site/_data/team.json', 'utf8'));

test('the page: title, a two-tone heading, the lead and the mission under it', () => {
  assert.equal($('title').text(), 'About us: healthcare technology from Hyderabad | Lightening Lives');
  assert.equal(text('h1'), 'We invent genetic tests that change what happens next.');
  assert.equal($('.page-open .label').length, 0);
  assert.match(text('.page-open .lead-line'), /^Our mission: /);
});

test('the sections, in order', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['facts', 'founder', 'team']);
  assert.equal($('main > section.closing').length, 1);
});

test('at a glance: eight facts, written for people and for AI systems alike', () => {
  assert.equal($('#facts .facts-grid > div').length, 8);
  assert.deepEqual($('#facts dt').map((i, d) => text(d)).get().slice(0, 3), ['Legal name', 'Headquarters', 'Founder and CEO']);
});

test('the founder in full: his portrait, credentials, record and bio; the co-founder beside him', () => {
  const ff = TEAM.founders[0];
  assert.equal($(`#${ff.slug} .founder-name`).length, 1);
  assert.match(text(`#${ff.slug} .founder-name`), /MD, PhD, DNB$/);
  assert.equal($('#founder .founder-record li').length, 4);
  assert.equal($('#founder img').attr('alt'), 'Dr. Giriraj Ratan Chandak and Mrs. Nidhi Chandak');
  assert.equal($(`#${TEAM.founders[1].slug} .founder-role`).text(), 'Co-Founder');
});

test('the people: patron, advisers and team in one grid, each by their slug; a bio opens only where there is one', () => {
  const everyone = [...TEAM.patron, ...TEAM.advisers, ...TEAM.team];
  assert.deepEqual($('#team .pcard').map((i, li) => $(li).attr('id')).get(), everyone.map((p) => p.slug));
  for (const p of everyone) {
    const card = $(`#${p.slug}`);
    assert.equal(card.find('img').attr('alt'), p.name, p.slug);
    assert.equal(card.find('details').length, p.bio ? 1 : 0, `${p.slug}: opens only with a bio`);
    if (p.bio) assert.ok(!card.find('details').is('[open]'), p.slug);
  }
});

test('the old team page forwards here, and nothing unconfirmed renders', () => {
  const to = Object.fromEntries(JSON.parse(readFileSync('src/site/_data/forwards.json', 'utf8')).map((f) => [f.from, f.to]));
  assert.equal(to['/about/team/'], '/about/#team');
  assert.equal(to['/manisha-arumalla-details.php'], '/about/#manisha-arumalla');
  assert.doesNotMatch($('main').text(), /\[|CONFIRM|TBC/);
  assert.doesNotMatch($('main').text(), /single drop/i);
});
