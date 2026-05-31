import { drills, tracks } from "@/data/pythonCurriculum";
import type { LearningDomain } from "@/data/dojoTypes";

export const pythonDomain = {
  id: "python",
  metadata: {
    title: "PythonDojo - Learn Python from Beginner to Mastery",
    description: "A KanaDojo-inspired Python learning app from beginner syntax to mastery drills.",
    iconPath: "/python-dojo-mark.svg"
  },
  brand: {
    primaryName: "PythonDojo",
    secondaryName: "파이썬道場",
    displayName: "PythonDojo"
  },
  subject: {
    name: "Python",
    adjective: "Python"
  },
  storageKey: "python-dojo-progress-v1",
  tokenPool: [
    "def",
    "for",
    "if",
    "in",
    "str",
    "int",
    "list",
    "dict",
    "set",
    "try",
    "zip",
    "len",
    "map",
    "sum",
    "cls",
    "self",
    "async",
    "await",
    "yield",
    "None"
  ],
  trackMarks: {
    foundations: "py",
    data: "{}",
    design: "<>",
    mastery: "fn"
  },
  home: {
    ariaLabel: "PythonDojo home",
    floatingActionLabel: "Open command menu",
    welcomeTitle: "Welcome to PythonDojo!",
    welcomeBody:
      "PythonDojo is an aesthetic, community-made platform for learning Python inspired by KanaDojo and Monkeytype.",
    startTemplate: "To begin, pick a dojo below and start training {trackLabel} now!",
    cards: [
      { id: "foundations", mark: "py", label: "Basics", summary: "syntax, values, branches" },
      { id: "data", mark: "{ }", label: "Data", summary: "lists, dicts, files" },
      { id: "design", mark: "<>", label: "Design", summary: "functions, modules, tests" },
      { id: "mastery", mark: "fn", label: "Mastery", summary: "classes, async, speed" }
    ]
  },
  training: {
    sidebarLabel: "PythonDojo navigation",
    modeLabel: "Training mode",
    welcomeTitleTemplate: "Welcome to the {trackTitle} dojo!",
    welcomeBodyTemplate:
      "{trackFocus}. Train with small {subjectName} drills that move from beginner syntax toward mastery.",
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
      { href: "#security", label: "security" },
      { href: "#patch-notes", label: "patch notes" },
      { href: "#credits", label: "credits" },
      { href: "#about", label: "about" }
    ],
    communityAria: "Community",
    sourceAria: "Source",
    meta: "made by the community ~ sapphire bloom ~ zen maru gothic ~ v0.1.18 (alpha)"
  },
  achievements: {
    firstClear: "first-clear",
    eightClears: "syntax-runner",
    allTracksStarted: "full-stack-path",
    streakFive: "flow-state",
    highAccuracy: "sharp-eye",
    fullMastery: "python-mastery"
  },
  tracks,
  drills
} satisfies LearningDomain;
