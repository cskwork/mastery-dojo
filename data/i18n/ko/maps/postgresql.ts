import type { DrillTextKo } from "@/data/i18n/types";
import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for postgresql. English placeholders — translate to Korean.
export const postgresqlChrome: FactoryChromeKo = {
  metadata: {
    title: "PostgresDojo - 초급부터 전문가까지 PostgreSQL 학습",
    description: "KanaDojo에서 영감을 받은 PostgreSQL 학습 앱 — SQL 기초부터 프로덕션 전문성까지."
  },
  welcomeTitle: "PostgresDojo에 오신 것을 환영합니다!",
  welcomeBody: "PostgresDojo는 PostgreSQL을 집중 드릴로 전환해 SQL 유창성, 스키마 설계 판단력, 프로덕션 준비를 익힐 수 있도록 합니다.",
  subjectName: "PostgreSQL",
  footerMeta: "커뮤니티 제작 ~ postgres bloom ~ zen maru gothic ~ v0.1.18 (알파)",
  cards: {
    "pg-foundations": { label: "기초", summary: "테이블, 행, 필터" },
    "pg-querying": { label: "쿼리", summary: "조인, 그룹, 제한" },
    "pg-schema": { label: "스키마", summary: "키, 인덱스, 제약" },
    "pg-production": { label: "프로덕션", summary: "실행계획, VACUUM, 복제" }
  },
  tracks: {
    "pg-foundations": { title: "SQL 기초", focus: "테이블, 행, SELECT, 필터" },
    "pg-querying": { title: "쿼리 유창성", focus: "조인, 집계, 정렬, 제한" },
    "pg-schema": { title: "스키마 설계", focus: "키, 제약, 인덱스, 마이그레이션" },
    "pg-production": { title: "프로덕션 랩", focus: "트랜잭션, 실행계획, VACUUM, 복제, 보안" }
  }
};

