import type { DrillTextKo } from "@/data/i18n/types";
import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for redis-streams. English placeholders — translate to Korean.
export const redisStreamsChrome: FactoryChromeKo = {
  metadata: {
    title: "StreamsDojo - 초급부터 전문가까지 Redis Streams 학습",
    description: "KanaDojo에서 영감을 받은 Redis Streams 학습 앱 — XADD 기초부터 안정적인 스트림 시스템까지."
  },
  welcomeTitle: "StreamsDojo에 오신 것을 환영합니다!",
  welcomeBody: "StreamsDojo는 이벤트 프로듀서, 컨슈머 그룹, 안정적인 처리를 위한 짧은 드릴로 Redis Streams를 가르칩니다.",
  subjectName: "Redis Streams",
  footerMeta: "커뮤니티 제작 ~ stream bloom ~ zen maru gothic ~ v0.1.18 (알파)",
  cards: {
    "stream-foundations": { label: "기초", summary: "엔트리, ID, 읽기" },
    "stream-producers": { label: "프로듀서", summary: "XADD, 트림, 이벤트 형태" },
    "stream-consumers": { label: "컨슈머 그룹", summary: "읽기, ACK, 펜딩" },
    "stream-operations": { label: "안정성", summary: "클레임, 지연, 리플레이" }
  },
  tracks: {
    "stream-foundations": { title: "스트림 기초", focus: "엔트리, ID, 필드, 읽기" },
    "stream-producers": { title: "프로듀서 흐름", focus: "XADD, 트리밍, 이벤트 형태, 배치" },
    "stream-consumers": { title: "컨슈머 그룹", focus: "그룹, 펜딩 엔트리, 확인 응답" },
    "stream-operations": { title: "안정성 랩", focus: "복구, 백프레셔, 모니터링, 리플레이" }
  }
};

