# Curriculum Audit

This audit defines "full curriculum" for the domain-converted dojo apps. The target is not a full Japanese-content clone of KanaDojo; it is a KanaDojo-style training shell with complete beginner-to-expertise material for each registered technical domain.

## Completion Criteria

- Every registered domain has four ordered tracks ending at `Expertise`.
- Every registered domain has at least 280 drills.
- Every track has at least 70 drills.
- Every required concept appears in Pick, Reverse, Input, and Debug modes.
- Each domain keeps an independent storage key so progress cannot bleed across topics.
- The visible dojo cards report the expanded drill counts.
- Sound requests load from `public/sounds/monkeytype-pack/nk-creams`.

## Current Domains

| Domain | Tracks | Drills | Source of Truth |
| --- | --- | ---: | --- |
| Python | Foundations, Data Fluency, Program Design, Mastery Lab | 300 | `data/pythonCurriculum.ts` |
| PostgreSQL | SQL Foundations, Query Fluency, Schema Design, Production Lab | 296 | `data/postgresqlCurriculum.ts` |
| Redis Streams | Stream Basics, Producer Flow, Consumer Groups, Reliability Lab | 296 | `data/redisStreamsCurriculum.ts` |

## Guardrails

- `data/curriculumRequirements.ts` lists the required concept map for every domain and track.
- `test/training.test.ts` fails if a required concept is missing from any training mode.
- `npm run test` checks trainability, domain isolation, depth floors, and required concept coverage.
- `npm run build` checks the Next.js production bundle.

## Reference Material

- KanaDojo project shape and interaction target: `https://github.com/lingdojo/kana-dojo`
- Python scope: `https://docs.python.org/3/tutorial/index.html`
- PostgreSQL scope: `https://www.postgresql.org/docs/current/`
- Redis Streams scope: `https://redis.io/docs/latest/develop/data-types/streams/`
