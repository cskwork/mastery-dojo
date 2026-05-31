# PythonDojo Agent Notes

## Product Direction

- Build a KanaDojo-style learning app family in one lightweight repo.
- Keep PythonDojo, PostgresDojo, and StreamsDojo as real domain conversions, not throwaway demos.
- Keep the base shell reusable so later domains can become their own repos if needed.
- Content must be full-curriculum quality from beginner to expertise/mastery, not a thin sample set. Each domain should eventually feel complete enough to study through.

## Domain Variant Boundary

- Shared shell: `components/dojo/`, `lib/training.ts`, `app/`, shared styles, and shared sounds.
- Domain registry and default selector: `data/dojoDomain.ts`.
- Domain contracts: `data/dojoTypes.ts`.
- Python variant: `domains/python.ts` plus `data/pythonCurriculum.ts`.
- PostgreSQL variant: `domains/postgresql.ts` plus `data/postgresqlCurriculum.ts`.
- Redis Streams variant: `domains/redisStreams.ts` plus `data/redisStreamsCurriculum.ts`.
- Do not hardcode a subject name, track mark, storage key, footer text, or metadata in shared UI. Put those values in a domain module.

## Adding Another Domain

1. Add a domain module under `domains/<domain>.ts`.
2. Add or import that domain's tracks and drills.
3. Add the new domain to `learningDomains` in `data/dojoDomain.ts`.
4. Keep the KanaDojo interaction shell intact unless the task explicitly changes the template.
5. Update README and `docs/changelog/changelog-YYYY-MM-DD.md`.

## Verification

- Run `npm run test`.
- Run `npm run build`.
- Open the local app in the browser and verify the home screen, domain switching, a dojo screen, and sound asset requests.
- After successful verification, initialize git if needed and make a checkpoint commit periodically.
