#!/usr/bin/env node
/*
  Screenshot + responsive-overflow tool. No dependencies: drives headless Chrome over the DevTools protocol.

    node tools/shots.mjs <design.html> <out-dir> [--widths 390,1280] [--overflow 360,390,820,1280,1440]
                         [--palette <palette-id>] [--seg 1500] [--no-shots]

  For each width it loads the page, scrolls through it once (so scroll-triggered reveals fire),
  then captures the full page as numbered segments:   <name>-w1280-1.png, -2.png …
  Narrow widths (< 700px) are also combined into contact sheets: <name>-w390-sheet-1.png …
  For every --overflow width it reports horizontal overflow and the elements that cause it.
  --palette applies an entry from palettes.json through the same postMessage bridge index.html uses.
*/
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BOOLEAN = new Set(['no-shots']);
const opts = {}; const positional = [];
for (let i = 2; i < process.argv.length; i++) {
  const a = process.argv[i];
  if (!a.startsWith('--')) { positional.push(a); continue; }
  const key = a.slice(2);
  if (BOOLEAN.has(key)) opts[key] = true; else opts[key] = process.argv[++i];
}
const flag = (n, d) => (n in opts ? opts[n] : d);
const has = n => opts[n] === true;
const [fileArg, outDir] = positional;
const [file, hash = ''] = (fileArg || '').split('#');   // index.html#03/daybreak is allowed
const isRemote = /^https?:\/\//.test(file);            // also accepts an http(s) URL, to test a deployed copy
if (!file || !outDir) { console.error('usage: shots.mjs <design.html> <out-dir> [options]'); process.exit(2); }

const widths = flag('widths', '390,1280').split(',').map(Number);
const overflowWidths = flag('overflow', '360,390,820,1280,1440').split(',').map(Number);
const SEG = Number(flag('seg', 1500));
const paletteId = flag('palette', null);
const name = path.basename(file, '.html') + (hash ? '@' + hash.replace(/\//g, '_') : '') + (paletteId ? '@' + paletteId : '');
mkdirSync(outDir, { recursive: true });

let paletteVars = null;
if (paletteId) {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const all = JSON.parse(readFileSync(path.join(here, '..', 'palettes.json'), 'utf8'));
  const p = all.find(x => x.id === paletteId);
  if (!p) { console.error('no palette ' + paletteId); process.exit(2); }
  paletteVars = p.vars;
}

const profile = mkdtempSync(path.join(tmpdir(), 'll-shots-'));
const chrome = spawn(CHROME, ['--headless=new', '--remote-debugging-port=0', '--user-data-dir=' + profile,
  '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--disable-gpu', '--force-device-scale-factor=1',
  '--allow-file-access-from-files', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });

const wsUrl = await new Promise((res, rej) => {
  let buf = '';
  const t = setTimeout(() => rej(new Error('Chrome did not start')), 20000);
  chrome.stderr.on('data', d => {
    buf += d;
    const m = buf.match(/DevTools listening on (ws:\/\/[^\s]+)/);
    if (m) { clearTimeout(t); res(m[1]); }
  });
});
const port = new URL(wsUrl).port;
const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
const page = targets.find(t => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));

let seq = 0; const pending = new Map(); const waiters = [];
ws.addEventListener('message', ev => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) { const { res, rej } = pending.get(msg.id); pending.delete(msg.id); msg.error ? rej(new Error(msg.error.message)) : res(msg.result); }
  else if (msg.method) { for (let i = waiters.length - 1; i >= 0; i--) if (waiters[i].method === msg.method) { waiters[i].res(msg.params); waiters.splice(i, 1); } }
});
const send = (method, params = {}) => new Promise((res, rej) => { const id = ++seq; pending.set(id, { res, rej }); ws.send(JSON.stringify({ id, method, params })); });
const once = method => new Promise(res => waiters.push({ method, res }));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const evaluate = async expr => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result.value;

await send('Page.enable'); await send('Runtime.enable');
const consoleErrors = [];
ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.method === 'Runtime.exceptionThrown') consoleErrors.push(m.params.exceptionDetails.text + ' ' + (m.params.exceptionDetails.exception?.description || '')); });

