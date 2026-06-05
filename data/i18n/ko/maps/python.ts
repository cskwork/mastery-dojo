import type { DrillTextKo } from "@/data/i18n/types";
import type { FactoryChromeKo, TopicKo } from "@/data/i18n/ko/buildFactoryOverlay";

export const pythonChrome: FactoryChromeKo = {
  metadata: {
    title: "PythonDojo - 초급부터 마스터리까지 파이썬 학습",
    description: "KanaDojo에서 영감을 받은 파이썬 학습 앱 — 기초 문법부터 마스터리 드릴까지."
  },
  welcomeTitle: "PythonDojo에 오신 것을 환영합니다!",
  welcomeBody: "PythonDojo는 KanaDojo와 Monkeytype에서 영감을 받아 커뮤니티가 만든 미려한 파이썬 학습 플랫폼입니다.",
  subjectName: "파이썬",
  footerMeta: "커뮤니티가 만든 서비스 ~ sapphire bloom ~ zen maru gothic ~ v0.1.18 (알파)",
  cards: {
    "foundations": { label: "기초", summary: "문법, 값, 분기" },
    "data": { label: "데이터", summary: "리스트, dict, 파일" },
    "design": { label: "설계", summary: "함수, 모듈, 테스트" },
    "mastery": { label: "마스터리", summary: "async, 프로토콜, 패키징" }
  },
  tracks: {
    "foundations": { title: "기초", focus: "문법, 값, 분기, 반복문" },
    "data": { title: "데이터 활용", focus: "리스트, dict, 파일, 컴프리헨션" },
    "design": { title: "프로그램 설계", focus: "함수, 모듈, 오류 처리, 테스트" },
    "mastery": { title: "마스터리 랩", focus: "클래스, 이터레이터, async, 성능, 프로토콜, 패키징" }
  }
};

