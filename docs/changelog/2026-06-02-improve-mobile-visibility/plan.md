# Plan — Improve mobile visibility and compatibility (MasteryDojo)

Mode: LEGACY (improve existing UI). Frozen plan. Build implements; does not redesign.
Objective: make the existing KanaDojo-inspired SPA comfortably usable on small phones
(320/360px, ko + en) without altering content, structure, desktop layout, or the brand.

This plan satisfies all 16 brief criteria. It is written once and frozen.

---

## Slice / Task table

All slices write the SAME two files (`app/globals.css`, `app/layout.tsx`); S2 may add
ONE CSS rule for an already-existing class hook. The slices exist for **acceptance-check
granularity**, not parallelism — see Architecture (single-driver).

| ID | What | Files (max) | Acceptance check (probe) | Brief criteria |
|----|------|-------------|--------------------------|----------------|
| S1 | Viewport foundation: add Next `viewport` export (`width=device-width, initial-scale=1`, `viewportFit:"cover"`, no `maximum-scale`/`user-scalable`); switch full-height surfaces from `100vh`→`100dvh` with a `100vh` fallback; add safe-area-aware base padding | `app/layout.tsx`, `app/globals.css` | Exported `<head>` has exactly one `<meta name=viewport>` with `width=device-width, initial-scale=1, viewport-fit=cover`, no `maximum-scale`/`user-scalable=no`; grep of `app/globals.css` shows no bare `height:100vh`/`min-height:100vh` on `.kana-page`/`body`/`.kana-app-page` (a `100vh` line followed by a `100dvh` line is OK); `safe-area-inset` referenced | 1, 10, 11 |
| S2 | Responsive layout + overflow fixes: add `overflow-x:hidden` to `.kana-app-page`; add a `@media (max-width:360px)` phone block (drill `<pre>` overflow, domain-switcher/compact + `.kana-lang-toggle` to 1–2 cols, action-bar text fit); add `env(safe-area-inset-bottom)` to the fixed `.kana-action-bar`; add `env(safe-area-inset-top)` to `.kana-floating-action` | `app/globals.css` | At 320px AND 360px (ko AND en), `documentElement.scrollWidth <= innerWidth` on home/dojo/progress views; at 1280px@200% zoom no h-scroll on main views; action-bar bottom padding includes `env(safe-area-inset-bottom)` | 2, 3, 10 |
| S3 | Touch targets + focus + interaction states: raise `.kana-controls button` and `.kana-lang-toggle` to ≥44×44 at all widths; add a global `:focus-visible` ring rule (token-colored) and remove the bare `outline:none` on the drill input by pairing it with a `:focus-visible` replacement | `app/globals.css` | At 360px every primary control's bounding box ≥44×44 (none below 24×24 floor); tab through controls → each focused element reports a non-zero, non-transparent outline or box-shadow; input on focus shows a ring | 4, 13 |
| S4 | Fluid type scale: introduce `clamp()`-based type tokens at `:root` (mirrored where needed in light override only if a token value differs — it does not, so no mirror needed); set `body` font-size to a clamp with a `≥16px` floor; convert the largest fixed `px` heading/label sizes that drive overflow to clamp; keep desktop maxima unchanged | `app/globals.css` | Body computed `font-size ≥16px` at 360px; no primary text `<14px`; no body text overflows its container at 320px; type uses `clamp()` not single-step jumps | 5*, 6, 7 |
| S5 | `prefers-reduced-motion` path: add `@media (prefers-reduced-motion: reduce)` block that neutralizes the `html` theme transition, the 3D-button `transition`, hover/active `translateY` transforms, and any looping backdrop animation to `transition:none;animation:none` (or `0s`) | `app/globals.css` | Under emulated `prefers-reduced-motion: reduce`, animated/transitioned elements report `transition-duration`/`animation-duration` of `0s` or `none`; motion still present without the setting | 9 |
| S6 | Regression gate (no new code; verification slice run by Build/QA after S1–S5) | — | `npm test` exits 0 (8 cases unchanged); `next build` exits 0 WITH and WITHOUT `NEXT_PUBLIC_BASE_PATH`; exported HTML/CSS introduces no new root-absolute `"/..."` asset URL; `--kd-*` tokens + card/backdrop structure intact; both `dark` and `light` themes meet contrast AA | 8, 12, 14, 15, 16 |

