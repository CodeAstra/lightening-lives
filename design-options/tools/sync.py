#!/usr/bin/env python3
"""
Run after editing manifest.json or palettes.json:

    python3 tools/sync.py            (add --allow-missing while designs are still being built)

  1. validates both files,
  2. inlines them into index.html (browsers block fetch() of local JSON under file://),
  3. regenerates palette-sheet.html as static HTML,
  4. refreshes the palette AA table in README.md (between the palette-table markers).
"""
import html
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'tools'))
from check import VARS, PAIRS, check_palette, md_table, ratio  # noqa: E402

FAMILY_ORDER = ['Brand', 'Blue & navy', 'Teal', 'Green', 'Violet', 'Warm', 'Neutral']

manifest = json.loads((ROOT / 'manifest.json').read_text())
palettes = json.loads((ROOT / 'palettes.json').read_text())

problems = []
for d in manifest:
    for k in ('id', 'file', 'name', 'skill', 'rationale'):
        if not d.get(k):
            problems.append(f"manifest {d.get('id', '?')}: missing {k}")
    if d.get('file') and not (ROOT / d['file']).exists():
        msg = f"manifest {d['id']}: file {d['file']} does not exist"
        if '--allow-missing' in sys.argv:      # while designs are still being built
            print('  warn', msg)
        else:
            problems.append(msg)
    if d.get('palette') and not any(p['id'] == d['palette'] for p in palettes):
        problems.append(f"manifest {d['id']}: palette {d['palette']} not in palettes.json")
for p in palettes:
    errs, _ = check_palette(p.get('vars', {}), p.get('id', '?'))
    problems += errs
if problems:
    print('Not synced:')
    for e in problems:
        print('  -', e)
    sys.exit(1)


def inline(src, name, data):
    blob = json.dumps(data, ensure_ascii=False, indent=1).replace('</', '<\\/')
    block = (f'<!-- data:{name}:start -->\n<script type="application/json" id="ll-{name}">{blob}</script>\n'
             f'<!-- data:{name}:end -->')
    pat = re.compile(rf'<!-- data:{name}:start -->.*?<!-- data:{name}:end -->', re.S)
    if not pat.search(src):
        sys.exit(f'index.html: data:{name} markers not found')
    return pat.sub(lambda _: block, src)


index = ROOT / 'index.html'
src = index.read_text(encoding='utf-8')
src = inline(src, 'manifest', manifest)
src = inline(src, 'palettes', palettes)
index.write_text(src, encoding='utf-8')
print(f'index.html        {len(manifest)} designs, {len(palettes)} palettes inlined')

# ---------------------------------------------------------------------------------------------------
# palette-sheet.html
# ---------------------------------------------------------------------------------------------------
e = html.escape
design_by_id = {d['id']: d for d in manifest}


def row(p):
    v = p['vars']
    style = ';'.join(f'{k}:{v[k]}' for k in VARS)
    _, rows = check_palette(v, p['id'])
    sw = ''.join(
        f'<li><span class="chip" style="background:{v[k]}"></span><code>{k}</code><code class="hex">{v[k].upper()}</code></li>'
        for k in VARS)
    aa = ''.join(
        f'<li class="{"ok" if ok else "bad"}"><span>{fg[2:]} on {bg[2:]}{"" if req else " *"}</span>'
        f'<b>{r:.2f}</b><i>{"AA" if ok else "fail"}</i></li>' for fg, bg, r, ok, req in rows)
    d = design_by_id.get(p.get('design') or '')
    owner = (f'<a href="index.html#{d["id"]}">Design {d["id"]} · {e(d["name"])}</a>' if d else 'Reference palette')
    try_links = ' '.join(f'<a href="index.html#{x["id"]}/{p["id"]}" title="{e(x["name"])} in this palette">{x["id"]}</a>'
                         for x in manifest)
    return f'''
<section class="pal" id="{e(p['id'])}" style="{style}">
  <header class="pal-head">
    <div>
      <p class="fam">{e(p['family'])}</p>
      <h2>{e(p['name'])}</h2>
      <p class="owner">{owner}</p>
    </div>
    <p class="why">{e(p['rationale'])}</p>
    <p class="try"><span>View a layout in this palette</span> {try_links}</p>
  </header>
  <ul class="swatches">{sw}</ul>
  <div class="strip">
    <div class="demo">
      <h3 class="d-h">Extraction-free genetic screening</h3>
      <p class="d-p">One drop of blood on a card. Results in under 24 hours. <span class="d-m">Built for laboratories and public-health programmes at scale.</span></p>
      <p class="d-actions"><span class="d-btn">Request a kit</span><span class="d-btn2">Talk to us</span><a class="d-link" href="#{e(p['id'])}">See the full workflow</a></p>
    </div>
    <div class="demo alt">
      <div class="d-card"><span class="d-dot"></span><h4>Sickle Cell Anaemia screening kit</h4><p>ICMR certified. Developed under an MOU with CCMB, Hyderabad.</p><a class="d-link" href="#{e(p['id'])}">View kit</a></div>
      <table class="d-table"><thead><tr><th>Kit</th><th>Status</th></tr></thead>
        <tbody><tr><td>Sickle Cell Anaemia</td><td>ICMR certified</td></tr><tr><td>Thalassaemia</td><td class="d-m">—</td></tr></tbody></table>
    </div>
  </div>
  <ul class="aa">{aa}</ul>
</section>'''


