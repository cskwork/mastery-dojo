# Changelog 2026-06-01

## Removed Japanese Kanji From Brand Names

- Stripped the `道場` kanji from every domain `secondaryName` (e.g. `"Kafka道場"` -> `"Kafka"`) because the user asked to remove all Japanese text shown in the UI.
- Scope limited to the rendered brand subtitle; English `Dojo` identifiers in code and the Japanese display fonts were left untouched since they are styling, not text content.

## Implemented Progress, Settings, and Theme Toggle

- These three controls (`HeaderControls` theme/settings buttons, sidebar `Progress`) were dead placeholders wired to `onPlay("tap")` only; the user reported clicking them did nothing.
- Built a `Progress` screen as a third app view, mirroring the `kanadojo.com/progress` reference with three tabs: Stats, Streak, Achievements. Adapted to this clone's data model (`ProgressSnapshot`, `getTrackSummary`, `getUnlockedAchievements`) instead of the reference's date-based streak grid, since this app does not track per-day activity.
- Added a `Settings` modal (theme toggle, sound toggle, reset progress for the active domain) reachable from any view.
- Added a real light/dark theme toggle: `theme` state persisted to `localStorage` and applied via `document.documentElement.dataset.theme`, with a light palette overriding the CSS variables and the few hardcoded dark surfaces.
- All three features live in the shared `PythonDojoApp` component and consume the active `domain`, so they apply automatically to every learning domain.
