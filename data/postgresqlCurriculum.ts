import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";

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
    level: "Expertise",
    focus: "transactions, plans, vacuum, replication, security",
    accent: "#c85d75"
  }
];

const baseDrills: LearningDrill[] = [
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
    explanation: "WHERE filters candidate rows by a boolean condition before later clauses shape the result."
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
    id: "pg-foundations-columns",
    trackId: "pg-foundations",
    mode: "pick",
    level: 1,
    concept: "projection",
    prompt: "Which query returns only name and email from users?",
    answer: "SELECT name, email FROM users;",
    choices: [
      "SELECT name, email FROM users;",
      "SELECT users FROM name, email;",
      "GET name, email FROM users;",
      "SELECT ONLY users.name users.email;"
    ],
    hint: "Put the column list between SELECT and FROM.",
    explanation: "A projection chooses columns. SELECT name, email FROM users returns those two columns."
  },
  {
    id: "pg-foundations-null",
    trackId: "pg-foundations",
    mode: "reverse",
    level: 2,
    concept: "NULL",
    prompt: "Which predicate finds rows where deleted_at has no value?",
    answer: "deleted_at IS NULL",
    choices: ["deleted_at IS NULL", "deleted_at = NULL", "deleted_at == NULL", "deleted_at EMPTY"],
    hint: "NULL is tested with IS, not equals.",
    explanation: "NULL means unknown or missing, so PostgreSQL uses IS NULL and IS NOT NULL predicates."
  },
  {
    id: "pg-foundations-limit",
    trackId: "pg-foundations",
    mode: "input",
    level: 2,
    concept: "LIMIT",
    prompt: "Which clause keeps only the first 10 result rows?",
    answer: "LIMIT 10",
    acceptedAnswers: ["limit 10", "LIMIT 10;"],
    choices: ["LIMIT 10", "TOP 10", "ONLY 10", "FETCH 10 ALL"],
    hint: "It appears after ORDER BY when both are present.",
    explanation: "LIMIT restricts how many rows PostgreSQL returns from the result set."
  },
  {
    id: "pg-foundations-order",
    trackId: "pg-foundations",
    mode: "pick",
    level: 2,
    concept: "ORDER BY",
    prompt: "Which query returns newest posts first?",
    answer: "SELECT * FROM posts ORDER BY created_at DESC;",
    choices: [
      "SELECT * FROM posts ORDER BY created_at DESC;",
      "SELECT * FROM posts WHERE created_at DESC;",
      "SELECT * FROM posts SORT created_at DESC;",
      "SELECT * FROM posts LIMIT created_at DESC;"
    ],
    hint: "Descending sort uses DESC.",
    explanation: "ORDER BY created_at DESC sorts rows from latest timestamp to earliest timestamp."
  },
  {
    id: "pg-foundations-insert-returning",
    trackId: "pg-foundations",
    mode: "reverse",
    level: 3,
    concept: "RETURNING",
    prompt: "Which clause returns the generated id after an INSERT?",
    answer: "RETURNING id",
    choices: ["RETURNING id", "OUTPUT id", "SHOW id", "SELECT NEW id"],
    hint: "PostgreSQL can return rows modified by INSERT, UPDATE, and DELETE.",
    explanation: "RETURNING id asks PostgreSQL to send back the id from the inserted row."
  },
  {
    id: "pg-foundations-update-where",
    trackId: "pg-foundations",
    mode: "debug",
    level: 3,
    concept: "UPDATE safety",
    prompt: "What is the danger in this statement?",
    answer: "It updates every user",
    acceptedAnswers: ["updates every row", "updates all users", "missing where"],
    choices: ["It updates every user", "It creates a duplicate table", "It cannot change text", "It commits automatically twice"],
    code: "UPDATE users SET status = 'inactive';",
    hint: "Look for the row filter.",
    explanation: "Without a WHERE clause, UPDATE applies to every row in the target table."
  },
  {
    id: "pg-foundations-like",
    trackId: "pg-foundations",
    mode: "pick",
    level: 3,
    concept: "pattern matching",
    prompt: "Which predicate finds emails ending in @example.com?",
    answer: "email LIKE '%@example.com'",
    choices: ["email LIKE '%@example.com'", "email = '*@example.com'", "email ENDS '@example.com'", "email MATCH '@example.com$'"],
    hint: "The percent sign matches any run of characters.",
    explanation: "LIKE with a leading % matches any prefix before the @example.com suffix."
  },
  {
    id: "pg-foundations-case",
    trackId: "pg-foundations",
    mode: "reverse",
    level: 4,
    concept: "CASE",
    prompt: "Which expression labels paid invoices as closed and others as open?",
    answer: "CASE WHEN paid_at IS NULL THEN 'open' ELSE 'closed' END",
    choices: [
      "CASE WHEN paid_at IS NULL THEN 'open' ELSE 'closed' END",
      "IF paid_at IS NULL RETURN 'open' ELSE 'closed'",
      "WHEN paid_at IS NULL SELECT 'open'",
      "CASE paid_at NULL 'open' ELSE 'closed'"
    ],
    hint: "CASE is an expression, not a control-flow block.",
    explanation: "CASE returns a value per row, so it can derive labels directly in a SELECT list."
  },
  {
    id: "pg-foundations-coalesce",
    trackId: "pg-foundations",
    mode: "input",
    level: 4,
    concept: "COALESCE",
    prompt: "Which function returns the first non-null value?",
    answer: "coalesce",
    acceptedAnswers: ["coalesce()", "COALESCE"],
    choices: ["COALESCE", "NULLIF", "COUNT", "LOWER"],
    hint: "It is often used for fallback display values.",
    explanation: "COALESCE(name, 'Anonymous') returns name when present, otherwise the fallback string."
  },
  {
    id: "pg-foundations-debug-double-quotes",
    trackId: "pg-foundations",
    mode: "debug",
    level: 4,
    concept: "identifiers",
    prompt: "What fixes this query when active is a text value?",
    answer: "Use single quotes around active",
    acceptedAnswers: ["single quotes", "'active'", "use string literal"],
    choices: ["Use single quotes around active", "Use double quotes around active", "Remove status", "Add GROUP BY status"],
    code: "SELECT * FROM users WHERE status = \"active\";",
    hint: "Double quotes are for identifiers such as column names.",
    explanation: "PostgreSQL reads double-quoted active as an identifier. A string literal uses single quotes."
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
    id: "pg-querying-left-join",
    trackId: "pg-querying",
    mode: "pick",
    level: 4,
    concept: "LEFT JOIN",
    prompt: "Which join keeps every customer even when no matching order exists?",
    answer: "LEFT JOIN",
    choices: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SEMI JOIN"],
    hint: "The unmatched right side becomes NULL.",
    explanation: "LEFT JOIN keeps all rows from the left table and fills missing right-table columns with NULL."
  },
  {
    id: "pg-querying-having",
    trackId: "pg-querying",
    mode: "reverse",
    level: 4,
    concept: "HAVING",
    prompt: "Which clause filters groups after COUNT(*) is calculated?",
    answer: "HAVING COUNT(*) > 3",
    choices: ["HAVING COUNT(*) > 3", "WHERE COUNT(*) > 3", "GROUP COUNT(*) > 3", "FILTER GROUPS COUNT(*) > 3"],
    hint: "WHERE filters rows before grouping.",
    explanation: "HAVING filters grouped rows after aggregate functions such as COUNT(*) have been computed."
  },
  {
    id: "pg-querying-distinct-on",
    trackId: "pg-querying",
    mode: "pick",
    level: 5,
    concept: "DISTINCT ON",
    prompt: "Which PostgreSQL feature can keep the newest row per customer with a matching ORDER BY?",
    answer: "DISTINCT ON (customer_id)",
    choices: ["DISTINCT ON (customer_id)", "ONLY ONE customer_id", "GROUP BY newest", "UNIQUE ROW customer_id"],
    hint: "It is PostgreSQL-specific and pairs with ORDER BY.",
    explanation: "DISTINCT ON keeps the first row for each listed expression, so ORDER BY decides which row wins."
  },
  {
    id: "pg-querying-cte",
    trackId: "pg-querying",
    mode: "input",
    level: 5,
    concept: "CTE",
    prompt: "Which keyword starts a common table expression?",
    answer: "with",
    acceptedAnswers: ["WITH"],
    choices: ["WITH", "TEMP", "ALIAS", "PREPARE"],
    hint: "The temporary named query appears before SELECT.",
    explanation: "WITH defines one or more common table expressions that the main query can reference."
  },
  {
    id: "pg-querying-window-row-number",
    trackId: "pg-querying",
    mode: "reverse",
    level: 5,
    concept: "window functions",
    prompt: "Which expression ranks rows newest-first within each account?",
    answer: "row_number() OVER (PARTITION BY account_id ORDER BY created_at DESC)",
    choices: [
      "row_number() OVER (PARTITION BY account_id ORDER BY created_at DESC)",
      "row_number(account_id, created_at DESC)",
      "rank account_id by created_at DESC",
      "COUNT(*) GROUP BY account_id ORDER BY created_at DESC"
    ],
    hint: "Window functions use OVER.",
    explanation: "OVER defines the partition and ordering while keeping individual rows in the result."
  },
  {
    id: "pg-querying-exists",
    trackId: "pg-querying",
    mode: "pick",
    level: 5,
    concept: "EXISTS",
    prompt: "Which predicate checks whether a matching subquery row exists?",
    answer: "EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id)",
    choices: [
      "EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id)",
      "HAS orders WHERE orders.user_id = users.id",
      "COUNT orders EXISTS users.id",
      "JOIN EXISTS orders.user_id"
    ],
    hint: "The subquery only needs to prove a row can be found.",
    explanation: "EXISTS is true when the subquery returns at least one row for the outer row."
  },
  {
    id: "pg-querying-debug-left-where",
    trackId: "pg-querying",
    mode: "debug",
    level: 5,
    concept: "outer join filters",
    prompt: "Why does this LEFT JOIN act like an INNER JOIN?",
    answer: "The WHERE filter rejects NULL right-side rows",
    acceptedAnswers: ["where rejects null", "where clause rejects null rows", "move filter to on"],
    choices: [
      "The WHERE filter rejects NULL right-side rows",
      "LEFT JOIN never keeps unmatched rows",
      "The orders table needs a primary key",
      "COUNT(*) is required"
    ],
    code: "SELECT users.id, orders.id\nFROM users\nLEFT JOIN orders ON orders.user_id = users.id\nWHERE orders.status = 'paid';",
    hint: "Unmatched order columns are NULL after the join.",
    explanation: "A WHERE predicate on the right table removes unmatched NULL rows. Put that predicate in ON to preserve the outer join."
  },
  {
    id: "pg-querying-union-all",
    trackId: "pg-querying",
    mode: "reverse",
    level: 6,
    concept: "set operations",
    prompt: "Which set operator keeps duplicates when combining two SELECT results?",
    answer: "UNION ALL",
    choices: ["UNION ALL", "UNION DISTINCT", "INTERSECT ALL", "APPEND UNIQUE"],
    hint: "Plain UNION removes duplicate rows.",
    explanation: "UNION ALL appends both result sets without duplicate elimination."
  },
  {
    id: "pg-querying-filter-aggregate",
    trackId: "pg-querying",
    mode: "input",
    level: 6,
    concept: "aggregate FILTER",
    prompt: "Which clause filters one aggregate without filtering the whole row set?",
    answer: "filter",
    acceptedAnswers: ["FILTER", "filter clause"],
    choices: ["FILTER", "WHERE", "LIMIT", "ONLY"],
    hint: "It appears after the aggregate call.",
    explanation: "COUNT(*) FILTER (WHERE status = 'paid') counts only matching rows while other aggregates can use different filters."
  },
  {
    id: "pg-querying-debug-window-where",
    trackId: "pg-querying",
    mode: "debug",
    level: 6,
    concept: "window filtering",
    prompt: "What fixes this attempt to filter by row_number?",
    answer: "Wrap the window query in a subquery or CTE",
    acceptedAnswers: ["use a subquery", "use a cte", "wrap in cte"],
    choices: [
      "Wrap the window query in a subquery or CTE",
      "Move row_number to GROUP BY",
      "Replace OVER with HAVING",
      "Add DISTINCT before WHERE"
    ],
    code: "SELECT *, row_number() OVER (PARTITION BY account_id ORDER BY created_at DESC) AS rn\nFROM events\nWHERE rn = 1;",
    hint: "WHERE is evaluated before the SELECT-list alias exists.",
    explanation: "Compute rn in a subquery or CTE, then filter rn = 1 in the outer query."
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
    id: "pg-schema-check",
    trackId: "pg-schema",
    mode: "pick",
    level: 6,
    concept: "CHECK",
    prompt: "Which constraint rejects negative account balances?",
    answer: "CHECK (balance >= 0)",
    choices: ["CHECK (balance >= 0)", "UNIQUE (balance >= 0)", "DEFAULT balance >= 0", "INDEX CHECK balance"],
    hint: "Use a boolean expression at write time.",
    explanation: "A CHECK constraint rejects inserted or updated rows whose expression is false."
  },
  {
    id: "pg-schema-not-null",
    trackId: "pg-schema",
    mode: "reverse",
    level: 6,
    concept: "NOT NULL",
    prompt: "Which column definition requires every user to have an email?",
    answer: "email text NOT NULL",
    choices: ["email text NOT NULL", "email text REQUIRED", "email NOT EMPTY text", "email text CHECK NULL"],
    hint: "Use the explicit nullability constraint.",
    explanation: "NOT NULL prevents the column from storing NULL values."
  },
  {
    id: "pg-schema-identity",
    trackId: "pg-schema",
    mode: "input",
    level: 7,
    concept: "identity columns",
    prompt: "Which keyword pair defines a SQL-standard auto-generated identity column?",
    answer: "generated always",
    acceptedAnswers: ["generated always as identity", "generated by default as identity", "identity"],
    choices: ["GENERATED ALWAYS", "AUTO NUMBER", "SERIAL ALWAYS", "DEFAULT UNIQUE"],
    hint: "It is the modern alternative to old serial-style defaults.",
    explanation: "GENERATED ALWAYS AS IDENTITY tells PostgreSQL to generate values for the column."
  },
  {
    id: "pg-schema-composite-index",
    trackId: "pg-schema",
    mode: "pick",
    level: 7,
    concept: "composite indexes",
    prompt: "Which index best supports WHERE tenant_id = ? ORDER BY created_at DESC?",
    answer: "CREATE INDEX ON events (tenant_id, created_at DESC);",
    choices: [
      "CREATE INDEX ON events (tenant_id, created_at DESC);",
      "CREATE INDEX ON events (created_at DESC, payload);",
      "CREATE INDEX ON events (payload);",
      "CREATE INDEX ON events (tenant_id) WHERE created_at;"
    ],
    hint: "Put equality columns before the ordering column.",
    explanation: "A composite index on tenant_id and created_at can filter the tenant and read rows in timestamp order."
  },
  {
    id: "pg-schema-partial-index",
    trackId: "pg-schema",
    mode: "reverse",
    level: 7,
    concept: "partial indexes",
    prompt: "Which index targets only pending jobs?",
    answer: "CREATE INDEX jobs_pending_idx ON jobs (run_at) WHERE status = 'pending';",
    choices: [
      "CREATE INDEX jobs_pending_idx ON jobs (run_at) WHERE status = 'pending';",
      "CREATE PARTIAL jobs ON jobs status pending;",
      "CREATE INDEX jobs_pending_idx WHERE jobs.status;",
      "CREATE INDEX ON jobs (status = 'pending', run_at);"
    ],
    hint: "A partial index has a WHERE predicate.",
    explanation: "Partial indexes keep entries only for rows matching the predicate, reducing size for focused workloads."
  },
  {
    id: "pg-schema-expression-index",
    trackId: "pg-schema",
    mode: "input",
    level: 7,
    concept: "expression indexes",
    prompt: "Which function would you index for case-insensitive email lookup?",
    answer: "lower",
    acceptedAnswers: ["lower()", "LOWER"],
    choices: ["lower", "upper only", "coalesce", "count"],
    hint: "The query should use the same expression as the index.",
    explanation: "CREATE INDEX ON users (lower(email)) supports predicates that compare lower(email)."
  },
  {
    id: "pg-schema-debug-jsonb-index",
    trackId: "pg-schema",
    mode: "debug",
    level: 8,
    concept: "JSONB indexes",
    prompt: "What index type helps containment queries such as payload @> ... on jsonb?",
    answer: "Use a GIN index on the jsonb column",
    acceptedAnswers: ["gin index", "use gin", "gin on jsonb"],
    choices: [
      "Use a GIN index on the jsonb column",
      "Use a BRIN index on every key",
      "Use a foreign key on payload",
      "Use VACUUM instead of an index"
    ],
    code: "SELECT * FROM events WHERE payload @> '{\"kind\":\"signup\"}'::jsonb;",
    hint: "JSONB containment can use an inverted index.",
    explanation: "A GIN index stores entries that make jsonb containment and key-existence searches efficient."
  },
  {
    id: "pg-schema-migration-transaction",
    trackId: "pg-schema",
    mode: "pick",
    level: 8,
    concept: "migrations",
    prompt: "Why wrap compatible schema changes in a transaction?",
    answer: "So related DDL changes commit or roll back together",
    choices: [
      "So related DDL changes commit or roll back together",
      "So indexes become invisible forever",
      "So constraints stop checking data",
      "So SELECT queries cannot run again"
    ],
    hint: "Think atomic deploy steps.",
    explanation: "Transactional DDL lets a set of schema changes either succeed together or leave the previous schema intact."
  },
  {
    id: "pg-schema-debug-check-cross-row",
    trackId: "pg-schema",
    mode: "debug",
    level: 8,
    concept: "CHECK limits",
    prompt: "Why is this CHECK constraint the wrong tool?",
    answer: "CHECK cannot safely enforce cross-row rules",
    acceptedAnswers: ["cross-row rule", "use unique or exclusion", "check only current row"],
    choices: [
      "CHECK cannot safely enforce cross-row rules",
      "CHECK cannot compare numbers",
      "CHECK only works on text columns",
      "CHECK automatically creates a backup"
    ],
    code: "CHECK (starts_at < (SELECT min(starts_at) FROM bookings))",
    hint: "CHECK constraints should depend on the row being inserted or updated.",
    explanation: "Use UNIQUE, EXCLUDE, FOREIGN KEY, or a trigger for rules that depend on other table rows."
  },
  {
    id: "pg-schema-enum-lookup",
    trackId: "pg-schema",
    mode: "reverse",
    level: 8,
    concept: "domain modeling",
    prompt: "Which design is usually easier to evolve when statuses need metadata and admin editing?",
    answer: "A lookup table referenced by a foreign key",
    choices: [
      "A lookup table referenced by a foreign key",
      "A hardcoded enum in every query",
      "A text column with no constraint",
      "A partial index for every status"
    ],
    hint: "Model the status as data when it has its own lifecycle.",
    explanation: "A lookup table can store labels, ordering, metadata, and permissions while preserving referential integrity."
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
    prompt: "Which process handles dead tuples left by updates and deletes?",
    answer: "VACUUM",
    choices: ["VACUUM", "CHECKPOINT", "REINDEX", "LISTEN"],
    hint: "Autovacuum runs it automatically in healthy systems.",
    explanation: "VACUUM removes dead row versions so space can be reused and planner statistics stay useful."
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
  },
  {
    id: "pg-production-isolation",
    trackId: "pg-production",
    mode: "pick",
    level: 8,
    concept: "isolation levels",
    prompt: "What is PostgreSQL's default transaction isolation level?",
    answer: "Read Committed",
    choices: ["Read Committed", "Serializable", "Read Uncommitted", "Snapshot Only"],
    hint: "Each statement sees committed data as of that statement.",
    explanation: "Read Committed is the default isolation level for PostgreSQL transactions."
  },
  {
    id: "pg-production-serializable-retry",
    trackId: "pg-production",
    mode: "reverse",
    level: 8,
    concept: "serializable retries",
    prompt: "What should an app do after a serialization failure?",
    answer: "Retry the whole transaction",
    choices: ["Retry the whole transaction", "Ignore the failed statement", "Disable constraints", "Run VACUUM FULL"],
    hint: "The transaction no longer succeeded as a unit.",
    explanation: "Serializable transactions can fail under concurrency, so application code must retry the transaction from the beginning."
  },
  {
    id: "pg-production-explain-analyze",
    trackId: "pg-production",
    mode: "input",
    level: 9,
    concept: "EXPLAIN ANALYZE",
    prompt: "Which EXPLAIN option runs the query and reports actual timing?",
    answer: "analyze",
    acceptedAnswers: ["ANALYZE", "explain analyze"],
    choices: ["ANALYZE", "PLAN", "RUN", "PROFILE"],
    hint: "Use it carefully on writes because the statement really executes.",
    explanation: "EXPLAIN ANALYZE executes the statement and reports actual row counts and timing."
  },
  {
    id: "pg-production-debug-seq-scan",
    trackId: "pg-production",
    mode: "debug",
    level: 9,
    concept: "plan reading",
    prompt: "What likely helps this high-selectivity lookup?",
    answer: "Create an index on orders(customer_id)",
    acceptedAnswers: ["index on customer_id", "create index orders customer_id", "add customer_id index"],
    choices: [
      "Create an index on orders(customer_id)",
      "Increase SELECT * usage",
      "Remove the WHERE clause",
      "Use COMMIT before SELECT"
    ],
    code: "Seq Scan on orders\n  Filter: (customer_id = 42)\n  Rows Removed by Filter: 982341",
    hint: "The plan is scanning many rows to find a narrow subset.",
    explanation: "An index on customer_id gives the planner a cheaper access path for selective customer lookups."
  },
  {
    id: "pg-production-debug-idle-transaction",
    trackId: "pg-production",
    mode: "debug",
    level: 9,
    concept: "idle transactions",
    prompt: "Why is this app behavior risky?",
    answer: "An idle open transaction can hold locks and block vacuum cleanup",
    acceptedAnswers: ["idle transaction holds locks", "blocks vacuum", "keeps transaction open"],
    choices: [
      "An idle open transaction can hold locks and block vacuum cleanup",
      "It makes SELECT syntax invalid",
      "It turns every index into a table",
      "It disables role permissions"
    ],
    code: "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 7;\n-- application waits for user input for several minutes",
    hint: "The transaction has not ended.",
    explanation: "Long open transactions can retain locks and old row versions, hurting concurrency and vacuum progress."
  },
  {
    id: "pg-production-deadlock",
    trackId: "pg-production",
    mode: "reverse",
    level: 9,
    concept: "deadlocks",
    prompt: "Which practice reduces deadlocks when updating related rows?",
    answer: "Lock rows in a consistent order",
    choices: ["Lock rows in a consistent order", "Randomize every UPDATE order", "Disable foreign keys", "Open more connections"],
    hint: "Every transaction should take locks in the same sequence.",
    explanation: "Consistent lock ordering prevents transactions from waiting on each other in a cycle."
  },
  {
    id: "pg-production-autovacuum",
    trackId: "pg-production",
    mode: "input",
    level: 10,
    concept: "autovacuum",
    prompt: "Which background system runs VACUUM and ANALYZE automatically?",
    answer: "autovacuum",
    acceptedAnswers: ["auto vacuum", "autovacuum launcher"],
    choices: ["autovacuum", "checkpoint", "wal sender", "logical decoder"],
    hint: "It keeps routine maintenance from being entirely manual.",
    explanation: "Autovacuum schedules vacuum and analyze work so ordinary updates and deletes do not degrade tables forever."
  },
  {
    id: "pg-production-logical-replication",
    trackId: "pg-production",
    mode: "pick",
    level: 10,
    concept: "logical replication",
    prompt: "Which pair is central to PostgreSQL logical replication setup?",
    answer: "Publication and subscription",
    choices: ["Publication and subscription", "Topic and consumer group", "Primary key and trigger only", "Vacuum and analyze"],
    hint: "One side publishes changes; the other subscribes.",
    explanation: "Logical replication sends changes from a publication to a subscription."
  },
  {
    id: "pg-production-pitr",
    trackId: "pg-production",
    mode: "reverse",
    level: 10,
    concept: "backup recovery",
    prompt: "What enables point-in-time recovery beyond a base backup?",
    answer: "Archived WAL files",
    choices: ["Archived WAL files", "Only a schema dump", "A bigger connection pool", "A CHECK constraint"],
    hint: "Recovery replays the write-ahead log.",
    explanation: "A base backup plus archived WAL lets PostgreSQL restore to a specific point in time."
  },
  {
    id: "pg-production-least-privilege",
    trackId: "pg-production",
    mode: "debug",
    level: 10,
    concept: "roles",
    prompt: "What is wrong with this application role setup?",
    answer: "The app role has unnecessary superuser power",
    acceptedAnswers: ["app should not be superuser", "least privilege", "remove superuser"],
    choices: [
      "The app role has unnecessary superuser power",
      "The role name must be uppercase",
      "Applications cannot use roles",
      "GRANT always requires VACUUM"
    ],
    code: "CREATE ROLE app_user LOGIN PASSWORD '...';\nALTER ROLE app_user SUPERUSER;",
    hint: "Application accounts should have only the privileges they need.",
    explanation: "Least privilege reduces blast radius. App roles should receive targeted permissions, not superuser."
  }
];

