export type TrackId = string;

export type DrillMode = "pick" | "reverse" | "input" | "debug";

export type LearningTrack = {
  id: TrackId;
  title: string;
  level: string;
  focus: string;
  accent: string;
};

export type LearningDrill = {
  id: string;
  trackId: TrackId;
  mode: DrillMode;
  level: number;
  concept: string;
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  choices: string[];
  code?: string;
  hint: string;
  explanation: string;
};

export type DojoCardConfig = {
  id: TrackId;
  mark: string;
  label: string;
  summary: string;
};

export type LearningDomain = {
  id: string;
  metadata: {
    title: string;
    description: string;
    iconPath: string;
  };
  brand: {
    primaryName: string;
    secondaryName: string;
    displayName: string;
  };
  subject: {
    name: string;
    adjective: string;
  };
  storageKey: string;
  tokenPool: string[];
  trackMarks: Record<string, string>;
  home: {
    ariaLabel: string;
    floatingActionLabel: string;
    welcomeTitle: string;
    welcomeBody: string;
    startTemplate: string;
    cards: DojoCardConfig[];
  };
  training: {
    sidebarLabel: string;
    modeLabel: string;
    welcomeTitleTemplate: string;
    welcomeBodyTemplate: string;
    progressLabel: string;
    actions: {
      home: string;
      hint: string;
      check: string;
      next: string;
    };
  };
  footer: {
    links: Array<{ href: string; label: string }>;
    communityAria: string;
    sourceAria: string;
    meta: string;
  };
  achievements: {
    firstClear: string;
    eightClears: string;
    allTracksStarted: string;
    streakFive: string;
    highAccuracy: string;
    fullMastery: string;
  };
  tracks: LearningTrack[];
  drills: LearningDrill[];
};