// Hand-written Korean for the 56 non-factory baseDrills.
export const pythonBaseDrills: Record<string, DrillTextKo> = {
  "foundations-print": { concept: "print 출력", prompt: "이 프로그램은 무엇을 출력합니까?", hint: "`print`는 괄호 안의 값을 콘솔에 출력합니다.", explanation: "따옴표는 소스 코드에서 문자열을 나타내며, 출력 결과에는 포함되지 않습니다." },
  "foundations-variable": { concept: "변수 할당", prompt: "두 줄이 실행된 후 `score`에 저장된 값은 무엇입니까?", hint: "오른쪽이 먼저 평가된 후 변수가 갱신됩니다.", explanation: "`score`는 4에서 시작해 4 + 3이 됩니다." },
  "foundations-string-type": { concept: "타입", prompt: "숫자가 아닌 문자열인 값은 무엇입니까?", hint: "문자열은 따옴표로 감쌉니다.", explanation: "`\"42\"`는 텍스트입니다. 숫자처럼 보여도 타입은 `str`입니다." },
  "foundations-branch": { concept: "조건문", prompt: "어느 분기가 실행됩니까?", hint: "8은 5보다 크거나 같습니다.", explanation: "`if` 조건이 참이므로 파이썬은 첫 번째 블록을 실행합니다." },
  "foundations-range-loop": { concept: "for 반복문", prompt: "`total`의 최종 값은 무엇입니까?", hint: "`range(3)`은 0, 1, 2를 생성합니다.", explanation: "반복문이 0 + 1 + 2를 더하므로 `total`은 3이 됩니다." },
  "foundations-debug-indent": { concept: "들여쓰기", prompt: "이 잘못된 반복문을 고치려면 어떻게 해야 합니까?", hint: "콜론 다음에 오는 블록은 반드시 들여써야 합니다.", explanation: "파이썬은 들여쓰기로 어떤 문장이 블록 안에 속하는지 결정합니다." },
  "data-list-index": { concept: "리스트 인덱싱", prompt: "`names[1]`의 값은 무엇입니까?", hint: "파이썬 인덱스는 0부터 시작합니다.", explanation: "`names[0]`은 Ada이므로 `names[1]`은 Lin입니다." },
  "data-append": { concept: "리스트 변경", prompt: "`append` 후 `items`에 담긴 값은 무엇입니까?", hint: "`append`는 기존 리스트를 직접 변경합니다.", explanation: "`append`는 같은 리스트 끝에 항목 하나를 추가합니다." },
  "data-dict-get": { concept: "dict 조회", prompt: "`profile.get(\"city\", \"Seoul\")`의 반환값은 무엇입니까?", hint: "`get`은 키가 없을 때 대체값을 반환할 수 있습니다.", explanation: "`city` 키가 없으므로 `get`은 기본값 Seoul을 반환합니다." },
  "data-comprehension": { concept: "리스트 컴프리헨션", prompt: "`[0, 4, 8]`을 만드는 표현식은 무엇입니까?", hint: "각 `n`을 `n * 4`로 변환하세요.", explanation: "`range(3)`은 0, 1, 2를 생성하며, 각각에 4를 곱하면 0, 4, 8이 됩니다." },
  "data-slice": { concept: "슬라이싱", prompt: "`letters[1:4]`는 무엇입니까?", hint: "시작 인덱스는 포함되고 끝 인덱스는 제외됩니다.", explanation: "인덱스 1은 b이며, 슬라이스는 인덱스 4 직전까지 포함합니다." },
  "data-debug-key": { concept: "누락 키", prompt: "`theme`이 없을 때 `KeyError`를 피하려면 어떻게 변경해야 합니까?", hint: "대체값을 받을 수 있는 dict 메서드를 사용하세요.", explanation: "`dict.get`은 키가 없을 때 예외 대신 대체값을 반환합니다." },
  "design-return": { concept: "반환값", prompt: "`double(6)`의 결과는 무엇입니까?", hint: "`return`은 값을 호출자에게 돌려줍니다.", explanation: "함수는 6 * 2를 반환합니다." },
  "design-default-arg": { concept: "기본 인수", prompt: "`greet(\"Mina\")`의 반환값은 무엇입니까?", hint: "`name`만 전달되었으므로 `prefix`는 기본값을 사용합니다.", explanation: "기본 `prefix`는 Hi이며, f-string이 Mina를 삽입합니다." },
  "design-exception": { concept: "예외", prompt: "`int(\"x\")`가 실패할 때 어떤 예외를 잡아야 합니까?", hint: "값의 타입은 맞지만 내용이 유효하지 않습니다.", explanation: "`int`는 문자열을 파싱할 수 있지만 `x`는 유효한 정수 리터럴이 아닙니다." },
  "design-module": { concept: "모듈", prompt: "`math`에서 `sqrt`만 임포트하는 줄은 무엇입니까?", hint: "파이썬은 `from 모듈 import 이름` 문법을 사용합니다.", explanation: "`from math import sqrt`는 현재 모듈에 `sqrt`를 직접 바인딩합니다." },
  "design-test": { concept: "테스트", prompt: "`add(2, 3)`이 5를 반환하는지 확인하는 assertion은 무엇입니까?", hint: "assertion에 동등 비교를 사용하세요.", explanation: "`==`는 값을 비교합니다. 단일 `=`는 할당이지 테스트가 아닙니다." },
  "design-pure": { concept: "순수 함수", prompt: "외부 상태를 변경하지 않고 값을 반환하는 함수의 종류는 무엇입니까?", hint: "입력에만 의존하고 부작용을 피합니다.", explanation: "순수 함수는 같은 입력이 항상 같은 출력을 내므로 테스트하기 쉽습니다." },
  "mastery-class": { concept: "클래스", prompt: "메서드 `greet`가 `self`를 받는 이유는 무엇입니까?", hint: "`self`는 메서드가 호출된 객체입니다.", explanation: "인스턴스 메서드는 첫 번째 인수로 해당 객체를 받습니다." },
  "mastery-generator": { concept: "제너레이터", prompt: "함수가 한 번에 값 하나를 생성하게 하는 키워드는 무엇입니까?", hint: "함수를 종료하는 대신 일시 중단합니다.", explanation: "`yield`는 나중에 재개할 수 있는 제너레이터를 만듭니다." },
  "mastery-context": { concept: "컨텍스트 매니저", prompt: "파일을 자동으로 닫는 구문은 무엇입니까?", hint: "컨텍스트 매니저는 `with`를 사용합니다.", explanation: "`with`는 블록이 종료될 때 정리 로직을 호출합니다." },
  "mastery-async": { concept: "async", prompt: "`async` 함수 내부에서 `await`는 무엇을 합니까?", hint: "`await`는 이벤트 루프와 협력합니다.", explanation: "`await`는 대기 중인 연산이 완료될 때까지 다른 작업이 실행될 수 있도록 합니다." },
  "mastery-big-o": { concept: "복잡도", prompt: "평균적으로 `O(1)` 조회가 가능한 방식은 무엇입니까?", hint: "해시 테이블은 빠른 키 조회를 위해 설계되었습니다.", explanation: "파이썬 `dict` 조회는 해싱을 사용하므로 평균 상수 시간입니다." },
  "mastery-dataclass": { concept: "데이터클래스", prompt: "단순 데이터 객체에 `__init__`과 `__repr__`을 자동 생성하는 데코레이터는 무엇입니까?", hint: "`dataclasses` 모듈에서 제공합니다.", explanation: "`@dataclass`는 일반 데이터 컨테이너의 상용구를 줄여 줍니다." },
  "foundations-bool-logic": { concept: "불리언 논리", prompt: "`ready`의 값은 무엇입니까?", hint: "두 비교 모두 참입니다.", explanation: "`age >= 18`은 참이고 `age < 65`도 참이므로 `and` 표현식은 `True`입니다." },
  "foundations-none": { concept: "None", prompt: "의미 있는 결과가 없음을 나타내는 값은 무엇입니까?", hint: "파이썬의 null에 해당하는 싱글턴입니다.", explanation: "`None`은 이름이나 함수에 반환할 의미 있는 값이 없을 때 사용합니다." },
  "foundations-fstring": { concept: "f-string", prompt: "`label`에 담긴 값은 무엇입니까?", hint: "f-string은 중괄호 안에 현재 값을 삽입합니다.", explanation: "중괄호가 Ada와 3으로 대체되어 문자열 `Ada: 3`이 만들어집니다." },
  "foundations-debug-equality": { concept: "비교 연산자", prompt: "이 조건문을 어떻게 고쳐야 합니까?", hint: "할당과 동등 비교는 다른 연산입니다.", explanation: "조건식은 `==`으로 값을 비교해야 합니다. 단일 `=`는 값을 할당합니다." },
  "foundations-while-break": { concept: "while 반복문", prompt: "`count`의 최종 값은 무엇입니까?", hint: "`break`는 `count`가 3이 되는 즉시 반복문을 종료합니다.", explanation: "반복문이 `count`를 1, 2, 3으로 증가시키다가 `break`로 멈춥니다." },
  "foundations-match-case": { concept: "match", prompt: "구조적 패턴 매칭을 시작하는 문법은 무엇입니까?", hint: "파이썬은 `match`와 들여쓴 `case` 분기를 사용합니다.", explanation: "`match value:`로 패턴 매칭 블록을 시작하고, 이어서 `case` 절이 따라옵니다." },
  "foundations-scope": { concept: "스코프", prompt: "함수 내부에서 생성된 변수를 가리키는 이름은 무엇입니까?", hint: "해당 함수 호출 안에서만 존재합니다.", explanation: "지역 변수는 할당된 함수 스코프에 속합니다." },
  "foundations-debug-mutable-default": { concept: "함수 기본값", prompt: "공유 리스트 버그를 어떻게 고쳐야 합니까?", hint: "기본 인수는 호출마다가 아니라 한 번만 생성됩니다.", explanation: "`items=None`으로 설정하고 함수 내부에서 `[]`를 생성하면 호출마다 새 리스트를 얻을 수 있습니다." },
  "data-tuple-unpack": { concept: "언패킹", prompt: "언패킹 후 `y`의 값은 무엇입니까?", hint: "값은 위치에 따라 할당됩니다.", explanation: "`x`는 10을 받고 `y`는 20을 받습니다." },
  "data-set-membership": { concept: "집합", prompt: "고유한 값으로 빠른 멤버십 검사에 가장 적합한 컬렉션은 무엇입니까?", hint: "`dict` 키처럼 해싱을 사용합니다.", explanation: "`set`은 고유한 값을 저장하고 빠른 멤버십 검사를 지원합니다." },
  "data-json-loads": { concept: "JSON", prompt: "JSON 텍스트를 파싱하는 표준 모듈은 무엇입니까?", hint: "데이터 형식 이름과 동일합니다.", explanation: "`json` 모듈은 JSON 문자열을 파이썬 `dict`, 리스트, 문자열, 숫자, 불리언으로 변환합니다." },
  "data-debug-copy": { concept: "별칭", prompt: "원본 리스트의 의도치 않은 변경을 막으려면 어떻게 해야 합니까?", hint: "두 이름이 같은 리스트를 가리킬 수 있습니다.", explanation: "독립적인 얕은 복사본이 필요할 때는 `items.copy()` 또는 `list(items)`를 사용하세요." },
  "data-pathlib": { concept: "경로", prompt: "객체 지향 파일 시스템 경로를 제공하는 클래스는 무엇입니까?", hint: "`pathlib`에서 제공합니다.", explanation: "`pathlib.Path`는 경로 결합, 읽기, 쓰기, 검사 메서드를 갖춘 이식성 있는 경로 모델입니다." },
  "data-csv-dictreader": { concept: "CSV", prompt: "CSV 행을 열 이름을 키로 하는 딕셔너리로 읽는 헬퍼는 무엇입니까?", hint: "`csv` 모듈에 있습니다.", explanation: "`csv.DictReader`는 헤더 행을 키로 사용해 각 행을 `dict`로 매핑합니다." },
  "data-generator-expression": { concept: "지연 이터레이션", prompt: "`(n * n for n in nums)`는 어떤 종류의 표현식입니까?", hint: "괄호와 `for`를 결합하면 지연 스트림을 만들 수 있습니다.", explanation: "제너레이터 표현식은 전체 리스트를 즉시 만들지 않고 값을 지연 생성합니다." },
  "data-debug-encoding": { concept: "파일 인코딩", prompt: "텍스트 파일 읽기를 이식성 있게 만드는 방법은 무엇입니까?", hint: "기본 인코딩은 환경마다 다를 수 있습니다.", explanation: "`encoding=\"utf-8\"`을 명시하면 운영 체제와 로케일에 따른 차이를 방지할 수 있습니다." },
  "design-higher-order": { concept: "고차 함수", prompt: "`apply(double, 4)`의 반환값은 무엇입니까?", hint: "`apply`는 전달받은 함수를 호출합니다.", explanation: "`apply`는 4를 `double`에 전달하고, `double`은 8을 반환합니다." },
  "design-dependency-injection": { concept: "의존성 주입", prompt: "코드를 테스트하기 쉽게 만드는 설계는 무엇입니까?", hint: "테스트에서 가짜 의존성을 제공할 수 있습니다.", explanation: "의존성을 함수나 클래스에 전달하면 테스트에서 동작을 교체하기 쉬워집니다." },
  "design-typing-list": { concept: "타입 힌트", prompt: "문자열의 리스트를 나타내는 타입 힌트는 무엇입니까?", hint: "모던 파이썬은 내장 제네릭 타입을 사용합니다.", explanation: "`list[str]`은 리스트의 각 항목이 문자열이어야 함을 명시합니다." },
  "design-debug-broad-except": { concept: "오류 처리", prompt: "이 오류 처리를 어떻게 개선할 수 있습니까?", hint: "광범위한 `except`는 실제 버그를 숨길 수 있습니다.", explanation: "`ValueError`를 잡으면 예상된 실패를 명시하고 예기치 않은 버그가 드러납니다." },
  "design-contextmanager": { concept: "리소스 관리", prompt: "`with` 문을 구동하는 프로토콜은 무엇입니까?", hint: "진입 및 종료 동작을 정의합니다.", explanation: "컨텍스트 매니저는 `with` 블록 진입 시 설정을, 종료 시 정리를 실행합니다." },
  "design-pytest-fixture": { concept: "픽스처", prompt: "pytest에서 테스트가 이름으로 요청할 수 있는 재사용 가능한 설정 함수는 무엇입니까?", hint: "`@pytest.fixture`로 데코레이트합니다.", explanation: "픽스처는 재사용 가능한 설정 데이터나 리소스를 테스트에 제공합니다." },
  "design-packaging": { concept: "패키징", prompt: "모던 파이썬 프로젝트 메타데이터를 선언하는 대표적인 파일은 무엇입니까?", hint: "TOML 형식이며 `pyproject`로 시작합니다.", explanation: "`pyproject.toml`은 빌드 시스템과 프로젝트 메타데이터의 표준 위치입니다." },
  "design-debug-circular-import": { concept: "모듈 경계", prompt: "공유 헬퍼를 위해 두 모듈이 서로를 임포트할 때 해결책은 무엇입니까?", hint: "공유 의존성을 추출해 순환을 끊으세요.", explanation: "세 번째 모듈에 공유 코드를 두면 두 파일이 서로 의존하지 않아도 됩니다." },
  "mastery-descriptor": { concept: "디스크립터", prompt: "객체가 속성 읽기를 제어하게 하는 메서드는 무엇입니까?", hint: "디스크립터는 get, set, delete 훅을 구현합니다.", explanation: "`__get__`은 속성을 읽을 때 어떻게 동작할지를 디스크립터가 커스터마이즈하도록 합니다." },
  "mastery-protocol": { concept: "구조적 타이핑", prompt: "상속 없이 동작을 기술하는 타입 구조체는 무엇입니까?", hint: "정적 분석에서 덕 타이핑을 지원합니다.", explanation: "`Protocol`은 기반 클래스 대신 구조적으로 필요한 메서드나 속성을 기술합니다." },
  "mastery-lru-cache": { concept: "메모이제이션", prompt: "최근 함수 결과를 캐시하는 `functools` 데코레이터는 무엇입니까?", hint: "가장 최근에 사용한 결과를 유지합니다.", explanation: "`functools.lru_cache`는 호출을 메모이즈해 반복 입력을 빠르게 반환합니다." },
  "mastery-debug-gil": { concept: "동시성", prompt: "CPython에서 CPU 바운드 병렬 작업에 더 적합한 방식은 무엇입니까?", hint: "CPU 바운드 파이썬 스레드는 CPython의 GIL에 의해 제한됩니다.", explanation: "별도의 프로세스는 여러 CPU 코어에서 파이썬 바이트코드를 실행할 수 있습니다." },
  "mastery-taskgroup": { concept: "구조적 동시성", prompt: "범위가 지정된 취소와 함께 자식 태스크를 묶는 `asyncio` API는 무엇입니까?", hint: "비동기 컨텍스트 매니저입니다.", explanation: "`asyncio.TaskGroup`은 관련 태스크를 범위 내에 유지하고 실패 전파를 더 깔끔하게 처리합니다." },
  "mastery-profiling": { concept: "프로파일링", prompt: "함수 호출 시간을 프로파일링하는 표준 모듈은 무엇입니까?", hint: "표준 라이브러리의 C 기반 프로파일러입니다.", explanation: "`cProfile`은 호출 횟수와 타이밍을 기록해 실제 성능 병목을 찾을 수 있게 합니다." },
  "mastery-wheel": { concept: "배포", prompt: "`.whl`로 끝나는 패키지 형식은 무엇입니까?", hint: "`pip`이 빠르게 설치하는 빌드된 배포 형식입니다.", explanation: "wheel은 소스에서 다시 빌드하지 않고 `pip`이 설치할 수 있는 빌드된 패키지 아카이브입니다." },
  "mastery-debug-observability": { concept: "관찰 가능성", prompt: "실패한 백그라운드 잡의 프로덕션 디버깅을 개선하려면 어떻게 해야 합니까?", hint: "실패한 잡을 추적할 충분한 컨텍스트가 필요합니다.", explanation: "잡 식별자가 포함된 구조적 로그는 실패를 검색 가능하게 하고 오류를 해당 잡에 연결합니다." }
};

