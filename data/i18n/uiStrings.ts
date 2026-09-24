import type { Language } from "@/lib/i18n";

// Static UI chrome strings. Content (drills, domain copy) is localized separately
// through the Korean overlays in data/i18n/ko. Keep keys descriptive and stable.
export type UiStringKey = keyof typeof uiStrings;

export const uiStrings = {
  // generic actions / labels
  home: { ko: "홈", en: "Home" },
  progress: { ko: "진행", en: "Progress" },
  sound: { ko: "사운드", en: "Sound" },
  settings: { ko: "설정", en: "Settings" },
  hint: { ko: "힌트", en: "Hint" },
  checkAnswer: { ko: "정답 확인", en: "Check answer" },
  nextDrill: { ko: "다음 드릴", en: "Next drill" },
  reset: { ko: "초기화", en: "Reset" },

  // language toggle
  languageName: { ko: "한국어", en: "English" },
  toggleLanguage: { ko: "언어 전환", en: "Toggle language" },

  // header controls (aria)
  displayControls: { ko: "표시 설정", en: "Display controls" },
  toggleTheme: { ko: "테마 전환", en: "Toggle theme" },
  toggleSound: { ko: "사운드 전환", en: "Toggle sound" },
  openSettings: { ko: "설정 열기", en: "Open settings" },
  closeSettings: { ko: "설정 닫기", en: "Close settings" },
  collapseSidebar: { ko: "사이드바 접기", en: "Collapse sidebar" },

  // aria regions
  learningDomains: { ko: "학습 도메인", en: "Learning domains" },
  answerChoices: { ko: "보기", en: "Answer choices" },
  communityLinks: { ko: "커뮤니티 링크", en: "Community links" },
  siteLinks: { ko: "사이트 링크", en: "Site links" },
  trainingDojos: { ko: "훈련 도장", en: "training dojos" },
  dojoLabel: { ko: "도장", en: "dojo" },
  progressViews: { ko: "진행 화면", en: "Progress views" },
  overallStatistics: { ko: "전체 통계", en: "Overall statistics" },
  trackCompletion: { ko: "트랙 완료율", en: "Track completion" },
  currentStreakAria: { ko: "현재 연속 정답", en: "Current streak" },
  streakStatistics: { ko: "연속 정답 통계", en: "Streak statistics" },
  achievementsAria: { ko: "업적", en: "Achievements" },

  // drill card
  level: { ko: "레벨", en: "Level" },
  drillsUnit: { ko: "드릴", en: "drills" }, // used as "{level} · 드릴 {n}개" / "{level} · {n} drills"
  typeAnswer: { ko: "정답을 입력하세요", en: "type the answer" },

  // metrics
  xp: { ko: "XP", en: "XP" },
  streak: { ko: "연속", en: "Streak" },
  accuracy: { ko: "정확도", en: "Accuracy" },
  complete: { ko: "완료", en: "Complete" },
  attempts: { ko: "시도", en: "Attempts" },
  correct: { ko: "정답", en: "Correct" },
  cleared: { ko: "해결", en: "Cleared" },
  current: { ko: "현재", en: "Current" },
  best: { ko: "최고", en: "Best" },
  currentStreakLabel: { ko: "현재 연속 정답", en: "current streak" },

  // modes
  modePick: { ko: "선택", en: "Pick" },
  modeReverse: { ko: "역방향", en: "Reverse" },
  modeInput: { ko: "입력", en: "Input" },
  modeDebug: { ko: "디버그", en: "Debug" },

  // progress tabs
  tabStats: { ko: "통계", en: "Stats" },
  tabStreak: { ko: "연속", en: "Streak" },
  tabAchievements: { ko: "업적", en: "Achievements" },
  tracksHeading: { ko: "트랙", en: "Tracks" },

  // settings overlay
  themeTitle: { ko: "테마", en: "Theme" },
  themeDesc: { ko: "라이트 또는 다크 모드", en: "Light or dark appearance" },
  soundTitle: { ko: "사운드", en: "Sound" },
  soundDesc: { ko: "드릴 피드백 오디오", en: "Drill feedback audio" },
  languageTitle: { ko: "언어", en: "Language" },
  languageDesc: { ko: "한국어 또는 영어", en: "Korean or English" },
  resetProgressTitle: { ko: "진행 초기화", en: "Reset progress" },
  // {brand} placeholder filled at call site
  resetProgressDesc: { ko: "{brand} XP, 연속 정답, 해결 기록 삭제", en: "Clear {brand} XP, streak, and clears" },
  dark: { ko: "다크", en: "Dark" },
  light: { ko: "라이트", en: "Light" },
  on: { ko: "켜짐", en: "On" },
  off: { ko: "꺼짐", en: "Off" },

  // achievement states
  unlocked: { ko: "달성", en: "Unlocked" },
  locked: { ko: "미달성", en: "Locked" },

  // achievement display names
  achFirstClear: { ko: "첫 클리어", en: "First clear" },
  achEightClears: { ko: "연습벌레", en: "Eight clears" },
  achAllTracksStarted: { ko: "전 트랙 입문", en: "All tracks started" },
  achStreakFive: { ko: "몰입 상태", en: "Five streak" },
  achHighAccuracy: { ko: "예리한 눈", en: "Sharp eye" },
  achFullMastery: { ko: "완전 정복", en: "Full mastery" },

  // achievement descriptions
  achFirstClearDesc: { ko: "첫 드릴을 클리어하세요.", en: "Clear your first drill." },
  achEightClearsDesc: { ko: "드릴 8개를 클리어하세요.", en: "Clear eight drills." },
  achAllTracksStartedDesc: { ko: "모든 트랙에서 최소 1개 클리어하세요.", en: "Land at least one clear in every track." },
  achStreakFiveDesc: { ko: "5연속 정답을 달성하세요.", en: "Reach a five-answer streak." },
  achHighAccuracyDesc: { ko: "10회 이상에서 85%+ 정확도를 유지하세요.", en: "Hold 85%+ accuracy across 10+ attempts." },
  achFullMasteryDesc: { ko: "도메인의 모든 드릴을 완료하세요.", en: "Complete every drill in the domain." },

  // manual shell (2026-09 redesign)
  manualTitle: { ko: "MasteryDojo 매뉴얼", en: "MasteryDojo Manual" },
  index: { ko: "목차", en: "Index" },
  openIndex: { ko: "목차 열기", en: "Open index" },
  closeIndex: { ko: "목차 닫기", en: "Close index" },
  sectionDescription: { ko: "설명", en: "Description" },
  sectionTracks: { ko: "트랙", en: "Tracks" },
  sectionManuals: { ko: "매뉴얼", en: "Manuals" },
  sectionSeeAlso: { ko: "참고", en: "See also" },
  continueLabel: { ko: "이어하기", en: "Continue" },
  startLabel: { ko: "시작하기", en: "Start" },
  modeSuffix: { ko: "모드", en: "mode" },
  drill: { ko: "드릴", en: "Drill" },
  keyHints: { ko: "1–4 선택 · Enter 확인 · H 힌트", en: "1–4 choose · Enter check · H hint" },
  keyHintsInput: { ko: "입력 후 Enter 확인 · H 힌트", en: "Type, then Enter to check · H hint" },
  keyHintsSolved: { ko: "Enter 다음 드릴", en: "Enter next drill" },
  emptyAnswer: {
    ko: "먼저 답을 고르거나 입력하세요. 기록에는 남지 않았습니다.",
    en: "Pick or type an answer first. Nothing was recorded."
  },
  feedbackCorrect: { ko: "정답", en: "Correct" },
  feedbackMiss: { ko: "오답", en: "Not yet" },
  feedbackEmpty: { ko: "빈 답", en: "Empty" },
  sourceCode: { ko: "소스 코드 (GitHub)", en: "Source code (GitHub)" },
  kanaCredit: { ko: "KanaDojo (영감 · 효과음 출처)", en: "KanaDojo (inspiration and click sounds)" },
  emptyProgressTitle: { ko: "아직 기록이 없습니다", en: "No attempts yet" },
  emptyProgressBody: {
    ko: "첫 드릴을 풀면 XP, 정확도, 트랙별 진도가 여기에 쌓입니다.",
    en: "Answer your first drill and XP, accuracy, and per-track progress collect here."
  },
  startTraining: { ko: "훈련 시작", en: "Start training" },
  resetConfirm: {
    ko: "이 도메인의 진행 기록을 모두 지울까요? 되돌릴 수 없습니다.",
    en: "Clear all progress for this domain? This cannot be undone."
  },
  cancel: { ko: "취소", en: "Cancel" },
  confirmReset: { ko: "모두 지우기", en: "Clear everything" },
  drillsDone: { ko: "완료", en: "done" },
  figureAlt: {
    ko: "펼쳐진 기술 매뉴얼 위로 네 단계 계단이 이어지는 잉크 선화",
    en: "Ink line drawing of an open technical manual with a four-step staircase rising from its pages"
  },
  emptyFigureAlt: {
    ko: "빈 연습장과 연필이 놓인 잉크 선화",
    en: "Ink line drawing of an empty practice notebook with a pencil"
  }
} as const satisfies Record<string, { ko: string; en: string }>;

export function t(key: UiStringKey, lang: Language): string {
  return uiStrings[key][lang];
}
