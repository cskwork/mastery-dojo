# Changelog 2026-05-31

## Python Dojo Scaffold

- Created a fresh Next.js App Router project because the workspace only contained `.omx` state and no existing product files.
- Used `lingdojo/kana-dojo` as the interaction reference: dojo-style main menu, training modes, progress tracking, and achievements.
- Replaced the Japanese-learning domain with Python curriculum tracks from beginner syntax through mastery topics.
- Kept domain logic in `data/pythonCurriculum.ts` and `lib/training.ts` so UI components stay focused on presentation and interaction.
- Added Vitest coverage for answer normalization, progress recording, drill selection, track summaries, and achievement thresholds.

## KanaDojo Visual Alignment

- Reworked the first screen to match `kanadojo.com` more directly because the earlier beige roadmap style diverged from the requested target.
- Kept the Python curriculum data and progress logic, but changed the initial surface to the KanaDojo-style dark token grid, centered title/welcome column, three dojo buttons, floating command button, and footer link/meta layout.
- Used Python tokens in the background grid so the replica keeps the same visual rhythm while the learning material stays Python-focused.

## Sound and Training Flow

- Added the same `nk-creams` click sound sample family used by KanaDojo so primary interactions produce audible feedback after the first user gesture.
- Connected sounds to dojo entry, sidebar navigation, mode changes, answer choices, correct answers, misses, and sound toggling.
- Added a KanaDojo-style training surface with sidebar navigation, track title, welcome panel, progress metrics, mode tabs, drill card, and fixed action bar.
- Added `THIRD_PARTY_NOTICES.md` because the copied sound assets and replica reference come from the AGPL-3.0 KanaDojo project.
- Split the home footer links from the app footer meta because KanaDojo's training screen keeps the app surface focused on the sidebar, content, and bottom action controls.
- Declared the SVG app icon through Next metadata so browser verification does not report a missing default favicon.
- Capped the desktop drill-card height against the fixed action bar so the training controls do not cover answer feedback on common laptop-sized viewports.
- Separated the reusable KanaDojo-style shell from the Python domain conversion so this repo can stay lightweight while still supporting future domain variants.
- Added `data/dojoTypes.ts`, `domains/python.ts`, and a repo-local `AGENTS.md` to make the template-vs-domain boundary explicit for future agent work.
- Updated older scaffold components to consume generic domain types/settings instead of Python-specific imports and labels.
- Changed the quiz flow to hold the current drill after a correct answer, show the explanation, and require an explicit next-drill action so progress feedback is not lost immediately.
- Added `.gitignore` and `.ignore` for dependency, build, and browser-artifact output so the repo and local exploration stay lightweight when the template and Python conversion live together.
- Expanded the single Python domain into a domain registry with Python, PostgreSQL, and Redis Streams variants because the product needs one reusable KanaDojo-style shell for many learning topics.
- Added PostgreSQL and Redis Streams curricula with one drill per mode on every track so each registered domain can be trained through Pick, Reverse, Input, and Debug without special cases.
- Added a domain switcher on the home and training surfaces, with separate storage keys per domain so progress does not bleed between topics.
- Recorded that every domain needs beginner-to-expertise curriculum depth, and added git checkpoint guidance after successful verification.
