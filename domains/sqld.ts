import { drills, tracks } from "@/data/sqldCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const sqldDomain = createLearningDomain({
  id: "sqld",
  title: "SQLDDojo - Learn SQLD from Beginner to Expertise",
  description: "KanaDojo-inspired SQLD drills aligned to the official DataQ SQL Developer exam scope.",
  primaryName: "SQLDDojo",
  secondaryName: "SQLD道場",
  subjectName: "SQLD",
  subjectAdjective: "SQL Developer exam",
  storageKey: "sqld-dojo-progress-v1",
  tokenPool: ["SELECT", "JOIN", "NULL", "GROUP", "ERD", "DDL", "DCL", "TCL", "ROLLUP", "CUBE", "KEY", "60pt"],
  trackMarks: {
    "sqld-modeling": "erd",
    "sqld-sql-basic": "sql",
    "sqld-sql-application": "app",
    "sqld-exam": "exam"
  },
  cards: [
    { id: "sqld-modeling", mark: "erd", label: "Modeling", summary: "entities, keys, ERD" },
    { id: "sqld-sql-basic", mark: "sql", label: "SQL", summary: "select, joins, groups" },
    { id: "sqld-sql-application", mark: "app", label: "Applied", summary: "windows, DDL, TCL" },
    { id: "sqld-exam", mark: "exam", label: "Exam", summary: "timing, traps, review" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ SQLD bloom ~ DataQ scope aligned ~ v0.1.18 (alpha)"
});
