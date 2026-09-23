#!/usr/bin/env python3
"""
Design-options checker.

  python3 tools/check.py                    check palettes.json + every file in designs/
  python3 tools/check.py designs/01-*.html  check named design files only
  python3 tools/check.py --palettes         check palettes.json only
  python3 tools/check.py --table            print the palette AA table as Markdown

Checks, per design file
  - the :root palette block holds exactly the eight variables and nothing else
  - no colour value exists anywhere outside that block (hex, rgb(), hsl(), named colours)
  - backgrounds are light (relative luminance of --bg and --bg-alt > 0.85)
  - WCAG AA (4.5:1) on the five required pairs, plus two stricter extras
  - one <h1>, no skipped heading levels, lang="en-IN", design-rationale meta, skip link
  - every home-page section id is present
  - approved copy is present; banned words, pricing and B2C language are absent
  - self-contained: no external resources except Google Fonts
  - the palette bridge (postMessage listener) is present

Exit code is 1 if any check fails.
"""
import json
import pathlib
import re
import sys
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent.parent
VARS = ['--bg', '--bg-alt', '--ink', '--muted', '--primary', '--primary-ink', '--accent', '--line']

# (foreground, background, minimum ratio, required by the brief?)
PAIRS = [
    ('--ink', '--bg', 4.5, True),
    ('--ink', '--bg-alt', 4.5, True),
    ('--muted', '--bg', 4.5, True),
    ('--primary-ink', '--primary', 4.5, True),
    ('--primary', '--bg', 4.5, True),
    ('--muted', '--bg-alt', 4.5, False),    # extra: muted text sits on alternate sections too
    ('--primary', '--bg-alt', 4.5, False),  # extra: links sit on alternate sections too
]

SECTION_IDS = ['hero', 'description', 'why', 'products', 'how', 'numbers',
               'collaborations', 'audiences', 'team', 'updates', 'contact']

REQUIRED_TEXT = [
    'Extraction-free genetic screening',
    'One drop. One day.',
    'Request a kit',
    'Talk to us',
    'research-oriented and innovation-driven molecular diagnostics organisation',
    'rapid, affordable, scalable, extraction-free, highly accurate diagnostic solutions',
    'One-drop blood-based test',
    'Extraction-free genetic testing',
    'Rapid turnaround',
    'Affordable and accessible testing',
    'Minimal laboratory infrastructure',
    'High-throughput screening',
    'Automation-friendly workflow',
    'Designed for large-scale public-health programmes',
    '1,000 samples in under 24 hours',
    'ICMR',
    'CCMB',
    'admin@lighteninglives.in',
    '+91 91825 88191',
    'D-306, Sy. No. 117, Indu Aranya Pallavi GSI (SR), Bandlaguda, Hayathnagar, Hyderabad',
    'Flat No. 201, 2nd Floor, S B Hare Krishna Towers, H.No. 4-7-195/2/55, HMT Nagar, Nacharam, Hyderabad',
    'Sickle Cell Anaemia',
]

BANNED = [
    (r'\bhope\w*', 'banned word "hope"'),
    (r'\bjourney\w*', 'banned word "journey"'),
    (r'\bpassion\w*', 'banned word "passion"'),
    (r'\brevolution\w*', 'banned word "revolutionary"'),
    (r'\bworld[- ]class\b', 'banned phrase "world-class"'),
    (r'!', 'exclamation mark in copy'),
    (r'₹|\bRs\.?\s?\d|\bINR\b', 'pricing'),
    (r'\bdonat\w*|\bcharit\w*|\bfundrais\w*|\bnon-?profit\b', 'charity language'),
    (r'\border (a|your) test\b|\bbuy now\b|\badd to (cart|basket)\b|\bbook a test\b', 'B2C ordering language'),
    (r'\borganization\b|\bprogram\b(?!me)|\banemia\b|\bhemophilia\b|\bcenter\b', 'US spelling'),
]
# proper names that legitimately carry US spelling
SPELLING_ALLOW = ['Thalassemia & Sickle Cell Society', 'Thalassemia &amp; Sickle Cell Society',
                  'Indigenous Development Organization', 'Tata Steel Foundation']

NAMED = set('''aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown
burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod
darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen
darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue
firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew
hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan
lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray
lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid
mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream
mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen
paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue
saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen
steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen'''.split())

