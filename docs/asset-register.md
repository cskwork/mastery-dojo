# Asset register

Raster assets shipped by the app, with their origin. Generation prompts are also embedded next to each file (`*.webp.json` sidecars, JPEG comment for `og.jpg`).

| File | Use | Origin | Date | Processing |
| --- | --- | --- | --- | --- |
| `public/art/manual-figure.webp` | Home page figure beside the manual index (desktop only) | Generated with GPT Image 2 (ChatGPT plan via Codex CLI) | 2026-09-24 | Greyscale, white point lifted to pure white, resized 1536x1024 → 960x640, WebP q82. Inverted with CSS in the dark theme. |
| `public/art/empty-notebook.webp` | Empty state on the Progress page before the first attempt | Generated with GPT Image 2 (ChatGPT plan via Codex CLI) | 2026-09-24 | Greyscale, white point lifted, resized 1254² → 480², WebP q82. Inverted with CSS in the dark theme. |
| `public/og.jpg` | Open Graph / Twitter share image | Generated with GPT Image 2 (ChatGPT plan via Codex CLI) | 2026-09-24 | Resized and center-cropped 1730x909 → 1200x630, JPEG q86. |

Alt text lives in `data/i18n/uiStrings.ts` (`figureAlt`, `emptyFigureAlt`) in Korean and English; the OG alt is in `app/layout.tsx`.

## Prompts

- **manual-figure**: "A precise black ink technical line drawing on a pure white background, in the style of a plate from a vintage printed engineering manual: an open hardbound technical manual lying flat, and rising out of its open pages a clean four-step staircase, each step slightly taller, drawn with fine uniform pen lines and light cross-hatching for shadow. No text, no letters, no numbers, no color, no gray fill, no border, lots of white space around the subject. Landscape 3:2 composition, subject centered."
- **empty-notebook**: "A small, quiet black ink line drawing on a pure white background, vintage engineering-manual illustration style: an empty spiral-bound practice notebook lying open with blank ruled pages and a sharpened pencil resting diagonally across it. Fine uniform pen lines, minimal cross-hatching. No text, no letters, no numbers, no color, no gray fill, no border, generous white space. Square composition, subject centered."
- **og**: typographic manual-page card with the running header `MASTERYDOJO(1)`, the MasteryDojo wordmark, the line "Drill 12 technical domains from beginner to expertise", and a reverse-video bar listing `python(1) postgresql(1) kafka(1) sqld(1) linux(1) ...` (full prompt in the JPEG comment).

Fonts: Gothic A1 and Nanum Gothic Coding, loaded from Google Fonts (SIL Open Font License 1.1).
