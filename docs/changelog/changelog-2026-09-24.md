# 2026-09-24 — UI/UX revamp: the answerable manual page

## Design
- Replaced the KanaDojo-style look (rounded lavender cards over a scrolling token wall) with a Unix-manual-page world: running header (`PYTHONDOJO(1)`), bold section heads, ruled rows, reverse video for selection and the next action, square corners, no shadows.
- Two complete themes: terminal (graphite, default) and printed manual (cool grey-white). Fonts: Gothic A1 + Nanum Gothic Coding.
- Mobile drill screen now shows the question first; the track/domain index moved into a slide-in panel (desktop keeps it as a collapsible column).
- Drill modes render as command flags (`-p -r -i -d`); a fixed `less`-style status bar holds stats, Hint, and Check/Next.
- New generated art (home figure, empty state, OG image); see `docs/asset-register.md`. `PRODUCT.md` and `DESIGN.md` added.

## Features
- **Resume where you left off**: the last domain, track, and drill mode are saved (`dojo-session-v1`) and restored on reload; home shows a Continue bar and real per-track progress (the old cards always showed 0).
- **Keyboard-first drills**: 1-4 choose an option, Enter checks or goes to the next drill, H shows the hint; the typed answer submits on Enter. A blank Check no longer counts as a wrong attempt (it used to reset the streak and cost accuracy).
- **Safer settings**: native dialog (Escape closes, focus is trapped and restored), and Reset progress asks for confirmation first.
- Footer: dead `#terms/#privacy/...` anchors replaced with real links to the source repository and the KanaDojo credit.

## Tests
- `test/session.test.ts`: session parsing/fallbacks, keyboard map, blank-answer rule.