by_family = sorted(palettes, key=lambda p: (FAMILY_ORDER.index(p['family']) if p['family'] in FAMILY_ORDER else 99))
toc = ''.join(f'<a href="#{e(p["id"])}"><i style="background:{p["vars"]["--primary"]}"></i>{e(p["name"])}</a>' for p in by_family)
sheet = f'''<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Palette sheet — Lightening Lives design options</title>
<!-- Generated by tools/sync.py from palettes.json. Do not edit by hand. -->
<style>
  :root{{--c:#FFFFFF;--c-alt:#F4F5F7;--c-ink:#14181D;--c-muted:#5A6470;--c-line:#D9DDE3;--c-accent:#1F4FD8;
    --font:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;--mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}}
  *{{box-sizing:border-box}} html{{scroll-behavior:smooth}} body{{margin:0;font:15px/1.5 var(--font);color:var(--c-ink);background:var(--c-alt)}}
  a{{color:var(--c-accent)}} :focus-visible{{outline:2px solid var(--c-accent);outline-offset:2px}}
  .top{{background:var(--c);border-bottom:1px solid var(--c-line);padding:22px clamp(16px,4vw,40px)}}
  .top h1{{margin:0 0 4px;font-size:22px;letter-spacing:-.01em}} .top p{{margin:0;color:var(--c-muted);max-width:80ch}}
  .toc{{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}}
  .toc a{{display:inline-flex;align-items:center;gap:7px;padding:5px 10px;border:1px solid var(--c-line);border-radius:999px;background:var(--c);color:var(--c-ink);text-decoration:none;font-size:13px}}
  .toc i{{width:12px;height:12px;border-radius:50%;display:block}}
  main{{padding:clamp(16px,4vw,40px);display:grid;gap:28px;max-width:1240px;margin:0 auto}}
  .pal{{background:var(--c);border:1px solid var(--c-line);border-radius:14px;overflow:hidden;scroll-margin-top:16px}}
  .pal-head{{display:grid;grid-template-columns:minmax(200px,1fr) 2fr;gap:6px 28px;padding:20px 22px;border-bottom:1px solid var(--c-line)}}
  .fam{{margin:0;font:600 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--c-muted)}}
  .pal h2{{margin:6px 0 2px;font-size:20px;letter-spacing:-.01em}} .owner{{margin:0;font-size:13px}} .why{{margin:0;color:var(--c-muted)}}
  .try{{grid-column:2;margin:4px 0 0;font-size:13px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}} .try span{{color:var(--c-muted);margin-right:4px}}
  .try a{{font:600 12px/1 var(--mono);padding:5px 7px;border:1px solid var(--c-line);border-radius:6px;text-decoration:none;color:var(--c-ink)}} .try a:hover{{border-color:var(--c-ink)}}
  .swatches{{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(8,1fr)}}
  .swatches li{{padding:0 0 10px;border-right:1px solid var(--c-line);font-size:12px;display:grid;gap:2px}} .swatches li:last-child{{border-right:0}}
  .chip{{display:block;height:64px;border-bottom:1px solid var(--c-line);margin-bottom:8px}}
  .swatches code{{font:12px/1.3 var(--mono);padding:0 10px}} .swatches .hex{{color:var(--c-muted)}}
  .strip{{display:grid;grid-template-columns:1.15fr 1fr;border-top:1px solid var(--c-line)}}
  .demo{{background:var(--bg);color:var(--ink);padding:26px 24px;display:flex;flex-direction:column;justify-content:center}} .demo.alt{{background:var(--bg-alt);display:grid;gap:16px;align-content:center}}
  .d-h{{margin:0 0 10px;font-size:28px;line-height:1.12;letter-spacing:-.02em;font-weight:650}}
  .d-p{{margin:0 0 18px;max-width:52ch;font-size:16px}} .d-m{{color:var(--muted)}}
  .d-actions{{margin:0;display:flex;flex-wrap:wrap;gap:10px 14px;align-items:center}}
  .d-btn,.d-btn2{{display:inline-block;padding:10px 16px;border-radius:8px;font-weight:600;font-size:14px}}
  .d-btn{{background:var(--primary);color:var(--primary-ink);border:1px solid var(--primary)}}
  .d-btn2{{background:transparent;color:var(--primary);border:1px solid var(--primary)}}
  .d-link{{color:var(--primary);font-weight:600;font-size:14px;text-underline-offset:3px}}
  .d-card{{background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:16px 16px 14px;position:relative}}
  .d-card h4{{margin:0 0 4px;font-size:15px}} .d-card p{{margin:0 0 8px;color:var(--muted);font-size:14px}}
  .d-dot{{position:absolute;right:14px;top:14px;width:12px;height:12px;border-radius:50%;background:var(--accent)}}
  .d-table{{width:100%;border-collapse:collapse;font-size:14px;background:var(--bg)}}
  .d-table th{{text-align:left;background:var(--primary);color:var(--primary-ink);padding:8px 12px;font-weight:600}}
  .d-table td{{padding:8px 12px;border-bottom:1px solid var(--line)}}
  .aa{{list-style:none;margin:0;padding:14px 22px;display:flex;flex-wrap:wrap;gap:8px;border-top:1px solid var(--c-line);background:var(--c-alt)}}
  .aa li{{display:inline-flex;align-items:center;gap:8px;padding:5px 9px;border:1px solid var(--c-line);border-radius:7px;background:var(--c);font-size:12.5px}}
  .aa b{{font:600 12.5px/1 var(--mono)}} .aa i{{font-style:normal;font:600 11px/1 var(--mono);padding:3px 5px;border-radius:4px;background:#E4F3E8;color:#14532D}}
  .aa .bad i{{background:#FBE3E1;color:#8A1C12}}
  .note{{color:var(--c-muted);font-size:13px;margin:0}}
  @media (max-width:820px){{.pal-head{{grid-template-columns:1fr}} .try{{grid-column:1}} .swatches{{grid-template-columns:repeat(4,1fr)}} .swatches li:nth-child(4){{border-right:0}} .strip{{grid-template-columns:1fr}} .chip{{height:48px}}}}
  @media (prefers-reduced-motion:reduce){{html{{scroll-behavior:auto}}}}
</style>
</head>
<body>
<header class="top">
  <h1>Palette sheet</h1>
  <p>Every palette in <code>palettes.json</code>, each shown as its eight variables, a strip of components drawn only from those variables, and its WCAG contrast results. Any palette can be applied to any layout from the <a href="index.html">comparison page</a>.</p>
  <nav class="toc" aria-label="Palettes">{toc}</nav>
</header>
<main>
{''.join(row(p) for p in by_family)}
<p class="note">* extra checks beyond the five pairs the brief requires. AA for body text is 4.5:1. <code>--accent</code> is decorative in every layout and is never used for text, so it carries no contrast requirement.</p>
</main>
</body>
</html>
'''
(ROOT / 'palette-sheet.html').write_text(sheet, encoding='utf-8')
print(f'palette-sheet.html {len(palettes)} palettes')

# ---------------------------------------------------------------------------------------------------
# README palette table
# ---------------------------------------------------------------------------------------------------
readme = ROOT / 'README.md'
if readme.exists():
    txt = readme.read_text(encoding='utf-8')
    pat = re.compile(r'<!-- palette-table:start -->.*?<!-- palette-table:end -->', re.S)
    if pat.search(txt):
        table = md_table(by_family)
        txt = pat.sub(lambda _: f'<!-- palette-table:start -->\n{table}\n<!-- palette-table:end -->', txt)
        readme.write_text(txt, encoding='utf-8')
        print('README.md         palette table refreshed')
