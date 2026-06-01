import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for kafka. Values start as English placeholders — translate to Korean.
export const kafkaChrome: FactoryChromeKo = {
  metadata: {
    title: "KafkaDojo - Apache Kafka 기초부터 전문가까지",
    description: "KanaDojo 스타일의 Apache Kafka 드릴 — 토픽 기초부터 프로덕션 스트림 플랫폼까지."
  },
  welcomeTitle: "KafkaDojo에 오신 것을 환영합니다!",
  welcomeBody: "KafkaDojo는 Apache Kafka를 단계별 드릴로 익히는 학습 플랫폼입니다. 초급 기초부터 전문가 수준까지 집중적으로 다룹니다.",
  subjectName: "Apache Kafka",
  footerMeta: "커뮤니티 제작 ~ kafka bloom ~ Apache Kafka 공식 문서 기반 ~ v0.1.18 (알파)",
  cards: {
    "kafka-foundations": { label: "기초", summary: "토픽, 오프셋, 그룹" },
    "kafka-streaming": { label: "스트림", summary: "프로듀서, Connect, DSL" },
    "kafka-operations": { label: "운영", summary: "KRaft, ACL, 랙" },
    "kafka-expertise": { label: "전문가", summary: "EOS, 상태, 인시던트" }
  },
  tracks: {
    "kafka-foundations": { title: "Kafka 기초", focus: "브로커, 토픽, 파티션, 프로듀서, 컨슈머" },
    "kafka-streaming": { title: "스트리밍 구축", focus: "프로듀서 튜닝, 컨슈머 흐름, Connect, Streams" },
    "kafka-operations": { title: "Kafka 운영", focus: "KRaft, 보안, 쿼터, 랙, 업그레이드" },
    "kafka-expertise": { title: "Kafka 전문가", focus: "exactly-once, 상태, 멀티 리전, 인시던트" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const kafkaTopicsKo: Record<string, TopicKo> = {
  "broker": ["브로커", "Kafka 서버 프로세스"], // hint: Brokers store partitions and serve client reads and writes.
  "topic": ["토픽", "이름이 붙은 이벤트 스트림"], // hint: Topics organize records by business or technical stream.
  "partition": ["파티션", "순서가 보장되는 토픽 샤드"], // hint: Partitions provide parallelism and per-partition ordering.
  "offset": ["오프셋", "파티션 로그의 레코드 위치"], // hint: Offsets identify records and consumer progress.
  "record key and value": ["레코드 키와 값", "이벤트 라우팅과 페이로드"], // hint: Keys influence partition choice and values carry event data.
  "producer": ["프로듀서", "레코드를 쓰는 클라이언트"], // hint: Producers serialize and send records to topic partitions.
  "consumer": ["컨슈머", "레코드를 읽는 클라이언트"], // hint: Consumers poll partitions and process records.
  "consumer group": ["컨슈머 그룹", "파티션을 나눠 읽는 병렬 컨슈머 집합"], // hint: A group shares partitions so each partition is consumed by one member.
  "bootstrap servers": ["부트스트랩 서버", "클러스터 탐색을 위한 초기 브로커 주소"], // hint: Clients use bootstrap servers to discover the cluster.
  "serialization": ["직렬화", "데이터를 바이트로 변환"], // hint: Kafka records store byte arrays, so clients serialize keys and values.
  "replication factor": ["복제 팩터", "파티션 복사본 수"], // hint: Replication protects availability when brokers fail.
  "leader and follower": ["리더와 팔로워", "주 파티션과 복제 파티션 역할"], // hint: Leaders handle client traffic while followers replicate data.
  "retention": ["보존 정책", "시간 또는 크기 기반 로그 유지"], // hint: Kafka keeps records by retention policy, not consumer acknowledgement.
  "log segment": ["로그 세그먼트", "파티션을 구성하는 물리적 파일 단위"], // hint: Segments let Kafka delete or compact old log ranges.
  "KRaft basics": ["KRaft 기초", "Kafka 메타데이터 쿼럼"], // hint: Modern Kafka uses KRaft instead of ZooKeeper for metadata management.
  "CLI quickstart": ["CLI 빠른 시작", "토픽 생성, 프로듀스, 컨슘"], // hint: Official scripts help validate a local cluster quickly.
  "delivery semantics": ["전달 시맨틱", "최대 한 번, 최소 한 번, 정확히 한 번"], // hint: Semantics depend on producer, broker, and consumer settings.
  "consumer offset commit": ["컨슈머 오프셋 커밋", "레코드 처리 진행 상황 기록"], // hint: Offset commits tell Kafka where the group should resume.
  "producer acks": ["프로듀서 acks", "브로커 확인 응답 요건"], // hint: Acks tune durability and latency tradeoffs.
  "idempotent producer": ["멱등성 프로듀서", "프로듀서 재시도 중복 제거"], // hint: Idempotence prevents duplicate writes from retried sends.
  "transactions": ["트랜잭션", "멀티 파티션 원자적 쓰기"], // hint: Transactions support exactly-once pipelines with committed reads.
  "batching and linger": ["배치와 링거", "전송 전 레코드 묶기"], // hint: Batching improves throughput at the cost of latency.
  "compression": ["압축", "네트워크 및 스토리지 바이트 절감"], // hint: Compression can improve throughput for repetitive payloads.
  "partitioner": ["파티셔너", "대상 파티션 선택 로직"], // hint: Partitioners route records by key or custom logic.
  "consumer poll loop": ["컨슈머 폴 루프", "레코드를 가져와 처리하는 반복 흐름"], // hint: Consumers must poll regularly while processing safely.
  "sync and async commits": ["동기 및 비동기 커밋", "커밋 지연 트레이드오프"], // hint: Commit style changes duplicate and loss risk.
  "rebalance": ["리밸런스", "그룹 내 파티션 재할당"], // hint: Rebalances happen when group membership or topics change.
  "offset reset": ["오프셋 리셋", "오프셋이 없을 때의 시작 지점"], // hint: auto.offset.reset selects earliest, latest, or none behavior.
  "cooperative rebalancing": ["협력적 리밸런싱", "점진적 파티션 이동"], // hint: Cooperative protocols reduce stop-the-world reassignment.
  "schema evolution": ["스키마 진화", "호환 가능한 이벤트 계약"], // hint: Evolving event schemas requires compatibility rules.
  "Kafka Connect": ["Kafka Connect", "커넥터 런타임"], // hint: Connect moves data between Kafka and external systems.
  "source connector": ["소스 커넥터", "외부 시스템에서 Kafka로 데이터 수집"], // hint: Source connectors import records into Kafka topics.
  "sink connector": ["싱크 커넥터", "Kafka에서 외부 시스템으로 데이터 전달"], // hint: Sink connectors export topic data to databases, files, or services.
  "single message transform": ["단일 메시지 변환", "Connect 내 경량 레코드 변환"], // hint: SMTs modify records inside Connect without custom apps.
  "dead letter queue": ["데드 레터 큐", "처리 실패 레코드 보존"], // hint: DLQs preserve bad records for analysis instead of blocking all flow.
  "Kafka Streams topology": ["Kafka Streams 토폴로지", "프로세서 그래프"], // hint: A topology defines source, processing, state, and sink nodes.
  "KRaft controllers": ["KRaft 컨트롤러", "메타데이터 쿼럼 노드"], // hint: Controllers manage metadata and broker membership.
  "quorum voters": ["쿼럼 보터", "컨트롤러 투표 집합"], // hint: KRaft needs a stable quorum to commit metadata changes.
  "listener config": ["리스너 설정", "클라이언트와 브로커 간 엔드포인트 분리"], // hint: Listeners define how brokers advertise and accept connections.
  "SSL security": ["SSL 보안", "암호화 및 인증된 전송"], // hint: SSL protects data in transit and can authenticate clients.
  "SASL security": ["SASL 보안", "플러그인 방식 인증"], // hint: SASL mechanisms integrate Kafka with identity systems.
  "ACLs": ["ACL", "Kafka 작업 권한 부여"], // hint: ACLs restrict who can read, write, alter, or administer resources.
  "quotas": ["쿼터", "클라이언트 리소스 사용 제한"], // hint: Quotas prevent one client from exhausting broker capacity.
  "log compaction": ["로그 컴팩션", "키별 최신 값만 유지"], // hint: Compaction supports changelog and table-like topics.
  "partition reassignment": ["파티션 재할당", "파티션 레플리카 이동"], // hint: Reassignment balances load or evacuates brokers.
  "consumer lag": ["컨슈머 랙", "최신 오프셋과의 거리"], // hint: Lag indicates how far consumers are behind producers.
  "metrics and JMX": ["메트릭과 JMX", "브로커 및 클라이언트 상태 관찰"], // hint: Kafka exposes many operational metrics through JMX.
  "MirrorMaker 2": ["MirrorMaker 2", "클러스터 간 복제"], // hint: MirrorMaker supports migration and multi-cluster replication.
  "rolling upgrade": ["롤링 업그레이드", "무중단 브로커 업그레이드"], // hint: Upgrade order and compatibility settings protect availability.
  "broker configs": ["브로커 설정", "클러스터 동작 파라미터"], // hint: Broker config changes affect durability, performance, and security.
  "topic configs": ["토픽 설정", "토픽별 동작 파라미터"], // hint: Topic-level config tunes retention, compaction, and replication.
  "cluster sizing": ["클러스터 사이징", "파티션, 처리량, 스토리지 균형 맞추기"], // hint: Sizing must account for data rate, replication, consumers, and retention.
  "disaster recovery": ["재해 복구", "클러스터 장애 후 서비스 복원"], // hint: DR plans require replication, backups, and tested failover.
  "tiered storage": ["계층형 스토리지", "핫 로그와 원격 로그 스토리지 분리"], // hint: Tiered storage can extend retention without only scaling broker disks.
  "exactly-once semantics": ["정확히 한 번 시맨틱", "트랜잭션 기반 읽기-처리-쓰기"], // hint: EOS combines idempotent producers, transactions, and committed reads.
  "transactional outbox": ["트랜잭션 아웃박스", "데이터베이스 커밋 후 이벤트 발행"], // hint: The outbox pattern keeps database changes and events consistent.
  "ordering guarantees": ["순서 보장", "파티션 내에서만 순서 보장"], // hint: Global ordering requires one partition or downstream coordination.
  "hot partitions": ["핫 파티션", "특정 파티션에 집중되는 불균형 부하"], // hint: Bad keys can concentrate traffic and limit throughput.
  "backpressure": ["백프레셔", "느린 컨슈머 또는 브로커로 인한 압박"], // hint: Backpressure needs throttling, scaling, or flow control.
  "state stores": ["스테이트 스토어", "스트림의 로컬 내구성 상태 저장소"], // hint: Kafka Streams stores tables and aggregations in state stores.
  "interactive queries": ["인터랙티브 쿼리", "스트림 애플리케이션의 로컬 상태 조회"], // hint: Interactive queries expose state-store data from stream applications.
  "windowing": ["윈도잉", "시간 범위 기반 스트림 그룹화"], // hint: Windows aggregate records by event or processing time boundaries.
  "stream-table join": ["스트림-테이블 조인", "체인지로그 상태로 이벤트 보강"], // hint: A table represents latest value by key for joins.
  "standby replicas": ["스탠바이 레플리카", "장애 복구를 위한 워밍된 상태 복사본"], // hint: Standby tasks reduce recovery time after failure.
  "Connect distributed mode": ["Connect 분산 모드", "여러 워커에 분산된 커넥터 조율"], // hint: Distributed mode balances connector tasks across workers.
  "connector offset recovery": ["커넥터 오프셋 복구", "외부 연동 안전 재개"], // hint: Offsets must be preserved when connectors are moved or recovered.
  "multi-region replication": ["멀티 리전 복제", "지연 및 충돌을 고려한 리전 간 복제"], // hint: Cross-region systems trade latency, cost, and consistency.
  "incident debugging": ["인시던트 디버깅", "랙, 오류, 브로커 메트릭 상관 분석"], // hint: Kafka incidents require client, broker, and topic evidence together.
  "performance tuning": ["성능 튜닝", "프로듀서, 컨슈머, 브로커 전반 최적화"], // hint: Throughput bottlenecks can sit at any layer.
  "capacity model": ["용량 모델", "바이트, 파티션, 보존 기간 예측"], // hint: Capacity planning needs rate, replication, compaction, and consumer assumptions.
  "security audit": ["보안 감사", "주체, ACL, 리스너 검토"], // hint: Kafka security depends on authentication, authorization, and encryption alignment.
  "KIP awareness": ["KIP 추적", "Kafka 개선 제안서 동향 파악"], // hint: KIPs explain feature intent and migration impact.
};
