// Builds the compiled CSS (Tailwind) and bundled JS (esbuild) that the HTML pages load from /assets.
//   npm run build   one-off production build
//   npm run dev     rebuild on change and serve the site at http://localhost:4173
//   npm run pages   build, then copy only the public site into dist/ for GitHub Pages
import { spawn } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as esbuild from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');
const serve = process.argv.includes('--serve');
const pages = process.argv.includes('--pages');
const at = (p) => path.join(root, p);

// Optional design names limit the build: `node scripts/build.mjs daylight`
const only = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
const wanted = (design) => only.length === 0 || only.includes(design);

// One stylesheet per design, so each page ships only its own CSS.
const styles = ['sample-card', 'daylight', 'scale', 'strand', 'tree', 'helix', 'sun-card', 'film'].filter((name) => wanted(name) && existsSync(at(`src/css/${name}.css`)));

// india-map and the two -scene bundles are split out because they carry three.js; their pages load them separately.
const scripts = [
  { name: 'sample-card', design: 'sample-card', file: 'src/js/sample-card/main.js' },
  { name: 'india-map', design: 'sample-card', file: 'src/js/sample-card/india-map.js' },
  { name: 'daylight', design: 'daylight', file: 'src/js/daylight/main.js' },
  { name: 'scale', design: 'scale', file: 'src/js/scale/main.js' },
  { name: 'scale-scene', design: 'scale', file: 'src/js/scale/scene.js' },
  { name: 'strand', design: 'strand', file: 'src/js/strand/main.js' },
  { name: 'strand-scene', design: 'strand', file: 'src/js/strand/scene.js' },
  { name: 'tree', design: 'tree', file: 'src/js/tree/main.js' },
  { name: 'tree-scene', design: 'tree', file: 'src/js/tree/scene.js' },
  { name: 'helix', design: 'helix', file: 'src/js/helix/main.js' },
  { name: 'helix-scene', design: 'helix', file: 'src/js/helix/scene.js' },
  { name: 'sun-card', design: 'sun-card', file: 'src/js/sun-card/main.js' },
  { name: 'film', design: 'film', file: 'src/js/film/main.js' },
];
const entryPoints = Object.fromEntries(
  scripts.filter((s) => wanted(s.design) && existsSync(at(s.file))).map((s) => [s.name, at(s.file)]),
);

function tailwind(name) {
  const args = ['-i', at(`src/css/${name}.css`), '-o', at(`assets/css/${name}.css`), '--minify'];
  if (watch) args.push('--watch');
  const bin = at('node_modules/.bin/tailwindcss');
  return new Promise((resolve, reject) => {
    const child = spawn(bin, args, { cwd: root, stdio: ['ignore', 'inherit', 'inherit'] });
    if (watch) return resolve();
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`tailwindcss failed for ${name}`))));
  });
}

const context = await esbuild.context({
  entryPoints,
  outdir: at('assets/js'),
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  legalComments: 'none',
  logLevel: 'info',
  // Images imported by a script are inlined. The Scale scene draws the logo into a WebGL texture,
  // and a canvas only stays usable for that if the image is same-origin, including under file://.
  loader: { '.png': 'dataurl' },
});

await Promise.all(styles.map(tailwind));

if (watch) {
  await context.watch();
  if (serve) {
    const { port } = await context.serve({ servedir: root, port: 4173 });
    console.log(`\n  Lightening Lives  http://localhost:${port}/\n`);
  }
} else {
  await context.rebuild();
  await context.dispose();
}

// GitHub Pages serves every file in the folder it is pointed at. dist/ holds the site and
// nothing else, so the brief, sources and tooling in this repo are not published with it.
if (pages) {
  const dist = at('dist');
  rmSync(dist, { recursive: true, force: true });
  mkdirSync(dist);
  for (const entry of ['index.html', 'sample-card.html', 'daylight.html', 'scale.html', 'strand.html', 'tree.html', 'helix.html', 'sun-card.html', 'film.html', 'assets', '.nojekyll']) {
    cpSync(at(entry), path.join(dist, entry), { recursive: true });
  }
  console.log('\n  Site copied to dist/\n');
}
