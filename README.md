# DojoLab

DojoLab is a KanaDojo-style learning app family for Python, PostgreSQL, and Redis Streams. It keeps the same dojo shell, short drills, typing practice, progress tracking, and click-sound feedback while swapping the learning material by domain.

## Repo Shape

This is one lightweight repo with two clear layers:

- Base template shell: `app/`, `components/dojo/`, `lib/training.ts`, shared styles, and shared sound assets.
- Domain conversions:
  - Python: `domains/python.ts` and `data/pythonCurriculum.ts`.
  - PostgreSQL: `domains/postgresql.ts` and `data/postgresqlCurriculum.ts`.
  - Redis Streams: `domains/redisStreams.ts` and `data/redisStreamsCurriculum.ts`.

`data/dojoDomain.ts` registers the available domains and picks the default. To make another domain, add a new `domains/<name>.ts` module with its own tracks, drills, labels, tokens, marks, metadata, and storage key, then add it to `learningDomains`.

## Curriculum Depth

Python is the reference full-content conversion. It currently spans Foundations, Data Fluency, Program Design, and Mastery Lab with 56 drills across Pick, Reverse, Input, and Debug modes. The content moves from syntax, values, loops, and files through testing, packaging, concurrency, protocols, profiling, and production observability.

PostgreSQL and Redis Streams are registered as real domains with starter curricula. They should be expanded with the same beginner-to-expertise density before being considered complete.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run test
npm run build
```

## Source Note

The product direction references `https://github.com/lingdojo/kana-dojo`. This implementation changes the learning material to Python, PostgreSQL, and Redis Streams, and uses KanaDojo's AGPL-3.0 `nk-creams` click samples. See `THIRD_PARTY_NOTICES.md`.
