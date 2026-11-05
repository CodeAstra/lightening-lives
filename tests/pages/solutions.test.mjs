// Solutions (content file 5.3), since 25 October 2026 the user's catalogue grid, grouped by family;
// since the client review (5 November 2026, plan Task 4) each kit a clear card that opens, not a box
// in 3D; DMD and LGMD as cards that ask us; Under development; Develop a test with us; Beyond the kits.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { load } from '../helpers.mjs';

const $ = load('/solutions/');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();
const KITS = JSON.parse(readFileSync('src/site/_data/kits.json', 'utf8'));
const all = KITS.families.flatMap((f) => f.kits);

test('the page: the client\'s heading under its label, the lead, the proof', () => {
  assert.equal($('title').text(), 'Sickle cell, thalassaemia and SMA tests | Lightening Lives');
  // The client review's opening label (U2, 5 November 2026) and P2's heading.
  assert.deepEqual($('.page-open .label').map((i, e) => $(e).text().trim()).get(), ['Institutional diagnostic solutions']);
  assert.equal(text('h1'), 'Five ready-to-run LitLife™ kits. Custom tests built on request.');
  assert.equal(text('h1 .h-mark'), 'Custom tests built on request.');
  assert.equal(text('.page-open .lead'), 'Molecular tests for inherited blood and muscle disorders that work directly from a dried blood spot, for hospitals, lab chains, CSR initiatives and public health programmes.');
});

test('the sections, in the client\'s order: the pipeline before co-development', () => {
  assert.deepEqual($('main > section[id]').map((i, s) => $(s).attr('id')).get(), ['kits', 'haemoglobinopathies', 'musculopathies', 'in-development', 'develop', 'beyond', 'faq']);
});

test('the opening: every kit standing in its family, each to its card, named with β and α', () => {
  assert.equal($('.page-open.page-open-wide').length, 1);
  assert.deepEqual($('#kits .lineup-family-h').map((i, p) => text(p)).get(), KITS.families.map((f) => f.name));
  assert.deepEqual($('#kits .lineup-kit').map((i, a) => $(a).attr('href')).get(), all.map((k) => `#${k.id}`));
  $('#kits .lineup-kit img').each((i, img) => assert.equal(img.attribs.alt, '', 'the name beside it says which kit'));
  assert.deepEqual($('#kits .lineup-name').map((i, s) => text(s)).get(), ['SCA', 'SiβThal217', 'βThal', 'αThal', 'SMA']);
  assert.deepEqual($('#kits .lineup-condition').map((i, s) => text(s)).get(), ['Sickle Cell Anaemia', 'Sickle-Beta Thalassaemia', 'Beta Thalassaemia', 'Alpha Thalassaemia', 'Spinal Muscular Atrophy']);
  assert.deepEqual($('#kits .lineup-more a').map((i, a) => $(a).attr('href')).get(), ['#in-development', '#develop']);
  assert.deepEqual($('#kits .kit-shared li').map((i, li) => text(li)).get(), ['A dried blood spot', 'Room temperature transport', 'No DNA extraction', 'Standard PCR equipment']);
});

