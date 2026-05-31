import type { DrillMode, TrackId } from "@/data/dojoTypes";

type TrackRequirement = {
  id: TrackId;
  level: string;
  minimumDrills: number;
  requiredConcepts: string[];
};

export type DomainCurriculumRequirement = {
  domainId: string;
  minimumDrills: number;
  modes: DrillMode[];
  sourceRefs: string[];
  tracks: TrackRequirement[];
};

const allModes: DrillMode[] = ["pick", "reverse", "input", "debug"];
const minimumTrackDrills = 70;

export const curriculumRequirements: DomainCurriculumRequirement[] = [
  {
    domainId: "python",
    minimumDrills: 280,
    modes: allModes,
    sourceRefs: [
      "https://docs.python.org/3/tutorial/index.html",
      "https://docs.python.org/3/library/index.html",
      "https://packaging.python.org/en/latest/"
    ],
    tracks: [
      {
        id: "foundations",
        level: "Beginner",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "interpreter and CLI",
          "source files and encoding",
          "truthiness",
          "equality vs identity",
          "numeric types",
          "formatted strings",
          "structural pattern matching",
          "loop control",
          "function parameters",
          "exception handling",
          "context managers",
          "modules and imports",
          "virtual environments",
          "package installation",
          "debugging basics"
        ]
      },
      {
        id: "data",
        level: "Builder",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "sequence operations",
          "dictionary patterns",
          "set algebra",
          "sorting with keys",
          "comprehensions",
          "iterator protocol",
          "generators",
          "filesystem paths",
          "structured files",
          "dates and time zones",
          "data classes",
          "typed containers",
          "local relational storage",
          "regular expressions",
          "serialization boundaries",
          "numeric precision"
        ]
      },
      {
        id: "design",
        level: "Practitioner",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "pure functions",
          "module boundaries",
          "custom exceptions",
          "logging",
          "testing strategy",
          "test fixtures",
          "dependency injection",
          "decorators",
          "composition over inheritance",
          "protocol-oriented design",
          "configuration",
          "API client design",
          "pyproject packaging",
          "command-line interfaces",
          "documentation strings"
        ]
      },
      {
        id: "mastery",
        level: "Expertise",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "async tasks",
          "structured concurrency",
          "threading",
          "multiprocessing",
          "performance profiling",
          "advanced typing",
          "descriptors",
          "metaclasses",
          "Python security",
          "observability",
          "deployment",
          "web service boundaries",
          "database access",
          "application architecture",
          "long-term maintenance"
        ]
      }
    ]
  },
  {
    domainId: "postgresql",
    minimumDrills: 280,
    modes: allModes,
    sourceRefs: [
      "https://www.postgresql.org/docs/current/tutorial.html",
      "https://www.postgresql.org/docs/current/sql-select.html",
      "https://www.postgresql.org/docs/current/admin.html"
    ],
    tracks: [
      {
        id: "pg-foundations",
        level: "Beginner",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "relational model",
          "psql basics",
          "SELECT list",
          "WHERE predicates",
          "NULL logic",
          "ORDER BY and LIMIT",
          "DML RETURNING",
          "transaction basics",
          "data types",
          "time handling",
          "expressions and functions",
          "CASE and COALESCE",
          "views",
          "query parameters",
          "schemas and search_path"
        ]
      },
      {
        id: "pg-querying",
        level: "Builder",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "inner and outer joins",
          "join cardinality",
          "aggregation",
          "HAVING",
          "DISTINCT ON",
          "subqueries",
          "EXISTS",
          "common table expressions",
          "window functions",
          "LATERAL joins",
          "recursive CTE",
          "set operations",
          "JSONB querying",
          "full-text search",
          "EXPLAIN basics"
        ]
      },
      {
        id: "pg-schema",
        level: "Practitioner",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "primary and foreign keys",
          "core constraints",
          "identity and sequences",
          "B-tree indexes",
          "composite indexes",
          "partial and expression indexes",
          "GIN and BRIN indexes",
          "schema migrations",
          "DDL lock impact",
          "table partitioning",
          "row-level security",
          "triggers",
          "materialized views",
          "extensions",
          "domain modeling choices"
        ]
      },
      {
        id: "pg-production",
        level: "Expertise",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "isolation levels",
          "locks and deadlocks",
          "VACUUM and autovacuum",
          "planner statistics",
          "EXPLAIN ANALYZE BUFFERS",
          "connection pooling",
          "backup and PITR",
          "replication",
          "roles and privileges",
          "timeouts",
          "monitoring",
          "high availability",
          "version upgrades",
          "multi-tenancy",
          "database incidents"
        ]
      }
    ]
  },
  {
    domainId: "redis-streams",
    minimumDrills: 280,
    modes: allModes,
    sourceRefs: [
      "https://redis.io/docs/latest/develop/data-types/streams/",
      "https://redis.io/docs/latest/commands/xadd/",
      "https://redis.io/docs/latest/commands/xreadgroup/"
    ],
    tracks: [
      {
        id: "stream-foundations",
        level: "Beginner",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "streams vs lists and pubsub",
          "XADD shape",
          "stream ID semantics",
          "field/value entries",
          "XRANGE",
          "XREVRANGE",
          "direct XREAD",
          "BLOCK option",
          "COUNT option",
          "multi-stream reads",
          "XLEN",
          "XDEL",
          "stream memory",
          "read offsets",
          "XREAD exclusivity"
        ]
      },
      {
        id: "stream-producers",
        level: "Builder",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "event contract",
          "idempotent producer",
          "pipelined XADD",
          "MAXLEN retention",
          "MINID retention",
          "XTRIM",
          "NOMKSTREAM",
          "payload design",
          "producer partitioning",
          "explicit IDs and clocks",
          "producer error handling",
          "outbox pattern",
          "producer observability",
          "schema evolution",
          "write amplification"
        ]
      },
      {
        id: "stream-consumers",
        level: "Practitioner",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "consumer group creation",
          "MKSTREAM",
          "new group messages",
          "consumer names",
          "pending entries list",
          "acknowledgement",
          "XPENDING",
          "pending replay",
          "NOACK",
          "XCLAIM",
          "XAUTOCLAIM",
          "XINFO CONSUMERS",
          "group fanout",
          "dead-letter stream",
          "XGROUP SETID"
        ]
      },
      {
        id: "stream-operations",
        level: "Expertise",
        minimumDrills: minimumTrackDrills,
        requiredConcepts: [
          "at-least-once processing",
          "idempotent consumer",
          "backpressure",
          "lag monitoring",
          "XINFO STREAM",
          "retention vs recovery",
          "ordering model",
          "stream sharding",
          "Redis Cluster streams",
          "persistence",
          "failover recovery",
          "memory policy",
          "alerting",
          "disaster recovery",
          "capacity planning"
        ]
      }
    ]
  }
];
