#!/usr/bin/env python3
"""
Record a finished design into manifest.json and palettes.json.

    python3 tools/record.py <design-id> "<palette rationale>"

The design's own file is the single source of truth: the manifest rationale is read from its
<meta name="design-rationale"> tag and the palette from its /* palette:start */ block, so the
JSON can never drift from what the page actually renders.
"""
import html
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
did, why = sys.argv[1], sys.argv[2]

manifest = json.loads((ROOT / 'manifest.json').read_text())
palettes = json.loads((ROOT / 'palettes.json').read_text())
entry = next(x for x in manifest if x['id'] == did)
palette = next(x for x in palettes if x.get('design') == did)

src = (ROOT / entry['file']).read_text(encoding='utf-8')
meta = re.search(r'<meta\s+name="design-rationale"\s+content="([^"]*)"', src)
if not meta:
    sys.exit(f'{entry["file"]}: no design-rationale meta tag')
entry['rationale'] = html.unescape(meta.group(1))

block = re.search(r'/\*\s*palette:start.*?\*/(.*?)/\*\s*palette:end\s*\*/', src, re.S)
palette['vars'] = {k: v.strip().upper() for k, v in re.findall(r'(--[\w-]+)\s*:\s*([^;]+);', block.group(1))}
palette['rationale'] = why

(ROOT / 'manifest.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n')
(ROOT / 'palettes.json').write_text(json.dumps(palettes, indent=2, ensure_ascii=False) + '\n')
print(f'{did}: rationale {len(entry["rationale"])} chars, primary {palette["vars"]["--primary"]}')
