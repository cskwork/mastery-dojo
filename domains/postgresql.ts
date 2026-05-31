import { drills, tracks } from "@/data/postgresqlCurriculum";
import type { LearningDomain } from "@/data/dojoTypes";

export const postgresqlDomain = {
  id: "postgresql",
  metadata: {
    title: "PostgresDojo - Learn PostgreSQL from Beginner to Production",
    description: "A KanaDojo-inspired PostgreSQL learning app from SQL foundations to production operations.",
    iconPath: "/postgresql-dojo-mark.svg"
  },
  brand: {
    primaryName: "PostgresDojo",
    secondaryName: "SQL道場",
    displayName: "PostgresDojo"
  },
  subject: {
    name: "PostgreSQL",
    adjective: "PostgreSQL"
  },
  storageKey: "postgres-dojo-progress-v1",
  tokenPool: [
    "SELECT",
    "FROM",
    "WHERE",
    "JOIN",
    "GROUP",
    "ORDER",
    "LIMIT",
    "INDEX",
    "VACUUM",
    "EXPLAIN",
    "BEGIN",
    "COMMIT",
    "JSONB",
    "WITH",
    "COUNT",
    "UNIQUE"
  ],
  trackMarks: {
    "pg-foundations": "sql",
    "pg-querying": "join",
    "pg-schema": "ddl",
    "pg-production": "ops"
  },
  home: {
    ariaLabel: "PostgresDojo home",
    floatingActionLabel: "Start PostgreSQL training",
    welcomeTitle: "Welcome to PostgresDojo!",
    welcomeBody:
      "PostgresDojo turns PostgreSQL into focused drills for SQL fluency, schema judgment, and production readiness.",
    startTemplate: "To begin, pick a dojo below and start training {trackLabel} now!",
    cards: [
      { id: "pg-foundations", mark: "sql", label: "Basics", summary: "tables, rows, filters" },
      { id: "pg-querying", mark: "join", label: "Queries", summary: "joins, groups, limits" },
      { id: "pg-schema", mark: "ddl", label: "Schema", summary: "keys, indexes, constraints" },
      { id: "pg-production", mark: "ops", label: "Production", summary: "plans, vacuum, pooling" }
    ]
  },
  training: {
    sidebarLabel: "PostgresDojo navigation",
    modeLabel: "Training mode",
    welcomeTitleTemplate: "Welcome to the {trackTitle} dojo!",
    welcomeBodyTemplate: "{trackFocus}. Train with short {subjectName} drills from beginner SQL to production mastery.",
    progressLabel: "Progress summary",
    actions: {
      home: "Home",
      hint: "Hint",
      check: "Check answer",
      next: "Next drill"
    }
  },
  footer: {
    links: [
      { href: "#terms", label: "terms" },
      { href: "#privacy", label: "privacy" },
      { href: "#credits", label: "credits" },
      { href: "#about", label: "about" }
    ],
    communityAria: "Community",
    sourceAria: "Source",
    meta: "made by the community ~ postgres bloom ~ zen maru gothic ~ v0.1.18 (alpha)"
  },
  achievements: {
    firstClear: "first-query",
    eightClears: "join-runner",
    allTracksStarted: "database-path",
    streakFive: "sql-flow",
    highAccuracy: "query-planner",
    fullMastery: "postgres-mastery"
  },
  tracks,
  drills
} satisfies LearningDomain;