COLOUR_PROPS = re.compile(
    r'^(color|background|background-color|background-image|border|border-(top|right|bottom|left|block|inline)'
    r'(-(start|end))?(-color)?|border-color|outline|outline-color|box-shadow|text-shadow|fill|stroke|stop-color|'
    r'flood-color|lighting-color|caret-color|accent-color|text-decoration|text-decoration-color|column-rule|'
    r'column-rule-color|filter|backdrop-filter|-webkit-text-stroke|-webkit-text-stroke-color|-webkit-text-fill-color|'
    r'-webkit-tap-highlight-color|scrollbar-color|mask|mask-image|-webkit-mask|-webkit-mask-image|--[\w-]+)$')
SVG_COLOUR_ATTRS = ['fill', 'stroke', 'stop-color', 'flood-color', 'lighting-color', 'color']
HEX = re.compile(r'#[0-9a-fA-F]{3,8}\b')
FUNC = re.compile(r'\b(rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\(', re.I)


def lum(hexv):
    h = hexv.lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    ch = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    lin = [c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4 for c in ch]
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]


def ratio(a, b):
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def hue(hexv):
    import colorsys
    h = hexv.lstrip('#')
    r, g, b = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    hh, s, v = colorsys.rgb_to_hsv(r, g, b)
    return hh * 360, s, v


def is_green(hexv):
    h, s, _ = hue(hexv)
    return s > 0.25 and 85 <= h <= 165


def check_palette(vars_, label):
    errs, rows = [], []
    for k in VARS:
        if k not in vars_:
            errs.append(f'{label}: missing {k}')
    extra = [k for k in vars_ if k not in VARS]
    if extra:
        errs.append(f'{label}: unexpected variables {extra}')
    if errs:
        return errs, rows
    for k in VARS:
        if not re.fullmatch(r'#[0-9a-fA-F]{6}', vars_[k]):
            errs.append(f'{label}: {k} must be a 6-digit hex value, got {vars_[k]!r}')
    if errs:
        return errs, rows
    for k in ('--bg', '--bg-alt'):
        if lum(vars_[k]) <= 0.85:
            errs.append(f'{label}: {k} {vars_[k]} luminance {lum(vars_[k]):.3f} is not > 0.85 (light only)')
    for fg, bg, need, required in PAIRS:
        r = ratio(vars_[fg], vars_[bg])
        rows.append((fg, bg, r, r >= need, required))
        if r < need:
            errs.append(f'{label}: {fg[2:]} on {bg[2:]} = {r:.2f}:1, needs {need}:1'
                        + ('' if required else ' (extra check)'))
    return errs, rows