// Hand-written baseDrills (56) — English placeholders, translate concept/prompt/hint/explanation.
export const redisStreamsBaseDrills: Record<string, DrillTextKo> = {
  "stream-foundations-xadd": { concept: "XADD", prompt: "Redis 스트림에 엔트리를 추가하는 명령어는 무엇입니까?", hint: "스트림 명령어는 X 접두사를 사용합니다.", explanation: "XADD는 ID와 필드/값 쌍으로 구성된 새 스트림 엔트리를 추가합니다." },
  "stream-foundations-id": { concept: "엔트리 ID", prompt: "스트림 엔트리 ID를 Redis가 자동 생성하도록 요청하는 ID는 무엇입니까?", hint: "Redis가 타임스탬프-시퀀스 ID를 자동으로 할당하도록 합니다.", explanation: "XADD mystream * field value 처럼 `*`를 사용하면 Redis가 엔트리 ID를 생성합니다." },
  "stream-foundations-range": { concept: "XRANGE", prompt: "두 경계 사이에서 ID 순서로 엔트리를 읽는 명령어는 무엇입니까?", hint: "스트림 ID 범위를 순회합니다.", explanation: "XRANGE key start end는 오름차순 ID 순서로 스트림 엔트리를 반환합니다." },
  "stream-foundations-debug-type": { concept: "스트림 형태", prompt: "구조적 이벤트 데이터를 추가하는 이 시도를 어떻게 고쳐야 합니까?", hint: "스트림 엔트리는 필드와 값의 쌍을 저장합니다.", explanation: "XADD는 `user_id 42 action signup`처럼 필드-값 쌍을 필요로 합니다." },
  "stream-foundations-id-format": { concept: "ID 형식", prompt: "Redis 스트림 ID의 일반적인 형태는 무엇입니까?", hint: "하이픈으로 구분된 두 개의 숫자 부분으로 이루어집니다.", explanation: "1717000000000-0 같은 스트림 ID는 밀리초 타임스탬프와 시퀀스 번호를 조합합니다." },
  "stream-foundations-xlen": { concept: "XLEN", prompt: "스트림의 엔트리 개수를 반환하는 명령어는 무엇입니까?", hint: "스트림에서 길이를 확인하는 명령어입니다.", explanation: "XLEN mystream은 스트림의 엔트리 수를 반환합니다." },
  "stream-foundations-bounds": { concept: "범위 경계", prompt: "XRANGE에서 가장 작은 ID부터 가장 큰 ID까지 조회하는 경계 기호는 무엇입니까?", hint: "Redis는 스트림 ID의 최솟값과 최댓값을 나타내는 기호를 사용합니다.", explanation: "XRANGE mystream - + 는 스트림의 첫 ID부터 마지막 ID까지 모든 엔트리를 반환합니다." },
  "stream-foundations-xrevrange": { concept: "XREVRANGE", prompt: "스트림 엔트리를 최신 순으로 읽는 명령어는 무엇입니까?", hint: "역방향 범위 명령어입니다.", explanation: "XREVRANGE는 엔트리를 내림차순 ID 순서로 반환합니다." },
  "stream-foundations-xread": { concept: "XREAD", prompt: "컨슈머 그룹 없이 하나 이상의 스트림에서 읽는 명령어는 무엇입니까?", hint: "컨슈머 그룹은 읽기 명령어에 GROUP을 추가합니다.", explanation: "XREAD는 스트림 엔트리를 직접 읽으며 새 엔트리를 블로킹으로 기다릴 수 있습니다." },
  "stream-foundations-block": { concept: "블로킹 읽기", prompt: "즉시 반환하는 대신 엔트리를 기다리는 XREAD 옵션은 무엇입니까?", hint: "밀리초 단위의 타임아웃을 받습니다.", explanation: "XREAD BLOCK 5000 STREAMS events $ 는 새 엔트리가 올 때까지 최대 5초 동안 대기합니다." },
  "stream-foundations-multi-stream": { concept: "STREAMS 절", prompt: "두 스트림을 명시적인 ID로 읽는 XREAD 형태는 무엇입니까?", hint: "스트림 키를 먼저 나열한 뒤 같은 수의 ID를 나열합니다.", explanation: "STREAMS 절은 키를 오프셋 앞에 묶으므로, 각 스트림 키에는 대응하는 ID가 있어야 합니다." },
  "stream-foundations-debug-start-id": { concept: "리플레이 시작점", prompt: "이 리플레이가 첫 스트림 엔트리를 놓치는 이유는 무엇입니까?", hint: "지정한 ID는 마지막으로 읽은 ID이며 포함적 하한이 아닙니다.", explanation: "XREAD는 지정된 ID보다 큰 ID의 엔트리를 반환합니다. 0-0 형태의 첫 엔트리를 포함하려면 0을 사용하세요." },
  "stream-foundations-debug-old-id": { concept: "단조 증가 ID", prompt: "두 번째 추가가 실패할 수 있는 이유는 무엇입니까?", hint: "새로운 명시적 ID는 스트림의 마지막 ID보다 커야 합니다.", explanation: "Redis는 스트림의 최상위 ID보다 크지 않은 엔트리 ID를 거부합니다." },
  "stream-foundations-xdel": { concept: "XDEL", prompt: "스트림에서 특정 ID의 엔트리를 삭제하는 명령어는 무엇입니까?", hint: "펜딩 참조가 아닌 엔트리 자체를 삭제합니다.", explanation: "XDEL key id는 지정된 스트림 엔트리를 삭제하지만, 컨슈머 그룹 상태는 전달된 ID를 여전히 참조할 수 있습니다." },
  "stream-producers-basic": { concept: "이벤트 추가", prompt: "자동 생성 ID로 가입 이벤트를 추가하는 명령어는 무엇입니까?", hint: "XADD, 스트림 키, ID, 필드/값 쌍 순서로 사용합니다.", explanation: "`*`는 Redis가 ID를 생성하도록 요청하고, 나머지 토큰은 이벤트 필드입니다." },
  "stream-producers-trim": { concept: "트리밍", prompt: "스트림을 최대 길이 근처로 유지하는 XADD 옵션은 무엇입니까?", hint: "물결표로 근사 트리밍을 지정할 수 있습니다.", explanation: "XADD mystream MAXLEN ~ 10000 * field value 는 스트림을 목표 길이 근처로 유지합니다." },
  "stream-producers-dollar": { concept: "최신 ID", prompt: "XREAD에서 명령어 실행 이후 추가된 엔트리만 읽는 ID는 무엇입니까?", hint: "스트림의 현재 끝을 나타냅니다.", explanation: "`$`는 최신 엔트리부터 읽기 시작하므로 이전 기록은 건너뜁니다." },
  "stream-producers-debug-bounds": { concept: "블로킹 읽기", prompt: "이전 엔트리를 놓치는 프로듀서 테스트를 어떻게 수정합니까?", hint: "`$`는 오래된 엔트리를 건너뜁니다.", explanation: "0-0은 기록 전체를 리플레이합니다. `$`는 읽기 시작 이후의 미래 엔트리만 받습니다." },
  "stream-producers-approx-trim": { concept: "근사 트리밍", prompt: "성능을 위해 근사 트리밍을 사용하는 XADD 옵션은 무엇입니까?", hint: "물결표가 근사 트리밍을 표시합니다.", explanation: "MAXLEN ~는 Redis가 매 추가마다 정확한 트리밍을 강제하지 않고 목표 근처에서 트리밍하도록 합니다." },
  "stream-producers-minid": { concept: "MINID", prompt: "ID 임계값보다 오래된 엔트리를 제거하는 트리밍 전략은 무엇입니까?", hint: "엔트리 수가 아닌 ID를 기준으로 합니다.", explanation: "MINID는 지정된 임계값 미만의 ID를 가진 엔트리를 트리밍합니다." },
  "stream-producers-nomkstream": { concept: "NOMKSTREAM", prompt: "스트림 키가 없을 때 Redis가 자동으로 생성하지 않도록 하는 XADD 옵션은 무엇입니까?", hint: "이름 그대로 스트림을 생성하지 말라는 의미입니다.", explanation: "NOMKSTREAM을 사용하면 스트림 키가 존재하지 않을 때 XADD가 실패합니다." },
  "stream-producers-schema-version": { concept: "이벤트 스키마", prompt: "컨슈머가 이벤트 파싱을 안전하게 발전시키는 데 도움이 되는 필드는 무엇입니까?", hint: "컨슈머는 이벤트 형태를 어떻게 디코딩할지 알아야 합니다.", explanation: "schema_version 필드가 있으면 프로듀서가 이벤트 필드를 변경할 때 컨슈머가 버전별로 분기 처리할 수 있습니다." },
  "stream-producers-debug-field-order": { concept: "필드/값 쌍", prompt: "잘못된 이벤트 추가를 어떻게 수정합니까?", hint: "ID 이후 토큰은 반드시 쌍으로 와야 합니다.", explanation: "XADD는 필드-값 쌍을 요구하므로 `user_id`에는 `user_id 42`처럼 값이 있어야 합니다." },
  "stream-producers-count-batch": { concept: "배치 크기", prompt: "스트림당 반환되는 엔트리 수를 제한하는 XREAD 옵션은 무엇입니까?", hint: "XREAD에서 STREAMS 앞에 위치합니다.", explanation: "COUNT를 사용하면 각 응답 크기를 제한하여 배치 처리를 예측 가능하게 유지할 수 있습니다." },
  "stream-producers-pipeline": { concept: "프로듀서 처리량", prompt: "대용량 프로듀서가 네트워크 왕복 횟수를 줄이는 방법은 무엇입니까?", hint: "클라이언트/서버 교환을 일괄 처리합니다.", explanation: "파이프라이닝을 사용하면 각 응답을 기다리지 않고 여러 XADD 명령어를 연속 전송할 수 있습니다." },
  "stream-producers-debug-unbounded": { concept: "보존 정책", prompt: "이 대용량 이벤트 스트림에서 빠진 것은 무엇입니까?", hint: "트리밍을 하지 않으면 스트림은 무한정 증가합니다.", explanation: "XADD MAXLEN/MINID 또는 XTRIM을 사용해 메모리 증가를 보존 목표에 맞게 관리하세요." },
  "stream-producers-xtrim-exact": { concept: "XTRIM", prompt: "기존 스트림을 정확한 최대 길이로 트리밍하는 명령어는 무엇입니까?", hint: "XTRIM은 독립적인 트리밍 전용 명령어입니다.", explanation: "XTRIM은 길이 또는 최소 ID 기준으로 정확하거나 근사하게 기존 스트림 엔트리를 트리밍할 수 있습니다." },
  "stream-producers-debug-json-blob": { concept: "이벤트 형태", prompt: "이 이벤트 형태의 트레이드오프는 무엇입니까?", hint: "작동은 하지만 필드 단위 가시성이 달라집니다.", explanation: "JSON 페이로드도 유효하지만, 명시적 필드를 사용하면 기본 스트림 검사와 라우팅이 더 쉬워집니다." },
  "stream-consumers-group": { concept: "컨슈머 그룹", prompt: "컨슈머 그룹을 생성하는 명령어는 무엇입니까?", hint: "그룹 관리는 XGROUP 하위에 있습니다.", explanation: "XGROUP CREATE key group id는 자체 전달 상태를 가진 그룹을 생성합니다." },
  "stream-consumers-next": { concept: "새 메시지", prompt: "XREADGROUP에서 아직 전달된 적 없는 엔트리를 요청하는 ID는 무엇입니까?", hint: "그룹의 전달 기록 이후를 가리킵니다.", explanation: "`>`는 Redis에게 아직 어떤 컨슈머에도 할당되지 않은 새 엔트리를 전달하도록 지시합니다." },
  "stream-consumers-ack": { concept: "확인 응답", prompt: "처리된 엔트리를 펜딩 목록에서 제거하는 명령어는 무엇입니까?", hint: "그룹에 처리 완료를 알립니다.", explanation: "XACK는 엔트리를 컨슈머 그룹 처리 완료로 표시하고 PEL에서 제거합니다." },
  "stream-consumers-debug-pending": { concept: "펜딩 엔트리", prompt: "메시지를 처리하면서도 계속 펜딩 상태로 남는 컨슈머를 어떻게 수정합니까?", hint: "그룹에 성공 신호를 보내야 합니다.", explanation: "XACK 없이는 Redis가 전달된 엔트리를 펜딩 엔트리 목록에 계속 유지합니다." },
  "stream-consumers-create-mkstream": { concept: "MKSTREAM", prompt: "스트림 키가 없을 때 함께 생성하는 XGROUP CREATE 옵션은 무엇입니까?", hint: "XADD NOMKSTREAM과 반대되는 설정입니다.", explanation: "XGROUP CREATE mystream workers $ MKSTREAM은 필요 시 그룹과 스트림 키를 함께 생성합니다." },
  "stream-consumers-readgroup-syntax": { concept: "XREADGROUP 문법", prompt: "그룹 workers와 컨슈머 c1으로 새 이벤트를 읽는 명령어는 무엇입니까?", hint: "GROUP은 STREAMS 앞에 위치합니다.", explanation: "XREADGROUP GROUP <group> <consumer> STREAMS <key> > 는 해당 컨슈머 그룹의 새 메시지를 읽습니다." },
  "stream-consumers-pel": { concept: "PEL", prompt: "전달되었지만 아직 확인 응답되지 않은 엔트리의 약칭은 무엇입니까?", hint: "Pending Entries List의 약자입니다.", explanation: "PEL은 컨슈머에게 전달되었지만 아직 확인 응답되지 않은 엔트리를 추적합니다." },
  "stream-consumers-xpending": { concept: "XPENDING", prompt: "그룹의 펜딩 엔트리를 조회하는 명령어는 무엇입니까?", hint: "명령어 이름이 상태와 일치합니다.", explanation: "XPENDING은 컨슈머 그룹의 PEL에 대한 요약 및 상세 정보를 보여줍니다." },
  "stream-consumers-history-id": { concept: "펜딩 리플레이", prompt: "XREADGROUP에서 컨슈머가 자신의 펜딩 기록을 다시 읽는 ID 범위 방식은 무엇입니까?", hint: "`>`는 아직 전달되지 않은 새 엔트리를 의미하고, 이전 ID는 펜딩 기록을 요청합니다.", explanation: "XREADGROUP에서 `>` 이외의 ID를 사용하면 해당 컨슈머에게 이미 전달된 펜딩 엔트리를 다시 읽습니다." },
  "stream-consumers-noack": { concept: "NOACK", prompt: "전달된 엔트리를 PEL에 추가하지 않는 옵션은 무엇입니까?", hint: "메시지 손실이 허용될 때만 사용합니다.", explanation: "NOACK는 펜딩 추적을 건너뛰며, 엔트리를 읽는 즉시 확인 응답하는 것과 동일합니다." },
  "stream-consumers-consumer-name": { concept: "컨슈머 신원", prompt: "그룹 내에서 각 워커 프로세스는 고유한 무엇을 사용해야 합니까?", hint: "Redis는 이 신원으로 펜딩 엔트리 소유권을 추적합니다.", explanation: "각 클라이언트는 컨슈머 이름으로 자신을 식별하여 Redis가 소유권과 펜딩 작업을 추적할 수 있게 합니다." },
  "stream-consumers-debug-no-shared-name": { concept: "컨슈머 신원", prompt: "이 두 워커의 문제는 무엇입니까?", hint: "소유권과 유휴 시간은 컨슈머 단위로 추적됩니다.", explanation: "별도의 워커 인스턴스는 서로 다른 컨슈머 이름을 사용해야 펜딩 소유권을 관찰하고 복구할 수 있습니다." },
  "stream-consumers-xinfo-groups": { concept: "그룹 조회", prompt: "그룹, 지연, 펜딩 수, 마지막 전달 정보를 조회하는 명령어는 무엇입니까?", hint: "XINFO 명령어 계열의 일부입니다.", explanation: "XINFO GROUPS는 스트림의 모든 컨슈머 그룹에 대한 운영 상태를 보고합니다." },
  "stream-consumers-debug-autoclaim-vs-xpending": { concept: "오래된 펜딩", prompt: "오래된 펜딩 작업을 스캔하고 클레임하는 더 간결한 복구 명령어는 무엇입니까?", hint: "Redis에는 이 패턴을 위한 SCAN 방식의 명령어가 있습니다.", explanation: "XAUTOCLAIM은 펜딩 엔트리 스캔과 오래된 항목 클레임을 하나의 간단한 복구 루프로 통합합니다." },
  "stream-operations-claim": { concept: "복구", prompt: "오래된 펜딩 엔트리를 다른 컨슈머에게 이전하는 명령어는 무엇입니까?", hint: "오래된 펜딩 메시지 클레임을 자동화합니다.", explanation: "XAUTOCLAIM은 실패한 컨슈머가 남긴 작업을 정상 컨슈머가 복구하는 데 도움을 줍니다." },
  "stream-operations-lag": { concept: "지연", prompt: "컨슈머 뒤로 쌓이는 미처리 스트림 작업을 무엇이라 부릅니까?", hint: "컨슈머가 얼마나 뒤처졌는지 측정합니다.", explanation: "컨슈머 지연은 Redis Streams 시스템의 핵심 안정성 신호입니다." },
  "stream-operations-info": { concept: "스트림 검사", prompt: "스트림 메타데이터와 그룹을 조회하는 명령어는 무엇입니까?", hint: "명령어 계열은 X로 시작합니다.", explanation: "XINFO STREAM, XINFO GROUPS, XINFO CONSUMERS는 운영 상태를 노출합니다." },
  "stream-operations-debug-backpressure": { concept: "백프레셔", prompt: "빠른 프로듀서에 압도된 워커를 어떻게 수정합니까?", hint: "배치 크기를 제어하고 처리 용량을 늘립니다.", explanation: "COUNT로 배치 크기를 제한하고, 동일 그룹 내에서 컨슈머를 추가하여 작업을 분산할 수 있습니다." },
  "stream-operations-xautoclaim-cursor": { concept: "XAUTOCLAIM 커서", prompt: "복구 루프가 각 XAUTOCLAIM 응답에서 보존해야 할 것은 무엇입니까?", hint: "XAUTOCLAIM은 SCAN 방식의 반복을 사용합니다.", explanation: "XAUTOCLAIM은 다음 시작 ID를 반환하므로 복구 워커가 PEL 스캔을 이어서 진행할 수 있습니다." },
  "stream-operations-poison-message": { concept: "독성 메시지", prompt: "반복적으로 처리에 실패하는 엔트리를 처리하는 패턴은 무엇입니까?", hint: "안정적인 시스템은 명시적인 실패 처리 경로가 필요합니다.", explanation: "제한된 재시도 후 데드레터 스트림에 이벤트를 보존하면 메인 그룹을 차단하지 않고 검사할 수 있습니다." },
  "stream-operations-pending-idle": { concept: "유휴 펜딩", prompt: "유휴 시간으로 펜딩 엔트리를 필터링하는 XPENDING 옵션은 무엇입니까?", hint: "확장된 XPENDING에서 범위 경계 앞에 위치합니다.", explanation: "XPENDING key group IDLE ms start end count는 충분히 오래 유휴 상태인 펜딩 엔트리를 필터링합니다." },
  "stream-operations-retention-vs-pel": { concept: "보존 안전성", prompt: "공격적인 트리밍이 만들어내는 위험은 무엇입니까?", hint: "보존 정책과 그룹 전달 상태는 연관되어 있지만 별개입니다.", explanation: "트리밍은 스트림 엔트리를 삭제하지만, 컨슈머 그룹은 Redis 버전과 트리밍 동작에 따라 여전히 펜딩 참조를 추적할 수 있습니다." },
  "stream-operations-fanout": { concept: "팬아웃", prompt: "빌링과 분석이 모든 이벤트를 각자 독립적으로 수신하려면 어떻게 해야 합니까?", hint: "각 그룹은 자체 전달 커서를 가집니다.", explanation: "여러 컨슈머 그룹이 동일한 스트림을 독립적으로 읽을 수 있으며, 한 그룹 내의 컨슈머는 작업을 분담합니다." },
  "stream-operations-ordering": { concept: "순서 보장", prompt: "하나의 스트림 내에서 가정해야 하는 순서 보장은 무엇입니까?", hint: "ID가 스트림의 정렬 기준입니다.", explanation: "Redis는 스트림에서 ID 순서로 엔트리를 제공하지만, 컨슈머에 따라 처리 완료 순서는 다를 수 있습니다." },
  "stream-operations-debug-non-idempotent": { concept: "최소 한 번 처리 부작용", prompt: "이 워커의 안정성 버그는 무엇입니까?", hint: "크래시 후 메시지가 다시 전달될 수 있습니다.", explanation: "컨슈머 그룹은 최소 한 번 전달을 보장합니다. 확인 응답되지 않은 메시지는 재시도될 수 있으므로 부작용은 멱등성이 필요합니다." },
  "stream-operations-monitoring": { concept: "모니터링", prompt: "Redis Streams 안정성 대시보드에 포함해야 할 신호는 무엇입니까?", hint: "백로그와 정체된 작업 모두를 관찰합니다.", explanation: "지연은 백로그를 나타내고, 펜딩 수와 유휴 시간은 정체된 작업을, 재시도 횟수는 실패 메시지를 드러냅니다." },
  "stream-operations-debug-count-zero": { concept: "배치 제어", prompt: "이 워커가 프로덕션 배포 전에 추가해야 할 것은 무엇입니까?", hint: "영구 블로킹 읽기 자체는 괜찮을 수 있지만, 반환된 배치와 처리 시간에는 여전히 상한이 필요합니다.", explanation: "COUNT로 배치 크기를 제한하고, 타임아웃이나 하트비트로 작업 진행이 멈춘 워커를 감지하세요." },
  "stream-operations-xack-before-side-effect": { concept: "ACK 타이밍", prompt: "이 워커가 안전하지 않은 이유는 무엇입니까?", hint: "XACK 이후 크래시가 나면 작업이 사라집니다.", explanation: "내구성 있는 처리 성공 이후에 확인 응답해야 합니다. 그렇지 않으면 Redis가 실패한 작업을 재전달하지 않습니다." }
};

