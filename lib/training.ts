import { activeDomain, type DrillMode, type LearningDomain, type LearningDrill, type TrackId } from "@/data/dojoDomain";

export type ProgressSnapshot = {
  attempts: number;
  correct: number;
  xp: number;
  streak: number;
  bestStreak: number;
  completedIds: string[];
  misses: Record<string, number>;
};

export type TrackSummary = {
  total: number;
  completed: number;
  percent: number;
};

export const emptyProgress: ProgressSnapshot = {
  attempts: 0,
  correct: 0,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  completedIds: [],
  misses: {}
};

export function normalizeAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ").replace(/^['"]|['"]$/g, "");
}

export function evaluateAnswer(drill: LearningDrill, value: string): boolean {
  const expected = [drill.answer, ...(drill.acceptedAnswers ?? [])];
  const normalized = normalizeAnswer(value);
  return expected.some((answer) => normalizeAnswer(answer) === normalized);
}

export function getTrackDrills(trackId: TrackId, mode?: DrillMode, domain: LearningDomain = activeDomain): LearningDrill[] {
  return domain.drills.filter((drill) => drill.trackId === trackId && (!mode || drill.mode === mode));
}

export function getTrackSummary(
  trackId: TrackId,
  progress: ProgressSnapshot,
  domain: LearningDomain = activeDomain
): TrackSummary {
  const trackDrills = getTrackDrills(trackId, undefined, domain);
  const completed = trackDrills.filter((drill) => progress.completedIds.includes(drill.id)).length;
  return {
    total: trackDrills.length,
    completed,
    percent: trackDrills.length === 0 ? 0 : Math.round((completed / trackDrills.length) * 100)
  };
}

export function getAccuracy(progress: ProgressSnapshot): number {
  if (progress.attempts === 0) {
    return 0;
  }

  return Math.round((progress.correct / progress.attempts) * 100);
}

export function recordAttempt(progress: ProgressSnapshot, drill: LearningDrill, isCorrect: boolean): ProgressSnapshot {
  const completedIds = isCorrect ? Array.from(new Set([...progress.completedIds, drill.id])) : progress.completedIds;
  const missCount = progress.misses[drill.id] ?? 0;
  const streak = isCorrect ? progress.streak + 1 : 0;

  return {
    attempts: progress.attempts + 1,
    correct: progress.correct + (isCorrect ? 1 : 0),
    xp: progress.xp + (isCorrect ? drill.level * 10 : 2),
    streak,
    bestStreak: Math.max(progress.bestStreak, streak),
    completedIds,
    misses: {
      ...progress.misses,
      [drill.id]: isCorrect ? missCount : missCount + 1
    }
  };
}

export function getNextDrill(
  trackId: TrackId,
  mode: DrillMode,
  progress: ProgressSnapshot,
  domain: LearningDomain = activeDomain
): LearningDrill {
  const available = getTrackDrills(trackId, mode, domain);
  if (available.length === 0) {
    throw new Error(`No drills found for track "${trackId}" and mode "${mode}".`);
  }

  const unseen = available.find((drill) => !progress.completedIds.includes(drill.id));
  return unseen ?? available[progress.attempts % available.length];
}

export function getUnlockedAchievements(progress: ProgressSnapshot, domain: LearningDomain = activeDomain): string[] {
  const unlocked: string[] = [];

  if (progress.completedIds.length >= 1) unlocked.push(domain.achievements.firstClear);
  if (progress.completedIds.length >= 8) unlocked.push(domain.achievements.eightClears);
  if (domain.tracks.every((track) => getTrackSummary(track.id, progress, domain).completed > 0)) {
    unlocked.push(domain.achievements.allTracksStarted);
  }
  if (progress.bestStreak >= 5) unlocked.push(domain.achievements.streakFive);
  if (getAccuracy(progress) >= 85 && progress.attempts >= 10) unlocked.push(domain.achievements.highAccuracy);
  if (progress.completedIds.length === domain.drills.length) unlocked.push(domain.achievements.fullMastery);

  return unlocked;
}
