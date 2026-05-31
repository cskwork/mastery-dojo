import { describe, expect, it } from "vitest";
import { learningDomains } from "@/data/dojoDomain";
import { drills } from "@/data/pythonCurriculum";
import {
  emptyProgress,
  evaluateAnswer,
  getAccuracy,
  getNextDrill,
  getTrackSummary,
  getUnlockedAchievements,
  recordAttempt
} from "@/lib/training";

describe("training logic", () => {
  it("accepts normalized answer variants", () => {
    const drill = drills.find((item) => item.id === "design-default-arg");

    expect(drill).toBeDefined();
    expect(evaluateAnswer(drill!, "'Hi Mina'")).toBe(true);
    expect(evaluateAnswer(drill!, "Mina")).toBe(false);
  });

  it("records correct attempts as completed progress", () => {
    const drill = drills[0];
    const progress = recordAttempt(emptyProgress, drill, true);

    expect(progress.correct).toBe(1);
    expect(progress.completedIds).toContain(drill.id);
    expect(progress.streak).toBe(1);
    expect(getAccuracy(progress)).toBe(100);
  });

  it("keeps missed drills incomplete and resets streak", () => {
    const drill = drills[1];
    const progress = recordAttempt({ ...emptyProgress, streak: 3, bestStreak: 3 }, drill, false);

    expect(progress.correct).toBe(0);
    expect(progress.completedIds).not.toContain(drill.id);
    expect(progress.streak).toBe(0);
    expect(progress.misses[drill.id]).toBe(1);
  });

  it("selects the next unseen drill for a track and mode", () => {
    const first = getNextDrill("foundations", "pick", emptyProgress);
    const progress = recordAttempt(emptyProgress, first, true);
    const second = getNextDrill("foundations", "pick", progress);

    expect(second.id).not.toBe(first.id);
    expect(second.trackId).toBe("foundations");
    expect(second.mode).toBe("pick");
  });

  it("unlocks achievements from real progress thresholds", () => {
    const progress = drills.slice(0, 10).reduce((state, drill) => recordAttempt(state, drill, true), emptyProgress);

    expect(getTrackSummary("foundations", progress).percent).toBe(100);
    expect(getUnlockedAchievements(progress)).toContain("first-clear");
    expect(getUnlockedAchievements(progress)).toContain("syntax-runner");
    expect(getUnlockedAchievements(progress)).toContain("sharp-eye");
  });

  it("keeps each learning domain independently trainable", () => {
    const storageKeys = new Set(learningDomains.map((domain) => domain.storageKey));

    expect(learningDomains.map((domain) => domain.id)).toEqual(["python", "postgresql", "redis-streams"]);
    expect(storageKeys.size).toBe(learningDomains.length);

    for (const domain of learningDomains) {
      for (const track of domain.tracks) {
        for (const mode of ["pick", "reverse", "input", "debug"] as const) {
          const drill = getNextDrill(track.id, mode, emptyProgress, domain);

          expect(drill.trackId).toBe(track.id);
          expect(drill.mode).toBe(mode);
        }
      }
    }
  });
});
