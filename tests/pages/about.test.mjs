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

test('the page: title, a people-first two-tone heading, no label', () => {
  assert.equal($('title').text(), 'About us: healthcare technology from Hyderabad | Lightening Lives');
  assert.equal(text('h1'), 'The scientists and the team behind the tests.');
  assert.equal($('.page-open .label').length, 0);
});

test('people first: the founders, the team, then the facts', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['founder', 'team', 'facts']);
  assert.equal($('main > section.closing').length, 1);
});

test('the founder in a spotlight: his portrait, his record, and his story and the co-founder\'s a click away', () => {
  const [ff, co] = TEAM.founders;
  assert.equal(text(`#${ff.slug}`), ff.name);
  assert.equal($('#founder .spotlight-record li').length, 4);
  assert.equal($('#founder .spotlight-photo img').attr('alt'), 'Dr. Giriraj Ratan Chandak and Mrs. Nidhi Chandak');
  for (const p of [ff, co]) {
    assert.ok($(`#founder [popovertarget="bio-${p.slug}"]`).length, p.slug);
    assert.equal($(`#bio-${p.slug}[popover][role=dialog]`).length, 1, p.slug);
  }
  assert.equal($(`#${co.slug}`).attr('popovertarget'), `bio-${co.slug}`);
});

test('the team in its groups, then patron and advisers; a card opens a bio only where there is one, never on the page itself', () => {
  assert.deepEqual($('#team .tgroup-h').map((i, h) => text(h)).get(), [...TEAM.groups.map((g) => g.name), 'Patron and advisers']);
  const everyone = [...TEAM.team, ...TEAM.patron, ...TEAM.advisers];
  assert.equal($('#team .tcard').length, everyone.length);
  for (const p of everyone) {
    const card = $(`#${p.slug}`);
    assert.equal(card.find('img').attr('alt'), p.name, p.slug);
    assert.equal(card.find(`button.tcard-face[popovertarget="bio-${p.slug}"]`).length, p.bio ? 1 : 0, `${p.slug}: opens only with a bio`);
    if (p.bio) {
      const panel = $(`#bio-${p.slug}`);
      assert.ok(panel.is('[popover]'), p.slug);
      assert.equal(panel.find('[popovertargetaction=hide]').attr('aria-label'), 'Close', p.slug);
    }
  }
  for (const g of TEAM.groups) assert.ok(TEAM.team.some((p) => p.group === g.id), g.id);
});

test('at a glance: eight facts, lower on the page', () => {
  assert.equal($('#facts .facts-grid > div').length, 8);
});

test('the old team page forwards here, and nothing unconfirmed renders', () => {
  const to = Object.fromEntries(JSON.parse(readFileSync('src/site/_data/forwards.json', 'utf8')).map((f) => [f.from, f.to]));
  assert.equal(to['/about/team/'], '/about/#team');
  assert.equal(to['/manisha-arumalla-details.php'], '/about/#manisha-arumalla');
  assert.doesNotMatch($('main').text(), /\[|CONFIRM|TBC/);
  assert.doesNotMatch($('main').text(), /single drop/i);
});
