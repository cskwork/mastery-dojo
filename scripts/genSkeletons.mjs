import { writeFileSync } from "node:fs";
import { learningDomains } from "@/data/dojoDomain";
import { topics as dsa } from "@/data/dsaCurriculum";
import { topics as flink } from "@/data/flinkCurriculum";
import { topics as java } from "@/data/javaCurriculum";
import { topics as kafka } from "@/data/kafkaCurriculum";
import { topics as spark } from "@/data/sparkCurriculum";
import { topics as spring } from "@/data/springBootCurriculum";
import { topics as sqld } from "@/data/sqldCurriculum";
import { topics as ip } from "@/data/informationProcessingPracticalCurriculum";
import { curriculumTopics as python } from "@/data/pythonCurriculum";
import { curriculumTopics as postgres } from "@/data/postgresqlCurriculum";
import { curriculumTopics as redis } from "@/data/redisStreamsCurriculum";

// domainId -> { prefix, topics, varName }
const SPEC = {
  dsa: { prefix: "dsa", topics: dsa },
  flink: { prefix: "flink", topics: flink },
  java: { prefix: "java", topics: java },
  kafka: { prefix: "kafka", topics: kafka },
  spark: { prefix: "spark", topics: spark },
  "spring-boot": { prefix: "spring", topics: spring },
  sqld: { prefix: "sqld", topics: sqld },
  "information-processing-practical": { prefix: "ip", topics: ip },
  python: { prefix: "python-full", topics: python },
  postgresql: { prefix: "postgres-full", topics: postgres },
  "redis-streams": { prefix: "redis-full", topics: redis }
};

const q = (s) => JSON.stringify(s);
const camel = (id) => id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

for (const domain of learningDomains) {
  const spec = SPEC[domain.id];
  if (!spec) continue;
  const v = camel(domain.id);
  const cards = domain.home.cards.map((c) => `    ${q(c.id)}: { label: ${q(c.label)}, summary: ${q(c.summary)} }`).join(",\n");
  const tracks = domain.tracks.map((t) => `    ${q(t.id)}: { title: ${q(t.title)}, focus: ${q(t.focus)} }`).join(",\n");
  const topicLines = spec.topics
    .map((t) => `  ${q(t.concept)}: [${q(t.concept)}, ${q(t.answer)}, ${q(t.hint)}],`)
    .join("\n");

  const out = `import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for ${domain.id}. Values start as English placeholders — translate to Korean.
export const ${v}Chrome: FactoryChromeKo = {
  metadata: {
    title: ${q(domain.metadata.title)},
    description: ${q(domain.metadata.description)}
  },
  welcomeTitle: ${q(domain.home.welcomeTitle)},
  welcomeBody: ${q(domain.home.welcomeBody)},
  subjectName: ${q(domain.subject.name)},
  footerMeta: ${q(domain.footer.meta)},
  cards: {
${cards}
  },
  tracks: {
${tracks}
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo, hintKo] — translate all three to Korean
// (preserve code tokens / identifiers verbatim).
export const ${v}TopicsKo: Record<string, TopicKo> = {
${topicLines}
};
`;
  writeFileSync(`data/i18n/ko/maps/${domain.id}.ts`, out);
  console.log(`wrote data/i18n/ko/maps/${domain.id}.ts (${spec.topics.length} topics)`);
}
