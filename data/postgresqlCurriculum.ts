import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";

export const tracks: LearningTrack[] = [
  {
    id: "pg-foundations",
    title: "SQL Foundations",
    level: "Beginner",
    focus: "tables, rows, SELECT, filters",
    accent: "#4f8dd8"
  },
  {
    id: "pg-querying",
    title: "Query Fluency",
    level: "Builder",
    focus: "joins, aggregates, sorting, limits",
    accent: "#41a67a"
  },
  {
    id: "pg-schema",
    title: "Schema Design",
    level: "Practitioner",
    focus: "keys, constraints, indexes, migrations",
    accent: "#d0a23c"
  },
  {
    id: "pg-production",
    title: "Production Lab",
    level: "Advanced",
    focus: "transactions, plans, vacuum, pooling",
    accent: "#c85d75"
  }
];

export const drills: LearningDrill[] = [
  {
    id: "pg-foundations-select",
    trackId: "pg-foundations",
    mode: "pick",
    level: 1,
    concept: "SELECT",
    prompt: "Which query returns every column from users?",
    answer: "SELECT * FROM users;",
    choices: ["SELECT * FROM users;", "GET users.*;", "FROM users SELECT *;", "SHOW * users;"],
    hint: "SQL reads as SELECT columns FROM table.",
    explanation: "SELECT * FROM users asks PostgreSQL to return all columns from the users table."
  },
  {
    id: "pg-foundations-table",
    trackId: "pg-foundations",
    mode: "input",
    level: 1,
    concept: "relations",
    prompt: "In PostgreSQL, what object stores rows and columns?",
    answer: "table",
    acceptedAnswers: ["a table", "relation"],
    choices: ["table", "index", "trigger", "sequence"],
    hint: "A relation is the formal database term.",
    explanation: "A table stores rows and columns. PostgreSQL also calls this a relation internally."
  },
  {
    id: "pg-foundations-where",
    trackId: "pg-foundations",
    mode: "reverse",
    level: 2,
    concept: "WHERE",
    prompt: "Which clause filters rows before they are returned?",
    answer: "WHERE",
    choices: ["WHERE", "ORDER BY", "LIMIT", "RETURNING"],
    hint: "It appears after FROM and before ORDER BY.",
    explanation: "WHERE filters candidate rows by a boolean condition."
  },
  {
    id: "pg-foundations-debug-quotes",
    trackId: "pg-foundations",
    mode: "debug",
    level: 2,
    concept: "string literals",
    prompt: "What fixes this query?",
    answer: "Use single quotes around active",
    acceptedAnswers: ["single quotes", "quote active", "use single quotes"],
    choices: [
      "Use single quotes around active",
      "Remove the WHERE clause",
      "Use double quotes around status",
      "Change users to user"
    ],
    code: "SELECT * FROM users WHERE status = active;",
    hint: "Text values need quotes.",
    explanation: "PostgreSQL treats unquoted active as an identifier. The string value should be 'active'."
  },
  {
    id: "pg-querying-join",
    trackId: "pg-querying",
    mode: "pick",
    level: 3,
    concept: "JOIN",
    prompt: "Which join keeps only matching rows from both tables?",
    answer: "INNER JOIN",
    choices: ["INNER JOIN", "LEFT JOIN", "FULL JOIN", "CROSS JOIN"],
    hint: "This is the default kind of join when only matching pairs should remain.",
    explanation: "INNER JOIN returns rows where the join condition matches on both sides."
  },
  {
    id: "pg-querying-count",
    trackId: "pg-querying",
    mode: "input",
    level: 3,
    concept: "aggregates",
    prompt: "Which aggregate counts rows?",
    answer: "count",
    acceptedAnswers: ["count()", "count(*)"],
    choices: ["count", "sum", "avg", "rank"],
    hint: "It is often written with an asterisk.",
    explanation: "COUNT(*) counts rows in each group or in the whole result."
  },
  {
    id: "pg-querying-order",
    trackId: "pg-querying",
    mode: "reverse",
    level: 4,
    concept: "sorting",
    prompt: "Which query returns newest orders first?",
    answer: "SELECT * FROM orders ORDER BY created_at DESC;",
    choices: [
      "SELECT * FROM orders ORDER BY created_at DESC;",
      "SELECT * FROM orders SORT created_at;",
      "SELECT * FROM orders WHERE created_at DESC;",
      "SELECT * FROM orders GROUP BY created_at DESC;"
    ],
    hint: "Descending order uses DESC.",
    explanation: "ORDER BY created_at DESC sorts rows from latest timestamp to earliest timestamp."
  },
  {
    id: "pg-querying-debug-group",
    trackId: "pg-querying",
    mode: "debug",
    level: 4,
    concept: "GROUP BY",
    prompt: "What fixes this aggregate query?",
    answer: "Add GROUP BY customer_id",
    acceptedAnswers: ["group by customer_id", "add group by"],
    choices: [
      "Add GROUP BY customer_id",
      "Remove COUNT(*)",
      "Use WHERE COUNT(*)",
      "Rename customer_id"
    ],
    code: "SELECT customer_id, COUNT(*)\nFROM orders;",
    hint: "A selected non-aggregate column must define the groups.",
    explanation: "customer_id is not aggregated, so PostgreSQL needs GROUP BY customer_id."
  },
  {
    id: "pg-schema-primary-key",
    trackId: "pg-schema",
    mode: "pick",
    level: 5,
    concept: "primary keys",
    prompt: "What does a primary key guarantee?",
    answer: "Unique non-null row identity",
    choices: ["Unique non-null row identity", "Faster SELECT * only", "Automatic backups", "Unlimited text length"],
    hint: "A table can use it to identify one row.",
    explanation: "A primary key is both unique and not null, making it stable row identity."
  },
  {
    id: "pg-schema-foreign-key",
    trackId: "pg-schema",
    mode: "input",
    level: 5,
    concept: "foreign keys",
    prompt: "Which constraint links a child row to a parent table?",
    answer: "foreign key",
    acceptedAnswers: ["foreign key constraint", "fk"],
    choices: ["foreign key", "check", "not null", "unique"],
    hint: "It enforces references between tables.",
    explanation: "A foreign key keeps child values aligned with rows in the referenced parent table."
  },
  {
    id: "pg-schema-index",
    trackId: "pg-schema",
    mode: "reverse",
    level: 6,
    concept: "indexes",
    prompt: "Which statement creates an index for user email lookup?",
    answer: "CREATE INDEX users_email_idx ON users (email);",
    choices: [
      "CREATE INDEX users_email_idx ON users (email);",
      "ADD INDEX email TO users;",
      "CREATE SEARCH users.email;",
      "INDEX users USING email;"
    ],
    hint: "PostgreSQL uses CREATE INDEX name ON table (column).",
    explanation: "The index gives PostgreSQL a separate access path for email predicates."
  },
  {
    id: "pg-schema-debug-unique",
    trackId: "pg-schema",
    mode: "debug",
    level: 6,
    concept: "unique constraints",
    prompt: "Which change prevents duplicate usernames?",
    answer: "Add UNIQUE to username",
    acceptedAnswers: ["unique username", "add unique"],
    choices: ["Add UNIQUE to username", "Use TEXT instead of VARCHAR", "Drop the id column", "Add ORDER BY username"],
    code: "CREATE TABLE users (\n  id bigserial PRIMARY KEY,\n  username text\n);",
    hint: "The database should reject duplicates itself.",
    explanation: "A UNIQUE constraint makes PostgreSQL enforce that no two rows share the same username."
  },
  {
    id: "pg-production-transaction",
    trackId: "pg-production",
    mode: "pick",
    level: 7,
    concept: "transactions",
    prompt: "Which command commits a transaction?",
    answer: "COMMIT;",
    choices: ["COMMIT;", "SAVE;", "FINISH;", "APPLY;"],
    hint: "It makes all changes in the transaction durable.",
    explanation: "COMMIT ends the transaction and persists its successful changes."
  },
  {
    id: "pg-production-explain",
    trackId: "pg-production",
    mode: "input",
    level: 7,
    concept: "query plans",
    prompt: "Which command shows how PostgreSQL plans to run a query?",
    answer: "explain",
    acceptedAnswers: ["explain analyze", "EXPLAIN"],
    choices: ["EXPLAIN", "DESCRIBE", "TRACE", "PROFILE"],
    hint: "It can be paired with ANALYZE for actual runtime.",
    explanation: "EXPLAIN displays the query plan so you can inspect scans, joins, and costs."
  },
  {
    id: "pg-production-vacuum",
    trackId: "pg-production",
    mode: "reverse",
    level: 8,
    concept: "maintenance",
    prompt: "Which process cleans dead tuples after updates and deletes?",
    answer: "VACUUM",
    choices: ["VACUUM", "CHECKPOINT", "REINDEX", "LISTEN"],
    hint: "Autovacuum runs it automatically in healthy systems.",
    explanation: "VACUUM reclaims space for reuse and keeps table statistics healthy."
  },
  {
    id: "pg-production-debug-pool",
    trackId: "pg-production",
    mode: "debug",
    level: 8,
    concept: "connection pooling",
    prompt: "What fixes an app that opens a new database connection for every request?",
    answer: "Use a connection pool",
    acceptedAnswers: ["connection pool", "pool connections"],
    choices: ["Use a connection pool", "Disable indexes", "Run VACUUM every request", "Store passwords in SQL"],
    hint: "Reuse a bounded set of connections.",
    explanation: "A pool limits connection churn and protects PostgreSQL from too many active clients."
  }
];
