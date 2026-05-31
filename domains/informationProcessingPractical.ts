import { drills, tracks } from "@/data/informationProcessingPracticalCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const informationProcessingPracticalDomain = createLearningDomain({
  id: "information-processing-practical",
  title: "PracticalDojo - Learn Information Processing Practical from Beginner to Expertise",
  description: "KanaDojo-inspired drills for the Korean Information Processing Engineer practical exam.",
  primaryName: "PracticalDojo",
  secondaryName: "실기道場",
  displayName: "InfoPractical",
  subjectName: "Information Processing Practical",
  subjectAdjective: "practical exam",
  storageKey: "information-processing-practical-dojo-progress-v1",
  tokenPool: ["SQL", "UML", "C", "Java", "Python", "Linux", "TCP", "HTTP", "Auth", "Test", "Build", "Deploy"],
  trackMarks: {
    "ip-foundations": "base",
    "ip-implementation": "impl",
    "ip-operations": "ops",
    "ip-expertise": "exam"
  },
  cards: [
    { id: "ip-foundations", mark: "base", label: "Basics", summary: "scope, design, SQL" },
    { id: "ip-implementation", mark: "impl", label: "Build", summary: "code, SQL, deploy" },
    { id: "ip-operations", mark: "ops", label: "Ops", summary: "security, Linux, network" },
    { id: "ip-expertise", mark: "exam", label: "Exam", summary: "outputs, traps, mocks" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ practical exam bloom ~ Q-Net scope aligned ~ v0.1.18 (alpha)"
});
