import type { DomainTextKo } from "@/data/i18n/types";

export const pythonTextKo: DomainTextKo = {
  metadata: {
    title: "PythonDojo - 초급부터 마스터리까지 파이썬 학습",
    description: "KanaDojo에서 영감을 받은 파이썬 학습 앱 — 기초 문법부터 마스터리 드릴까지."
  },
  welcomeTitle: "PythonDojo에 오신 것을 환영합니다!",
  welcomeBody:
    "PythonDojo는 KanaDojo와 Monkeytype에서 영감을 받아 커뮤니티가 만든 미려한 파이썬 학습 플랫폼입니다.",
  subjectName: "파이썬",
  footerMeta: "커뮤니티가 만든 서비스 ~ sapphire bloom ~ zen maru gothic ~ v0.1.18 (알파)",
  cards: {
    foundations: { label: "기초", summary: "문법, 값, 분기" },
    data: { label: "데이터", summary: "리스트, dict, 파일" },
    design: { label: "설계", summary: "함수, 모듈, 테스트" },
    mastery: { label: "마스터리", summary: "async, 프로토콜, 패키징" }
  },
  tracks: {
    foundations: {
      title: "기초",
      focus: "문법, 값, 분기, 반복문"
    },
    data: {
      title: "데이터 활용",
      focus: "리스트, dict, 파일, 컴프리헨션"
    },
    design: {
      title: "프로그램 설계",
      focus: "함수, 모듈, 오류 처리, 테스트"
    },
    mastery: {
      title: "마스터리 랩",
      focus: "클래스, 이터레이터, async, 성능, 프로토콜, 패키징"
    }
  },
  drills: {
    // --- baseDrills ---
    "foundations-print": {
      concept: "print 출력",
      prompt: "이 프로그램은 무엇을 출력합니까?",
      hint: "`print`는 괄호 안의 값을 콘솔에 출력합니다.",
      explanation: "따옴표는 소스 코드에서 문자열을 나타내며, 출력 결과에는 포함되지 않습니다."
    },
    "foundations-variable": {
      concept: "변수 할당",
      prompt: "두 줄이 실행된 후 `score`에 저장된 값은 무엇입니까?",
      hint: "오른쪽이 먼저 평가된 후 변수가 갱신됩니다.",
      explanation: "`score`는 4에서 시작해 4 + 3이 됩니다."
    },
    "foundations-string-type": {
      concept: "타입",
      prompt: "숫자가 아닌 문자열인 값은 무엇입니까?",
      hint: "문자열은 따옴표로 감쌉니다.",
      explanation: "`\"42\"`는 텍스트입니다. 숫자처럼 보여도 타입은 `str`입니다."
    },
    "foundations-branch": {
      concept: "조건문",
      prompt: "어느 분기가 실행됩니까?",
      hint: "8은 5보다 크거나 같습니다.",
      explanation: "`if` 조건이 참이므로 파이썬은 첫 번째 블록을 실행합니다."
    },
    "foundations-range-loop": {
      concept: "for 반복문",
      prompt: "`total`의 최종 값은 무엇입니까?",
      hint: "`range(3)`은 0, 1, 2를 생성합니다.",
      explanation: "반복문이 0 + 1 + 2를 더하므로 `total`은 3이 됩니다."
    },
    "foundations-debug-indent": {
      concept: "들여쓰기",
      prompt: "이 잘못된 반복문을 고치려면 어떻게 해야 합니까?",
      hint: "콜론 다음에 오는 블록은 반드시 들여써야 합니다.",
      explanation: "파이썬은 들여쓰기로 어떤 문장이 블록 안에 속하는지 결정합니다."
    },
    "data-list-index": {
      concept: "리스트 인덱싱",
      prompt: "`names[1]`의 값은 무엇입니까?",
      hint: "파이썬 인덱스는 0부터 시작합니다.",
      explanation: "`names[0]`은 Ada이므로 `names[1]`은 Lin입니다."
    },
    "data-append": {
      concept: "리스트 변경",
      prompt: "`append` 후 `items`에 담긴 값은 무엇입니까?",
      hint: "`append`는 기존 리스트를 직접 변경합니다.",
      explanation: "`append`는 같은 리스트 끝에 항목 하나를 추가합니다."
    },
    "data-dict-get": {
      concept: "dict 조회",
      prompt: "`profile.get(\"city\", \"Seoul\")`의 반환값은 무엇입니까?",
      hint: "`get`은 키가 없을 때 대체값을 반환할 수 있습니다.",
      explanation: "`city` 키가 없으므로 `get`은 기본값 Seoul을 반환합니다."
    },
    "data-comprehension": {
      concept: "리스트 컴프리헨션",
      prompt: "`[0, 4, 8]`을 만드는 표현식은 무엇입니까?",
      hint: "각 `n`을 `n * 4`로 변환하세요.",
      explanation: "`range(3)`은 0, 1, 2를 생성하며, 각각에 4를 곱하면 0, 4, 8이 됩니다."
    },
    "data-slice": {
      concept: "슬라이싱",
      prompt: "`letters[1:4]`는 무엇입니까?",
      hint: "시작 인덱스는 포함되고 끝 인덱스는 제외됩니다.",
      explanation: "인덱스 1은 b이며, 슬라이스는 인덱스 4 직전까지 포함합니다."
    },
    "data-debug-key": {
      concept: "누락 키",
      prompt: "`theme`이 없을 때 `KeyError`를 피하려면 어떻게 변경해야 합니까?",
      hint: "대체값을 받을 수 있는 dict 메서드를 사용하세요.",
      explanation: "`dict.get`은 키가 없을 때 예외 대신 대체값을 반환합니다."
    },
    "design-return": {
      concept: "반환값",
      prompt: "`double(6)`의 결과는 무엇입니까?",
      hint: "`return`은 값을 호출자에게 돌려줍니다.",
      explanation: "함수는 6 * 2를 반환합니다."
    },
    "design-default-arg": {
      concept: "기본 인수",
      prompt: "`greet(\"Mina\")`의 반환값은 무엇입니까?",
      hint: "`name`만 전달되었으므로 `prefix`는 기본값을 사용합니다.",
      explanation: "기본 `prefix`는 Hi이며, f-string이 Mina를 삽입합니다."
    },
    "design-exception": {
      concept: "예외",
      prompt: "`int(\"x\")`가 실패할 때 어떤 예외를 잡아야 합니까?",
      hint: "값의 타입은 맞지만 내용이 유효하지 않습니다.",
      explanation: "`int`는 문자열을 파싱할 수 있지만 `x`는 유효한 정수 리터럴이 아닙니다."
    },
    "design-module": {
      concept: "모듈",
      prompt: "`math`에서 `sqrt`만 임포트하는 줄은 무엇입니까?",
      hint: "파이썬은 `from 모듈 import 이름` 문법을 사용합니다.",
      explanation: "`from math import sqrt`는 현재 모듈에 `sqrt`를 직접 바인딩합니다."
    },
    "design-test": {
      concept: "테스트",
      prompt: "`add(2, 3)`이 5를 반환하는지 확인하는 assertion은 무엇입니까?",
      hint: "assertion에 동등 비교를 사용하세요.",
      explanation: "`==`는 값을 비교합니다. 단일 `=`는 할당이지 테스트가 아닙니다."
    },
    "design-pure": {
      concept: "순수 함수",
      prompt: "외부 상태를 변경하지 않고 값을 반환하는 함수의 종류는 무엇입니까?",
      hint: "입력에만 의존하고 부작용을 피합니다.",
      explanation: "순수 함수는 같은 입력이 항상 같은 출력을 내므로 테스트하기 쉽습니다."
    },
    "mastery-class": {
      concept: "클래스",
      prompt: "메서드 `greet`가 `self`를 받는 이유는 무엇입니까?",
      hint: "`self`는 메서드가 호출된 객체입니다.",
      explanation: "인스턴스 메서드는 첫 번째 인수로 해당 객체를 받습니다."
    },
    "mastery-generator": {
      concept: "제너레이터",
      prompt: "함수가 한 번에 값 하나를 생성하게 하는 키워드는 무엇입니까?",
      hint: "함수를 종료하는 대신 일시 중단합니다.",
      explanation: "`yield`는 나중에 재개할 수 있는 제너레이터를 만듭니다."
    },
    "mastery-context": {
      concept: "컨텍스트 매니저",
      prompt: "파일을 자동으로 닫는 구문은 무엇입니까?",
      hint: "컨텍스트 매니저는 `with`를 사용합니다.",
      explanation: "`with`는 블록이 종료될 때 정리 로직을 호출합니다."
    },
    "mastery-async": {
      concept: "async",
      prompt: "`async` 함수 내부에서 `await`는 무엇을 합니까?",
      hint: "`await`는 이벤트 루프와 협력합니다.",
      explanation: "`await`는 대기 중인 연산이 완료될 때까지 다른 작업이 실행될 수 있도록 합니다."
    },
    "mastery-big-o": {
      concept: "복잡도",
      prompt: "평균적으로 `O(1)` 조회가 가능한 방식은 무엇입니까?",
      hint: "해시 테이블은 빠른 키 조회를 위해 설계되었습니다.",
      explanation: "파이썬 `dict` 조회는 해싱을 사용하므로 평균 상수 시간입니다."
    },
    "mastery-dataclass": {
      concept: "데이터클래스",
      prompt: "단순 데이터 객체에 `__init__`과 `__repr__`을 자동 생성하는 데코레이터는 무엇입니까?",
      hint: "`dataclasses` 모듈에서 제공합니다.",
      explanation: "`@dataclass`는 일반 데이터 컨테이너의 상용구를 줄여 줍니다."
    },
    "foundations-bool-logic": {
      concept: "불리언 논리",
      prompt: "`ready`의 값은 무엇입니까?",
      hint: "두 비교 모두 참입니다.",
      explanation: "`age >= 18`은 참이고 `age < 65`도 참이므로 `and` 표현식은 `True`입니다."
    },
    "foundations-none": {
      concept: "None",
      prompt: "의미 있는 결과가 없음을 나타내는 값은 무엇입니까?",
      hint: "파이썬의 null에 해당하는 싱글턴입니다.",
      explanation: "`None`은 이름이나 함수에 반환할 의미 있는 값이 없을 때 사용합니다."
    },
    "foundations-fstring": {
      concept: "f-string",
      prompt: "`label`에 담긴 값은 무엇입니까?",
      hint: "f-string은 중괄호 안에 현재 값을 삽입합니다.",
      explanation: "중괄호가 Ada와 3으로 대체되어 문자열 `Ada: 3`이 만들어집니다."
    },
    "foundations-debug-equality": {
      concept: "비교 연산자",
      prompt: "이 조건문을 어떻게 고쳐야 합니까?",
      hint: "할당과 동등 비교는 다른 연산입니다.",
      explanation: "조건식은 `==`으로 값을 비교해야 합니다. 단일 `=`는 값을 할당합니다."
    },
    "foundations-while-break": {
      concept: "while 반복문",
      prompt: "`count`의 최종 값은 무엇입니까?",
      hint: "`break`는 `count`가 3이 되는 즉시 반복문을 종료합니다.",
      explanation: "반복문이 `count`를 1, 2, 3으로 증가시키다가 `break`로 멈춥니다."
    },
    "foundations-match-case": {
      concept: "match",
      prompt: "구조적 패턴 매칭을 시작하는 문법은 무엇입니까?",
      hint: "파이썬은 `match`와 들여쓴 `case` 분기를 사용합니다.",
      explanation: "`match value:`로 패턴 매칭 블록을 시작하고, 이어서 `case` 절이 따라옵니다."
    },
    "foundations-scope": {
      concept: "스코프",
      prompt: "함수 내부에서 생성된 변수를 가리키는 이름은 무엇입니까?",
      hint: "해당 함수 호출 안에서만 존재합니다.",
      explanation: "지역 변수는 할당된 함수 스코프에 속합니다."
    },
    "foundations-debug-mutable-default": {
      concept: "함수 기본값",
      prompt: "공유 리스트 버그를 어떻게 고쳐야 합니까?",
      hint: "기본 인수는 호출마다가 아니라 한 번만 생성됩니다.",
      explanation: "`items=None`으로 설정하고 함수 내부에서 `[]`를 생성하면 호출마다 새 리스트를 얻을 수 있습니다."
    },
    "data-tuple-unpack": {
      concept: "언패킹",
      prompt: "언패킹 후 `y`의 값은 무엇입니까?",
      hint: "값은 위치에 따라 할당됩니다.",
      explanation: "`x`는 10을 받고 `y`는 20을 받습니다."
    },
    "data-set-membership": {
      concept: "집합",
      prompt: "고유한 값으로 빠른 멤버십 검사에 가장 적합한 컬렉션은 무엇입니까?",
      hint: "`dict` 키처럼 해싱을 사용합니다.",
      explanation: "`set`은 고유한 값을 저장하고 빠른 멤버십 검사를 지원합니다."
    },
    "data-json-loads": {
      concept: "JSON",
      prompt: "JSON 텍스트를 파싱하는 표준 모듈은 무엇입니까?",
      hint: "데이터 형식 이름과 동일합니다.",
      explanation: "`json` 모듈은 JSON 문자열을 파이썬 `dict`, 리스트, 문자열, 숫자, 불리언으로 변환합니다."
    },
    "data-debug-copy": {
      concept: "별칭",
      prompt: "원본 리스트의 의도치 않은 변경을 막으려면 어떻게 해야 합니까?",
      hint: "두 이름이 같은 리스트를 가리킬 수 있습니다.",
      explanation: "독립적인 얕은 복사본이 필요할 때는 `items.copy()` 또는 `list(items)`를 사용하세요."
    },
    "data-pathlib": {
      concept: "경로",
      prompt: "객체 지향 파일 시스템 경로를 제공하는 클래스는 무엇입니까?",
      hint: "`pathlib`에서 제공합니다.",
      explanation: "`pathlib.Path`는 경로 결합, 읽기, 쓰기, 검사 메서드를 갖춘 이식성 있는 경로 모델입니다."
    },
    "data-csv-dictreader": {
      concept: "CSV",
      prompt: "CSV 행을 열 이름을 키로 하는 딕셔너리로 읽는 헬퍼는 무엇입니까?",
      hint: "`csv` 모듈에 있습니다.",
      explanation: "`csv.DictReader`는 헤더 행을 키로 사용해 각 행을 `dict`로 매핑합니다."
    },
    "data-generator-expression": {
      concept: "지연 이터레이션",
      prompt: "`(n * n for n in nums)`는 어떤 종류의 표현식입니까?",
      hint: "괄호와 `for`를 결합하면 지연 스트림을 만들 수 있습니다.",
      explanation: "제너레이터 표현식은 전체 리스트를 즉시 만들지 않고 값을 지연 생성합니다."
    },
    "data-debug-encoding": {
      concept: "파일 인코딩",
      prompt: "텍스트 파일 읽기를 이식성 있게 만드는 방법은 무엇입니까?",
      hint: "기본 인코딩은 환경마다 다를 수 있습니다.",
      explanation: "`encoding=\"utf-8\"`을 명시하면 운영 체제와 로케일에 따른 차이를 방지할 수 있습니다."
    },
    "design-higher-order": {
      concept: "고차 함수",
      prompt: "`apply(double, 4)`의 반환값은 무엇입니까?",
      hint: "`apply`는 전달받은 함수를 호출합니다.",
      explanation: "`apply`는 4를 `double`에 전달하고, `double`은 8을 반환합니다."
    },
    "design-dependency-injection": {
      concept: "의존성 주입",
      prompt: "코드를 테스트하기 쉽게 만드는 설계는 무엇입니까?",
      hint: "테스트에서 가짜 의존성을 제공할 수 있습니다.",
      explanation: "의존성을 함수나 클래스에 전달하면 테스트에서 동작을 교체하기 쉬워집니다."
    },
    "design-typing-list": {
      concept: "타입 힌트",
      prompt: "문자열의 리스트를 나타내는 타입 힌트는 무엇입니까?",
      hint: "모던 파이썬은 내장 제네릭 타입을 사용합니다.",
      explanation: "`list[str]`은 리스트의 각 항목이 문자열이어야 함을 명시합니다."
    },
    "design-debug-broad-except": {
      concept: "오류 처리",
      prompt: "이 오류 처리를 어떻게 개선할 수 있습니까?",
      hint: "광범위한 `except`는 실제 버그를 숨길 수 있습니다.",
      explanation: "`ValueError`를 잡으면 예상된 실패를 명시하고 예기치 않은 버그가 드러납니다."
    },
    "design-contextmanager": {
      concept: "리소스 관리",
      prompt: "`with` 문을 구동하는 프로토콜은 무엇입니까?",
      hint: "진입 및 종료 동작을 정의합니다.",
      explanation: "컨텍스트 매니저는 `with` 블록 진입 시 설정을, 종료 시 정리를 실행합니다."
    },
    "design-pytest-fixture": {
      concept: "픽스처",
      prompt: "pytest에서 테스트가 이름으로 요청할 수 있는 재사용 가능한 설정 함수는 무엇입니까?",
      hint: "`@pytest.fixture`로 데코레이트합니다.",
      explanation: "픽스처는 재사용 가능한 설정 데이터나 리소스를 테스트에 제공합니다."
    },
    "design-packaging": {
      concept: "패키징",
      prompt: "모던 파이썬 프로젝트 메타데이터를 선언하는 대표적인 파일은 무엇입니까?",
      hint: "TOML 형식이며 `pyproject`로 시작합니다.",
      explanation: "`pyproject.toml`은 빌드 시스템과 프로젝트 메타데이터의 표준 위치입니다."
    },
    "design-debug-circular-import": {
      concept: "모듈 경계",
      prompt: "공유 헬퍼를 위해 두 모듈이 서로를 임포트할 때 해결책은 무엇입니까?",
      hint: "공유 의존성을 추출해 순환을 끊으세요.",
      explanation: "세 번째 모듈에 공유 코드를 두면 두 파일이 서로 의존하지 않아도 됩니다."
    },
    "mastery-descriptor": {
      concept: "디스크립터",
      prompt: "객체가 속성 읽기를 제어하게 하는 메서드는 무엇입니까?",
      hint: "디스크립터는 get, set, delete 훅을 구현합니다.",
      explanation: "`__get__`은 속성을 읽을 때 어떻게 동작할지를 디스크립터가 커스터마이즈하도록 합니다."
    },
    "mastery-protocol": {
      concept: "구조적 타이핑",
      prompt: "상속 없이 동작을 기술하는 타입 구조체는 무엇입니까?",
      hint: "정적 분석에서 덕 타이핑을 지원합니다.",
      explanation: "`Protocol`은 기반 클래스 대신 구조적으로 필요한 메서드나 속성을 기술합니다."
    },
    "mastery-lru-cache": {
      concept: "메모이제이션",
      prompt: "최근 함수 결과를 캐시하는 `functools` 데코레이터는 무엇입니까?",
      hint: "가장 최근에 사용한 결과를 유지합니다.",
      explanation: "`functools.lru_cache`는 호출을 메모이즈해 반복 입력을 빠르게 반환합니다."
    },
    "mastery-debug-gil": {
      concept: "동시성",
      prompt: "CPython에서 CPU 바운드 병렬 작업에 더 적합한 방식은 무엇입니까?",
      hint: "CPU 바운드 파이썬 스레드는 CPython의 GIL에 의해 제한됩니다.",
      explanation: "별도의 프로세스는 여러 CPU 코어에서 파이썬 바이트코드를 실행할 수 있습니다."
    },
    "mastery-taskgroup": {
      concept: "구조적 동시성",
      prompt: "범위가 지정된 취소와 함께 자식 태스크를 묶는 `asyncio` API는 무엇입니까?",
      hint: "비동기 컨텍스트 매니저입니다.",
      explanation: "`asyncio.TaskGroup`은 관련 태스크를 범위 내에 유지하고 실패 전파를 더 깔끔하게 처리합니다."
    },
    "mastery-profiling": {
      concept: "프로파일링",
      prompt: "함수 호출 시간을 프로파일링하는 표준 모듈은 무엇입니까?",
      hint: "표준 라이브러리의 C 기반 프로파일러입니다.",
      explanation: "`cProfile`은 호출 횟수와 타이밍을 기록해 실제 성능 병목을 찾을 수 있게 합니다."
    },
    "mastery-wheel": {
      concept: "배포",
      prompt: "`.whl`로 끝나는 패키지 형식은 무엇입니까?",
      hint: "`pip`이 빠르게 설치하는 빌드된 배포 형식입니다.",
      explanation: "wheel은 소스에서 다시 빌드하지 않고 `pip`이 설치할 수 있는 빌드된 패키지 아카이브입니다."
    },
    "mastery-debug-observability": {
      concept: "관찰 가능성",
      prompt: "실패한 백그라운드 잡의 프로덕션 디버깅을 개선하려면 어떻게 해야 합니까?",
      hint: "실패한 잡을 추적할 충분한 컨텍스트가 필요합니다.",
      explanation: "잡 식별자가 포함된 구조적 로그는 실패를 검색 가능하게 하고 오류를 해당 잡에 연결합니다."
    },
    // --- curriculumTopics (buildCurriculumDrills prefix: "python-full-") ---
    "python-full-interpreter-cli": {
      concept: "인터프리터와 CLI",
      prompt: "파이썬 인터프리터로 모듈을 실행할 때 패키지 임포트가 올바르게 동작하는 방법은 무엇입니까?",
      hint: "임포트가 패키지처럼 해석되도록 인터프리터로 모듈을 실행하세요.",
      explanation: "`python -m package.module`을 사용하면 모듈 실행이 파이썬의 임포트 시스템과 일치합니다."
    },
    "python-full-source-encoding": {
      concept: "소스 파일과 인코딩",
      prompt: "모던 파이썬 소스 파일의 일반적인 인코딩은 무엇입니까?",
      hint: "모던 파이썬 소스 파일은 텍스트이며 주로 UTF-8입니다.",
      explanation: "소스 인코딩을 이해하면 리터럴, 주석, 크로스 플랫폼 파일 문제를 예방할 수 있습니다."
    },
    "python-full-truthiness": {
      concept: "진리값 판단",
      prompt: "파이썬에서 빈 컨테이너는 `if`/`while`에서 어떻게 평가됩니까?",
      hint: "파이썬은 `if`와 `while`에서 진리값 판단을 사용합니다.",
      explanation: "`False`, `None`, 0, 빈 컨테이너는 거짓으로 평가되고, 대부분의 다른 객체는 참으로 평가됩니다."
    },
    "python-full-comparison-identity": {
      concept: "동등성과 동일성",
      prompt: "값 비교와 객체 동일성 확인에 각각 어떤 연산자를 사용합니까?",
      hint: "두 값이 같다고 해서 같은 객체일 필요는 없습니다.",
      explanation: "`==`는 값이 같은지 묻고, `is`는 두 이름이 같은 객체를 가리키는지 묻습니다."
    },
    "python-full-numeric-model": {
      concept: "숫자 타입",
      prompt: "파이썬의 주요 숫자 타입 네 가지는 무엇입니까?",
      hint: "문제에 맞는 숫자 모델을 선택하세요.",
      explanation: "파이썬은 임의 정밀도 정수, 이진 부동소수점, 금전 정밀도용 `Decimal`, 유리수용 `Fraction`을 제공합니다."
    },
    "python-full-string-formatting": {
      concept: "문자열 포맷팅",
      prompt: "출력에서 값을 읽기 쉽게 보간하는 방법은 무엇입니까?",
      hint: "출력에서 값을 읽기 쉽게 보간하려면 포맷 방식을 사용하세요.",
      explanation: "형식 문자열 리터럴(f-string)은 단순한 런타임 표현식을 텍스트 가까이에 유지합니다."
    },
    "python-full-branching-match": {
      concept: "구조적 패턴 매칭",
      prompt: "불리언 하나보다 구조가 중요할 때 사용하는 파이썬 구문은 무엇입니까?",
      hint: "구조가 하나의 불리언보다 중요할 때 패턴 매칭을 사용하세요.",
      explanation: "`match`는 리터럴, 클래스, 매핑, 시퀀스, 가드 패턴을 기반으로 분기할 수 있습니다."
    },
    "python-full-loop-control": {
      concept: "반복문 제어",
      prompt: "`break`, `continue`, 반복문 `else`의 역할은 각각 무엇입니까?",
      hint: "반복문은 조기 종료, 반복 건너뛰기, `break`가 없을 때 `else` 블록 실행을 할 수 있습니다.",
      explanation: "`break`, `continue`, 반복문 `else`를 사용하면 간단한 반복문으로 검색과 재시도 제어를 정확히 표현합니다."
    },
    "python-full-function-parameters": {
      concept: "함수 매개변수",
      prompt: "호출자가 인수를 전달하는 방식을 파이썬이 어떻게 제어합니까?",
      hint: "파이썬은 호출자가 인수를 전달하는 방식을 제어할 수 있습니다.",
      explanation: "`/`와 `*` 마커는 위치 전용과 키워드 전용 매개변수를 구분해 공개 API를 명확하게 합니다."
    },
    "python-full-exceptions": {
      concept: "예외 처리",
      prompt: "처리할 수 없는 예외는 어떻게 해야 합니까?",
      hint: "처리할 수 있는 예외만 잡고 나머지는 크게 실패하게 두세요.",
      explanation: "구체적인 예외는 실패의 의미를 보존하고 광범위한 `except` 블록 뒤에 결함이 숨는 것을 방지합니다."
    },
    "python-full-context-manager": {
      concept: "컨텍스트 매니저",
      prompt: "파일, 잠금, 트랜잭션에 결정적인 설정과 정리를 사용하는 방법은 무엇입니까?",
      hint: "파일, 잠금, 트랜잭션에 결정적인 설정과 정리를 사용하세요.",
      explanation: "`with` 문은 예외 이후에도 리소스가 정리되도록 진입·종료 훅을 호출합니다."
    },
    "python-full-module-imports": {
      concept: "모듈과 임포트",
      prompt: "패키지 코드에서 권장되는 임포트 스타일은 무엇입니까?",
      hint: "패키지 코드는 안정적인 모듈 경로에서 이름을 임포트해야 합니다.",
      explanation: "절대 임포트는 모호성을 줄이고 패키지 경계를 더 쉽게 파악할 수 있게 합니다."
    },
    "python-full-virtualenv": {
      concept: "가상 환경",
      prompt: "프로젝트 의존성을 시스템 인터프리터와 격리하는 방법은 무엇입니까?",
      hint: "프로젝트 의존성을 시스템 인터프리터와 격리하세요.",
      explanation: "`venv`는 프로젝트별 환경을 만들어 설치된 패키지가 프로젝트 간에 충돌하지 않도록 합니다."
    },
    "python-full-pip-tools": {
      concept: "패키지 설치",
      prompt: "활성 환경에 패키지를 설치하는 표준 도구는 무엇입니까?",
      hint: "인덱스나 로컬 wheel에서 활성 환경에 설치하세요.",
      explanation: "`pip`은 가상 환경 및 lockfile 워크플로와 함께 사용하는 표준 설치 도구입니다."
    },
    "python-full-debugger-basics": {
      concept: "디버깅 기초",
      prompt: "추측 대신 실행을 일시 중단하고 상태를 검사하는 방법은 무엇입니까?",
      hint: "추측하는 대신 실행을 일시 중단하고 상태를 검사하세요.",
      explanation: "`breakpoint()`는 설정된 디버거로 진입해 변수와 호출 스택 상태를 검사할 수 있게 합니다."
    },
    "python-full-sequence-operations": {
      concept: "시퀀스 연산",
      prompt: "리스트, 튜플, 문자열, range가 공유하는 핵심 연산은 무엇입니까?",
      hint: "리스트, 튜플, 문자열, range는 공통 시퀀스 동작을 공유합니다.",
      explanation: "슬라이싱과 이터레이션은 수동 인덱스 반복 없이 순서 있는 데이터를 변환하는 핵심 도구입니다."
    },
    "python-full-dict-patterns": {
      concept: "딕셔너리 패턴",
      prompt: "데이터 누적 문제에 맞는 매핑 헬퍼는 무엇을 사용해야 합니까?",
      hint: "데이터 누적 문제에 맞는 매핑 헬퍼를 사용하세요.",
      explanation: "파이썬 `dict`는 기본값, 카운팅, 그룹화, 멤버십 검사를 효율적으로 지원합니다."
    },
    "python-full-set-algebra": {
      concept: "집합 연산",
      prompt: "컬렉션 간 비교를 명확히 표현하는 방법은 무엇입니까?",
      hint: "`set`으로 고유성과 멤버십을 모델링하세요.",
      explanation: "집합 연산은 중첩 반복문보다 컬렉션 간 비교를 더 명확하게 표현합니다."
    },
    "python-full-sorting-key": {
      concept: "키를 이용한 정렬",
      prompt: "복잡한 객체를 파생된 값으로 정렬하는 방법은 무엇입니까?",
      hint: "복잡한 객체를 파생된 값으로 정렬하세요.",
      explanation: "키 함수는 요소마다 비교 값을 한 번 추출하고 정렬 로직을 명시적으로 유지합니다."
    },
    "python-full-comprehensions": {
      concept: "컴프리헨션",
      prompt: "map/filter 스타일 변환에 사용하는 간결한 표현식은 무엇입니까?",
      hint: "map/filter 스타일 변환에 간결한 표현식을 사용하세요.",
      explanation: "컴프리헨션은 이터러블에서 새로운 컬렉션을 만들면서 데이터 흐름을 지역적으로 유지합니다."
    },
    "python-full-iterators": {
      concept: "이터레이터 프로토콜",
      prompt: "리스트에만 국한되지 않고 `for` 루프에서 사용할 수 있는 객체의 조건은 무엇입니까?",
      hint: "이터레이션은 프로토콜 기반으로 리스트에만 국한되지 않습니다.",
      explanation: "이터레이터를 반환하고 `__next__`로 값을 생성하는 객체는 `for` 루프에서 사용할 수 있습니다."
    },
    "python-full-generators": {
      concept: "제너레이터",
      prompt: "전체 리스트를 만들지 않고 값을 지연 생성하는 방법은 무엇입니까?",
      hint: "전체 리스트를 만드는 대신 값을 지연 생성하세요.",
      explanation: "`yield`는 함수를 제너레이터로 바꿔 한 번에 값 하나를 스트리밍할 수 있게 합니다."
    },
    "python-full-pathlib": {
      concept: "파일 시스템 경로",
      prompt: "문자열 결합 대신 객체 지향 경로를 사용하는 방법은 무엇입니까?",
      hint: "문자열 결합 대신 객체 지향 경로를 사용하세요.",
      explanation: "`pathlib.Path`는 이식성 있는 경로 결합, 읽기, 쓰기, glob, 메타데이터 접근을 제공합니다."
    },
    "python-full-json-csv": {
      concept: "구조적 파일",
      prompt: "데이터 형식을 읽고 쓸 때 표준 파서를 사용하는 이유는 무엇입니까?",
      hint: "데이터 형식에는 표준 파서를 사용하세요.",
      explanation: "`json`과 `csv` 모듈은 구조적 데이터를 읽고 쓸 때 취약한 문자열 분할을 피하게 해줍니다."
    },
    "python-full-datetime-zoneinfo": {
      concept: "날짜와 시간대",
      prompt: "시간대가 중요할 때 어떻게 `datetime`을 저장하고 비교해야 합니까?",
      hint: "시간대가 중요할 때는 시간대 정보가 있는 `datetime`을 저장하고 비교하세요.",
      explanation: "`datetime`에 `zoneinfo`를 결합하면 일반적인 경우에 외부 의존성 없이 시간대를 모델링합니다."
    },
    "python-full-dataclasses": {
      concept: "데이터 클래스",
      prompt: "단순 데이터 객체에 `__init__`, `__repr__`, 비교를 자동 생성하는 방법은 무엇입니까?",
      hint: "단순 데이터 객체에 생성된 `__init__`, `__repr__`, 비교를 사용하세요.",
      explanation: "`dataclasses`는 클래스가 주로 명명된 필드를 그룹화할 때 상용구를 줄여 줍니다."
    },
    "python-full-typing-containers": {
      concept: "타입이 지정된 컨테이너",
      prompt: "컬렉션 요소 타입에 어노테이션을 달아야 하는 이유는 무엇입니까?",
      hint: "컬렉션 요소 타입에 어노테이션을 다세요.",
      explanation: "매개변수화된 내장 컬렉션 타입은 기대 값을 문서화하고 정적 검사를 돕습니다."
    },
    "python-full-sqlite": {
      concept: "로컬 관계형 저장소",
      prompt: "로컬의 내구성 있는 관계형 데이터에 사용하기 적합한 번들 데이터베이스는 무엇입니까?",
      hint: "로컬 내구성 있는 관계형 데이터에는 번들 데이터베이스를 사용하세요.",
      explanation: "`sqlite3`는 프로토타입, 스크립트, 테스트, 소규모 로컬 애플리케이션에 유용합니다."
    },
    "python-full-regex": {
      concept: "정규 표현식",
      prompt: "일반 문자열 메서드로 충분하지 않을 때 텍스트 유효성 검사와 추출에 사용하는 모듈은 무엇입니까?",
      hint: "텍스트 유효성 검사와 추출에 패턴을 사용하세요.",
      explanation: "`re` 모듈은 일반 문자열 메서드로 충분하지 않을 때 구조적 텍스트 매칭을 처리합니다."
    },
    "python-full-serialization-boundaries": {
      concept: "직렬화 경계",
      prompt: "파일, API, 환경 변수에서 들어오는 데이터를 어떻게 처리해야 합니까?",
      hint: "파일, API, 환경 변수는 신뢰할 수 없는 입력으로 취급하세요.",
      explanation: "검증은 경계에서 잘못된 타입, 누락 필드, 안전하지 않은 가정으로부터 코드를 보호합니다."
    },
    "python-full-numeric-precision": {
      concept: "숫자 정밀도",
      prompt: "금전 계산처럼 정확한 십진수 반올림이 필요할 때 어떤 타입을 사용해야 합니까?",
      hint: "이진 부동소수점은 금전 계산에 이상적이지 않습니다.",
      explanation: "`Decimal`은 정확한 십진수 반올림이 필요할 때 기수 10 값을 예측 가능하게 표현합니다."
    },
    "python-full-pure-functions": {
      concept: "순수 함수",
      prompt: "계산과 부작용을 분리하는 이유는 무엇입니까?",
      hint: "계산과 부작용을 분리하세요.",
      explanation: "순수 함수는 출력이 명시적 입력에 의존하므로 테스트와 조합이 쉽습니다."
    },
    "python-full-module-boundaries": {
      concept: "모듈 경계",
      prompt: "코드를 도메인 목적으로 그룹화해야 하는 이유는 무엇입니까?",
      hint: "헬퍼를 한 곳에 몰아넣는 대신 도메인 목적으로 코드를 그룹화하세요.",
      explanation: "응집력 있는 모듈은 임포트, 테스트, 소유권을 추론하기 더 쉽게 합니다."
    },
    "python-full-custom-exceptions": {
      concept: "커스텀 예외",
      prompt: "비즈니스 경계에서 의미 있는 실패 이름을 사용하는 이유는 무엇입니까?",
      hint: "비즈니스 경계에서 의미 있는 실패 이름을 사용하세요.",
      explanation: "도메인별 예외를 사용하면 호출자가 메시지를 파싱하지 않고 알려진 실패를 처리할 수 있습니다."
    },
    "python-full-logging": {
      concept: "로깅",
      prompt: "라이브러리에서 운영 메시지를 직접 출력하면 안 되는 이유는 무엇입니까?",
      hint: "라이브러리는 운영 메시지를 직접 출력해서는 안 됩니다.",
      explanation: "모듈 로거는 애플리케이션이 핸들러, 레벨, 형식을 중앙에서 설정하도록 합니다."
    },
    "python-full-testing-pyramid": {
      concept: "테스트 전략",
      prompt: "동작을 증명하는 가장 저렴한 테스트를 사용해야 하는 이유는 무엇입니까?",
      hint: "동작을 증명하는 가장 저렴한 테스트를 사용하세요.",
      explanation: "실용적인 테스트 스위트는 빠른 단위 테스트와 집중적인 통합·워크플로 검사를 혼합합니다."
    },
    "python-full-fixtures": {
      concept: "테스트 픽스처",
      prompt: "테스트 격리와 재사용 가능한 설정을 확보하는 방법은 무엇입니까?",
      hint: "테스트에는 안정적인 입력과 격리된 부작용이 필요합니다.",
      explanation: "픽스처는 중복을 줄이면서 설정을 제어되고 명시적으로 유지합니다."
    },
    "python-full-dependency-injection": {
      concept: "의존성 주입",
      prompt: "외부 서비스를 테스트에서 교체 가능하게 만드는 방법은 무엇입니까?",
      hint: "테스트에서 외부 서비스를 교체 가능하게 만드세요.",
      explanation: "의존성을 전달하면 코드가 테스트하기 쉬워지고 숨겨진 전역 결합을 피할 수 있습니다."
    },
    "python-full-decorators": {
      concept: "데코레이터",
      prompt: "캐싱, 검증, 재시도 같은 횡단 관심사를 추가하는 파이썬 메커니즘은 무엇입니까?",
      hint: "호출 가능 객체에 횡단 동작을 추가할 때 데코레이터를 사용하세요.",
      explanation: "데코레이터는 함수 인터페이스를 유지하면서 캐싱, 검증, 재시도, 계측을 추가할 수 있습니다."
    },
    "python-full-classes-composition": {
      concept: "상속보다 조합",
      prompt: "깊은 상속 트리 대신 어떤 설계 방식이 더 명확한 확장 지점을 만듭니까?",
      hint: "교체하기 쉬운 객체 관계를 선호하세요.",
      explanation: "조합은 종종 깊은 상속 트리보다 더 명확한 확장 지점을 만듭니다."
    },
    "python-full-protocols": {
      concept: "프로토콜 지향 설계",
      prompt: "상속 없이 협력 객체에게 필요한 동작을 기술하는 방법은 무엇입니까?",
      hint: "협력 객체에게 필요한 동작을 기술하세요.",
      explanation: "`Protocol` 타입은 상속을 강제하지 않고 구조적 인터페이스를 캡처합니다."
    },
    "python-full-configuration": {
      concept: "설정",
      prompt: "배포별 값을 코드에서 분리하는 방법은 무엇입니까?",
      hint: "배포별 값을 코드에서 분리하세요.",
      explanation: "타입이 지정된 설정은 구성을 명시적이고 검증 가능하며 환경별로 안전하게 변경할 수 있게 합니다."
    },
    "python-full-api-clients": {
      concept: "API 클라이언트 설계",
      prompt: "네트워크 호출에 타임아웃, 재시도, 타입이 지정된 응답을 정의해야 하는 이유는 무엇입니까?",
      hint: "네트워크 호출은 실패하며 영원히 중단되어서는 안 됩니다.",
      explanation: "견고한 클라이언트는 경계에서 타임아웃, 제한된 재시도, 응답 파싱을 정의합니다."
    },
    "python-full-packaging-pyproject": {
      concept: "pyproject 패키징",
      prompt: "모던 파이썬 패키징 메타데이터는 어느 파일에 선언합니까?",
      hint: "모던 파이썬 패키징 메타데이터는 하나의 표준 프로젝트 파일에 속합니다.",
      explanation: "`pyproject.toml`은 빌드 시스템, 메타데이터, 의존성, 도구 설정을 선언합니다."
    },
    "python-full-cli-argparse": {
      concept: "커맨드라인 인터페이스",
      prompt: "옵션과 서브커맨드를 파싱하는 표준 라이브러리 파서는 무엇입니까?",
      hint: "표준 라이브러리 파서로 옵션과 서브커맨드를 파싱하세요.",
      explanation: "`argparse`는 `argv`를 직접 파싱하지 않고 도움말, 검증, 기본값, 서브커맨드를 제공합니다."
    },
    "python-full-docstrings": {
      concept: "독스트링",
      prompt: "공개 모듈, 클래스, 함수를 문서화해야 하는 이유는 무엇입니까?",
      hint: "사용자가 `help()`를 읽는 공개 모듈, 클래스, 함수, 복잡한 동작을 문서화하세요.",
      explanation: "독스트링은 런타임 문서가 되어 생성된 API 레퍼런스를 지원합니다."
    },
    "python-full-asyncio-tasks": {
      concept: "async 태스크",
      prompt: "이벤트 루프 아래서 코루틴 작업을 동시에 예약하는 방법은 무엇입니까?",
      hint: "이벤트 루프 아래서 코루틴 작업을 동시에 예약하세요.",
      explanation: "`asyncio.create_task`는 코루틴을 예약하고 대기하거나 취소할 수 있는 `Task`를 반환합니다."
    },
    "python-full-task-groups": {
      concept: "구조적 동시성",
      prompt: "실패와 취소를 범위 내에서 처리하며 관련 async 태스크를 묶는 방법은 무엇입니까?",
      hint: "관련 async 태스크를 묶어 실패와 취소를 범위 내에서 처리하세요.",
      explanation: "`TaskGroup`은 자식 태스크를 조율하고 구조적으로 예외를 전파합니다."
    },
    "python-full-threading": {
      concept: "스레딩",
      prompt: "I/O 바운드 작업에서 스레드가 도움이 되는 이유는 무엇입니까?",
      hint: "스레드는 외부 리소스 대기를 겹칠 수 있습니다.",
      explanation: "스레드는 I/O 바운드 작업에 도움이 되지만, CPU 바운드 작업은 CPython의 GIL에 의해 제한됩니다."
    },
    "python-full-multiprocessing": {
      concept: "멀티프로세싱",
      prompt: "CPU 병렬 처리가 중요할 때 어떤 방식을 사용해야 합니까?",
      hint: "CPU 병렬 처리가 중요할 때는 여러 인터프리터/프로세스를 사용하세요.",
      explanation: "`multiprocessing`은 별도 프로세스에서 작업을 실행해 프로세스별 인터프리터 잠금을 우회합니다."
    },
    "python-full-profiling-memory": {
      concept: "성능 프로파일링",
      prompt: "최적화하기 전에 왜 먼저 측정해야 합니까?",
      hint: "성능 병목을 추측하는 것은 시간 낭비입니다.",
      explanation: "프로파일러와 벤치마크는 최적화가 실제 비용을 대상으로 하도록 핫 경로를 드러냅니다."
    },
    "python-full-advanced-typing": {
      concept: "고급 타이핑",
      prompt: "단순 어노테이션으로 API 계약을 표현하기 어려울 때 사용하는 도구는 무엇입니까?",
      hint: "단순 어노테이션으로 API 계약을 표현하기 어려울 때 더 풍부한 타이핑 도구를 사용하세요.",
      explanation: "고급 타이핑은 제네릭 함수, 호출 가능 서명, 리터럴 선택, 구조적 딕셔너리를 모델링하는 데 도움이 됩니다."
    },
    "python-full-descriptors": {
      concept: "디스크립터",
      prompt: "프로퍼티, 메서드, 많은 ORM을 구동하는 메커니즘은 무엇입니까?",
      hint: "디스크립터는 프로퍼티, 메서드, 많은 ORM을 구동합니다.",
      explanation: "디스크립터 메서드는 클래스와 인스턴스의 속성 접근을 커스터마이즈합니다."
    },
    "python-full-metaclasses": {
      concept: "메타클래스",
      prompt: "클래스 정의 자체에 정책이 필요할 때 사용하는 고급 도구는 무엇입니까?",
      hint: "클래스 정의 자체에 정책이 필요할 때만 메타클래스를 사용하세요.",
      explanation: "메타클래스는 클래스 빌드 방식을 커스터마이즈하지만, 더 간단한 데코레이터나 팩터리가 더 나을 때가 많습니다."
    },
    "python-full-security": {
      concept: "파이썬 보안",
      prompt: "`eval` 사용과 신뢰할 수 없는 역직렬화가 위험한 이유는 무엇입니까?",
      hint: "동적 실행과 신뢰할 수 없는 역직렬화는 고위험 경계를 만듭니다.",
      explanation: "안전한 파이썬 코드는 임의 실행을 피하고, 입력을 검증하며, 외부 데이터를 적대적으로 취급합니다."
    },
    "python-full-observability": {
      concept: "관찰 가능성",
      prompt: "배포 후 시스템 동작을 설명하는 데 필요한 세 가지 신호는 무엇입니까?",
      hint: "프로덕션 시스템에는 배포 후 동작을 설명하는 신호가 필요합니다.",
      explanation: "로그, 메트릭, 트레이스는 디버거 연결 없이 실패를 진단할 수 있게 합니다."
    },
    "python-full-deployment": {
      concept: "배포",
      prompt: "프로덕션 배포를 반복 가능하게 만드는 방법은 무엇입니까?",
      hint: "프로덕션은 오늘 설치되는 것에 의존해서는 안 됩니다.",
      explanation: "고정된 의존성과 반복 가능한 빌드 아티팩트는 배포를 감사 가능하고 롤백 친화적으로 만듭니다."
    },
    "python-full-web-services": {
      concept: "웹 서비스 경계",
      prompt: "API를 클라이언트와 유지보수자에게 예측 가능하게 유지하는 방법은 무엇입니까?",
      hint: "API는 외부 경계이며 명시적 계약이 필요합니다.",
      explanation: "검증과 타입이 지정된 응답 구조는 웹 서비스를 클라이언트와 유지보수자에게 예측 가능하게 유지합니다."
    },
    "python-full-database-access": {
      concept: "데이터베이스 접근",
      prompt: "일관성과 SQL 인젝션 안전을 위해 데이터베이스 접근 시 사용해야 하는 기법은 무엇입니까?",
      hint: "데이터베이스 경계에는 일관성과 인젝션 안전이 필요합니다.",
      explanation: "트랜잭션은 불변성을 보존하고, 파라미터는 쿼리 데이터를 SQL 코드와 분리합니다."
    },
    "python-full-architecture": {
      concept: "애플리케이션 아키텍처",
      prompt: "대규모 파이썬 시스템에서 명확한 소유권과 의존성 방향이 필요한 이유는 무엇입니까?",
      hint: "대규모 파이썬 시스템에는 명확한 소유권과 의존성 방향이 필요합니다.",
      explanation: "좋은 아키텍처는 비즈니스 규칙을 프레임워크, 저장소, 전송 세부 사항으로부터 격리합니다."
    },
    "python-full-maintenance": {
      concept: "장기 유지보수",
      prompt: "지속 가능한 프로젝트에 필요한 피드백 루프와 기록된 결정 수단은 무엇입니까?",
      hint: "지속되는 프로젝트에는 피드백 루프와 기록된 결정이 필요합니다.",
      explanation: "테스트, 타입, 린팅, 변경 이력은 변경을 검토 가능하게 하고 회귀 위험을 줄입니다."
    }
  }
};