// P2: "Please replace 'Drag to Turn' product boxes with clear expandable cards"; then the user (5
// November 2026): "the details etc can be included in the card without clicking". Each kit is a
// datasheet card with nothing to open: the box, the condition, the name, every point, the proof as a
// seal, and the two ways on.
test('five kits as datasheet cards: the box, the condition, the name, every point and both links, nothing to open', () => {
  assert.deepEqual($('#haemoglobinopathies .kit-card:not(.kit-ask) .kit-name').map((i, s) => text(s)).get(), ['LitLife™-SCA', 'LitLife™-SiβThal217', 'LitLife™-βThal', 'LitLife™-αThal']);
  assert.deepEqual($('#musculopathies .kit-card:not(.kit-ask) .kit-name').map((i, s) => text(s)).get(), ['LitLife™-SMA']);
  assert.equal($('main [data-kit3d], main .kit-hint').length, 0, 'no 3D stage, no "Drag to turn"');
  assert.equal($('script[src="/assets/js/site-kits.js"]').length, 0, 'Solutions no longer loads the 3D viewer');
  assert.doesNotMatch(text('main'), /Drag to turn/i);
  assert.equal($('.kit-card details, .kit-card summary').length, 0, 'nothing on a kit card is behind a click');
  for (const kit of all) {
    const card = $(`#${kit.id}`);
    assert.ok(card.find('.kit-name').is('h3'), kit.id);
    assert.equal(text(card.find('.kit-condition')), kit.title, kit.id);
    assert.match(card.find('.kit-shot img').attr('src'), new RegExp(`^/assets/img/${kit.image}-`), kit.id);
    assert.equal(card.find('.kit-shot img').attr('alt'), kit.alt, kit.id);
    const points = [...kit.features, ...kit.more].filter((p) => p !== 'ICMR approved');
    assert.deepEqual(card.find('.kit-points > li').map((i, li) => text(li)).get(), points, `${kit.id}: every point on the card`);
    const links = card.find('.kit-acts a');
    assert.deepEqual(links.map((i, a) => text(a)).get(), ['Read more', 'Request product sheet'], kit.id);
    assert.equal(links.eq(0).attr('href'), kit.href, kit.id);
    assert.equal(links.eq(1).attr('data-topic'), 'dossier', kit.id);
  }
  // The proof as a seal on the SCA card, where the eye lands, and on no other.
  assert.equal(text('#kit-sca .kit-proof'), 'ICMR approved');
  assert.equal($('#kit-sca .kit-proof .cred-seal svg.icon').length, 1);
  assert.equal($('.kit-proof').length, 1);
  assert.equal($('#kit-sma .kit-acts a').eq(1).attr('data-condition'), 'spinal-muscular-atrophy');
  // DMD and LGMD stand together in the cell beside SMA.
  assert.equal($('#musculopathies .kit-grid > li.kit-asks #dmd, #musculopathies .kit-grid > li.kit-asks #lgmd').length, 2);
  assert.deepEqual($('#haemoglobinopathies .kit-also a').map((i, a) => $(a).attr('href')).get(), ['/solutions/sickle-cell-anaemia/#hbd', '/solutions/thalassaemia/#hbe']);
});

test('the families\' leads, in the client\'s words', () => {
  assert.equal(text('#haemoglobinopathies .lead'), "Among India's most common single-gene conditions. Our kits skip two-tier screening and give a definitive molecular result in one test, from a dried blood spot.");
  assert.equal(text('#musculopathies .lead'), 'Rapid, affordable molecular confirmation on a dried blood spot card, replacing years of diagnostic delay for children with neuromuscular disorders.');
  assert.match(text('#haemoglobinopathies .kit-also'), /^Also available: targeted molecular testing for HbD and HbE\./);
});

test('DMD and LGMD: cards that ask our scientific team, at the anchors the old pages forward to', () => {
  for (const id of ['dmd', 'lgmd']) {
    assert.ok($(`#${id}`).is('.kit-ask'), id);
    assert.equal($(`#${id} a`).attr('href'), `/contact/?condition=${{ dmd: 'duchenne-muscular-dystrophy', lgmd: 'limb-girdle-muscular-dystrophy' }[id]}`, id);
    assert.ok($(`#${id} a`).is('[data-enquire][data-condition]'), `${id}: opens the enquiry form, the condition ticked`);
    assert.equal(text($(`#${id} .kit-more`)), 'Talk to our scientific team', id);
  }
  assert.equal(text('#dmd .kit-line'), 'Molecular diagnosis for affected boys, and carrier testing for mothers and sisters.');
  assert.equal(text('#lgmd .kit-line'), 'Definitive molecular confirmation that ends prolonged diagnostic uncertainty.');
});

