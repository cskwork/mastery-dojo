# Changelog 2026-06-06 — i18n 완성 + kana-dojo 디자인 폴리시

목표: 미완성 영역 전체 완성, 디자인 폴리시(kana-dojo 미학), 한국어 번역 완전 완성(각 문제 단위 점검).

## 1. 한국어 번역 완성 (드릴 단위)

### 문제 (근본 원인)

오버레이는 `data/i18n/ko/maps/*.ts`의 `topicsKo` 항목 `[conceptKo, answerKo]`만 가졌고, 드릴의 `explanation`/reverse 단서는 `data/i18n/ko/buildFactoryOverlay.ts`의 템플릿이 **영어**(`${answer} is the key move for ${concept}. ${hint}`)로 생성했다. 결과적으로 12개 도메인 ~3,400개 드릴이 한국어 모드에서도 explanation이 영어였고, reverse 모드는 영어 `topic.hint`를 단서로 노출했다.

### 해결 (DRY, 템플릿 레벨)

- `TopicKo`를 `[conceptKo, answerKo, hintKo?]` 3-튜플로 확장. `hintKo` 누락 시 영어 hint로 폴백(점진 마이그레이션 안전).
- `drillsForTopic`이 conceptKo/answerKo/hintKo만으로 완전한 한국어 explanation과 reverse 프롬프트/힌트를 합성하도록 재작성. 영어 정본 `${answer} is the key move for ${concept}. ${hint}` 구조를 한국어로 미러링: `${conceptKo}의 핵심은 ${answerKo}입니다. ${hintKo}`.
- reverse 단서를 `topic.answer`(영어, 의미도 어긋남) → `hintKo`(영어 정본과 동일하게 hint를 단서로)로 교정.
- 12개 맵 전체 `topicsKo`에 `hintKo`(3번째 요소) 추가 — 총 **829개** 토픽 hint를 한국어로 번역. 코드 토큰/명령어/SQL 키워드/공식 명칭은 언어 중립으로 보존.
- `scripts/genSkeletons.mjs`도 3-튜플 방출하도록 갱신(향후 재생성 시 구조 일치).

### 번역 방식

- `ultracode` 멀티 에이전트 워크플로로 도메인당 1 에이전트(12 병렬, Sonnet)가 `// hint:` 영어 주석을 한국어로 번역해 구조화 반환.
- 적용은 결정론적 스크립트가 키 매칭으로 3번째 튜플 요소 삽입(파일 편집 리스크 분리). 828/829 자동 적용, 대괄호 포함 1건(`list[str]`) 수동 처리.

### 회귀 가드

- `test/i18nCoverage.test.ts` 추가: 12개 도메인 각각, 모든 드릴의 `prompt`/`hint`/`explanation`에 한글 포함을 강제(완전 영어 필드 = 누락 오버레이 회귀를 차단). 코드 토큰은 한국어 문장 내 보존 허용.

## 2. UI 하드코딩 영어 제거

- `lib/i18n.ts` `LEVEL_LABELS_KO`에 누락 레벨 추가: Builder(구축), Expertise(전문가), Mastery(숙련). 카드/트랙 레벨 라벨의 영어 누출 제거.
- `PythonDojoApp.tsx` ProgressView 헤더 `Progress` → `t("progress")`.
- 섹션 aria-label `${track.title} dojo` → `${track.title} ${t("dojoLabel")}`(uiStrings에 `dojoLabel` 추가).
- `app/layout.tsx` 정적 metadata title/description을 한국어로(기본 언어가 ko이므로 탭 제목·미리보기도 한국어).

## 3. 디자인 폴리시 (kana-dojo)

- `app/globals.css`: reduced-motion이 참조하지만 정의되지 않았던 배경 토큰 애니메이션 구현 — `@keyframes kana-token-pulse`(opacity 0.5↔1, 8~14s, nth-child 스태거). compositor 친화적(opacity 전용), reduced-motion에서 비활성.
- 시그니처 배경 토큰 그리드를 훈련/진행 화면에도 적용(`TokenBackdrop`을 `TrainingView`/`ProgressView`에 추가, `.kana-app-page`에서 `position: fixed`로 고정해 스크롤 중에도 잔잔한 배경 유지). 사이드바(z-3)·본문(`.kana-dojo-main` z-1)이 백드롭(z-0) 위.

## 검증

- `npm run check`(tsc + vitest + next build) 통과. 테스트 20개(training 8 + i18n 커버리지 12) 통과.
- Playwright 시각 확인: 홈/훈련/힌트/진행 화면 한국어, 영어 토글 경로 무회귀. 12개 도메인 그리드, 모드 탭, 진행 통계 모두 한국어 렌더.
