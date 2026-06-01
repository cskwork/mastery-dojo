import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for java. Values start as English placeholders — translate to Korean.
export const javaChrome: FactoryChromeKo = {
  metadata: {
    title: "JavaDojo - 초급부터 전문가까지 자바 학습",
    description: "KanaDojo 스타일의 자바 드릴 — JDK 기초부터 런타임 전문가까지."
  },
  welcomeTitle: "JavaDojo에 오신 것을 환영합니다!",
  welcomeBody: "JavaDojo는 자바를 집중 드릴로 익히는 플랫폼입니다. 기초 문법부터 전문가 수준까지 단계별로 학습할 수 있습니다.",
  subjectName: "자바",
  footerMeta: "커뮤니티 제작 ~ java bloom ~ 공식 문서 기반 ~ v0.1.18 (알파)",
  cards: {
    "java-foundations": { label: "기초", summary: "JDK, 문법, 예외" },
    "java-oop-collections": { label: "객체", summary: "OOP, 제네릭, 컬렉션" },
    "java-runtime": { label: "런타임", summary: "모듈, 스레드, JFR" },
    "java-expertise": { label: "전문가", summary: "보안, 성능 튜닝, 패키징" }
  },
  tracks: {
    "java-foundations": { title: "자바 기초", focus: "JDK 도구, 문법, 클래스, 예외" },
    "java-oop-collections": { title: "객체와 컬렉션", focus: "객체 설계, 제네릭, 컬렉션, 스트림" },
    "java-runtime": { title: "런타임 숙달", focus: "JVM, 모듈, 동시성, I/O, 진단" },
    "java-expertise": { title: "자바 전문가", focus: "성능, 보안, 패키징, 호환성" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const javaTopicsKo: Record<string, TopicKo> = {
  "JDK vs JRE": ["JDK vs JRE", "JDK에 개발 도구 포함"], // hint: Use the JDK for compiling, testing, packaging, and running Java code.
  "javac": ["javac", "소스를 바이트코드로 컴파일"], // hint: The Java compiler writes .class files from .java source.
  "java launcher": ["java 런처", "클래스 또는 모듈 실행"], // hint: The java command starts the JVM with a class path or module path.
  "source files": ["소스 파일", "파일당 하나의 public 클래스"], // hint: A public top-level class uses a matching file name.
  "main method": ["main 메서드", "public static void main"], // hint: The main method is the conventional command-line entry point.
  "primitive types": ["기본형 타입", "고정된 기본 값"], // hint: Primitives store numeric, boolean, or character values directly.
  "variables": ["변수", "타입이 선언된 저장소"], // hint: Java variables have a declared type checked at compile time.
  "operators": ["연산자", "타입을 고려한 표현식"], // hint: Operators combine values while respecting precedence and type conversion rules.
  "control flow": ["제어 흐름", "if, switch, 반복문"], // hint: Branching and looping shape which statements run.
  "arrays": ["배열", "고정 길이의 인덱스 저장소"], // hint: Arrays keep ordered elements of one component type.
  "String": ["String", "불변 텍스트 객체"], // hint: String values are objects and cannot be changed in place.
  "methods": ["메서드", "매개변수를 갖는 이름 있는 동작"], // hint: Methods group behavior and define return types and arguments.
  "packages": ["패키지", "클래스의 네임스페이스"], // hint: Packages organize classes and avoid naming collisions.
  "access modifiers": ["접근 제어자", "가시성 제어"], // hint: public, protected, package-private, and private constrain access.
  "exceptions": ["예외", "체크 또는 언체크 오류"], // hint: Exceptions communicate error conditions up the call stack.
  "try-with-resources": ["try-with-resources", "자동 자원 해제"], // hint: Resources implementing AutoCloseable close reliably after the block.
  "records": ["레코드", "투명한 데이터 운반 객체"], // hint: Records declare shallow immutable carriers with generated members.
  "jshell": ["jshell", "대화형 자바 셸"], // hint: JShell is useful for exploring small language and API examples.
  "classes and objects": ["클래스와 객체", "설계도와 인스턴스"], // hint: A class defines state and behavior; an object is a runtime instance.
  "constructors": ["생성자", "새 객체 초기화"], // hint: Constructors establish valid object state at creation time.
  "inheritance": ["상속", "기반 타입 확장"], // hint: Inheritance reuses and specializes behavior through a class hierarchy.
  "interfaces": ["인터페이스", "동작 계약"], // hint: Interfaces define capabilities without requiring one implementation class.
  "abstract classes": ["추상 클래스", "부분 구현"], // hint: Abstract classes share implementation while leaving required methods open.
  "polymorphism": ["다형성", "상위 타입으로 객체 사용"], // hint: Polymorphism lets callers depend on a stable contract.
  "generics": ["제네릭", "매개변수화된 타입"], // hint: Generics add compile-time type safety to reusable code.
  "collections framework": ["컬렉션 프레임워크", "표준 데이터 컨테이너"], // hint: The framework provides List, Set, Queue, Map, and algorithms.
  "List": ["List", "순서 있는 시퀀스"], // hint: Lists preserve element order and support indexed access where implemented.
  "Set": ["Set", "중복 없는 원소 컬렉션"], // hint: Sets model membership without duplicates.
  "Map": ["Map", "키에서 값으로의 연관"], // hint: Maps lookup values by unique keys.
  "Queue and Deque": ["Queue와 Deque", "순서 있는 작업 접근"], // hint: Queues and deques support FIFO, LIFO, and double-ended patterns.
  "iterators": ["이터레이터", "제어된 순회"], // hint: Iterators traverse collections without exposing internal storage.
  "equals and hashCode": ["equals와 hashCode", "일관된 동등성 계약"], // hint: Hash collections depend on equality and hash code consistency.
  "Comparable and Comparator": ["Comparable과 Comparator", "정렬 순서 정의"], // hint: Comparable is natural order; Comparator is external ordering.
  "streams": ["스트림", "선언적 대량 연산"], // hint: Streams express map, filter, reduce, and collect pipelines.
  "Optional": ["Optional", "명시적인 부재 표현"], // hint: Optional represents absence without using null as a return signal.
  "immutable objects": ["불변 객체", "생성 후 상태 변경 불가"], // hint: Immutability simplifies reasoning, sharing, and concurrency.
  "JVM bytecode": ["JVM 바이트코드", "이식 가능한 명령 형식"], // hint: The JVM executes class-file bytecode across platforms.
  "classpath": ["클래스패스", "레거시 코드 탐색 경로"], // hint: The classpath locates classes and resources for unnamed-module applications.
  "module path": ["모듈 패스", "JPMS 모듈 결정"], // hint: The module path resolves named modules and explicit dependencies.
  "JPMS modules": ["JPMS 모듈", "module-info.java"], // hint: Modules declare exports, requires, and service relationships.
  "garbage collection": ["가비지 컬렉션", "자동 메모리 회수"], // hint: The JVM reclaims unreachable objects through collectors.
  "memory model": ["메모리 모델", "happens-before 규칙"], // hint: The Java Memory Model defines visibility between threads.
  "threads": ["스레드", "동시 실행 단위"], // hint: Threads run tasks concurrently inside one JVM process.
  "virtual threads": ["가상 스레드", "작업당 경량 스레드"], // hint: Virtual threads make blocking-style concurrency scale for many tasks.
  "executors": ["익스큐터", "태스크 실행 관리"], // hint: Executors decouple task submission from thread management.
  "synchronization": ["동기화", "상호 배제와 가시성 보장"], // hint: synchronized protects critical sections and publishes changes.
  "atomics": ["원자 변수", "락 없는 단일 변수 갱신"], // hint: Atomic classes provide compare-and-set based coordination.
  "concurrent collections": ["동시성 컬렉션", "스레드 안전 컨테이너"], // hint: Use concurrent collections instead of manually locking shared maps or queues.
  "CompletableFuture": ["CompletableFuture", "비동기 완료 단계"], // hint: CompletableFuture composes async work and dependent callbacks.
  "NIO": ["NIO", "버퍼, 채널, 셀렉터"], // hint: NIO supports scalable and lower-level I/O patterns.
  "HTTP Client": ["HTTP 클라이언트", "표준 HTTP API"], // hint: The JDK HTTP client sends synchronous or asynchronous requests.
  "JFR": ["JFR", "낮은 오버헤드 런타임 이벤트 기록"], // hint: Java Flight Recorder captures production diagnostics.
  "unit testing": ["단위 테스트", "자동화된 동작 검증"], // hint: Tests protect code behavior as APIs evolve.
  "date and time API": ["날짜 및 시간 API", "java.time"], // hint: Use java.time types instead of legacy Date and Calendar.
  "performance profiling": ["성능 프로파일링", "핫 패스 측정"], // hint: Profiling reveals CPU, allocation, locking, and I/O bottlenecks.
  "JFR and JMC": ["JFR과 JMC", "런타임 이벤트 기록 및 분석"], // hint: Flight recordings support production-friendly diagnostics.
  "class data sharing": ["클래스 데이터 공유", "공유 클래스 메타데이터 사전 로드"], // hint: CDS can reduce startup time and memory use.
  "preview features": ["프리뷰 기능", "의도적으로 활성화"], // hint: Preview language or VM features require explicit flags and migration awareness.
  "pattern matching": ["패턴 매칭", "타입 안전 분해"], // hint: Pattern matching reduces casting and branching boilerplate.
  "TLS security": ["TLS 보안", "보안 전송 설정"], // hint: Java applications need correct trust stores, protocols, and certificate handling.
  "cryptography APIs": ["암호화 API", "검증된 프로바이더 사용"], // hint: Do not implement cryptographic primitives by hand.
  "foreign function and memory API": ["외부 함수 및 메모리 API", "네이티브 상호운용 경계"], // hint: FFM gives structured access to native libraries and off-heap memory.
  "JNI boundaries": ["JNI 경계", "네이티브 코드 위험"], // hint: JNI can break memory safety and portability when misused.
  "Maven": ["Maven", "선언적 프로젝트 모델"], // hint: Maven standardizes dependencies, plugins, and lifecycle phases.
  "Gradle": ["Gradle", "프로그래머블 빌드 자동화"], // hint: Gradle models builds with tasks, plugins, and dependency graphs.
  "dependency management": ["의존성 관리", "버전 및 스코프 제어"], // hint: Manage transitive dependencies and vulnerabilities intentionally.
  "API design": ["API 설계", "안정적인 계약"], // hint: Public APIs should be cohesive, documented, and hard to misuse.
  "microservice integration": ["마이크로서비스 통합", "네트워크 오류를 고려한 호출"], // hint: Remote calls need timeouts, retries, and idempotency.
  "migration strategy": ["마이그레이션 전략", "JDK 버전 간 테스트"], // hint: Upgrade plans should separate source, dependency, and runtime compatibility.
  "binary compatibility": ["이진 호환성", "링크 오류 방지"], // hint: Binary compatibility matters for libraries used without recompilation.
  "jlink and jpackage": ["jlink와 jpackage", "커스텀 런타임 및 인스톨러"], // hint: Packaging tools reduce runtime size and simplify distribution.
  "production troubleshooting": ["프로덕션 트러블슈팅", "로그, 덤프, 메트릭 통합 분석"], // hint: Use thread dumps, heap dumps, JFR, and logs together.
};