test('the pipeline, then co-development: the client\'s words, an early-access ask, the five steps', () => {
  assert.equal(text('#in-development h2'), 'Under development. Expanding accessible precision medicine.');
  assert.deepEqual($('#in-development .next-kit h3').map((i, h) => text(h)).get(), ['Blood coagulation panel', 'Pharmacogenomics panel']);
  assert.equal($('#in-development svg.ghost-box[aria-hidden=true]').length, 2);
  assert.deepEqual($('#in-development .btn').map((i, a) => [[text(a), $(a).attr('data-topic')]]).get(), [['Partner with us for early access', 'early-access']]);
  assert.equal(text('#develop .lead'), "Every LitLife™ kit began with a programme's need. If your hospital, lab chain or state health mission needs a test that doesn't exist, our scientists can develop and validate it.");
  assert.deepEqual($('#develop .develop-when li').map((i, li) => text(li)).get(), ['A condition common in one community or region', 'A regional mutation no test covers', 'A dried blood spot format no manufacturer offers']);
  assert.deepEqual($('#develop .develop-path h3').map((i, h) => text(h).replace(/^\d+/, '')).get(), ['Brief', 'Feasibility', 'Development', 'Validation', 'Rollout']);
  assert.deepEqual($('#develop .btn-solid').map((i, a) => [[text(a), $(a).attr('href'), $(a).attr('data-topic')]]).get(), [['Propose a condition', '/contact/?topic=develop', 'develop']]);
  assert.match(text('#develop .develop-act .link'), /^Write to our R&D team/);
});

