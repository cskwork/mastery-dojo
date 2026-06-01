# Changelog 2026-06-01

## ko/en i18n: complete Korean translation for all 12 domains + wire language toggle

### Problem
The WIP i18n scaffold (commit 42beb02) shipped a language toggle and a Korean
overlay system but it was never connected:
- `localizeDomain` was imported in `PythonDojoApp` but never called, so the app
  always rendered the canonical English domain data.
- `LanguageContext` had no provider/state, so the toggle button was a no-op and
  the language was effectively frozen at the default.
- Only `python` had a Korean overlay (and its factory-topic keys were wrong, so
  244/300 drills fell back to English). `linux` had an overlay file but it was
  not registered. The other 10 domains had no Korean at all — 3140 missing
  drill translations in total.

### Approach
Factory-generated drills (`buildCurriculumDrills`) are 100% templated from each
curriculum topic, so per-drill hand translation is wasteful and error-prone
(drill ids must match the factory exactly or the overlay silently no-ops).

- Added `data/i18n/ko/buildFactoryOverlay.ts`: a deterministic builder that
  reproduces the factory id scheme (`${prefix}-${topic.id}-${mode}`) and emits
  all four drill entries per topic from the canonical topic + two Korean strings
  (`conceptKo`, `answerKo`). Templates match the established LinuxDojo overlay.
  This guarantees id correctness by construction and shrinks the translation
  surface ~4x.
- Compact per-domain translation maps live in `data/i18n/ko/maps/<domain>.ts`
  (chrome + `topicsKo` + hybrid `baseDrills`). The old hand-written `python.ts`
  and `linux.ts` overlays were migrated into this form and deleted.
- `data/i18n/ko/index.ts` assembles every domain via the builder.
- Exported `curriculumTopics` from the three hybrid curricula (python, postgres,
  redis) so the builder can read them.

### App wiring (PythonDojoApp.tsx)
- Localize the active domain: `localizeDomain(getDomainById(domainId), lang)`.
- Added language state with `localStorage` persistence (`DEFAULT_LANGUAGE` = ko),
  `LanguageContext.Provider`, and `document.documentElement.lang`.
- Localized the Settings overlay via `useT()` and added a Language row.
- Localized remaining hardcoded aria-labels (learning domains, community/site
  links, progress views).
- Fixed a pre-existing type error: `HomeScreen` required `onHome` but the call
  site omitted it.

### Verification
- All 12 domains: 296–300 drills each, 0 missing overlay entries (audit script).
- `tsc --noEmit`, `next build`, and `vitest run` (8/8) all pass.
- Runtime spot-check confirms Korean rendering for factory + hybrid domains.

### Notes
- English stays canonical; `localizeDomain(domain, "en")` returns it unchanged.
- Korean keeps proper nouns/code tokens as-is (PostgreSQL, Kafka, XADD, JVM,
  BFS, f-string, SQL keywords). subjectName for product-named domains stays in
  the product's canonical form.

## Fix broken interactive features

- Hint button was a no-op (only played a sound) and the hint text was always
  shown, making the button pointless. Now the hint is hidden by default and the
  button reveals it (`hintVisible` state, reset on drill change/advance).
- Sidebar collapse button was a no-op. Now toggles an icon-only collapsed state
  via a `:has()` grid rule.
- Verified all on-screen features on the live deploy with a Playwright E2E pass
  (21/21): hint, choices, input mode, mode switch, track select, progress
  tabs, home nav, theme toggle, domain switch, language toggle, settings.

## Static export + GitHub Pages hosting

- `next.config.ts`: `output: "export"` + `trailingSlash` + `images.unoptimized`.
  `basePath`/`assetPrefix` come from `NEXT_PUBLIC_BASE_PATH` so root hosts
  (Vercel) and sub-directory hosts (GitHub Pages project site `/mastery-dojo/`)
  both build from the same source.
- `lib/basePath.ts` `withBasePath()` prefixes raw asset URLs Next does not
  auto-prefix (audio in `useDojoAudio`, favicon in `layout`).
- `.github/workflows/deploy-pages.yml` builds with `NEXT_PUBLIC_BASE_PATH=/mastery-dojo`
  and deploys via the official Pages actions; `public/.nojekyll` keeps `_next`.
- Repo made public (Pages on the free plan requires a public repo) and the
  `github-pages` environment branch policy extended to the feature branch.
- Live + verified (7/7 Playwright E2E) at https://cskwork.github.io/mastery-dojo/.
