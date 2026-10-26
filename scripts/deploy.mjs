// Gets the site ready to publish (26 October 2026). GitHub Actions stays off (the client's choice), so
// GitHub Pages publishes the branch's files as they are, from chores/website-revamp's docs/ folder.
// This runs the tests, builds for Pages and puts the built site in docs/; the user then commits and
// pushes, and the push is the deploy.
//   npm run deploy               test, build, then replace docs/ with the new site
//   npm run deploy -- --dry-run  test and build, but leave docs/ as it is
//   npm run deploy -- --skip-tests
// Pages takes its custom domain from docs/CNAME, so a wrong one here moves the site. For now it is the
// preview, lightening-lives.codeastra.com (package.json passes --domain); without --domain, CNAME names
// site.json's domain (lighteninglives.in), so going live is dropping --domain once that domain's DNS
// points at GitHub Pages.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { publish } from './publish-docs.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (p) => path.join(root, p);
const option = (name) => {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
};
const domain = option('--domain');
const dryRun = process.argv.includes('--dry-run');
const skipTests = process.argv.includes('--skip-tests');
const fail = (message) => {
  console.error(`\n  ${message}\n`);
  process.exit(1);
};
const run = (cmd, args) => execFileSync(cmd, args, { cwd: root, stdio: 'inherit' });
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();

if (domain !== undefined && !/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(domain)) {
  fail(`--domain needs a host name, such as lightening-lives.codeastra.com (got "${domain ?? ''}").`);
}

// The dev server (npm run dev, port 8080) writes to dist/ as well: a build beside it drops files.
const listening = (port) =>
  new Promise((resolve) => {
    const socket = net.connect({ port, host: 'localhost' });
    socket.setTimeout(1000, () => { socket.destroy(); resolve(false); });
    socket.once('connect', () => { socket.destroy(); resolve(true); });
    socket.once('error', () => resolve(false));
  });
if (await listening(8080)) fail('Stop the dev server (npm run dev) first: it writes to dist/ as well, and a build beside it drops files.');

if (!skipTests) run('npm', ['test']);
run('node', ['scripts/build.mjs', '--pages']);
if (domain) writeFileSync(at('dist/CNAME'), `${domain}\n`);
for (const f of ['index.html', '404.html', 'CNAME', '.nojekyll']) {
  if (!existsSync(at(`dist/${f}`))) fail(`dist/${f} is missing, so nothing was published.`);
}
const host = readFileSync(at('dist/CNAME'), 'utf8').trim();

if (dryRun) {
  console.log(`\n  Dry run: the build for https://${host}/ is in dist/; docs/ is unchanged.\n`);
} else {
  const files = publish({ root, from: 'dist', to: 'docs' });
  const commit = git('rev-parse', '--short', 'HEAD');
  console.log(`\n  docs/ now holds the site for https://${host}/ (${files} files), built from ${commit}.`);
  console.log('  Review, then commit and push; GitHub Pages serves it a minute or two after the push:');
  console.log(`    git add -A docs && git commit -m "Deploy ${commit}" && git push\n`);
}
