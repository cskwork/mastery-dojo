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
  "Spring Initializr": ["Spring Initializr","Boot 프로젝트 생성","공식 초기화 도구를 사용하여 Java 버전, 빌드 도구, 스타터를 선택한다."], // hint: Use the official initializer to choose Java, build tool, and starters.
  "Maven or Gradle build": ["Maven 또는 Gradle 빌드","의존성 및 태스크 관리","Boot 프로젝트는 일반적으로 Maven 또는 Gradle을 통해 컴파일, 테스트, 패키징을 수행한다."], // hint: Boot projects normally compile, test, and package through Maven or Gradle.
  "@SpringBootApplication": ["@SpringBootApplication","컴포넌트 스캔 및 자동 구성 활성화","해당 애너테이션은 Boot 애플리케이션의 관례적인 진입점이다."], // hint: The annotation is the conventional Boot application entry point.
  "main method": ["main 메서드","SpringApplication.run","Boot는 main 메서드에서 애플리케이션 컨텍스트를 시작한다."], // hint: Boot starts the application context from the main method.
  "auto-configuration": ["자동 구성","조건부 기본 빈","Boot는 일치하는 클래스와 설정이 존재할 때 공통 인프라를 자동으로 구성한다."], // hint: Boot configures common infrastructure when matching classes and settings exist.
  "application properties": ["애플리케이션 프로퍼티","외부화 설정","환경별 설정은 application.properties 또는 application.yml을 사용한다."], // hint: Use application.properties or application.yml for environment-specific settings.
  "profiles": ["프로파일","환경별 슬라이스 활성화","프로파일은 환경에 따라 서로 다른 빈 또는 설정값을 선택한다."], // hint: Profiles select different beans or configuration values per environment.
  "dependency injection": ["의존성 주입","생성자 주입","생성자 주입은 필수 협력 객체를 명시적으로 드러내고 테스트를 용이하게 한다."], // hint: Constructor injection makes required collaborators explicit and testable.
  "components": ["컴포넌트","@Component 스테레오타입","Spring은 스캔을 통해 컨트롤러, 서비스, 리포지토리, 컴포넌트를 탐색한다."], // hint: Spring discovers controllers, services, repositories, and components by scanning.
  "configuration properties": ["설정 프로퍼티","@ConfigurationProperties","타입이 지정된 프로퍼티는 구조화된 설정을 검증된 객체에 바인딩한다."], // hint: Typed properties bind structured configuration into validated objects.
  "logging": ["로깅","구조적 애플리케이션 로그","Boot가 제공하는 로깅 기본값은 환경에 맞게 조정해야 한다."], // hint: Boot provides logging defaults that should be adjusted per environment.
  "embedded server": ["내장 서버","실행 가능한 애플리케이션으로 패키징","Boot는 Tomcat, Jetty, 또는 Undertow를 애플리케이션과 함께 패키징할 수 있다."], // hint: Boot can package Tomcat, Jetty, or Undertow with the app.
  "controllers": ["컨트롤러","@RestController","REST 컨트롤러는 HTTP 요청을 응답 본문을 반환하는 Java 메서드에 매핑한다."], // hint: A REST controller maps HTTP requests to Java methods returning response bodies.
  "request mapping": ["요청 매핑","@GetMapping","단축 매핑 애너테이션은 HTTP 라우트를 명시적으로 표현한다."], // hint: Shortcut mapping annotations make HTTP routes explicit.
  "JSON serialization": ["JSON 직렬화","Jackson 객체 매핑","Boot는 기본적으로 Jackson을 사용하여 요청 및 응답 본문을 매핑한다."], // hint: Boot maps request and response bodies with Jackson by default.
  "validation basics": ["유효성 검사 기초","Bean Validation 애너테이션","비즈니스 로직 실행 전에 수신 DTO 필드의 유효성을 검사한다."], // hint: Validate incoming DTO fields before business logic runs.
  "devtools": ["devtools","로컬 빠른 재시작","Devtools는 로컬 편집-실행 주기를 단축한다."], // hint: Devtools shortens the local edit-run loop.
  "actuator health": ["액추에이터 헬스","/actuator/health","/actuator/health 엔드포인트는 첫 번째 운영 스모크 체크에 해당한다."], // hint: The health endpoint is the first operational smoke check.
  "REST controllers": ["REST 컨트롤러","리소스 지향 엔드포인트","HTTP 라우트를 명확하게 유지하고 도메인 액션을 의도적으로 매핑한다."], // hint: Keep HTTP routes clear and map domain actions intentionally.
  "DTO boundaries": ["DTO 경계","API 형태와 엔티티 분리","DTO는 영속성 세부 사항이 API를 통해 노출되는 것을 방지한다."], // hint: DTOs prevent persistence details from leaking through the API.
  "service layer": ["서비스 레이어","비즈니스 워크플로 경계","서비스는 리포지토리, 유효성 검사, 부수 효과를 조율한다."], // hint: Services coordinate repositories, validation, and side effects.
  "exception handling": ["예외 처리","@ControllerAdvice","중앙화된 핸들러는 @ControllerAdvice를 사용하여 실패를 일관된 HTTP 응답으로 변환한다."], // hint: Centralized handlers convert failures into consistent HTTP responses.
  "RestClient": ["RestClient","동기 HTTP 클라이언트","현대 Spring 애플리케이션의 외부 HTTP 호출에는 RestClient를 사용한다."], // hint: Use RestClient for outbound HTTP calls in modern Spring applications.
  "Spring MVC": ["Spring MVC","서블릿 웹 스택","MVC는 컨트롤러 디스패치, 바인딩, 유효성 검사, 뷰 또는 본문 렌더링을 처리한다."], // hint: MVC handles controller dispatch, binding, validation, and view or body rendering.
  "Spring Data repositories": ["Spring Data 리포지토리","리포지토리 인터페이스 메서드","리포지토리는 반복적인 CRUD 및 쿼리 플러밍을 제거한다."], // hint: Repositories remove repetitive CRUD and query plumbing.
  "JPA entities": ["JPA 엔티티","@Entity 매핑","엔티티는 영속적인 식별자, 필드, 연관 관계를 @Entity 매핑으로 기술한다."], // hint: Entities describe persistent identity, fields, and relationships.
  "transactions": ["트랜잭션","@Transactional 경계","@Transactional 경계는 완전한 비즈니스 변경 단위 전체에 적용한다."], // hint: Put transaction boundaries around complete business changes.
  "data source configuration": ["데이터 소스 설정","DataSourceProperties","JDBC URL, 자격증명, 풀 설정은 Boot 프로퍼티를 통해 구성한다."], // hint: Configure JDBC URL, credentials, and pool settings through Boot properties.
  "database migrations": ["데이터베이스 마이그레이션","Flyway 또는 Liquibase","Flyway 또는 Liquibase를 사용한 마이그레이션은 스키마 변경을 환경 전반에서 반복 가능하게 만든다."], // hint: Migrations make schema changes repeatable across environments.
  "Testcontainers": ["Testcontainers","실제 의존성 테스트","컨테이너를 통해 데이터베이스나 브로커의 동작을 프로덕션에 가깝게 테스트한다."], // hint: Containers exercise database or broker behavior closer to production.
  "caching": ["캐싱","@Cacheable","안정적이고 비용이 큰 읽기 결과는 @Cacheable과 명시적인 무효화 규칙으로 캐싱한다."], // hint: Cache stable expensive reads behind explicit invalidation rules.
  "scheduling": ["스케줄링","@Scheduled","@Scheduled 작업은 멱등성과 프로덕션 가시성을 갖춰야 한다."], // hint: Scheduled jobs need idempotency and production visibility.
  "Spring Security basics": ["Spring Security 기초","필터 체인","Security는 컨트롤러 실행 전에 필터 체인을 통해 인증과 인가를 통합한다."], // hint: Security integrates authentication and authorization before controllers run.
  "pagination and sorting": ["페이지네이션 및 정렬","Pageable","Pageable을 사용한 페이지네이션 엔드포인트는 대규모 결과 집합의 크기를 제한한다."], // hint: Paginated endpoints keep large result sets bounded.
  "OpenAPI documentation": ["OpenAPI 문서화","요청 계약 문서화","API 문서는 라우트와 페이로드를 클라이언트가 검사할 수 있도록 만든다."], // hint: API docs make routes and payloads inspectable for clients.
  "problem details": ["문제 상세 응답","RFC 9457 형식 오류","RFC 9457 형식의 구조화된 오류 응답은 클라이언트가 처리하기 용이하다."], // hint: Structured error responses are easier for clients to handle.
  "actuator endpoints": ["액추에이터 엔드포인트","프로덕션 관리 엔드포인트","Actuator는 헬스, 메트릭, 설정, 매핑 등 다양한 런타임 뷰를 노출한다."], // hint: Actuator exposes health, metrics, config, mappings, and other runtime views.
  "metrics": ["메트릭","Micrometer 미터","Spring은 Micrometer를 통해 모니터링 백엔드용 메트릭을 내보낸다."], // hint: Spring emits metrics through Micrometer for monitoring backends.
  "tracing": ["트레이싱","요청 흐름 추적","분산 트레이스는 시스템 전반에 걸친 서비스 호출을 연결한다."], // hint: Distributed traces connect service calls across a system.
  "health groups": ["헬스 그룹","준비성과 활성 분리","준비성과 활성 프로브를 분리하여 서로 다른 운영 질문에 응답한다."], // hint: Different probes answer different operational questions.
  "readiness probes": ["준비성 프로브","트래픽 수용 신호","애플리케이션이 요청을 안전하게 처리할 수 없는 경우 준비성 프로브는 실패를 반환해야 한다."], // hint: Readiness should fail when the app cannot safely serve requests.
  "configuration management": ["설정 관리","환경 기반 설정","시크릿과 환경 설정은 소스 코드 외부에서 관리한다."], // hint: Keep secrets and environment settings outside source code.
  "container images": ["컨테이너 이미지","OCI 이미지 패키징","Boot는 빌드팩을 사용하여 실행 가능한 OCI 이미지를 빌드할 수 있다."], // hint: Boot can build runnable images with buildpacks.
  "buildpacks": ["빌드팩","재현 가능한 이미지 빌드","빌드팩은 직접 작성한 Dockerfile 없이 재현 가능한 이미지를 생성한다."], // hint: Buildpacks create images without hand-written Dockerfiles.
  "graceful shutdown": ["그레이스풀 셧다운","처리 중 요청 완료 후 종료","그레이스풀 셧다운은 배포 중 처리 중인 요청의 손실을 줄인다."], // hint: Graceful shutdown reduces request loss during deploys.
  "AOT processing": ["AOT 처리","사전 컴파일 최적화","AOT는 런타임 메타데이터를 사전에 준비하며 native-image 빌드도 지원할 수 있다."], // hint: AOT prepares runtime metadata and can support native-image builds.
  "native image": ["네이티브 이미지","GraalVM 실행 파일","GraalVM 네이티브 이미지는 빌드 복잡도를 감수하는 대신 빠른 시작 시간과 낮은 메모리 사용량을 제공한다."], // hint: Native images trade build complexity for fast startup and lower memory.
  "async execution": ["비동기 실행","@Async 실행기","@Async 비동기 작업은 경계 있는 실행기와 오류 처리를 갖춰야 한다."], // hint: Async work needs bounded executors and error handling.
  "batch jobs": ["배치 작업","Spring Batch","Spring Batch 배치 워크로드는 재시작 가능성과 체크포인팅을 필요로 한다."], // hint: Batch workloads need restartability and checkpointing.
  "Kafka messaging": ["Kafka 메시징","Spring for Apache Kafka","Kafka 메시징 컨슈머는 멱등적 처리와 오프셋 관리를 필요로 한다."], // hint: Messaging consumers need idempotent processing and offset awareness.
  "integration tests": ["통합 테스트","@SpringBootTest","@SpringBootTest 전체 컨텍스트 테스트는 레이어 간 와이어링을 검증한다."], // hint: Full context tests verify wiring across layers.
  "test slices": ["테스트 슬라이스","@WebMvcTest","@WebMvcTest와 같은 슬라이스 테스트는 웹 또는 데이터 레이어를 격리하여 빠른 피드백을 제공한다."], // hint: Slice tests isolate web or data layers for faster feedback.
  "resilience patterns": ["복원력 패턴","타임아웃 및 재시도","외부 호출에는 타임아웃, 재시도, 서킷 브레이커 경계가 필요하다."], // hint: Outbound calls need timeouts, retries, and circuit boundaries.
  "observability dashboard": ["관측 가능성 대시보드","로그 메트릭 트레이스","프로덕션 지원은 인시던트가 확대되기 전에 로그, 메트릭, 트레이스를 통해 동작을 파악하는 데 달려 있다."], // hint: Production support depends on seeing behavior before incidents escalate.
  "custom auto-configuration": ["커스텀 자동 구성","조건부 스타터 동작","재사용 가능한 스타터는 조건이 일치할 때만 활성화되어야 한다."], // hint: Reusable starters should activate only when conditions match.
  "starters": ["스타터","의견이 담긴 의존성 번들","스타터는 특정 기능을 위한 의존성과 자동 구성을 하나의 번들로 패키징한다."], // hint: A starter packages dependencies and auto-configuration for a capability.
  "condition report": ["조건 리포트","/actuator/conditions","/actuator/conditions 조건 리포트는 자동 구성이 적용되거나 보류된 이유를 설명한다."], // hint: The condition report explains why auto-configuration matched or backed off.
  "modular monolith": ["모듈형 모놀리스","명시적 모듈 경계","모듈을 단일 배포 단위 안에서 독립적으로 이해할 수 있는 명시적 경계를 유지한다."], // hint: Keep modules independently understandable inside one deployable.
  "WebFlux": ["WebFlux","리액티브 웹 스택","논블로킹 흐름이 종단 간 요구될 때 WebFlux 리액티브 API를 사용한다."], // hint: Use reactive APIs when non-blocking flow is required end to end.
  "RSocket": ["RSocket","메시지 지향 애플리케이션 프로토콜","RSocket은 요청-응답, 스트림, 양방향 메시징을 지원하는 메시지 지향 프로토콜이다."], // hint: RSocket supports request-response, streams, and bidirectional messaging.
  "OAuth2 resource server": ["OAuth2 리소스 서버","베어러 토큰 검증","리소스 서버는 베어러 토큰을 검증하여 API에 대한 토큰 기반 접근을 강제한다."], // hint: Resource servers enforce token-based access to APIs.
  "multi-tenancy": ["멀티 테넌시","테넌트 인식 데이터 접근","테넌트 경계는 쿼리와 보안 규칙 모두에서 강제되어야 한다."], // hint: Tenant boundaries must be enforced in queries and security rules.
  "distributed transaction boundary": ["분산 트랜잭션 경계","서비스 간 ACID 지양","취약한 분산 커밋 대신 사가(saga) 또는 아웃박스 패턴을 사용한다."], // hint: Use sagas or outbox patterns instead of fragile distributed commits.
  "connection pool tuning": ["커넥션 풀 튜닝","HikariCP 적정 크기 설정","HikariCP 풀 크기는 데이터베이스 용량과 요청 동시성에 맞게 설정해야 한다."], // hint: Pool sizing must match database capacity and request concurrency.
  "performance profiling": ["성능 프로파일링","튜닝 전 측정","프로파일링은 실제 CPU, 메모리 할당, 또는 I/O 병목을 튜닝 전에 식별한다."], // hint: Profiles identify the actual CPU, allocation, or I/O bottleneck.
  "thread analysis": ["스레드 분석","블로킹 및 활성 스레드 검사","스레드 덤프는 블로킹, 교착 상태, 포화 상태를 설명한다."], // hint: Thread dumps explain stalls, deadlocks, and saturation.
  "deployment rollout": ["배포 롤아웃","점진적 릴리스","롤아웃에는 헬스 게이트와 롤백 경로가 필요하다."], // hint: Rollouts need health gates and rollback paths.
  "blue green deployment": ["블루-그린 배포","버전 간 트래픽 전환","블루-그린 배포는 롤백이 빠를 때 다운타임을 줄인다."], // hint: Blue green deploys reduce downtime when rollback is fast.
  "security hardening": ["보안 강화","최소 권한 기본값","사용하지 않는 엔드포인트를 비활성화하고 민감한 액추에이터 데이터에 대한 접근을 제한한다."], // hint: Disable unused endpoints and restrict sensitive actuator data.
  "SBOM": ["SBOM","소프트웨어 구성 목록","SBOM은 의존성 노출과 공급망 위험을 추적하는 데 도움을 준다."], // hint: SBOMs help track dependency exposure and supply-chain risk.
  "architecture tests": ["아키텍처 테스트","패키지 규칙 강제","자동화된 아키텍처 테스트는 패키지 규칙을 강제하여 경계가 우발적으로 침식되는 것을 방지한다."], // hint: Automated architecture checks prevent accidental boundary erosion.
  "incident debugging": ["인시던트 디버깅","증상과 런타임 상태 연결","인시던트 디버깅 시 로그, 메트릭, 트레이스, 액추에이터 데이터를 함께 활용한다."], // hint: Use logs, metrics, traces, and actuator data together.
};
