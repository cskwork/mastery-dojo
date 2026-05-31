import type { LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { buildCurriculumDrills, type CurriculumTopic } from "@/data/curriculumFactory";
import { defineTopics } from "@/data/topicBank";

export const tracks: LearningTrack[] = [
  {
    id: "spring-foundations",
    title: "Boot Foundations",
    level: "Beginner",
    focus: "project setup, configuration, beans, controllers",
    accent: "#6db33f"
  },
  {
    id: "spring-web-data",
    title: "Web and Data",
    level: "Builder",
    focus: "REST APIs, persistence, validation, transactions",
    accent: "#4fa36c"
  },
  {
    id: "spring-production",
    title: "Production Spring",
    level: "Practitioner",
    focus: "actuator, testing, messaging, deployment",
    accent: "#58a6ff"
  },
  {
    id: "spring-expertise",
    title: "Spring Expertise",
    level: "Expertise",
    focus: "auto-configuration, reactive systems, security, operations",
    accent: "#c8a24b"
  }
];

export const topics: CurriculumTopic[] = [
  ...defineTopics("spring-foundations", [
    ["Spring Initializr", "generate a Boot project", "Use the official initializer to choose Java, build tool, and starters."],
    ["Maven or Gradle build", "manage dependencies and tasks", "Boot projects normally compile, test, and package through Maven or Gradle."],
    ["@SpringBootApplication", "enable component scan and auto-configuration", "The annotation is the conventional Boot application entry point."],
    ["main method", "SpringApplication.run", "Boot starts the application context from the main method."],
    ["auto-configuration", "conditional default beans", "Boot configures common infrastructure when matching classes and settings exist."],
    ["application properties", "externalized configuration", "Use application.properties or application.yml for environment-specific settings."],
    ["profiles", "activate environment slices", "Profiles select different beans or configuration values per environment."],
    ["dependency injection", "constructor injection", "Constructor injection makes required collaborators explicit and testable."],
    ["components", "@Component stereotypes", "Spring discovers controllers, services, repositories, and components by scanning."],
    ["configuration properties", "@ConfigurationProperties", "Typed properties bind structured configuration into validated objects."],
    ["logging", "structured application logs", "Boot provides logging defaults that should be adjusted per environment."],
    ["embedded server", "run as an executable application", "Boot can package Tomcat, Jetty, or Undertow with the app."],
    ["controllers", "@RestController", "A REST controller maps HTTP requests to Java methods returning response bodies."],
    ["request mapping", "@GetMapping", "Shortcut mapping annotations make HTTP routes explicit."],
    ["JSON serialization", "Jackson object mapping", "Boot maps request and response bodies with Jackson by default."],
    ["validation basics", "Bean Validation annotations", "Validate incoming DTO fields before business logic runs."],
    ["devtools", "fast local restart", "Devtools shortens the local edit-run loop."],
    ["actuator health", "/actuator/health", "The health endpoint is the first operational smoke check."]
  ]),
  ...defineTopics("spring-web-data", [
    ["REST controllers", "resource-oriented endpoints", "Keep HTTP routes clear and map domain actions intentionally."],
    ["DTO boundaries", "separate API shape from entities", "DTOs prevent persistence details from leaking through the API."],
    ["service layer", "business workflow boundary", "Services coordinate repositories, validation, and side effects."],
    ["exception handling", "@ControllerAdvice", "Centralized handlers convert failures into consistent HTTP responses."],
    ["RestClient", "synchronous HTTP client", "Use RestClient for outbound HTTP calls in modern Spring applications."],
    ["Spring MVC", "servlet web stack", "MVC handles controller dispatch, binding, validation, and view or body rendering."],
    ["Spring Data repositories", "repository interface methods", "Repositories remove repetitive CRUD and query plumbing."],
    ["JPA entities", "@Entity mapping", "Entities describe persistent identity, fields, and relationships."],
    ["transactions", "@Transactional boundary", "Put transaction boundaries around complete business changes."],
    ["data source configuration", "DataSourceProperties", "Configure JDBC URL, credentials, and pool settings through Boot properties."],
    ["database migrations", "Flyway or Liquibase", "Migrations make schema changes repeatable across environments."],
    ["Testcontainers", "real dependency tests", "Containers exercise database or broker behavior closer to production."],
    ["caching", "@Cacheable", "Cache stable expensive reads behind explicit invalidation rules."],
    ["scheduling", "@Scheduled", "Scheduled jobs need idempotency and production visibility."],
    ["Spring Security basics", "filter chain", "Security integrates authentication and authorization before controllers run."],
    ["pagination and sorting", "Pageable", "Paginated endpoints keep large result sets bounded."],
    ["OpenAPI documentation", "document request contracts", "API docs make routes and payloads inspectable for clients."],
    ["problem details", "RFC 9457 style errors", "Structured error responses are easier for clients to handle."]
  ]),
  ...defineTopics("spring-production", [
    ["actuator endpoints", "production management endpoints", "Actuator exposes health, metrics, config, mappings, and other runtime views."],
    ["metrics", "Micrometer meters", "Spring emits metrics through Micrometer for monitoring backends."],
    ["tracing", "trace request flow", "Distributed traces connect service calls across a system."],
    ["health groups", "separate readiness and liveness", "Different probes answer different operational questions."],
    ["readiness probes", "traffic acceptance signal", "Readiness should fail when the app cannot safely serve requests."],
    ["configuration management", "environment-backed config", "Keep secrets and environment settings outside source code."],
    ["container images", "OCI image packaging", "Boot can build runnable images with buildpacks."],
    ["buildpacks", "reproducible image builds", "Buildpacks create images without hand-written Dockerfiles."],
    ["graceful shutdown", "finish in-flight work", "Graceful shutdown reduces request loss during deploys."],
    ["AOT processing", "ahead-of-time optimization", "AOT prepares runtime metadata and can support native-image builds."],
    ["native image", "GraalVM executable", "Native images trade build complexity for fast startup and lower memory."],
    ["async execution", "@Async executor", "Async work needs bounded executors and error handling."],
    ["batch jobs", "Spring Batch", "Batch workloads need restartability and checkpointing."],
    ["Kafka messaging", "Spring for Apache Kafka", "Messaging consumers need idempotent processing and offset awareness."],
    ["integration tests", "@SpringBootTest", "Full context tests verify wiring across layers."],
    ["test slices", "@WebMvcTest", "Slice tests isolate web or data layers for faster feedback."],
    ["resilience patterns", "timeouts and retries", "Outbound calls need timeouts, retries, and circuit boundaries."],
    ["observability dashboard", "logs metrics traces", "Production support depends on seeing behavior before incidents escalate."]
  ]),
  ...defineTopics("spring-expertise", [
    ["custom auto-configuration", "conditional starter behavior", "Reusable starters should activate only when conditions match."],
    ["starters", "opinionated dependency bundles", "A starter packages dependencies and auto-configuration for a capability."],
    ["condition report", "/actuator/conditions", "The condition report explains why auto-configuration matched or backed off."],
    ["modular monolith", "explicit module boundaries", "Keep modules independently understandable inside one deployable."],
    ["WebFlux", "reactive web stack", "Use reactive APIs when non-blocking flow is required end to end."],
    ["RSocket", "message-oriented application protocol", "RSocket supports request-response, streams, and bidirectional messaging."],
    ["OAuth2 resource server", "validate bearer tokens", "Resource servers enforce token-based access to APIs."],
    ["multi-tenancy", "tenant-aware data access", "Tenant boundaries must be enforced in queries and security rules."],
    ["distributed transaction boundary", "avoid cross-service ACID", "Use sagas or outbox patterns instead of fragile distributed commits."],
    ["connection pool tuning", "right-size HikariCP", "Pool sizing must match database capacity and request concurrency."],
    ["performance profiling", "measure before tuning", "Profiles identify the actual CPU, allocation, or I/O bottleneck."],
    ["thread analysis", "inspect blocked and busy threads", "Thread dumps explain stalls, deadlocks, and saturation."],
    ["deployment rollout", "progressive release", "Rollouts need health gates and rollback paths."],
    ["blue green deployment", "switch traffic between versions", "Blue green deploys reduce downtime when rollback is fast."],
    ["security hardening", "least privilege defaults", "Disable unused endpoints and restrict sensitive actuator data."],
    ["SBOM", "software bill of materials", "SBOMs help track dependency exposure and supply-chain risk."],
    ["architecture tests", "enforce package rules", "Automated architecture checks prevent accidental boundary erosion."],
    ["incident debugging", "correlate symptoms to runtime state", "Use logs, metrics, traces, and actuator data together."]
  ])
];

export const drills: LearningDrill[] = buildCurriculumDrills("spring", topics);