// Hand-written baseDrills (56) — English placeholders, translate concept/prompt/hint/explanation.
export const postgresqlBaseDrills: Record<string, DrillTextKo> = {
  "pg-foundations-select": { concept: "SELECT", prompt: "users 테이블의 모든 열을 반환하는 쿼리는 무엇입니까?", hint: "SQL은 SELECT 열 FROM 테이블 순으로 읽습니다.", explanation: "SELECT * FROM users는 PostgreSQL에 users 테이블의 모든 열을 반환하도록 요청합니다." },
  "pg-foundations-table": { concept: "릴레이션", prompt: "PostgreSQL에서 행과 열을 저장하는 객체는 무엇입니까?", hint: "릴레이션은 데이터베이스의 공식 용어입니다.", explanation: "테이블은 행과 열을 저장합니다. PostgreSQL은 내부적으로 이를 릴레이션이라고도 부릅니다." },
  "pg-foundations-where": { concept: "WHERE", prompt: "행이 반환되기 전에 필터링하는 절은 무엇입니까?", hint: "FROM 뒤, ORDER BY 앞에 위치합니다.", explanation: "WHERE는 불리언 조건으로 후보 행을 필터링하며, 이후 절이 결과를 형성하기 전에 평가됩니다." },
  "pg-foundations-debug-quotes": { concept: "문자열 리터럴", prompt: "이 쿼리를 고치려면 어떻게 해야 합니까?", hint: "텍스트 값은 따옴표가 필요합니다.", explanation: "PostgreSQL은 따옴표 없는 active를 식별자로 처리합니다. 문자열 값은 'active'여야 합니다." },
  "pg-foundations-columns": { concept: "프로젝션", prompt: "users에서 name과 email만 반환하는 쿼리는 무엇입니까?", hint: "SELECT와 FROM 사이에 열 목록을 넣습니다.", explanation: "프로젝션은 열을 선택합니다. SELECT name, email FROM users는 해당 두 열을 반환합니다." },
  "pg-foundations-null": { concept: "NULL", prompt: "deleted_at에 값이 없는 행을 찾는 조건식은 무엇입니까?", hint: "NULL은 등호가 아닌 IS로 검사합니다.", explanation: "NULL은 알 수 없거나 누락된 값을 의미하므로 PostgreSQL은 IS NULL과 IS NOT NULL 조건을 사용합니다." },
  "pg-foundations-limit": { concept: "LIMIT", prompt: "결과 행을 처음 10개만 유지하는 절은 무엇입니까?", hint: "ORDER BY가 함께 있을 때 그 뒤에 위치합니다.", explanation: "LIMIT은 PostgreSQL이 결과 집합에서 반환하는 행 수를 제한합니다." },
  "pg-foundations-order": { concept: "ORDER BY", prompt: "최신 게시글을 먼저 반환하는 쿼리는 무엇입니까?", hint: "내림차순 정렬은 DESC를 사용합니다.", explanation: "ORDER BY created_at DESC는 행을 가장 최신 타임스탬프부터 가장 오래된 타임스탬프 순으로 정렬합니다." },
  "pg-foundations-insert-returning": { concept: "RETURNING", prompt: "INSERT 후 생성된 id를 반환하는 절은 무엇입니까?", hint: "PostgreSQL은 INSERT, UPDATE, DELETE가 수정한 행을 반환할 수 있습니다.", explanation: "RETURNING id는 PostgreSQL에 삽입된 행의 id를 돌려보내도록 요청합니다." },
  "pg-foundations-update-where": { concept: "UPDATE 안전성", prompt: "이 구문의 위험은 무엇입니까?", hint: "행 필터 조건을 확인하세요.", explanation: "WHERE 절이 없으면 UPDATE는 대상 테이블의 모든 행에 적용됩니다." },
  "pg-foundations-like": { concept: "패턴 매칭", prompt: "@example.com으로 끝나는 이메일을 찾는 조건은 무엇입니까?", hint: "퍼센트 기호는 임의의 문자 연속과 일치합니다.", explanation: "앞에 %를 붙인 LIKE는 @example.com 접미사 앞의 임의 접두사와 일치합니다." },
  "pg-foundations-case": { concept: "CASE", prompt: "결제된 인보이스를 closed, 나머지를 open으로 표시하는 표현식은 무엇입니까?", hint: "CASE는 제어 흐름 블록이 아닌 표현식입니다.", explanation: "CASE는 행마다 값을 반환하므로 SELECT 목록에서 직접 레이블을 도출할 수 있습니다." },
  "pg-foundations-coalesce": { concept: "COALESCE", prompt: "첫 번째 NULL이 아닌 값을 반환하는 함수는 무엇입니까?", hint: "대체 표시 값으로 자주 사용됩니다.", explanation: "COALESCE(name, 'Anonymous')는 name이 있으면 그 값을, 없으면 대체 문자열을 반환합니다." },
  "pg-foundations-debug-double-quotes": { concept: "식별자", prompt: "active가 텍스트 값일 때 이 쿼리를 고치려면 어떻게 해야 합니까?", hint: "큰따옴표는 열 이름과 같은 식별자에 사용합니다.", explanation: "PostgreSQL은 큰따옴표로 감싼 active를 식별자로 읽습니다. 문자열 리터럴은 작은따옴표를 사용합니다." },
  "pg-querying-join": { concept: "JOIN", prompt: "두 테이블에서 일치하는 행만 유지하는 조인은 무엇입니까?", hint: "일치하는 쌍만 남겨야 할 때 사용하는 기본 조인 종류입니다.", explanation: "INNER JOIN은 양쪽 모두에서 조인 조건이 일치하는 행을 반환합니다." },
  "pg-querying-count": { concept: "집계 함수", prompt: "행 수를 세는 집계 함수는 무엇입니까?", hint: "주로 별표와 함께 작성합니다.", explanation: "COUNT(*)는 각 그룹 또는 전체 결과에서 행 수를 셉니다." },
  "pg-querying-order": { concept: "정렬", prompt: "최신 주문을 먼저 반환하는 쿼리는 무엇입니까?", hint: "내림차순 정렬은 DESC를 사용합니다.", explanation: "ORDER BY created_at DESC는 행을 가장 최신 타임스탬프부터 가장 오래된 타임스탬프 순으로 정렬합니다." },
  "pg-querying-debug-group": { concept: "GROUP BY", prompt: "이 집계 쿼리를 고치려면 어떻게 해야 합니까?", hint: "집계되지 않은 선택 열은 그룹을 정의해야 합니다.", explanation: "customer_id는 집계되지 않으므로 PostgreSQL은 GROUP BY customer_id가 필요합니다." },
  "pg-querying-left-join": { concept: "LEFT JOIN", prompt: "일치하는 주문이 없어도 모든 고객을 유지하는 조인은 무엇입니까?", hint: "일치하지 않는 오른쪽은 NULL이 됩니다.", explanation: "LEFT JOIN은 왼쪽 테이블의 모든 행을 유지하고 일치하지 않는 오른쪽 열은 NULL로 채웁니다." },
  "pg-querying-having": { concept: "HAVING", prompt: "COUNT(*)가 계산된 후 그룹을 필터링하는 절은 무엇입니까?", hint: "WHERE는 그룹화 전에 행을 필터링합니다.", explanation: "HAVING은 COUNT(*)와 같은 집계 함수가 계산된 후 그룹화된 행을 필터링합니다." },
  "pg-querying-distinct-on": { concept: "DISTINCT ON", prompt: "일치하는 ORDER BY와 함께 고객당 최신 행을 유지할 수 있는 PostgreSQL 기능은 무엇입니까?", hint: "PostgreSQL 고유 기능으로 ORDER BY와 함께 사용합니다.", explanation: "DISTINCT ON은 나열된 표현식마다 첫 번째 행을 유지하며, ORDER BY가 어떤 행이 선택될지 결정합니다." },
  "pg-querying-cte": { concept: "CTE", prompt: "공통 테이블 표현식을 시작하는 키워드는 무엇입니까?", hint: "임시 명명 쿼리가 SELECT 앞에 옵니다.", explanation: "WITH는 메인 쿼리가 참조할 수 있는 하나 이상의 공통 테이블 표현식을 정의합니다." },
  "pg-querying-window-row-number": { concept: "윈도우 함수", prompt: "각 계정 내에서 행을 최신순으로 순위 매기는 표현식은 무엇입니까?", hint: "윈도우 함수는 OVER를 사용합니다.", explanation: "OVER는 파티션과 정렬을 정의하면서 결과의 개별 행을 유지합니다." },
  "pg-querying-exists": { concept: "EXISTS", prompt: "일치하는 서브쿼리 행이 존재하는지 확인하는 조건은 무엇입니까?", hint: "서브쿼리는 행을 찾을 수 있음을 증명하기만 하면 됩니다.", explanation: "EXISTS는 외부 행에 대해 서브쿼리가 하나 이상의 행을 반환할 때 true입니다." },
  "pg-querying-debug-left-where": { concept: "외부 조인 필터", prompt: "이 LEFT JOIN이 INNER JOIN처럼 동작하는 이유는 무엇입니까?", hint: "조인 후 일치하지 않는 주문 열은 NULL입니다.", explanation: "오른쪽 테이블에 대한 WHERE 조건은 일치하지 않는 NULL 행을 제거합니다. 외부 조인을 유지하려면 해당 조건을 ON에 넣어야 합니다." },
  "pg-querying-union-all": { concept: "집합 연산", prompt: "두 SELECT 결과를 합칠 때 중복을 유지하는 집합 연산자는 무엇입니까?", hint: "일반 UNION은 중복 행을 제거합니다.", explanation: "UNION ALL은 중복 제거 없이 두 결과 집합을 덧붙입니다." },
  "pg-querying-filter-aggregate": { concept: "집계 FILTER", prompt: "전체 행 집합을 필터링하지 않고 하나의 집계만 필터링하는 절은 무엇입니까?", hint: "집계 호출 뒤에 위치합니다.", explanation: "COUNT(*) FILTER (WHERE status = 'paid')는 일치하는 행만 세면서 다른 집계는 별도 필터를 사용할 수 있습니다." },
  "pg-querying-debug-window-where": { concept: "윈도우 필터링", prompt: "row_number로 필터링하려는 이 시도를 어떻게 고쳐야 합니까?", hint: "WHERE는 SELECT 목록 별칭이 생기기 전에 평가됩니다.", explanation: "서브쿼리나 CTE에서 rn을 계산한 후 외부 쿼리에서 rn = 1로 필터링하세요." },
  "pg-schema-primary-key": { concept: "기본 키", prompt: "기본 키가 보장하는 것은 무엇입니까?", hint: "테이블에서 하나의 행을 식별하는 데 사용할 수 있습니다.", explanation: "기본 키는 유일하고 NULL이 아니므로 안정적인 행 식별자가 됩니다." },
  "pg-schema-foreign-key": { concept: "외래 키", prompt: "자식 행을 부모 테이블에 연결하는 제약은 무엇입니까?", hint: "테이블 간 참조를 강제합니다.", explanation: "외래 키는 자식 값이 참조된 부모 테이블의 행과 일치하도록 유지합니다." },
  "pg-schema-index": { concept: "인덱스", prompt: "사용자 이메일 조회를 위한 인덱스를 생성하는 구문은 무엇입니까?", hint: "PostgreSQL은 CREATE INDEX 이름 ON 테이블(열)을 사용합니다.", explanation: "인덱스는 PostgreSQL에 이메일 조건에 대한 별도의 접근 경로를 제공합니다." },
  "pg-schema-debug-unique": { concept: "유일 제약", prompt: "중복 사용자 이름을 방지하는 변경 사항은 무엇입니까?", hint: "데이터베이스가 중복을 스스로 거부해야 합니다.", explanation: "UNIQUE 제약은 PostgreSQL이 동일한 사용자 이름을 공유하는 두 행을 거부하도록 강제합니다." },
  "pg-schema-check": { concept: "CHECK", prompt: "음수 계좌 잔액을 거부하는 제약은 무엇입니까?", hint: "쓰기 시점에 불리언 표현식을 사용합니다.", explanation: "CHECK 제약은 표현식이 거짓인 삽입 또는 갱신 행을 거부합니다." },
  "pg-schema-not-null": { concept: "NOT NULL", prompt: "모든 사용자가 이메일을 가지도록 요구하는 열 정의는 무엇입니까?", hint: "명시적 NULL 허용 제약을 사용합니다.", explanation: "NOT NULL은 해당 열에 NULL 값이 저장되지 않도록 방지합니다." },
  "pg-schema-identity": { concept: "ID 열", prompt: "SQL 표준 자동 생성 ID 열을 정의하는 키워드 쌍은 무엇입니까?", hint: "구형 serial 방식의 모던 대안입니다.", explanation: "GENERATED ALWAYS AS IDENTITY는 PostgreSQL에 해당 열의 값을 생성하도록 지시합니다." },
  "pg-schema-composite-index": { concept: "복합 인덱스", prompt: "WHERE tenant_id = ? ORDER BY created_at DESC를 가장 잘 지원하는 인덱스는 무엇입니까?", hint: "등호 비교 열을 정렬 열보다 앞에 놓습니다.", explanation: "tenant_id와 created_at에 대한 복합 인덱스는 테넌트를 필터링하고 타임스탬프 순으로 행을 읽을 수 있습니다." },
  "pg-schema-partial-index": { concept: "부분 인덱스", prompt: "대기 중인 작업만 대상으로 하는 인덱스는 무엇입니까?", hint: "부분 인덱스에는 WHERE 조건이 있습니다.", explanation: "부분 인덱스는 조건에 일치하는 행에 대한 항목만 유지하여 집중적인 워크로드의 크기를 줄입니다." },
  "pg-schema-expression-index": { concept: "표현식 인덱스", prompt: "대소문자를 구분하지 않는 이메일 조회를 위해 어떤 함수를 인덱싱하겠습니까?", hint: "쿼리는 인덱스와 동일한 표현식을 사용해야 합니다.", explanation: "CREATE INDEX ON users (lower(email))은 lower(email)을 비교하는 조건을 지원합니다." },
  "pg-schema-debug-jsonb-index": { concept: "JSONB 인덱스", prompt: "payload @> ... 같은 JSONB 포함 쿼리에 도움이 되는 인덱스 타입은 무엇입니까?", hint: "JSONB 포함은 역인덱스를 사용할 수 있습니다.", explanation: "GIN 인덱스는 JSONB 포함 및 키 존재 검색을 효율적으로 만드는 항목을 저장합니다." },
  "pg-schema-migration-transaction": { concept: "마이그레이션", prompt: "호환 가능한 스키마 변경을 트랜잭션으로 감싸는 이유는 무엇입니까?", hint: "원자적 배포 단계를 생각해 보세요.", explanation: "트랜잭션 DDL은 스키마 변경 집합이 함께 성공하거나 이전 스키마를 그대로 유지하게 합니다." },
  "pg-schema-debug-check-cross-row": { concept: "CHECK 한계", prompt: "이 CHECK 제약이 잘못된 도구인 이유는 무엇입니까?", hint: "CHECK 제약은 삽입 또는 갱신 중인 행에 의존해야 합니다.", explanation: "다른 테이블 행에 의존하는 규칙에는 UNIQUE, EXCLUDE, FOREIGN KEY 또는 트리거를 사용하세요." },
  "pg-schema-enum-lookup": { concept: "도메인 모델링", prompt: "상태에 메타데이터와 관리 편집이 필요할 때 보통 더 발전시키기 쉬운 설계는 무엇입니까?", hint: "상태가 자체 생명주기를 가질 때는 데이터로 모델링합니다.", explanation: "룩업 테이블은 레이블, 순서, 메타데이터, 권한을 저장하면서 참조 무결성을 유지할 수 있습니다." },
  "pg-production-transaction": { concept: "트랜잭션", prompt: "트랜잭션을 커밋하는 명령은 무엇입니까?", hint: "트랜잭션의 모든 변경 사항을 영구적으로 만듭니다.", explanation: "COMMIT은 트랜잭션을 종료하고 성공적인 변경 사항을 영속화합니다." },
  "pg-production-explain": { concept: "쿼리 실행계획", prompt: "PostgreSQL이 쿼리를 실행할 계획을 보여 주는 명령은 무엇입니까?", hint: "실제 런타임을 위해 ANALYZE와 함께 사용할 수 있습니다.", explanation: "EXPLAIN은 스캔, 조인, 비용을 검사할 수 있도록 쿼리 실행계획을 표시합니다." },
  "pg-production-vacuum": { concept: "유지보수", prompt: "갱신 및 삭제로 남겨진 데드 튜플을 처리하는 프로세스는 무엇입니까?", hint: "정상 시스템에서는 autovacuum이 자동으로 실행합니다.", explanation: "VACUUM은 데드 행 버전을 제거하여 공간을 재사용하고 플래너 통계를 유용하게 유지합니다." },
  "pg-production-debug-pool": { concept: "커넥션 풀링", prompt: "요청마다 새 데이터베이스 연결을 여는 앱을 고치는 방법은 무엇입니까?", hint: "제한된 수의 연결을 재사용하세요.", explanation: "풀은 연결 변동을 제한하고 너무 많은 활성 클라이언트로부터 PostgreSQL을 보호합니다." },
  "pg-production-isolation": { concept: "격리 수준", prompt: "PostgreSQL의 기본 트랜잭션 격리 수준은 무엇입니까?", hint: "각 구문은 해당 구문 기준으로 커밋된 데이터를 봅니다.", explanation: "Read Committed는 PostgreSQL 트랜잭션의 기본 격리 수준입니다." },
  "pg-production-serializable-retry": { concept: "직렬화 재시도", prompt: "직렬화 오류 후 앱이 해야 할 일은 무엇입니까?", hint: "트랜잭션이 더 이상 하나의 단위로 성공하지 못했습니다.", explanation: "직렬화 가능 트랜잭션은 동시성 하에서 실패할 수 있으므로 애플리케이션 코드는 처음부터 트랜잭션을 재시도해야 합니다." },
  "pg-production-explain-analyze": { concept: "EXPLAIN ANALYZE", prompt: "쿼리를 실행하고 실제 타이밍을 보고하는 EXPLAIN 옵션은 무엇입니까?", hint: "구문이 실제로 실행되므로 쓰기 작업에는 주의하여 사용하세요.", explanation: "EXPLAIN ANALYZE는 구문을 실행하고 실제 행 수와 타이밍을 보고합니다." },
  "pg-production-debug-seq-scan": { concept: "실행계획 읽기", prompt: "이 높은 선택성 조회에 도움이 될 가능성이 높은 것은 무엇입니까?", hint: "실행계획이 좁은 부분집합을 찾기 위해 많은 행을 스캔하고 있습니다.", explanation: "customer_id에 대한 인덱스는 선택적 고객 조회에 더 저렴한 접근 경로를 플래너에 제공합니다." },
  "pg-production-debug-idle-transaction": { concept: "유휴 트랜잭션", prompt: "이 앱 동작이 위험한 이유는 무엇입니까?", hint: "트랜잭션이 종료되지 않았습니다.", explanation: "오래 열린 트랜잭션은 잠금과 구 행 버전을 유지하여 동시성과 VACUUM 진행에 악영향을 줍니다." },
  "pg-production-deadlock": { concept: "데드락", prompt: "관련 행을 갱신할 때 데드락을 줄이는 방법은 무엇입니까?", hint: "모든 트랜잭션이 동일한 순서로 잠금을 획득해야 합니다.", explanation: "일관된 잠금 순서는 트랜잭션이 순환 대기 상태에 빠지는 것을 방지합니다." },
  "pg-production-autovacuum": { concept: "autovacuum", prompt: "VACUUM과 ANALYZE를 자동으로 실행하는 백그라운드 시스템은 무엇입니까?", hint: "일상적인 유지보수가 완전히 수동으로 이루어지지 않도록 합니다.", explanation: "Autovacuum은 VACUUM과 ANALYZE 작업을 예약하여 일반 갱신 및 삭제가 테이블을 영원히 저하시키지 않도록 합니다." },
  "pg-production-logical-replication": { concept: "논리 복제", prompt: "PostgreSQL 논리 복제 설정의 핵심 쌍은 무엇입니까?", hint: "한쪽은 변경 사항을 게시하고 다른 쪽은 구독합니다.", explanation: "논리 복제는 퍼블리케이션에서 서브스크립션으로 변경 사항을 전송합니다." },
  "pg-production-pitr": { concept: "백업 복구", prompt: "베이스 백업 이상으로 특정 시점 복구를 가능하게 하는 것은 무엇입니까?", hint: "복구는 WAL(write-ahead log)을 재생합니다.", explanation: "베이스 백업과 아카이브된 WAL을 함께 사용하면 PostgreSQL이 특정 시점으로 복원할 수 있습니다." },
  "pg-production-least-privilege": { concept: "롤", prompt: "이 애플리케이션 롤 설정의 문제는 무엇입니까?", hint: "애플리케이션 계정은 필요한 권한만 가져야 합니다.", explanation: "최소 권한은 피해 범위를 줄입니다. 앱 롤은 superuser가 아닌 대상 권한을 받아야 합니다." }
};

