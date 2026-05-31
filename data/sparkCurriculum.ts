import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "spark-foundations",
    title: "Spark Foundations",
    level: "Beginner",
    focus: "SparkSession, DataFrames, SQL, lazy execution",
    accent: "#e9782f"
  },
  {
    id: "spark-sql",
    title: "Spark SQL",
    level: "Builder",
    focus: "optimizer, joins, files, functions, Spark Connect",
    accent: "#4f8dd8"
  },
  {
    id: "spark-streaming",
    title: "Structured Streaming",
    level: "Practitioner",
    focus: "streams, checkpoints, watermarks, state, Kafka",
    accent: "#41a67a"
  },
  {
    id: "spark-operations",
    title: "Spark Operations",
    level: "Expertise",
    focus: "clusters, memory, UI, security, production pipelines",
    accent: "#c85d75"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("spark-foundations", [
    ["SparkSession", "entry point for Spark APIs", "SparkSession creates DataFrames, SQL views, and runtime configuration."],
    ["DataFrame", "distributed table with schema", "DataFrames are the main structured API for Spark work."],
    ["Dataset", "typed JVM structured data", "Datasets add compile-time types in JVM languages."],
    ["RDD", "low-level distributed collection", "RDDs expose partitions and transformations under higher-level APIs."],
    ["transformations", "lazy dataset operations", "Transformations build a logical plan without immediate execution."],
    ["actions", "trigger execution", "Actions materialize results or write output."],
    ["lazy evaluation", "execute only when needed", "Spark optimizes the full plan before running a job."],
    ["schema", "column names and data types", "Schemas control parsing, validation, and query planning."],
    ["select and filter", "project and restrict rows", "These are the basic DataFrame shaping operations."],
    ["withColumn", "add or replace a column", "withColumn creates a new DataFrame expression."],
    ["aggregations", "group and summarize data", "Aggregates compute counts, sums, and other summaries per group."],
    ["joins", "combine DataFrames by condition", "Join choice affects shuffle, memory, and correctness."],
    ["SQL temp views", "query DataFrames with SQL", "Temp views expose DataFrames to Spark SQL."],
    ["file sources", "read parquet csv json text", "Spark reads common data formats through DataFrame readers."],
    ["partitioning", "split work across tasks", "Partitions determine parallelism and data movement."],
    ["cache and persist", "reuse computed data", "Caching helps repeated reads when memory cost is justified."],
    ["explain plans", "inspect logical and physical plans", "Explain output shows how Spark will execute a query."],
    ["spark-submit", "submit applications", "spark-submit launches packaged applications on a cluster or locally."]
  ]),
  ...defineTopics("spark-sql", [
    ["Catalyst optimizer", "optimize query plans", "Catalyst rewrites and plans structured queries."],
    ["whole-stage codegen", "generate optimized JVM code", "Code generation speeds many SQL operators."],
    ["shuffle", "redistribute data across partitions", "Shuffles are expensive and often dominate job runtime."],
    ["broadcast join", "send small table to executors", "Broadcast joins avoid shuffling the large side."],
    ["sort-merge join", "shuffle sort and merge", "Sort-merge joins handle large equi-joins."],
    ["window functions", "compute over ordered partitions", "Window functions preserve row detail while adding context."],
    ["UDF vs built-in functions", "prefer built-ins when possible", "Built-ins are optimized better than opaque user-defined functions."],
    ["Parquet", "columnar storage format", "Parquet is efficient for analytics and predicate pruning."],
    ["ORC", "columnar storage format", "ORC is another optimized analytics file format."],
    ["ANSI SQL mode", "stricter SQL behavior", "ANSI mode changes error and type coercion semantics."],
    ["null semantics", "three-valued SQL logic", "NULL affects comparisons, joins, and aggregations."],
    ["adaptive query execution", "optimize during runtime", "AQE adjusts plans using runtime statistics."],
    ["bucketing", "pre-cluster data by key", "Bucketing can reduce shuffle for matching joins."],
    ["repartition", "increase or reshape partitions", "Repartition triggers a shuffle to change distribution."],
    ["coalesce", "reduce partitions cheaply", "Coalesce narrows partition count without a full shuffle when possible."],
    ["skew handling", "mitigate uneven partition sizes", "Skew causes slow tasks and needs salting or AQE support."],
    ["Spark Connect", "client-server Spark protocol", "Connect separates client applications from the Spark driver."],
    ["DataFrame testing", "compare schemas and rows", "Reliable tests validate transformations on small representative data."]
  ]),
  ...defineTopics("spark-streaming", [
    ["Structured Streaming", "incremental DataFrame execution", "Streaming queries reuse DataFrame and SQL semantics continuously."],
    ["readStream", "define streaming input", "readStream creates an unbounded input DataFrame."],
    ["writeStream", "define streaming output", "writeStream starts or configures streaming sinks."],
    ["output modes", "append update complete", "Output mode controls which rows are emitted per trigger."],
    ["triggers", "control processing cadence", "Triggers decide when micro-batches or continuous processing happen."],
    ["checkpoints", "store progress and state", "Checkpoints are required for recovery and exactly-once coordination."],
    ["watermarks", "bound late data state", "Watermarks let Spark drop state older than an event-time threshold."],
    ["event time", "time embedded in the data", "Event time is the right clock for late-arriving stream records."],
    ["stateful aggregations", "maintain state across triggers", "State supports running counts, windows, and joins."],
    ["stream-stream joins", "join two unbounded inputs", "Watermarks and time constraints keep join state bounded."],
    ["foreachBatch", "custom batch sink logic", "foreachBatch lets each micro-batch use batch APIs."],
    ["Kafka source", "consume Kafka topics", "Structured Streaming can read Kafka records as streaming DataFrames."],
    ["Kafka sink", "write rows to Kafka", "Streaming output to Kafka needs topic, key, and value handling."],
    ["exactly-once caveat", "sink behavior matters", "End-to-end guarantees depend on the sink and idempotency."],
    ["query progress", "inspect streaming metrics", "Progress events reveal input rate, processing rate, and state size."],
    ["RocksDB state store", "externalized state backend", "RocksDB helps large streaming state workloads."],
    ["late data", "records after expected event time", "Late data handling depends on watermark and output mode."],
    ["stream recovery", "restart from checkpoint", "Recovery must reuse the same checkpoint and compatible query plan."]
  ]),
  ...defineTopics("spark-operations", [
    ["cluster managers", "Standalone YARN Kubernetes Mesos", "Cluster managers allocate executors and resources."],
    ["deployment modes", "client or cluster driver placement", "Driver location affects networking, logs, and failure behavior."],
    ["driver and executor", "coordinator and workers", "The driver plans work; executors run tasks and store data."],
    ["memory tuning", "balance execution storage overhead", "Spark memory settings must match workload and cluster limits."],
    ["dynamic allocation", "scale executors with demand", "Dynamic allocation changes executor count during a job."],
    ["fair scheduler", "share cluster across pools", "Fair scheduling prevents one workload from monopolizing resources."],
    ["Spark UI", "inspect jobs stages tasks SQL", "The UI is the primary runtime diagnostic surface."],
    ["event logs", "persist application history", "Event logs allow post-run inspection through the History Server."],
    ["History Server", "view completed applications", "The History Server reads event logs after applications finish."],
    ["metrics", "export runtime measurements", "Metrics support alerting and capacity decisions."],
    ["packaging jobs", "ship code and dependencies", "Job packaging must avoid dependency conflicts and missing classes."],
    ["dependency isolation", "separate application libraries", "Isolation prevents classpath conflicts between jobs."],
    ["Kubernetes deployment", "run Spark on Kubernetes", "Kubernetes mode needs images, service accounts, volumes, and resource limits."],
    ["security", "authentication authorization encryption", "Secure clusters protect data, UI, and shuffle communication."],
    ["cost optimization", "right-size compute and storage", "Cost work reduces wasted cores, memory, and retries."],
    ["production pipelines", "orchestrated reliable jobs", "Pipelines need scheduling, retries, data contracts, and alerts."],
    ["data quality", "validate inputs and outputs", "Quality checks catch bad data before downstream damage."],
    ["version upgrades", "test APIs plans and connectors", "Spark upgrades can change behavior, dependencies, and performance."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("spark", topics);
