// About Us (content file 5.8; since the client review of 27 October 2026, plan 2026-11-05 Task 7): the
// stacked opening with the company's introduction; THE FOUNDERS, two blocks each with its own portrait;
// the leadership; the team in its two groups, on lighter cards; the patron and the advisory board with
// what each brings; the mission; the company at a glance; the close. Bios open in a side panel (a
// native popover); a card without one does not open. Every person keeps their slug as an anchor, which
// the old team addresses forward to. No Mr., Mrs. or Ms. before a name anywhere (Dr. and Prof. stay).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load, pages } from '../helpers.mjs';

const $ = load('/about/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const texts = (selector) => $(selector).map((i, el) => text(el)).get();
const TEAM = JSON.parse(readFileSync('src/site/_data/team.json', 'utf8'));

test('the opening: stacked, the kicker, the client\'s heading, the company\'s introduction and the four proofs', () => {
  assert.equal($('title').text(), 'Genetic diagnostics company in Hyderabad | Lightening Lives');
  assert.ok($('.page-open').is('.page-open-stacked'));
  assert.deepEqual(texts('.page-open .label'), ['About Lightening Lives LLP']);
  assert.equal(text('h1'), 'The scientists, clinicians and mission behind the tests.');
  assert.equal(text('.page-open .lead'), 'Lightening Lives is a Hyderabad-based healthcare technology company, developing REASSURED genetic tests and healthcare solutions for rare genetic disorders, with a focus on haemoglobinopathies and musculopathies.');
  assert.equal(text('.page-open .lead-line'), 'Established in September 2023, on the principle that every life matters.');
  assert.deepEqual(texts('.page-open .page-proof .cred-text'), ['25+ years of research in human genetics', 'Made in India, on CSIR-CCMB know-how', 'ICMR approved', 'Patents granted in India and Japan']);
});

test('the sections, in order', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['founders', 'leadership', 'team', 'advisers', 'mission', 'facts']);
  assert.equal($('main > section.closing').length, 1);
});

test('THE FOUNDERS: two blocks, each with its own portrait, record, line and story', () => {
  assert.equal(text('#founders h2'), 'The founders');
  const [ff, co] = TEAM.founders;
  const blocks = $('#founders .founder');
  assert.deepEqual(blocks.map((i, b) => $(b).attr('id')).get(), [ff.slug, co.slug]);
  const srcs = blocks.map((i, b) => $(b).find('img.founder-photo').attr('src')).get();
  assert.equal(srcs.length, 2);
  assert.notEqual(srcs[0], srcs[1], 'each founder has a portrait of their own');
  assert.deepEqual(blocks.map((i, b) => $(b).find('img.founder-photo').attr('alt')).get(), ['Dr. Giriraj Ratan Chandak', 'Nidhi Chandak']);
  assert.deepEqual(texts('#founders .founder-name'), ['Dr. Giriraj Ratan Chandak', 'Nidhi Chandak']);
  assert.deepEqual(texts('#founders .founder-role'), ['Founder and CEO · MD, PhD, DNB', 'Co-Founder']);
  const record = $(`#${ff.slug} .founder-record li`);
  assert.equal(record.length, 4);
  assert.equal($(record[0]).find('img').attr('src'), '/assets/logo/partners/logo-ccmb.webp', 'CSIR-CCMB by its logo');
  assert.match(text(record[3]), /Indian National Science Academy, Indian Academy of Sciences, National Academy of Sciences, India, and National Academy of Medical Sciences; and The World Academy of Sciences/);
  assert.equal(text(`#${ff.slug} .founder-line`), 'Twenty-five years of research, innovation and laboratory work on inherited genetic disorders, now reaching the market and communities, with impact on the ground.');
  assert.equal(text(`#${co.slug} .founder-line`), 'Drives the social enterprise vision, institutional partnerships and community-first ethos, so laboratory innovation becomes equitable care on the ground.');
  assert.deepEqual(blocks.map((i, b) => [[text($(b).find('[popovertarget]')), $(b).find('[popovertarget]').attr('popovertarget')]]).get(), [['His story', `bio-${ff.slug}`], ['Her story', `bio-${co.slug}`]]);
  assert.match(text(`#bio-${ff.slug} .bio-body > p:not(.bio-role)`), /^With over twenty-five years of research into the genetic and nutritional basis/);
  for (const p of [ff, co]) assert.equal($(`#bio-${p.slug}[popover][role=dialog]`).length, 1, p.slug);
});

