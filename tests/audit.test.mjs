// The production audit (impeccable audit, 5 November 2026; the user: "fix what a top-notch production
// website needs"). What a phone reader trips over (R3 item 7: reading text at 16px, controls 44px
// tall), what a screen reader hears (no landmark nested in another), and what a phone's automatic
// dark mode does to a light-only design. The R3 sweep (npm run sweep) checks the rendered sizes; these
// tests hold the rules in place.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load, pages } from './helpers.mjs';

const src = readFileSync('src/css/site.css', 'utf8');
const PHONE = '@media (max-width: 47.99rem)';

test('reading text set at 15px or 14px is one token each, 16px on a phone', () => {
  // The two small reading steps are tokens, so a phone raises every use of them at once.
  assert.match(src, /--fs-read: 0\.9375rem;/);
  assert.match(src, /--fs-note: 0\.875rem;/);
  const phone = src.slice(src.indexOf('/* The production audit'));
  assert.ok(phone.includes(PHONE), 'a phone block in the audit section');
  assert.match(phone, /:root \{ --fs-read: 1rem; --fs-note: 1rem; \}/);
  // No reading text keeps a literal 15px: every use goes through the token.
  assert.doesNotMatch(src, /font-size: 0\.9375rem/);
});

test('on a phone, the footer\'s and the home contact\'s links are 44px tall', () => {
  const phone = src.slice(src.indexOf('/* The production audit'));
  for (const sel of ['.site-footer .foot-link', '.foot-legal .foot-link', '.signed .link', '.signed-reach a']) {
    assert.ok(phone.includes(sel), sel);
  }
  assert.match(phone, /min-height: 2\.75rem/);
});

test('no complementary landmark inside another landmark (axe: landmark-complementary-is-top-level)', () => {
  for (const url of pages()) assert.equal(load(url)('main aside').length, 0, url);
  // The boxes keep their names, as labelled groups.
  assert.equal(load('/solutions/sickle-cell-anaemia/')('.who[role=group][aria-labelledby="who-h"]').length, 1);
  assert.equal(load('/partner-with-us/')('.audience-card[role=group][aria-labelledby]').length, 1);
});

test('a light-only design says so, so a phone\'s automatic dark mode leaves it alone', () => {
  for (const url of pages({ include404: true })) assert.equal(load(url)('meta[name=color-scheme]').attr('content'), 'only light', url);
  assert.match(src, /color-scheme: only light;/);
});

// Printing a page, or saving it as a PDF, from the top: what the scroll reveals have not yet shown
// (GSAP's inline opacity: 0, e.g. "How a partnership starts" and its four steps) prints, every tab of
// Partner With Us prints, and the dark slabs keep their ground so their light text is not lost.
test('a printed page shows everything: unrevealed sections, every tab, the slabs\' grounds', () => {
  const print = src.slice(src.indexOf('@media print'));
  assert.ok(src.includes('@media print'), 'a print stylesheet');
  assert.match(print, /\[style\*="opacity"\] \{ opacity: 1 !important; transform: none !important; \}/);
  assert.match(print, /\.tab-panel\[hidden\] \{ display: block !important; \}/);
  assert.match(print, /print-color-adjust: exact;/);
  for (const sel of ['.site-nav', '.tabbar-band', '.skip']) assert.ok(print.includes(sel), sel);
});

// The film's map (5 November 2026, the user: "take on the home hero map"). DESIGN.md gives each pin
// "a tap area of at least 2.75rem", and a tap goes to the nearest pin. The tap area is the button
// itself, so what a finger can reach is what is measured; the emblem is drawn inside it at the size
// scene.js sets (--pin), unchanged.
test('each pin in the film is itself a 44px tap area, with its emblem drawn inside at the pin\'s size', () => {
  const rules = (sel) => [...src.matchAll(new RegExp(`(?:^|[\\s}])${sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} \\{([^}]*)\\}`, 'g'))].map((m) => m[1]).join(';');
  assert.match(rules('.place-pin'), /width: max\(var\(--pin, 2rem\), 2\.75rem\)/);
  assert.match(rules('.place-pin'), /height: max\(var\(--pin, 2rem\), 2\.75rem\)/);
  assert.match(rules('.place-emblem'), /width: var\(--pin, 2rem\)/);
  // On a phone the default pin is smaller; the tap area is not.
  assert.match(rules('.place-pin'), /width: max\(var\(--pin, 1\.375rem\), 2\.75rem\)/);
  assert.match(rules('.place-emblem'), /width: var\(--pin, 1\.375rem\)/);
  // No second, hidden tap area beside the box.
  assert.doesNotMatch(src, /\.place-pin::after/);
  // The focus ring is drawn round the emblem a reader sees, not the larger box.
  assert.match(src, /\.place-pin:focus-visible \.place-emblem \{[^}]*outline: 0\.1875rem solid var\(--canopy\)/);
});

// The map's key under the film ("15 sites · 9 states and Delhi", a link) is reading text: on a phone it
// is 16px like the rest, through the token, never a literal 14px.
test('the map\'s key under the film is set through the reading token, 16px on a phone', () => {
  const key = [...src.matchAll(/\.hero-key(?:-hint)? \{([^}]*)\}/g)].map((m) => m[1]).join(';');
  assert.doesNotMatch(key, /font-size: 0\.8(75|125)rem/);
  assert.match(src, /@media \(max-width: 56\.2499rem\) \{ \.hero-key \{[^}]*font-size: var\(--fs-note\)/);
});
