import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for spring-boot. Values start as English placeholders — translate to Korean.
export const springBootChrome: FactoryChromeKo = {
  metadata: {
    title: "SpringBootDojo - Spring Boot 기초부터 전문가까지",
    description: "KanaDojo 스타일의 Spring Boot 드릴 — 프로젝트 설정부터 프로덕션 운영까지."
  },
  welcomeTitle: "SpringBootDojo에 오신 것을 환영합니다!",
  welcomeBody: "SpringBootDojo는 Spring Boot를 초급 기초부터 전문가 수준까지 집중 드릴로 익힐 수 있게 구성된 학습 플랫폼입니다.",
  subjectName: "Spring Boot",
  footerMeta: "커뮤니티 제작 ~ spring bloom ~ 공식 문서 기반 ~ v0.1.18 (알파)",
  cards: {
    "spring-foundations": { label: "기초", summary: "설정, 빈, 설정값" },
    "spring-web-data": { label: "웹 데이터", summary: "REST, JPA, 트랜잭션" },
    "spring-production": { label: "프로덕션", summary: "액추에이터, 테스트, 배포" },
    "spring-expertise": { label: "전문가", summary: "리액티브, 보안, 성능 튜닝" }
  },
  tracks: {
    "spring-foundations": { title: "Boot 기초", focus: "프로젝트 설정, 설정값, 빈, 컨트롤러" },
    "spring-web-data": { title: "웹 및 데이터", focus: "REST API, 영속성, 유효성 검사, 트랜잭션" },
    "spring-production": { title: "프로덕션 Spring", focus: "액추에이터, 테스트, 메시징, 배포" },
    "spring-expertise": { title: "Spring 전문가", focus: "자동 구성, 리액티브 시스템, 보안, 운영" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const springBootTopicsKo: Record<string, TopicKo> = {
  "Spring Initializr": ["Spring Initializr", "Boot 프로젝트 생성"], // hint: Use the official initializer to choose Java, build tool, and starters.
  "Maven or Gradle build": ["Maven 또는 Gradle 빌드", "의존성 및 태스크 관리"], // hint: Boot projects normally compile, test, and package through Maven or Gradle.
  "@SpringBootApplication": ["@SpringBootApplication", "컴포넌트 스캔 및 자동 구성 활성화"], // hint: The annotation is the conventional Boot application entry point.
  "main method": ["main 메서드", "SpringApplication.run"], // hint: Boot starts the application context from the main method.
  "auto-configuration": ["자동 구성", "조건부 기본 빈"], // hint: Boot configures common infrastructure when matching classes and settings exist.
  "application properties": ["애플리케이션 프로퍼티", "외부화 설정"], // hint: Use application.properties or application.yml for environment-specific settings.
  "profiles": ["프로파일", "환경별 슬라이스 활성화"], // hint: Profiles select different beans or configuration values per environment.
  "dependency injection": ["의존성 주입", "생성자 주입"], // hint: Constructor injection makes required collaborators explicit and testable.
  "components": ["컴포넌트", "@Component 스테레오타입"], // hint: Spring discovers controllers, services, repositories, and components by scanning.
  "configuration properties": ["설정 프로퍼티", "@ConfigurationProperties"], // hint: Typed properties bind structured configuration into validated objects.
  "logging": ["로깅", "구조적 애플리케이션 로그"], // hint: Boot provides logging defaults that should be adjusted per environment.
  "embedded server": ["내장 서버", "실행 가능한 애플리케이션으로 패키징"], // hint: Boot can package Tomcat, Jetty, or Undertow with the app.
  "controllers": ["컨트롤러", "@RestController"], // hint: A REST controller maps HTTP requests to Java methods returning response bodies.
  "request mapping": ["요청 매핑", "@GetMapping"], // hint: Shortcut mapping annotations make HTTP routes explicit.
  "JSON serialization": ["JSON 직렬화", "Jackson 객체 매핑"], // hint: Boot maps request and response bodies with Jackson by default.
  "validation basics": ["유효성 검사 기초", "Bean Validation 애너테이션"], // hint: Validate incoming DTO fields before business logic runs.
  "devtools": ["devtools", "로컬 빠른 재시작"], // hint: Devtools shortens the local edit-run loop.
  "actuator health": ["액추에이터 헬스", "/actuator/health"], // hint: The health endpoint is the first operational smoke check.
  "REST controllers": ["REST 컨트롤러", "리소스 지향 엔드포인트"], // hint: Keep HTTP routes clear and map domain actions intentionally.
  "DTO boundaries": ["DTO 경계", "API 형태와 엔티티 분리"], // hint: DTOs prevent persistence details from leaking through the API.
  "service layer": ["서비스 레이어", "비즈니스 워크플로 경계"], // hint: Services coordinate repositories, validation, and side effects.
  "exception handling": ["예외 처리", "@ControllerAdvice"], // hint: Centralized handlers convert failures into consistent HTTP responses.
  "RestClient": ["RestClient", "동기 HTTP 클라이언트"], // hint: Use RestClient for outbound HTTP calls in modern Spring applications.
  "Spring MVC": ["Spring MVC", "서블릿 웹 스택"], // hint: MVC handles controller dispatch, binding, validation, and view or body rendering.
  "Spring Data repositories": ["Spring Data 리포지토리", "리포지토리 인터페이스 메서드"], // hint: Repositories remove repetitive CRUD and query plumbing.
  "JPA entities": ["JPA 엔티티", "@Entity 매핑"], // hint: Entities describe persistent identity, fields, and relationships.
  "transactions": ["트랜잭션", "@Transactional 경계"], // hint: Put transaction boundaries around complete business changes.
  "data source configuration": ["데이터 소스 설정", "DataSourceProperties"], // hint: Configure JDBC URL, credentials, and pool settings through Boot properties.
  "database migrations": ["데이터베이스 마이그레이션", "Flyway 또는 Liquibase"], // hint: Migrations make schema changes repeatable across environments.
  "Testcontainers": ["Testcontainers", "실제 의존성 테스트"], // hint: Containers exercise database or broker behavior closer to production.
  "caching": ["캐싱", "@Cacheable"], // hint: Cache stable expensive reads behind explicit invalidation rules.
  "scheduling": ["스케줄링", "@Scheduled"], // hint: Scheduled jobs need idempotency and production visibility.
  "Spring Security basics": ["Spring Security 기초", "필터 체인"], // hint: Security integrates authentication and authorization before controllers run.
  "pagination and sorting": ["페이지네이션 및 정렬", "Pageable"], // hint: Paginated endpoints keep large result sets bounded.
  "OpenAPI documentation": ["OpenAPI 문서화", "요청 계약 문서화"], // hint: API docs make routes and payloads inspectable for clients.
  "problem details": ["문제 상세 응답", "RFC 9457 형식 오류"], // hint: Structured error responses are easier for clients to handle.
  "actuator endpoints": ["액추에이터 엔드포인트", "프로덕션 관리 엔드포인트"], // hint: Actuator exposes health, metrics, config, mappings, and other runtime views.
  "metrics": ["메트릭", "Micrometer 미터"], // hint: Spring emits metrics through Micrometer for monitoring backends.
  "tracing": ["트레이싱", "요청 흐름 추적"], // hint: Distributed traces connect service calls across a system.
  "health groups": ["헬스 그룹", "준비성과 활성 분리"], // hint: Different probes answer different operational questions.
  "readiness probes": ["준비성 프로브", "트래픽 수용 신호"], // hint: Readiness should fail when the app cannot safely serve requests.
  "configuration management": ["설정 관리", "환경 기반 설정"], // hint: Keep secrets and environment settings outside source code.
  "container images": ["컨테이너 이미지", "OCI 이미지 패키징"], // hint: Boot can build runnable images with buildpacks.
  "buildpacks": ["빌드팩", "재현 가능한 이미지 빌드"], // hint: Buildpacks create images without hand-written Dockerfiles.
  "graceful shutdown": ["그레이스풀 셧다운", "처리 중 요청 완료 후 종료"], // hint: Graceful shutdown reduces request loss during deploys.
  "AOT processing": ["AOT 처리", "사전 컴파일 최적화"], // hint: AOT prepares runtime metadata and can support native-image builds.
  "native image": ["네이티브 이미지", "GraalVM 실행 파일"], // hint: Native images trade build complexity for fast startup and lower memory.
  "async execution": ["비동기 실행", "@Async 실행기"], // hint: Async work needs bounded executors and error handling.
  "batch jobs": ["배치 작업", "Spring Batch"], // hint: Batch workloads need restartability and checkpointing.
  "Kafka messaging": ["Kafka 메시징", "Spring for Apache Kafka"], // hint: Messaging consumers need idempotent processing and offset awareness.
  "integration tests": ["통합 테스트", "@SpringBootTest"], // hint: Full context tests verify wiring across layers.
  "test slices": ["테스트 슬라이스", "@WebMvcTest"], // hint: Slice tests isolate web or data layers for faster feedback.
  "resilience patterns": ["복원력 패턴", "타임아웃 및 재시도"], // hint: Outbound calls need timeouts, retries, and circuit boundaries.
  "observability dashboard": ["관측 가능성 대시보드", "로그 메트릭 트레이스"], // hint: Production support depends on seeing behavior before incidents escalate.
  "custom auto-configuration": ["커스텀 자동 구성", "조건부 스타터 동작"], // hint: Reusable starters should activate only when conditions match.
  "starters": ["스타터", "의견이 담긴 의존성 번들"], // hint: A starter packages dependencies and auto-configuration for a capability.
  "condition report": ["조건 리포트", "/actuator/conditions"], // hint: The condition report explains why auto-configuration matched or backed off.
  "modular monolith": ["모듈형 모놀리스", "명시적 모듈 경계"], // hint: Keep modules independently understandable inside one deployable.
  "WebFlux": ["WebFlux", "리액티브 웹 스택"], // hint: Use reactive APIs when non-blocking flow is required end to end.
  "RSocket": ["RSocket", "메시지 지향 애플리케이션 프로토콜"], // hint: RSocket supports request-response, streams, and bidirectional messaging.
  "OAuth2 resource server": ["OAuth2 리소스 서버", "베어러 토큰 검증"], // hint: Resource servers enforce token-based access to APIs.
  "multi-tenancy": ["멀티 테넌시", "테넌트 인식 데이터 접근"], // hint: Tenant boundaries must be enforced in queries and security rules.
  "distributed transaction boundary": ["분산 트랜잭션 경계", "서비스 간 ACID 지양"], // hint: Use sagas or outbox patterns instead of fragile distributed commits.
  "connection pool tuning": ["커넥션 풀 튜닝", "HikariCP 적정 크기 설정"], // hint: Pool sizing must match database capacity and request concurrency.
  "performance profiling": ["성능 프로파일링", "튜닝 전 측정"], // hint: Profiles identify the actual CPU, allocation, or I/O bottleneck.
  "thread analysis": ["스레드 분석", "블로킹 및 활성 스레드 검사"], // hint: Thread dumps explain stalls, deadlocks, and saturation.
  "deployment rollout": ["배포 롤아웃", "점진적 릴리스"], // hint: Rollouts need health gates and rollback paths.
  "blue green deployment": ["블루-그린 배포", "버전 간 트래픽 전환"], // hint: Blue green deploys reduce downtime when rollback is fast.
  "security hardening": ["보안 강화", "최소 권한 기본값"], // hint: Disable unused endpoints and restrict sensitive actuator data.
  "SBOM": ["SBOM", "소프트웨어 구성 목록"], // hint: SBOMs help track dependency exposure and supply-chain risk.
  "architecture tests": ["아키텍처 테스트", "패키지 규칙 강제"], // hint: Automated architecture checks prevent accidental boundary erosion.
  "incident debugging": ["인시던트 디버깅", "증상과 런타임 상태 연결"], // hint: Use logs, metrics, traces, and actuator data together.
};
