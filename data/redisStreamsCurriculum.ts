import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";

export const tracks: LearningTrack[] = [
  {
    id: "stream-foundations",
    title: "Stream Basics",
    level: "Beginner",
    focus: "entries, IDs, fields, reads",
    accent: "#d94e42"
  },
  {
    id: "stream-producers",
    title: "Producer Flow",
    level: "Builder",
    focus: "XADD, trimming, event shape, batching",
    accent: "#d58b25"
  },
  {
    id: "stream-consumers",
    title: "Consumer Groups",
    level: "Practitioner",
    focus: "groups, pending entries, acknowledgements",
    accent: "#4ea36c"
  },
  {
    id: "stream-operations",
    title: "Reliability Lab",
    level: "Expertise",
    focus: "recovery, backpressure, monitoring, replay",
    accent: "#5b8bd8"
  }
];

const baseDrills: LearningDrill[] = [
  {
    id: "stream-foundations-xadd",
    trackId: "stream-foundations",
    mode: "pick",
    level: 1,
    concept: "XADD",
    prompt: "Which command appends an entry to a Redis stream?",
    answer: "XADD",
    choices: ["XADD", "LPUSH", "SET", "PUBLISH"],
    hint: "Streams use X-prefixed commands.",
    explanation: "XADD appends a new stream entry with an ID and field/value pairs."
  },
  {
    id: "stream-foundations-id",
    trackId: "stream-foundations",
    mode: "input",
    level: 1,
    concept: "entry IDs",
    prompt: "Which ID asks Redis to generate the stream entry ID?",
    answer: "*",
    acceptedAnswers: ["asterisk"],
    choices: ["*", "0", "$", ">"],
    hint: "It means let Redis assign the timestamp-sequence ID.",
    explanation: "XADD mystream * field value lets Redis generate the entry ID."
  },
  {
    id: "stream-foundations-range",
    trackId: "stream-foundations",
    mode: "reverse",
    level: 2,
    concept: "XRANGE",
    prompt: "Which command reads entries in ID order between two bounds?",
    answer: "XRANGE",
    choices: ["XRANGE", "SCAN", "BLPOP", "GETRANGE"],
    hint: "It ranges over stream IDs.",
    explanation: "XRANGE key start end returns stream entries in ascending ID order."
  },
  {
    id: "stream-foundations-debug-type",
    trackId: "stream-foundations",
    mode: "debug",
    level: 2,
    concept: "stream shape",
    prompt: "What fixes this attempt to add structured event data?",
    answer: "Use field value pairs",
    acceptedAnswers: ["field value pairs", "use fields"],
    choices: ["Use field value pairs", "Use only one JSON key name", "Call GET before XADD", "Replace XADD with SET"],
    code: "XADD events * user_id",
    hint: "A stream entry stores fields and values.",
    explanation: "XADD needs pairs such as user_id 42 action signup."
  },
  {
    id: "stream-foundations-id-format",
    trackId: "stream-foundations",
    mode: "pick",
    level: 1,
    concept: "ID format",
    prompt: "What does a typical Redis stream ID look like?",
    answer: "milliseconds-sequence",
    choices: ["milliseconds-sequence", "uuid-only", "topic:partition:offset", "json timestamp field"],
    hint: "It has two numeric parts separated by a hyphen.",
    explanation: "A stream ID such as 1717000000000-0 combines a millisecond time part with a sequence part."
  },
  {
    id: "stream-foundations-xlen",
    trackId: "stream-foundations",
    mode: "input",
    level: 2,
    concept: "XLEN",
    prompt: "Which command returns the number of entries in a stream?",
    answer: "xlen",
    acceptedAnswers: ["XLEN"],
    choices: ["XLEN", "LLEN", "SCARD", "COUNT"],
    hint: "It is the stream counterpart to length checks.",
    explanation: "XLEN mystream returns the stream's entry count."
  },
  {
    id: "stream-foundations-bounds",
    trackId: "stream-foundations",
    mode: "reverse",
    level: 2,
    concept: "range bounds",
    prompt: "In XRANGE, which bounds mean from the smallest ID to the largest ID?",
    answer: "- +",
    acceptedAnswers: ["- to +", "minus plus"],
    choices: ["- +", "0 $", "* >", "START END"],
    hint: "Redis uses symbolic minimum and maximum stream IDs.",
    explanation: "XRANGE mystream - + returns entries from the stream's first ID through its last ID."
  },
  {
    id: "stream-foundations-xrevrange",
    trackId: "stream-foundations",
    mode: "pick",
    level: 2,
    concept: "XREVRANGE",
    prompt: "Which command reads stream entries newest-first?",
    answer: "XREVRANGE",
    choices: ["XREVRANGE", "XRANGE DESC", "XREAD REVERSE", "XTAIL"],
    hint: "It is the reverse range command.",
    explanation: "XREVRANGE returns entries in descending ID order."
  },
  {
    id: "stream-foundations-xread",
    trackId: "stream-foundations",
    mode: "reverse",
    level: 3,
    concept: "XREAD",
    prompt: "Which command reads from one or more streams without a consumer group?",
    answer: "XREAD",
    choices: ["XREAD", "XREADGROUP", "XRANGEGROUP", "SUBSCRIBE"],
    hint: "Consumer groups add GROUP to the read command.",
    explanation: "XREAD reads stream entries directly and can block for new entries."
  },
  {
    id: "stream-foundations-block",
    trackId: "stream-foundations",
    mode: "input",
    level: 3,
    concept: "blocking reads",
    prompt: "Which XREAD option waits for entries instead of returning immediately?",
    answer: "block",
    acceptedAnswers: ["BLOCK", "block milliseconds"],
    choices: ["BLOCK", "WAIT", "SLEEP", "HOLD"],
    hint: "It takes a millisecond timeout.",
    explanation: "XREAD BLOCK 5000 STREAMS events $ waits up to five seconds for a new entry."
  },
  {
    id: "stream-foundations-multi-stream",
    trackId: "stream-foundations",
    mode: "pick",
    level: 3,
    concept: "STREAMS clause",
    prompt: "Which XREAD shape reads two streams from explicit IDs?",
    answer: "XREAD STREAMS orders payments 0-0 0-0",
    choices: [
      "XREAD STREAMS orders payments 0-0 0-0",
      "XREAD orders 0-0 payments 0-0",
      "XREAD STREAM orders:0-0 payments:0-0",
      "XREAD MULTI orders payments"
    ],
    hint: "List stream keys first, then the same number of IDs.",
    explanation: "The STREAMS clause groups keys before offsets, so each stream key has a matching ID."
  },
  {
    id: "stream-foundations-debug-start-id",
    trackId: "stream-foundations",
    mode: "debug",
    level: 3,
    concept: "replay start",
    prompt: "Why does this replay miss the first stream entry?",
    answer: "XREAD returns entries after the supplied ID",
    acceptedAnswers: ["after supplied id", "use 0", "xread is exclusive"],
    choices: [
      "XREAD returns entries after the supplied ID",
      "Redis streams cannot replay history",
      "BLOCK must always be zero",
      "XREAD requires a consumer group"
    ],
    code: "XREAD STREAMS events 0-0",
    hint: "The ID is the last seen ID, not an inclusive lower bound.",
    explanation: "For XREAD, Redis returns entries with IDs greater than the supplied ID. Use 0 to include the first 0-0 style entry."
  },
  {
    id: "stream-foundations-debug-old-id",
    trackId: "stream-foundations",
    mode: "debug",
    level: 4,
    concept: "monotonic IDs",
    prompt: "Why can this second append fail?",
    answer: "Stream IDs must increase",
    acceptedAnswers: ["ids must increase", "id not greater", "monotonic ids"],
    choices: ["Stream IDs must increase", "XADD cannot use explicit IDs", "Fields must be JSON", "The stream key expired"],
    code: "XADD events 1000-0 type first\nXADD events 999-0 type second",
    hint: "A new explicit ID must be greater than the last stream ID.",
    explanation: "Redis rejects a stream entry ID that is not greater than the stream's top ID."
  },
  {
    id: "stream-foundations-xdel",
    trackId: "stream-foundations",
    mode: "reverse",
    level: 4,
    concept: "XDEL",
    prompt: "Which command removes specific entries by ID from a stream?",
    answer: "XDEL",
    choices: ["XDEL", "DELENTRY", "XACK", "XTRIM ID"],
    hint: "It deletes entries, not pending references.",
    explanation: "XDEL key id removes the listed stream entries while consumer-group state may still reference delivered IDs."
  },
  {
    id: "stream-producers-basic",
    trackId: "stream-producers",
    mode: "pick",
    level: 3,
    concept: "event append",
    prompt: "Which command appends a signup event with a generated ID?",
    answer: "XADD events * type signup user_id 42",
    choices: [
      "XADD events * type signup user_id 42",
      "XREAD events type signup user_id 42",
      "HSET events * type signup",
      "PUBLISH events * signup"
    ],
    hint: "Use XADD, stream key, ID, then field/value pairs.",
    explanation: "The star asks Redis to generate the ID, and the remaining tokens are event fields."
  },
  {
    id: "stream-producers-trim",
    trackId: "stream-producers",
    mode: "input",
    level: 3,
    concept: "trimming",
    prompt: "Which XADD option caps a stream near a maximum length?",
    answer: "MAXLEN",
    acceptedAnswers: ["maxlen", "maxlen ~"],
    choices: ["MAXLEN", "TTL", "LIMIT", "COUNT"],
    hint: "It can be approximate with a tilde.",
    explanation: "XADD mystream MAXLEN ~ 10000 * field value keeps the stream near the target length."
  },
  {
    id: "stream-producers-dollar",
    trackId: "stream-producers",
    mode: "reverse",
    level: 4,
    concept: "latest ID",
    prompt: "In XREAD, which ID means only entries added after the command starts watching?",
    answer: "$",
    choices: ["$", ">", "*", "0-0"],
    hint: "It means the current end of the stream.",
    explanation: "$ starts reading from the latest known entry, so earlier history is skipped."
  },
  {
    id: "stream-producers-debug-bounds",
    trackId: "stream-producers",
    mode: "debug",
    level: 4,
    concept: "blocking reads",
    prompt: "What fixes a producer test that misses historical entries?",
    answer: "Read from 0-0 instead of $",
    acceptedAnswers: ["use 0-0", "read from 0-0"],
    choices: ["Read from 0-0 instead of $", "Delete the stream", "Use SET before XREAD", "Disable blocking"],
    code: "XREAD STREAMS events $",
    hint: "$ skips old entries.",
    explanation: "0-0 replays from history. $ is for only future entries after the read starts."
  },
  {
    id: "stream-producers-approx-trim",
    trackId: "stream-producers",
    mode: "pick",
    level: 4,
    concept: "approximate trim",
    prompt: "Which XADD option uses approximate trimming for better performance?",
    answer: "MAXLEN ~ 10000",
    choices: ["MAXLEN ~ 10000", "MAXLEN FAST 10000", "TRIM APPROX 10000", "COUNT ~ 10000"],
    hint: "The tilde marks approximate trimming.",
    explanation: "MAXLEN ~ lets Redis trim near the target instead of forcing exact trimming every append."
  },
  {
    id: "stream-producers-minid",
    trackId: "stream-producers",
    mode: "reverse",
    level: 4,
    concept: "MINID",
    prompt: "Which trimming strategy removes entries older than an ID threshold?",
    answer: "MINID",
    choices: ["MINID", "MAXLEN", "MAXID", "OLDERTHAN"],
    hint: "It is based on IDs, not entry count.",
    explanation: "MINID trims entries with IDs below the supplied threshold."
  },
  {
    id: "stream-producers-nomkstream",
    trackId: "stream-producers",
    mode: "input",
    level: 5,
    concept: "NOMKSTREAM",
    prompt: "Which XADD option prevents Redis from creating the stream key automatically?",
    answer: "nomkstream",
    acceptedAnswers: ["NOMKSTREAM"],
    choices: ["NOMKSTREAM", "NXSTREAM", "NOAUTO", "EXISTS"],
    hint: "The name says do not make a stream.",
    explanation: "NOMKSTREAM makes XADD fail when the stream key does not already exist."
  },
  {
    id: "stream-producers-schema-version",
    trackId: "stream-producers",
    mode: "pick",
    level: 5,
    concept: "event schema",
    prompt: "Which field helps consumers evolve event parsing safely?",
    answer: "schema_version",
    choices: ["schema_version", "random_padding", "redis_password", "last_seen_id"],
    hint: "Consumers need to know how to decode the event shape.",
    explanation: "A schema_version field lets producers change event fields while consumers branch by version."
  },
  {
    id: "stream-producers-debug-field-order",
    trackId: "stream-producers",
    mode: "debug",
    level: 5,
    concept: "field/value pairs",
    prompt: "What fixes this malformed event append?",
    answer: "Add a value for every field",
    acceptedAnswers: ["field value pairs", "add missing value", "even number of field values"],
    choices: ["Add a value for every field", "Use XREADGROUP instead", "Put STREAMS before the key", "Replace type with $"],
    code: "XADD events * type signup user_id",
    hint: "After the ID, the tokens must come in pairs.",
    explanation: "XADD requires field value pairs, so user_id needs a value such as user_id 42."
  },
  {
    id: "stream-producers-count-batch",
    trackId: "stream-producers",
    mode: "reverse",
    level: 5,
    concept: "batch size",
    prompt: "Which XREAD option limits how many entries are returned per stream?",
    answer: "COUNT",
    choices: ["COUNT", "LIMIT", "MAXLEN", "BATCHONLY"],
    hint: "It appears before STREAMS in XREAD.",
    explanation: "COUNT lets a reader bound the size of each response and keep processing batches predictable."
  },
  {
    id: "stream-producers-pipeline",
    trackId: "stream-producers",
    mode: "pick",
    level: 6,
    concept: "producer throughput",
    prompt: "What helps high-volume producers reduce network round trips?",
    answer: "Pipeline multiple XADD commands",
    choices: [
      "Pipeline multiple XADD commands",
      "Call KEYS before every XADD",
      "Use one stream per field",
      "Block inside the producer"
    ],
    hint: "Batch the client/server exchange.",
    explanation: "Pipelining sends multiple XADD commands without waiting for each response before sending the next."
  },
  {
    id: "stream-producers-debug-unbounded",
    trackId: "stream-producers",
    mode: "debug",
    level: 6,
    concept: "retention",
    prompt: "What is missing from this high-volume event stream?",
    answer: "A retention policy such as MAXLEN or XTRIM",
    acceptedAnswers: ["maxlen", "xtrim", "retention policy"],
    choices: [
      "A retention policy such as MAXLEN or XTRIM",
      "A second value for every consumer name",
      "A GROUP option on XADD",
      "A manual COMMIT command"
    ],
    code: "XADD pageviews * path /pricing user_id 42",
    hint: "Streams can grow without bound if you never trim them.",
    explanation: "Use XADD MAXLEN/MINID or XTRIM to keep memory growth aligned with retention goals."
  },
  {
    id: "stream-producers-xtrim-exact",
    trackId: "stream-producers",
    mode: "pick",
    level: 6,
    concept: "XTRIM",
    prompt: "Which command trims an existing stream to an exact maximum length?",
    answer: "XTRIM events MAXLEN = 10000",
    choices: [
      "XTRIM events MAXLEN = 10000",
      "XDEL events MAXLEN 10000",
      "XRANGE events MAXLEN 10000",
      "TRIM events 10000"
    ],
    hint: "XTRIM is the standalone trimming command.",
    explanation: "XTRIM can trim existing stream entries by length or minimum ID, exact or approximate."
  },
  {
    id: "stream-producers-debug-json-blob",
    trackId: "stream-producers",
    mode: "debug",
    level: 6,
    concept: "event shape",
    prompt: "What is the tradeoff in this event shape?",
    answer: "A single JSON blob hides fields from simple stream inspection",
    acceptedAnswers: ["json blob hides fields", "harder to inspect fields", "opaque payload"],
    choices: [
      "A single JSON blob hides fields from simple stream inspection",
      "Redis streams forbid JSON text",
      "XADD cannot store strings",
      "Consumers will acknowledge automatically"
    ],
    code: "XADD events * payload '{\"type\":\"signup\",\"user_id\":42}'",
    hint: "It works, but field-level visibility changes.",
    explanation: "A JSON payload can be valid, but explicit fields make basic stream inspection and routing easier."
  },
  {
    id: "stream-consumers-group",
    trackId: "stream-consumers",
    mode: "pick",
    level: 5,
    concept: "consumer groups",
    prompt: "Which command creates a consumer group?",
    answer: "XGROUP CREATE",
    choices: ["XGROUP CREATE", "XREAD CREATE", "GROUP BY", "XACK CREATE"],
    hint: "Group management is under XGROUP.",
    explanation: "XGROUP CREATE key group id creates a group with its own delivery state."
  },
  {
    id: "stream-consumers-next",
    trackId: "stream-consumers",
    mode: "input",
    level: 5,
    concept: "new messages",
    prompt: "In XREADGROUP, which ID asks for never-delivered entries?",
    answer: ">",
    acceptedAnswers: ["greater than"],
    choices: [">", "$", "*", "0"],
    hint: "It points beyond the group's delivered history.",
    explanation: "> tells Redis to deliver new entries that have not been assigned to a consumer."
  },
  {
    id: "stream-consumers-ack",
    trackId: "stream-consumers",
    mode: "reverse",
    level: 6,
    concept: "acknowledgement",
    prompt: "Which command removes a processed entry from the pending list?",
    answer: "XACK",
    choices: ["XACK", "XDEL", "XTRIM", "XINFO"],
    hint: "It acknowledges successful processing to the group.",
    explanation: "XACK marks entries as handled for the consumer group and removes them from the PEL."
  },
  {
    id: "stream-consumers-debug-pending",
    trackId: "stream-consumers",
    mode: "debug",
    level: 6,
    concept: "pending entries",
    prompt: "What fixes a consumer that processes messages but leaves them pending forever?",
    answer: "Call XACK after successful processing",
    acceptedAnswers: ["xack", "call xack"],
    choices: [
      "Call XACK after successful processing",
      "Use XDEL before processing",
      "Start every read at $",
      "Create a new group per message"
    ],
    code: "XREADGROUP GROUP workers c1 STREAMS events >",
    hint: "The group needs a success signal.",
    explanation: "Without XACK, Redis keeps delivered entries in the pending entries list."
  },
  {
    id: "stream-consumers-create-mkstream",
    trackId: "stream-consumers",
    mode: "pick",
    level: 5,
    concept: "MKSTREAM",
    prompt: "Which XGROUP CREATE option creates the stream key if it does not exist?",
    answer: "MKSTREAM",
    choices: ["MKSTREAM", "NOMKSTREAM", "CREATEKEY", "AUTOSTREAM"],
    hint: "It is the opposite setup concern from XADD NOMKSTREAM.",
    explanation: "XGROUP CREATE mystream workers $ MKSTREAM creates the group and the stream key when needed."
  },
  {
    id: "stream-consumers-readgroup-syntax",
    trackId: "stream-consumers",
    mode: "reverse",
    level: 5,
    concept: "XREADGROUP syntax",
    prompt: "Which read uses group workers and consumer c1 for new events?",
    answer: "XREADGROUP GROUP workers c1 STREAMS events >",
    choices: [
      "XREADGROUP GROUP workers c1 STREAMS events >",
      "XREADGROUP events GROUP workers c1 >",
      "XREAD GROUP workers c1 STREAMS events >",
      "XGROUP READ workers c1 events >"
    ],
    hint: "GROUP appears before STREAMS.",
    explanation: "XREADGROUP GROUP <group> <consumer> STREAMS <key> > reads new messages for that consumer group."
  },
  {
    id: "stream-consumers-pel",
    trackId: "stream-consumers",
    mode: "input",
    level: 6,
    concept: "PEL",
    prompt: "What is the short name for delivered but unacknowledged entries?",
    answer: "pel",
    acceptedAnswers: ["pending entries list", "pending entry list", "Pending Entries List"],
    choices: ["PEL", "AOF", "RDB", "TTL"],
    hint: "It expands to Pending Entries List.",
    explanation: "The PEL tracks entries delivered to consumers but not yet acknowledged."
  },
  {
    id: "stream-consumers-xpending",
    trackId: "stream-consumers",
    mode: "pick",
    level: 6,
    concept: "XPENDING",
    prompt: "Which command inspects a group's pending entries?",
    answer: "XPENDING",
    choices: ["XPENDING", "XWAITING", "XINFO STREAM", "XREAD PENDING"],
    hint: "The command name matches the state.",
    explanation: "XPENDING shows pending summary and extended details for a consumer group's PEL."
  },
  {
    id: "stream-consumers-history-id",
    trackId: "stream-consumers",
    mode: "reverse",
    level: 7,
    concept: "pending replay",
    prompt: "In XREADGROUP, which ID range style lets a consumer reread its pending history?",
    answer: "0",
    acceptedAnswers: ["0-0", "an old id"],
    choices: ["0", ">", "$", "*"],
    hint: "> means never-delivered entries; an older ID asks for pending history.",
    explanation: "With XREADGROUP, IDs other than > read pending entries already delivered to that consumer."
  },
  {
    id: "stream-consumers-noack",
    trackId: "stream-consumers",
    mode: "pick",
    level: 7,
    concept: "NOACK",
    prompt: "Which option skips adding delivered entries to the PEL?",
    answer: "NOACK",
    choices: ["NOACK", "AUTOACK", "SKIPPEL", "ACKEDONLY"],
    hint: "Only use it when message loss is acceptable.",
    explanation: "NOACK avoids pending tracking and is equivalent to acknowledging as entries are read."
  },
  {
    id: "stream-consumers-consumer-name",
    trackId: "stream-consumers",
    mode: "input",
    level: 7,
    concept: "consumer identity",
    prompt: "Inside a group, each worker process should use a unique what?",
    answer: "consumer name",
    acceptedAnswers: ["consumer", "unique consumer name", "consumer id"],
    choices: ["consumer name", "stream key", "field name", "trim threshold"],
    hint: "Redis tracks pending entries by this identity.",
    explanation: "Each client identifies itself with a consumer name so Redis can track ownership and pending work."
  },
  {
    id: "stream-consumers-debug-no-shared-name",
    trackId: "stream-consumers",
    mode: "debug",
    level: 7,
    concept: "consumer identity",
    prompt: "What is wrong with these two workers?",
    answer: "They share the same consumer name",
    acceptedAnswers: ["same consumer name", "not unique consumer", "shared consumer name"],
    choices: [
      "They share the same consumer name",
      "They read from different groups",
      "They cannot use BLOCK",
      "They must use XADD first"
    ],
    code: "worker-a: XREADGROUP GROUP workers api STREAMS events >\nworker-b: XREADGROUP GROUP workers api STREAMS events >",
    hint: "Ownership and idle time are tracked by consumer.",
    explanation: "Separate worker instances should use distinct consumer names so pending ownership is observable and recoverable."
  },
  {
    id: "stream-consumers-xinfo-groups",
    trackId: "stream-consumers",
    mode: "reverse",
    level: 8,
    concept: "group inspection",
    prompt: "Which command lists groups, lag, pending count, and last-delivered information?",
    answer: "XINFO GROUPS events",
    choices: ["XINFO GROUPS events", "XPENDING GROUPS events", "XREADGROUP INFO events", "INFO STREAM events"],
    hint: "It is part of the XINFO family.",
    explanation: "XINFO GROUPS reports operational state for every consumer group on the stream."
  },
  {
    id: "stream-consumers-debug-autoclaim-vs-xpending",
    trackId: "stream-consumers",
    mode: "debug",
    level: 8,
    concept: "stale pending",
    prompt: "What is the cleaner recovery command for scanning and claiming old pending work?",
    answer: "Use XAUTOCLAIM",
    acceptedAnswers: ["xautoclaim", "use xautoclaim"],
    choices: ["Use XAUTOCLAIM", "Use XDEL on every pending ID", "Use NOACK forever", "Create a new stream"],
    code: "XPENDING events workers - + 100\nXCLAIM events workers c2 60000 <many ids>",
    hint: "Redis has a SCAN-like command for this pattern.",
    explanation: "XAUTOCLAIM combines scanning pending entries and claiming stale ones into a simpler recovery loop."
  },
  {
    id: "stream-operations-claim",
    trackId: "stream-operations",
    mode: "pick",
    level: 7,
    concept: "recovery",
    prompt: "Which command can transfer stale pending entries to another consumer?",
    answer: "XAUTOCLAIM",
    choices: ["XAUTOCLAIM", "XADD", "XTRIM", "MONITOR"],
    hint: "It automates claiming old pending messages.",
    explanation: "XAUTOCLAIM helps a healthy consumer recover work left by a failed consumer."
  },
  {
    id: "stream-operations-lag",
    trackId: "stream-operations",
    mode: "input",
    level: 7,
    concept: "lag",
    prompt: "What do you call unprocessed stream work building up behind consumers?",
    answer: "lag",
    acceptedAnswers: ["consumer lag", "stream lag"],
    choices: ["lag", "ttl", "hash slot", "pubsub"],
    hint: "It measures how far consumers are behind.",
    explanation: "Consumer lag is a key reliability signal for Redis Streams systems."
  },
  {
    id: "stream-operations-info",
    trackId: "stream-operations",
    mode: "reverse",
    level: 8,
    concept: "inspection",
    prompt: "Which command inspects stream metadata and groups?",
    answer: "XINFO",
    choices: ["XINFO", "INFO STREAMS", "DESCRIBE STREAM", "XSTATS"],
    hint: "The command family starts with X.",
    explanation: "XINFO STREAM, XINFO GROUPS, and XINFO CONSUMERS expose operational state."
  },
  {
    id: "stream-operations-debug-backpressure",
    trackId: "stream-operations",
    mode: "debug",
    level: 8,
    concept: "backpressure",
    prompt: "What fixes workers overwhelmed by a fast producer?",
    answer: "Limit reads and scale consumers",
    acceptedAnswers: ["limit reads", "scale consumers", "use count and more consumers"],
    choices: [
      "Limit reads and scale consumers",
      "Disable acknowledgements",
      "Use KEYS every second",
      "Write every event twice"
    ],
    code: "XREADGROUP GROUP workers c1 BLOCK 0 STREAMS events >",
    hint: "Control batch size and add capacity.",
    explanation: "COUNT limits batch size, and more consumers can share work within the same group."
  },
  {
    id: "stream-operations-xautoclaim-cursor",
    trackId: "stream-operations",
    mode: "pick",
    level: 8,
    concept: "XAUTOCLAIM cursor",
    prompt: "What should a recovery loop keep from each XAUTOCLAIM response?",
    answer: "The next start ID cursor",
    choices: ["The next start ID cursor", "The Redis password", "The previous COUNT value only", "The stream field order"],
    hint: "XAUTOCLAIM uses SCAN-like iteration.",
    explanation: "XAUTOCLAIM returns the next start ID so the recovery worker can continue scanning the PEL."
  },
  {
    id: "stream-operations-poison-message",
    trackId: "stream-operations",
    mode: "reverse",
    level: 8,
    concept: "poison messages",
    prompt: "What pattern handles entries that fail processing repeatedly?",
    answer: "Move them to a dead-letter stream after a retry limit",
    choices: [
      "Move them to a dead-letter stream after a retry limit",
      "Leave them pending forever",
      "Trim the whole stream immediately",
      "Rename every consumer group"
    ],
    hint: "Reliable systems need an explicit failure lane.",
    explanation: "After bounded retries, a dead-letter stream preserves the event for inspection without blocking the main group."
  },
  {
    id: "stream-operations-pending-idle",
    trackId: "stream-operations",
    mode: "input",
    level: 9,
    concept: "idle pending",
    prompt: "Which XPENDING option filters pending entries by idle time?",
    answer: "idle",
    acceptedAnswers: ["IDLE", "idle min-idle-time"],
    choices: ["IDLE", "BLOCK", "COUNT", "STALE"],
    hint: "It is used before the range bounds in extended XPENDING.",
    explanation: "XPENDING key group IDLE ms start end count filters pending entries that have been idle long enough."
  },
  {
    id: "stream-operations-retention-vs-pel",
    trackId: "stream-operations",
    mode: "debug",
    level: 9,
    concept: "retention safety",
    prompt: "What risk does aggressive trimming create?",
    answer: "Consumers may still have pending references to deleted entries",
    acceptedAnswers: ["pending references", "pel references deleted entries", "trimmed pending entries"],
    choices: [
      "Consumers may still have pending references to deleted entries",
      "XADD will stop creating IDs",
      "XREADGROUP will turn into Pub/Sub",
      "All groups are automatically acknowledged"
    ],
    code: "XTRIM events MAXLEN = 100\nXPENDING events workers",
    hint: "Retention and group delivery state are related but separate.",
    explanation: "Trimming deletes stream entries while consumer groups can still track pending references depending on trim behavior and Redis version."
  },
  {
    id: "stream-operations-fanout",
    trackId: "stream-operations",
    mode: "pick",
    level: 9,
    concept: "fanout",
    prompt: "How should billing and analytics both receive every event independently?",
    answer: "Use separate consumer groups",
    choices: ["Use separate consumer groups", "Share one consumer name", "Use NOACK in one group", "Delete entries after billing reads"],
    hint: "Each group has its own delivery cursor.",
    explanation: "Multiple consumer groups can read the same stream independently, while consumers inside one group share work."
  },
  {
    id: "stream-operations-ordering",
    trackId: "stream-operations",
    mode: "reverse",
    level: 9,
    concept: "ordering",
    prompt: "What ordering guarantee should you assume inside one stream?",
    answer: "Entries are delivered in stream ID order",
    choices: [
      "Entries are delivered in stream ID order",
      "Entries are sorted by field name",
      "Consumers always finish in append order",
      "Multiple streams have one global order"
    ],
    hint: "IDs are the stream ordering key.",
    explanation: "Redis reports entries in ID order for a stream, but processing completion can still vary by consumer."
  },
  {
    id: "stream-operations-debug-non-idempotent",
    trackId: "stream-operations",
    mode: "debug",
    level: 10,
    concept: "at-least-once effects",
    prompt: "What is the reliability bug in this worker?",
    answer: "Processing is not idempotent before acknowledgement",
    acceptedAnswers: ["not idempotent", "duplicate side effects", "idempotent processing"],
    choices: [
      "Processing is not idempotent before acknowledgement",
      "XACK happens too early",
      "The stream ID is too long",
      "COUNT must be removed"
    ],
    code: "charge_credit_card(order_id)\n# process crashes before XACK",
    hint: "The message can be delivered again after a crash.",
    explanation: "Consumer groups are at-least-once. Side effects need idempotency because unacknowledged messages can be retried."
  },
  {
    id: "stream-operations-monitoring",
    trackId: "stream-operations",
    mode: "pick",
    level: 10,
    concept: "monitoring",
    prompt: "Which signals belong on a Redis Streams reliability dashboard?",
    answer: "Lag, pending count, idle time, retry count",
    choices: [
      "Lag, pending count, idle time, retry count",
      "Only total key count",
      "Only producer hostname",
      "Random sample of field names"
    ],
    hint: "Watch both backlog and stuck work.",
    explanation: "Lag shows backlog, pending count and idle time show stuck work, and retry counts expose failing messages."
  },
  {
    id: "stream-operations-debug-count-zero",
    trackId: "stream-operations",
    mode: "debug",
    level: 10,
    concept: "batch control",
    prompt: "What should this worker add before production rollout?",
    answer: "A COUNT limit and processing timeout strategy",
    acceptedAnswers: ["count limit", "add count", "processing timeout"],
    choices: [
      "A COUNT limit and processing timeout strategy",
      "A second stream key named COUNT",
      "NOACK on every read",
      "An XDEL before every process call"
    ],
    code: "XREADGROUP GROUP workers c1 BLOCK 0 STREAMS events >",
    hint: "A forever-blocking read can be fine, but the returned batch and work time still need bounds.",
    explanation: "COUNT bounds each batch, and timeouts or heartbeats help detect workers that stop making progress."
  },
  {
    id: "stream-operations-xack-before-side-effect",
    trackId: "stream-operations",
    mode: "debug",
    level: 10,
    concept: "ack timing",
    prompt: "Why is this worker unsafe?",
    answer: "It acknowledges before the side effect succeeds",
    acceptedAnswers: ["ack before processing", "xack too early", "ack before side effect"],
    choices: [
      "It acknowledges before the side effect succeeds",
      "It reads from too old an ID",
      "It uses field value pairs",
      "It does not trim exactly"
    ],
    code: "XACK events workers 1717000000000-0\nsend_email(user_id)",
    hint: "A crash after XACK loses the work.",
    explanation: "Acknowledge after durable successful processing, otherwise Redis will not redeliver failed work."
  }
];

