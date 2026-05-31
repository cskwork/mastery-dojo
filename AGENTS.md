# MasteryDojo Agent Notes

## Product Direction

- Build a KanaDojo-style learning app family in one lightweight repo.
- Keep every registered dojo as a real domain conversion, not a throwaway demo.
- Keep the base shell reusable so later domains can become their own repos if needed.
- Content must be full-curriculum quality from beginner to expertise/mastery, not a thin sample set. Each domain should feel complete enough to study through.
- Research current official sources before adding or changing domain-specific curriculum. Prefer official documentation and Context7 where available; use canonical education references only when a domain has no single official owner.

## Domain Variant Boundary

- Shared shell: `components/dojo/`, `lib/training.ts`, `app/`, shared styles, and shared sounds.
- Domain registry and default selector: `data/dojoDomain.ts`.
- Domain contracts: `data/dojoTypes.ts`.
- Domain shell factory for new variants: `domains/domainFactory.ts`.
- Generated topic-bank helper: `data/topicBank.ts`.
- Python variant: `domains/python.ts` plus `data/pythonCurriculum.ts`.
- PostgreSQL variant: `domains/postgresql.ts` plus `data/postgresqlCurriculum.ts`.
- Redis Streams variant: `domains/redisStreams.ts` plus `data/redisStreamsCurriculum.ts`.
- Do not hardcode a subject name, track mark, storage key, footer text, or metadata in shared UI. Put those values in a domain module.

## Adding Another Domain

1. Research current source material first and record the important source URLs in `data/curriculumRequirements.ts` and `docs/curriculum-audit.md`.
2. Add a curriculum file under `data/<domain>Curriculum.ts` with four ordered tracks ending at `Expertise`.
3. Use `defineTopics` so each track has at least eighteen concepts. Four generated modes per concept produce 72 drills per track and 288 drills per domain.
4. Add a domain module under `domains/<domain>.ts` using `createLearningDomain`.
5. Add the new domain to `learningDomains` in `data/dojoDomain.ts`.
6. Add or derive the required concepts in `data/curriculumRequirements.ts`; tests must fail if any required concept is missing from Pick, Reverse, Input, or Debug.
7. Keep the KanaDojo interaction shell intact unless the task explicitly changes the template.
8. Update README, `docs/curriculum-audit.md`, and `docs/changelog/changelog-YYYY-MM-DD.md`.

## Verification

- Run `npm run test`.
- Run `npm run build`.
- Open the local app in the browser and verify the home screen, domain switching, a dojo screen, and sound asset requests.
- After successful verification, initialize git if needed and make a checkpoint commit periodically.
