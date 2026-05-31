import type { DojoCardConfig, LearningDomain, LearningDrill, LearningTrack } from "@/data/dojoTypes";

type DomainFactoryInput = {
  id: string;
  title: string;
  description: string;
  primaryName: string;
  secondaryName: string;
  displayName?: string;
  subjectName: string;
  subjectAdjective?: string;
  storageKey: string;
  tokenPool: string[];
  trackMarks: Record<string, string>;
  cards: DojoCardConfig[];
  tracks: LearningTrack[];
  drills: LearningDrill[];
  footerMeta: string;
  floatingActionLabel?: string;
};

export function createLearningDomain(input: DomainFactoryInput): LearningDomain {
  return {
    id: input.id,
    metadata: {
      title: input.title,
      description: input.description,
      iconPath: "/dojo-mark.svg"
    },
    brand: {
      primaryName: input.primaryName,
      secondaryName: input.secondaryName,
      displayName: input.displayName ?? input.primaryName
    },
    subject: {
      name: input.subjectName,
      adjective: input.subjectAdjective ?? input.subjectName
    },
    storageKey: input.storageKey,
    tokenPool: input.tokenPool,
    trackMarks: input.trackMarks,
    home: {
      ariaLabel: `${input.primaryName} home`,
      floatingActionLabel: input.floatingActionLabel ?? `Start ${input.subjectName} training`,
      welcomeTitle: `Welcome to ${input.primaryName}!`,
      welcomeBody: `${input.primaryName} turns ${input.subjectName} into focused drills from beginner foundations to expertise.`,
      startTemplate: "To begin, pick a dojo below and start training {trackLabel} now!",
      cards: input.cards
    },
    training: {
      sidebarLabel: `${input.primaryName} navigation`,
      modeLabel: "Training mode",
      welcomeTitleTemplate: "Welcome to the {trackTitle} dojo!",
      welcomeBodyTemplate: "{trackFocus}. Train with short {subjectName} drills from beginner practice to expertise.",
      progressLabel: "Progress summary",
      actions: {
        home: "Home",
        hint: "Hint",
        check: "Check answer",
        next: "Next drill"
      }
    },
    footer: {
      links: [
        { href: "#terms", label: "terms" },
        { href: "#privacy", label: "privacy" },
        { href: "#credits", label: "credits" },
        { href: "#about", label: "about" }
      ],
      communityAria: "Community",
      sourceAria: "Source",
      meta: input.footerMeta
    },
    achievements: {
      firstClear: `${input.id}-first-clear`,
      eightClears: `${input.id}-runner`,
      allTracksStarted: `${input.id}-path`,
      streakFive: `${input.id}-flow`,
      highAccuracy: `${input.id}-sharp-eye`,
      fullMastery: `${input.id}-mastery`
    },
    tracks: input.tracks,
    drills: input.drills
  };
}
