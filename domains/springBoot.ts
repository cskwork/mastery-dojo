import { drills, tracks } from "@/data/springBootCurriculum";
import { createLearningDomain } from "@/domains/domainFactory";

export const springBootDomain = createLearningDomain({
  id: "spring-boot",
  title: "SpringBootDojo - Learn Spring Boot from Beginner to Expertise",
  description: "KanaDojo-inspired Spring Boot drills from project setup to production operations.",
  primaryName: "SpringBootDojo",
  secondaryName: "Spring",
  subjectName: "Spring Boot",
  storageKey: "spring-boot-dojo-progress-v1",
  tokenPool: ["@Bean", "@GetMapping", "Actuator", "JPA", "MVC", "AOT", "Boot", "Test", "HTTP", "OAuth2", "Kafka", "Profile"],
  trackMarks: {
    "spring-foundations": "boot",
    "spring-web-data": "web",
    "spring-production": "ops",
    "spring-expertise": "pro"
  },
  cards: [
    { id: "spring-foundations", mark: "boot", label: "Basics", summary: "setup, beans, config" },
    { id: "spring-web-data", mark: "web", label: "Web Data", summary: "REST, JPA, transactions" },
    { id: "spring-production", mark: "ops", label: "Production", summary: "actuator, tests, deploy" },
    { id: "spring-expertise", mark: "pro", label: "Expert", summary: "reactive, security, tuning" }
  ],
  tracks,
  drills,
  footerMeta: "made by the community ~ spring bloom ~ official docs aligned ~ v0.1.18 (alpha)"
});
