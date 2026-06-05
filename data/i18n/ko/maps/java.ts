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
  "JDK vs JRE": ["JDK vs JRE","JDK에 개발 도구 포함","자바 코드를 컴파일, 테스트, 패키징, 실행하려면 JDK를 사용한다."], // hint: Use the JDK for compiling, testing, packaging, and running Java code.
  "javac": ["javac","소스를 바이트코드로 컴파일","자바 컴파일러는 .java 소스 파일로부터 .class 파일을 생성한다."], // hint: The Java compiler writes .class files from .java source.
  "java launcher": ["java 런처","클래스 또는 모듈 실행","java 명령은 클래스 패스 또는 모듈 패스를 지정하여 JVM을 시작한다."], // hint: The java command starts the JVM with a class path or module path.
  "source files": ["소스 파일","파일당 하나의 public 클래스","public 최상위 클래스는 파일 이름과 동일한 이름을 사용해야 한다."], // hint: A public top-level class uses a matching file name.
  "main method": ["main 메서드","public static void main","main 메서드는 명령행 진입점으로 사용되는 관례적인 메서드다."], // hint: The main method is the conventional command-line entry point.
  "primitive types": ["기본형 타입","고정된 기본 값","기본형은 숫자, boolean, 또는 문자 값을 직접 저장한다."], // hint: Primitives store numeric, boolean, or character values directly.
  "variables": ["변수","타입이 선언된 저장소","자바 변수는 컴파일 시점에 검사되는 선언된 타입을 갖는다."], // hint: Java variables have a declared type checked at compile time.
  "operators": ["연산자","타입을 고려한 표현식","연산자는 우선순위와 타입 변환 규칙을 준수하면서 값을 결합한다."], // hint: Operators combine values while respecting precedence and type conversion rules.
  "control flow": ["제어 흐름","if, switch, 반복문","분기와 반복은 어떤 문장이 실행될지를 결정한다."], // hint: Branching and looping shape which statements run.
  "arrays": ["배열","고정 길이의 인덱스 저장소","배열은 하나의 컴포넌트 타입을 갖는 순서 있는 요소들을 저장한다."], // hint: Arrays keep ordered elements of one component type.
  "String": ["String","불변 텍스트 객체","String 값은 객체이며 제자리에서 변경할 수 없다."], // hint: String values are objects and cannot be changed in place.
  "methods": ["메서드","매개변수를 갖는 이름 있는 동작","메서드는 동작을 묶고 반환 타입 및 인수를 정의한다."], // hint: Methods group behavior and define return types and arguments.
  "packages": ["패키지","클래스의 네임스페이스","패키지는 클래스를 구성하고 이름 충돌을 방지한다."], // hint: Packages organize classes and avoid naming collisions.
  "access modifiers": ["접근 제어자","가시성 제어","public, protected, package-private, private은 접근을 제한한다."], // hint: public, protected, package-private, and private constrain access.
  "exceptions": ["예외","체크 또는 언체크 오류","예외는 오류 상황을 호출 스택 위로 전달한다."], // hint: Exceptions communicate error conditions up the call stack.
  "try-with-resources": ["try-with-resources","자동 자원 해제","AutoCloseable을 구현하는 자원은 블록 종료 후 안정적으로 닫힌다."], // hint: Resources implementing AutoCloseable close reliably after the block.
  "records": ["레코드","투명한 데이터 운반 객체","레코드는 생성된 멤버를 갖는 얕은 불변 데이터 운반 객체를 선언한다."], // hint: Records declare shallow immutable carriers with generated members.
  "jshell": ["jshell","대화형 자바 셸","JShell은 소규모 언어 및 API 예제를 탐색하는 데 유용하다."], // hint: JShell is useful for exploring small language and API examples.
  "classes and objects": ["클래스와 객체","설계도와 인스턴스","클래스는 상태와 동작을 정의하고, 객체는 런타임 인스턴스다."], // hint: A class defines state and behavior; an object is a runtime instance.
  "constructors": ["생성자","새 객체 초기화","생성자는 객체 생성 시점에 유효한 초기 상태를 설정한다."], // hint: Constructors establish valid object state at creation time.
  "inheritance": ["상속","기반 타입 확장","상속은 클래스 계층 구조를 통해 동작을 재사용하고 특화한다."], // hint: Inheritance reuses and specializes behavior through a class hierarchy.
  "interfaces": ["인터페이스","동작 계약","인터페이스는 하나의 구현 클래스를 요구하지 않고 기능을 정의한다."], // hint: Interfaces define capabilities without requiring one implementation class.
  "abstract classes": ["추상 클래스","부분 구현","추상 클래스는 구현을 공유하면서 필수 메서드를 열어 둔다."], // hint: Abstract classes share implementation while leaving required methods open.
  "polymorphism": ["다형성","상위 타입으로 객체 사용","다형성은 호출자가 안정적인 계약에 의존할 수 있게 한다."], // hint: Polymorphism lets callers depend on a stable contract.
  "generics": ["제네릭","매개변수화된 타입","제네릭은 재사용 가능한 코드에 컴파일 시점 타입 안전성을 추가한다."], // hint: Generics add compile-time type safety to reusable code.
  "collections framework": ["컬렉션 프레임워크","표준 데이터 컨테이너","컬렉션 프레임워크는 List, Set, Queue, Map 및 알고리즘을 제공한다."], // hint: The framework provides List, Set, Queue, Map, and algorithms.
  "List": ["List","순서 있는 시퀀스","List는 요소 순서를 보존하며, 구현에 따라 인덱스 접근을 지원한다."], // hint: Lists preserve element order and support indexed access where implemented.
  "Set": ["Set","중복 없는 원소 컬렉션","Set은 중복 없이 원소의 포함 여부를 모델링한다."], // hint: Sets model membership without duplicates.
  "Map": ["Map","키에서 값으로의 연관","Map은 고유한 키를 통해 값을 조회한다."], // hint: Maps lookup values by unique keys.
  "Queue and Deque": ["Queue와 Deque","순서 있는 작업 접근","Queue와 Deque는 FIFO, LIFO, 양방향 끝 패턴을 지원한다."], // hint: Queues and deques support FIFO, LIFO, and double-ended patterns.
  "iterators": ["이터레이터","제어된 순회","이터레이터는 내부 저장소를 노출하지 않고 컬렉션을 순회한다."], // hint: Iterators traverse collections without exposing internal storage.
  "equals and hashCode": ["equals와 hashCode","일관된 동등성 계약","해시 기반 컬렉션은 동등성과 해시 코드의 일관성에 의존한다."], // hint: Hash collections depend on equality and hash code consistency.
  "Comparable and Comparator": ["Comparable과 Comparator","정렬 순서 정의","Comparable은 자연 순서를 정의하고, Comparator는 외부 정렬 기준을 제공한다."], // hint: Comparable is natural order; Comparator is external ordering.
  "streams": ["스트림","선언적 대량 연산","스트림은 map, filter, reduce, collect 파이프라인을 표현한다."], // hint: Streams express map, filter, reduce, and collect pipelines.
  "Optional": ["Optional","명시적인 부재 표현","Optional은 null을 반환 신호로 사용하지 않고 값의 부재를 명시적으로 표현한다."], // hint: Optional represents absence without using null as a return signal.
  "immutable objects": ["불변 객체","생성 후 상태 변경 불가","불변성은 추론, 공유, 동시성을 단순화한다."], // hint: Immutability simplifies reasoning, sharing, and concurrency.
  "JVM bytecode": ["JVM 바이트코드","이식 가능한 명령 형식","JVM은 플랫폼에 관계없이 클래스 파일 바이트코드를 실행한다."], // hint: The JVM executes class-file bytecode across platforms.
  "classpath": ["클래스패스","레거시 코드 탐색 경로","클래스패스는 이름 없는 모듈 애플리케이션의 클래스와 자원을 찾는다."], // hint: The classpath locates classes and resources for unnamed-module applications.
  "module path": ["모듈 패스","JPMS 모듈 결정","모듈 패스는 명명된 모듈과 명시적 의존성을 해결한다."], // hint: The module path resolves named modules and explicit dependencies.
  "JPMS modules": ["JPMS 모듈","module-info.java","모듈은 exports, requires, 서비스 관계를 선언한다."], // hint: Modules declare exports, requires, and service relationships.
  "garbage collection": ["가비지 컬렉션","자동 메모리 회수","JVM은 가비지 컬렉터를 통해 도달 불가능한 객체의 메모리를 회수한다."], // hint: The JVM reclaims unreachable objects through collectors.
  "memory model": ["메모리 모델","happens-before 규칙","자바 메모리 모델은 스레드 간 가시성을 happens-before 규칙으로 정의한다."], // hint: The Java Memory Model defines visibility between threads.
  "threads": ["스레드","동시 실행 단위","스레드는 하나의 JVM 프로세스 안에서 작업을 동시에 실행한다."], // hint: Threads run tasks concurrently inside one JVM process.
  "virtual threads": ["가상 스레드","작업당 경량 스레드","가상 스레드는 블로킹 방식의 동시성이 많은 작업에서도 확장될 수 있게 한다."], // hint: Virtual threads make blocking-style concurrency scale for many tasks.
  "executors": ["익스큐터","태스크 실행 관리","익스큐터는 태스크 제출과 스레드 관리를 분리한다."], // hint: Executors decouple task submission from thread management.
  "synchronization": ["동기화","상호 배제와 가시성 보장","synchronized는 임계 영역을 보호하고 변경 사항을 게시한다."], // hint: synchronized protects critical sections and publishes changes.
  "atomics": ["원자 변수","락 없는 단일 변수 갱신","원자 클래스는 compare-and-set 기반의 조율을 제공한다."], // hint: Atomic classes provide compare-and-set based coordination.
  "concurrent collections": ["동시성 컬렉션","스레드 안전 컨테이너","공유 맵이나 큐를 수동으로 잠그는 대신 동시성 컬렉션을 사용한다."], // hint: Use concurrent collections instead of manually locking shared maps or queues.
  "CompletableFuture": ["CompletableFuture","비동기 완료 단계","CompletableFuture는 비동기 작업과 의존 콜백을 합성한다."], // hint: CompletableFuture composes async work and dependent callbacks.
  "NIO": ["NIO","버퍼, 채널, 셀렉터","NIO는 확장 가능하고 저수준의 I/O 패턴을 지원한다."], // hint: NIO supports scalable and lower-level I/O patterns.
  "HTTP Client": ["HTTP 클라이언트","표준 HTTP API","JDK HTTP 클라이언트는 동기 또는 비동기 요청을 전송한다."], // hint: The JDK HTTP client sends synchronous or asynchronous requests.
  "JFR": ["JFR","낮은 오버헤드 런타임 이벤트 기록","Java Flight Recorder는 프로덕션 진단 데이터를 캡처한다."], // hint: Java Flight Recorder captures production diagnostics.
  "unit testing": ["단위 테스트","자동화된 동작 검증","테스트는 API가 발전함에 따라 코드 동작을 보호한다."], // hint: Tests protect code behavior as APIs evolve.
  "date and time API": ["날짜 및 시간 API","java.time","레거시 Date와 Calendar 대신 java.time 타입을 사용한다."], // hint: Use java.time types instead of legacy Date and Calendar.
  "performance profiling": ["성능 프로파일링","핫 패스 측정","프로파일링은 CPU, 메모리 할당, 잠금, I/O 병목 지점을 드러낸다."], // hint: Profiling reveals CPU, allocation, locking, and I/O bottlenecks.
  "JFR and JMC": ["JFR과 JMC","런타임 이벤트 기록 및 분석","Flight Recording은 프로덕션 친화적인 진단을 지원한다."], // hint: Flight recordings support production-friendly diagnostics.
  "class data sharing": ["클래스 데이터 공유","공유 클래스 메타데이터 사전 로드","CDS는 시작 시간과 메모리 사용량을 줄일 수 있다."], // hint: CDS can reduce startup time and memory use.
  "preview features": ["프리뷰 기능","의도적으로 활성화","프리뷰 언어 또는 VM 기능은 명시적인 플래그와 마이그레이션 인식이 필요하다."], // hint: Preview language or VM features require explicit flags and migration awareness.
  "pattern matching": ["패턴 매칭","타입 안전 분해","패턴 매칭은 캐스팅과 분기 관련 반복 코드를 줄인다."], // hint: Pattern matching reduces casting and branching boilerplate.
  "TLS security": ["TLS 보안","보안 전송 설정","자바 애플리케이션은 올바른 트러스트 스토어, 프로토콜, 인증서 처리가 필요하다."], // hint: Java applications need correct trust stores, protocols, and certificate handling.
  "cryptography APIs": ["암호화 API","검증된 프로바이더 사용","암호화 기본 요소를 직접 구현하지 않는다."], // hint: Do not implement cryptographic primitives by hand.
  "foreign function and memory API": ["외부 함수 및 메모리 API","네이티브 상호운용 경계","FFM은 네이티브 라이브러리와 오프 힙 메모리에 대한 구조적 접근을 제공한다."], // hint: FFM gives structured access to native libraries and off-heap memory.
  "JNI boundaries": ["JNI 경계","네이티브 코드 위험","JNI를 잘못 사용하면 메모리 안전성과 이식성이 손상될 수 있다."], // hint: JNI can break memory safety and portability when misused.
  "Maven": ["Maven","선언적 프로젝트 모델","Maven은 의존성, 플러그인, 라이프사이클 단계를 표준화한다."], // hint: Maven standardizes dependencies, plugins, and lifecycle phases.
  "Gradle": ["Gradle","프로그래머블 빌드 자동화","Gradle은 태스크, 플러그인, 의존성 그래프로 빌드를 모델링한다."], // hint: Gradle models builds with tasks, plugins, and dependency graphs.
  "dependency management": ["의존성 관리","버전 및 스코프 제어","전이적 의존성과 취약점을 의도적으로 관리한다."], // hint: Manage transitive dependencies and vulnerabilities intentionally.
  "API design": ["API 설계","안정적인 계약","공개 API는 응집력 있고, 문서화되어 있으며, 오용하기 어렵게 설계해야 한다."], // hint: Public APIs should be cohesive, documented, and hard to misuse.
  "microservice integration": ["마이크로서비스 통합","네트워크 오류를 고려한 호출","원격 호출에는 타임아웃, 재시도, 멱등성이 필요하다."], // hint: Remote calls need timeouts, retries, and idempotency.
  "migration strategy": ["마이그레이션 전략","JDK 버전 간 테스트","업그레이드 계획은 소스, 의존성, 런타임 호환성을 분리하여 검토해야 한다."], // hint: Upgrade plans should separate source, dependency, and runtime compatibility.
  "binary compatibility": ["이진 호환성","링크 오류 방지","이진 호환성은 재컴파일 없이 사용되는 라이브러리에서 중요하다."], // hint: Binary compatibility matters for libraries used without recompilation.
  "jlink and jpackage": ["jlink와 jpackage","커스텀 런타임 및 인스톨러","패키징 도구는 런타임 크기를 줄이고 배포를 단순화한다."], // hint: Packaging tools reduce runtime size and simplify distribution.
  "production troubleshooting": ["프로덕션 트러블슈팅","로그, 덤프, 메트릭 통합 분석","스레드 덤프, 힙 덤프, JFR, 로그를 함께 활용한다."], // hint: Use thread dumps, heap dumps, JFR, and logs together.
};
