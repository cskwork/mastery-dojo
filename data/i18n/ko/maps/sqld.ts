import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

// Korean chrome for sqld. Values start as English placeholders — translate to Korean.
export const sqldChrome: FactoryChromeKo = {
  metadata: {
    title: "SQLDDojo - SQLD 기초부터 전문가까지",
    description: "KanaDojo 스타일의 SQLD 드릴 — DataQ SQL 개발자 시험 범위에 맞춘 실전 문제."
  },
  welcomeTitle: "SQLDDojo에 오신 것을 환영합니다!",
  welcomeBody: "SQLDDojo는 SQLD를 기초부터 전문가 수준까지 집중 드릴로 마스터할 수 있게 도와줍니다.",
  subjectName: "SQLD",
  footerMeta: "커뮤니티 제작 ~ SQLD 블룸 ~ DataQ 시험 범위 기반 ~ v0.1.18 (알파)",
  cards: {
    "sqld-modeling": { label: "데이터 모델링", summary: "엔티티, 키, ERD" },
    "sqld-sql-basic": { label: "SQL 기본", summary: "SELECT, 조인, 그룹" },
    "sqld-sql-application": { label: "SQL 활용", summary: "윈도우 함수, DDL, TCL" },
    "sqld-exam": { label: "시험 대비", summary: "시간 관리, 함정 문제, 복습" }
  },
  tracks: {
    "sqld-modeling": { title: "데이터 모델링", focus: "엔티티, 속성, 관계, 식별자" },
    "sqld-sql-basic": { title: "SQL 기본", focus: "SELECT, 조건 필터링, 조인, 그룹핑, DML" },
    "sqld-sql-application": { title: "SQL 활용", focus: "윈도우 함수, DDL, DCL, TCL, 실행 순서" },
    "sqld-exam": { title: "시험 전문가", focus: "공식 시험 범위, 시간 관리, 함정 문제, 오답 정리" }
  }
};

