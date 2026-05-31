# 한/영 다국어(i18n) 작업 계획

목표: 기본 한국어 + 영어 전환. 메인 화면 상단에 언어 전환 버튼. 좌측 상단 로고 클릭 시 홈 이동.

> 현재 상태: **WIP — 아직 빌드 통과 안 함.** 인프라와 일부 컴포넌트 배선만 완료. 아래 "남은 작업"을 끝내야 `npm run check` 통과.

## 설계 (확정)

- 영어 데이터(`domains/*.ts`, `data/*Curriculum.ts`)가 **정본(canonical)**. 한국어는 **오버레이**로 병합.
- 코드 토큰(`answer`, `choices`, `code`, `acceptedAnswers`)은 언어 중립 → 절대 번역/변경 안 함. 따라서 `evaluateAnswer` 등 채점 로직 무수정.
- 번역은 산문(`prompt`, `concept`, `hint`, `explanation` + 도메인/트랙/카드 메타)만.
- `localizeDomain(domain, lang)`이 도메인 전체를 한국어로 치환한 새 객체 반환(`lang === "en"`이면 원본 그대로). 오버레이 없는 필드/도메인은 영어로 자동 폴백.

## 완료된 것

- `lib/i18n.ts` — `Language`("ko"|"en"), 기본 ko, `LanguageContext`/`useLanguage`/`useT`, `localizeLevel`.
- `data/i18n/uiStrings.ts` — 고정 UI 문자열 한/영 사전 + `t(key, lang)`.
- `data/i18n/types.ts` — `DomainTextKo`/`TrackTextKo`/`CardTextKo`/`DrillTextKo` 오버레이 타입.
- `lib/localize.ts` — `localizeDomain` + 공통 한국어 chrome(템플릿/액션/푸터 링크 라벨).
- `data/i18n/ko/python.ts` — 한국어 오버레이 (완료, drills 69 / tracks 4 / cards 4).
- `data/i18n/ko/linux.ts` — 한국어 오버레이 (완료, drills 288 / tracks 4 / cards 4).
- `data/i18n/ko/index.ts` — `domainTextKo` 맵 (python, linux 등록).
- `components/dojo/PythonDojoApp.tsx` — 부분 배선: import 추가, 언어 토글 버튼(`HeaderControls`), 모드/업적/지표/탭/사이드바 라벨 `t()` 적용, 사이드바·홈 로고 클릭 → 홈(`onHome`).

## 남은 작업 (다음 세션)

1. **`PythonDojoApp` 본체 배선 마무리** (필수 — 미완성으로 컴파일 에러):
   - `useState<Language>(DEFAULT_LANGUAGE)` 언어 상태 + localStorage(`LANGUAGE_STORAGE_KEY`) 로드/저장 effect.
   - `document.documentElement.lang = lang` effect.
   - `toggleLang`(사운드 재생 포함) 구현, `<LanguageContext.Provider value={{ lang, setLang, toggleLang }}>`로 반환 JSX 래핑.
   - `const domain = useMemo(() => localizeDomain(getDomainById(domainId), lang), [domainId, lang])`로 교체.
   - `HomeScreen`에 `onHome={goHome}` 전달 (현재 prop 추가됨 → 미전달 시 타입 에러).
2. **남은 컴포넌트 문자열 `t()` 적용**: `ProgressView`(헤더 "Progress"/aria), `SettingsOverlay`(Settings/Theme/Sound/Language/Reset/Dark/Light/On/Off/Close). `SettingsOverlay`에 언어 설정 행 추가(선택).
3. **나머지 10개 도메인 한국어 오버레이 생성** → `data/i18n/ko/<domain>.ts` 작성 후 `index.ts`에 등록:
   - postgresql, redisStreams(id 확인: `redis-streams`), springBoot, java, sqld, informationProcessingPractical, kafka, spark, flink, dsa.
   - 각 파일 형식은 `data/i18n/ko/python.ts` 참고. 코드 토큰 보존, 모든 drill/track/card id 커버.
   - id 키 주의: 일부 도메인은 curriculum factory로 drill id에 접두사가 붙음(예: redis는 `redis-full-*`). 실제 생성된 id 기준으로 키 작성.
4. **CSS**: `globals.css`에 `.kana-lang-toggle`(전환 버튼), `.kana-brand-home`(로고 버튼화 시 커서/포커스) 스타일 추가.
5. **검증**: `npm run check` (tsc + vitest + next build) 통과 확인. 한/영 토글 시 콘텐츠/UI 전환, 좌측 상단 클릭 홈 이동 수동 확인.

## 참고

- 도메인 config 중 inline: `postgresql`, `redisStreams`, `python`. 나머지는 `createLearningDomain` 팩토리.
- `level` 라벨(Beginner/Builder/Practitioner/Expertise 등)은 `lib/i18n.ts`의 `LEVEL_LABELS_KO`에서 전역 매핑. 누락된 값(Builder/Expertise 등) 추가 필요.
