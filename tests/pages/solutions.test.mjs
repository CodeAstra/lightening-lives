// Solutions (content file 5.3), since 25 October 2026 the user's catalogue grid, grouped by family:
// the kits we have developed, each a card with its box in 3D, its condition, key features and "Read
// more"; DMD and LGMD as cards that ask us; Develop a test with us; Under development; Beyond the kits.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/solutions/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const KITS = JSON.parse(readFileSync('src/site/_data/kits.json', 'utf8'));
const all = KITS.families.flatMap((f) => f.kits);

test('the page: a two-tone heading that says what we have and what we can do, and no label over it', () => {
  assert.equal($('title').text(), 'Solutions: LitLife™ genetic test kits | Lightening Lives');
  assert.equal(text('h1'), 'Kits we have developed. Solutions for a wide range of diagnostic needs.');
  assert.equal(text('h1 .h-mark'), 'Solutions for a wide range of diagnostic needs.');
  assert.equal($('.page-open .label').length, 0);
});

test('the sections, in order', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['kits', 'haemoglobinopathies', 'musculopathies', 'develop', 'in-development', 'beyond', 'faq']);
});

test('the opening: the heading across the column, then every kit standing in its family, each to its card', () => {
  assert.equal($('.page-open.page-open-wide').length, 1);
  assert.deepEqual($('#kits .lineup-family-h').map((i, p) => text(p)).get(), KITS.families.map((f) => f.name));
  assert.deepEqual($('#kits .lineup-kit').map((i, a) => $(a).attr('href')).get(), all.map((k) => `#${k.id}`));
  $('#kits .lineup-kit img').each((i, img) => assert.equal(img.attribs.alt, '', 'the name beside it says which kit'));
  assert.deepEqual($('#kits .lineup-name').map((i, s) => text(s)).get(), ['SCA', 'SiBThal217', 'BThal', 'AlphaThal', 'SMA']);
  assert.deepEqual($('#kits .lineup-more a').map((i, a) => $(a).attr('href')).get(), ['#develop', '#in-development']);
  assert.deepEqual($('#kits .kit-shared li').map((i, li) => text(li)).get(), ['A dried blood spot', 'Room temperature transport', 'No DNA extraction', 'Standard PCR equipment']);
});

test('five kits in their families, each with its box, its features and the way to its test page', () => {
  assert.deepEqual($('#haemoglobinopathies .kit-card:not(.kit-ask) .kit-name').map((i, s) => text(s)).get(), ['LitLife™-SCA', 'LitLife™-SiBThal217', 'LitLife™-BThal', 'LitLife™-AlphaThal']);
  assert.deepEqual($('#musculopathies .kit-card:not(.kit-ask) .kit-name').map((i, s) => text(s)).get(), ['LitLife™-SMA']);
  for (const kit of all) {
    const card = $(`#${kit.id}`);
    assert.equal(card.find('a.kit-link').attr('href'), kit.href, kit.id);
    // The 3D stage sits outside the link, so a drag never follows it; its photograph is the still.
    const stage = card.find('.kit-stage[data-kit3d]');
    assert.equal(stage.length, 1, kit.id);
    assert.equal(stage.closest('a').length, 0, `${kit.id}: the stage is not in the link`);
    assert.equal(stage.attr('tabindex'), '0', kit.id);
    assert.match(stage.attr('aria-label'), /Drag to turn it, or use the arrow keys\.$/, kit.id);
    const model = JSON.parse(stage.attr('data-kit3d'));
    assert.deepEqual(model, kit.model, kit.id);
    for (const face of ['front', 'top', 'right']) assert.ok(existsSync(`dist/assets/kits/${model.kit}/${face}.webp`), `${model.kit} ${face}`);
    assert.equal(stage.find('img').attr('alt'), kit.alt, kit.id);
    assert.match(stage.find('img').attr('src'), new RegExp(`^/assets/img/box-render-${model.kit}-`), kit.id);
    assert.equal(card.find('.kit-features > span').length, kit.features.length, kit.id);
    assert.equal(text(card.find('.kit-more')), 'Read more', kit.id);
  }
  assert.equal(JSON.parse($('#kit-sibthal217 [data-kit3d]').attr('data-kit3d')).kit, 'sibthal217', 'the name is SiBThal217, as the user set it');
  assert.deepEqual($('#haemoglobinopathies .kit-also a').map((i, a) => $(a).attr('href')).get(), ['/solutions/sickle-cell-anaemia/#hbd', '/solutions/thalassaemia/#hbe']);
});

