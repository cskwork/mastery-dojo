---
version: 1
slug: "components-dojo-pythondojoapp-tsx"
primary_target: "components/dojo/PythonDojoApp.tsx"
related_targets: ["app/globals.css"]
---

# Surface brief: MasteryDojo app shell (home, dojo, progress, settings)

Scope: the whole single-page app in `components/dojo/PythonDojoApp.tsx` and `app/globals.css`. Visitor mode: **Operate** (the learner completes drills).

Audience and job: Korean-first developers and certification students clearing short drills on laptop or phone. Task: pick a domain and track, answer drills in four modes, see honest progress, resume later. Constraints: domain-agnostic shell, stable storage keys, KO/EN, light and dark.

Unattended run: no answer mechanism existed; the assigned direction was built with the raises below. Challenger verdicts: variable-font specimen declined (kept: hierarchy by scale contrast alone); split-flap concourse declined (kept: ruled fixed cells for progress); drawcord cape declined (kept: the accent is also the control); tensegrity column declined (kept: distinct state vocabulary); starship terminal declined (kept: typed commands acknowledged on one line); seedbed lobes declined (kept: one field of total commitment, the reverse-video status bar).

## Direction contract

THESIS: The dojo is a manual page you can answer. Every domain is a page (`python(1)`), every track a numbered section, every drill mode a flag. Refuses the category default of rounded gamified cards on a glowing dark field (the incumbent KanaDojo token wall).

OWN-WORLD: Unix manual typography rendered for the web. Running header and footer lines, bold caps section heads flush left with indented bodies, literals in Nanum Gothic Coding, prose in Gothic A1. Two grounds: printed manual (cool grey-white paper, black ink) and terminal man (graphite, pale ink). One ultramarine accent for literals and focus. Selection, active navigation, and the status bar are reverse video: ink blocks with paper text, square corners, hairline rules, no shadows, no radii above 2px.

STORY: The learner sees what this manual covers, where they stopped, and continues in one action. In a drill they read one large question, answer by number or by typing, and the status line tells them what happened and what key comes next.

FIRST VIEWPORT: Home: running header (`PYTHON(1) · MasteryDojo 매뉴얼 · controls`), NAME line with domain brand at display scale, a reverse-video CONTINUE bar, then SECTIONS as four ruled rows with cell progress meters. Domain index as a SEE-ALSO style list beside it on desktop and behind an INDEX toggle on phone. Dojo: prompt at display scale, numbered options, fixed `less`-style status bar at the bottom holding Hint and Check/Next.

FORM: man page / Unix manual (position 6 of 7 on the grounded list; seed key 1c7aff8f).

SIGNATURE INTERACTION: `less`-style keys: 1-4 choose, Enter checks or advances, H shows the hint; the status bar echoes the result in reverse video. Motion: a reverse-video fill sweeps across the chosen line (160ms), snapping under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
