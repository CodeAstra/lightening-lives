// Phase 6, Task 6.6 Step 1: npm run pages leaves dist/ ready for GitHub Pages: the site, a CNAME for
// the production domain (site.json's domain, lighteninglives.in) and .nojekyll, and nothing taken
// from content/ (the source material) or designs/ (the comparison build), but the logo's files, which
// come from designs/assets/logo/ by rule. The repo's own CNAME (the current preview) is not used.
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const site = JSON.parse(readFileSync('src/site/_data/site.json', 'utf8'));
const files = (dir) => readdirSync(dir, { recursive: true }).map((f) => path.join(dir, f)).filter((f) => statSync(f).isFile());
const hash = (f) => createHash('sha1').update(readFileSync(f)).digest('hex');

before(() => {
  execFileSync('node', ['scripts/build.mjs', '--pages'], { stdio: 'ignore' });
});

test('dist/CNAME names the production domain, from site.json', () => {
  assert.equal(readFileSync('dist/CNAME', 'utf8').trim(), 'lighteninglives.in');
  assert.equal(new URL(site.domain).host, 'lighteninglives.in');
});

test('dist/.nojekyll exists', () => {
  assert.ok(existsSync('dist/.nojekyll'));
});

test('nothing in dist/ comes from content/ or designs/ (but the logo), and no source file is published', () => {
  const published = files('dist').map((f) => path.relative('dist', f));
  for (const top of ['content', 'designs', 'src', 'docs', 'node_modules', 'tests', 'scripts']) {
    assert.ok(!existsSync(path.join('dist', top)), top);
  }
  assert.deepEqual(published.filter((f) => /\.(njk|mjs|ts|map)$/.test(f)), []);
  const fromContent = new Set(files('content').map(hash));
  assert.deepEqual(published.filter((f) => fromContent.has(hash(path.join('dist', f)))), []);
  const fromDesigns = new Set(files('designs').filter((f) => !f.startsWith('designs/assets/logo/')).map(hash));
  // The logo's files and the favicon (its emblem) come from designs/ by rule; an empty file
  // (.nojekyll) matches any other empty file.
  const logo = (f) => f.startsWith('assets/logo/') || f === 'favicon.svg' || statSync(path.join('dist', f)).size === 0;
  assert.deepEqual(published.filter((f) => !logo(f) && fromDesigns.has(hash(path.join('dist', f)))), []);
});
