# Prompt — Generate 12 design options for the Lightening Lives website

Copy everything below the line into Claude Code.

---

## Context

We are redesigning the website for Lightening Lives LLP, a Hyderabad-based molecular diagnostics company that sells extraction-free, blood-card-based genetic screening kits to laboratories, hospitals and public-health programmes.

The full brief is in `website-details.md` in this repo. **Read it completely before doing anything else.** It is the source of truth for positioning, audience, copy rules, palette, and the home-page section list. Where this prompt and that file disagree, the file wins.

Ignore all other branches in this repo. Their code is outdated and must not be referenced, copied or adapted.

## Goal

Produce **12 distinct home-page design options** as static HTML files, plus a single comparison page with a dropdown that switches between them. The client will review these and pick a direction before we build the real site. We are choosing an *aesthetic direction*, so the 12 must be meaningfully different from each other — not the same layout with different accent colours.

## Skill

Use the `frontend-design` skill for every design. Check whether it is installed:

```
/plugin
```

If it isn't, install it from the official marketplace (`anthropics/claude-code` → `frontend-design`) and confirm it loaded before starting. Do not begin any design until the skill is active. Re-read the skill before each new design so that each one gets a fresh, deliberate aesthetic decision rather than a drift from the previous one.

## Hard constraints (apply to all 12)

1. **Light palette only.** White or warm off-white backgrounds. Dark UI is rejected by the client. Dark is allowed only for a footer, and only if the design needs it.
2. **Content in the HTML.** Every word, number and image must be present in the markup. JavaScript may animate or enhance, never render content. Counters animate *from* the real value, never from 0.
3. **Self-contained files.** One `.html` per design, inline CSS and JS. External loads limited to Google Fonts. No build step, no frameworks, no npm. Placeholder images via inline SVG or CSS shapes — no remote image URLs.
4. **Copy follows the brief.** Use the approved one-sentence description, the eight differentiators, the three-word strategy "Extraction-Free Genetic Screening" and tagline "One drop. One day." exactly as given in `website-details.md`. Follow its tone rules: factual, professional, no charity language, no pricing, no B2C ordering path, no patient stories, British/Indian spelling.
4. **Home page only, but complete.** Each design renders every home-page section listed in `website-details.md` §6 (hero, description, why us, products, how it works, numbers, collaborations, who we work with, team & advisors, latest updates, contact). Use `[TBC]` where the brief marks a fact as unconfirmed; never invent statistics, partner names or certifications.
5. **Responsive** from 360px to 1440px. Test each design at mobile and desktop widths before moving on.
6. **Accessible.** WCAG AA contrast, one `<h1>`, logical heading order, visible focus states, real `alt` text on any image placeholder that conveys meaning.
7. **Distinct.** No two designs may share the same hero layout, typography pairing and colour treatment. If you notice convergence, stop and change direction.

## The 12 directions

Each design gets a name and a one-line rationale in its `<head>` as `<meta name="design-rationale" content="…">`. Use these starting points; interpret them freely but keep them recognisably different:

| # | Working name | Direction |
|---|---|---|
| 01 | Clinical Clarity | Swiss-style grid, lots of white, one green accent, dense information hierarchy. For the lab director who wants facts fast. |
| 02 | Daylight | The "light" metaphor made literal: warm gradients, soft amber highlights, airy spacing. Optimistic but still professional. |
| 03 | Field Notes | Photography-led, earthy off-white, large full-bleed field imagery placeholders, human scale. For the public-health audience. |
| 04 | Data Sheet | Looks like a beautifully typeset technical datasheet. Monospace numerals, tables, rules, specification blocks. |
| 05 | Editorial | Magazine layout: serif display type, asymmetric columns, pull-quotes for the differentiators, generous margins. |
| 06 | Card Deck | The blood-spot card as the central visual motif; card-shaped components throughout; rounded, tactile, modular. |
| 07 | Precision Instrument | Thin hairlines, fine engineering typography, subtle motion on scroll, cool greys with green. Feels like lab equipment. |
| 08 | Bold Public Health | Big type, strong green blocks, poster-like sections, high contrast on light. Built for a district health officer on a phone. |
| 09 | Minimal | Radical restraint: one typeface, one accent, almost no decoration, everything rests on spacing and rhythm. |
| 10 | Diagram-First | Every section anchored by an inline SVG diagram of the workflow, the assay, the throughput. Explanatory, illustrated. |
| 11 | Warm Institutional | Trust-forward: muted green and gold, serif headings, credential badges prominent (ICMR, CCMB). Feels like an established research institute. |
| 12 | Motion & Depth | Layered light backgrounds, soft shadows, parallax-light scroll effects, product cards that lift. Modern SaaS feel, still light. |

## Deliverables

Create everything inside a `design-options/` folder at repo root:

```
design-options/
  index.html            comparison page with dropdown
  designs/
    01-clinical-clarity.html
    02-daylight.html
    …
    12-motion-depth.html
  manifest.json         [{ "id": "01", "file": "designs/01-…html", "name": "…", "rationale": "…" }, …]
  README.md             how to open/review, plus one paragraph per design
```

### `index.html` (the comparison page)
- A fixed top bar with a `<select>` listing all 12 designs by number and name, plus previous/next buttons and keyboard shortcuts (← →).
- The selected design loads in a full-height `<iframe>` below the bar.
- A toggle to view at mobile (390px), tablet (820px) and desktop (full) widths inside the frame.
- The rationale line for the current design shown in the bar.
- Deep-linkable: `index.html#07` opens design 07 and the dropdown updates.
- Populate the dropdown from `manifest.json` so adding a design later is one JSON entry.
- Works when opened directly from the file system (`file://`) — no server required.

## Process

1. Read `website-details.md` fully. Confirm the frontend-design skill is loaded.
2. Write `manifest.json` and the `index.html` shell first so we can review incrementally.
3. Build the designs **one at a time**, in order 01 → 12. After each: open it, check both mobile and desktop widths, run the constraints checklist above, then commit with message `design: 0N <name>`.
4. Before starting each new design, re-read the previous designs' rationale lines and deliberately move away from them.
5. When all 12 are done, write `README.md` and do a final pass to confirm every design still meets constraints 1–7.
6. Report back with: the list of 12 designs and rationales, anything from the brief you could not satisfy, and any `[TBC]` facts the client needs to supply.

Do not ask for permission between designs; ask only if something in the brief is genuinely ambiguous. Quality over speed — a design that looks like a template default should be redone, not shipped.
