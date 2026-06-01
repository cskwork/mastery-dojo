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
  "SparkSession": ["SparkSession", "Spark API의 진입점"], // hint: SparkSession creates DataFrames, SQL views, and runtime configuration.
  "DataFrame": ["데이터프레임", "스키마가 있는 분산 테이블"], // hint: DataFrames are the main structured API for Spark work.
  "Dataset": ["Dataset", "JVM 타입 안전 구조적 데이터"], // hint: Datasets add compile-time types in JVM languages.
  "RDD": ["RDD", "저수준 분산 컬렉션"], // hint: RDDs expose partitions and transformations under higher-level APIs.
  "transformations": ["트랜스포메이션", "지연 실행되는 데이터셋 연산"], // hint: Transformations build a logical plan without immediate execution.
  "actions": ["액션", "실행을 트리거하는 연산"], // hint: Actions materialize results or write output.
  "lazy evaluation": ["지연 평가", "필요할 때만 실행"], // hint: Spark optimizes the full plan before running a job.
  "schema": ["스키마", "컬럼 이름과 데이터 타입"], // hint: Schemas control parsing, validation, and query planning.
  "select and filter": ["select와 filter", "컬럼 선택 및 행 필터링"], // hint: These are the basic DataFrame shaping operations.
  "withColumn": ["withColumn", "컬럼 추가 또는 교체"], // hint: withColumn creates a new DataFrame expression.
  "aggregations": ["집계", "데이터 그룹화 및 요약"], // hint: Aggregates compute counts, sums, and other summaries per group.
  "joins": ["조인", "조건으로 데이터프레임 결합"], // hint: Join choice affects shuffle, memory, and correctness.
  "SQL temp views": ["SQL 임시 뷰", "SQL로 데이터프레임 쿼리"], // hint: Temp views expose DataFrames to Spark SQL.
  "file sources": ["파일 소스", "Parquet·CSV·JSON·텍스트 읽기"], // hint: Spark reads common data formats through DataFrame readers.
  "partitioning": ["파티셔닝", "작업을 태스크로 분할"], // hint: Partitions determine parallelism and data movement.
  "cache and persist": ["캐시와 퍼시스트", "계산 결과 재사용"], // hint: Caching helps repeated reads when memory cost is justified.
  "explain plans": ["실행 계획 확인", "논리적·물리적 계획 검사"], // hint: Explain output shows how Spark will execute a query.
  "spark-submit": ["spark-submit", "애플리케이션 제출"], // hint: spark-submit launches packaged applications on a cluster or locally.
  "Catalyst optimizer": ["Catalyst 옵티마이저", "쿼리 실행 계획 최적화"], // hint: Catalyst rewrites and plans structured queries.
  "whole-stage codegen": ["전체 스테이지 코드 생성", "최적화된 JVM 코드 생성"], // hint: Code generation speeds many SQL operators.
  "shuffle": ["셔플", "파티션 간 데이터 재분배"], // hint: Shuffles are expensive and often dominate job runtime.
  "broadcast join": ["브로드캐스트 조인", "소형 테이블을 익스큐터에 전송"], // hint: Broadcast joins avoid shuffling the large side.
  "sort-merge join": ["소트-머지 조인", "셔플 후 정렬하여 병합"], // hint: Sort-merge joins handle large equi-joins.
  "window functions": ["윈도우 함수", "정렬된 파티션에서 계산"], // hint: Window functions preserve row detail while adding context.
  "UDF vs built-in functions": ["UDF vs 내장 함수", "가능하면 내장 함수 우선 사용"], // hint: Built-ins are optimized better than opaque user-defined functions.
  "Parquet": ["Parquet", "컬럼형 저장 형식"], // hint: Parquet is efficient for analytics and predicate pruning.
  "ORC": ["ORC", "컬럼형 저장 형식"], // hint: ORC is another optimized analytics file format.
  "ANSI SQL mode": ["ANSI SQL 모드", "더 엄격한 SQL 동작"], // hint: ANSI mode changes error and type coercion semantics.
  "null semantics": ["null 시맨틱", "3값 SQL 논리"], // hint: NULL affects comparisons, joins, and aggregations.
  "adaptive query execution": ["적응형 쿼리 실행", "런타임 통계 기반 최적화"], // hint: AQE adjusts plans using runtime statistics.
  "bucketing": ["버킷팅", "키 기준 데이터 사전 클러스터링"], // hint: Bucketing can reduce shuffle for matching joins.
  "repartition": ["repartition", "파티션 수 증가 또는 재구성"], // hint: Repartition triggers a shuffle to change distribution.
  "coalesce": ["coalesce", "파티션 수 축소"], // hint: Coalesce narrows partition count without a full shuffle when possible.
  "skew handling": ["스큐 처리", "파티션 크기 불균형 완화"], // hint: Skew causes slow tasks and needs salting or AQE support.
  "Spark Connect": ["Spark Connect", "클라이언트-서버 Spark 프로토콜"], // hint: Connect separates client applications from the Spark driver.
  "DataFrame testing": ["데이터프레임 테스트", "스키마와 행 비교 검증"], // hint: Reliable tests validate transformations on small representative data.
  "Structured Streaming": ["구조적 스트리밍", "증분 데이터프레임 실행"], // hint: Streaming queries reuse DataFrame and SQL semantics continuously.
  "readStream": ["readStream", "스트리밍 입력 정의"], // hint: readStream creates an unbounded input DataFrame.
  "writeStream": ["writeStream", "스트리밍 출력 정의"], // hint: writeStream starts or configures streaming sinks.
  "output modes": ["출력 모드", "append·update·complete"], // hint: Output mode controls which rows are emitted per trigger.
  "triggers": ["트리거", "처리 주기 제어"], // hint: Triggers decide when micro-batches or continuous processing happen.
  "checkpoints": ["체크포인트", "진행 상황과 상태 저장"], // hint: Checkpoints are required for recovery and exactly-once coordination.
  "watermarks": ["워터마크", "늦은 데이터 상태 범위 제한"], // hint: Watermarks let Spark drop state older than an event-time threshold.
  "event time": ["이벤트 타임", "데이터에 내장된 시간"], // hint: Event time is the right clock for late-arriving stream records.
  "stateful aggregations": ["상태 집계", "트리거 간 상태 유지"], // hint: State supports running counts, windows, and joins.
  "stream-stream joins": ["스트림-스트림 조인", "두 개의 무한 입력 조인"], // hint: Watermarks and time constraints keep join state bounded.
  "foreachBatch": ["foreachBatch", "커스텀 배치 싱크 로직"], // hint: foreachBatch lets each micro-batch use batch APIs.
  "Kafka source": ["Kafka 소스", "Kafka 토픽 컨슘"], // hint: Structured Streaming can read Kafka records as streaming DataFrames.
  "Kafka sink": ["Kafka 싱크", "행을 Kafka에 쓰기"], // hint: Streaming output to Kafka needs topic, key, and value handling.
  "exactly-once caveat": ["정확히 한 번 주의사항", "싱크 동작이 보장 수준을 결정"], // hint: End-to-end guarantees depend on the sink and idempotency.
  "query progress": ["쿼리 진행 현황", "스트리밍 메트릭 확인"], // hint: Progress events reveal input rate, processing rate, and state size.
  "RocksDB state store": ["RocksDB 상태 저장소", "외부화된 상태 백엔드"], // hint: RocksDB helps large streaming state workloads.
  "late data": ["늦은 데이터", "예상 이벤트 타임 이후 도착 레코드"], // hint: Late data handling depends on watermark and output mode.
  "stream recovery": ["스트림 복구", "체크포인트에서 재시작"], // hint: Recovery must reuse the same checkpoint and compatible query plan.
  "cluster managers": ["클러스터 매니저", "Standalone·YARN·Kubernetes·Mesos"], // hint: Cluster managers allocate executors and resources.
  "deployment modes": ["배포 모드", "클라이언트 또는 클러스터 드라이버 위치"], // hint: Driver location affects networking, logs, and failure behavior.
  "driver and executor": ["드라이버와 익스큐터", "코디네이터와 워커"], // hint: The driver plans work; executors run tasks and store data.
  "memory tuning": ["메모리 튜닝", "실행·스토리지·오버헤드 메모리 균형"], // hint: Spark memory settings must match workload and cluster limits.
  "dynamic allocation": ["동적 할당", "수요에 따라 익스큐터 수 조정"], // hint: Dynamic allocation changes executor count during a job.
  "fair scheduler": ["공정 스케줄러", "풀 간 클러스터 자원 공유"], // hint: Fair scheduling prevents one workload from monopolizing resources.
  "Spark UI": ["Spark UI", "잡·스테이지·태스크·SQL 검사"], // hint: The UI is the primary runtime diagnostic surface.
  "event logs": ["이벤트 로그", "애플리케이션 이력 저장"], // hint: Event logs allow post-run inspection through the History Server.
  "History Server": ["History Server", "완료된 애플리케이션 조회"], // hint: The History Server reads event logs after applications finish.
  "metrics": ["메트릭", "런타임 측정값 내보내기"], // hint: Metrics support alerting and capacity decisions.
  "packaging jobs": ["잡 패키징", "코드와 의존성 묶음"], // hint: Job packaging must avoid dependency conflicts and missing classes.
  "dependency isolation": ["의존성 격리", "애플리케이션 라이브러리 분리"], // hint: Isolation prevents classpath conflicts between jobs.
  "Kubernetes deployment": ["Kubernetes 배포", "Kubernetes에서 Spark 실행"], // hint: Kubernetes mode needs images, service accounts, volumes, and resource limits.
  "security": ["보안", "인증·인가·암호화"], // hint: Secure clusters protect data, UI, and shuffle communication.
  "cost optimization": ["비용 최적화", "컴퓨트와 스토리지 적정 규모 설정"], // hint: Cost work reduces wasted cores, memory, and retries.
  "production pipelines": ["프로덕션 파이프라인", "오케스트레이션된 안정적인 잡"], // hint: Pipelines need scheduling, retries, data contracts, and alerts.
  "data quality": ["데이터 품질", "입출력 유효성 검증"], // hint: Quality checks catch bad data before downstream damage.
  "version upgrades": ["버전 업그레이드", "API·실행 계획·커넥터 테스트"], // hint: Spark upgrades can change behavior, dependencies, and performance.
};
