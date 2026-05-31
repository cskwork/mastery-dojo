import { drills, tracks } from "@/data/sparkCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const sparkDomain = createLearningDomain({
  id: "spark",
  title: "SparkDojo - Learn Apache Spark from Beginner to Expertise",
  description: "KanaDojo-inspired Apache Spark drills from DataFrames to production pipelines.",
  primaryName: "SparkDojo",
  secondaryName: "Spark",
  subjectName: "Apache Spark",
  subjectAdjective: "Spark",
  storageKey: "spark-dojo-progress-v1",
  tokenPool: ["DataFrame", "SQL", "shuffle", "AQE", "Kafka", "watermark", "executor", "cache", "Parquet", "stream", "UI", "DAG"],
  trackMarks: {
    "spark-foundations": "df",
    "spark-sql": "sql",
    "spark-streaming": "str",
    "spark-operations": "ops"
  },
  cards: [
    { id: "spark-foundations", mark: "df", label: "Basics", summary: "sessions, frames, plans" },
    { id: "spark-sql", mark: "sql", label: "SQL", summary: "joins, files, optimizer" },
    { id: "spark-streaming", mark: "str", label: "Streaming", summary: "state, watermarks, Kafka" },
    { id: "spark-operations", mark: "ops", label: "Ops", summary: "clusters, UI, upgrades" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ spark bloom ~ Apache Spark docs aligned ~ v0.1.18 (alpha)"
});
