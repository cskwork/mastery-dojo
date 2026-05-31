// Korean overlay shapes. The English data in domains/*.ts and data/*Curriculum.ts
// stays canonical; these provide the Korean prose merged in by lib/localize.ts.
// Code tokens (answer, choices, code, acceptedAnswers) are language-neutral and
// are never part of the overlay.

export type DrillTextKo = {
  concept?: string;
  prompt: string;
  hint: string;
  explanation: string;
};

export type TrackTextKo = {
  title: string;
  focus: string;
  level?: string; // optional override; otherwise mapped from the English level
};

export type CardTextKo = {
  label: string;
  summary: string;
};

export type DomainTextKo = {
  metadata?: { title?: string; description?: string };
  welcomeTitle: string;
  welcomeBody: string;
  subjectName?: string; // Korean subject label used in welcome templates
  footerMeta?: string;
  floatingActionLabel?: string;
  cards: Record<string, CardTextKo>; // keyed by card/track id
  tracks: Record<string, TrackTextKo>; // keyed by track id
  drills: Record<string, DrillTextKo>; // keyed by drill id
};
