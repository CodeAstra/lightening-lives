// The content file's rules (content/website-content.md 2.7, 2.8; plan Global Constraints), checked on
// every built page. They pass on a page with nothing to break them and bite as pages arrive.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { file, load, pages } from './helpers.mjs';

// Words to leave out (content 2.8). Matched at the start of a word, so "empowering" and "diagnostic
// tools" are caught too. "single drop" has its own test, because the vision statement keeps it.
// "painless" left the list on 25 October 2026: the user allowed the poster's "painless finger prick" in REASSURED.
const BANNED = ['revolutionary', 'limitless', 'endless', 'cutting-edge', 'world-class', 'state-of-the-art', 'game-changing', 'empower', 'seamless', 'holistic', 'ecosystem', 'leverage', 'hope', 'humbled', 'flagship', 'diagnostic tool', 'solutions provider'];

// What a reader or a search engine reads: the page's text, its title and its description.
function copy($) {
  return [$('title').text(), $('meta[name=description]').attr('content') ?? '', $('body').text()].join('\n');
}

test('banned words never render', () => {
  for (const url of pages()) {
    const text = copy(load(url)).toLowerCase();
    for (const w of BANNED) assert.doesNotMatch(text, new RegExp(`\\b${w}`), `${url}: ${w}`);
  }
});

test('"single drop" appears only in the vision statement', () => {
  for (const url of pages()) {
    const $ = load(url);
    $('.vision-line').remove();
    assert.doesNotMatch(copy($), /single drop|one drop of blood/i, url);
  }
});

test('"kit" only where the content file allows', () => {
  // Never on the home page; elsewhere only in a test page's "In the laboratory, with the kit"
  // (#laboratory) and on Solutions, the kit catalogue (both since 25 October 2026).
  assert.doesNotMatch(load('/')('main').text(), /\bkits?\b/i, '/');
  for (const url of pages().filter((u) => u !== '/solutions/')) {
    const $ = load(url);
    $('#laboratory').remove();
    $('#media .media-body h3').remove(); // the poster's own title, quoted on Our work
    assert.doesNotMatch($('main').text(), /\bkits?\b/i, url);
  }
});

test('no TBC or PLACEHOLDER text renders, in the text or anywhere in the markup', () => {
  for (const url of pages({ include404: true })) {
    assert.doesNotMatch(readFileSync(file(url), 'utf8'), /\[(TBC|PLACEHOLDER)/, url);
  }
});

test('every image has alt text', () => {
  for (const url of pages()) load(url)('img').each((i, el) => assert.ok(typeof el.attribs.alt === 'string', `${url} img ${el.attribs.src}`));
});

test('no comparison toolbar and no noindex', () => {
  for (const url of pages()) {
    const $ = load(url);
    assert.equal($('script[src*="compare"]').length, 0, url);
    assert.equal($('meta[name=robots][content*=noindex]').length, 0, url);
  }
});