test('the leadership: two cards, the finance head opening a bio, the strategy advisor by initials', () => {
  assert.equal(text('#leadership h2'), 'The leadership. Strategy, finance and operations.');
  assert.deepEqual(texts('#leadership .tcard-name'), ['Dr. Vivek Sharma', 'Abhishek Chandak']);
  assert.deepEqual(texts('#leadership .tcard-role'), ['Chief Strategy Advisor', 'Head, Finance and Operations']);
  assert.equal($('#vivek-sharma .tcard-initials').text().trim(), 'VS');
  assert.equal($('#vivek-sharma button').length, 0, 'no bio yet, so the card does not open');
  assert.equal($('#abhishek-chandak button.tcard-face').attr('popovertarget'), 'bio-abhishek-chandak');
});

test('the team: two groups, five lighter cards, no dark scrim', () => {
  assert.equal(text('#team h2'), 'The team. Behind our tests and programmes.');
  assert.equal(text('#team .lead'), 'Molecular scientists, laboratory specialists and operations staff, working together in Hyderabad.');
  assert.deepEqual(texts('#team .tgroup-h'), ['Science and laboratory operations', 'Administration and accounts']);
  assert.deepEqual($('#team .tgroup').map((i, g) => [$(g).find('.tcard').map((j, c) => $(c).attr('id')).get()]).get(),
    [['manisha-arumalla', 'punyasri-pskdb', 'jyothi-vislavath'], ['mehraj-begum', 'pruthvi-bellamkonda']]);
  $('#team .tcard').each((i, c) => {
    assert.equal($(c).find(`button.tcard-face[popovertarget="bio-${$(c).attr('id')}"]`).length, 1);
    assert.equal($(c).find('img').attr('alt'), text($(c).find('.tcard-name')));
  });
  assert.doesNotMatch(readFileSync('src/css/site.css', 'utf8'), /\.tcard-face::after/, 'no gradient over the photographs');
});

test('patron and advisers: what each brings, on the card', () => {
  assert.equal(text('#advisers h2'), 'Patron and scientific advisory board. Guided by leaders in medicine, genetics and public health.');
  assert.deepEqual(texts('#advisers .tcard-name'), ['Dr. D. Nageshwar Reddy', 'Prof. Kalyanaraman Kumaran', 'Prof. G.V. Krishnaveni']);
  assert.deepEqual(texts('#advisers .tcard-role'), ['Patron', 'Advisory board', 'Advisory board']);
  assert.match(text('#d-nageshwar-reddy .tcard-line'), /^Founder and Chairman, AIG Hospitals, and Padma Vibhushan recipient/);
  assert.equal($('#advisers button').length, 0);
});

test('the mission: three items; the facts; the close', () => {
  assert.equal(text('#mission h2'), 'Precision genetic healthcare that crosses every barrier.');
  assert.deepEqual(texts('#mission .pillar h3'), ['From elite laboratories to the last mile', 'Beyond screening: complete care', 'Genetics, early nutrition and epigenetics']);
  assert.equal($('#facts .facts-grid > div').length, 8);
  assert.equal(text('.closing h2'), 'Work with us. Most of our impact begins as a collaboration.');
  assert.equal($('.closing .btn-solid').attr('href'), '/partner-with-us/');
  assert.deepEqual([text('.closing .btn-line'), $('.closing .btn-line').attr('href')], ['Contact our team', '/contact/']);
});

test('every person keeps an anchor, and the old team addresses still land', () => {
  const to = Object.fromEntries(JSON.parse(readFileSync('src/site/_data/forwards.json', 'utf8')).map((f) => [f.from, f.to]));
  assert.equal(to['/about/team/'], '/about/#team');
  for (const slug of ['giriraj-ratan-chandak', 'nidhi-chandak', 'abhishek-chandak', 'manisha-arumalla', 'punyasri-pskdb', 'mehraj-begum', 'pruthvi-bellamkonda', 'jyothi-vislavath', 'd-nageshwar-reddy', 'kalyanaraman-kumaran', 'gv-krishnaveni']) {
    assert.equal($(`[id="${slug}"]`).length, 1, slug);
  }
  assert.doesNotMatch($('main').text(), /\[|CONFIRM|TBC/);
});

test('no Mr., Mrs. or Ms. before a name, in any page\'s words or pictures', () => {
  const SAL = /\b(Mr|Mrs|Ms)\.? [A-Z]/;
  for (const url of pages()) {
    const page = load(url);
    assert.doesNotMatch(page('body').clone().find('script').remove().end().text(), SAL, url);
    page('img[alt]').each((i, img) => assert.doesNotMatch(img.attribs.alt, SAL, url));
  }
  assert.doesNotMatch(readFileSync('src/site/_data/forwards.json', 'utf8'), SAL);
});