\* S5 thumb-reach (criterion 5): the drilling-view primary CTA already lives in the fixed
bottom `.kana-action-bar` (vertical center in the bottom half on 360×740). S2's safe-area
fix keeps it reachable. No new layout work needed — verified, not built.

Each slice ≤2 files / well under ~500 lines. S6 is verification-only (0 files written).

---

## Architecture

### File touch-map (smallest blast radius)

| File | Change | Why |
|------|--------|-----|
| `app/layout.tsx` | Add `export const viewport: Viewport = { width:"device-width", initialScale:1, viewportFit:"cover", themeColor:[...] }`. Add `import type { Viewport } from "next"`. Do NOT touch the bootstrap `<script>`, `metadata`, or `withBasePath` usage. | One-symbol addition; Next emits the viewport meta into the static export. (S1) |
| `app/globals.css` | All responsive work: dvh/safe-area (S1), overflow + 360px breakpoint + action-bar safe-area (S2), touch targets + focus (S3), clamp type tokens (S4), reduced-motion (S5). | The entire live UI is one stylesheet; no module scoping. |
| `components/dojo/PythonDojoApp.tsx` | **No edit expected.** The `.kana-lang-toggle` class already exists in markup (`:133`) with no CSS rule, so S2/S3 wire it purely in `globals.css`. Only touch this file if a container genuinely needs a NEW class hook that doesn't already exist — none is currently required. | Avoids touching the state machine / theme / i18n effects. |
| 5 dead `dojo-*` components | **DO NOT TOUCH** (Header/ModePicker/ProgressPreview/TrackRail/TrainingPanel — unrendered, unstyled, unimported). | Out of scope per map. |

### Why single-driver (no parallel writers)

Slices S1–S5 all edit the SAME file (`app/globals.css`), and CSS is a global cascade with
ordering and specificity coupling (e.g. the light-theme override block at `:928-943` and the
3D-button block at `:1194-1275` share selectors with new rules). Parallel writers on one file
would conflict and could break cascade order. Therefore Build runs as a **single Designer
driver implementing S1→S2→S3→S4→S5 sequentially**, then S6 verifies. Independent *probes*
(viewport check, overflow check, contrast/axe, build-with/without-base-path) may be dispatched
to fresh-context helper subagents in parallel during S6 — those are read-only.

### Cascade ordering rule (Build must follow)

Append new rules in their natural section, but keep these ordering invariants so existing
specificity still wins where intended:
1. New `:root` type/spacing tokens go at the TOP `:root` block (`:3-18`), beside the `--kd-*`
   colors. If a token's value must differ in light theme, mirror it in `:root[data-theme="light"]`
   (`:928-943`); the planned type tokens are theme-independent, so **no light mirror needed**.
2. The new `@media (max-width:360px)` block goes AFTER the existing `@media (max-width:520px)`
   block (`:837-921`) so the phone override wins over the 520px rules (both are max-width;
   later + equally-specific = applied).
3. `:focus-visible` rules and the `prefers-reduced-motion` block go at the END of the file
   (after the 3D-button block `:1194-1275`) so reduced-motion can neutralize those transitions.

---

## Contracts

Concrete enough that Build does not redesign. Values are fixed by this plan.

### C1 — Viewport export (`app/layout.tsx`)

```ts
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#161a2f" },
    { media: "(prefers-color-scheme: light)", color: "#f1eefb" }
  ]
};
```
- NO `maximumScale`, NO `userScalable:false` (zoom must stay enabled — criterion 1).
- `themeColor` values reuse the existing `--kd-bg` literals (`#161a2f` dark, `#f1eefb` light).
- Existing `metadata`, bootstrap script, `withBasePath` icon URL: unchanged.

### C2 — Dynamic viewport height + safe area (`globals.css`, S1)