// curriculumTopics — English placeholders, translate [conceptKo, answerKo].
export const pythonTopicsKo: Record<string, TopicKo> = {
  "interpreter and CLI": ["인터프리터와 CLI","python -m 모듈 실행","패키지처럼 임포트가 해석되도록 `python -m`으로 모듈을 실행한다."], // hint: Run modules with the interpreter so imports resolve like a package.
  "source files and encoding": ["소스 파일과 인코딩","UTF-8 소스 텍스트","모던 파이썬 소스 파일은 텍스트이며 일반적으로 UTF-8을 사용한다."], // hint: Modern Python source files are text, commonly UTF-8.
  "truthiness": ["참 거짓 평가","빈 컨테이너는 거짓","파이썬은 `if`와 `while`에서 참 거짓 값 평가를 사용한다."], // hint: Python uses truth value testing in if and while.
  "equality vs identity": ["동등성과 동일성","값 비교는 ==, 객체 동일성은 is","값이 동등한 두 객체가 반드시 동일한 객체일 필요는 없다."], // hint: Two equal values do not have to be the same object.
  "numeric types": ["숫자 타입","int float Decimal Fraction","문제에 맞는 수치 모델을 선택한다."], // hint: Choose the numeric model that matches the problem.
  "formatted strings": ["포맷 문자열","f-string","출력 값에는 가독성 높은 보간 방식을 사용한다."], // hint: Use readable interpolation for values in output.
  "structural pattern matching": ["구조적 패턴 매칭","match 문","하나의 불리언보다 구조(shape)가 중요할 때 패턴 매칭을 사용한다."], // hint: Use pattern matching when shape matters more than one boolean.
  "loop control": ["반복문 제어","break continue else","반복문은 조기 종료, 반복 건너뜀, 또는 `break` 없이 종료될 때 `else` 블록 실행이 가능하다."], // hint: Loops can exit early, skip an iteration, or run an else block when no break occurs.
  "function parameters": ["함수 매개변수","위치 전용 및 키워드 전용 매개변수","파이썬은 호출자가 인수를 전달하는 방식을 제어할 수 있다."], // hint: Python can control how callers pass arguments.
  "exception handling": ["예외 처리","구체적인 예외 발생","처리할 수 있는 예외만 잡고 나머지는 크게 실패하도록 둔다."], // hint: Catch what you can handle and let the rest fail loudly.
  "context managers": ["컨텍스트 매니저","with 문","파일, 락, 트랜잭션에는 결정적인 설정과 정리를 위해 `with` 문을 사용한다."], // hint: Use deterministic setup and cleanup for files, locks, and transactions.
  "modules and imports": ["모듈과 임포트","절대 임포트","패키지 코드는 안정적인 모듈 경로에서 이름을 임포트해야 한다."], // hint: Package code should import names from stable module paths.
  "virtual environments": ["가상 환경","python -m venv","프로젝트 의존성을 시스템 인터프리터와 격리된 상태로 유지한다."], // hint: Keep project dependencies isolated from the system interpreter.
  "package installation": ["패키지 설치","pip install","인덱스 또는 로컬 wheel에서 활성 환경에 패키지를 설치한다."], // hint: Install from an index or local wheel into the active environment.
  "debugging basics": ["디버깅 기초","breakpoint()","추측 대신 실행을 일시 중단하고 상태를 직접 검사한다."], // hint: Pause execution and inspect state instead of guessing.
  "sequence operations": ["시퀀스 연산","슬라이싱과 이터레이션","리스트, 튜플, 문자열, range는 공통적인 시퀀스 동작을 공유한다."], // hint: Lists, tuples, strings, and ranges share common sequence behavior.
  "dictionary patterns": ["딕셔너리 패턴","get setdefault defaultdict Counter","데이터 누적 문제에 맞는 매핑 헬퍼를 사용한다."], // hint: Use the mapping helper that matches the data accumulation problem.
  "set algebra": ["집합 연산","합집합 교집합 차집합","고유성과 멤버십은 집합으로 모델링한다."], // hint: Model uniqueness and membership with sets.
  "sorting with keys": ["키 기반 정렬","키 함수","파생된 값을 기준으로 복잡한 객체를 정렬한다."], // hint: Sort complex objects by a derived value.
  "comprehensions": ["컴프리헨션","리스트 dict 집합 컴프리헨션","map/filter 스타일의 변환에는 간결한 표현식을 사용한다."], // hint: Use a compact expression for map/filter style transformations.
  "iterator protocol": ["이터레이터 프로토콜","__iter__와 __next__","이터레이션은 리스트에 국한되지 않고 프로토콜 기반으로 동작한다."], // hint: Iteration is protocol-based, not limited to lists.
  "generators": ["제너레이터","yield","전체 리스트를 빌드하는 대신 값을 지연 생성한다."], // hint: Generate values lazily instead of building a full list.
  "filesystem paths": ["파일시스템 경로","pathlib.Path","문자열 연결 대신 객체 지향 경로인 `pathlib.Path`를 사용한다."], // hint: Use object-oriented paths instead of string concatenation.
  "structured files": ["구조화 파일","json과 csv 모듈","데이터 형식에는 표준 파서를 사용한다."], // hint: Use standard parsers for data formats.
  "dates and time zones": ["날짜와 시간대","zoneinfo를 활용한 datetime","시간대가 중요한 경우 타임존 인식 datetime을 저장하고 비교한다."], // hint: Store and compare aware datetimes when zones matter.
  "data classes": ["데이터클래스","@dataclass","단순 데이터 객체에는 `__init__`, `__repr__`, 비교 메서드를 자동 생성하는 기능을 활용한다."], // hint: Use generated init, repr, and comparison for plain data objects.
  "typed containers": ["타입 지정 컨테이너", "list[str]과 dict[str, int]", "컬렉션 요소의 타입을 애너테이션으로 명시한다."], // hint: Annotate collection element types.
  "local relational storage": ["로컬 관계형 저장소","sqlite3","로컬의 영속적인 관계형 데이터에는 기본 내장된 `sqlite3` 데이터베이스를 사용한다."], // hint: Use the bundled database for local durable relational data.
  "regular expressions": ["정규 표현식","re 모듈","텍스트 유효성 검사와 추출에는 패턴을 사용한다."], // hint: Use patterns for text validation and extraction.
  "serialization boundaries": ["직렬화 경계","외부 데이터 유효성 검사","파일, API, 환경 변수는 신뢰할 수 없는 입력으로 처리한다."], // hint: Treat files, APIs, and environment variables as untrusted input.
  "numeric precision": ["수치 정밀도","정확한 소수 계산에는 Decimal","이진 부동소수점은 금액과 같은 계산에 적합하지 않다."], // hint: Binary float is not ideal for money-like calculations.
  "pure functions": ["순수 함수","숨겨진 상태를 변경하는 대신 값을 반환","계산과 부작용을 분리한다."], // hint: Separate calculation from side effects.
  "module boundaries": ["모듈 경계","응집된 책임 하나당 모듈 하나","헬퍼를 한곳에 모아 두지 않고 도메인 목적에 따라 코드를 그룹화한다."], // hint: Group code by domain purpose rather than dumping helpers together.
  "custom exceptions": ["커스텀 예외","도메인 특화 예외 타입","비즈니스 경계에서는 의미 있는 실패 이름을 사용한다."], // hint: Use meaningful failure names at business boundaries.
  "logging": ["로깅","logging.getLogger(__name__)","라이브러리는 운영 메시지를 직접 출력해서는 안 된다."], // hint: Libraries should not print operational messages directly.
  "testing strategy": ["테스트 전략","단위 통합 엔드투엔드 테스트","동작을 증명하는 가장 저렴한 테스트를 사용한다."], // hint: Use the cheapest test that proves the behavior.
  "test fixtures": ["테스트 픽스처","반복 가능한 설정과 정리","테스트에는 안정적인 입력과 격리된 부작용이 필요하다."], // hint: Tests need stable inputs and isolated side effects.
  "dependency injection": ["의존성 주입","협력 객체를 명시적으로 전달","테스트에서 외부 서비스를 교체 가능하게 만든다."], // hint: Make external services replaceable in tests.
  "decorators": ["데코레이터","동작을 유지하는 래퍼 함수","콜러블에 횡단 관심사 동작을 추가할 때 데코레이터를 사용한다."], // hint: Use decorators for cross-cutting behavior around callables.
  "composition over inheritance": ["상속보다 컴포지션","작은 협력 객체를 합성","교체하기 쉬운 객체 관계를 선호한다."], // hint: Prefer object relationships that stay easy to replace.
  "protocol-oriented design": ["프로토콜 기반 설계","typing.Protocol","협력 객체에게 요구되는 동작을 기술한다."], // hint: Describe behavior required from a collaborator.
  "configuration": ["설정 관리","환경 변수와 타입 지정 설정","배포별 값을 코드와 분리한다."], // hint: Separate deploy-specific values from code.
  "API client design": ["API 클라이언트 설계","타임아웃, 재시도, 타입 지정 응답","네트워크 호출은 실패할 수 있으며 영원히 대기해서는 안 된다."], // hint: Network calls fail and should not hang forever.
  "pyproject packaging": ["pyproject 패키징","pyproject.toml","모던 파이썬 패키징 메타데이터는 `pyproject.toml`이라는 하나의 표준 파일에 위치해야 한다."], // hint: Modern Python packaging metadata belongs in one standard project file.
  "command-line interfaces": ["커맨드라인 인터페이스","argparse","표준 라이브러리 파서인 `argparse`로 옵션과 서브커맨드를 파싱한다."], // hint: Parse options and subcommands with a standard library parser.
  "documentation strings": ["문서화 문자열","docstring","사용자가 `help()`로 읽는 공개 모듈, 클래스, 함수, 복잡한 동작에 docstring을 작성한다."], // hint: Document public modules, classes, functions, and tricky behavior where users read help().
  "async tasks": ["async 태스크","asyncio.create_task","이벤트 루프에서 동시 코루틴 작업을 `asyncio.create_task`로 예약한다."], // hint: Schedule concurrent coroutine work under an event loop.
  "structured concurrency": ["구조적 동시성","asyncio.TaskGroup","`asyncio.TaskGroup`으로 관련 async 태스크를 묶어 실패와 취소의 범위를 지정한다."], // hint: Group related async tasks so failures and cancellation are scoped.
  "threading": ["스레딩","블로킹 I/O에는 스레드 사용","스레드는 외부 리소스를 기다리는 작업을 겹쳐서 실행할 수 있다."], // hint: Threads can overlap waiting on external resources.
  "multiprocessing": ["멀티프로세싱","CPU 바운드 작업에는 별도 프로세스","CPU 병렬 처리가 필요할 때는 여러 인터프리터 프로세스를 사용한다."], // hint: Use multiple interpreters/processes when CPU parallelism matters.
  "performance profiling": ["성능 프로파일링","최적화 전에 먼저 측정","성능 병목을 추측하는 것은 시간 낭비이므로 먼저 측정한다."], // hint: Guessing performance bottlenecks wastes time.
  "advanced typing": ["고급 타입 힌트","TypeVar ParamSpec Literal TypedDict","단순한 애너테이션으로 API 계약을 표현할 수 없을 때 `TypeVar`, `ParamSpec`, `Literal`, `TypedDict` 같은 풍부한 타입 도구를 사용한다."], // hint: Use richer typing tools when simple annotations cannot express API contracts.
  "descriptors": ["디스크립터","__get__ __set__ __delete__","디스크립터는 프로퍼티, 메서드, 많은 ORM을 구동한다."], // hint: Descriptors power properties, methods, and many ORMs.
  "metaclasses": ["메타클래스","클래스 생성 커스터마이즈","클래스 정의 자체에 정책이 필요한 경우에만 메타클래스를 사용한다."], // hint: Reach for metaclasses only when class definitions themselves need policy.
  "Python security": ["파이썬 보안","eval 사용 금지 및 입력 유효성 검사","동적 실행과 신뢰할 수 없는 역직렬화는 고위험 경계를 만든다."], // hint: Dynamic execution and untrusted deserialization create high-risk boundaries.
  "observability": ["관측 가능성","로그 메트릭 트레이스","프로덕션 시스템은 배포 후 동작을 설명하는 신호가 필요하다."], // hint: Production systems need signals that explain behavior after deployment.
  "deployment": ["배포","반복 가능한 빌드와 고정된 의존성","프로덕션은 그 날 우연히 설치되는 것에 의존해서는 안 된다."], // hint: Production should not depend on whatever happens to install today.
  "web service boundaries": ["웹 서비스 경계","요청 유효성 검사와 응답 계약","API는 외부 경계이므로 명시적인 계약이 필요하다."], // hint: APIs are external boundaries and need explicit contracts.
  "database access": ["데이터베이스 접근","트랜잭션과 파라미터화된 쿼리","데이터베이스 경계에는 일관성과 SQL 인젝션 안전성이 필요하다."], // hint: Database boundaries need consistency and injection safety.
  "application architecture": ["애플리케이션 아키텍처","도메인 경계와 명시적 의존성","대규모 파이썬 시스템에는 명확한 소유권과 의존성 방향이 필요하다."], // hint: Large Python systems need clear ownership and dependency direction.
  "long-term maintenance": ["장기 유지보수","테스트 타입 린팅 및 변경 이력","지속되는 프로젝트에는 피드백 루프와 기록된 결정이 필요하다."], // hint: Sustained projects need feedback loops and recorded decisions.
};
