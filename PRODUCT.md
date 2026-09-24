# Product

<!-- impeccable:product-schema 1 -->

> Interview substitution: this record was written during an unattended portfolio revamp run (2026-09-24). No structured question tool was available, so every fact below is inferred from the repository, README, AGENTS.md, and the live site at https://python-tutorial-pi.vercel.app. Lines marked **[inferred]** are hypotheses the owner has not confirmed.

## Platform

web

## Users

- Korean-speaking developers and students (Korean is the default UI language, English is a toggle) who want short, repeatable practice on a technical subject. **[inferred]**
- Typical scenes: exam preparation for Korean certifications (SQLD, 정보처리기사 실기), ramping up on a stack at work (Python, PostgreSQL, Spring Boot, Java, Kafka, Spark, Flink, Redis Streams, Linux), or interview prep (DSA). **[inferred from the domain list]**
- Sessions are short and frequent, on a laptop at a desk or on a phone in transit. **[inferred]**

## Product Purpose

MasteryDojo turns a technical subject into a drill ladder. Each of 12 domains has four ordered tracks that run from beginner recognition to expertise, and each concept is drilled in four modes: Pick, Reverse, Input (typed answer), and Debug. Progress (XP, streak, accuracy, cleared drills, achievements) is stored per domain in the browser. Success means a learner clears drills steadily and can see how far through a domain they are.

## Positioning

A KanaDojo / Monkeytype-style trainer applied to engineering curricula: the same concept is asked four ways (recognize, reverse, recall by typing, spot the bug), and every domain carries a full beginner-to-expertise bank (280+ drills per domain, enforced by tests), not a sample set.

## Operating Context

- Static export (Next.js `output: "export"`), hosted on Vercel (root) and GitHub Pages (`/mastery-dojo` base path). No backend, no accounts; progress lives in `localStorage`.
- Click-sound feedback uses KanaDojo's AGPL-3.0 `nk-creams` samples (see THIRD_PARTY_NOTICES.md).
- Bilingual: English data is canonical, Korean overlays merge at render time (`lib/localize.ts`, `data/i18n/`). Tests require every Korean drill prompt, hint, and explanation to contain Hangul.

## Capabilities and Constraints

- Domains: Python, PostgreSQL, Redis Streams, Spring Boot, Java, SQLD, Information Processing Practical (정보처리기사 실기), Linux, Apache Kafka, Apache Spark, Apache Flink, Data Structures and Algorithms.
- Shared shell must stay domain-agnostic: subject names, marks, storage keys, and footer text come from domain modules (AGENTS.md).
- Per-domain storage keys must stay stable so existing learners keep their progress.
- Light and dark themes, sound on/off, KO/EN language, reset progress.
- No analytics, accounts, or server features.

## Brand Commitments

- Name: MasteryDojo; per-domain brands such as PythonDojo, PostgresDojo, StreamsDojo.
- Acknowledged lineage: inspired by KanaDojo and Monkeytype; this credit stays in the welcome copy and THIRD_PARTY_NOTICES.md.

## Evidence on Hand

- Real curriculum content in `data/*Curriculum.ts` with source references in `docs/curriculum-audit.md`.
- No testimonials, user counts, or ratings exist. Do not invent them.

## Product Principles

1. The drill is the product: the question and its answers must be reachable within one glance on every screen size.
2. Honest progress: numbers shown to the learner come from their real stored attempts.
3. One shell, many subjects: design decisions must work for all 12 domains without per-domain code in shared UI.
4. Korean first, English equal: every visible string exists in both languages.

## Accessibility & Inclusion

- Keyboard-completable drills and dialogs; visible focus; reduced-motion respected; touch targets at least 44px. **[inferred baseline, no stated standard]**
