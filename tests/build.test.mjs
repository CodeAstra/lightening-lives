// The build writes the site to dist/ and the result is valid HTML.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

test('build writes the home page and copies assets', () => {
  execSync('npm run build', { stdio: 'inherit' });
  assert.ok(existsSync('dist/index.html'));
  assert.ok(existsSync('dist/assets/logo/icons/icon-32.png'));
  assert.match(readFileSync('dist/index.html', 'utf8'), /<h1[^>]*>Lightening Lives<\/h1>/);
});

test('built html validates', () => {
  execSync('npx html-validate "dist/**/*.html"', { stdio: 'inherit' });
});