// curriculumTopics — English placeholders, translate [conceptKo, answerKo].
export const postgresqlTopicsKo: Record<string, TopicKo> = {
  "relational model": ["관계형 모델","테이블, 행, 열, 릴레이션","사실(fact)을 정의된 열을 가진 테이블의 행으로 모델링한다."], // hint: Model facts as rows in tables with defined columns.
  "psql basics": ["psql 기초","\\d 및 \\? 메타 명령어","psql 메타 명령어로 스키마를 조회하고 도움말을 확인한다."], // hint: Use psql meta commands to inspect schema and help.
  "SELECT list": ["SELECT 목록","필요한 열만 선택","호출자가 안정적인 출력을 필요로 할 때는 SELECT *를 피한다."], // hint: Avoid SELECT * when callers need stable output.
  "WHERE predicates": ["WHERE 조건","그룹화 전 불리언 필터","WHERE는 GROUP BY와 SELECT 출력 전에 후보 행을 줄인다."], // hint: WHERE reduces candidate rows before GROUP BY and SELECT output.
  "NULL logic": ["NULL 논리","참, 거짓, 알 수 없음","NULL 비교는 참 또는 거짓이 아닌 알 수 없음(unknown)이 될 수 있다."], // hint: NULL comparisons can become unknown rather than true or false.
  "ORDER BY and LIMIT": ["ORDER BY와 LIMIT","제한 전 결정적 정렬","ORDER BY 없는 LIMIT은 불안정한 부분집합을 반환할 수 있다."], // hint: LIMIT without ORDER BY can return unstable subsets.
  "DML RETURNING": ["DML RETURNING","수정된 행 반환","INSERT, UPDATE, DELETE는 변경된 행의 값을 돌려보낼 수 있다."], // hint: INSERT, UPDATE, and DELETE can send changed row values back.
  "transaction basics": ["트랜잭션 기초","BEGIN, COMMIT, ROLLBACK","연관된 쓰기 작업을 묶어 함께 성공하거나 함께 실패하도록 한다."], // hint: Group related writes so they succeed or fail together.
  "data types": ["데이터 타입","의미 있는 열 타입 선택","타입은 데이터 계약의 일부다."], // hint: Types are part of the data contract.
  "time handling": ["시간 처리","순간 저장에는 timestamptz","전 세계적인 시점(point in time)은 표시 시간대와 독립적으로 저장한다."], // hint: Store global points in time independently from display time zones.
  "expressions and functions": ["표현식과 함수","SELECT와 WHERE의 계산 값","SQL 표현식은 값을 도출, 변환, 비교할 수 있다."], // hint: SQL expressions can derive, transform, and compare values.
  "CASE and COALESCE": ["CASE와 COALESCE","조건 값과 대체값","레이블, 대체 필드, 파생 상태에는 SQL 표현식을 사용한다."], // hint: Use SQL expressions for labels, fallback fields, and derived status.
  "views": ["뷰","저장된 쿼리 인터페이스","SQL을 곳곳에 중복하지 않고 안정적인 쿼리 인터페이스를 노출한다."], // hint: Expose a stable query shape without duplicating SQL everywhere.
  "query parameters": ["쿼리 파라미터","문자열 연결 대신 바인드 값","사용자 입력을 SQL 텍스트에 직접 연결(concatenate)해서는 안 된다."], // hint: User input should never be concatenated into SQL text.
  "schemas and search_path": ["스키마와 search_path","데이터베이스 객체 네임스페이스","스키마는 하나의 데이터베이스 안에서 테이블, 함수, 권한을 구조화한다."], // hint: Schemas organize tables, functions, and permissions inside one database.
  "inner and outer joins": ["내부 조인과 외부 조인","ON 조건으로 행 매칭","양쪽이 모두 일치해야 할 때는 INNER를, 한쪽을 반드시 유지해야 할 때는 OUTER를 선택한다."], // hint: Choose INNER when both sides must match; choose OUTER when one side must be preserved.
  "join cardinality": ["조인 카디널리티","일대일, 일대다, 다대다 이해","예상치 못한 중복 행은 잘못 파악된 관계(relationship)에서 비롯되는 경우가 많다."], // hint: Unexpected duplicates often come from misunderstood relationships.
  "aggregation": ["집계","집계 함수를 사용한 GROUP BY","count, sum, avg, min, max를 적용하기 전에 먼저 행을 그룹화한다."], // hint: Group rows before applying count, sum, avg, min, or max.
  "HAVING": ["HAVING","그룹화된 결과 필터링","집계 값이 산출된 후에 그룹을 필터링할 때 HAVING을 사용한다."], // hint: Use HAVING after aggregate values exist.
  "DISTINCT ON": ["DISTINCT ON","정렬로 그룹당 첫 번째 행 유지","PostgreSQL은 키별로 정렬된 대표 행 하나를 유지할 수 있다."], // hint: PostgreSQL can keep one ordered representative per key.
  "subqueries": ["서브쿼리","중첩 SELECT 표현식","쿼리 결과를 필터, 스칼라 값, 또는 파생 릴레이션으로 사용한다."], // hint: Use a query result as a filter, scalar value, or derived relation.
  "EXISTS": ["EXISTS","세미조인 존재 검사","연관된 행이 적어도 하나 존재하는지 확인할 때 사용한다."], // hint: Ask whether at least one related row exists.
  "common table expressions": ["공통 테이블 표현식","WITH로 명명된 서브쿼리","가독성이나 재귀(recursion)를 위해 중간 쿼리 단계에 이름을 붙인다."], // hint: Name intermediate query steps for readability or recursion.
  "window functions": ["윈도우 함수","OVER, PARTITION BY, ORDER BY","행을 집계하지 않고 순위나 누적 합계를 계산한다."], // hint: Compute rankings or running totals without collapsing rows.
  "LATERAL joins": ["LATERAL 조인","행별 서브쿼리 접근","서브쿼리가 FROM 절의 앞쪽 항목 열을 참조할 수 있도록 한다."], // hint: Let a subquery refer to columns from earlier FROM items.
  "recursive CTE": ["재귀 CTE","WITH RECURSIVE","WITH RECURSIVE로 SQL에서 트리, 그래프, 계층 구조를 순회한다."], // hint: Traverse trees, graphs, and hierarchies in SQL.
  "set operations": ["집합 연산","UNION, INTERSECT, EXCEPT","호환되는 SELECT 결과를 집합으로 결합한다."], // hint: Combine compatible SELECT results as sets.
  "JSONB querying": ["JSONB 쿼리","연산자와 GIN 인덱스","포함(containment) 검사와 키 추출에는 jsonb 연산자를 사용한다."], // hint: Use jsonb operators for containment and key extraction.
  "full-text search": ["전문 검색","tsvector와 tsquery","원시 LIKE 스캔 대신 정규화된 tsvector 항목으로 검색한다."], // hint: Search normalized terms rather than raw LIKE scans.
  "EXPLAIN basics": ["EXPLAIN 기초","스캔, 조인, 비용, 행 읽기","쿼리 실행계획은 PostgreSQL이 SQL을 어떻게 실행할지 설명한다."], // hint: A query plan explains how PostgreSQL intends to execute SQL.
  "primary and foreign keys": ["기본 키와 외래 키","식별자와 참조 무결성","키는 안정적인 행 식별자와 유효한 관계를 정의한다."], // hint: Keys define stable row identity and valid relationships.
  "core constraints": ["핵심 제약","UNIQUE, CHECK, NOT NULL","데이터베이스가 유효하지 않은 사실(fact)을 스스로 거부하도록 한다."], // hint: Let the database reject invalid facts.
  "identity and sequences": ["ID와 시퀀스","GENERATED AS IDENTITY","숫자 ID를 직접 관리하는 대신 GENERATED AS IDENTITY 표준 생성 값을 사용한다."], // hint: Use standard generated values instead of hand-managing numeric IDs.
  "B-tree indexes": ["B-트리 인덱스","등호, 범위, 정렬 접근","B-tree는 일반적인 많은 조건 술어에 대한 기본 인덱스다."], // hint: B-tree is the default index for many common predicates.
  "composite indexes": ["복합 인덱스","최좌측 접두사와 정렬 순서","열 순서는 조건 술어와 정렬 순서에 맞춰야 한다."], // hint: Column order should match predicates and ordering.
  "partial and expression indexes": ["부분 인덱스와 표현식 인덱스","부분집합 또는 계산 값 인덱싱","워크로드가 실제로 검색하는 행이나 표현식만 인덱싱한다."], // hint: Index only the rows or expression your workload actually searches.
  "GIN and BRIN indexes": ["GIN 인덱스와 BRIN 인덱스","역인덱스와 블록 범위 인덱스","jsonb, 전문 검색, 배열에는 GIN을, 자연 정렬된 대형 테이블에는 BRIN 같은 전문 인덱스를 사용한다."], // hint: Use specialized indexes for jsonb/search/arrays or naturally ordered large tables.
  "schema migrations": ["스키마 마이그레이션","소규모 가역적 트랜잭션 변경","프로덕션 스키마는 통제된 단계로 변경한다."], // hint: Change production schema in controlled steps.
  "DDL lock impact": ["DDL 잠금 영향","장기 블로킹 스키마 변경 방지","일부 ALTER 작업은 쓰기 또는 읽기를 차단할 수 있다."], // hint: Some ALTER operations can block writes or reads.
  "table partitioning": ["테이블 파티셔닝","범위, 목록, 해시 파티션","대형 테이블은 접근 및 보존 패턴에 따라 파티셔닝한다."], // hint: Partition large tables by access and retention patterns.
  "row-level security": ["행 수준 보안","행 접근당 정책","데이터베이스 내부에서 조회하거나 수정할 수 있는 행을 정책으로 제한한다."], // hint: Restrict visible or writable rows inside the database.
  "triggers": ["트리거","행 변경에 대한 데이터베이스 측 반응","데이터에 가까이 있어야 하는 불변 조건이나 감사(audit) 동작에만 트리거를 절제하여 사용한다."], // hint: Use triggers sparingly for invariants or audit behavior that must live near the data.
  "materialized views": ["구체화된 뷰","갱신이 필요한 저장된 쿼리 결과","비용이 많이 드는 파생 데이터를 일정에 따라 갱신할 수 있을 때 사용한다."], // hint: Use when expensive derived data can be refreshed on a schedule.
  "extensions": ["익스텐션","거버넌스를 갖춘 CREATE EXTENSION","CREATE EXTENSION은 기능을 추가하지만 의도적으로 활성화해야 한다."], // hint: Extensions add capabilities but should be enabled intentionally.
  "domain modeling choices": ["도메인 모델링 선택","도메인, 열거형, 룩업 테이블","값이 변화하는 방식에 맞는 제약 형태를 선택한다."], // hint: Pick the constraint shape that matches how values evolve.
  "isolation levels": ["격리 수준","Read Committed, Repeatable Read, Serializable","동시 트랜잭션에 대한 가시성 보장 수준을 선택한다."], // hint: Choose visibility guarantees for concurrent transactions.
  "locks and deadlocks": ["잠금과 데드락","짧은 트랜잭션과 일관된 잠금 순서","동시성 버그는 긴 트랜잭션이나 역순 갱신에서 비롯되는 경우가 많다."], // hint: Concurrency bugs often come from long transactions or reversed update order.
  "VACUUM and autovacuum": ["VACUUM과 autovacuum","데드 튜플 제거 및 통계 갱신","MVCC는 반드시 유지 관리해야 하는 구 행 버전을 남긴다."], // hint: MVCC leaves old row versions that must be maintained.
  "planner statistics": ["플래너 통계","ANALYZE와 확장 통계","플래너는 행 수와 분포 추정치에 의존한다."], // hint: The planner depends on row count and distribution estimates.
  "EXPLAIN ANALYZE BUFFERS": ["EXPLAIN ANALYZE BUFFERS","실제 런타임과 I/O 증거","실제 행 수, 소요 시간, 루프 횟수, 버퍼 읽기를 확인한다."], // hint: Look at real rows, time, loops, and buffer reads.
  "connection pooling": ["커넥션 풀링","제한된 재사용 가능 연결","PostgreSQL 연결은 비용이 없는 것이 아니다."], // hint: PostgreSQL connections are not free.
  "backup and PITR": ["백업과 PITR","베이스 백업과 아카이브된 WAL","덤프(dump)만으로는 완전한 특정 시점 복구(point-in-time recovery) 계획이 되지 않는다."], // hint: A dump alone is not a complete point-in-time recovery plan.
  "replication": ["복제","물리 복제와 논리 복제","고가용성(HA) 또는 데이터 배포 요건에 맞는 복제 방식을 선택한다."], // hint: Use the replication type that matches HA or data distribution needs.
  "roles and privileges": ["롤과 권한","최소 권한 부여","애플리케이션 롤은 필요한 접근 권한만 가져야 한다."], // hint: Application roles should have only required access.
  "timeouts": ["타임아웃","statement_timeout, lock_timeout, 유휴 타임아웃","statement_timeout, lock_timeout으로 대기 시간과 과부하 작업에 상한을 설정한다."], // hint: Bound waiting and runaway work.
  "monitoring": ["모니터링","pg_stat 뷰, 로그, 쿼리 메트릭","처리량, 지연 시간, 잠금, 복제, 테이블 비대화(bloat), 느린 쿼리를 모니터링한다."], // hint: Watch throughput, latency, locks, replication, bloat, and slow queries.
  "high availability": ["고가용성","레플리카, 페일오버, 검증된 복구","고가용성(HA)은 단순히 레플리카를 두는 것이 아닌 운영 체계 전체다."], // hint: HA is an operational system, not just a replica.
  "version upgrades": ["버전 업그레이드","롤백 경로를 갖춘 계획된 업그레이드","메이저 업그레이드는 호환성, 익스텐션, 성능 검토가 필요하다."], // hint: Major upgrades require compatibility, extension, and performance checks.
  "multi-tenancy": ["멀티 테넌시","테넌트 키, 스키마, 또는 데이터베이스","격리 전략은 쿼리, 보안, 마이그레이션, 운영 전반에 영향을 미친다."], // hint: Isolation strategy affects queries, security, migrations, and operations.
  "database incidents": ["데이터베이스 인시던트","관찰, 격리, 복구, 기록","프로덕션 장애에는 관찰, 격리, 복구, 기록으로 이어지는 실전 대응 루프가 필요하다."], // hint: Production failures need a practiced response loop.
};
