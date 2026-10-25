// Every page carries the shared shell: skip link, header, footer, head tags and icons.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { exists, load, pages } from './helpers.mjs';

const NAV = [
  ['Technology', '/technology/'],
  ['Solutions', '/solutions/'],
  ['Partners', '/partners/'],
  ['Our work', '/our-work/'],
  ['About', '/about/'],
];

test('every page has the shell', () => {
  const urls = pages();
  assert.ok(urls.length > 0, 'pages were built');
  for (const url of urls) {
    const $ = load(url);
    assert.equal($('h1').length, 1, url);
    assert.ok($('body').children().first().is('a.skip[href="#main"]'), `${url}: the skip link comes first`);
    assert.equal($('main#main').length, 1, url);

    // The header has two navs, as before: the links on wide screens (Solutions opening its panel, since
    // 25 October 2026) and the same links in the Menu panel, the tests listed under Solutions.
    const top = $('header nav.site-nav');
    const items = top.children('a.nav-link, details.nav-drop').map((i, el) => [[$(el).is('details') ? $(el).children('summary').text().trim() : $(el).text().trim(), $(el).is('details') ? '/solutions/' : $(el).attr('href')]]).get();
    assert.deepEqual(items, NAV, `${url} site-nav`);
    const drop = top.find('details.nav-drop[data-nav-drop]');
    assert.deepEqual(drop.find('.nav-drop-link').map((i, a) => [[$(a).find('span').text(), $(a).attr('href')]]).get(), [
      ['Sickle cell anaemia', '/solutions/sickle-cell-anaemia/'], ['Thalassaemia', '/solutions/thalassaemia/'], ['Spinal muscular atrophy', '/solutions/spinal-muscular-atrophy/']], url);
    assert.deepEqual(drop.find('.nav-drop-foot a').map((i, a) => $(a).attr('href')).get(), ['/solutions/', '/solutions/develop-a-test/'], url);
    const mobile = $('header details.menu .menu-panel');
    assert.deepEqual(mobile.find('> ul > li > a.nav-link').map((i, a) => [[$(a).text().trim(), $(a).attr('href')]]).get(), NAV, `${url} menu`);
    assert.equal(mobile.find('.menu-sub a').length, 4, `${url}: the three tests and Develop a test under Solutions`);
    for (const nav of ['nav.site-nav', 'details.menu .menu-panel']) {
      assert.equal($(`header ${nav} .btn-solid`).length, 1, `${url} ${nav}: one call to action`);
      assert.equal($(`header ${nav} .btn-solid`).attr('href'), '/partners/', url);
      assert.equal($(`header ${nav} .btn-solid`).text().trim(), 'Partner with us', url);
    }
    const current = top.children('a.nav-link[aria-current=page]').map((i, a) => $(a).attr('href')).get();
    assert.deepEqual(current, NAV.filter(([, href]) => href !== '/solutions/' && url.startsWith(href)).map(([, href]) => href), url);
    assert.equal(drop.children('summary').is('.is-current'), url.startsWith('/solutions/'), url);
    assert.equal($('header .btn-solid').length, 2, `${url}: no call to action in the header beyond the two navs' one`);
    assert.ok($('main .btn-solid').length <= 2, url);

    // The footer was made compact on 25 October 2026: the city with its icon; the full addresses live on Contact.
    assert.match($('footer').text(), /Hyderabad, Telangana/, url);
    assert.equal($('footer .foot-social a').length, 3, url);
    assert.match($('footer').text(), /We don't offer testing to individuals/, url);

    assert.equal($('html').attr('lang'), 'en-IN', url);
    assert.equal($('link[rel=canonical]').attr('href'), `https://lighteninglives.in${url}`, url);
    assert.equal($('meta[property="og:url"]').attr('content'), `https://lighteninglives.in${url}`, url);
    assert.ok($('meta[name=description]').attr('content')?.length > 50, url);
    assert.equal($('meta[name=viewport]').attr('content'), 'width=device-width, initial-scale=1', url);
    assert.equal($('meta[name=theme-color]').attr('content'), '#F0F9FF', url);
    assert.equal($('link[rel=icon][href="/favicon.svg"]').length + $('link[rel=icon][sizes="32x32"]').length, 2, url);
    assert.equal($('link[rel="apple-touch-icon"]').length, 1, url);
    assert.equal($('link[rel=manifest]').attr('href'), '/site.webmanifest', url);
  }
  assert.ok(existsSync('dist/favicon.ico') && existsSync('dist/favicon.svg') && existsSync('dist/site.webmanifest'));
});

test('the notice for individuals appears where the content file says', () => {
  // These pages arrive in Phase 4; each is checked once it exists.
  for (const url of ['/solutions/', '/partners/', '/contact/'].filter(exists))
    assert.match(load(url)('.notice').text(), /don't test individuals/, url);
  // The home page no longer carries it (nine sections, 25 October 2026); the footer says it on every page.
  assert.equal(load('/')('main .notice').length, 0);
  assert.match(load('/')('footer').text(), /We don't offer testing to individuals/);
});
