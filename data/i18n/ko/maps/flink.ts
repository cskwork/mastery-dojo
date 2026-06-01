import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for flink. Values start as English placeholders — translate to Korean.
export const flinkChrome: FactoryChromeKo = {
  metadata: {
    title: "FlinkDojo - Apache Flink 기초부터 전문가까지",
    description: "KanaDojo 스타일의 Apache Flink 드릴 — DataStream 기초부터 상태 기반 연산까지."
  },
  welcomeTitle: "FlinkDojo에 오신 것을 환영합니다!",
  welcomeBody: "FlinkDojo는 Apache Flink를 집중 드릴로 전환합니다. 입문 기초부터 전문가 역량까지 단계별로 익힌다.",
  subjectName: "Apache Flink",
  footerMeta: "커뮤니티 제작 ~ flink bloom ~ Apache Flink 공식 문서 기반 ~ v0.1.18 (알파)",
  cards: {
    "flink-foundations": { label: "기초", summary: "스트림, 시간, 윈도우" },
    "flink-sql-table": { label: "SQL", summary: "테이블, 커넥터, TVF" },
    "flink-state-ops": { label: "상태", summary: "상태, 체크포인트, 메트릭" },
    "flink-expertise": { label: "전문가", summary: "HA, 업그레이드, 인시던트" }
  },
  tracks: {
    "flink-foundations": { title: "Flink 기초", focus: "DataStream, Table API, 이벤트 시간, 체크포인트" },
    "flink-sql-table": { title: "Flink SQL과 Table", focus: "동적 테이블, 커넥터, 워터마크, 체인지로그" },
    "flink-state-ops": { title: "상태 기반 연산", focus: "상태, 체크포인트, 복구, 백프레셔, 메트릭" },
    "flink-expertise": { title: "Flink 전문가", focus: "이벤트 시간 정확성, 대용량 상태, HA, 업그레이드, 인시던트" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const flinkTopicsKo: Record<string, TopicKo> = {
  "DataStream API": ["DataStream API", "무한 또는 유한 스트림을 프로그래밍 방식으로 처리"], // hint: DataStream is the core stream processing API.
  "Table API": ["Table API", "스트림과 배치를 위한 관계형 표현식 API"], // hint: Table API provides expression-based relational processing.
  "Flink SQL": ["Flink SQL", "동적 테이블에 대한 SQL 질의"], // hint: Flink SQL lets stream jobs be expressed declaratively.
  "event time": ["이벤트 시간", "이벤트에 기록된 시간"], // hint: Event time supports correct results with out-of-order records.
  "processing time": ["처리 시간", "머신의 현재 시각"], // hint: Processing time is simple but less correct for delayed data.
  "watermarks": ["워터마크", "이벤트 시간 진행을 알리는 신호"], // hint: Watermarks tell Flink how far event time has advanced.
  "source": ["소스", "외부 데이터를 잡으로 수집"], // hint: Sources connect external systems to Flink pipelines.
  "sink": ["싱크", "잡 결과를 외부로 출력"], // hint: Sinks deliver processed records to external systems.
  "keyed streams": ["키 기반 스트림", "키로 파티셔닝"], // hint: Keying data makes state and timers scoped per key.
  "map filter flatMap": ["map filter flatMap", "기본 레코드 변환 연산자"], // hint: These operators transform, drop, or expand records.
  "windows": ["윈도우", "시간 또는 개수 기준으로 레코드 그룹화"], // hint: Windows produce bounded calculations over streams.
  "process function": ["프로세스 함수", "이벤트와 타이머를 저수준으로 제어"], // hint: Process functions expose state and timer APIs.
  "parallelism": ["병렬도", "오퍼레이터 서브태스크 수"], // hint: Parallelism controls throughput and resource usage.
  "task slots": ["태스크 슬롯", "실행 리소스 슬롯"], // hint: Task slots divide worker capacity among operator subtasks.
  "checkpoints": ["체크포인트", "일관된 복구 스냅샷"], // hint: Checkpoints let Flink restore state after failure.
  "savepoints": ["세이브포인트", "오퍼레이터가 직접 제어하는 스냅샷"], // hint: Savepoints support upgrades, migration, and planned restarts.
  "stateful functions": ["상태 함수", "레코드 간 상태 유지"], // hint: State lets jobs compute over history, not only one event.
  "connector basics": ["커넥터 기초", "외부 시스템 연동"], // hint: Connectors define how Flink reads and writes data.
  "dynamic tables": ["동적 테이블", "시간에 따라 변화하는 테이블"], // hint: Dynamic tables model streaming updates relationally.
  "SQL DDL": ["SQL DDL", "테이블과 커넥터 선언"], // hint: CREATE TABLE describes schema, connector, and options.
  "catalogs": ["카탈로그", "메타데이터 네임스페이스"], // hint: Catalogs organize databases, tables, and functions.
  "connectors": ["커넥터", "테이블의 배경 시스템"], // hint: Connectors bind tables to Kafka, files, JDBC, and other systems.
  "Kafka connector": ["Kafka 커넥터", "Kafka 토픽 읽기 또는 쓰기"], // hint: Kafka tables map topic records to rows.
  "file connector": ["파일 커넥터", "파일시스템 데이터 읽기 또는 쓰기"], // hint: File connectors support bounded or streaming file workloads.
  "time attributes": ["시간 속성", "이벤트 시간 또는 처리 시간 컬럼"], // hint: Time attributes drive windows and temporal joins.
  "watermark definition": ["워터마크 정의", "지연 허용 정책 선언"], // hint: SQL watermarks define event-time progress expressions.
  "window TVFs": ["윈도우 TVF", "테이블 값 윈도우 함수"], // hint: TVFs express tumble, hop, and cumulative windows.
  "joins": ["조인", "동적 테이블 결합"], // hint: Streaming joins need keys, time bounds, and state awareness.
  "aggregations": ["집계", "새 레코드 도착에 따라 갱신되는 요약 유지"], // hint: Aggregations produce updates as new records arrive.
  "UDFs": ["UDF", "사용자 정의 스칼라 또는 테이블 로직"], // hint: User-defined functions extend SQL when built-ins are not enough.
  "changelog streams": ["체인지로그 스트림", "삽입·갱신·삭제 메시지 스트림"], // hint: Dynamic tables translate to streams of changes.
  "upsert semantics": ["업서트 시맨틱", "키 기준 최신 행 유지"], // hint: Upsert sinks need keys to interpret updates.
  "primary keys": ["기본 키", "논리적 유일성 제약"], // hint: Keys help planners and sinks understand update semantics.
  "table stream conversion": ["테이블-스트림 변환", "DataStream과 Table API 연결"], // hint: Conversions let one job mix procedural and relational APIs.
  "statement sets": ["구문 집합", "여러 INSERT를 한 번에 제출"], // hint: Statement sets optimize and run related SQL inserts together.
  "query explain": ["쿼리 실행 계획 확인", "최적화된 플랜 검토"], // hint: Explain output helps validate join and state behavior.
  "keyed state": ["키 기반 상태", "키로 파티셔닝된 상태"], // hint: Keyed state scales with keyed streams and restores by key group.
  "operator state": ["오퍼레이터 상태", "오퍼레이터 서브태스크에 범위가 지정된 상태"], // hint: Operator state supports source offsets and custom partitioned state.
  "state backend": ["상태 백엔드", "상태 저장 엔진"], // hint: Backends define how state is stored and checkpointed.
  "RocksDB state backend": ["RocksDB 상태 백엔드", "임베디드 영구 키-값 상태 저장소"], // hint: RocksDB supports large state beyond heap memory.
  "ForSt state backend": ["ForSt 상태 백엔드", "파일 지향 상태 백엔드"], // hint: ForSt targets disaggregated and large-state use cases.
  "checkpoint storage": ["체크포인트 스토리지", "내구성 있는 스냅샷 저장 위치"], // hint: Checkpoint storage must survive task and manager failures.
  "checkpoint alignment": ["체크포인트 정렬", "일관된 배리어 조율"], // hint: Alignment keeps operator state consistent across inputs.
  "unaligned checkpoints": ["비정렬 체크포인트", "전송 중인 데이터를 포함한 스냅샷"], // hint: Unaligned checkpoints help under backpressure.
  "savepoint restore": ["세이브포인트 복원", "계획된 스냅샷에서 재개"], // hint: Restore needs compatible operator IDs and state schemas.
  "exactly-once": ["정확히 한 번(exactly-once)", "상태와 싱크 커밋의 일관성 보장"], // hint: Exactly-once depends on checkpoints and compatible sinks.
  "restart strategies": ["재시작 전략", "장애 재시도 동작 정의"], // hint: Restart policy controls when failed jobs recover or stop.
  "timers": ["타이머", "키별 미래 콜백 예약"], // hint: Timers support time-based state cleanup and logic.
  "side outputs": ["사이드 출력", "보조 스트림 방출"], // hint: Side outputs route late, invalid, or special records separately.
  "broadcast state": ["브로드캐스트 상태", "공유 제어 데이터를 모든 서브태스크에 배포"], // hint: Broadcast state applies rule updates to all parallel subtasks.
  "async I/O": ["비동기 I/O", "블로킹 없는 외부 호출"], // hint: Async I/O prevents slow services from blocking processing threads.
  "backpressure monitoring": ["백프레셔 모니터링", "다운스트림 처리 지연 감지"], // hint: Backpressure shows where throughput is constrained.
  "metrics": ["메트릭", "잡 및 오퍼레이터 상태 관찰"], // hint: Metrics drive alerts, dashboards, and capacity decisions.
  "rescaling": ["리스케일링", "상태를 유지한 채 병렬도 변경"], // hint: Rescaling redistributes state and requires compatible snapshots.
  "event-time correctness": ["이벤트 시간 정확성", "이벤트 클록 기반의 올바른 결과 도출"], // hint: Correct streaming logic must handle disorder and late data.
  "watermark alignment": ["워터마크 정렬", "소스 진행률 조율"], // hint: Alignment prevents one source from racing far ahead.
  "state TTL": ["상태 TTL", "오래된 상태 만료"], // hint: TTL limits state growth and stale data exposure.
  "large state tuning": ["대용량 상태 튜닝", "체크포인트 및 백엔드 동작 최적화"], // hint: Large state needs tuned backend, storage, and checkpoint settings.
  "incremental checkpointing": ["증분 체크포인트", "변경분만 저장"], // hint: Incremental snapshots reduce checkpoint cost for large state.
  "two-phase commit sinks": ["2단계 커밋 싱크", "체크포인트와 함께 커밋"], // hint: Two-phase commit sinks support exactly-once external writes.
  "Kafka transactional sink": ["Kafka 트랜잭셔널 싱크", "체크포인트와 조율된 Kafka 커밋"], // hint: Kafka sink transactions align output with checkpoints.
  "schema evolution": ["스키마 진화", "상태와 레코드를 안전하게 변경"], // hint: Evolution needs compatibility for serializers, state, and downstream consumers.
  "multi-job architecture": ["멀티 잡 아키텍처", "의도적으로 파이프라인 분리 구성"], // hint: Splitting jobs changes isolation, latency, and recovery behavior.
  "high availability": ["고가용성", "매니저와 잡 복구"], // hint: HA protects control-plane state and job continuity.
  "Kubernetes operator": ["Kubernetes 오퍼레이터", "Flink 앱을 선언적으로 관리"], // hint: The operator automates deployment, upgrades, and savepoint flows.
  "deployment modes": ["배포 모드", "세션·애플리케이션·퍼-잡 클러스터"], // hint: Mode choice affects isolation, startup time, and resource management.
  "SQL Gateway": ["SQL Gateway", "SQL을 원격으로 제출 및 관리"], // hint: SQL Gateway provides service access for SQL clients.
  "resource tuning": ["리소스 튜닝", "CPU·메모리·네트워크 적정 규모 설정"], // hint: Flink performance depends on balanced resources and parallelism.
  "fault injection": ["장애 주입", "복구 동작 검증"], // hint: Injected failures validate checkpointing and restart assumptions.
  "upgrade strategy": ["업그레이드 전략", "세이브포인트와 호환성 계획"], // hint: Upgrades should preserve state and provide rollback.
  "incident response": ["인시던트 대응", "지연·백프레셔·장애 트리아지"], // hint: Incidents need metrics, logs, checkpoints, and topology context.
  "data contract governance": ["데이터 컨트랙트 거버넌스", "스키마와 시맨틱 통제"], // hint: Governance prevents incompatible upstream changes from breaking jobs.
};
