import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for spark. Values start as English placeholders — translate to Korean.
export const sparkChrome: FactoryChromeKo = {
  metadata: {
    title: "SparkDojo - Apache Spark 기초부터 전문가까지",
    description: "KanaDojo 스타일의 Apache Spark 드릴 — 데이터프레임부터 프로덕션 파이프라인까지."
  },
  welcomeTitle: "SparkDojo에 오신 것을 환영합니다!",
  welcomeBody: "SparkDojo는 Apache Spark를 집중 드릴로 익히는 학습 플랫폼입니다. 기초 개념부터 전문가 수준까지 단계별로 훈련합니다.",
  subjectName: "Apache Spark",
  footerMeta: "커뮤니티 제작 ~ spark bloom ~ Apache Spark 공식 문서 기반 ~ v0.1.18 (알파)",
  cards: {
    "spark-foundations": { label: "기초", summary: "세션, 프레임, 실행 계획" },
    "spark-sql": { label: "SQL", summary: "조인, 파일, 옵티마이저" },
    "spark-streaming": { label: "스트리밍", summary: "상태, 워터마크, Kafka" },
    "spark-operations": { label: "운영", summary: "클러스터, UI, 업그레이드" }
  },
  tracks: {
    "spark-foundations": { title: "Spark 기초", focus: "SparkSession, 데이터프레임, SQL, 지연 실행" },
    "spark-sql": { title: "Spark SQL", focus: "옵티마이저, 조인, 파일, 함수, Spark Connect" },
    "spark-streaming": { title: "구조적 스트리밍", focus: "스트림, 체크포인트, 워터마크, 상태, Kafka" },
    "spark-operations": { title: "Spark 운영", focus: "클러스터, 메모리, UI, 보안, 프로덕션 파이프라인" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const sparkTopicsKo: Record<string, TopicKo> = {
  "SparkSession": ["SparkSession","Spark API의 진입점","SparkSession은 DataFrame, SQL 뷰, 런타임 설정을 생성하는 Spark API의 진입점이다."], // hint: SparkSession creates DataFrames, SQL views, and runtime configuration.
  "DataFrame": ["데이터프레임","스키마가 있는 분산 테이블","DataFrame은 Spark 작업의 주요 구조적 API다."], // hint: DataFrames are the main structured API for Spark work.
  "Dataset": ["Dataset","JVM 타입 안전 구조적 데이터","Dataset은 JVM 언어에서 컴파일 타임 타입을 추가한다."], // hint: Datasets add compile-time types in JVM languages.
  "RDD": ["RDD","저수준 분산 컬렉션","RDD는 상위 레벨 API 아래에서 파티션과 트랜스포메이션을 노출한다."], // hint: RDDs expose partitions and transformations under higher-level APIs.
  "transformations": ["트랜스포메이션","지연 실행되는 데이터셋 연산","트랜스포메이션은 즉시 실행되지 않고 논리적 계획을 구성한다."], // hint: Transformations build a logical plan without immediate execution.
  "actions": ["액션","실행을 트리거하는 연산","액션은 결과를 구체화하거나 출력을 기록한다."], // hint: Actions materialize results or write output.
  "lazy evaluation": ["지연 평가","필요할 때만 실행","Spark는 잡을 실행하기 전에 전체 계획을 최적화한다."], // hint: Spark optimizes the full plan before running a job.
  "schema": ["스키마","컬럼 이름과 데이터 타입","스키마는 파싱, 유효성 검사, 쿼리 계획을 제어한다."], // hint: Schemas control parsing, validation, and query planning.
  "select and filter": ["select와 filter","컬럼 선택 및 행 필터링","select와 filter는 DataFrame의 기본 형변환 연산이다."], // hint: These are the basic DataFrame shaping operations.
  "withColumn": ["withColumn","컬럼 추가 또는 교체","withColumn은 새로운 DataFrame 표현식을 생성한다."], // hint: withColumn creates a new DataFrame expression.
  "aggregations": ["집계","데이터 그룹화 및 요약","집계는 그룹별로 개수, 합계 등의 요약값을 계산한다."], // hint: Aggregates compute counts, sums, and other summaries per group.
  "joins": ["조인","조건으로 데이터프레임 결합","조인 선택은 셔플, 메모리, 정확성에 영향을 미친다."], // hint: Join choice affects shuffle, memory, and correctness.
  "SQL temp views": ["SQL 임시 뷰","SQL로 데이터프레임 쿼리","임시 뷰는 DataFrame을 Spark SQL에 노출한다."], // hint: Temp views expose DataFrames to Spark SQL.
  "file sources": ["파일 소스","Parquet·CSV·JSON·텍스트 읽기","Spark는 DataFrame reader를 통해 일반적인 데이터 형식을 읽는다."], // hint: Spark reads common data formats through DataFrame readers.
  "partitioning": ["파티셔닝","작업을 태스크로 분할","파티션은 병렬성과 데이터 이동을 결정한다."], // hint: Partitions determine parallelism and data movement.
  "cache and persist": ["캐시와 퍼시스트","계산 결과 재사용","캐싱은 메모리 비용이 정당할 때 반복 읽기에 도움이 된다."], // hint: Caching helps repeated reads when memory cost is justified.
  "explain plans": ["실행 계획 확인","논리적·물리적 계획 검사","EXPLAIN 출력은 Spark가 쿼리를 어떻게 실행할지 보여준다."], // hint: Explain output shows how Spark will execute a query.
  "spark-submit": ["spark-submit","애플리케이션 제출","spark-submit은 패키징된 애플리케이션을 클러스터 또는 로컬에서 실행한다."], // hint: spark-submit launches packaged applications on a cluster or locally.
  "Catalyst optimizer": ["Catalyst 옵티마이저","쿼리 실행 계획 최적화","Catalyst는 구조적 쿼리를 재작성하고 계획을 수립한다."], // hint: Catalyst rewrites and plans structured queries.
  "whole-stage codegen": ["전체 스테이지 코드 생성","최적화된 JVM 코드 생성","코드 생성은 많은 SQL 연산자의 속도를 향상시킨다."], // hint: Code generation speeds many SQL operators.
  "shuffle": ["셔플","파티션 간 데이터 재분배","셔플은 비용이 많이 들며 잡 실행 시간을 지배하는 경우가 많다."], // hint: Shuffles are expensive and often dominate job runtime.
  "broadcast join": ["브로드캐스트 조인","소형 테이블을 익스큐터에 전송","브로드캐스트 조인은 큰 쪽 테이블의 셔플을 피한다."], // hint: Broadcast joins avoid shuffling the large side.
  "sort-merge join": ["소트-머지 조인","셔플 후 정렬하여 병합","소트-머지 조인은 대규모 등가 조인을 처리한다."], // hint: Sort-merge joins handle large equi-joins.
  "window functions": ["윈도우 함수","정렬된 파티션에서 계산","윈도우 함수는 행 단위 세부 정보를 유지하면서 컨텍스트를 추가한다."], // hint: Window functions preserve row detail while adding context.
  "UDF vs built-in functions": ["UDF vs 내장 함수","가능하면 내장 함수 우선 사용","내장 함수는 불투명한 UDF보다 더 잘 최적화된다."], // hint: Built-ins are optimized better than opaque user-defined functions.
  "Parquet": ["Parquet","컬럼형 저장 형식","Parquet은 분석 작업과 프리디케이트 푸시다운에 효율적이다."], // hint: Parquet is efficient for analytics and predicate pruning.
  "ORC": ["ORC","컬럼형 저장 형식","ORC는 최적화된 또 다른 분석용 파일 형식이다."], // hint: ORC is another optimized analytics file format.
  "ANSI SQL mode": ["ANSI SQL 모드","더 엄격한 SQL 동작","ANSI 모드는 오류 처리 및 타입 강제 변환 시맨틱을 변경한다."], // hint: ANSI mode changes error and type coercion semantics.
  "null semantics": ["null 시맨틱","3값 SQL 논리","NULL은 비교, 조인, 집계에 영향을 미친다."], // hint: NULL affects comparisons, joins, and aggregations.
  "adaptive query execution": ["적응형 쿼리 실행","런타임 통계 기반 최적화","AQE는 런타임 통계를 사용하여 실행 계획을 조정한다."], // hint: AQE adjusts plans using runtime statistics.
  "bucketing": ["버킷팅","키 기준 데이터 사전 클러스터링","버킷팅은 일치하는 조인의 셔플을 줄일 수 있다."], // hint: Bucketing can reduce shuffle for matching joins.
  "repartition": ["repartition","파티션 수 증가 또는 재구성","repartition은 분포를 변경하기 위해 셔플을 트리거한다."], // hint: Repartition triggers a shuffle to change distribution.
  "coalesce": ["coalesce","파티션 수 축소","coalesce는 가능한 경우 전체 셔플 없이 파티션 수를 줄인다."], // hint: Coalesce narrows partition count without a full shuffle when possible.
  "skew handling": ["스큐 처리","파티션 크기 불균형 완화","스큐는 느린 태스크를 유발하며 솔팅 또는 AQE 지원이 필요하다."], // hint: Skew causes slow tasks and needs salting or AQE support.
  "Spark Connect": ["Spark Connect","클라이언트-서버 Spark 프로토콜","Spark Connect는 클라이언트 애플리케이션을 Spark 드라이버로부터 분리한다."], // hint: Connect separates client applications from the Spark driver.
  "DataFrame testing": ["데이터프레임 테스트","스키마와 행 비교 검증","신뢰할 수 있는 테스트는 소규모 대표 데이터로 트랜스포메이션을 검증한다."], // hint: Reliable tests validate transformations on small representative data.
  "Structured Streaming": ["구조적 스트리밍","증분 데이터프레임 실행","스트리밍 쿼리는 DataFrame 및 SQL 시맨틱을 지속적으로 재사용한다."], // hint: Streaming queries reuse DataFrame and SQL semantics continuously.
  "readStream": ["readStream","스트리밍 입력 정의","readStream은 무한한 입력 DataFrame을 생성한다."], // hint: readStream creates an unbounded input DataFrame.
  "writeStream": ["writeStream","스트리밍 출력 정의","writeStream은 스트리밍 싱크를 시작하거나 설정한다."], // hint: writeStream starts or configures streaming sinks.
  "output modes": ["출력 모드","append·update·complete","출력 모드는 트리거당 어떤 행이 방출될지를 제어한다."], // hint: Output mode controls which rows are emitted per trigger.
  "triggers": ["트리거","처리 주기 제어","트리거는 마이크로배치 또는 연속 처리가 언제 발생할지를 결정한다."], // hint: Triggers decide when micro-batches or continuous processing happen.
  "checkpoints": ["체크포인트","진행 상황과 상태 저장","체크포인트는 복구와 정확히 한 번 처리 조율에 필수적이다."], // hint: Checkpoints are required for recovery and exactly-once coordination.
  "watermarks": ["워터마크","늦은 데이터 상태 범위 제한","워터마크는 이벤트 타임 임계값보다 오래된 상태를 Spark가 삭제할 수 있게 한다."], // hint: Watermarks let Spark drop state older than an event-time threshold.
  "event time": ["이벤트 타임","데이터에 내장된 시간","이벤트 타임은 늦게 도착하는 스트림 레코드에 적합한 기준 시각이다."], // hint: Event time is the right clock for late-arriving stream records.
  "stateful aggregations": ["상태 집계","트리거 간 상태 유지","상태는 실행 중인 개수, 윈도우, 조인을 지원한다."], // hint: State supports running counts, windows, and joins.
  "stream-stream joins": ["스트림-스트림 조인","두 개의 무한 입력 조인","워터마크와 시간 제약으로 조인 상태를 유한하게 유지한다."], // hint: Watermarks and time constraints keep join state bounded.
  "foreachBatch": ["foreachBatch","커스텀 배치 싱크 로직","foreachBatch는 각 마이크로배치에서 배치 API를 사용할 수 있게 한다."], // hint: foreachBatch lets each micro-batch use batch APIs.
  "Kafka source": ["Kafka 소스","Kafka 토픽 컨슘","구조적 스트리밍은 Kafka 레코드를 스트리밍 DataFrame으로 읽을 수 있다."], // hint: Structured Streaming can read Kafka records as streaming DataFrames.
  "Kafka sink": ["Kafka 싱크","행을 Kafka에 쓰기","Kafka로의 스트리밍 출력은 토픽, 키, 값 처리가 필요하다."], // hint: Streaming output to Kafka needs topic, key, and value handling.
  "exactly-once caveat": ["정확히 한 번 주의사항","싱크 동작이 보장 수준을 결정","종단 간 보장은 싱크의 동작과 멱등성에 따라 달라진다."], // hint: End-to-end guarantees depend on the sink and idempotency.
  "query progress": ["쿼리 진행 현황","스트리밍 메트릭 확인","progress 이벤트는 입력 속도, 처리 속도, 상태 크기를 나타낸다."], // hint: Progress events reveal input rate, processing rate, and state size.
  "RocksDB state store": ["RocksDB 상태 저장소","외부화된 상태 백엔드","RocksDB는 대규모 스트리밍 상태 워크로드에 도움이 된다."], // hint: RocksDB helps large streaming state workloads.
  "late data": ["늦은 데이터","예상 이벤트 타임 이후 도착 레코드","늦은 데이터 처리는 워터마크와 출력 모드에 따라 달라진다."], // hint: Late data handling depends on watermark and output mode.
  "stream recovery": ["스트림 복구","체크포인트에서 재시작","복구 시 동일한 체크포인트와 호환 가능한 쿼리 계획을 재사용해야 한다."], // hint: Recovery must reuse the same checkpoint and compatible query plan.
  "cluster managers": ["클러스터 매니저","Standalone·YARN·Kubernetes·Mesos","클러스터 매니저는 익스큐터와 리소스를 할당한다."], // hint: Cluster managers allocate executors and resources.
  "deployment modes": ["배포 모드","클라이언트 또는 클러스터 드라이버 위치","드라이버 위치는 네트워킹, 로그, 장애 동작에 영향을 미친다."], // hint: Driver location affects networking, logs, and failure behavior.
  "driver and executor": ["드라이버와 익스큐터","코디네이터와 워커","드라이버는 작업을 계획하고, 익스큐터는 태스크를 실행하며 데이터를 저장한다."], // hint: The driver plans work; executors run tasks and store data.
  "memory tuning": ["메모리 튜닝","실행·스토리지·오버헤드 메모리 균형","Spark 메모리 설정은 워크로드와 클러스터 한도에 맞게 조정해야 한다."], // hint: Spark memory settings must match workload and cluster limits.
  "dynamic allocation": ["동적 할당","수요에 따라 익스큐터 수 조정","동적 할당은 잡 실행 중 익스큐터 수를 변경한다."], // hint: Dynamic allocation changes executor count during a job.
  "fair scheduler": ["공정 스케줄러","풀 간 클러스터 자원 공유","공정 스케줄링은 한 워크로드가 리소스를 독점하는 것을 방지한다."], // hint: Fair scheduling prevents one workload from monopolizing resources.
  "Spark UI": ["Spark UI","잡·스테이지·태스크·SQL 검사","Spark UI는 런타임의 주요 진단 인터페이스다."], // hint: The UI is the primary runtime diagnostic surface.
  "event logs": ["이벤트 로그","애플리케이션 이력 저장","이벤트 로그는 History Server를 통해 사후 검사를 가능하게 한다."], // hint: Event logs allow post-run inspection through the History Server.
  "History Server": ["History Server","완료된 애플리케이션 조회","History Server는 애플리케이션 종료 후 이벤트 로그를 읽는다."], // hint: The History Server reads event logs after applications finish.
  "metrics": ["메트릭","런타임 측정값 내보내기","메트릭은 경보 및 용량 계획 결정을 지원한다."], // hint: Metrics support alerting and capacity decisions.
  "packaging jobs": ["잡 패키징","코드와 의존성 묶음","잡 패키징은 의존성 충돌과 누락된 클래스를 피해야 한다."], // hint: Job packaging must avoid dependency conflicts and missing classes.
  "dependency isolation": ["의존성 격리","애플리케이션 라이브러리 분리","격리는 잡 간의 클래스패스 충돌을 방지한다."], // hint: Isolation prevents classpath conflicts between jobs.
  "Kubernetes deployment": ["Kubernetes 배포","Kubernetes에서 Spark 실행","Kubernetes 모드는 이미지, 서비스 계정, 볼륨, 리소스 한도 설정이 필요하다."], // hint: Kubernetes mode needs images, service accounts, volumes, and resource limits.
  "security": ["보안","인증·인가·암호화","보안이 적용된 클러스터는 데이터, UI, 셔플 통신을 보호한다."], // hint: Secure clusters protect data, UI, and shuffle communication.
  "cost optimization": ["비용 최적화","컴퓨트와 스토리지 적정 규모 설정","비용 작업은 낭비되는 코어, 메모리, 재시도를 줄인다."], // hint: Cost work reduces wasted cores, memory, and retries.
  "production pipelines": ["프로덕션 파이프라인","오케스트레이션된 안정적인 잡","파이프라인에는 스케줄링, 재시도, 데이터 계약, 알림이 필요하다."], // hint: Pipelines need scheduling, retries, data contracts, and alerts.
  "data quality": ["데이터 품질","입출력 유효성 검증","품질 검사는 하위 파이프라인에 손상이 발생하기 전에 잘못된 데이터를 감지한다."], // hint: Quality checks catch bad data before downstream damage.
  "version upgrades": ["버전 업그레이드","API·실행 계획·커넥터 테스트","Spark 업그레이드는 동작, 의존성, 성능을 변경할 수 있다."], // hint: Spark upgrades can change behavior, dependencies, and performance.
};
