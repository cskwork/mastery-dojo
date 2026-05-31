import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "ip-foundations",
    title: "Exam Foundations",
    level: "Beginner",
    focus: "official scope, design, SQL, programming basics",
    accent: "#5b8bd8"
  },
  {
    id: "ip-implementation",
    title: "Implementation",
    level: "Builder",
    focus: "algorithms, SQL, integration, build and deploy",
    accent: "#41a67a"
  },
  {
    id: "ip-operations",
    title: "Operations",
    level: "Practitioner",
    focus: "security, Linux, networking, monitoring, release work",
    accent: "#d0a23c"
  },
  {
    id: "ip-expertise",
    title: "Practical Expertise",
    level: "Expertise",
    focus: "short answers, code output, scenario judgment, final mocks",
    accent: "#c85d75"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("ip-foundations", [
    ["exam structure", "written practical answers", "The practical exam rewards exact short-answer and code-output accuracy."],
    ["information processing practical", "software implementation competence", "The official scope centers on implementing and operating software systems."],
    ["answer format", "write precise terms or results", "Small spelling or output mistakes can cost points."],
    ["software lifecycle", "requirements design implementation test maintenance", "Lifecycle phases organize how software work moves from need to operation."],
    ["requirements analysis", "identify functional and nonfunctional needs", "Requirements decide what the system must do and how well it must work."],
    ["UML diagrams", "model structure and behavior", "UML diagrams express classes, sequences, states, and use cases."],
    ["UI design", "user interaction structure", "UI questions focus on screens, flows, accessibility, and usability terms."],
    ["application design", "component and module structure", "Application design assigns responsibilities before coding."],
    ["interface design", "contract between systems", "Interfaces define data format, protocol, and error behavior."],
    ["database design", "schema and integrity design", "Database design maps data rules to tables, keys, and constraints."],
    ["SQL writing", "produce correct result sets", "SQL items test syntax, result tracing, and transaction concepts."],
    ["programming basics", "trace C Java Python code", "The exam often asks for output after loops, arrays, and functions run."],
    ["C syntax", "pointers arrays operators", "C questions often hinge on indexing, address use, and operator precedence."],
    ["Java syntax", "classes references collections", "Java questions test object behavior, strings, inheritance, and exceptions."],
    ["Python syntax", "dynamic structures and slicing", "Python items often use lists, dictionaries, loops, and functions."],
    ["operating system basics", "process memory file scheduling", "OS terms explain how programs run and share resources."],
    ["network basics", "protocols addresses routing", "Networking questions test TCP/IP, HTTP, DNS, and security protocols."],
    ["security basics", "protect confidentiality integrity availability", "Security appears across design, code, operations, and legal terms."]
  ]),
  ...defineTopics("ip-implementation", [
    ["algorithm tracing", "follow state step by step", "Trace variable changes rather than guessing final output."],
    ["flowcharts", "read control flow symbols", "Flowcharts show branching, looping, input, output, and process steps."],
    ["pseudocode", "language-neutral algorithm", "Pseudocode questions focus on logic independent of exact language syntax."],
    ["data structures", "choose storage by operation", "Arrays, lists, stacks, queues, trees, and graphs fit different operations."],
    ["sorting", "order records by key", "Sorting questions ask both output order and algorithm properties."],
    ["searching", "find target efficiently", "Search method choice depends on ordering and data structure."],
    ["SQL DDL", "define database objects", "CREATE, ALTER, and DROP change schema objects."],
    ["SQL DML", "change table data", "INSERT, UPDATE, DELETE, and MERGE modify rows."],
    ["SQL DCL", "control privileges", "GRANT and REVOKE manage authorization."],
    ["SQL TCL", "control transactions", "COMMIT, ROLLBACK, and SAVEPOINT shape transaction outcome."],
    ["joins and subqueries", "combine and nest results", "Trace row matching and nested query results carefully."],
    ["transaction anomalies", "dirty nonrepeatable phantom", "Isolation levels exist to control inconsistent reads."],
    ["normalization", "remove dependency problems", "Normalization reduces update, insert, and delete anomalies."],
    ["API implementation", "build contract-compliant endpoints", "APIs must match input, output, status, and error contracts."],
    ["integration testing", "verify component interaction", "Integration tests catch wiring and boundary failures."],
    ["unit testing", "test small behavior", "Unit tests isolate a function or component behavior."],
    ["configuration management", "control versions and changes", "Configuration management keeps artifacts reproducible."],
    ["build and deploy", "produce and release artifacts", "Build and deployment steps move code into runnable environments."]
  ]),
  ...defineTopics("ip-operations", [
    ["secure coding", "avoid common vulnerabilities", "Secure coding prevents injection, overflow, exposure, and auth flaws."],
    ["authentication", "verify identity", "Authentication checks who the user or system is."],
    ["authorization", "check allowed action", "Authorization decides what an authenticated actor can do."],
    ["encryption", "protect readable data", "Encryption turns plaintext into ciphertext using keys."],
    ["hashing", "one-way digest", "Hashes verify integrity or store password digests with salts."],
    ["network protocols", "standard communication rules", "Protocols define message format, sequencing, and behavior."],
    ["Linux commands", "operate files processes services", "Linux command fluency supports deployment and troubleshooting."],
    ["shell basics", "compose commands with pipes", "Shell pipelines transform data through small tools."],
    ["web protocols", "HTTP HTTPS DNS cookies", "Web systems depend on request, response, name, and session behavior."],
    ["middleware", "connect application components", "Middleware provides messaging, transaction, API, or integration support."],
    ["cloud and virtualization", "abstract compute resources", "Cloud and virtualization concepts affect deployment and scaling."],
    ["DevOps pipeline", "automate build test release", "Pipelines make release work repeatable and auditable."],
    ["monitoring and logging", "observe runtime behavior", "Operations need logs and metrics to detect failures."],
    ["backup and recovery", "restore after data loss", "Recovery plans must define RPO, RTO, and restore validation."],
    ["performance tuning", "remove measured bottlenecks", "Tune after measuring CPU, memory, I/O, or query limits."],
    ["availability", "keep service usable", "Availability uses redundancy, failover, and recovery practices."],
    ["defect lifecycle", "track bug from report to closure", "Defect management records severity, cause, fix, and verification."],
    ["release management", "control production changes", "Release management reduces risk during deployment."]
  ]),
  ...defineTopics("ip-expertise", [
    ["short-answer precision", "use official term exactly", "Exact wording matters for terminology answers."],
    ["keyword memorization", "recall definitions under time", "Definitions should be practiced as prompt and answer pairs."],
    ["code-output traps", "trace order and mutation", "Output questions often hide mutation, scope, or precedence traps."],
    ["SQL result traps", "trace NULL and join behavior", "SQL outputs require exact row and column reasoning."],
    ["diagram interpretation", "map symbols to meaning", "Diagram questions reward reading notation, not drawing style."],
    ["scenario analysis", "choose the most fitting practice", "Scenario items ask which concept solves a described problem."],
    ["terminology contrast", "separate similar concepts", "Contrasting pairs prevents swapping close definitions."],
    ["acronym expansion", "know full names", "Many exam terms appear as acronyms."],
    ["partial scoring strategy", "show the required keyword", "Write the core scoring term clearly before extra explanation."],
    ["official 2026 criteria mapping", "study against Q-Net scope", "Use the current official criteria instead of old blog lists."],
    ["recent technology terms", "refresh modern platform vocabulary", "The practical exam can include current IT terms."],
    ["privacy and law", "protect personal information", "Security and compliance terms appear in operations scenarios."],
    ["architecture tradeoffs", "explain why one design fits", "Architecture questions ask for consequences, not only names."],
    ["test design", "choose verification method", "Match unit, integration, system, acceptance, and regression tests to risk."],
    ["incident response", "contain analyze recover improve", "Incident handling has ordered steps and evidence needs."],
    ["final mock remediation", "convert misses into drills", "Mock exams should produce targeted review lists."],
    ["exam-day timing", "protect solvable points", "Answer easy and exact items before deep tracing."],
    ["postmortem review", "capture root cause of misses", "Review after practice reveals weak concept clusters."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("ip", topics);