Replace bare `100vh` on full-height surfaces with a fallback pair (keep `100vh` first as
fallback for engines lacking `dvh`, then `100dvh`):
- `body` (`:31`): `min-height: 100vh; min-height: 100dvh;`
- `.kana-page` (`:55`): `min-height: 100vh; min-height: 100dvh;`
- Any other primary full-height container using `100vh` (`:123`, `.kana-app-page` region `:396`):
  same fallback pair.
- The single existing `clamp()` height on `.kana-drill-card` (`:615`,
  `clamp(426px, calc(100vh - 470px), 560px)`) — change the inner `100vh`→`100dvh` (keep the clamp).
- Add safe-area base padding on the top-level pages via
  `padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right);`
  on `.kana-page` and `.kana-app-page` (harmless 0 on non-notched devices).

### C3 — Overflow + phone breakpoint (`globals.css`, S2)

- `.kana-app-page` (`:395-402`): add `overflow-x: hidden;` (mirrors `.kana-page` `:56`). This is
  the documented top overflow surface (map: training/progress at risk).
- Action-bar safe area — extend the ≤900px rule (`:828-834`) where action-bar becomes
  `bottom:0`: change padding to include the inset, e.g.
  `padding-bottom: calc(12px + env(safe-area-inset-bottom));` (keep existing `padding:12px`
  on top/sides). Do the same conceptually for the ≤520px state.
- `.kana-floating-action` (`:102-116`): change `top:14px` to
  `top: calc(14px + env(safe-area-inset-top));` and `right:14px` to
  `right: calc(14px + env(safe-area-inset-right));`.
