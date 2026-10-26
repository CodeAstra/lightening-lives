// Publishes the site to GitHub Pages (26 October 2026). Pages deploys from a branch, gh-pages, which
// holds only the built site (dist/), never the sources (no workflow of our own runs on GitHub).
//   npm run deploy               run the tests, build for Pages, push dist/ to the gh-pages branch
//   npm run deploy -- --dry-run  the same, but push nothing: says how many files it would publish
//   npm run deploy -- --skip-tests
// Pages takes its custom domain from the CNAME file in the branch, so a wrong one here moves the site.
// For now the site is the preview, lightening-lives.codeastra.com (package.json passes --domain);
// without --domain, dist/CNAME names site.json's domain (lighteninglives.in), so going live is
// dropping --domain once that domain's DNS points at GitHub Pages.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ghpages from 'gh-pages';

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

const branch = git('rev-parse', '--abbrev-ref', 'HEAD');
const commit = git('rev-parse', '--short', 'HEAD');
const changed = git('status', '--porcelain').split('\n').filter(Boolean).length;
if (changed) console.warn(`\n  Note: ${changed} uncommitted change${changed === 1 ? '' : 's'} will be published with ${commit}.\n`);

if (!skipTests) run('npm', ['test']);
run('node', ['scripts/build.mjs', '--pages']);
if (domain) writeFileSync(at('dist/CNAME'), `${domain}\n`);
for (const f of ['index.html', '404.html', 'CNAME', '.nojekyll']) {
  if (!existsSync(at(`dist/${f}`))) fail(`dist/${f} is missing, so nothing was published.`);
}
const host = readFileSync(at('dist/CNAME'), 'utf8').trim();

// The branch holds dist/ and nothing else. The first deploy starts gh-pages from a copy of the default
// branch, and gh-pages' own clean-up skips dotfiles, so .gitignore and the like would stay (and that
// .gitignore would then keep files out). Just before the files are added, anything not in dist/ goes.
const published = new Set(
  readdirSync(at('dist'), { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => path.relative(at('dist'), path.join(entry.parentPath, entry.name)).split(path.sep).join('/')),
);
let checkout = '';
const onlyDist = (repo) => {
  checkout = repo.cwd;
  const listed = execFileSync('git', ['ls-files', '-z', '--cached', '--others'], { cwd: repo.cwd, encoding: 'utf8' });
  const stray = [...new Set(listed.split('\0').filter(Boolean))].filter((f) => !published.has(f));
  for (const f of stray) rmSync(path.join(repo.cwd, f), { force: true });
  if (stray.length) execFileSync('git', ['rm', '-q', '-r', '--cached', '--ignore-unmatch', '--', ...stray], { cwd: repo.cwd });
};

const message = `Deploy ${commit}${changed ? ' with uncommitted changes' : ''} from ${branch}`;
process.chdir(root);
await new Promise((resolve, reject) => {
  // dotfiles: .nojekyll, without which Pages runs the site through Jekyll.
  const options = { branch: 'gh-pages', dotfiles: true, message, push: !dryRun, beforeAdd: onlyDist };
  ghpages.publish(at('dist'), options, (error) => (error ? reject(error) : resolve()));
}).catch((error) => {
  // A commit left unpushed in gh-pages' cache would stop the next deploy, so the cache goes.
  ghpages.clean();
  fail(`Publishing failed, nothing was pushed: ${error.message}`);
});

if (dryRun) {
  const files = execFileSync('git', ['ls-files'], { cwd: checkout, encoding: 'utf8' }).split('\n').filter(Boolean).length;
  ghpages.clean();
  console.log(`\n  Dry run: "${message}" would publish ${files} files for https://${host}/. Nothing was pushed.\n`);
} else {
  console.log(`\n  Pushed "${message}" to the gh-pages branch. GitHub Pages serves it at https://${host}/ in a minute or two.\n`);
}
