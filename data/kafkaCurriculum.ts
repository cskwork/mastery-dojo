import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "kafka-foundations",
    title: "Kafka Foundations",
    level: "Beginner",
    focus: "brokers, topics, partitions, producers, consumers",
    accent: "#7b6bd6"
  },
  {
    id: "kafka-streaming",
    title: "Streaming Builder",
    level: "Builder",
    focus: "producer tuning, consumer flow, Connect, Streams",
    accent: "#4f8dd8"
  },
  {
    id: "kafka-operations",
    title: "Kafka Operations",
    level: "Practitioner",
    focus: "KRaft, security, quotas, lag, upgrades",
    accent: "#d0a23c"
  },
  {
    id: "kafka-expertise",
    title: "Kafka Expertise",
    level: "Expertise",
    focus: "exactly-once, state, multi-region, incidents",
    accent: "#c85d75"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("kafka-foundations", [
    ["broker", "Kafka server process", "Brokers store partitions and serve client reads and writes."],
    ["topic", "named event stream", "Topics organize records by business or technical stream."],
    ["partition", "ordered topic shard", "Partitions provide parallelism and per-partition ordering."],
    ["offset", "position in a partition log", "Offsets identify records and consumer progress."],
    ["record key and value", "event routing and payload", "Keys influence partition choice and values carry event data."],
    ["producer", "client that writes records", "Producers serialize and send records to topic partitions."],
    ["consumer", "client that reads records", "Consumers poll partitions and process records."],
    ["consumer group", "coordinated parallel consumers", "A group shares partitions so each partition is consumed by one member."],
    ["bootstrap servers", "initial broker addresses", "Clients use bootstrap servers to discover the cluster."],
    ["serialization", "convert data to bytes", "Kafka records store byte arrays, so clients serialize keys and values."],
    ["replication factor", "number of partition copies", "Replication protects availability when brokers fail."],
    ["leader and follower", "primary and replica roles", "Leaders handle client traffic while followers replicate data."],
    ["retention", "time or size based log keeping", "Kafka keeps records by retention policy, not consumer acknowledgement."],
    ["log segment", "physical partition file chunk", "Segments let Kafka delete or compact old log ranges."],
    ["KRaft basics", "Kafka metadata quorum", "Modern Kafka uses KRaft instead of ZooKeeper for metadata management."],
    ["CLI quickstart", "create topic produce consume", "Official scripts help validate a local cluster quickly."],
    ["delivery semantics", "at-most once at-least once exactly-once", "Semantics depend on producer, broker, and consumer settings."],
    ["consumer offset commit", "record processing progress", "Offset commits tell Kafka where the group should resume."]
  ]),
  ...defineTopics("kafka-streaming", [
    ["producer acks", "broker acknowledgement requirement", "Acks tune durability and latency tradeoffs."],
    ["idempotent producer", "deduplicate producer retries", "Idempotence prevents duplicate writes from retried sends."],
    ["transactions", "atomic multi-partition writes", "Transactions support exactly-once pipelines with committed reads."],
    ["batching and linger", "group records before send", "Batching improves throughput at the cost of latency."],
    ["compression", "reduce network and storage bytes", "Compression can improve throughput for repetitive payloads."],
    ["partitioner", "choose target partition", "Partitioners route records by key or custom logic."],
    ["consumer poll loop", "fetch and process records", "Consumers must poll regularly while processing safely."],
    ["sync and async commits", "commit latency tradeoff", "Commit style changes duplicate and loss risk."],
    ["rebalance", "reassign partitions in a group", "Rebalances happen when group membership or topics change."],
    ["offset reset", "start point when no offset exists", "auto.offset.reset selects earliest, latest, or none behavior."],
    ["cooperative rebalancing", "incremental partition movement", "Cooperative protocols reduce stop-the-world reassignment."],
    ["schema evolution", "compatible event contracts", "Evolving event schemas requires compatibility rules."],
    ["Kafka Connect", "connector runtime", "Connect moves data between Kafka and external systems."],
    ["source connector", "external system to Kafka", "Source connectors import records into Kafka topics."],
    ["sink connector", "Kafka to external system", "Sink connectors export topic data to databases, files, or services."],
    ["single message transform", "lightweight record transform", "SMTs modify records inside Connect without custom apps."],
    ["dead letter queue", "capture failed records", "DLQs preserve bad records for analysis instead of blocking all flow."],
    ["Kafka Streams topology", "processor graph", "A topology defines source, processing, state, and sink nodes."]
  ]),
  ...defineTopics("kafka-operations", [
    ["KRaft controllers", "metadata quorum nodes", "Controllers manage metadata and broker membership."],
    ["quorum voters", "controller voting set", "KRaft needs a stable quorum to commit metadata changes."],
    ["listener config", "separate client and inter-broker endpoints", "Listeners define how brokers advertise and accept connections."],
    ["SSL security", "encrypted and authenticated transport", "SSL protects data in transit and can authenticate clients."],
    ["SASL security", "pluggable authentication", "SASL mechanisms integrate Kafka with identity systems."],
    ["ACLs", "authorize Kafka operations", "ACLs restrict who can read, write, alter, or administer resources."],
    ["quotas", "limit client resource use", "Quotas prevent one client from exhausting broker capacity."],
    ["log compaction", "retain latest value per key", "Compaction supports changelog and table-like topics."],
    ["partition reassignment", "move partition replicas", "Reassignment balances load or evacuates brokers."],
    ["consumer lag", "distance from latest offset", "Lag indicates how far consumers are behind producers."],
    ["metrics and JMX", "observe broker and client health", "Kafka exposes many operational metrics through JMX."],
    ["MirrorMaker 2", "replicate between clusters", "MirrorMaker supports migration and multi-cluster replication."],
    ["rolling upgrade", "upgrade brokers without full outage", "Upgrade order and compatibility settings protect availability."],
    ["broker configs", "cluster behavior settings", "Broker config changes affect durability, performance, and security."],
    ["topic configs", "per-topic behavior settings", "Topic-level config tunes retention, compaction, and replication."],
    ["cluster sizing", "match partitions throughput storage", "Sizing must account for data rate, replication, consumers, and retention."],
    ["disaster recovery", "restore service after cluster loss", "DR plans require replication, backups, and tested failover."],
    ["tiered storage", "separate hot and remote log storage", "Tiered storage can extend retention without only scaling broker disks."]
  ]),
  ...defineTopics("kafka-expertise", [
    ["exactly-once semantics", "transactional read-process-write", "EOS combines idempotent producers, transactions, and committed reads."],
    ["transactional outbox", "publish after database commit", "The outbox pattern keeps database changes and events consistent."],
    ["ordering guarantees", "order only within a partition", "Global ordering requires one partition or downstream coordination."],
    ["hot partitions", "skewed load on one partition", "Bad keys can concentrate traffic and limit throughput."],
    ["backpressure", "slow consumers or brokers", "Backpressure needs throttling, scaling, or flow control."],
    ["state stores", "local durable stream state", "Kafka Streams stores tables and aggregations in state stores."],
    ["interactive queries", "query local stream state", "Interactive queries expose state-store data from stream applications."],
    ["windowing", "time-bounded stream grouping", "Windows aggregate records by event or processing time boundaries."],
    ["stream-table join", "enrich events with changelog state", "A table represents latest value by key for joins."],
    ["standby replicas", "warm state copies", "Standby tasks reduce recovery time after failure."],
    ["Connect distributed mode", "coordinated connector workers", "Distributed mode balances connector tasks across workers."],
    ["connector offset recovery", "resume external integration safely", "Offsets must be preserved when connectors are moved or recovered."],
    ["multi-region replication", "replicate with latency and conflict awareness", "Cross-region systems trade latency, cost, and consistency."],
    ["incident debugging", "correlate lag errors and broker metrics", "Kafka incidents require client, broker, and topic evidence together."],
    ["performance tuning", "tune producer consumer broker together", "Throughput bottlenecks can sit at any layer."],
    ["capacity model", "forecast bytes partitions and retention", "Capacity planning needs rate, replication, compaction, and consumer assumptions."],
    ["security audit", "review principals ACLs and listeners", "Kafka security depends on authentication, authorization, and encryption alignment."],
    ["KIP awareness", "track Kafka improvement proposals", "KIPs explain feature intent and migration impact."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("kafka", topics);