// One entry per curriculum topic, keyed by the English concept (do NOT change keys).
// Value is [conceptKo, answerKo] — translate both to Korean. The trailing hint comment
// is English context only and is not emitted.
export const sqldTopicsKo: Record<string, TopicKo> = {
  "data modeling overview": ["데이터 모델링 개요","실제 업무 데이터를 구조화하여 표현","모델링은 업무 규칙을 논리적 데이터베이스 구조로 연결한다."], // hint: Modeling connects business rules to logical database structure.
  "entity": ["엔티티","독립적인 식별성을 가진 대상","엔티티는 모델의 핵심 명사가 된다."], // hint: Entities become central nouns in the model.
  "attribute": ["속성","엔티티의 특성을 나타내는 항목","속성은 엔티티에 대해 저장하는 사실을 기술한다."], // hint: Attributes describe facts stored about an entity.
  "relationship": ["관계","엔티티 간의 연관성","관계는 엔티티 인스턴스 간의 연결 방식을 나타낸다."], // hint: Relationships show how entity instances connect.
  "identifier": ["식별자","행을 구별하는 속성 집합","식별자는 유일성과 참조를 지원한다."], // hint: Identifiers support uniqueness and reference.
  "normalization": ["정규화","종속성을 기반으로 중복 제거","정규화는 반복되거나 종속된 사실을 분리한다."], // hint: Normalization separates repeating or dependent facts.
  "denormalization": ["반정규화","의도적인 중복 허용","반정규화는 쓰기 단순성 대신 읽기 성능이나 보고를 위해 중복을 허용한다."], // hint: Denormalization trades write simplicity for read performance or reporting.
  "ERD reading": ["ERD 해독","엔티티와 카디널리티 파악","ERD는 물리적 SQL 구현 전에 구조를 표현한다."], // hint: ERDs show structure before physical SQL implementation.
  "cardinality": ["카디널리티","연관된 인스턴스의 수","카디널리티는 1:1, 1:N, N:M 연결 관계를 설명한다."], // hint: Cardinality explains one-to-one, one-to-many, and many-to-many links.
  "optionality": ["선택성","관계 참여의 필수 여부","선택성은 관계가 반드시 존재해야 하는지 여부를 나타낸다."], // hint: Optionality tells whether a relationship must exist.
  "transaction modeling": ["트랜잭션 모델링","업무 이벤트 데이터 포착","트랜잭션은 업무 상태를 변경하는 이벤트를 기록한다."], // hint: Transactions record events that change business state.
  "NULL attributes": ["NULL 속성","알 수 없거나 해당 없는 값","NULL 처리는 제약 조건, 조인, 조건식에 영향을 미친다."], // hint: NULL handling affects constraints, joins, and predicates.
  "natural key": ["자연키","업무 의미를 가진 식별자","자연키는 도메인에서 비롯되며 업무 규칙에 따라 변경될 수 있다."], // hint: Natural keys come from the domain and can change with business rules.
  "surrogate key": ["대리키","시스템이 생성하는 식별자","대리키는 업무 키가 불편할 때 참조를 안정적으로 유지한다."], // hint: Surrogate keys stabilize references when business keys are awkward.
  "domain integrity": ["도메인 무결성","속성별 허용 값 범위","도메인 규칙은 허용 가능한 데이터 값을 제한한다."], // hint: Domain rules constrain allowed data values.
  "logical model": ["논리 모델","기술 독립적 데이터 구조","논리 모델은 물리적 저장 결정 이전에 데이터를 기술한다."], // hint: Logical models describe data before physical storage decisions.
  "physical model": ["물리 모델","데이터베이스 종속 구현","물리 모델은 테이블, 인덱스, 타입, 저장 방식 선택을 추가한다."], // hint: Physical models add tables, indexes, types, and storage choices.
  "model quality": ["모델 품질","정확성, 일관성, 단순성","품질 높은 모델은 불필요한 중복 없이 규칙을 표현한다."], // hint: Quality models represent rules without unnecessary duplication.
  "relational database": ["관계형 데이터베이스","키로 연결된 테이블 구조","관계형 시스템은 데이터를 릴레이션에 저장하고 무결성을 강제한다."], // hint: Relational systems store data in relations and enforce integrity.
  "SELECT": ["SELECT","지정한 열과 행을 반환","SELECT는 테이블 표현식에서 열과 표현식을 선택한다."], // hint: SELECT chooses columns and expressions from a table expression.
  "WHERE": ["WHERE","조건으로 행 필터링","WHERE는 그룹화 및 정렬 이전에 행을 제거한다."], // hint: WHERE removes rows before grouping and ordering.
  "comparison operators": ["비교 연산자","= <> < > <= >=","비교 연산자는 불리언 조건식을 구성한다."], // hint: Comparisons build boolean predicates.
  "logical operators": ["논리 연산자","AND OR NOT","논리 연산자는 조건식을 결합하거나 반전한다."], // hint: Logical operators combine or invert predicates.
  "NULL logic": ["NULL 논리","3값 논리","NULL 비교는 IS NULL로 검사하지 않으면 unknown을 반환한다."], // hint: NULL comparisons produce unknown unless tested with IS NULL.
  "single-row functions": ["단일행 함수","행별로 값을 변환","단일행 함수는 집계 이전에 행별로 적용된다."], // hint: Single-row functions apply per row before aggregation.
  "aggregate functions": ["집계 함수","다수 행을 요약","COUNT, SUM, AVG, MIN, MAX는 그룹을 요약한다."], // hint: COUNT, SUM, AVG, MIN, and MAX summarize groups.
  "GROUP BY": ["GROUP BY","집계 그룹 정의","GROUP BY는 각 집계가 처리할 행의 범위를 정의한다."], // hint: GROUP BY defines the rows each aggregate sees.
  "HAVING": ["HAVING","그룹화 결과 필터링","HAVING은 집계 이후 그룹을 필터링한다."], // hint: HAVING filters groups after aggregation.
  "ORDER BY": ["ORDER BY","결과 행 정렬","ORDER BY는 출력 행의 정렬 순서를 제어한다."], // hint: ORDER BY controls output ordering.
  "join basics": ["조인 기초","관련 테이블 결합","조인은 테이블 표현식 간에 행을 매칭한다."], // hint: Joins match rows across table expressions.
  "inner join": ["내부 조인","조건에 일치하는 행만 반환","내부 조인은 조인 조건을 만족하는 행만 유지한다."], // hint: Inner joins keep rows that satisfy the join condition.
  "outer join": ["외부 조인","일치하지 않는 쪽 행 보존","외부 조인은 한쪽 또는 양쪽에서 매칭되지 않은 행을 보존한다."], // hint: Outer joins keep unmatched rows from one or both sides.
  "cross join": ["크로스 조인","카테시안 곱","크로스 조인은 양쪽 테이블의 모든 행을 조합한다."], // hint: Cross joins combine every row from each side.
  "subquery basics": ["서브쿼리 기초","다른 쿼리에 중첩된 쿼리","서브쿼리는 스칼라 값, 집합, 또는 테이블 표현식을 반환할 수 있다."], // hint: Subqueries can return scalar values, sets, or table expressions.
  "set operators": ["집합 연산자","UNION INTERSECT EXCEPT","집합 연산자는 호환 가능한 쿼리 결과를 결합한다."], // hint: Set operators combine compatible query results.
  "DML": ["DML","INSERT UPDATE DELETE MERGE","INSERT, UPDATE, DELETE, MERGE는 테이블 데이터를 변경한다."], // hint: DML changes table data.
  "window functions": ["윈도우 함수","행 범위 기준으로 계산","윈도우 함수는 행 상세 정보를 유지하면서 그룹 기반 계산을 수행한다."], // hint: Window functions keep row detail while computing grouped context.
  "ROLLUP": ["ROLLUP","계층적 소계 생성","ROLLUP은 왼쪽에서 오른쪽 방향으로 계층적 소계를 생성한다."], // hint: ROLLUP creates grouping subtotals from left to right.
  "CUBE": ["CUBE","모든 그룹 조합의 소계","CUBE는 모든 그룹 조합에 대한 소계를 반환한다."], // hint: CUBE returns subtotals for every grouping combination.
  "TOP N": ["TOP N","정렬된 행의 상위 N개 조회","TOP N 쿼리는 결정론적 정렬 기준이 필요하다."], // hint: Top-N queries require a deterministic ordering rule.
  "hierarchical query": ["계층형 쿼리","부모-자식 행 탐색","계층형 쿼리는 트리 구조의 데이터를 탐색한다."], // hint: Hierarchical queries traverse tree-shaped data.
  "self join": ["셀프 조인","동일 테이블을 자기 자신과 조인","셀프 조인은 동일 테이블 내에서 행을 서로 비교한다."], // hint: Self joins compare rows within the same table.
  "PIVOT": ["PIVOT","행 값을 열로 변환","PIVOT은 그룹화된 행 값을 별도의 열로 재구성한다."], // hint: PIVOT reshapes grouped row values into separate columns.
  "UNPIVOT": ["UNPIVOT","열을 행으로 변환","UNPIVOT은 반복되는 열을 행 값으로 정규화한다."], // hint: UNPIVOT normalizes repeated columns into row values.
  "regular expressions": ["정규 표현식","패턴 기반 텍스트 매칭","정규 표현식 조건식은 LIKE보다 풍부한 텍스트 규칙을 표현한다."], // hint: Regex predicates express richer text rules than LIKE.
  "DDL": ["DDL","CREATE ALTER DROP","CREATE, ALTER, DROP은 데이터베이스 객체를 정의하거나 변경한다."], // hint: DDL defines or changes database objects.
  "DCL": ["DCL","GRANT REVOKE","GRANT, REVOKE는 권한을 관리한다."], // hint: DCL manages privileges.
  "TCL": ["TCL","COMMIT ROLLBACK SAVEPOINT","COMMIT, ROLLBACK, SAVEPOINT는 트랜잭션 경계를 제어한다."], // hint: TCL controls transaction boundaries.
  "constraints": ["제약 조건","무결성 규칙 강제","제약 조건은 필수 규칙을 위반하는 데이터를 거부한다."], // hint: Constraints reject data that violates required rules.
  "views": ["뷰","저장된 쿼리 인터페이스","뷰는 복잡성을 숨기고 안정적인 쿼리 인터페이스를 제공한다."], // hint: Views hide complexity and expose stable query surfaces.
  "indexes": ["인덱스","특정 접근 경로의 조회 속도 향상","인덱스는 쓰기 오버헤드와 저장 공간을 대가로 조회 속도를 높인다."], // hint: Indexes trade write overhead and storage for faster lookup.
  "sequence": ["시퀀스","순번 값 자동 생성","시퀀스는 순서가 있는 생성 번호를 제공한다."], // hint: Sequences provide ordered generated numbers.
  "data dictionary": ["데이터 딕셔너리","메타데이터 테이블","데이터 딕셔너리는 스키마 및 객체 메타데이터를 노출한다."], // hint: The dictionary exposes schema and object metadata.
  "SQL execution order": ["SQL 실행 순서","FROM WHERE GROUP HAVING SELECT ORDER","논리적 실행 순서는 별칭 범위와 필터링 시점을 설명한다."], // hint: Logical execution order explains alias scope and filtering timing.
  "90 minute exam": ["90분 시험","문항당 시간 배분 관리","SQLD 필기시험은 시간이 제한되어 있으므로 페이스 관리가 중요하다."], // hint: The SQLD written test is time-limited, so pacing matters.
  "50 questions": ["50문항","모델링과 SQL 균형 있게 대비","공식 구성은 모델링 이해와 SQL 이해를 분리한다."], // hint: The official structure separates modeling from SQL understanding.
  "60 point pass": ["60점 합격 기준","최저 점수 이상을 목표로","합격을 위해서는 단순한 친숙도가 아닌 충분한 총점이 필요하다."], // hint: A pass requires enough total score, not just familiarity.
  "subject cutoff": ["과목 과락","취약 과목으로 인한 불합격 주의","특정 과목 점수가 낮으면 전체 학습량에 관계없이 불합격할 수 있다."], // hint: A low section score can fail even when total study feels strong.
  "modeling questions": ["모델링 문항","1과목 10문항","데이터 모델링은 문항 수가 적지만 과목 과락 기준이 적용된다."], // hint: Data modeling is smaller but still cutoff-relevant.
  "SQL questions": ["SQL 문항","2과목 40문항","SQL 기본 및 활용이 전체 문항 수의 대부분을 차지한다."], // hint: SQL basics and applications dominate the question volume.
  "no eligibility restriction": ["응시 제한 없음","학력·경력 무관 누구나 응시 가능","SQLD는 사전 학력이나 경력을 요구하지 않는다."], // hint: SQLD does not require a prior degree or work history.
  "official scope triage": ["공식 범위 우선 학습","DataQ 출제 기준으로 학습","현재 공식 시험 가이드를 학습의 기준으로 활용해야 한다."], // hint: Use the current official exam guide as the source of truth.
  "wrong-answer notebook": ["오답 노트","틀린 이유와 함정 포인트 기록","오답 원인을 검토하면 같은 실수를 반복하지 않을 수 있다."], // hint: Reviewing why an answer was wrong prevents repeat misses.
  "timeboxing": ["시간 배분","어려운 문항은 넘기고 나중에 재도전","어려운 문항에 전체 시험 시간을 소진하지 않도록 한다."], // hint: Hard questions should not consume the whole exam clock.
  "join result tracing": ["조인 결과 추적","중간 행을 그려가며 확인","조인 과정을 추적하면 행 수를 추측하지 않아도 된다."], // hint: Tracing joins avoids guessing row counts.
  "NULL trap drills": ["NULL 함정 드릴","IS NULL과 알 수 없음 값 테스트","NULL 논리는 잘못된 SQL 답안의 흔한 원인이다."], // hint: NULL logic is a common source of wrong SQL answers.
  "window pattern drills": ["윈도우 함수 패턴 드릴","PARTITION, ORDER, FRAME 구분 연습","윈도우 함수 문항은 PARTITION, ORDER, FRAME 구분에 따라 결과가 달라진다."], // hint: Window questions often hinge on partitioning and ordering.
  "management statements": ["관리 구문","DDL·DCL·TCL 정확히 분류","명령 분류 문항은 DDL, DCL, TCL의 정확한 구분을 요구한다."], // hint: Command category questions reward precise classification.
  "mock exam review": ["모의고사 분석","과목별 오답 원인 파악","모의고사 결과에서 오답을 공식 과목별로 매핑해야 한다."], // hint: Mock results should map misses back to official subjects.
  "retention plan": ["기억 유지 계획","간격 반복 학습","짧은 간격의 반복 복습이 정의와 문법 기억을 유지시킨다."], // hint: Short repeated review keeps definitions and syntax available.
  "keyword contrast": ["유사 키워드 비교","유사 용어 간 차이 비교","유사 용어를 대조하면 정의 혼동을 방지할 수 있다."], // hint: Contrasting near terms prevents definition swaps.
  "final readiness check": ["최종 실력 점검","실제 시험과 동일한 조건으로 모의 연습","실제 시험과 동일한 시간 및 문항 압박 조건으로 연습해야 한다."], // hint: Practice with the same time and question pressure as the exam.
};