test('Beyond the kits: four things we bring, without the three buttons', () => {
  assert.equal($('#beyond a').length, 0, 'P2: remove For Programmes, For Funders, For Laboratories');
  assert.deepEqual($('#beyond li b').map((i, b) => text(b)).get(), ['Testing and nutrition programmes', 'Awareness and genetic counselling', 'Hands-on technical training', 'Lab set-up and grant consultancy']);
  const words = $('main').clone().find('script').remove().end().text();
  assert.doesNotMatch(words, /biobank|individual level|\bNCDs?\b/i);
  assert.doesNotMatch(words, /\[|CONFIRM|TBC/);
});

test('the questions are a FAQPage, word for word what the page shows; six, reviewed; the old pages forward here', () => {
  const shown = $('#faq .faq details').map((i, d) => [[text($(d).find('summary')), text($(d).find('p'))]]).get();
  const faq = JSON.parse($('#faq script[type="application/ld+json"]').html());
  assert.deepEqual(faq.mainEntity.map((q) => [q.name, q.acceptedAnswer.text]), shown);
  assert.equal(shown.length, 6);
  assert.ok(shown.some(([q]) => q === 'How quickly are results ready?'));
  const forwards = Object.fromEntries(JSON.parse(readFileSync('src/site/_data/forwards.json', 'utf8')).map((f) => [f.from, f.to]));
  assert.equal(forwards['/solutions/develop-a-test/'], '/solutions/#develop');
  assert.equal(forwards['/solutions/duchenne-muscular-dystrophy/'], '/solutions/#dmd');
});

test('the close: start with the condition; talk to our scientific team', () => {
  assert.equal(text('.closing .btn-solid'), 'Talk to our scientific team');
  assert.ok($('.closing .btn-solid').is('[data-enquire]'));
});

test('β and α stay on the page: titles, addresses and the search files keep the Latin names', () => {
  for (const url of ['/solutions/', '/solutions/thalassaemia/', '/', '/about/']) {
    const $$ = load(url);
    assert.doesNotMatch($$('title').text() + ($$('meta[name=description]').attr('content') ?? ''), /[βα]/, url);
    $$('script[type="application/ld+json"]').each((i, s) => assert.doesNotMatch($$(s).html(), /[βα]Thal/, `${url} schema`));
  }
  assert.doesNotMatch(readFileSync('dist/llms.txt', 'utf8'), /[βα]/);
  assert.deepEqual(Object.values(JSON.parse(readFileSync('src/site/_data/enquire.json', 'utf8')).conditions).filter((c) => /[βα]/.test(c)), []);
});

test('the kits in 3D: the viewer (kept for the box stills, npm run kit-stills) never turns by itself', () => {
  const viewer = readFileSync('src/js/kits/viewer.js', 'utf8');
  assert.equal(load('/')('script[src="/assets/js/site-kits.js"]').length, 0);
  assert.doesNotMatch(viewer, /autoRotate|setInterval/);
  assert.match(viewer, /const reduced = window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(viewer, /e\.pointerType !== 'mouse' \|\| reduced\.matches/, 'the lean towards the pointer is for a mouse, and not for reduced motion');
  assert.match(viewer, /ArrowLeft/, 'the keyboard turns it');
});

test('the kits in 3D: the print is seen at its own colour and drawn sharp (26 October 2026, the user: the text "is not properly visible")', () => {
  const viewer = readFileSync('src/js/kits/viewer.js', 'utf8');
  const number = (re) => Number(viewer.match(re)[1]);
  const ambient = number(/new AmbientLight\(0xffffff, ([\d.]+)\)/);
  const key = number(/new DirectionalLight\(0xffffff, ([\d.]+)\)/);
  const [lx, ly, lz] = viewer.match(/key\.position\.set\(([-\d.]+), ([-\d.]+), ([-\d.]+)\)/).slice(1).map(Number);
  const yaw = number(/const REST = \{ yaw: ([-\d.]+),/);
  // three.js's Lambert: albedo × (ambient + key × cos) ÷ π. The front face, turned by the resting yaw,
  // shows the paper at its own white (it was 0.75, a grey); the shaded side stays darker, so the box reads.
  const len = Math.hypot(lx, ly, lz);
  const cosFront = Math.max(0, (Math.sin(yaw) * lx + Math.cos(yaw) * lz) / len);
  const cosSide = Math.max(0, (Math.cos(yaw) * lx - Math.sin(yaw) * lz) / len);
  const front = (ambient + key * cosFront) / Math.PI;
  const side = (ambient + key * cosSide) / Math.PI;
  assert.ok(front >= 0.95 && front <= 1.05, `front face at ${front.toFixed(2)} of the print`);
  assert.ok(side >= 0.7 && side < front - 0.1, `shaded side at ${side.toFixed(2)}`);
  // Drawn at more than the screen's pixels, with the sharpest filtering the screen offers.
  assert.match(viewer, /setPixelRatio\(Math\.min\(3, Math\.max\(2,/);
  assert.match(viewer, /anisotropy = renderer\.capabilities\.getMaxAnisotropy\(\)/);
  // The camera is fitted to the stage from the box's corners, so the box fills it at any size.
  assert.match(viewer, /function fit\(\)/);
});

test('the β and α names wherever the page shows a thalassaemia kit by name (P1; SiβThal217 too, the user, 5 November 2026)', () => {
  for (const url of ['/', '/about/', '/solutions/', '/solutions/thalassaemia/', '/solutions/sickle-cell-anaemia/']) {
    const shown = load(url)('main').clone().find('script, img').remove().end().text();
    assert.doesNotMatch(shown, /LitLife™-(BThal|AlphaThal)\b|\bAlphaThal\b|SiBThal217|-BThal\b/, url);
  }
  assert.match(load('/solutions/thalassaemia/')('main').text(), /LitLife™-βThal/);
  assert.match(load('/solutions/thalassaemia/')('main').text(), /LitLife™-αThal/);
  assert.match(load('/solutions/sickle-cell-anaemia/')('main').text(), /LitLife™-SiβThal217/);
});

test('kit-stills fails loudly when it finds no 3D boxes, instead of writing nothing', () => {
  const js = readFileSync('scripts/kit-stills.mjs', 'utf8');
  assert.match(js, /if \(kits\.length !== 5\)[\s\S]*?process\.exit\(1\)/);
});
