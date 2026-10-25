// Phase 6, Task 6.3: the Not found page (content 5.18) and the old addresses (3.4). Hosting is
// static, so GitHub Pages serves dist/404.html for any address it has no file for, at that address.
// Without script the page is the heading, the sentence and the six links. With script, an old .php
// address of the current site adds one line above the links, "You may be looking for: <the new
// page>", and nothing else changes (Review Focus 4).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load } from '../helpers.mjs';
import { OLD, suggest, suggestion } from '../../src/js/site/not-found.js';

const $ = load('/404.html');
const text = (el) => $(el).text().replace(/\s+/g, ' ').trim();

test('the page: title, h1 and the sentence (5.18)', () => {
  assert.equal($('title').text(), 'Page not found | Lightening Lives');
  assert.equal($('h1').length, 1);
  assert.equal(text('h1'), 'This page is not here');
  assert.equal(text('[data-not-found] p'), 'The address may be from our old website, or the page may have moved. These lead to the same things:');
});

test('the six links, in 5.18\'s order', () => {
  const links = $('[data-not-found] ul a');
  assert.deepEqual(links.map((i, a) => text(a)).get(), ['Home', 'Solutions', 'Partners', 'Our work', 'About', 'Contact']);
  assert.deepEqual(links.map((i, a) => $(a).attr('href')).get(), ['/', '/solutions/', '/partners/', '/our-work/', '/about/', '/contact/']);
});

test('served at any address: every link and asset is root-relative', () => {
  $('a[href], link[href], script[src], img[src]').each((i, el) => {
    const v = el.attribs.href ?? el.attribs.src;
    assert.ok(/^(\/|https?:|mailto:|tel:|#)/.test(v), `${el.name} ${v}`);
  });
});

test('not a page of its own address: noindex, no canonical, no og:url, no breadcrumbs, the home page\'s card', () => {
  assert.equal($('meta[name=robots]').attr('content'), 'noindex');
  assert.equal($('link[rel=canonical]').length, 0);
  assert.equal($('meta[property="og:url"]').length, 0);
  assert.ok(!$('script[type="application/ld+json"]').text().includes('BreadcrumbList'));
  assert.equal($('meta[property="og:image"]').attr('content'), 'https://lighteninglives.in/assets/img/social.png');
  assert.equal($('.closing').length, 0);
});

test('every old address in 3.4 has its new page', () => {
  assert.deepEqual(Object.fromEntries([...OLD].map(([from, to]) => [from, to.href])), {
    '/index.php': '/',
    '/about-us.php': '/about/',
    '/services.php': '/solutions/',
    '/impact-stories.php': '/our-work/',
    '/our-team.php': '/about/team/',
    '/abhishek-chandak-details.php': '/about/team/#abhishek-chandak',
    '/manisha-arumalla-details.php': '/about/team/#manisha-arumalla',
    '/punyasri-pskdb-details.php': '/about/team/#punyasri-pskdb',
    '/mehraj-begum-details.php': '/about/team/#mehraj-begum',
    '/pruthvi-details.php': '/about/team/#pruthvi-bellamkonda',
    '/jyothi-details.php': '/about/team/#jyothi-vislavath',
    '/partnerships.php': '/partners/',
    '/contact-us.php': '/contact/',
  });
});

test('each new page is named, and each exists in the build', () => {
  for (const [from, to] of OLD) {
    assert.ok(to.name && !/\[|undefined/.test(to.name), from);
    const [path, hash] = to.href.split('#');
    const page = load(path);
    if (hash) assert.equal(page(`[id="${hash}"]`).length, 1, to.href);
  }
  assert.equal(OLD.get('/services.php').name, 'Solutions');
  assert.equal(OLD.get('/our-team.php').name, 'Team');
  assert.equal(OLD.get('/abhishek-chandak-details.php').name, 'Mr. Abhishek Chandak, on our team page');
});

test('suggest: an old address, whatever its case or a trailing slash; nothing for any other', () => {
  assert.equal(suggest('/services.php').href, '/solutions/');
  assert.equal(suggest('/Services.PHP').href, '/solutions/');
  assert.equal(suggest('/our-team.php/').href, '/about/team/');
  assert.equal(suggest('/services'), null);
  assert.equal(suggest('/solutions/nothing-here/'), null);
  assert.equal(suggest('/'), null);
});

test('suggestion: one line, "You may be looking for:" and the link; empty for an unknown address', () => {
  const line = suggestion('/services.php');
  assert.equal(line, '<p class="not-found-hint">You may be looking for: <a class="link" href="/solutions/">Solutions</a></p>');
  assert.equal(suggestion('/nowhere.php'), '');
});