class Doc(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.headings, self.ids, self.text = [], set(), []
        self.lang = None
        self.metas = {}
        self.external, self.inline_styles, self.svg_colours = [], [], []
        self.imgs = []
        self._skip = 0
        self.links = []
        self.h1 = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('script', 'style'):
            self._skip += 1
        if tag == 'html':
            self.lang = a.get('lang')
        if tag == 'meta' and a.get('name'):
            self.metas[a['name']] = a.get('content', '')
        if re.fullmatch(r'h[1-6]', tag):
            self.headings.append(int(tag[1]))
            if tag == 'h1':
                self.h1 += 1
        if 'id' in a:
            self.ids.add(a['id'])
        if 'style' in a:
            self.inline_styles.append(a['style'])
        for k in SVG_COLOUR_ATTRS:
            if k in a:
                self.svg_colours.append((tag, k, a[k]))
        for k in ('src', 'href', 'poster', 'data', 'srcset'):
            v = a.get(k)
            if v and re.match(r'^(https?:)?//', v):
                self.external.append((tag, k, v))
        if tag == 'img':
            self.imgs.append(a)
        if tag == 'a':
            self.links.append(a)

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self._skip -= 1

    def handle_data(self, data):
        if self._skip == 0:
            self.text.append(data)


def scan_value(prop, val, where, errs):
    v = re.sub(r'url\([^)]*\)', '', val)
    for m in HEX.findall(v):
        errs.append(f'colour literal {m} in {where} ({prop})')
    for m in FUNC.finditer(v):
        fn = m.group(1).lower()
        if fn == 'color' and 'color-mix(' in v[max(0, m.start() - 0):m.start() + 10]:
            continue
        errs.append(f'colour function {fn}() in {where} ({prop})')
    # Quoted strings are never colours: font families legitimately contain colour words
    # ("Red Hat Display"), so they are removed before the named-colour scan.
    stripped = re.sub(r'"[^"]*"|\'[^\']*\'', '', v)
    stripped = re.sub(r'var\([^)]*\)', '', stripped)
    for word in re.findall(r'[a-zA-Z]+', stripped):
        if word.lower() in NAMED:
            errs.append(f'named colour "{word}" in {where} ({prop}: {val.strip()[:60]})')


def check_design(path):
    errs, warns = [], []
    src = path.read_text(encoding='utf-8')

    # --- palette block ---------------------------------------------------
    m = re.search(r'/\*\s*palette:start.*?\*/(.*?)/\*\s*palette:end\s*\*/', src, re.S)
    vars_ = {}
    if not m:
        errs.append('palette block markers /* palette:start */ … /* palette:end */ not found')
        body = src
    else:
        block = m.group(1)
        if not re.match(r'\s*:root\s*\{', block):
            errs.append('palette block must be a single :root{…} rule')
        for k, v in re.findall(r'(--[\w-]+)\s*:\s*([^;]+);', block):
            vars_[k] = v.strip()
        body = src[:m.start()] + src[m.end():]
    pal_errs, rows = check_palette(vars_, 'palette') if vars_ else (['palette: no variables found'], [])
    errs += pal_errs

    # --- no colour values outside the palette block ----------------------
    for css in re.findall(r'<style[^>]*>(.*?)</style>', body, re.S):
        css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
        for prop, val in re.findall(r'(?<![\w-])(--[\w-]+|-?[a-zA-Z][\w-]*)\s*:\s*([^;{}]+)', css):
            if COLOUR_PROPS.match(prop.lower()):
                scan_value(prop, val, '<style>', errs)
            if prop in VARS:
                errs.append(f'{prop} is redefined outside the palette block')
    doc = Doc()
    doc.feed(src)
    for st in doc.inline_styles:
        for prop, val in re.findall(r'(--[\w-]+|-?[a-zA-Z][\w-]*)\s*:\s*([^;]+)', st):
            if COLOUR_PROPS.match(prop.lower()):
                scan_value(prop, val, 'style attribute', errs)
    for tag, k, v in doc.svg_colours:
        vv = v.strip()
        if vv.lower() in ('none', 'currentcolor', 'transparent', 'inherit', 'context-fill', 'context-stroke'):
            continue
        if vv.startswith('var(') or vv.startswith('url(') or vv.startswith('color-mix('):
            scan_value(k, vv, f'<{tag} {k}>', errs)
            continue
        errs.append(f'colour value {vv!r} in <{tag} {k}="…">')
    for js in re.findall(r'<script(?![^>]*application/(?:ld\+)?json)[^>]*>(.*?)</script>', body, re.S):
        for mm in re.findall(r'''['"`](#[0-9a-fA-F]{3,8})['"`]''', js):
            errs.append(f'colour literal {mm} in <script>')
        if re.search(r'\b(rgba?|hsla?)\(', js):
            errs.append('colour function in <script>')
    if 'theme-color' in doc.metas:
        errs.append('meta theme-color carries a colour value outside the palette block')

    # --- document structure ----------------------------------------------
    if doc.lang != 'en-IN':
        errs.append(f'<html lang> is {doc.lang!r}, expected "en-IN"')
    if doc.h1 != 1:
        errs.append(f'{doc.h1} <h1> elements, expected exactly 1')
    prev = 0
    for h in doc.headings:
        if prev and h > prev + 1:
            errs.append(f'heading level jumps from h{prev} to h{h}')
            break
        prev = h
    rationale = doc.metas.get('design-rationale', '')
    if len(rationale) < 80:
        errs.append('meta design-rationale missing or too short')
    if 'description' not in doc.metas:
        errs.append('meta description missing')
    elif len(doc.metas['description']) > 155:
        errs.append(f'meta description is {len(doc.metas["description"])} chars (max 155)')
    if 'viewport' not in doc.metas:
        errs.append('meta viewport missing')
    for sid in SECTION_IDS:
        if sid not in doc.ids:
            errs.append(f'section id="{sid}" missing')
    if not any((a.get('href') or '').startswith('#') and 'skip' in (a.get('class') or '') for a in doc.links):
        errs.append('skip link (class contains "skip") missing')
    if ':focus-visible' not in src:
        errs.append('no :focus-visible style found')
    if 'prefers-reduced-motion' not in src:
        errs.append('prefers-reduced-motion is not handled')
    if "ll:palette" not in src:
        errs.append('palette bridge (ll:palette message listener) missing')

    # --- self-contained ---------------------------------------------------
    for tag, k, v in doc.external:
        if tag == 'a':
            continue
        if re.match(r'^https://fonts\.(googleapis|gstatic)\.com', v):
            continue
        errs.append(f'external resource: <{tag} {k}="{v[:70]}">')
    for a in doc.imgs:
        s = a.get('src', '')
        if not s.startswith('data:'):
            errs.append(f'<img src="{s[:50]}"> is not inline')
        if 'alt' not in a:
            errs.append('<img> without alt')
    if re.search(r'@import', body):
        errs.append('@import found (fonts should load via <link>)')

    # --- copy ------------------------------------------------------------------
    text = re.sub(r'\s+', ' ', ' '.join(doc.text))
    low = text.lower()
    for need in REQUIRED_TEXT:
        if need.lower() not in low:
            errs.append(f'required copy missing: "{need}"')
    scrub = text
    for ok in SPELLING_ALLOW:
        scrub = scrub.replace(ok, '')
    for pat, label in BANNED:
        hit = re.search(pat, scrub, re.I)
        if hit:
            ctx = scrub[max(0, hit.start() - 30):hit.end() + 30]
            errs.append(f'{label}: "…{ctx}…"')
    if 'TBC' not in text:
        warns.append('no [TBC] marker found — unconfirmed figures must be marked')

    return errs, warns, vars_, rows, rationale


def fmt_rows(rows):
    return '  '.join(f'{fg[2:]}/{bg[2:]} {r:.2f}{"" if ok else " FAIL"}' for fg, bg, r, ok, _ in rows)


def md_table(palettes):
    head = ['Palette', 'Family', 'Primary'] + [f'{fg[2:]} / {bg[2:]}' + ('' if req else ' *') for fg, bg, _, req in PAIRS] + ['AA']
    out = ['| ' + ' | '.join(head) + ' |', '|' + '---|' * len(head)]
    for p in palettes:
        _, rows = check_palette(p['vars'], p['id'])
        cells = [f'{r:.2f}' + ('' if ok else ' ✗') for _, _, r, ok, _ in rows]
        ok_all = all(ok for *_, ok, _ in rows)
        out.append('| ' + ' | '.join([p['name'], p['family'], f"`{p['vars']['--primary']}`"] + cells
                                     + ['Pass' if ok_all else 'FAIL']) + ' |')
    out.append('')
    out.append('\\* extra checks beyond the five required pairs. All ratios are WCAG 2.x contrast ratios; AA for body text is 4.5:1.')
    return '\n'.join(out)


def main(argv):
    failed = False
    pal_path = ROOT / 'palettes.json'
    palettes = json.loads(pal_path.read_text()) if pal_path.exists() else []

    if '--table' in argv:
        print(md_table(palettes))
        return 0

    files = [pathlib.Path(a) for a in argv if not a.startswith('--')]
    if not files and '--palettes' not in argv:
        files = sorted((ROOT / 'designs').glob('*.html'))

    print('== palettes.json ==')
    greens = []
    for p in palettes:
        errs, rows = check_palette(p.get('vars', {}), p.get('id', '?'))
        for k in ('id', 'name', 'family', 'rationale', 'vars'):
            if k not in p:
                errs.append(f"{p.get('id', '?')}: missing key {k}")
        # The cap keeps the exploratory palettes varied. Brand palettes are green because the logo is,
        # so they are exempt from it.
        if not errs and is_green(p['vars']['--primary']) and p.get('design') and p.get('family') != 'Brand':
            greens.append(p['id'])
        print(f"  {'FAIL' if errs else 'ok  '} {p.get('id', '?'):<14} {fmt_rows(rows)}")
        for e in errs:
            print('       -', e)
        failed |= bool(errs)
    if len(greens) > 2:
        print(f'  FAIL more than two designs use a green primary: {greens}')
        failed = True
    elif palettes:
        print(f'  ok   green primaries among design palettes: {greens or "none"} (max 2; Brand family exempt)')

    for f in files:
        f = f if f.is_absolute() else (pathlib.Path.cwd() / f)
        print(f'\n== {f.name} ==')
        errs, warns, vars_, rows, _ = check_design(f)
        print(f'  size {f.stat().st_size / 1024:.0f} KB   {fmt_rows(rows)}')
        # palette in file must match palettes.json entry for the same design, when one exists
        for p in palettes:
            if p.get('design') and f.name.startswith(p['design'] + '-'):
                if {k: v.upper() for k, v in p['vars'].items()} != {k: v.upper() for k, v in vars_.items()}:
                    errs.append(f'palette in file differs from palettes.json entry "{p["id"]}"')
        for e in errs:
            print('  FAIL', e)
        for w in warns:
            print('  warn', w)
        if not errs:
            print('  ok   all checks passed')
        failed |= bool(errs)
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
