import { drills, tracks } from "@/data/redisStreamsCurriculum";
import type { LearningDomain } from "@/data/dojoTypes";

export const redisStreamsDomain = {
  id: "redis-streams",
  metadata: {
    title: "StreamsDojo - Learn Redis Streams from Beginner to Expertise",
    description: "A KanaDojo-inspired Redis Streams learning app from XADD basics to reliable stream systems.",
    iconPath: "/redis-streams-dojo-mark.svg"
  },
  brand: {
    primaryName: "StreamsDojo",
    secondaryName: "Redis",
    displayName: "StreamsDojo"
  },
  subject: {
    name: "Redis Streams",
    adjective: "Redis Streams"
  },
  storageKey: "redis-streams-dojo-progress-v1",
  tokenPool: [
    "XADD",
    "XREAD",
    "XRANGE",
    "XGROUP",
    "XACK",
    "XPENDING",
    "XCLAIM",
    "XAUTOCLAIM",
    "XTRIM",
    "XINFO",
    "MAXLEN",
    "STREAMS",
    "GROUP",
    "BLOCK",
    "COUNT",
    "PENDING"
  ],
  trackMarks: {
    "stream-foundations": "x",
    "stream-producers": "add",
    "stream-consumers": "grp",
    "stream-operations": "ops"
  },
  home: {
    ariaLabel: "StreamsDojo home",
    floatingActionLabel: "Start Redis Streams training",
    welcomeTitle: "Welcome to StreamsDojo!",
    welcomeBody:
      "StreamsDojo teaches Redis Streams through small drills for event producers, consumer groups, and reliable processing.",
    startTemplate: "To begin, pick a dojo below and start training {trackLabel} now!",
    cards: [
      { id: "stream-foundations", mark: "x", label: "Basics", summary: "entries, IDs, reads" },
      { id: "stream-producers", mark: "add", label: "Producers", summary: "XADD, trim, shape" },
      { id: "stream-consumers", mark: "grp", label: "Groups", summary: "read, ack, pending" },
      { id: "stream-operations", mark: "ops", label: "Reliability", summary: "claim, lag, replay" }
    ]
  },
  training: {
    sidebarLabel: "StreamsDojo navigation",
    modeLabel: "Training mode",
    welcomeTitleTemplate: "Welcome to the {trackTitle} dojo!",
    welcomeBodyTemplate: "{trackFocus}. Train with short {subjectName} drills from beginner commands to reliable streams.",
    progressLabel: "Progress summary",
    actions: {
      home: "Home",
      hint: "Hint",
      check: "Check answer",
      next: "Next drill"
    }
  },
  footer: {
    links: [
      { href: "#terms", label: "terms" },
      { href: "#privacy", label: "privacy" },
      { href: "#credits", label: "credits" },
      { href: "#about", label: "about" }
    ],
    communityAria: "Community",
    sourceAria: "Source",
    meta: "made by the community ~ stream bloom ~ zen maru gothic ~ v0.1.18 (alpha)"
  },
  achievements: {
    firstClear: "first-stream-entry",
    eightClears: "group-runner",
    allTracksStarted: "event-system-path",
    streakFive: "stream-flow",
    highAccuracy: "reliable-consumer",
    fullMastery: "streams-mastery"
  },
  tracks,
  drills
} satisfies LearningDomain;
