// npm run deploy (26 October 2026): GitHub Actions stays off (the client's choice), so Pages publishes
// the branch's files as they are, and serves chores/website-revamp's docs/ folder. The deploy puts the
// built site there for the user to commit and push. It empties docs/ first, so these tests hold it to
// docs/: the local plans in docs/superpowers/ stay, nothing outside docs/ is touched, and a failed build
// (no index.html) leaves the published site as it was.
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { publish } from '../scripts/publish-docs.mjs';

let root;
const put = (rel, text = rel) => {
  const f = path.join(root, rel);
  mkdirSync(path.dirname(f), { recursive: true });
  writeFileSync(f, text);
};
const has = (rel) => existsSync(path.join(root, rel));

beforeEach(() => {
  root = mkdtempSync(path.join(tmpdir(), 'll-deploy-'));
  put('package.json', '{}');
  put('src/site/index.njk');
  put('dist/index.html', '<!doctype html><title>new</title>');
  put('dist/assets/js/site.js');
  put('dist/.nojekyll', '');
  put('dist/CNAME', 'lightening-lives.codeastra.com\n');
  put('docs/superpowers/plans/plan.md', 'the plan');
  put('docs/old-page/index.html');
  put('docs/assets/js/chunk-OLD.js');
});
afterEach(() => rmSync(root, { recursive: true, force: true }));

test('the new site replaces the old one in docs/, and the local plans stay', () => {
  const count = publish({ root, from: 'dist', to: 'docs' });
  assert.equal(count, 4);
  assert.equal(readFileSync(path.join(root, 'docs/index.html'), 'utf8'), '<!doctype html><title>new</title>');
  assert.ok(has('docs/assets/js/site.js'));
  assert.ok(has('docs/.nojekyll'));
  assert.equal(readFileSync(path.join(root, 'docs/CNAME'), 'utf8'), 'lightening-lives.codeastra.com\n');
  assert.ok(!has('docs/old-page/index.html'), 'a page the site no longer has is gone');
  assert.ok(!has('docs/assets/js/chunk-OLD.js'), 'an old chunk is gone');
  assert.equal(readFileSync(path.join(root, 'docs/superpowers/plans/plan.md'), 'utf8'), 'the plan');
  assert.ok(has('src/site/index.njk') && has('package.json') && has('dist/index.html'), 'nothing outside docs/ is touched');
});

test('it will not empty the repository itself, or a folder outside it', () => {
  assert.throws(() => publish({ root, from: 'dist', to: '.' }), /inside the repository/);
  assert.throws(() => publish({ root, from: 'dist', to: '../elsewhere' }), /inside the repository/);
  assert.ok(has('package.json') && has('src/site/index.njk') && has('docs/old-page/index.html'));
});

test('a build without a home page publishes nothing and leaves docs/ as it was', () => {
  rmSync(path.join(root, 'dist/index.html'));
  assert.throws(() => publish({ root, from: 'dist', to: 'docs' }), /index\.html/);
  assert.ok(has('docs/old-page/index.html') && has('docs/assets/js/chunk-OLD.js'));
});
