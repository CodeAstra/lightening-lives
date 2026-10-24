// Serves dist/ as GitHub Pages does, for measuring the built site (Lighthouse, axe): text gzipped, a
// ten-minute cache, a folder's index.html, and 404.html (with status 404) for an address with no file.
//   npm run build && node scripts/serve.mjs [port]      (default 8080)
import { createServer } from 'node:http';
import { readFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import path from 'node:path';

const dist = path.resolve('dist');
const port = Number(process.argv[2] || 8080);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.md': 'text/markdown; charset=utf-8' };
const TEXT = /^(text\/|application\/(json|xml|manifest)|image\/svg)/;

createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = path.join(dist, path.normalize(pathname).replace(/^(\.\.[/\\])+/, ''));
  let status = 200;
  try { if (statSync(file).isDirectory()) file = path.join(file, 'index.html'); statSync(file); } catch { file = path.join(dist, '404.html'); status = 404; }
  const type = TYPES[path.extname(file)] || 'application/octet-stream';
  let body = readFileSync(file);
  const headers = { 'content-type': type, 'cache-control': 'max-age=600' };
  if (TEXT.test(type) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) { body = gzipSync(body); headers['content-encoding'] = 'gzip'; headers.vary = 'Accept-Encoding'; }
  res.writeHead(status, headers);
  res.end(req.method === 'HEAD' ? undefined : body);
}).listen(port, '127.0.0.1', () => console.log(`dist/ at http://127.0.0.1:${port}/`));