test('DMD and LGMD: cards that ask us, at the anchors the old pages forward to', () => {
  for (const id of ['dmd', 'lgmd']) {
    assert.ok($(`#${id}`).is('.kit-ask'), id);
    assert.equal($(`#${id} a`).attr('href'), '/contact/', id);
    assert.equal(text($(`#${id} .kit-more`)), 'Talk to us', id);
  }
});

test('Develop a test with us is the page\'s main ask; Under development names the two families', () => {
  assert.deepEqual($('#develop .develop-path h3').map((i, h) => text(h).replace(/^\d+/, '')).get(), ['Brief', 'Feasibility', 'Development', 'Validation', 'Rollout']);
  assert.equal($('#develop .develop-when li').length, 3);
  assert.deepEqual($('#develop .btn-solid').map((i, a) => [[text(a), $(a).attr('href')]]).get(), [['Propose a condition', '/contact/']]);
  assert.deepEqual($('#in-development .next-kit h3').map((i, h) => text(h)).get(), ['Blood coagulation panel', 'Pharmacogenomics']);
  assert.equal($('#in-development .next-tag').length, 2);
  assert.equal($('#in-development svg.ghost-box[aria-hidden=true]').length, 2);
});

test('Beyond the kits: four ways in to the Partners page; nothing the old Services page claimed beyond the record', () => {
  assert.deepEqual($('#beyond a').map((i, a) => $(a).attr('href')).get(), ['/partners/#programmes', '/partners/#funders', '/partners/#laboratories', '/partners/#laboratories']);
  const words = $('main').clone().find('script').remove().end().text();
  assert.doesNotMatch(words, /prenatal|biobank|individual level|\bNCDs?\b/i);
  assert.doesNotMatch(words, /\[|CONFIRM|TBC/);
});

test('the questions are a FAQPage, word for word what the page shows; the old pages forward here', () => {
  const shown = $('#faq .faq details').map((i, d) => [[text($(d).find('summary')), text($(d).find('p'))]]).get();
  const faq = JSON.parse($('#faq script[type="application/ld+json"]').html());
  assert.deepEqual(faq.mainEntity.map((q) => [q.name, q.acceptedAnswer.text]), shown);
  const forwards = Object.fromEntries(JSON.parse(readFileSync('src/site/_data/forwards.json', 'utf8')).map((f) => [f.from, f.to]));
  assert.equal(forwards['/solutions/develop-a-test/'], '/solutions/#develop');
  assert.equal(forwards['/solutions/duchenne-muscular-dystrophy/'], '/solutions/#dmd');
});

test('the kits in 3D: their own script, loaded by Solutions only; nothing turns by itself', () => {
  const viewer = readFileSync('src/js/kits/viewer.js', 'utf8');
  assert.equal($('script[src="/assets/js/site-kits.js"][type=module]').length, 1);
  assert.equal(load('/')('script[src="/assets/js/site-kits.js"]').length, 0);
  assert.doesNotMatch(viewer, /autoRotate|setInterval/);
  assert.match(viewer, /const reduced = window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(viewer, /e\.pointerType !== 'mouse' \|\| reduced\.matches/, 'the lean towards the pointer is for a mouse, and not for reduced motion');
  assert.match(viewer, /ArrowLeft/, 'the keyboard turns it');
});
