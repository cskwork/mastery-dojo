import { drills, tracks } from "@/data/flinkCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const flinkDomain = createLearningDomain({
  id: "flink",
  title: "FlinkDojo - Learn Apache Flink from Beginner to Expertise",
  description: "KanaDojo-inspired Apache Flink drills from DataStream basics to stateful operations.",
  primaryName: "FlinkDojo",
  secondaryName: "Flink",
  subjectName: "Apache Flink",
  subjectAdjective: "Flink",
  storageKey: "flink-dojo-progress-v1",
  tokenPool: ["DataStream", "Table", "SQL", "watermark", "state", "checkpoint", "Kafka", "window", "sink", "TTL", "HA", "savepoint"],
  trackMarks: {
    "flink-foundations": "flk",
    "flink-sql-table": "sql",
    "flink-state-ops": "chk",
    "flink-expertise": "ops"
  },
  cards: [
    { id: "flink-foundations", mark: "flk", label: "Basics", summary: "streams, time, windows" },
    { id: "flink-sql-table", mark: "sql", label: "SQL", summary: "tables, connectors, TVFs" },
    { id: "flink-state-ops", mark: "chk", label: "State", summary: "state, checkpoints, metrics" },
    { id: "flink-expertise", mark: "ops", label: "Expert", summary: "HA, upgrades, incidents" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ flink bloom ~ Apache Flink docs aligned ~ v0.1.18 (alpha)"
});
