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
  achFullMasteryDesc: { ko: "도메인의 모든 드릴을 완료하세요.", en: "Complete every drill in the domain." }
} as const satisfies Record<string, { ko: string; en: string }>;

export function t(key: UiStringKey, lang: Language): string {
  return uiStrings[key][lang];
}
