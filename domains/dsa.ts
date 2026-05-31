import { drills, tracks } from "@/data/dsaCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const dsaDomain = createLearningDomain({
  id: "dsa",
  title: "DSADojo - Learn Data Structures and Algorithms from Beginner to Expertise",
  description: "KanaDojo-inspired data structures and algorithms drills from complexity to advanced patterns.",
  primaryName: "DSADojo",
  secondaryName: "Algo道場",
  subjectName: "Data Structures and Algorithms",
  subjectAdjective: "DSA",
  storageKey: "dsa-dojo-progress-v1",
  tokenPool: ["O(n)", "array", "hash", "BFS", "DFS", "heap", "DP", "greedy", "trie", "flow", "KMP", "tree"],
  trackMarks: {
    "dsa-foundations": "big",
    "dsa-structures": "ds",
    "dsa-algorithms": "alg",
    "dsa-expertise": "pro"
  },
  cards: [
    { id: "dsa-foundations", mark: "big", label: "Basics", summary: "Big O, arrays, search" },
    { id: "dsa-structures", mark: "ds", label: "Structures", summary: "trees, heaps, graphs" },
    { id: "dsa-algorithms", mark: "alg", label: "Patterns", summary: "greedy, DP, strings" },
    { id: "dsa-expertise", mark: "pro", label: "Expert", summary: "flow, hardness, testing" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ algorithm bloom ~ canonical refs aligned ~ v0.1.18 (alpha)"
});
