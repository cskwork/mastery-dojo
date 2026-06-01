# Brief — Improve mobile visibility and compatibility (MasteryDojo)

Mode: LEGACY (improve existing UI). Date: 2026-06-02.

## Goal

Make the existing MasteryDojo learning app comfortably usable on small
phones while preserving its KanaDojo-inspired signature look
(https://kanadojo.com/). Surgical fixes only to the current single-page
app (`app/page.tsx` → `components/dojo/PythonDojoApp.tsx`,
`app/globals.css`, `app/layout.tsx`). No content, structure, or desktop
redesign.

The "why": the app ships no `viewport` export (so no viewport meta on the
static export), no `prefers-reduced-motion` handling, no safe-area insets,
uses `100vh` (broken under mobile browser chrome), and its smallest tuned
breakpoint is 520px — nothing is verified at 320/360px. These are the
concrete gaps this work closes.

## Audience

Learners drilling Python / PostgreSQL / Redis Streams on a phone
(Korean + English), one-handed, in portrait, often on small/older devices,
visiting the GitHub Pages sub-path build and the Vercel root build.

## Acceptance Criteria (numbered, machine-checkable)

Each is phrased so a later QA/command probe (Playwright + emulated
viewport, axe/contrast check, build, vitest) can prove pass/fail.

1. **Viewport meta present.** The rendered HTML `<head>` of the exported
   page contains exactly one `<meta name="viewport">` with
   `width=device-width` and `initial-scale=1` (via a Next.js `viewport`
   export in `app/layout.tsx`). No `maximum-scale` / `user-scalable=no`
   (zoom must stay enabled).

2. **No horizontal overflow at 320px.** At viewport width 320px (and at
   360px), `document.documentElement.scrollWidth <= window.innerWidth`
   on the landing/dojo view and on every interactive subview (domain
   select, drill/training, results). Zero horizontal scrollbar.

3. **No horizontal overflow at 200% zoom.** At a 1280px logical viewport
   zoomed to 200% (effective ~640px), no horizontal scroll appears on the
   main views (WCAG 1.4.10 reflow).

4. **Primary tap targets >= 44x44 CSS px.** Every primary action
   (domain/dojo cards, mode buttons, start/submit, answer choices, hint
   reveal, sidebar/menu toggle, language + theme toggles, footer nav
   links) has a rendered bounding box with both width and height
   `>= 44` CSS px at 360px width. No primary control is smaller than the
   24x24 hard floor.

5. **Thumb-reach for the main action.** On a 360x740 viewport, the
   primary call-to-action for the active drill (start / submit / next, or
   the floating action) sits within the bottom 50% of the viewport
   height, or is reachable without a fixed element overlapping it — i.e.
   not stranded in the top zone. Probe: the primary action's vertical
   center `>= viewportHeight * 0.5` for at least the drilling view.

6. **Fluid, readable type scale.** Body copy renders at `>= 16px`
   computed `font-size` at 360px width (prevents iOS auto-zoom on focus
   and keeps legibility); no primary text content renders below 14px.
   Type scaling uses fluid/`clamp`-style rules rather than abrupt
   single-step jumps, verified by no body text overflowing its container
   at 320px.

7. **Spacing on an 8pt rhythm.** Section gaps and primary control
   padding at the mobile breakpoint resolve to multiples of 4px (8pt
   system with 4px half-steps); probe samples computed margins/padding on
   key containers and asserts each is divisible by 4.

8. **Body text contrast >= 4.5:1; large text >= 3:1.** Computed
   foreground/background contrast for body text on the dark theme meets
   WCAG AA (>= 4.5:1), and large/heading text meets >= 3:1, on both the
   `dark` and `light` themes. Verified by an automated contrast check
   (e.g. axe) reporting zero color-contrast violations.

9. **prefers-reduced-motion respected.** Under emulated
   `prefers-reduced-motion: reduce`, decorative/looping animations and
   non-essential transitions are disabled or reduced — i.e. a
   `@media (prefers-reduced-motion: reduce)` block exists in
   `app/globals.css` and the animated backdrop / transitions have their
   `animation`/`transition` neutralized (probe: animated elements report
   `animation-duration`/`transition-duration` of `0s` or `none` under the
   emulated setting).

10. **Safe-area insets honored.** Layout uses `env(safe-area-inset-*)`
    (paired with `viewport-fit=cover` in the viewport export) so fixed/
    edge elements (header, footer/floating action) are not clipped by
    notches/home indicators. Probe: the `viewport` export includes
    `viewportFit: "cover"` and `app/globals.css` references
    `safe-area-inset`.

11. **No fixed `100vh` that breaks under mobile chrome.** Full-height
    surfaces use a dynamic-viewport unit (`100dvh`, or `100svh`/`min(...)`)
    rather than bare `100vh`, so content is not cut off behind mobile
    browser toolbars. Probe: no remaining bare `height: 100vh` /
    `min-height: 100vh` on primary full-height containers (a `dvh`
    fallback is acceptable).

12. **GitHub Pages base-path preserved.** All asset/icon/internal URLs
    still resolve through `withBasePath` / Next `basePath`; the exported
    sub-path build references assets under the base path (no root-absolute
    `/` asset URLs introduced). Probe: exported HTML/CSS contains no new
    base-path-bypassing `"/..."` asset references; `lib/basePath` usage
    unchanged.

13. **Visible focus + interaction states.** Every interactive control
    shows a visible focus indicator on keyboard focus (`:focus-visible`
    outline/ring, not `outline: none` with no replacement) and a distinct
    pressed/active or hover state. Probe: tab through controls; each
    focused element has a non-zero, non-transparent outline or
    box-shadow.

14. **Existing test suite still passes.** `npm test` (vitest,
    `test/training.test.ts`, currently ~8 cases) exits 0 with no
    regressions.

15. **Build still succeeds.** `next build` (static `output: export`)
    completes with exit code 0 and emits the static export, with and
    without `NEXT_PUBLIC_BASE_PATH` set.

16. **Signature look preserved.** The KanaDojo-inspired visual identity —
    OKLCH violet/mint accent palette, dark panel surfaces, token backdrop,
    rounded card ledges — remains intact on mobile (no flattening to a
    generic layout). Verified by visual review against the desktop
    baseline; core CSS custom properties (`--kd-accent`, `--kd-mint`,
    `--kd-panel`, etc.) and the card/backdrop structure are retained.

## Non-goals

- No curriculum / content / question-data changes.
- No new learning domains; no changes to existing domain definitions
  beyond styling.
- No desktop redesign; desktop layout stays as-is (changes target
  small-viewport behavior).
- No new dependencies / libraries.
- No backend, API, or data-layer work (app is a static client-only SPA).
- No i18n string changes beyond what a layout/markup fix strictly
  requires (Korean + English coverage stays as-is).
- No restructuring of the single-page architecture or component split.
