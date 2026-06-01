# Run: improve-mobile-visibility (2026-06-02)

/ supergoal run. Mode: **LEGACY** (improve existing UI on a Next.js static-export app hosted on
GitHub Pages). UI/UX overlay active (taste-skill v2 design authority for the Build/QA phases).

## Objective
Improve mobile visibility and compatibility of the MasteryDojo learning app (KanaDojo-inspired,
https://kanadojo.com/ as the look reference). Hosted on GitHub Pages.

## Topology
Single driver + isolated helper subagents for independent probes (LEGACY default). Read-only through
Human Feedback; no source-tree write before human approval.

## Priority Rules
Domain(s): web-design (mobile responsiveness + accessibility + performance)  (source: ten-rules)
1. Start from the mobile user's purpose — touch-first, thumb-reachable primary actions.
2. Above-the-fold on small screens shows what/why/next-action in ~5s; never force horizontal scroll.
3. Visual hierarchy via a fluid type scale + 8pt rhythm; one section = one message = one action.
4. One consistent design system; same component patterns hold across every breakpoint.
5. Interactions discoverable with feedback; visible focus ring; idle/active/disabled states defined.
6. Touch targets ≥ 44×44 (hard min 24×24 per WCAG 2.2); spacing prevents mis-taps.
7. Accessibility baseline: contrast body ≥ 4.5:1 / large ≥ 3:1; semantic HTML; 200% zoom = no h-scroll; honor prefers-reduced-motion.
8. Performance is a design decision: mobile LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1; media has width/height/aspect-ratio; animate transform/opacity only.
9. Correct viewport meta (width=device-width, initial-scale=1) + safe-area insets; no fixed-width layouts.
10. Brand memory: the KanaDojo-inspired signature look stays intact on mobile — not a degraded desktop.

## Run narrative
- 2026-06-02 Intake/Explore dispatched (Analyst → brief.md, Explore → codebase map below).

## Codebase Map (mobile)

Read-only map. Every claim carries a `file:line` citation. The entire live UI is one client
component (`PythonDojoApp.tsx`) styled by one global stylesheet (`app/globals.css`). All live
classes are `kana-*`.

### Composition (layout → page → app → sub-components)

- `app/layout.tsx:16-30` — `RootLayout`: the html shell. `<html lang="ko" suppressHydrationWarning>`
  (`:18`), inline bootstrap `<script>` (`:20-25`) that pre-hydration sets `data-theme` and `lang`
  from localStorage, `<body>{children}</body>` (`:27`). **No `viewport` export and no `<meta name="viewport">`** (see Viewport section).
- `app/page.tsx:3-5` — `Home` renders `<PythonDojoApp />`. That is the whole route.
- `components/dojo/PythonDojoApp.tsx:926-1095` — `PythonDojoApp` (the "use client" root, `:1`).
  State machine `view: "home" | "dojo" | "progress"` (`:927`) picks one of three screens (`:1026-1077`),
  all wrapped in `LanguageContext.Provider` (`:1080`); `SettingsOverlay` renders on top when open (`:1082-1092`).
  Theme is applied by writing `document.documentElement.dataset.theme` (`:962`) and `lang` (`:972`).
  - Screen `home` → `HomeScreen` (`:253-322`): `<main class="kana-page">` → `TokenBackdrop` (`:98-111`),
    `.kana-floating-action` (`:285`), `.kana-home` → `.kana-header` (brand `h1.kana-brand-home` + `HeaderControls`),
    `DomainSwitcher` (`:150-181`), `WelcomePanel` (`:183-191`), `.kana-dojo-grid` of `DojoCard`s (`:193-218`), `FooterLinks` (`:237-251`).
  - Screen `dojo` → `TrainingView` (`:509-664`): `<main class="kana-app-page">` → `Sidebar` (`:324-410`)
    + `.kana-dojo-main` (`.kana-dojo-title` header, `.kana-section-panel`, `.kana-stat-grid` of `Metric`s,
    `ModeSelector` `:421-440`, `DrillCard` `:471-507`, fixed `.kana-action-bar` `:637-659`) + `BottomMeta` (`:661`).
  - Screen `progress` → `ProgressView` (`:784-855`): same `.kana-app-page` + `Sidebar` shell, `.kana-dojo-main`
    holds `ProgressTabsBar` (`:675-700`) and one of `StatisticsPanel`/`StreakPanel`/`AchievementsPanel` (`:702-782`).
- **DEAD/legacy components — out of scope.** `Header.tsx`, `ModePicker.tsx`, `ProgressPreview.tsx`,
  `TrackRail.tsx`, `TrainingPanel.tsx` use a separate `dojo-*` / `track-rail` / `training-panel` class
  namespace that does NOT exist in `app/globals.css` and are imported by nothing (grep of `app/ components/ lib/ data/`
  found zero imports). Changing mobile CSS must NOT touch these; they have no styling and are not rendered.

### globals.css responsive audit

`app/globals.css` is 1275 lines, hand-written (no Tailwind/utility framework). Mobile-first? No — desktop-first
with three max-width breakpoints layering overrides downward.

**@media queries (only 3, all max-width / desktop-first):**
- `app/globals.css:740` — `@media (max-width: 760px)`: home tweaks (`.kana-home` width, `.kana-domain-switcher` → 1 col, smaller header/controls/welcome). Targets the **home** screen.
- `app/globals.css:779` — `@media (max-width: 900px)`: the big one for the **app/training** screen. Collapses `.kana-app-page` from 2-col grid to `display:block` (`:780-783`), un-fixes `.kana-sidebar` to relative full-width top bar (`:785-791`), sidebar `nav` → 2 cols (`:797-799`), stat/mode grids → 2 cols (`:823-826`), `.kana-action-bar` spans full width as 3 equal cols (`:828-834`), hides `.kana-sidebar-collapse` (`:810-812`).
- `app/globals.css:837` — `@media (max-width: 520px)`: phone. Header → grid (`:858-861`), stat/mode/choice grids → 1 col (`:911-915`), `.kana-drill-card` height becomes auto (`:905-909`), `.kana-footer-meta` static (`:885-890`), shrinks token backdrop / floating action / cards / titles.

  Gaps: between 521-759px the home layout still uses the 760px rules but `.kana-action-bar` etc. from the 900px rule apply; the **smallest tested breakpoint is 520px** — nothing below 360px is specifically handled.

**Fixed pixel widths / min-widths that threaten a 360px phone:**
- `.kana-app-page` desktop grid `grid-template-columns: 320px minmax(0,1fr)` (`:398`) and collapsed `84px ...` (`:486`) — neutralized below 900px by `display:block`, so OK on phone.
- `.kana-sidebar { width: 320px }` (`:404-413`, fixed-position) — overridden to `width:100%` at ≤900px (`:786`). OK.
- **`.kana-action-bar` (`:710-723`)**: `position:fixed; left:344px; right:24px` with `grid-template-columns: 224px 224px minmax(260px,384px)` — assumes desktop. At ≤900px it is reset to `left:0;right:0` 3-col (`:828-834`). Still **3 equal columns down to 360px**; with `gap:8px` and three buttons whose `font-size:20px` Zen Maru text (`.kana-action-bar button` `:725-733`, reduced to 16px only at ≤520px `:917-920`), the labels can be tight but the grid itself won't force h-scroll.
- `.kana-domain-switcher` desktop `repeat(auto-fit, minmax(168px,1fr))` (`:171-176`) and `.kana-dojo-grid` `minmax(160px,1fr)` (`:289-293`) — `minmax(160px,…)` / `168px` exceed a 360px single column only marginally; auto-fit keeps 1 col on phone. `.kana-domain-switcher.compact` at ≤900px is forced to `repeat(3, minmax(0,1fr))` (`:801-804`) — **3 columns of domain buttons on a tablet-width sidebar**; on a 360px phone (≤520px has no override for this, so the 900px rule wins) this is 3 cols ≈ 110px each, a likely cramped/overflow risk for the brand names (`strong` is `white-space:nowrap; text-overflow:ellipsis` `:211-220`, so it clips rather than overflows).
- `.kana-welcome p { max-width: 640px }` (`:277-283`) and `.kana-section-panel p { max-width:920px }` (`:560-565`) — max-width, safe (won't overflow).
- `.kana-concept-chip` / `pre` (`:630-643`) `min-height:118px`, `overflow:auto`, `font-size:17px` monospace — **long code lines in `<pre>` scroll inside the card** (`overflow:auto`), so a wide code drill won't blow out the page, but at ≤520px the card becomes `overflow:visible` (`:905-909`) which could let a wide `<pre>` push width. **Top horizontal-overflow suspect on phones.**

**Layout primitives:** CSS grid + flex throughout; no float/table. `.kana-page` and `.kana-app-page` are
the two top-level containers; `.kana-page` has `overflow-x:hidden` (`:53-61`) which masks home-screen
overflow, but **`.kana-app-page` has no `overflow-x:hidden`** (`:395-402`) — the training/progress screens are the
ones at risk of horizontal scroll.

**Font sizing approach:** almost entirely **fixed `px`** (e.g. `h1` 36px `:137-148`, sidebar nav 22px `:441-453`,
drill `pre` 17px `:630-643`, action-bar 20px `:725`). Body font set on `body` (`:30-36`). No `rem` and no `clamp()`
for type. The ONLY `clamp()` in the file is a height, not a font: `.kana-drill-card { height: clamp(426px, calc(100vh - 470px), 560px) }`
(`app/globals.css:615`). Fluid units in the file: `min-height:100vh` (`:31,55,123,396`), `width:min(980px, calc(100vw - 32px))` (`:122`),
the one `clamp` height (`:615`). **No fluid type scale exists — counter to Priority Rule 3.**

**Fixed/sticky positioning (viewport-relative, mobile-sensitive):**
- `.kana-floating-action` `position:fixed; top:14px; right:14px` (`:102-116`) — no safe-area inset.
- `.kana-footer-meta` `position:fixed; bottom:12px; left/right:16px` (`:367-379`) — becomes `static` at ≤520px (`:885-890`).
- `.kana-sidebar` `position:fixed; inset:0 auto 0 0` (`:404-413`) — relative at ≤900px (`:785-791`).
- `.kana-action-bar` `position:fixed; bottom:48px` (`:710`) → `bottom:0` at ≤900px (`:828-834`) — **sits flush to the bottom edge with no `env(safe-area-inset-bottom)`**, so on notched phones it can hide under the home indicator. Counter to Priority Rule 9.
- `.kana-overlay` `position:fixed; inset:0` settings modal (`:1115-1124`); `.kana-modal { width: min(440px,100%) }` (`:1126-1133`) — modal is responsive.

**Touch-target sizes (WCAG 2.2 / Rule 6 = 44x44 ideal, 24x24 min):**
- PASS: action-bar buttons `min-height:58px` (`:725`, →52px ≤520px `:917`); choice buttons `min-height:58px` (`:677`); mode buttons `54px` (`:595`); sidebar nav buttons `52px`/`48px` (`:441-453`,`:805-808`); input `54px` (`:654`); domain-switcher `56px`/`42px compact` (`:178-242`); progress tabs `46px` (`:982-993`); setting-row buttons `42px` (`:1177-1186`).
- BORDERLINE/FAIL: **`.kana-controls button` 40x40, shrinks to 36x36 at ≤760px** (`:155-164`, `:760-763`) — below 44px and at 36px barely above the 24px hard floor; these are theme/sound/settings/lang toggles, primary chrome on the home header. **The `.kana-lang-toggle` button (PythonDojoApp.tsx:133-136) packs BOTH a `<Languages>` icon and a "KO"/"EN" `<span>` into a 40px-wide grid cell that has NO dedicated CSS rule** (`kana-lang-toggle` is not defined in globals.css) — it inherits `.kana-controls button { width:40px; display:grid }` (`:155-164`), so icon+text overflow/clip in 40px. Tap + visual risk.
- `.kana-floating-action` 48x48 → 44x44 ≤520px (`:102`,`:853-856`) PASS.
- `.kana-sidebar-collapse` 44x32 (`:475-483`) — 32px tall, below min; but hidden ≤900px (`:810-812`) so irrelevant on phone.

**Focus styles:** **No `:focus` or `:focus-visible` rule anywhere in globals.css** (grep found none).
The drill `input` explicitly sets `outline:none` (`:654-663`) with no replacement focus ring. Brand `h1`
is a `role="button" tabIndex={0}` (PythonDojoApp.tsx:290-298, 356-364) keyboard target with no visible focus
indicator. Counter to Priority Rule 5/7. Hover states are rich (`:166-169`, `:1226-1241`) but there is no
keyboard-focus affordance.

**prefers-reduced-motion: NOT honored.** No `@media (prefers-reduced-motion)` block exists. Persistent
transitions run unconditionally: `html { transition: background .25s, color .25s }` (`:924-926`) and the
3D-button block `transition: transform .1s, box-shadow .1s, background .2s, color .2s` plus `translateY`
hover/active transforms on every button (`:1194-1275`). Counter to Priority Rule 7/8.

### Viewport meta status

**ABSENT.** `app/layout.tsx` has NO Next `export const viewport` and the `<head>` (`:19-26`) contains only the
theme/lang bootstrap script — no `<meta name="viewport" content="width=device-width, initial-scale=1">`.
Grep for `viewport` / `user-scalable` / `theme-color` / `safe-area` / `env(safe-area` across
`app/ components/ lib/` returned nothing. Note: Next.js does inject a **default** viewport meta
(`width=device-width, initial-scale=1`) when no `viewport` export is present, so the page is not catastrophically
broken on phones — but there is no project-controlled viewport, no `viewportFit: "cover"` for notch/safe-area,
and no `themeColor`. This is the smallest, highest-leverage fix: add `export const viewport: Viewport` to
`app/layout.tsx`. Counter to Priority Rule 9.

### Component layout containers & inline styles

- Top-level containers, all in `PythonDojoApp.tsx`: `.kana-page` (home, `:283`), `.kana-app-page`
  (dojo `:586` / progress `:817`), `.kana-sidebar` (`:355`, the desktop rail / mobile top bar),
  `.kana-dojo-main` (right column `:599,:831`), fixed `.kana-action-bar` (`:637`), fixed `.kana-floating-action` (`:285`),
  fixed `.kana-footer-meta` (`BottomMeta` `:220-235`), `.kana-overlay`/`.kana-modal` (`SettingsOverlay` `:877-878`).
- Desktop-width assumptions in markup: the two-column `.kana-app-page` (sidebar + main) and the
  `.kana-action-bar` 3-wide fixed dock are the structures that the ≤900px / ≤520px media rules must reflow;
  they are CSS-driven (no width logic in JS), so a mobile fix is CSS-only here.
- **Inline styles (only two, both width-driven progress bars, low risk):**
  `StatisticsPanel` progress fill `style={{ width: `${summary.percent}%` }}` (`:732`) and
  `ProgressPreview` (dead component) `:21`. No inline layout/positioning that would fight the stylesheet.
- `Sidebar` holds its own `collapsed` state (`useState`, `:350`) toggled by `.kana-sidebar-collapse`
  (`:396-407`); the collapse button is hidden ≤900px so collapse is desktop-only. Sidebar collapse CSS uses
  `:has()` selector `.kana-app-page:has(.kana-sidebar.collapsed)` (`globals.css:485-487`) — modern but fine for the static-export target.

### Reusable tokens & patterns (use these to keep blast radius small)

**:root design tokens (`app/globals.css:3-18`), with a full light-theme override set at `:root[data-theme="light"]` (`:928-943`):**
`--kd-bg`, `--kd-bg-soft`, `--kd-panel`, `--kd-line`, `--kd-line-strong`, `--kd-accent` (oklch),
`--kd-mint` (oklch), `--kd-text`, `--kd-muted`, `--kd-dim`, `--kd-shadow`, `--kd-ledge`,
`--kd-ledge-accent`, `--kd-face`. **There is NO spacing / radius / font-size / breakpoint token** — all
spacing, radii (mostly 14-16px), and the three breakpoints (760/900/520) are hard-coded literals. A clean
mobile pass could introduce spacing/type tokens, but the minimal-blast-radius path is to edit the existing
three @media blocks and add one phone breakpoint, plus a viewport export.

Reusable patterns already present: the 3D raised-button system is centralized in one block
(`:1194-1275`) covering every `kana-*` button class — touch/active feedback is already consistent.
`box-sizing:border-box` is global (`:20-22`). Theme switching is token-only (no per-component theme code),
so palette changes stay in `:root`. i18n strings flow through `useT()` / `LanguageContext` (PythonDojoApp.tsx,
`@/lib/i18n`) — no hardcoded UI copy to disturb.

### Blast radius

- **PRIMARY (will change): `app/globals.css`** — all responsive work lives here (the 3 @media blocks,
  fixed positioning, tap-target heights, focus styles, reduced-motion). Single-file, no module scoping,
  so a regression risk is purely visual cascade.
- **`app/layout.tsx`** — add `export const viewport` (and optionally `themeColor`/`viewportFit:"cover"`).
  One-symbol addition; the existing bootstrap script and `metadata` export are untouched.
- **Possibly `PythonDojoApp.tsx`** — only if the lang-toggle needs a dedicated `.kana-lang-toggle` class
  hooked up, or if any container needs a new class for a mobile-specific rule. Markup is otherwise reflowed
  purely by CSS. Avoid touching the state machine (`:927-1077`), theme effects (`:956-964`), or i18n effects (`:966-974`).
- **DO NOT TOUCH:** the five dead `dojo-*` components (Header/ModePicker/ProgressPreview/TrackRail/TrainingPanel)
  — unrendered, unstyled, unimported.

**What could regress:**
- *Theme switching*: light-theme overrides (`:928-973`) are keyed off the same `kana-*` selectors; any class
  rename or new media rule must be verified in BOTH themes. Theme is set via `dataset.theme` in JS (PythonDojoApp.tsx:962) + pre-hydration script (layout.tsx:23).
- *i18n*: `lang` attr is set pre-hydration (layout.tsx:23) and in effect (PythonDojoApp.tsx:972). Korean strings
  are longer/wider than English in places (domain-switcher `strong`, action-bar labels) — verify mobile widths in
  BOTH `ko` and `en`; the `feat/i18n-ko-en` branch is the current context.
- *base-path*: `withBasePath` (layout.tsx:3,12; `@/lib/basePath`) and `next.config.ts` (`basePath` via
  `NEXT_PUBLIC_BASE_PATH`, `output:"export"`) — CSS/viewport changes don't interact with base-path, but any new
  asset URL (e.g. a font or image) MUST route through `withBasePath` or it 404s on GitHub Pages.
- *tests*: only `test/training.test.ts` (pure training-logic, vitest) — exercises no CSS/layout/DOM, so mobile
  CSS work cannot break the suite. There is no visual/E2E test guarding layout, so verification must be manual
  (device emulation at 360px + 520px + 900px, both themes, both languages).
