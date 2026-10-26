// Puts the built site (dist/) into docs/, the folder GitHub Pages serves from chores/website-revamp
// (26 October 2026; npm run deploy, tests/deploy.test.mjs). Everything in docs/ but the kept entries
// (the local plans, docs/superpowers/) is the previous site, so it is removed before the new one is
// copied in. The target must be a folder inside the repository, and the build must have a home page;
// otherwise nothing is touched.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const countFiles = (dir) =>
  readdirSync(dir, { recursive: true, withFileTypes: true }).filter((entry) => entry.isFile()).length;

export function publish({ root, from, to, keep = ['superpowers'] }) {
  const source = path.resolve(root, from);
  const target = path.resolve(root, to);
  const inside = path.relative(root, target);
  if (!inside || inside.startsWith('..') || path.isAbsolute(inside)) {
    throw new Error(`The site goes into a folder inside the repository, not "${to}".`);
  }
  if (!existsSync(path.join(source, 'index.html'))) {
    throw new Error(`${from}/index.html is missing: the build did not finish, so nothing was published.`);
  }
  mkdirSync(target, { recursive: true });
  for (const name of readdirSync(target)) {
    if (!keep.includes(name)) rmSync(path.join(target, name), { recursive: true, force: true });
  }
  for (const name of readdirSync(source)) {
    cpSync(path.join(source, name), path.join(target, name), { recursive: true });
  }
  return countFiles(source);
}