async function load(width, height) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 700 });
  if (hash) {   // a repeat visit to the same URL + fragment is a same-document navigation and fires no load event
    const blank = once('Page.loadEventFired');
    await send('Page.navigate', { url: 'about:blank' });
    await Promise.race([blank, sleep(5000)]);
  }
  const loaded = once('Page.loadEventFired');
  await send('Page.navigate', { url: (isRemote ? file : pathToFileURL(path.resolve(file)).href) + (hash ? '#' + hash : '') });
  await Promise.race([loaded, sleep(20000)]);
  if (hash) await sleep(1500);   // let an embedded design load inside the comparison page
  await evaluate('document.fonts ? document.fonts.ready.then(()=>true) : true');
  if (paletteVars) {
    await evaluate(`window.postMessage({type:'ll:palette',vars:${JSON.stringify(paletteVars)}},'*'); true`);
  }
  await sleep(500);
  // walk the page once so IntersectionObserver-driven reveals run, then return to the top
  await evaluate(`(async()=>{const h=document.documentElement.scrollHeight,s=Math.max(200,innerHeight*0.8);
    for(let y=0;y<h;y+=s){window.scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,90));}
    window.scrollTo({top:0,behavior:'instant'});await new Promise(r=>setTimeout(r,700));return true})()`);
}

const report = { file: name, overflow: {}, heights: {}, consoleErrors };

for (const w of overflowWidths) {
  await load(w, w < 700 ? 800 : 900);
  const r = await evaluate(`(()=>{const vw=document.documentElement.clientWidth,sw=document.documentElement.scrollWidth;
    const bad=[];if(sw>vw+1){for(const el of document.querySelectorAll('body *')){const b=el.getBoundingClientRect();
      if(b.width>0&&(b.right>vw+1||b.left<-1)){const cs=getComputedStyle(el);if(cs.position==='fixed')continue;
        let p=el.parentElement,clipped=false;while(p&&p!==document.body){const o=getComputedStyle(p);if(/(hidden|auto|scroll|clip)/.test(o.overflowX)){clipped=true;break;}p=p.parentElement;}
        if(!clipped)bad.push(el.tagName.toLowerCase()+(el.id?'#'+el.id:'')+(el.className&&el.className.baseVal===undefined?'.'+String(el.className).trim().split(/\\s+/).join('.'):'')+' right='+Math.round(b.right));}}}
    return {vw,sw,bad:bad.slice(0,8)}})()`);
  report.overflow[w] = r.sw > r.vw + 1 ? { scrollWidth: r.sw, viewport: r.vw, offenders: r.bad } : 'ok';
}

if (!has('no-shots')) {
  for (const w of widths) {
    await load(w, w < 700 ? 844 : 800);
    const h = await evaluate('Math.ceil(document.documentElement.scrollHeight)');
    report.heights[w] = h;
    const segH = w < 700 ? 2200 : SEG;
    const files = [];
    for (let y = 0, i = 1; y < h; y += segH, i++) {
      const hh = Math.min(segH, h - y);
      const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y, width: w, height: hh, scale: 1 } });
      const f = path.join(outDir, `${name}-w${w}-${i}.png`);
      writeFileSync(f, Buffer.from(shot.data, 'base64')); files.push(f);
    }
    if (w < 700) { // contact sheets: four segments side by side
      for (let s = 0, n = 1; s < files.length; s += 4, n++) {
        const group = files.slice(s, s + 4);
        const html = `<body style="margin:0;background:#888;display:flex;gap:16px;padding:16px;align-items:flex-start">` +
          group.map(f => `<img src="${pathToFileURL(f).href}" style="display:block">`).join('') + `</body>`;
        const sheetHtml = path.join(profile, `sheet-${w}-${n}.html`); writeFileSync(sheetHtml, html);
        const sw = group.length * w + (group.length + 1) * 16, sh = segH + 32;
        await send('Emulation.setDeviceMetricsOverride', { width: sw, height: sh, deviceScaleFactor: 1, mobile: false });
        const loaded = once('Page.loadEventFired');
        await send('Page.navigate', { url: pathToFileURL(sheetHtml).href }); await loaded; await sleep(300);
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        writeFileSync(path.join(outDir, `${name}-w${w}-sheet-${n}.png`), Buffer.from(shot.data, 'base64'));
      }
    }
  }
}

console.log(JSON.stringify(report, null, 2));
ws.close(); chrome.kill();
await sleep(300);
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);