const curriculumTopics: CurriculumTopic[] = [
  {
    id: "stream-vs-other-types",
    trackId: "stream-foundations",
    level: 1,
    concept: "streams vs lists and pubsub",
    answer: "durable append-only event log",
    hint: "Streams keep history and support replay, unlike pure Pub/Sub.",
    explanation: "Redis Streams combine append-only history, IDs, range reads, blocking reads, and consumer groups."
  },
  {
    id: "xadd-shape",
    trackId: "stream-foundations",
    level: 1,
    concept: "XADD shape",
    answer: "key id field value pairs",
    hint: "Every entry has an ID and one or more field/value pairs.",
    explanation: "XADD writes structured entries using a stream key, an ID such as *, then field value pairs.",
    code: "XADD events * type signup user_id 42"
  },
  {
    id: "id-semantics",
    trackId: "stream-foundations",
    level: 1,
    concept: "stream ID semantics",
    answer: "milliseconds and sequence",
    hint: "IDs are ordered and normally generated from server time plus a sequence.",
    explanation: "Redis stream IDs order entries and can be generated automatically or supplied explicitly."
  },
  {
    id: "field-values",
    trackId: "stream-foundations",
    level: 2,
    concept: "field/value entries",
    answer: "flat field value pairs",
    hint: "Streams do not require JSON, though JSON can be stored as a value.",
    explanation: "Explicit fields make inspection, routing, and partial decoding easier for consumers."
  },
  {
    id: "xrange",
    trackId: "stream-foundations",
    level: 2,
    concept: "XRANGE",
    answer: "inclusive ascending ID range",
    hint: "Use - and + for the full stream range.",
    explanation: "XRANGE reads stream history in ascending ID order between inclusive bounds."
  },
  {
    id: "xrevrange",
    trackId: "stream-foundations",
    level: 2,
    concept: "XREVRANGE",
    answer: "descending ID range",
    hint: "Use it to inspect newest events first.",
    explanation: "XREVRANGE is useful for debugging recent stream activity without reading from the beginning."
  },
  {
    id: "xread-direct",
    trackId: "stream-foundations",
    level: 2,
    concept: "direct XREAD",
    answer: "read without consumer group",
    hint: "Use XREAD for simple readers or ad hoc replay.",
    explanation: "XREAD can read one or more streams by last-seen ID and optionally block for new entries."
  },
  {
    id: "block-option",
    trackId: "stream-foundations",
    level: 3,
    concept: "BLOCK option",
    answer: "wait for new entries",
    hint: "Blocking reads avoid busy polling.",
    explanation: "BLOCK lets a client wait for stream entries up to a timeout."
  },
  {
    id: "count-option",
    trackId: "stream-foundations",
    level: 3,
    concept: "COUNT option",
    answer: "limit batch size",
    hint: "Bound how many entries a reader receives at once.",
    explanation: "COUNT keeps batches predictable for latency, memory, and retry behavior."
  },
  {
    id: "multi-stream-xread",
    trackId: "stream-foundations",
    level: 3,
    concept: "multi-stream reads",
    answer: "keys first then IDs",
    hint: "In XREAD STREAMS, list all stream keys before all offsets.",
    explanation: "The number of IDs after STREAMS must match the number of stream keys."
  },
  {
    id: "xlen",
    trackId: "stream-foundations",
    level: 3,
    concept: "XLEN",
    answer: "stream entry count",
    hint: "Length is a quick backlog or retention signal.",
    explanation: "XLEN reports how many entries are currently stored in a stream."
  },
  {
    id: "xdel",
    trackId: "stream-foundations",
    level: 3,
    concept: "XDEL",
    answer: "delete entries by ID",
    hint: "Deleting data is separate from acknowledging group delivery.",
    explanation: "XDEL removes stored entries but does not by itself process consumer-group acknowledgements."
  },
  {
    id: "stream-memory",
    trackId: "stream-foundations",
    level: 4,
    concept: "stream memory",
    answer: "retention must be planned",
    hint: "An append-only structure grows unless you trim it.",
    explanation: "Production streams need retention policy, monitoring, and data lifecycle decisions."
  },
  {
    id: "read-offsets",
    trackId: "stream-foundations",
    level: 4,
    concept: "read offsets",
    answer: "last seen ID controls replay",
    hint: "0-0, $, and explicit IDs mean different read positions.",
    explanation: "Offset choice decides whether a reader replays history, starts at the tail, or continues from a checkpoint."
  },
  {
    id: "exclusive-xread",
    trackId: "stream-foundations",
    level: 4,
    concept: "XREAD exclusivity",
    answer: "returns IDs greater than the offset",
    hint: "The supplied ID is the last seen entry, not the first returned entry.",
    explanation: "Direct XREAD returns entries after the provided ID, which matters for replay checkpoints."
  },
  {
    id: "event-contract",
    trackId: "stream-producers",
    level: 4,
    concept: "event contract",
    answer: "stable fields and schema version",
    hint: "Consumers need to parse events safely over time.",
    explanation: "A stream event contract should name required fields, optional fields, versioning, and compatibility rules."
  },
  {
    id: "idempotent-producer",
    trackId: "stream-producers",
    level: 4,
    concept: "idempotent producer",
    answer: "deduplicate retries with a business key",
    hint: "A network retry may append the same business event twice.",
    explanation: "Producer idempotency prevents duplicate downstream effects when appends are retried."
  },
  {
    id: "pipeline-xadd",
    trackId: "stream-producers",
    level: 4,
    concept: "pipelined XADD",
    answer: "batch network round trips",
    hint: "Throughput often improves by reducing request/response waits.",
    explanation: "Pipelining multiple XADD commands can increase producer throughput while preserving command order."
  },
  {
    id: "maxlen",
    trackId: "stream-producers",
    level: 4,
    concept: "MAXLEN retention",
    answer: "trim by approximate length",
    hint: "Use MAXLEN ~ when exact trimming is unnecessary.",
    explanation: "MAXLEN controls stream size, and approximate trimming improves performance for high-volume streams."
  },
  {
    id: "minid",
    trackId: "stream-producers",
    level: 5,
    concept: "MINID retention",
    answer: "trim entries below an ID",
    hint: "Retention can be age-like when IDs track time.",
    explanation: "MINID removes entries older than an ID threshold, which can align with time-window retention."
  },
  {
    id: "xtrim",
    trackId: "stream-producers",
    level: 5,
    concept: "XTRIM",
    answer: "standalone stream trimming",
    hint: "Trim existing streams outside the append path.",
    explanation: "XTRIM applies MAXLEN or MINID trimming to a stream that already exists."
  },
  {
    id: "nomkstream",
    trackId: "stream-producers",
    level: 5,
    concept: "NOMKSTREAM",
    answer: "fail if stream is missing",
    hint: "Use it when stream creation must be controlled elsewhere.",
    explanation: "NOMKSTREAM stops XADD from implicitly creating a missing stream key."
  },
  {
    id: "payload-design",
    trackId: "stream-producers",
    level: 5,
    concept: "payload design",
    answer: "explicit fields over opaque blobs when possible",
    hint: "Field-level visibility helps debugging and routing.",
    explanation: "JSON payloads are valid, but explicit fields improve stream inspection and simple consumers."
  },
  {
    id: "partitioning",
    trackId: "stream-producers",
    level: 5,
    concept: "producer partitioning",
    answer: "partition by tenant or aggregate key",
    hint: "A single stream has one ordered lane.",
    explanation: "Partitioning hot event flows across stream keys increases parallelism while keeping order within a partition."
  },
  {
    id: "clock-ids",
    trackId: "stream-producers",
    level: 6,
    concept: "explicit IDs and clocks",
    answer: "prefer generated IDs unless ordering requires control",
    hint: "Bad explicit IDs can be rejected for not increasing.",
    explanation: "Auto-generated IDs avoid many clock and monotonicity problems."
  },
  {
    id: "producer-errors",
    trackId: "stream-producers",
    level: 6,
    concept: "producer error handling",
    answer: "bounded retries and durable outbox",
    hint: "Do not lose business events when Redis is briefly unavailable.",
    explanation: "A durable outbox and bounded retry policy protect event publication from transient failures."
  },
  {
    id: "outbox-pattern",
    trackId: "stream-producers",
    level: 6,
    concept: "outbox pattern",
    answer: "commit state change and event record together",
    hint: "Avoid publishing an event for a database change that did not commit.",
    explanation: "The outbox pattern records events transactionally with application state before a relay publishes them."
  },
  {
    id: "producer-observability",
    trackId: "stream-producers",
    level: 6,
    concept: "producer observability",
    answer: "append latency error rate and stream length",
    hint: "Watch both write success and backlog growth.",
    explanation: "Producer metrics show whether events are being written reliably and at expected volume."
  },
  {
    id: "schema-evolution",
    trackId: "stream-producers",
    level: 6,
    concept: "schema evolution",
    answer: "backward-compatible fields",
    hint: "Old consumers may read new events.",
    explanation: "Additive changes and versioned fields let producers evolve without breaking deployed consumers."
  },
  {
    id: "write-amplification",
    trackId: "stream-producers",
    level: 6,
    concept: "write amplification",
    answer: "avoid duplicate derived events",
    hint: "Each event adds memory, replication, and consumer work.",
    explanation: "Producer design should avoid unnecessary event copies and keep payloads focused."
  },
  {
    id: "group-create",
    trackId: "stream-consumers",
    level: 5,
    concept: "consumer group creation",
    answer: "XGROUP CREATE key group id",
    hint: "Create delivery state before workers consume.",
    explanation: "A consumer group tracks last-delivered ID and pending entries per group."
  },
  {
    id: "mkstream",
    trackId: "stream-consumers",
    level: 5,
    concept: "MKSTREAM",
    answer: "create empty stream during group setup",
    hint: "Useful for provisioning groups before producers write.",
    explanation: "MKSTREAM lets XGROUP CREATE initialize a group even when the stream key is missing."
  },
  {
    id: "readgroup-new",
    trackId: "stream-consumers",
    level: 5,
    concept: "new group messages",
    answer: "> reads never-delivered entries",
    hint: "Use > for normal consumer-group work sharing.",
    explanation: "XREADGROUP with > delivers entries that have not yet been assigned inside the group."
  },
  {
    id: "consumer-names",
    trackId: "stream-consumers",
    level: 5,
    concept: "consumer names",
    answer: "unique worker identity",
    hint: "Redis tracks pending ownership by consumer name.",
    explanation: "Distinct consumer names make monitoring, recovery, and pending ownership accurate."
  },
  {
    id: "pel",
    trackId: "stream-consumers",
    level: 6,
    concept: "pending entries list",
    answer: "delivered but unacknowledged work",
    hint: "Pending entries are not done until acknowledged.",
    explanation: "The PEL is the core state that enables retry and recovery in consumer groups."
  },
  {
    id: "xack",
    trackId: "stream-consumers",
    level: 6,
    concept: "acknowledgement",
    answer: "XACK after durable success",
    hint: "Acknowledge only after the side effect is safe.",
    explanation: "XACK removes an entry from the PEL so it is not redelivered for recovery."
  },
  {
    id: "xpending",
    trackId: "stream-consumers",
    level: 6,
    concept: "XPENDING",
    answer: "inspect pending summary and details",
    hint: "Use it to find stuck consumers and stale messages.",
    explanation: "XPENDING reports pending counts, idle time, delivery counts, and ownership."
  },
  {
    id: "pending-replay",
    trackId: "stream-consumers",
    level: 6,
    concept: "pending replay",
    answer: "read old IDs instead of >",
    hint: "A consumer can re-read its own pending entries.",
    explanation: "XREADGROUP with an ID such as 0 reads pending history rather than new work."
  },
  {
    id: "noack",
    trackId: "stream-consumers",
    level: 7,
    concept: "NOACK",
    answer: "skip pending tracking",
    hint: "Only use it when losing messages is acceptable.",
    explanation: "NOACK trades reliability for lower bookkeeping overhead by not adding entries to the PEL."
  },
  {
    id: "xclaim",
    trackId: "stream-consumers",
    level: 7,
    concept: "XCLAIM",
    answer: "manual stale message transfer",
    hint: "Claim specific pending IDs for another consumer.",
    explanation: "XCLAIM transfers ownership after a minimum idle time so a healthy worker can retry work."
  },
  {
    id: "xautoclaim",
    trackId: "stream-consumers",
    level: 7,
    concept: "XAUTOCLAIM",
    answer: "scan and claim stale pending entries",
    hint: "Use cursor-style recovery for many stale entries.",
    explanation: "XAUTOCLAIM simplifies recovery by scanning the PEL and claiming eligible entries."
  },
  {
    id: "xinfo-consumers",
    trackId: "stream-consumers",
    level: 7,
    concept: "XINFO CONSUMERS",
    answer: "inspect consumer idle and pending counts",
    hint: "Use it to identify stuck or dead workers.",
    explanation: "XINFO CONSUMERS exposes per-consumer operational state inside a group."
  },
  {
    id: "group-fanout",
    trackId: "stream-consumers",
    level: 8,
    concept: "group fanout",
    answer: "one consumer group per independent subscriber",
    hint: "Consumers in one group share work; groups each get their own cursor.",
    explanation: "Separate groups let billing, analytics, and notifications each process every event independently."
  },
  {
    id: "dead-letter",
    trackId: "stream-consumers",
    level: 8,
    concept: "dead-letter stream",
    answer: "move poison messages after retry limit",
    hint: "Do not let one bad event block a shard forever.",
    explanation: "A dead-letter stream preserves failed events for investigation while freeing the main flow."
  },
  {
    id: "group-setid",
    trackId: "stream-consumers",
    level: 8,
    concept: "XGROUP SETID",
    answer: "move group delivery cursor",
    hint: "Use carefully for replay or skip-ahead operations.",
    explanation: "XGROUP SETID adjusts a group's last-delivered ID without rewriting stream entries."
  },
  {
    id: "at-least-once",
    trackId: "stream-operations",
    level: 8,
    concept: "at-least-once processing",
    answer: "messages can be delivered again",
    hint: "Crashes before acknowledgement create retries.",
    explanation: "Consumer groups provide at-least-once delivery, so handlers must tolerate duplicates."
  },
  {
    id: "idempotent-consumer",
    trackId: "stream-operations",
    level: 8,
    concept: "idempotent consumer",
    answer: "deduplicate side effects by event ID or business key",
    hint: "A retry should not charge, email, or mutate twice.",
    explanation: "Idempotency is required for safe retries under at-least-once delivery."
  },
  {
    id: "backpressure",
    trackId: "stream-operations",
    level: 8,
    concept: "backpressure",
    answer: "bound batch size and scale consumers",
    hint: "Consumers need a controlled way to fall behind and recover.",
    explanation: "Backpressure combines COUNT, worker capacity, rate limits, and lag monitoring."
  },
  {
    id: "lag-monitoring",
    trackId: "stream-operations",
    level: 8,
    concept: "lag monitoring",
    answer: "watch stream length group lag and pending",
    hint: "Lag tells you how far processing is behind production.",
    explanation: "Lag and pending metrics distinguish ordinary backlog from stuck work."
  },
  {
    id: "xinfo-stream",
    trackId: "stream-operations",
    level: 9,
    concept: "XINFO STREAM",
    answer: "inspect stream metadata",
    hint: "Use it for length, first/last entry, and group-related state.",
    explanation: "XINFO STREAM exposes operational metadata without scanning all entries."
  },
  {
    id: "retention-vs-recovery",
    trackId: "stream-operations",
    level: 9,
    concept: "retention vs recovery",
    answer: "do not trim before consumers can recover",
    hint: "Deleting entries can conflict with pending recovery expectations.",
    explanation: "Retention policy must consider consumer lag, PEL state, audit needs, and replay windows."
  },
  {
    id: "ordering",
    trackId: "stream-operations",
    level: 9,
    concept: "ordering model",
    answer: "ordered by ID per stream",
    hint: "Completion order can differ from delivery order when workers run concurrently.",
    explanation: "Redis Streams preserve ID order within a stream, but parallel consumers can finish work out of order."
  },
  {
    id: "sharding",
    trackId: "stream-operations",
    level: 9,
    concept: "stream sharding",
    answer: "multiple stream keys for parallel lanes",
    hint: "Use partition keys when one stream becomes too hot.",
    explanation: "Sharding streams increases throughput while preserving order inside each shard."
  },
  {
    id: "redis-cluster",
    trackId: "stream-operations",
    level: 9,
    concept: "Redis Cluster streams",
    answer: "hash tags for related keys",
    hint: "Multi-key stream operations need keys in the same hash slot.",
    explanation: "Cluster deployments require key-slot planning, especially when reading multiple streams."
  },
  {
    id: "persistence",
    trackId: "stream-operations",
    level: 9,
    concept: "persistence",
    answer: "AOF or RDB durability choices",
    hint: "Streams are only as durable as the Redis persistence and replication setup.",
    explanation: "AOF, RDB, replication, and managed service policies define data loss windows."
  },
  {
    id: "failover",
    trackId: "stream-operations",
    level: 10,
    concept: "failover recovery",
    answer: "reconnect resume claim and acknowledge",
    hint: "Workers need startup logic after Redis or process failure.",
    explanation: "Reliable consumers recover by reconnecting, replaying or claiming pending work, then acknowledging only after success."
  },
  {
    id: "memory-policy",
    trackId: "stream-operations",
    level: 10,
    concept: "memory policy",
    answer: "avoid eviction of critical stream data",
    hint: "Eviction can silently destroy reliability assumptions.",
    explanation: "Critical streams need memory sizing, retention, and eviction policies that protect required history."
  },
  {
    id: "alerting",
    trackId: "stream-operations",
    level: 10,
    concept: "alerting",
    answer: "alerts on lag pending idle and errors",
    hint: "Alert on symptoms that threaten recovery objectives.",
    explanation: "Operational alerts should cover growing lag, stale pending entries, consumer failures, and append errors."
  },
  {
    id: "disaster-recovery",
    trackId: "stream-operations",
    level: 10,
    concept: "disaster recovery",
    answer: "backup replay and rebuild plans",
    hint: "Know how to restore Redis state or rebuild from source systems.",
    explanation: "A full Streams design includes recovery runbooks, source-of-truth decisions, and replay procedures."
  },
  {
    id: "capacity-planning",
    trackId: "stream-operations",
    level: 10,
    concept: "capacity planning",
    answer: "model write rate retention and consumer throughput",
    hint: "Reliability depends on capacity matching the event flow.",
    explanation: "Capacity planning estimates memory, network, CPU, retention window, and consumer processing rate."
  }
];

export const drills: LearningDrill[] = [...baseDrills, ...buildCurriculumDrills("redis-full", curriculumTopics)];
