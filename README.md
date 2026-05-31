# DojoLab

DojoLab is a KanaDojo-style learning app family for Python, PostgreSQL, Redis Streams, Spring Boot, Java, SQLD, Information Processing Practical, Linux, Apache Kafka, Apache Spark, Apache Flink, and Data Structures and Algorithms. It keeps the same dojo shell, short drills, typing practice, progress tracking, and click-sound feedback while swapping the learning material by domain.

## Repo Shape

This is one lightweight repo with two clear layers:

- Base template shell: `app/`, `components/dojo/`, `lib/training.ts`, shared styles, and shared sound assets.
- Domain conversions:
  - Python: `domains/python.ts` and `data/pythonCurriculum.ts`.
  - PostgreSQL: `domains/postgresql.ts` and `data/postgresqlCurriculum.ts`.
  - Redis Streams: `domains/redisStreams.ts` and `data/redisStreamsCurriculum.ts`.
  - Spring Boot: `domains/springBoot.ts` and `data/springBootCurriculum.ts`.
  - Java: `domains/java.ts` and `data/javaCurriculum.ts`.
  - SQLD: `domains/sqld.ts` and `data/sqldCurriculum.ts`.
  - Information Processing Practical: `domains/informationProcessingPractical.ts` and `data/informationProcessingPracticalCurriculum.ts`.
  - Linux: `domains/linux.ts` and `data/linuxCurriculum.ts`.
  - Apache Kafka: `domains/kafka.ts` and `data/kafkaCurriculum.ts`.
  - Apache Spark: `domains/spark.ts` and `data/sparkCurriculum.ts`.
  - Apache Flink: `domains/flink.ts` and `data/flinkCurriculum.ts`.
  - Data Structures and Algorithms: `domains/dsa.ts` and `data/dsaCurriculum.ts`.

`data/dojoDomain.ts` registers the available domains and picks the default. `data/curriculumRequirements.ts` records the required beginner-to-expertise concept map that tests enforce for every domain. To make another domain, add a new `data/<name>Curriculum.ts` topic bank with four tracks, then wire a small `domains/<name>.ts` module through `createLearningDomain`.

## Curriculum Depth

Python is the reference full-content conversion. It currently spans Foundations, Data Fluency, Program Design, and Mastery Lab with 300 drills across Pick, Reverse, Input, and Debug modes. The content moves from syntax, values, loops, files, and virtual environments through testing, packaging, concurrency, advanced typing, descriptors, security, deployment, architecture, and production observability.

PostgreSQL follows the same full-content rule with 296 drills: SQL Foundations, Query Fluency, Schema Design, and Production Lab move from SELECT basics through joins, constraints, indexes, transactions, CTEs, windows, JSONB, partitioning, RLS, EXPLAIN, VACUUM, replication, backup recovery, HA, upgrades, incidents, and least-privilege roles.

Redis Streams follows the same full-content rule with 296 drills: Stream Basics, Producer Flow, Consumer Groups, and Reliability Lab move from XADD and IDs through trimming, event contracts, outbox patterns, consumer groups, pending entries, recovery, dead-letter streams, monitoring, Redis Cluster concerns, replay, capacity planning, and at-least-once processing.

Each newly added domain has 288 drills: four tracks, eighteen official-source-backed concepts per track, and four drill modes per concept. The Spring Boot, Java, SQLD, Information Processing Practical, Linux, Kafka, Spark, Flink, and DSA banks start at beginner recognition and move into production or exam expertise.

The full-curriculum floor is enforced in tests: every registered domain must keep at least 280 drills, every track must keep at least 70 drills, and every required concept must exist in Pick, Reverse, Input, and Debug modes. See `docs/curriculum-audit.md` for the completion criteria and source references.

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

The product direction references `https://github.com/lingdojo/kana-dojo`. This implementation changes the learning material to technical domains and uses KanaDojo's AGPL-3.0 `nk-creams` click samples. See `THIRD_PARTY_NOTICES.md`.
