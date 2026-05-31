import { drills, tracks } from "@/data/javaCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const javaDomain = createLearningDomain({
  id: "java",
  title: "JavaDojo - Learn Java from Beginner to Expertise",
  description: "KanaDojo-inspired Java drills from JDK basics to runtime expertise.",
  primaryName: "JavaDojo",
  secondaryName: "Java",
  subjectName: "Java",
  storageKey: "java-dojo-progress-v1",
  tokenPool: ["class", "record", "var", "List", "Map", "JVM", "JFR", "Thread", "module", "sealed", "try", "Stream"],
  trackMarks: {
    "java-foundations": "jav",
    "java-oop-collections": "obj",
    "java-runtime": "jvm",
    "java-expertise": "pro"
  },
  cards: [
    { id: "java-foundations", mark: "jav", label: "Basics", summary: "JDK, syntax, exceptions" },
    { id: "java-oop-collections", mark: "obj", label: "Objects", summary: "OOP, generics, collections" },
    { id: "java-runtime", mark: "jvm", label: "Runtime", summary: "modules, threads, JFR" },
    { id: "java-expertise", mark: "pro", label: "Expert", summary: "security, tuning, packaging" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ java bloom ~ official docs aligned ~ v0.1.18 (alpha)"
});
