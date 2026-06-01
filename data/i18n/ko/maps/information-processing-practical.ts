import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for information-processing-practical. Values start as English placeholders — translate to Korean.
export const informationProcessingPracticalChrome: FactoryChromeKo = {
  metadata: {
    title: "PracticalDojo - 정보처리기사 실기 기초부터 전문가까지",
    description: "KanaDojo 스타일의 정보처리기사 실기 드릴 — 기초 개념부터 실전 대비까지."
  },
  welcomeTitle: "PracticalDojo에 오신 것을 환영합니다!",
  welcomeBody: "PracticalDojo는 정보처리기사 실기를 초급 기초부터 전문가 수준까지 집중 드릴로 학습할 수 있도록 구성했습니다.",
  subjectName: "정보처리기사 실기",
  footerMeta: "커뮤니티 제작 ~ 실기 시험 블룸 ~ Q-Net 출제 범위 기반 ~ v0.1.18 (알파)",
  cards: {
    "ip-foundations": { label: "기초", summary: "범위, 설계, SQL" },
    "ip-implementation": { label: "구현", summary: "코드, SQL, 배포" },
    "ip-operations": { label: "운영", summary: "보안, 리눅스, 네트워크" },
    "ip-expertise": { label: "실전", summary: "단답형, 함정, 모의고사" }
  },
  tracks: {
    "ip-foundations": { title: "실기 기초", focus: "출제 범위, 설계, SQL, 프로그래밍 기초" },
    "ip-implementation": { title: "구현", focus: "알고리즘, SQL, 연계, 빌드 및 배포" },
    "ip-operations": { title: "운영", focus: "보안, 리눅스, 네트워킹, 모니터링, 릴리스" },
    "ip-expertise": { title: "실전 전문가", focus: "단답형, 코드 출력, 시나리오 판단, 최종 모의고사" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const informationProcessingPracticalTopicsKo: Record<string, TopicKo> = {
  "exam structure": ["시험 구조", "단답형 및 코드 출력 정확도"], // hint: The practical exam rewards exact short-answer and code-output accuracy.
  "information processing practical": ["정보처리기사 실기", "소프트웨어 구현 역량"], // hint: The official scope centers on implementing and operating software systems.
  "answer format": ["답안 형식", "정확한 용어 또는 결과값 기술"], // hint: Small spelling or output mistakes can cost points.
  "software lifecycle": ["소프트웨어 생명주기", "요구사항 설계 구현 테스트 유지보수"], // hint: Lifecycle phases organize how software work moves from need to operation.
  "requirements analysis": ["요구사항 분석", "기능적·비기능적 요구사항 도출"], // hint: Requirements decide what the system must do and how well it must work.
  "UML diagrams": ["UML 다이어그램", "구조와 행위 모델링"], // hint: UML diagrams express classes, sequences, states, and use cases.
  "UI design": ["UI 설계", "사용자 인터랙션 구조"], // hint: UI questions focus on screens, flows, accessibility, and usability terms.
  "application design": ["애플리케이션 설계", "컴포넌트와 모듈 구조"], // hint: Application design assigns responsibilities before coding.
  "interface design": ["인터페이스 설계", "시스템 간 계약 정의"], // hint: Interfaces define data format, protocol, and error behavior.
  "database design": ["데이터베이스 설계", "스키마 및 무결성 설계"], // hint: Database design maps data rules to tables, keys, and constraints.
  "SQL writing": ["SQL 작성", "올바른 결과 집합 도출"], // hint: SQL items test syntax, result tracing, and transaction concepts.
  "programming basics": ["프로그래밍 기초", "C·Java·Python 코드 추적"], // hint: The exam often asks for output after loops, arrays, and functions run.
  "C syntax": ["C 문법", "포인터 배열 연산자"], // hint: C questions often hinge on indexing, address use, and operator precedence.
  "Java syntax": ["Java 문법", "클래스 참조 컬렉션"], // hint: Java questions test object behavior, strings, inheritance, and exceptions.
  "Python syntax": ["Python 문법", "동적 구조와 슬라이싱"], // hint: Python items often use lists, dictionaries, loops, and functions.
  "operating system basics": ["운영체제 기초", "프로세스 메모리 파일 스케줄링"], // hint: OS terms explain how programs run and share resources.
  "network basics": ["네트워크 기초", "프로토콜 주소 라우팅"], // hint: Networking questions test TCP/IP, HTTP, DNS, and security protocols.
  "security basics": ["보안 기초", "기밀성 무결성 가용성 보호"], // hint: Security appears across design, code, operations, and legal terms.
  "algorithm tracing": ["알고리즘 추적", "상태 변화를 단계별로 따라가기"], // hint: Trace variable changes rather than guessing final output.
  "flowcharts": ["순서도", "제어 흐름 기호 읽기"], // hint: Flowcharts show branching, looping, input, output, and process steps.
  "pseudocode": ["의사코드", "언어 독립적 알고리즘"], // hint: Pseudocode questions focus on logic independent of exact language syntax.
  "data structures": ["자료구조", "연산에 맞는 저장 방식 선택"], // hint: Arrays, lists, stacks, queues, trees, and graphs fit different operations.
  "sorting": ["정렬", "키를 기준으로 레코드 순서 지정"], // hint: Sorting questions ask both output order and algorithm properties.
  "searching": ["탐색", "목표 값을 효율적으로 찾기"], // hint: Search method choice depends on ordering and data structure.
  "SQL DDL": ["SQL DDL", "데이터베이스 객체 정의"], // hint: CREATE, ALTER, and DROP change schema objects.
  "SQL DML": ["SQL DML", "테이블 데이터 변경"], // hint: INSERT, UPDATE, DELETE, and MERGE modify rows.
  "SQL DCL": ["SQL DCL", "권한 제어"], // hint: GRANT and REVOKE manage authorization.
  "SQL TCL": ["SQL TCL", "트랜잭션 제어"], // hint: COMMIT, ROLLBACK, and SAVEPOINT shape transaction outcome.
  "joins and subqueries": ["조인과 서브쿼리", "결과 결합 및 중첩 처리"], // hint: Trace row matching and nested query results carefully.
  "transaction anomalies": ["트랜잭션 이상 현상", "오손 읽기 반복 불가능 읽기 유령 읽기"], // hint: Isolation levels exist to control inconsistent reads.
  "normalization": ["정규화", "종속성 문제 제거"], // hint: Normalization reduces update, insert, and delete anomalies.
  "API implementation": ["API 구현", "계약을 준수하는 엔드포인트 구축"], // hint: APIs must match input, output, status, and error contracts.
  "integration testing": ["통합 테스트", "컴포넌트 상호작용 검증"], // hint: Integration tests catch wiring and boundary failures.
  "unit testing": ["단위 테스트", "소규모 동작 테스트"], // hint: Unit tests isolate a function or component behavior.
  "configuration management": ["형상 관리", "버전 및 변경 이력 통제"], // hint: Configuration management keeps artifacts reproducible.
  "build and deploy": ["빌드 및 배포", "산출물 생성과 릴리스"], // hint: Build and deployment steps move code into runnable environments.
  "secure coding": ["시큐어 코딩", "일반적인 취약점 방지"], // hint: Secure coding prevents injection, overflow, exposure, and auth flaws.
  "authentication": ["인증", "신원 확인"], // hint: Authentication checks who the user or system is.
  "authorization": ["인가", "허용된 행위 확인"], // hint: Authorization decides what an authenticated actor can do.
  "encryption": ["암호화", "평문 데이터 보호"], // hint: Encryption turns plaintext into ciphertext using keys.
  "hashing": ["해싱", "단방향 다이제스트"], // hint: Hashes verify integrity or store password digests with salts.
  "network protocols": ["네트워크 프로토콜", "표준 통신 규칙"], // hint: Protocols define message format, sequencing, and behavior.
  "Linux commands": ["리눅스 명령어", "파일·프로세스·서비스 조작"], // hint: Linux command fluency supports deployment and troubleshooting.
  "shell basics": ["셸 기초", "파이프를 활용한 명령 조합"], // hint: Shell pipelines transform data through small tools.
  "web protocols": ["웹 프로토콜", "HTTP HTTPS DNS 쿠키"], // hint: Web systems depend on request, response, name, and session behavior.
  "middleware": ["미들웨어", "애플리케이션 컴포넌트 연결"], // hint: Middleware provides messaging, transaction, API, or integration support.
  "cloud and virtualization": ["클라우드와 가상화", "컴퓨팅 자원 추상화"], // hint: Cloud and virtualization concepts affect deployment and scaling.
  "DevOps pipeline": ["DevOps 파이프라인", "빌드·테스트·릴리스 자동화"], // hint: Pipelines make release work repeatable and auditable.
  "monitoring and logging": ["모니터링과 로깅", "런타임 동작 관측"], // hint: Operations need logs and metrics to detect failures.
  "backup and recovery": ["백업과 복구", "데이터 손실 후 복원"], // hint: Recovery plans must define RPO, RTO, and restore validation.
  "performance tuning": ["성능 튜닝", "측정된 병목 제거"], // hint: Tune after measuring CPU, memory, I/O, or query limits.
  "availability": ["가용성", "서비스 지속 사용 보장"], // hint: Availability uses redundancy, failover, and recovery practices.
  "defect lifecycle": ["결함 생명주기", "보고부터 종결까지 버그 추적"], // hint: Defect management records severity, cause, fix, and verification.
  "release management": ["릴리스 관리", "운영 환경 변경 통제"], // hint: Release management reduces risk during deployment.
  "short-answer precision": ["단답형 정확도", "공식 용어를 정확히 기술"], // hint: Exact wording matters for terminology answers.
  "keyword memorization": ["핵심어 암기", "시간 내 정의 즉시 회상"], // hint: Definitions should be practiced as prompt and answer pairs.
  "code-output traps": ["코드 출력 함정", "실행 순서와 값 변경 추적"], // hint: Output questions often hide mutation, scope, or precedence traps.
  "SQL result traps": ["SQL 결과 함정", "NULL 및 조인 동작 정확히 추적"], // hint: SQL outputs require exact row and column reasoning.
  "diagram interpretation": ["다이어그램 해석", "기호를 의미로 변환"], // hint: Diagram questions reward reading notation, not drawing style.
  "scenario analysis": ["시나리오 분석", "설명된 문제에 가장 적합한 기법 선택"], // hint: Scenario items ask which concept solves a described problem.
  "terminology contrast": ["용어 대비", "유사 개념 구분"], // hint: Contrasting pairs prevents swapping close definitions.
  "acronym expansion": ["약어 풀이", "전체 명칭 파악"], // hint: Many exam terms appear as acronyms.
  "partial scoring strategy": ["부분 점수 전략", "핵심 채점 용어 명확히 기술"], // hint: Write the core scoring term clearly before extra explanation.
  "official 2026 criteria mapping": ["2026 공식 출제 기준 매핑", "Q-Net 범위 기준으로 학습"], // hint: Use the current official criteria instead of old blog lists.
  "recent technology terms": ["최신 기술 용어", "최신 플랫폼 어휘 갱신"], // hint: The practical exam can include current IT terms.
  "privacy and law": ["개인정보와 법령", "개인정보 보호"], // hint: Security and compliance terms appear in operations scenarios.
  "architecture tradeoffs": ["아키텍처 트레이드오프", "특정 설계가 적합한 이유 설명"], // hint: Architecture questions ask for consequences, not only names.
  "test design": ["테스트 설계", "검증 방법 선택"], // hint: Match unit, integration, system, acceptance, and regression tests to risk.
  "incident response": ["인시던트 대응", "억제 분석 복구 개선"], // hint: Incident handling has ordered steps and evidence needs.
  "final mock remediation": ["최종 모의고사 보완", "오답을 드릴로 전환"], // hint: Mock exams should produce targeted review lists.
  "exam-day timing": ["시험 당일 시간 배분", "풀 수 있는 문항 점수 보호"], // hint: Answer easy and exact items before deep tracing.
  "postmortem review": ["사후 복기", "오답의 근본 원인 파악"], // hint: Review after practice reveals weak concept clusters.
};
