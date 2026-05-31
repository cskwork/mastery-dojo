import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "flink-foundations",
    title: "Flink Foundations",
    level: "Beginner",
    focus: "DataStream, Table API, event time, checkpoints",
    accent: "#e6526f"
  },
  {
    id: "flink-sql-table",
    title: "Flink SQL and Table",
    level: "Builder",
    focus: "dynamic tables, connectors, watermarks, changelogs",
    accent: "#4f8dd8"
  },
  {
    id: "flink-state-ops",
    title: "Stateful Operations",
    level: "Practitioner",
    focus: "state, checkpoints, recovery, backpressure, metrics",
    accent: "#41a67a"
  },
  {
    id: "flink-expertise",
    title: "Flink Expertise",
    level: "Expertise",
    focus: "event-time correctness, large state, HA, upgrades, incidents",
    accent: "#d0a23c"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("flink-foundations", [
    ["DataStream API", "program unbounded or bounded streams", "DataStream is the core stream processing API."],
    ["Table API", "relational API for streams and batches", "Table API provides expression-based relational processing."],
    ["Flink SQL", "SQL over dynamic tables", "Flink SQL lets stream jobs be expressed declaratively."],
    ["event time", "time from the event", "Event time supports correct results with out-of-order records."],
    ["processing time", "time on the machine", "Processing time is simple but less correct for delayed data."],
    ["watermarks", "progress signal for event time", "Watermarks tell Flink how far event time has advanced."],
    ["source", "ingest records into a job", "Sources connect external systems to Flink pipelines."],
    ["sink", "write job output", "Sinks deliver processed records to external systems."],
    ["keyed streams", "partition by key", "Keying data makes state and timers scoped per key."],
    ["map filter flatMap", "basic record transformations", "These operators transform, drop, or expand records."],
    ["windows", "group records by time or count", "Windows produce bounded calculations over streams."],
    ["process function", "low-level event and timer control", "Process functions expose state and timer APIs."],
    ["parallelism", "number of operator subtasks", "Parallelism controls throughput and resource usage."],
    ["task slots", "execution resource slots", "Task slots divide worker capacity among operator subtasks."],
    ["checkpoints", "consistent recovery snapshots", "Checkpoints let Flink restore state after failure."],
    ["savepoints", "operator-controlled snapshots", "Savepoints support upgrades, migration, and planned restarts."],
    ["stateful functions", "remember across records", "State lets jobs compute over history, not only one event."],
    ["connector basics", "external system integration", "Connectors define how Flink reads and writes data."]
  ]),
  ...defineTopics("flink-sql-table", [
    ["dynamic tables", "changing table over time", "Dynamic tables model streaming updates relationally."],
    ["SQL DDL", "declare tables and connectors", "CREATE TABLE describes schema, connector, and options."],
    ["catalogs", "metadata namespaces", "Catalogs organize databases, tables, and functions."],
    ["connectors", "systems behind tables", "Connectors bind tables to Kafka, files, JDBC, and other systems."],
    ["Kafka connector", "read or write Kafka topics", "Kafka tables map topic records to rows."],
    ["file connector", "read or write filesystem data", "File connectors support bounded or streaming file workloads."],
    ["time attributes", "event or processing time columns", "Time attributes drive windows and temporal joins."],
    ["watermark definition", "declare lateness policy", "SQL watermarks define event-time progress expressions."],
    ["window TVFs", "table-valued window functions", "TVFs express tumble, hop, and cumulative windows."],
    ["joins", "combine dynamic tables", "Streaming joins need keys, time bounds, and state awareness."],
    ["aggregations", "maintain changing summaries", "Aggregations produce updates as new records arrive."],
    ["UDFs", "custom scalar or table logic", "User-defined functions extend SQL when built-ins are not enough."],
    ["changelog streams", "insert update delete messages", "Dynamic tables translate to streams of changes."],
    ["upsert semantics", "latest row per key", "Upsert sinks need keys to interpret updates."],
    ["primary keys", "logical uniqueness constraints", "Keys help planners and sinks understand update semantics."],
    ["table stream conversion", "bridge DataStream and Table", "Conversions let one job mix procedural and relational APIs."],
    ["statement sets", "submit multiple inserts", "Statement sets optimize and run related SQL inserts together."],
    ["query explain", "inspect optimized plan", "Explain output helps validate join and state behavior."]
  ]),
  ...defineTopics("flink-state-ops", [
    ["keyed state", "state partitioned by key", "Keyed state scales with keyed streams and restores by key group."],
    ["operator state", "state scoped to operator subtask", "Operator state supports source offsets and custom partitioned state."],
    ["state backend", "storage engine for state", "Backends define how state is stored and checkpointed."],
    ["RocksDB state backend", "embedded persistent key-value state", "RocksDB supports large state beyond heap memory."],
    ["ForSt state backend", "file-oriented state backend", "ForSt targets disaggregated and large-state use cases."],
    ["checkpoint storage", "durable snapshot location", "Checkpoint storage must survive task and manager failures."],
    ["checkpoint alignment", "consistent barrier coordination", "Alignment keeps operator state consistent across inputs."],
    ["unaligned checkpoints", "snapshot in-flight data", "Unaligned checkpoints help under backpressure."],
    ["savepoint restore", "resume from planned snapshot", "Restore needs compatible operator IDs and state schemas."],
    ["exactly-once", "consistent state and sink commit", "Exactly-once depends on checkpoints and compatible sinks."],
    ["restart strategies", "define failure retry behavior", "Restart policy controls when failed jobs recover or stop."],
    ["timers", "schedule future key callbacks", "Timers support time-based state cleanup and logic."],
    ["side outputs", "emit secondary streams", "Side outputs route late, invalid, or special records separately."],
    ["broadcast state", "distribute shared control data", "Broadcast state applies rule updates to all parallel subtasks."],
    ["async I/O", "non-blocking external calls", "Async I/O prevents slow services from blocking processing threads."],
    ["backpressure monitoring", "detect downstream slowdown", "Backpressure shows where throughput is constrained."],
    ["metrics", "observe job and operator health", "Metrics drive alerts, dashboards, and capacity decisions."],
    ["rescaling", "change parallelism with state", "Rescaling redistributes state and requires compatible snapshots."]
  ]),
  ...defineTopics("flink-expertise", [
    ["event-time correctness", "results based on event clocks", "Correct streaming logic must handle disorder and late data."],
    ["watermark alignment", "coordinate source progress", "Alignment prevents one source from racing far ahead."],
    ["state TTL", "expire old state", "TTL limits state growth and stale data exposure."],
    ["large state tuning", "optimize checkpoint and backend behavior", "Large state needs tuned backend, storage, and checkpoint settings."],
    ["incremental checkpointing", "persist only changes", "Incremental snapshots reduce checkpoint cost for large state."],
    ["two-phase commit sinks", "commit with checkpoints", "Two-phase commit sinks support exactly-once external writes."],
    ["Kafka transactional sink", "checkpoint coordinated Kafka commit", "Kafka sink transactions align output with checkpoints."],
    ["schema evolution", "change state and records safely", "Evolution needs compatibility for serializers, state, and downstream consumers."],
    ["multi-job architecture", "compose pipelines deliberately", "Splitting jobs changes isolation, latency, and recovery behavior."],
    ["high availability", "recover managers and jobs", "HA protects control-plane state and job continuity."],
    ["Kubernetes operator", "manage Flink apps declaratively", "The operator automates deployment, upgrades, and savepoint flows."],
    ["deployment modes", "session application per-job clusters", "Mode choice affects isolation, startup time, and resource management."],
    ["SQL Gateway", "submit and manage SQL remotely", "SQL Gateway provides service access for SQL clients."],
    ["resource tuning", "right-size CPU memory network", "Flink performance depends on balanced resources and parallelism."],
    ["fault injection", "prove recovery behavior", "Injected failures validate checkpointing and restart assumptions."],
    ["upgrade strategy", "savepoint and compatibility plan", "Upgrades should preserve state and provide rollback."],
    ["incident response", "triage lag backpressure failures", "Incidents need metrics, logs, checkpoints, and topology context."],
    ["data contract governance", "control schema and semantics", "Governance prevents incompatible upstream changes from breaking jobs."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("flink", topics);
