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
| Spring Boot | Boot Foundations, Web and Data, Production Spring, Spring Expertise | 288 | `data/springBootCurriculum.ts` |
| Java | Java Foundations, Objects and Collections, Runtime Fluency, Java Expertise | 288 | `data/javaCurriculum.ts` |
| SQLD | Data Modeling, SQL Basics, SQL Application, Exam Expertise | 288 | `data/sqldCurriculum.ts` |
| Information Processing Practical | Exam Foundations, Implementation, Operations, Practical Expertise | 288 | `data/informationProcessingPracticalCurriculum.ts` |
| Linux | Linux Foundations, System Admin, Network and Security, Linux Expertise | 288 | `data/linuxCurriculum.ts` |
| Apache Kafka | Kafka Foundations, Streaming Builder, Kafka Operations, Kafka Expertise | 288 | `data/kafkaCurriculum.ts` |
| Apache Spark | Spark Foundations, Spark SQL, Structured Streaming, Spark Operations | 288 | `data/sparkCurriculum.ts` |
| Apache Flink | Flink Foundations, Flink SQL and Table, Stateful Operations, Flink Expertise | 288 | `data/flinkCurriculum.ts` |
| Data Structures and Algorithms | DSA Foundations, Core Structures, Algorithm Patterns, DSA Expertise | 288 | `data/dsaCurriculum.ts` |

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
- Spring Boot scope: `https://docs.spring.io/spring-boot/index.html`
- Java scope: `https://docs.oracle.com/en/java/javase/26/`
- SQLD scope: `https://www.dataq.or.kr/www/sub/a_04.do`
- Information Processing Practical scope: `https://www.q-net.or.kr/crf005.do?id=crf00503s02&jmCd=1320`
- Linux scope: `https://docs.kernel.org/`, `https://www.man7.org/linux/man-pages/index.html`
- Apache Kafka scope: `https://kafka.apache.org/documentation/`
- Apache Spark scope: `https://spark.apache.org/documentation.html`
- Apache Flink scope: `https://nightlies.apache.org/flink/flink-docs-release-2.2/`
- DSA scope: `https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/`, `https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/`
