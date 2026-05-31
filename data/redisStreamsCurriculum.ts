import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";

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
    level: "Advanced",
    focus: "recovery, backpressure, monitoring, replay",
    accent: "#5b8bd8"
  }
];

export const drills: LearningDrill[] = [
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
    explanation: "0-0 replays from the beginning. $ is for only future entries."
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
    explanation: "XACK marks entries as handled for the consumer group."
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
  }
];
