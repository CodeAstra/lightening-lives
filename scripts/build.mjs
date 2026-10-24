// Builds the site into dist/: the stylesheet (Tailwind), the scripts (esbuild), then the pages (Eleventy).
//   npm run build   one-off build
//   npm run dev     rebuild on change and serve the site at http://localhost:8080
//   npm run pages   build, then add CNAME (site.json's domain) and .nojekyll for GitHub Pages
// The stylesheet and scripts are compiled into src/assets, which Eleventy copies to dist/assets.
import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';
import Eleventy from '@11ty/eleventy';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (p) => path.join(root, p);
const watch = process.argv.includes('--watch');
const serve = process.argv.includes('--serve');
const pages = process.argv.includes('--pages');

const css = { input: 'src/css/site.css', output: 'src/assets/css/site.css' };
// The page's behaviour, and the opening film (three.js), which the page fetches only when it will play.
const scripts = { site: 'src/js/site/main.js', 'site-scene': 'src/js/site/scene.js' };

function tailwind(watching) {
  const args = ['-i', at(css.input), '-o', at(css.output), '--minify'];
  // "always" keeps watching although stdin is closed, as it is when this script spawns it.
  if (watching) args.push('--watch=always');
  const child = spawn(at('node_modules/.bin/tailwindcss'), args, { cwd: root, stdio: ['ignore', 'inherit', 'inherit'] });
  if (watching) return Promise.resolve();
  return new Promise((resolve, reject) => {
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error('tailwindcss failed'))));
  });
}

// The type is self-hosted: copy each font file src/css/fonts.css names out of @fontsource-variable,
// into an emptied folder, so that a face no longer named is not published.
function fonts() {
  const sheet = at('src/css/fonts.css');
  if (!existsSync(sheet)) return;
  rmSync(at('src/assets/fonts'), { recursive: true, force: true });
  mkdirSync(at('src/assets/fonts'), { recursive: true });
  for (const [, file] of readFileSync(sheet, 'utf8').matchAll(/url\(\.\.\/fonts\/([\w-]+\.woff2)\)/g)) {
    const family = file.replace(/-latin.*$/, ''); // instrument-sans-latin-standard-normal.woff2 → instrument-sans
    copyFileSync(at(`node_modules/@fontsource-variable/${family}/files/${file}`), at(`src/assets/fonts/${file}`));
  }
}

// Every build starts from an empty dist/, so nothing removed from the site lingers in it.
rmSync(at('dist'), { recursive: true, force: true });
fonts();

if (existsSync(at(css.input))) {
  await tailwind(false);
  if (watch) await tailwind(true);
} else {
  console.log(`  Skipping the stylesheet: ${css.input} does not exist yet.`);
}

const entryPoints = Object.fromEntries(
  Object.entries(scripts).filter(([, file]) => existsSync(at(file))).map(([name, file]) => [name, at(file)]),
);
const missing = Object.values(scripts).filter((file) => !existsSync(at(file)));
if (missing.length) console.log(`  Skipping scripts that do not exist yet: ${missing.join(', ')}`);

if (Object.keys(entryPoints).length) {
  const context = await esbuild.context({
    entryPoints,
    outdir: at('src/assets/js'),
    bundle: true,
    minify: true,
    format: 'esm',
    target: ['es2020'],
    logLevel: 'info',
    // Images a script imports are inlined, so a canvas that draws them stays same-origin.
    loader: { '.png': 'dataurl' },
  });
  await context.rebuild();
  if (watch) await context.watch();
  else await context.dispose();
}

const eleventy = new Eleventy(at('src/site'), at('dist'), {
  configPath: at('eleventy.config.mjs'),
  runMode: serve ? 'serve' : watch ? 'watch' : 'build',
});
// write() would initialise Eleventy by itself; watch() does not, so do it first, as Eleventy's own CLI does.
await eleventy.init();

if (watch) {
  await eleventy.watch();
  if (serve) await eleventy.serve();
} else {
  await eleventy.write();
}

if (pages) {
  // The custom domain is the production one, site.json's domain (lighteninglives.in). The repo's own
  // CNAME file names the current preview of the designs and is left to it.
  const site = JSON.parse(readFileSync(at('src/site/_data/site.json'), 'utf8'));
  const domain = new URL(site.domain).host;
  writeFileSync(at('dist/CNAME'), `${domain}\n`);
  copyFileSync(at('.nojekyll'), at('dist/.nojekyll'));
  console.log(`\n  dist/ is ready for GitHub Pages, with CNAME (${domain}) and .nojekyll.\n`);
}