// curriculumTopics — English placeholders, translate [conceptKo, answerKo].
export const redisStreamsTopicsKo: Record<string, TopicKo> = {
  "streams vs lists and pubsub": ["스트림 vs 리스트 및 Pub/Sub", "내구성 있는 추가 전용 이벤트 로그"], // hint: Streams keep history and support replay, unlike pure Pub/Sub.
  "XADD shape": ["XADD 형태", "키 ID 필드-값 쌍"], // hint: Every entry has an ID and one or more field/value pairs.
  "stream ID semantics": ["스트림 ID 의미", "밀리초와 시퀀스 번호"], // hint: IDs are ordered and normally generated from server time plus a sequence.
  "field/value entries": ["필드/값 엔트리", "평면적인 필드-값 쌍"], // hint: Streams do not require JSON, though JSON can be stored as a value.
  "XRANGE": ["XRANGE", "포함적 오름차순 ID 범위 조회"], // hint: Use - and + for the full stream range.
  "XREVRANGE": ["XREVRANGE", "내림차순 ID 범위 조회"], // hint: Use it to inspect newest events first.
  "direct XREAD": ["직접 XREAD", "컨슈머 그룹 없이 읽기"], // hint: Use XREAD for simple readers or ad hoc replay.
  "BLOCK option": ["BLOCK 옵션", "새 엔트리 대기"], // hint: Blocking reads avoid busy polling.
  "COUNT option": ["COUNT 옵션", "배치 크기 제한"], // hint: Bound how many entries a reader receives at once.
  "multi-stream reads": ["다중 스트림 읽기", "키 먼저, 그 다음 ID"], // hint: In XREAD STREAMS, list all stream keys before all offsets.
  "XLEN": ["XLEN", "스트림 엔트리 수"], // hint: Length is a quick backlog or retention signal.
  "XDEL": ["XDEL", "ID로 엔트리 삭제"], // hint: Deleting data is separate from acknowledging group delivery.
  "stream memory": ["스트림 메모리", "보존 정책 계획 필요"], // hint: An append-only structure grows unless you trim it.
  "read offsets": ["읽기 오프셋", "마지막으로 읽은 ID가 리플레이를 제어"], // hint: 0-0, $, and explicit IDs mean different read positions.
  "XREAD exclusivity": ["XREAD 배타성", "오프셋보다 큰 ID를 반환"], // hint: The supplied ID is the last seen entry, not the first returned entry.
  "event contract": ["이벤트 계약", "안정적인 필드와 스키마 버전"], // hint: Consumers need to parse events safely over time.
  "idempotent producer": ["멱등 프로듀서", "비즈니스 키로 재시도 중복 제거"], // hint: A network retry may append the same business event twice.
  "pipelined XADD": ["파이프라인 XADD", "네트워크 왕복 일괄 처리"], // hint: Throughput often improves by reducing request/response waits.
  "MAXLEN retention": ["MAXLEN 보존", "근사 길이로 트리밍"], // hint: Use MAXLEN ~ when exact trimming is unnecessary.
  "MINID retention": ["MINID 보존", "ID 미만 엔트리 트리밍"], // hint: Retention can be age-like when IDs track time.
  "XTRIM": ["XTRIM", "독립적인 스트림 트리밍"], // hint: Trim existing streams outside the append path.
  "NOMKSTREAM": ["NOMKSTREAM", "스트림 없으면 실패"], // hint: Use it when stream creation must be controlled elsewhere.
  "payload design": ["페이로드 설계", "가능하면 불투명한 블롭보다 명시적 필드 사용"], // hint: Field-level visibility helps debugging and routing.
  "producer partitioning": ["프로듀서 파티셔닝", "테넌트 또는 집계 키로 파티셔닝"], // hint: A single stream has one ordered lane.
  "explicit IDs and clocks": ["명시적 ID와 클럭", "순서 제어가 필요한 경우 외에는 자동 생성 ID 사용 권장"], // hint: Bad explicit IDs can be rejected for not increasing.
  "producer error handling": ["프로듀서 오류 처리", "제한된 재시도와 내구성 있는 아웃박스"], // hint: Do not lose business events when Redis is briefly unavailable.
  "outbox pattern": ["아웃박스 패턴", "상태 변경과 이벤트 레코드를 함께 커밋"], // hint: Avoid publishing an event for a database change that did not commit.
  "producer observability": ["프로듀서 관찰 가능성", "추가 지연, 오류율, 스트림 길이"], // hint: Watch both write success and backlog growth.
  "schema evolution": ["스키마 진화", "하위 호환 필드 유지"], // hint: Old consumers may read new events.
  "write amplification": ["쓰기 증폭", "중복 파생 이벤트 방지"], // hint: Each event adds memory, replication, and consumer work.
  "consumer group creation": ["컨슈머 그룹 생성", "XGROUP CREATE key group id"], // hint: Create delivery state before workers consume.
  "MKSTREAM": ["MKSTREAM", "그룹 설정 시 빈 스트림 생성"], // hint: Useful for provisioning groups before producers write.
  "new group messages": ["그룹 신규 메시지", "`>`는 아직 전달되지 않은 엔트리를 읽음"], // hint: Use > for normal consumer-group work sharing.
  "consumer names": ["컨슈머 이름", "고유한 워커 신원"], // hint: Redis tracks pending ownership by consumer name.
  "pending entries list": ["펜딩 엔트리 목록", "전달되었지만 확인 응답되지 않은 작업"], // hint: Pending entries are not done until acknowledged.
  "acknowledgement": ["확인 응답", "내구성 있는 성공 후 XACK"], // hint: Acknowledge only after the side effect is safe.
  "XPENDING": ["XPENDING", "펜딩 요약 및 상세 조회"], // hint: Use it to find stuck consumers and stale messages.
  "pending replay": ["펜딩 리플레이", "`>` 대신 이전 ID로 읽기"], // hint: A consumer can re-read its own pending entries.
  "NOACK": ["NOACK", "펜딩 추적 생략"], // hint: Only use it when losing messages is acceptable.
  "XCLAIM": ["XCLAIM", "수동 오래된 메시지 이전"], // hint: Claim specific pending IDs for another consumer.
  "XAUTOCLAIM": ["XAUTOCLAIM", "오래된 펜딩 엔트리 스캔 및 클레임"], // hint: Use cursor-style recovery for many stale entries.
  "XINFO CONSUMERS": ["XINFO CONSUMERS", "컨슈머 유휴 시간 및 펜딩 수 조회"], // hint: Use it to identify stuck or dead workers.
  "group fanout": ["그룹 팬아웃", "독립 구독자당 하나의 컨슈머 그룹"], // hint: Consumers in one group share work; groups each get their own cursor.
  "dead-letter stream": ["데드레터 스트림", "재시도 한도 초과 후 독성 메시지 이동"], // hint: Do not let one bad event block a shard forever.
  "XGROUP SETID": ["XGROUP SETID", "그룹 전달 커서 이동"], // hint: Use carefully for replay or skip-ahead operations.
  "at-least-once processing": ["최소 한 번 처리", "메시지가 다시 전달될 수 있음"], // hint: Crashes before acknowledgement create retries.
  "idempotent consumer": ["멱등 컨슈머", "이벤트 ID 또는 비즈니스 키로 부작용 중복 제거"], // hint: A retry should not charge, email, or mutate twice.
  "backpressure": ["백프레셔", "배치 크기 제한 및 컨슈머 확장"], // hint: Consumers need a controlled way to fall behind and recover.
  "lag monitoring": ["지연 모니터링", "스트림 길이, 그룹 지연, 펜딩 수 관찰"], // hint: Lag tells you how far processing is behind production.
  "XINFO STREAM": ["XINFO STREAM", "스트림 메타데이터 조회"], // hint: Use it for length, first/last entry, and group-related state.
  "retention vs recovery": ["보존 vs 복구", "컨슈머 복구 전에 트리밍 금지"], // hint: Deleting entries can conflict with pending recovery expectations.
  "ordering model": ["순서 모델", "스트림당 ID 기준 정렬"], // hint: Completion order can differ from delivery order when workers run concurrently.
  "stream sharding": ["스트림 샤딩", "병렬 레인을 위한 다중 스트림 키"], // hint: Use partition keys when one stream becomes too hot.
  "Redis Cluster streams": ["Redis 클러스터 스트림", "연관 키를 위한 해시 태그"], // hint: Multi-key stream operations need keys in the same hash slot.
  "persistence": ["영속성", "AOF 또는 RDB 내구성 선택"], // hint: Streams are only as durable as the Redis persistence and replication setup.
  "failover recovery": ["장애 복구", "재연결, 재개, 클레임, 확인 응답"], // hint: Workers need startup logic after Redis or process failure.
  "memory policy": ["메모리 정책", "중요 스트림 데이터 축출 방지"], // hint: Eviction can silently destroy reliability assumptions.
  "alerting": ["알림", "지연, 펜딩, 유휴, 오류에 대한 알림 설정"], // hint: Alert on symptoms that threaten recovery objectives.
  "disaster recovery": ["재해 복구", "백업, 리플레이, 재구성 계획"], // hint: Know how to restore Redis state or rebuild from source systems.
  "capacity planning": ["용량 계획", "쓰기 속도, 보존, 컨슈머 처리량 모델링"], // hint: Reliability depends on capacity matching the event flow.
};