- New block: `@media (max-width: 360px) { ... }` placed AFTER the 520px block. Contents:
  - `.kana-drill-card pre { overflow-x: auto; }` and ensure the ≤520px `.kana-drill-card`
    `overflow: visible` (`:908`) does not let a wide `<pre>` push page width — set
    `.kana-drill-card { overflow: hidden; }` here OR keep `<pre>` scrollable inside (preferred:
    `pre { max-width: 100%; overflow-x: auto; }`). The page must not gain horizontal scroll.
  - `.kana-domain-switcher.compact { grid-template-columns: repeat(2, minmax(0, 1fr)); }`
    (relax the ≤900px 3-col rule `:801-804` so ko brand names don't clip/cramp at 360px).
  - Confirm `.kana-action-bar` 3-equal-col grid still fits; if ko labels overflow at 360px,
    allow the action-bar to wrap or reduce gap — but DO NOT change desktop. (Map notes labels
    are tight but the grid won't force h-scroll; reduce action-bar `font-size` here only if a
    320px probe shows clipping.)

### C4 — Touch targets + focus (`globals.css`, S3)

- Touch-target floor: **44×44 CSS px** for primary controls. Fix the two known fails:
  - `.kana-controls button` is `40×40` (`:155-164`) and `36×36` at ≤760px (`:760-763`).
    Set to `min-width:44px; min-height:44px;` (and remove/raise the ≤760px 36px shrink to 44px).
  - `.kana-lang-toggle` (markup exists, no CSS): add a rule giving it
    `min-width:44px; min-height:44px;` and a layout that fits the `<Languages>` icon + `KO`/`EN`
    text without clipping (e.g. `display:flex; align-items:center; gap:4px; padding:0 8px;
    width:auto;` — it currently inherits `.kana-controls button { width:40px; display:grid }`
    which clips). Keep it visually consistent with sibling control buttons.
- `:focus-visible` ring (global, near end of file, before reduced-motion block):
  ```css
  :where(button, a, input, [role="button"], [tabindex]):focus-visible {
    outline: 2px solid var(--kd-accent);
    outline-offset: 2px;
  }
  ```
  Token-colored so it works in both themes. `:where()` keeps specificity 0 so component
  rules still win for everything except the focus outline.
- Drill `input` (`:654-663`) sets `outline:none` with no replacement — add a paired
  `.kana-drill-input:focus-visible { outline: 2px solid var(--kd-accent); outline-offset: 2px; }`
  (or `box-shadow` ring) so keyboard focus is visible.
- Brand `h1[role=button][tabIndex=0]` (PythonDojoApp `:290,:356`): covered by the global
  `[role="button"]:focus-visible` rule above — no markup change.

### C5 — Fluid type scale (`globals.css`, S4)

Add type tokens at `:root` (theme-independent → no light mirror). Floors keep body ≥16px:
```css
:root {
  /* fluid type scale (clamp: min, preferred-vw, max) */
  --fs-body: clamp(1rem, 0.95rem + 0.4vw, 1.0625rem);   /* >=16px floor */
  --fs-h1:   clamp(1.75rem, 1.4rem + 2.2vw, 2.25rem);   /* maps to existing 36px desktop */
  --fs-h2:   clamp(1.5rem, 1.25rem + 1.4vw, 1.875rem);
}
```
- `body` (`:30-36`): add `font-size: var(--fs-body);` (currently inherits a fixed size — set
  the floor so iOS does not auto-zoom on input focus; criterion 6).
- Apply `--fs-h1` to the existing 36px `h1` (`:137-148`) and `--fs-h2` to the 28px `welcome h2`
  region — only the headings the map flags as fixed `px` overflow drivers. Desktop maxima equal
  the current fixed values, so desktop is visually unchanged (criterion: no desktop redesign).
- Spacing (8pt rhythm, criterion 7): existing mobile paddings/gaps are already 4px multiples
  (e.g. `gap:8px` `:833`, `padding:16px` `:902`, `gap:14px` `:860`). Do NOT churn them; only
  ensure any NEW padding/gap added in S2/S3/S4 is a multiple of 4px.

### C6 — Reduced motion (`globals.css`, S5, END of file)

```css
@media (prefers-reduced-motion: reduce) {
  html { transition: none; }                         /* neutralizes :924-926 */
  .kana-dojo-card, .kana-domain-switcher button, .kana-mode-row button,
  .kana-choice-grid button, .kana-sidebar nav button, .kana-progress-tabs button,
  .kana-setting-row button, .kana-controls button, .kana-action-bar button,
  .kana-floating-action {
    transition: none;
  }
  /* hover/active transforms neutralized */
  .kana-dojo-card:hover, .kana-domain-switcher button:hover, /* ...same selector set... */
  .kana-floating-action:hover,
  .kana-dojo-card:active, /* ...same selector set... */ .kana-floating-action:active {
    transform: none;
  }
  /* any looping backdrop / token animation */
  .kana-token-backdrop, .kana-token-backdrop span { animation: none; }
  * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important; }  /* belt-and-suspenders catch-all */
}
```
The catch-all `*` rule is the robust path (probe expects `0s`/near-0 durations). The explicit
selectors document intent; Build may keep just the catch-all if cleaner, as long as the probe
reads `0s`/`none`.

### C7 — Regression invariants (S6, no code)

- **Tokens preserved:** `--kd-accent`, `--kd-mint`, `--kd-panel`, `--kd-bg`, etc. unchanged;
  card/backdrop structure intact (criterion 16). New tokens are additive only.
- **Base path:** no new asset URL introduced; if any asset were ever added it MUST go through
  `withBasePath`. This plan adds NO assets (criterion 12).
- **Tests:** `test/training.test.ts` is pure logic — untouched, must stay green (criterion 14).
- **Build:** `next build` (output:export) exit 0 with AND without `NEXT_PUBLIC_BASE_PATH`
  (criterion 15).
- **Themes:** every change verified in BOTH `dark` and `light` (shared selectors); contrast AA
  on both (criterion 8).
- **i18n:** overflow + touch checks run in BOTH `ko` and `en` (ko text is wider — criterion 2).

---

## Design Read

**Reading this as:** a mobile-polish pass on an existing branded learning app (KanaDojo-inspired
dojo UI) for one-handed phone learners (ko + en), leaning toward **brand-preservation** —
keep the OKLCH violet/mint accent, dark panels, token backdrop, and 3D card ledges exactly;
fix only viewport, overflow, touch, focus, type, and motion. This is BRAND ALIGNMENT, not a
redesign: the signature (`--kd-*` tokens, card/backdrop structure) is the starting material and
stays intact.

### Three dials (taste §1) — redesign/preserve preset, tuned for phone

- **DESIGN_VARIANCE: 3** — *low; match existing.* Brief criterion 16 mandates the signature look
  is retained; non-goals forbid desktop redesign. We add zero new visual motifs.
- **MOTION_INTENSITY: 3** — *restrained, with a guaranteed reduced-motion path.* Existing motion
  (3D press, hover lift, theme fade) is kept on capable devices but MUST collapse to 0 under
  `prefers-reduced-motion` (criterion 9). We add no new motion.
- **VISUAL_DENSITY: 3** — *tuned DOWN for phone.* Relax the cramped ≤900px 3-col compact
  domain-switcher to 2 cols at ≤360px and keep single-column stacks; larger touch targets and a
  ≥16px body floor trade packed density for thumb comfort. Desktop density unchanged.

### System vs. aesthetic (taste §2)

This is the **§2.B redesign-preserve** path, not §2.A: no official design-system package applies
(it is a hand-written native-CSS dojo aesthetic). Honest implementation = native CSS + the
existing `--kd-*` token system. We do **not** introduce Tailwind, a component library, or any new
dependency (non-goal). The aesthetic family is "dark tech / dojo" — accent + dark panels +
3D ledges — implemented entirely in `app/globals.css`, exactly as it is today.

---

## Human Feedback

### Plain-language brief

Right now the app looks great on a computer but is awkward on a phone. We are going to make
five small, safe fixes so it is comfortable to use one-handed on a small phone, in both Korean
and English — without changing how it looks, what it teaches, or how it works on a desktop.

What changes, in plain terms:
1. **Tell the phone how to size the page.** The app currently never tells the phone its preferred
   zoom and edge handling, so it can look off on notched phones. We add a tiny instruction so the
   page fits the screen and avoids the notch and the home-indicator bar.
2. **Stop sideways scrolling.** On the practice and progress screens, content can spill past the
   edge so the page scrolls left-right. We fence it in so everything fits the width on the
   smallest phones, including the longer Korean labels.
3. **Bigger, easier-to-tap buttons, and a visible focus outline.** A couple of the small header
   buttons (language, theme, sound) are too small to tap reliably; we bump them to a comfortable
   minimum size. We also add a clear outline so keyboard users can see where they are.
4. **Text that scales and never gets tiny.** Headings shrink smoothly on small screens instead of
   jumping, and body text never drops below a readable size (which also stops the phone from
   zooming in when you tap a text field).
5. **Respect "reduce motion."** If someone has turned on the phone's "reduce motion" accessibility
   setting, the app stops its animations.

Nothing about the lessons, the question content, the colors, or the desktop view changes. All the
work happens in one styling file plus one tiny addition to the page shell.

### Technical brief

Touch points (only two files; a third only if strictly needed):
- **`app/layout.tsx`** — add `export const viewport: Viewport` (`width:device-width,
  initialScale:1, viewportFit:"cover"`, `themeColor` reusing the existing bg hexes). No
  `maximum-scale`/`user-scalable` (keep zoom). The bootstrap script, `metadata`, and the
  `withBasePath` icon URL are untouched. (S1)
- **`app/globals.css`** — all responsive work, in five sequential edits:
  - **S1**: `100vh`→`100vh; …100dvh;` fallback pairs on full-height surfaces; safe-area side
    padding on the two page containers.
  - **S2**: `overflow-x:hidden` on `.kana-app-page`; a new `@media (max-width:360px)` block
    (placed after the existing 520px block) for the drill `<pre>`, the compact domain switcher
    (3→2 cols so Korean fits), and action-bar text fit; `env(safe-area-inset-*)` on the fixed
    action-bar and floating action.
  - **S3**: raise `.kana-controls button` and the already-present-but-unstyled `.kana-lang-toggle`
    to ≥44×44; a global `:where(...):focus-visible` ring colored with `--kd-accent`; a replacement
    focus ring for the drill input that currently uses `outline:none`.
  - **S4**: `clamp()` type tokens at `:root` (theme-independent, no light mirror); `body`
    `font-size` floor ≥16px; apply the heading clamps to the existing fixed-px h1/h2 (desktop
    maxima unchanged).
  - **S5**: a `@media (prefers-reduced-motion: reduce)` block at the end neutralizing the html
    theme transition, the 3D-button transitions, hover/active transforms, and the backdrop
    animation (catch-all `*` near-0 durations is the robust probe-passing path).
- **`components/dojo/PythonDojoApp.tsx`** — **expected: no change.** `.kana-lang-toggle` already
  exists in the markup with no CSS rule, so we style it in CSS. Only edit if a new class hook is
  genuinely required (none currently is).

CSS approach: desktop-first, three existing max-width breakpoints (760/900/520). We add ONE
`@media (max-width:360px)` block and edit within the existing three; new rules respect cascade
order (tokens at top `:root`; 360px block after 520px; focus + reduced-motion at file end).
Reuse the existing `--kd-*` tokens; new tokens are additive.

Tests / verification: `npm test` (vitest, 8 pure-logic cases) must stay green — CSS/layout work
cannot touch it. `next build` (static `output:export`) must exit 0 WITH and WITHOUT
`NEXT_PUBLIC_BASE_PATH`. There is no visual/E2E test in-repo, so the acceptance probes are run by
QA via emulated viewports (320 / 360 / 200%-zoom) in BOTH `dark`/`light` and BOTH `ko`/`en`,
plus an axe/contrast pass and a viewport-meta + base-path grep on the export.

Risks and mitigations:
- *Theme regression* (light override shares selectors `:928-943`): verify every change in both
  themes; new type tokens are theme-independent so no light mirror needed.
- *i18n width* (Korean is wider): the 360px overflow + touch probes run in `ko` AND `en`; the
  compact switcher drops to 2 cols at 360px to give Korean brand names room.
- *Base-path* (GitHub Pages sub-path): we add no assets, so no new URLs; `withBasePath`/`basePath`
  untouched; export grep confirms no root-absolute `"/..."` asset references.
- *Cascade ordering* (one global file): the 360px block goes after 520px, focus/reduced-motion at
  the end; single-driver sequential edits (no parallel writers) prevent conflicts.
- *Reduced-motion completeness*: a catch-all `*` near-0-duration rule guarantees the probe reads
  `0s`/`none` even for any transition the explicit selectors miss.

### Terms

- **viewport meta** — a line in the page `<head>` telling the phone browser how wide the page is
  and the starting zoom. Next.js generates it from a `viewport` export. Without one, mobile sizing
  is left to browser defaults and notch handling is unavailable.
- **safe-area inset** — the space a phone reserves for the notch/camera and the bottom
  home-indicator bar. `env(safe-area-inset-top/bottom/left/right)` are CSS values for those gaps so
  fixed elements don't hide under hardware.
- **dvh** — "dynamic viewport height": `100dvh` is the visible height *accounting for* the mobile
  browser's collapsing toolbars, unlike `100vh` which is fixed and can cut off content behind the
  toolbar.
- **focus-visible** — a CSS pseudo-class that styles an element only when it's focused via keyboard
  (not on mouse click), so we can show a focus ring for keyboard users without an always-on outline.
- **clamp** — a CSS function `clamp(min, preferred, max)` that smoothly scales a value (here font
  size) between a floor and a ceiling based on viewport width — fluid sizing without breakpoints.
- **breakpoint** — a screen-width threshold (e.g. `max-width:360px`) at which CSS rules change to
  adapt the layout to that size class.
- **prefers-reduced-motion** — an OS/browser accessibility setting; `@media (prefers-reduced-motion:
  reduce)` lets CSS turn off animations for users who request less motion.
- **OKLCH** — a perceptually-uniform color space (`oklch(lightness chroma hue)`); the brand accent
  (`--kd-accent`) and mint (`--kd-mint`) are defined in it. We keep these values exactly.

### Approval request

Requesting **Approve Build**. The plan is surgical (2 files, one optional class hook that already
exists in markup), reuses the existing `--kd-*` token system, adds no dependencies, preserves the
brand and desktop, and maps every one of the 16 criteria to a slice with a machine-checkable
acceptance probe. Build will run as a single Designer driver implementing S1→S5, then S6 verifies
(tests, dual builds, viewport/base-path grep, dual-theme/dual-language overflow + contrast).

Options: **Approve Build** / request changes / stop.
