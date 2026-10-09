# Lightening Lives: logo files

The logo redrawn as clean artwork, so it stays sharp at any size, in three versions. `overview.png` shows them all.

| Version | Use it when | Files |
| --- | --- | --- |
| **Full logo**: emblem, name and "Every Life Matters" | There is room for the whole thing: letterheads, title slides, the website footer | `lightening-lives-logo.svg`, `-512.png`, `-1024.png`, `-2048.png`, `-1024-white.png` |
| **Without the tagline**: emblem and name | The tagline would be too small to read, or is written elsewhere | `lightening-lives-logo-name.svg`, `-512.png`, `-1024.png`, `-2048.png`, `-1024-white.png` |
| **Emblem only**: sun, leaves and figure, no name, no tagline | Small spaces, or beside the name set in type: app icons, favicons, social profile pictures, a website header | `lightening-lives-emblem.svg`, `-512.png`, `-1024.png`, `-2048.png`, `-1024-white.png` |
| **Icons** from the emblem | Browser tab and home-screen icons | `icons/icon-32.png`, `icon-48.png`, `icon-192.png`, `icon-512.png`, `icons/apple-touch-icon.png` (180 px, white ground) |

- **SVG** is the master: use it wherever it is accepted (web, print, slides). It scales to any size.
- **PNG** files have a transparent ground; the number is the width in pixels. The `-white` files have a solid white ground, for places that do not keep transparency.
- The full logo sits in the same square frame as the original file, so it replaces it like for like. `assets/logo.png` is this artwork at 768 px; the 3D card in Design 03 is printed from it.
- On the site: headers show the emblem with the name set in type beside it, footers show the full logo at 176 px, and browser tabs use the icons. Below about 160 px wide the full logo's lettering is too small to read; use the emblem there.
- The original 256 px file is kept unchanged as `logo.png` at the top of the repository and in `content/assets/`.

## Colours, measured from the original

| Part | Colour |
| --- | --- |
| Sun's outline | `#FEF301` |
| Sun's centre | `#F7EF06` |
| Sun's rays (fill) | `#FFC80C` |
| Glow round the sun | from `#F9BE21` near the rays to white at its edge |
| Leaves | `#69A129` |
| Figure | `#242720` |
| Name | `#A54414` |
| Tagline | `#7F0102` |

## How it was redrawn, and what to check

Nothing was restyled. Every part was measured from the original file's pixels and drawn where it was found; shrunk back to the original's size, the new artwork differs from it by under 1% on average.

- **Sun.** Eighteen points, not evenly spaced and not all the same length: each was measured separately and kept as it is. The glow keeps its colours, including its fade to white at the edge, which shows as a pale rim on dark grounds exactly as in the original.
- **Leaves and figure.** Outlines fitted to within about a twentieth of an original pixel, with each leaf's vein cut in from its base.
- **Tagline.** Tahoma, identified by matching it against the original (a 98.9% match); set from the typeface's own outlines.
- **Name.** The typeface of "LIGHTENING LIVES" could not be identified: about seventy were tried and none matched. The letters are rebuilt from the original instead: each is drawn with a round-ended stroke of the thickness, length and position measured from its pixels. At 13 px tall in the original, fine details of the letter shapes are not recoverable, so this is the one part that is a reconstruction. **If the designer's original file or the typeface's name is available, the name should be set from that.**
- Nothing here replaces the designer's own vector file, if one exists. If it turns up, use it in place of these.
