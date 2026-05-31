import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "sqld-modeling",
    title: "Data Modeling",
    level: "Beginner",
    focus: "entities, attributes, relationships, identifiers",
    accent: "#4f8dd8"
  },
  {
    id: "sqld-sql-basic",
    title: "SQL Basics",
    level: "Builder",
    focus: "SELECT, filtering, joins, grouping, DML",
    accent: "#41a67a"
  },
  {
    id: "sqld-sql-application",
    title: "SQL Application",
    level: "Practitioner",
    focus: "window functions, DDL, DCL, TCL, execution order",
    accent: "#d0a23c"
  },
  {
    id: "sqld-exam",
    title: "Exam Expertise",
    level: "Expertise",
    focus: "official scope, timing, traps, mock remediation",
    accent: "#c85d75"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("sqld-modeling", [
    ["data modeling overview", "model real business data", "Modeling connects business rules to logical database structure."],
    ["entity", "thing with independent identity", "Entities become central nouns in the model."],
    ["attribute", "property of an entity", "Attributes describe facts stored about an entity."],
    ["relationship", "association between entities", "Relationships show how entity instances connect."],
    ["identifier", "attribute set that distinguishes rows", "Identifiers support uniqueness and reference."],
    ["normalization", "reduce redundancy by dependency", "Normalization separates repeating or dependent facts."],
    ["denormalization", "intentional redundancy", "Denormalization trades write simplicity for read performance or reporting."],
    ["ERD reading", "interpret entities and cardinalities", "ERDs show structure before physical SQL implementation."],
    ["cardinality", "number of related instances", "Cardinality explains one-to-one, one-to-many, and many-to-many links."],
    ["optionality", "mandatory or optional participation", "Optionality tells whether a relationship must exist."],
    ["transaction modeling", "capture business event data", "Transactions record events that change business state."],
    ["NULL attributes", "unknown or not applicable value", "NULL handling affects constraints, joins, and predicates."],
    ["natural key", "business meaningful identifier", "Natural keys come from the domain and can change with business rules."],
    ["surrogate key", "system generated identifier", "Surrogate keys stabilize references when business keys are awkward."],
    ["domain integrity", "valid values per attribute", "Domain rules constrain allowed data values."],
    ["logical model", "technology-independent structure", "Logical models describe data before physical storage decisions."],
    ["physical model", "database-specific implementation", "Physical models add tables, indexes, types, and storage choices."],
    ["model quality", "accuracy, consistency, simplicity", "Quality models represent rules without unnecessary duplication."]
  ]),
  ...defineTopics("sqld-sql-basic", [
    ["relational database", "tables connected by keys", "Relational systems store data in relations and enforce integrity."],
    ["SELECT", "return projected rows", "SELECT chooses columns and expressions from a table expression."],
    ["WHERE", "filter rows by condition", "WHERE removes rows before grouping and ordering."],
    ["comparison operators", "= <> < > <= >=", "Comparisons build boolean predicates."],
    ["logical operators", "AND OR NOT", "Logical operators combine or invert predicates."],
    ["NULL logic", "three-valued logic", "NULL comparisons produce unknown unless tested with IS NULL."],
    ["single-row functions", "transform one row value", "Single-row functions apply per row before aggregation."],
    ["aggregate functions", "summarize many rows", "COUNT, SUM, AVG, MIN, and MAX summarize groups."],
    ["GROUP BY", "form aggregate groups", "GROUP BY defines the rows each aggregate sees."],
    ["HAVING", "filter grouped results", "HAVING filters groups after aggregation."],
    ["ORDER BY", "sort result rows", "ORDER BY controls output ordering."],
    ["join basics", "combine related tables", "Joins match rows across table expressions."],
    ["inner join", "matched rows only", "Inner joins keep rows that satisfy the join condition."],
    ["outer join", "preserve unmatched side", "Outer joins keep unmatched rows from one or both sides."],
    ["cross join", "cartesian product", "Cross joins combine every row from each side."],
    ["subquery basics", "query nested in another query", "Subqueries can return scalar values, sets, or table expressions."],
    ["set operators", "UNION INTERSECT EXCEPT", "Set operators combine compatible query results."],
    ["DML", "INSERT UPDATE DELETE MERGE", "DML changes table data."]
  ]),
  ...defineTopics("sqld-sql-application", [
    ["window functions", "calculate over row windows", "Window functions keep row detail while computing grouped context."],
    ["ROLLUP", "subtotal hierarchy", "ROLLUP creates grouping subtotals from left to right."],
    ["CUBE", "all grouping combinations", "CUBE returns subtotals for every grouping combination."],
    ["TOP N", "rank and limit ordered rows", "Top-N queries require a deterministic ordering rule."],
    ["hierarchical query", "walk parent child rows", "Hierarchical queries traverse tree-shaped data."],
    ["self join", "join a table to itself", "Self joins compare rows within the same table."],
    ["PIVOT", "turn row values into columns", "PIVOT reshapes grouped row values into separate columns."],
    ["UNPIVOT", "turn columns into rows", "UNPIVOT normalizes repeated columns into row values."],
    ["regular expressions", "pattern-based text matching", "Regex predicates express richer text rules than LIKE."],
    ["DDL", "CREATE ALTER DROP", "DDL defines or changes database objects."],
    ["DCL", "GRANT REVOKE", "DCL manages privileges."],
    ["TCL", "COMMIT ROLLBACK SAVEPOINT", "TCL controls transaction boundaries."],
    ["constraints", "enforce integrity rules", "Constraints reject data that violates required rules."],
    ["views", "stored query interface", "Views hide complexity and expose stable query surfaces."],
    ["indexes", "speed selected access paths", "Indexes trade write overhead and storage for faster lookup."],
    ["sequence", "generate numeric values", "Sequences provide ordered generated numbers."],
    ["data dictionary", "metadata tables", "The dictionary exposes schema and object metadata."],
    ["SQL execution order", "FROM WHERE GROUP HAVING SELECT ORDER", "Logical execution order explains alias scope and filtering timing."]
  ]),
  ...defineTopics("sqld-exam", [
    ["90 minute exam", "manage time per question", "The SQLD written test is time-limited, so pacing matters."],
    ["50 questions", "balance modeling and SQL", "The official structure separates modeling from SQL understanding."],
    ["60 point pass", "target above minimum", "A pass requires enough total score, not just familiarity."],
    ["subject cutoff", "avoid weak-section failure", "A low section score can fail even when total study feels strong."],
    ["modeling questions", "10 question first subject", "Data modeling is smaller but still cutoff-relevant."],
    ["SQL questions", "40 question second subject", "SQL basics and applications dominate the question volume."],
    ["no eligibility restriction", "anyone can apply", "SQLD does not require a prior degree or work history."],
    ["official scope triage", "study from DataQ criteria", "Use the current official exam guide as the source of truth."],
    ["wrong-answer notebook", "record missed rule and trap", "Reviewing why an answer was wrong prevents repeat misses."],
    ["timeboxing", "skip and return", "Hard questions should not consume the whole exam clock."],
    ["join result tracing", "draw intermediate rows", "Tracing joins avoids guessing row counts."],
    ["NULL trap drills", "test IS NULL and unknown", "NULL logic is a common source of wrong SQL answers."],
    ["window pattern drills", "separate partition order frame", "Window questions often hinge on partitioning and ordering."],
    ["management statements", "separate DDL DCL TCL", "Command category questions reward precise classification."],
    ["mock exam review", "analyze by subject", "Mock results should map misses back to official subjects."],
    ["retention plan", "spaced repetition", "Short repeated review keeps definitions and syntax available."],
    ["keyword contrast", "compare similar terms", "Contrasting near terms prevents definition swaps."],
    ["final readiness check", "simulate official constraints", "Practice with the same time and question pressure as the exam."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("sqld", topics);
