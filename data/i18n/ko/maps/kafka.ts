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
  "broker": ["브로커","Kafka 서버 프로세스","브로커는 파티션을 저장하고 클라이언트의 읽기 및 쓰기 요청을 처리한다."], // hint: Brokers store partitions and serve client reads and writes.
  "topic": ["토픽","이름이 붙은 이벤트 스트림","토픽은 레코드를 비즈니스 또는 기술적 스트림 단위로 구성한다."], // hint: Topics organize records by business or technical stream.
  "partition": ["파티션","순서가 보장되는 토픽 샤드","파티션은 병렬 처리를 가능하게 하고 파티션 내 순서를 보장한다."], // hint: Partitions provide parallelism and per-partition ordering.
  "offset": ["오프셋","파티션 로그의 레코드 위치","오프셋은 레코드를 식별하고 컨슈머의 처리 진행 위치를 나타낸다."], // hint: Offsets identify records and consumer progress.
  "record key and value": ["레코드 키와 값","이벤트 라우팅과 페이로드","키는 파티션 선택에 영향을 주고, 값은 이벤트 데이터를 담는다."], // hint: Keys influence partition choice and values carry event data.
  "producer": ["프로듀서","레코드를 쓰는 클라이언트","프로듀서는 레코드를 직렬화하여 토픽 파티션으로 전송한다."], // hint: Producers serialize and send records to topic partitions.
  "consumer": ["컨슈머","레코드를 읽는 클라이언트","컨슈머는 파티션을 폴링하여 레코드를 처리한다."], // hint: Consumers poll partitions and process records.
  "consumer group": ["컨슈머 그룹","파티션을 나눠 읽는 병렬 컨슈머 집합","그룹은 파티션을 분담하여 각 파티션이 하나의 멤버에게만 할당되도록 한다."], // hint: A group shares partitions so each partition is consumed by one member.
  "bootstrap servers": ["부트스트랩 서버","클러스터 탐색을 위한 초기 브로커 주소","클라이언트는 부트스트랩 서버를 통해 클러스터 전체 구성을 탐색한다."], // hint: Clients use bootstrap servers to discover the cluster.
  "serialization": ["직렬화","데이터를 바이트로 변환","Kafka 레코드는 바이트 배열로 저장되므로 클라이언트가 키와 값을 직렬화해야 한다."], // hint: Kafka records store byte arrays, so clients serialize keys and values.
  "replication factor": ["복제 팩터","파티션 복사본 수","복제는 브로커 장애 시 가용성을 보호한다."], // hint: Replication protects availability when brokers fail.
  "leader and follower": ["리더와 팔로워","주 파티션과 복제 파티션 역할","리더는 클라이언트 트래픽을 처리하고 팔로워는 데이터를 복제한다."], // hint: Leaders handle client traffic while followers replicate data.
  "retention": ["보존 정책","시간 또는 크기 기반 로그 유지","Kafka는 컨슈머 확인 응답이 아닌 보존 정책에 따라 레코드를 유지한다."], // hint: Kafka keeps records by retention policy, not consumer acknowledgement.
  "log segment": ["로그 세그먼트","파티션을 구성하는 물리적 파일 단위","세그먼트를 통해 Kafka는 오래된 로그 범위를 삭제하거나 컴팩션할 수 있다."], // hint: Segments let Kafka delete or compact old log ranges.
  "KRaft basics": ["KRaft 기초","Kafka 메타데이터 쿼럼","현대 Kafka는 메타데이터 관리에 ZooKeeper 대신 KRaft를 사용한다."], // hint: Modern Kafka uses KRaft instead of ZooKeeper for metadata management.
  "CLI quickstart": ["CLI 빠른 시작","토픽 생성, 프로듀스, 컨슘","공식 스크립트를 사용하면 로컬 클러스터를 빠르게 검증할 수 있다."], // hint: Official scripts help validate a local cluster quickly.
  "delivery semantics": ["전달 시맨틱","최대 한 번, 최소 한 번, 정확히 한 번","전달 시맨틱은 프로듀서, 브로커, 컨슈머의 설정에 따라 달라진다."], // hint: Semantics depend on producer, broker, and consumer settings.
  "consumer offset commit": ["컨슈머 오프셋 커밋","레코드 처리 진행 상황 기록","오프셋 커밋은 Kafka에게 그룹이 어디서부터 재개해야 하는지 알려준다."], // hint: Offset commits tell Kafka where the group should resume.
  "producer acks": ["프로듀서 acks","브로커 확인 응답 요건","acks 설정은 내구성과 지연 시간 사이의 트레이드오프를 조정한다."], // hint: Acks tune durability and latency tradeoffs.
  "idempotent producer": ["멱등성 프로듀서","프로듀서 재시도 중복 제거","멱등성은 재시도로 인한 중복 쓰기를 방지한다."], // hint: Idempotence prevents duplicate writes from retried sends.
  "transactions": ["트랜잭션","멀티 파티션 원자적 쓰기","트랜잭션은 커밋된 읽기를 통해 exactly-once 파이프라인을 지원한다."], // hint: Transactions support exactly-once pipelines with committed reads.
  "batching and linger": ["배치와 링거","전송 전 레코드 묶기","배치는 지연 시간을 희생하여 처리량을 향상시킨다."], // hint: Batching improves throughput at the cost of latency.
  "compression": ["압축","네트워크 및 스토리지 바이트 절감","압축은 반복적인 페이로드의 처리량을 개선할 수 있다."], // hint: Compression can improve throughput for repetitive payloads.
  "partitioner": ["파티셔너","대상 파티션 선택 로직","파티셔너는 키 또는 커스텀 로직에 따라 레코드를 라우팅한다."], // hint: Partitioners route records by key or custom logic.
  "consumer poll loop": ["컨슈머 폴 루프","레코드를 가져와 처리하는 반복 흐름","컨슈머는 레코드를 안전하게 처리하는 동안에도 주기적으로 폴링해야 한다."], // hint: Consumers must poll regularly while processing safely.
  "sync and async commits": ["동기 및 비동기 커밋","커밋 지연 트레이드오프","커밋 방식에 따라 중복 처리 및 유실 위험이 달라진다."], // hint: Commit style changes duplicate and loss risk.
  "rebalance": ["리밸런스","그룹 내 파티션 재할당","리밸런스는 그룹 멤버십이나 토픽 구성이 변경될 때 발생한다."], // hint: Rebalances happen when group membership or topics change.
  "offset reset": ["오프셋 리셋","오프셋이 없을 때의 시작 지점","auto.offset.reset은 earliest, latest, none 동작 중 하나를 선택한다."], // hint: auto.offset.reset selects earliest, latest, or none behavior.
  "cooperative rebalancing": ["협력적 리밸런싱","점진적 파티션 이동","협력적 프로토콜은 stop-the-world 방식의 파티션 재할당을 줄인다."], // hint: Cooperative protocols reduce stop-the-world reassignment.
  "schema evolution": ["스키마 진화","호환 가능한 이벤트 계약","이벤트 스키마를 변경하려면 호환성 규칙이 필요하다."], // hint: Evolving event schemas requires compatibility rules.
  "Kafka Connect": ["Kafka Connect","커넥터 런타임","Connect는 Kafka와 외부 시스템 간 데이터를 이동시킨다."], // hint: Connect moves data between Kafka and external systems.
  "source connector": ["소스 커넥터","외부 시스템에서 Kafka로 데이터 수집","소스 커넥터는 레코드를 Kafka 토픽으로 가져온다."], // hint: Source connectors import records into Kafka topics.
  "sink connector": ["싱크 커넥터","Kafka에서 외부 시스템으로 데이터 전달","싱크 커넥터는 토픽 데이터를 데이터베이스, 파일, 또는 서비스로 내보낸다."], // hint: Sink connectors export topic data to databases, files, or services.
  "single message transform": ["단일 메시지 변환","Connect 내 경량 레코드 변환","SMT는 별도의 애플리케이션 없이 Connect 내부에서 레코드를 변환한다."], // hint: SMTs modify records inside Connect without custom apps.
  "dead letter queue": ["데드 레터 큐","처리 실패 레코드 보존","DLQ는 불량 레코드를 분석용으로 보존하여 전체 흐름이 차단되지 않도록 한다."], // hint: DLQs preserve bad records for analysis instead of blocking all flow.
  "Kafka Streams topology": ["Kafka Streams 토폴로지","프로세서 그래프","토폴로지는 소스, 처리, 상태, 싱크 노드를 정의한다."], // hint: A topology defines source, processing, state, and sink nodes.
  "KRaft controllers": ["KRaft 컨트롤러","메타데이터 쿼럼 노드","컨트롤러는 메타데이터와 브로커 멤버십을 관리한다."], // hint: Controllers manage metadata and broker membership.
  "quorum voters": ["쿼럼 보터","컨트롤러 투표 집합","KRaft는 메타데이터 변경을 커밋하기 위해 안정적인 쿼럼이 필요하다."], // hint: KRaft needs a stable quorum to commit metadata changes.
  "listener config": ["리스너 설정","클라이언트와 브로커 간 엔드포인트 분리","리스너는 브로커가 연결을 광고하고 수락하는 방식을 정의한다."], // hint: Listeners define how brokers advertise and accept connections.
  "SSL security": ["SSL 보안","암호화 및 인증된 전송","SSL은 전송 중 데이터를 보호하고 클라이언트 인증에도 사용할 수 있다."], // hint: SSL protects data in transit and can authenticate clients.
  "SASL security": ["SASL 보안","플러그인 방식 인증","SASL 메커니즘은 Kafka를 ID 시스템과 연동한다."], // hint: SASL mechanisms integrate Kafka with identity systems.
  "ACLs": ["ACL","Kafka 작업 권한 부여","ACL은 리소스에 대한 읽기, 쓰기, 변경, 관리 권한을 제한한다."], // hint: ACLs restrict who can read, write, alter, or administer resources.
  "quotas": ["쿼터","클라이언트 리소스 사용 제한","쿼터는 특정 클라이언트가 브로커 용량을 고갈시키는 것을 방지한다."], // hint: Quotas prevent one client from exhausting broker capacity.
  "log compaction": ["로그 컴팩션","키별 최신 값만 유지","컴팩션은 체인지로그 및 테이블 형태의 토픽을 지원한다."], // hint: Compaction supports changelog and table-like topics.
  "partition reassignment": ["파티션 재할당","파티션 레플리카 이동","재할당은 부하를 분산하거나 브로커를 비울 때 사용한다."], // hint: Reassignment balances load or evacuates brokers.
  "consumer lag": ["컨슈머 랙","최신 오프셋과의 거리","랙은 컨슈머가 프로듀서보다 얼마나 뒤처져 있는지를 나타낸다."], // hint: Lag indicates how far consumers are behind producers.
  "metrics and JMX": ["메트릭과 JMX","브로커 및 클라이언트 상태 관찰","Kafka는 JMX를 통해 다양한 운영 메트릭을 노출한다."], // hint: Kafka exposes many operational metrics through JMX.
  "MirrorMaker 2": ["MirrorMaker 2","클러스터 간 복제","MirrorMaker는 클러스터 마이그레이션과 멀티 클러스터 복제를 지원한다."], // hint: MirrorMaker supports migration and multi-cluster replication.
  "rolling upgrade": ["롤링 업그레이드","무중단 브로커 업그레이드","업그레이드 순서와 호환성 설정이 가용성을 보호한다."], // hint: Upgrade order and compatibility settings protect availability.
  "broker configs": ["브로커 설정","클러스터 동작 파라미터","브로커 설정 변경은 내구성, 성능, 보안에 영향을 준다."], // hint: Broker config changes affect durability, performance, and security.
  "topic configs": ["토픽 설정","토픽별 동작 파라미터","토픽 수준 설정은 보존, 컴팩션, 복제를 조정한다."], // hint: Topic-level config tunes retention, compaction, and replication.
  "cluster sizing": ["클러스터 사이징","파티션, 처리량, 스토리지 균형 맞추기","사이징 시 데이터 처리율, 복제, 컨슈머, 보존 기간을 모두 고려해야 한다."], // hint: Sizing must account for data rate, replication, consumers, and retention.
  "disaster recovery": ["재해 복구","클러스터 장애 후 서비스 복원","DR 계획에는 복제, 백업, 그리고 검증된 페일오버 절차가 필요하다."], // hint: DR plans require replication, backups, and tested failover.
  "tiered storage": ["계층형 스토리지","핫 로그와 원격 로그 스토리지 분리","계층형 스토리지는 브로커 디스크만 확장하지 않고도 보존 기간을 늘릴 수 있다."], // hint: Tiered storage can extend retention without only scaling broker disks.
  "exactly-once semantics": ["정확히 한 번 시맨틱","트랜잭션 기반 읽기-처리-쓰기","EOS는 멱등성 프로듀서, 트랜잭션, 커밋된 읽기를 결합한다."], // hint: EOS combines idempotent producers, transactions, and committed reads.
  "transactional outbox": ["트랜잭션 아웃박스","데이터베이스 커밋 후 이벤트 발행","아웃박스 패턴은 데이터베이스 변경과 이벤트 발행의 일관성을 유지한다."], // hint: The outbox pattern keeps database changes and events consistent.
  "ordering guarantees": ["순서 보장","파티션 내에서만 순서 보장","전역 순서 보장은 하나의 파티션 사용 또는 다운스트림 조정이 필요하다."], // hint: Global ordering requires one partition or downstream coordination.
  "hot partitions": ["핫 파티션","특정 파티션에 집중되는 불균형 부하","잘못된 키는 트래픽을 특정 파티션에 집중시켜 처리량을 제한할 수 있다."], // hint: Bad keys can concentrate traffic and limit throughput.
  "backpressure": ["백프레셔","느린 컨슈머 또는 브로커로 인한 압박","백프레셔에는 스로틀링, 스케일링, 또는 흐름 제어가 필요하다."], // hint: Backpressure needs throttling, scaling, or flow control.
  "state stores": ["스테이트 스토어","스트림의 로컬 내구성 상태 저장소","Kafka Streams는 테이블과 집계 결과를 스테이트 스토어에 저장한다."], // hint: Kafka Streams stores tables and aggregations in state stores.
  "interactive queries": ["인터랙티브 쿼리","스트림 애플리케이션의 로컬 상태 조회","인터랙티브 쿼리는 스트림 애플리케이션의 스테이트 스토어 데이터를 외부에 노출한다."], // hint: Interactive queries expose state-store data from stream applications.
  "windowing": ["윈도잉","시간 범위 기반 스트림 그룹화","윈도우는 이벤트 시간 또는 처리 시간 기준으로 레코드를 집계한다."], // hint: Windows aggregate records by event or processing time boundaries.
  "stream-table join": ["스트림-테이블 조인","체인지로그 상태로 이벤트 보강","테이블은 조인을 위해 키별 최신 값을 나타낸다."], // hint: A table represents latest value by key for joins.
  "standby replicas": ["스탠바이 레플리카","장애 복구를 위한 워밍된 상태 복사본","스탠바이 태스크는 장애 발생 후 복구 시간을 단축한다."], // hint: Standby tasks reduce recovery time after failure.
  "Connect distributed mode": ["Connect 분산 모드","여러 워커에 분산된 커넥터 조율","분산 모드는 커넥터 태스크를 여러 워커에 분산하여 조율한다."], // hint: Distributed mode balances connector tasks across workers.
  "connector offset recovery": ["커넥터 오프셋 복구","외부 연동 안전 재개","커넥터를 이동하거나 복구할 때 오프셋이 반드시 보존되어야 한다."], // hint: Offsets must be preserved when connectors are moved or recovered.
  "multi-region replication": ["멀티 리전 복제","지연 및 충돌을 고려한 리전 간 복제","리전 간 시스템은 지연 시간, 비용, 일관성을 트레이드오프해야 한다."], // hint: Cross-region systems trade latency, cost, and consistency.
  "incident debugging": ["인시던트 디버깅","랙, 오류, 브로커 메트릭 상관 분석","Kafka 인시던트 분석에는 클라이언트, 브로커, 토픽 관련 증거가 모두 필요하다."], // hint: Kafka incidents require client, broker, and topic evidence together.
  "performance tuning": ["성능 튜닝","프로듀서, 컨슈머, 브로커 전반 최적화","처리량 병목은 어느 계층에서든 발생할 수 있다."], // hint: Throughput bottlenecks can sit at any layer.
  "capacity model": ["용량 모델","바이트, 파티션, 보존 기간 예측","용량 계획 시 처리율, 복제, 컴팩션, 컨슈머 가정을 모두 반영해야 한다."], // hint: Capacity planning needs rate, replication, compaction, and consumer assumptions.
  "security audit": ["보안 감사","주체, ACL, 리스너 검토","Kafka 보안은 인증, 권한 부여, 암호화가 모두 정합되어야 한다."], // hint: Kafka security depends on authentication, authorization, and encryption alignment.
  "KIP awareness": ["KIP 추적","Kafka 개선 제안서 동향 파악","KIP는 기능의 도입 의도와 마이그레이션 영향을 설명한다."], // hint: KIPs explain feature intent and migration impact.
};