export const curriculumTopics: CurriculumTopic[] = [
  {
    id: "relational-model",
    trackId: "pg-foundations",
    level: 1,
    concept: "relational model",
    answer: "tables rows columns relations",
    hint: "Model facts as rows in tables with defined columns.",
    explanation: "The relational model gives PostgreSQL its core structure: relations with rows, columns, keys, and constraints."
  },
  {
    id: "psql-basics",
    trackId: "pg-foundations",
    level: 1,
    concept: "psql basics",
    answer: "\\d and \\? meta commands",
    hint: "Use psql meta commands to inspect schema and help.",
    explanation: "psql commands such as \\d, \\dt, \\x, and \\? make exploration fast before writing application code."
  },
  {
    id: "select-list",
    trackId: "pg-foundations",
    level: 1,
    concept: "SELECT list",
    answer: "choose only needed columns",
    hint: "Avoid SELECT * when callers need stable output.",
    explanation: "Explicit column lists reduce bandwidth and protect clients from accidental schema-change coupling."
  },
  {
    id: "where-predicates",
    trackId: "pg-foundations",
    level: 2,
    concept: "WHERE predicates",
    answer: "boolean filters before grouping",
    hint: "WHERE reduces candidate rows before GROUP BY and SELECT output.",
    explanation: "WHERE predicates define which rows are considered for later relational operations."
  },
  {
    id: "null-three-valued-logic",
    trackId: "pg-foundations",
    level: 2,
    concept: "NULL logic",
    answer: "true false unknown",
    hint: "NULL comparisons can become unknown rather than true or false.",
    explanation: "PostgreSQL uses three-valued SQL logic, so IS NULL and IS NOT NULL are essential."
  },
  {
    id: "order-limit",
    trackId: "pg-foundations",
    level: 2,
    concept: "ORDER BY and LIMIT",
    answer: "deterministic order before limiting",
    hint: "LIMIT without ORDER BY can return unstable subsets.",
    explanation: "ORDER BY defines result order, and LIMIT then selects from that ordered result."
  },
  {
    id: "dml-returning",
    trackId: "pg-foundations",
    level: 3,
    concept: "DML RETURNING",
    answer: "RETURNING modified rows",
    hint: "INSERT, UPDATE, and DELETE can send changed row values back.",
    explanation: "RETURNING avoids a second SELECT for generated IDs, changed timestamps, and affected values."
  },
  {
    id: "transactions-basics",
    trackId: "pg-foundations",
    level: 3,
    concept: "transaction basics",
    answer: "BEGIN COMMIT ROLLBACK",
    hint: "Group related writes so they succeed or fail together.",
    explanation: "Transactions protect consistency by making a set of statements atomic."
  },
  {
    id: "data-types",
    trackId: "pg-foundations",
    level: 3,
    concept: "data types",
    answer: "choose semantic column types",
    hint: "Types are part of the data contract.",
    explanation: "Using numeric, text, boolean, timestamp, uuid, jsonb, array, and domain types well improves correctness."
  },
  {
    id: "time-types",
    trackId: "pg-foundations",
    level: 3,
    concept: "time handling",
    answer: "timestamptz for instants",
    hint: "Store global points in time independently from display time zones.",
    explanation: "timestamptz is usually the right choice for event timestamps and audit fields."
  },
  {
    id: "expressions-functions",
    trackId: "pg-foundations",
    level: 4,
    concept: "expressions and functions",
    answer: "computed values in SELECT and WHERE",
    hint: "SQL expressions can derive, transform, and compare values.",
    explanation: "PostgreSQL expressions and functions support calculations without moving all work to application code."
  },
  {
    id: "case-coalesce",
    trackId: "pg-foundations",
    level: 4,
    concept: "CASE and COALESCE",
    answer: "conditional values and fallbacks",
    hint: "Use SQL expressions for labels, fallback fields, and derived status.",
    explanation: "CASE handles branching and COALESCE returns the first non-null expression."
  },
  {
    id: "views",
    trackId: "pg-foundations",
    level: 4,
    concept: "views",
    answer: "saved query interface",
    hint: "Expose a stable query shape without duplicating SQL everywhere.",
    explanation: "Views package a SELECT as a reusable relation for reporting, permissions, and compatibility."
  },
  {
    id: "parameters",
    trackId: "pg-foundations",
    level: 4,
    concept: "query parameters",
    answer: "bind values instead of string interpolation",
    hint: "User input should never be concatenated into SQL text.",
    explanation: "Parameterized queries protect against SQL injection and keep query planning clearer.",
    code: "WHERE email = $1"
  },
  {
    id: "schema-search-path",
    trackId: "pg-foundations",
    level: 4,
    concept: "schemas and search_path",
    answer: "namespace database objects",
    hint: "Schemas organize tables, functions, and permissions inside one database.",
    explanation: "Schemas let teams separate app, extension, tenant, and administrative objects."
  },
  {
    id: "inner-outer-joins",
    trackId: "pg-querying",
    level: 4,
    concept: "inner and outer joins",
    answer: "match rows with ON conditions",
    hint: "Choose INNER when both sides must match; choose OUTER when one side must be preserved.",
    explanation: "Join type controls whether unmatched rows disappear or remain with nulls."
  },
  {
    id: "join-cardinality",
    trackId: "pg-querying",
    level: 4,
    concept: "join cardinality",
    answer: "understand one-to-one one-to-many many-to-many",
    hint: "Unexpected duplicates often come from misunderstood relationships.",
    explanation: "Cardinality explains why joins multiply rows and how bridge tables model many-to-many data."
  },
  {
    id: "aggregation",
    trackId: "pg-querying",
    level: 4,
    concept: "aggregation",
    answer: "GROUP BY with aggregate functions",
    hint: "Group rows before applying count, sum, avg, min, or max.",
    explanation: "Aggregation summarizes sets of rows while preserving grouping columns."
  },
  {
    id: "having",
    trackId: "pg-querying",
    level: 5,
    concept: "HAVING",
    answer: "filter grouped results",
    hint: "Use HAVING after aggregate values exist.",
    explanation: "HAVING applies predicates to grouped rows, unlike WHERE which filters source rows."
  },
  {
    id: "distinct-on",
    trackId: "pg-querying",
    level: 5,
    concept: "DISTINCT ON",
    answer: "first row per group by ordering",
    hint: "PostgreSQL can keep one ordered representative per key.",
    explanation: "DISTINCT ON with ORDER BY is a concise PostgreSQL pattern for newest-row-per-group queries."
  },
  {
    id: "subqueries",
    trackId: "pg-querying",
    level: 5,
    concept: "subqueries",
    answer: "nested SELECT expressions",
    hint: "Use a query result as a filter, scalar value, or derived relation.",
    explanation: "Subqueries express dependencies between result sets without temporary application state."
  },
  {
    id: "exists",
    trackId: "pg-querying",
    level: 5,
    concept: "EXISTS",
    answer: "semi-join existence test",
    hint: "Ask whether at least one related row exists.",
    explanation: "EXISTS stops caring about row contents once a matching row is found."
  },
  {
    id: "ctes",
    trackId: "pg-querying",
    level: 5,
    concept: "common table expressions",
    answer: "WITH named subqueries",
    hint: "Name intermediate query steps for readability or recursion.",
    explanation: "CTEs can structure complex SQL and support recursive traversal."
  },
  {
    id: "window-functions",
    trackId: "pg-querying",
    level: 6,
    concept: "window functions",
    answer: "OVER PARTITION BY ORDER BY",
    hint: "Compute rankings or running totals without collapsing rows.",
    explanation: "Window functions compute values across related rows while retaining each original row."
  },
  {
    id: "lateral",
    trackId: "pg-querying",
    level: 6,
    concept: "LATERAL joins",
    answer: "per-row subquery access",
    hint: "Let a subquery refer to columns from earlier FROM items.",
    explanation: "LATERAL enables top-N-per-row and dependent expansion patterns in a single SQL query."
  },
  {
    id: "recursive-cte",
    trackId: "pg-querying",
    level: 6,
    concept: "recursive CTE",
    answer: "WITH RECURSIVE",
    hint: "Traverse trees, graphs, and hierarchies in SQL.",
    explanation: "Recursive CTEs combine a seed query and recursive step until no new rows appear."
  },
  {
    id: "set-operations",
    trackId: "pg-querying",
    level: 6,
    concept: "set operations",
    answer: "UNION INTERSECT EXCEPT",
    hint: "Combine compatible SELECT results as sets.",
    explanation: "Set operations merge, intersect, or subtract result sets with duplicate handling rules."
  },
  {
    id: "jsonb-querying",
    trackId: "pg-querying",
    level: 6,
    concept: "JSONB querying",
    answer: "operators and GIN indexes",
    hint: "Use jsonb operators for containment and key extraction.",
    explanation: "PostgreSQL can query semi-structured jsonb data, especially when paired with appropriate indexes."
  },
  {
    id: "full-text-search",
    trackId: "pg-querying",
    level: 6,
    concept: "full-text search",
    answer: "tsvector and tsquery",
    hint: "Search normalized terms rather than raw LIKE scans.",
    explanation: "PostgreSQL full-text search ranks and matches tokenized documents with language-aware processing."
  },
  {
    id: "explain-basics",
    trackId: "pg-querying",
    level: 6,
    concept: "EXPLAIN basics",
    answer: "read scans joins costs rows",
    hint: "A query plan explains how PostgreSQL intends to execute SQL.",
    explanation: "EXPLAIN reveals scan types, join strategies, estimated rows, and relative cost."
  },
  {
    id: "primary-foreign-keys",
    trackId: "pg-schema",
    level: 5,
    concept: "primary and foreign keys",
    answer: "identity and referential integrity",
    hint: "Keys define stable row identity and valid relationships.",
    explanation: "Primary keys identify rows; foreign keys enforce parent-child references."
  },
  {
    id: "unique-check-not-null",
    trackId: "pg-schema",
    level: 5,
    concept: "core constraints",
    answer: "UNIQUE CHECK NOT NULL",
    hint: "Let the database reject invalid facts.",
    explanation: "Constraints centralize invariants so every application path follows the same rules."
  },
  {
    id: "identity-sequences",
    trackId: "pg-schema",
    level: 5,
    concept: "identity and sequences",
    answer: "GENERATED AS IDENTITY",
    hint: "Use standard generated values instead of hand-managing numeric IDs.",
    explanation: "Identity columns and sequences provide safe generated values under concurrency."
  },
  {
    id: "btree-indexes",
    trackId: "pg-schema",
    level: 6,
    concept: "B-tree indexes",
    answer: "equality range and ordering access",
    hint: "B-tree is the default index for many common predicates.",
    explanation: "B-tree indexes support equality, range scans, ordering, uniqueness, and many join predicates."
  },
  {
    id: "composite-indexes",
    trackId: "pg-schema",
    level: 6,
    concept: "composite indexes",
    answer: "leftmost prefix and sort order",
    hint: "Column order should match predicates and ordering.",
    explanation: "Composite indexes work best when equality filters lead and ordered/range columns follow."
  },
  {
    id: "partial-expression-indexes",
    trackId: "pg-schema",
    level: 6,
    concept: "partial and expression indexes",
    answer: "index a subset or computed value",
    hint: "Index only the rows or expression your workload actually searches.",
    explanation: "Partial and expression indexes reduce size and support targeted predicates such as lower(email)."
  },
  {
    id: "gin-brin",
    trackId: "pg-schema",
    level: 6,
    concept: "GIN and BRIN indexes",
    answer: "inverted and block range indexes",
    hint: "Use specialized indexes for jsonb/search/arrays or naturally ordered large tables.",
    explanation: "GIN supports containment-style lookups; BRIN summarizes block ranges for huge ordered data."
  },
  {
    id: "migrations",
    trackId: "pg-schema",
    level: 7,
    concept: "schema migrations",
    answer: "small reversible transactional changes",
    hint: "Change production schema in controlled steps.",
    explanation: "Good migrations minimize locks, preserve compatibility, and record every structural change."
  },
  {
    id: "locking-ddl",
    trackId: "pg-schema",
    level: 7,
    concept: "DDL lock impact",
    answer: "avoid long blocking schema changes",
    hint: "Some ALTER operations can block writes or reads.",
    explanation: "Production schema design includes knowing which DDL operations rewrite tables or take strong locks."
  },
  {
    id: "partitioning",
    trackId: "pg-schema",
    level: 7,
    concept: "table partitioning",
    answer: "range list hash partitions",
    hint: "Partition large tables by access and retention patterns.",
    explanation: "Partitioning can improve maintenance and pruning when partition keys match workload patterns."
  },
  {
    id: "rls",
    trackId: "pg-schema",
    level: 7,
    concept: "row-level security",
    answer: "policies per row access",
    hint: "Restrict visible or writable rows inside the database.",
    explanation: "RLS policies let PostgreSQL enforce tenant or user boundaries at query time."
  },
  {
    id: "triggers",
    trackId: "pg-schema",
    level: 7,
    concept: "triggers",
    answer: "database-side reaction to row changes",
    hint: "Use triggers sparingly for invariants or audit behavior that must live near the data.",
    explanation: "Triggers can enforce or record behavior on INSERT, UPDATE, DELETE, or TRUNCATE."
  },
  {
    id: "materialized-views",
    trackId: "pg-schema",
    level: 8,
    concept: "materialized views",
    answer: "stored query results needing refresh",
    hint: "Use when expensive derived data can be refreshed on a schedule.",
    explanation: "Materialized views trade freshness for faster reads of precomputed query output."
  },
  {
    id: "extension-strategy",
    trackId: "pg-schema",
    level: 8,
    concept: "extensions",
    answer: "CREATE EXTENSION with governance",
    hint: "Extensions add capabilities but should be enabled intentionally.",
    explanation: "PostgreSQL extensions such as pgcrypto, pg_trgm, and uuid-ossp expand database features."
  },
  {
    id: "domains-enums-lookups",
    trackId: "pg-schema",
    level: 8,
    concept: "domain modeling choices",
    answer: "domains enums lookup tables",
    hint: "Pick the constraint shape that matches how values evolve.",
    explanation: "Domains, enums, and lookup tables each encode valid values with different operational tradeoffs."
  },
  {
    id: "isolation-levels",
    trackId: "pg-production",
    level: 8,
    concept: "isolation levels",
    answer: "Read Committed Repeatable Read Serializable",
    hint: "Choose visibility guarantees for concurrent transactions.",
    explanation: "Isolation levels define which concurrent changes a transaction can observe and when retries may be needed."
  },
  {
    id: "locks-deadlocks",
    trackId: "pg-production",
    level: 8,
    concept: "locks and deadlocks",
    answer: "short transactions and consistent lock order",
    hint: "Concurrency bugs often come from long transactions or reversed update order.",
    explanation: "Short transactions and consistent lock ordering reduce contention and deadlock probability."
  },
  {
    id: "vacuum-autovacuum",
    trackId: "pg-production",
    level: 8,
    concept: "VACUUM and autovacuum",
    answer: "clean dead tuples and update statistics",
    hint: "MVCC leaves old row versions that must be maintained.",
    explanation: "VACUUM and autovacuum keep bloat controlled and planner statistics current."
  },
  {
    id: "statistics-analyze",
    trackId: "pg-production",
    level: 8,
    concept: "planner statistics",
    answer: "ANALYZE and extended statistics",
    hint: "The planner depends on row count and distribution estimates.",
    explanation: "Fresh statistics help PostgreSQL choose joins, indexes, and scan strategies accurately."
  },
  {
    id: "explain-analyze-buffers",
    trackId: "pg-production",
    level: 9,
    concept: "EXPLAIN ANALYZE BUFFERS",
    answer: "actual runtime plus I/O evidence",
    hint: "Look at real rows, time, loops, and buffer reads.",
    explanation: "EXPLAIN ANALYZE BUFFERS shows actual work, making tuning evidence-based."
  },
  {
    id: "connection-pooling",
    trackId: "pg-production",
    level: 9,
    concept: "connection pooling",
    answer: "bounded reusable connections",
    hint: "PostgreSQL connections are not free.",
    explanation: "A pool protects the database from connection storms and amortizes startup cost."
  },
  {
    id: "backup-pitr",
    trackId: "pg-production",
    level: 9,
    concept: "backup and PITR",
    answer: "base backups plus archived WAL",
    hint: "A dump alone is not a complete point-in-time recovery plan.",
    explanation: "PITR requires base backups and WAL archiving so recovery can replay changes to a target time."
  },
  {
    id: "replication",
    trackId: "pg-production",
    level: 9,
    concept: "replication",
    answer: "physical and logical replication",
    hint: "Use the replication type that matches HA or data distribution needs.",
    explanation: "Physical replication copies storage-level changes; logical replication publishes row-level changes."
  },
  {
    id: "roles-privileges",
    trackId: "pg-production",
    level: 9,
    concept: "roles and privileges",
    answer: "least privilege grants",
    hint: "Application roles should have only required access.",
    explanation: "Least privilege reduces blast radius if credentials leak or application code is exploited."
  },
  {
    id: "timeouts",
    trackId: "pg-production",
    level: 9,
    concept: "timeouts",
    answer: "statement_timeout lock_timeout idle timeout",
    hint: "Bound waiting and runaway work.",
    explanation: "Timeouts prevent stuck sessions, lock waits, and expensive queries from degrading the system indefinitely."
  },
  {
    id: "monitoring",
    trackId: "pg-production",
    level: 10,
    concept: "monitoring",
    answer: "pg_stat views logs and query metrics",
    hint: "Watch throughput, latency, locks, replication, bloat, and slow queries.",
    explanation: "PostgreSQL exposes operational state through logs, pg_stat views, extensions, and metrics exporters."
  },
  {
    id: "high-availability",
    trackId: "pg-production",
    level: 10,
    concept: "high availability",
    answer: "replicas failover and tested recovery",
    hint: "HA is an operational system, not just a replica.",
    explanation: "Reliable PostgreSQL deployments test failover, backups, monitoring, and application reconnect behavior."
  },
  {
    id: "upgrades",
    trackId: "pg-production",
    level: 10,
    concept: "version upgrades",
    answer: "planned upgrade path with rollback",
    hint: "Major upgrades require compatibility, extension, and performance checks.",
    explanation: "Upgrade planning reduces downtime and catches query or extension behavior changes before production."
  },
  {
    id: "multi-tenancy",
    trackId: "pg-production",
    level: 10,
    concept: "multi-tenancy",
    answer: "tenant keys schemas or databases",
    hint: "Isolation strategy affects queries, security, migrations, and operations.",
    explanation: "Tenant modeling must balance isolation, cost, operational complexity, and query performance."
  },
  {
    id: "incident-response",
    trackId: "pg-production",
    level: 10,
    concept: "database incidents",
    answer: "observe contain recover and document",
    hint: "Production failures need a practiced response loop.",
    explanation: "A good incident process protects data, restores service, captures evidence, and improves runbooks."
  }
];

export const drills: LearningDrill[] = [...baseDrills, ...buildCurriculumDrills("postgres-full", curriculumTopics)];
