import { drills, tracks } from "@/data/kafkaCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const kafkaDomain = createLearningDomain({
  id: "kafka",
  title: "KafkaDojo - Learn Apache Kafka from Beginner to Expertise",
  description: "KanaDojo-inspired Apache Kafka drills from topics to production stream platforms.",
  primaryName: "KafkaDojo",
  secondaryName: "Kafka道場",
  subjectName: "Apache Kafka",
  subjectAdjective: "Kafka",
  storageKey: "kafka-dojo-progress-v1",
  tokenPool: ["topic", "partition", "offset", "KRaft", "Connect", "Streams", "acks", "ACL", "lag", "EOS", "DLQ", "JMX"],
  trackMarks: {
    "kafka-foundations": "log",
    "kafka-streaming": "str",
    "kafka-operations": "ops",
    "kafka-expertise": "eos"
  },
  cards: [
    { id: "kafka-foundations", mark: "log", label: "Basics", summary: "topics, offsets, groups" },
    { id: "kafka-streaming", mark: "str", label: "Streams", summary: "producer, Connect, DSL" },
    { id: "kafka-operations", mark: "ops", label: "Ops", summary: "KRaft, ACLs, lag" },
    { id: "kafka-expertise", mark: "eos", label: "Expert", summary: "EOS, state, incidents" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ kafka bloom ~ Apache Kafka docs aligned ~ v0.1.18 (alpha)"
});
