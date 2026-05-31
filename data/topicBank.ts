import type { TrackId } from "@/data/dojoTypes";
import type { CurriculumTopic } from "@/data/curriculumFactory";

export type TopicSeed = readonly [concept: string, answer: string, hint: string, code?: string];

function slug(value: string): string {
  const normalized = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return normalized || "topic";
}

export function defineTopics(trackId: TrackId, seeds: readonly TopicSeed[]): CurriculumTopic[] {
  return seeds.map(([concept, answer, hint, code], index) => ({
    id: `${trackId}-${slug(concept)}-${index + 1}`,
    trackId,
    level: Math.min(5, 1 + Math.floor(index / 4)),
    concept,
    answer,
    hint,
    explanation: `${answer} is the key move for ${concept}. ${hint}`,
    code
  }));
}

export function conceptsForTrack(topics: readonly CurriculumTopic[], trackId: TrackId): string[] {
  return topics.filter((topic) => topic.trackId === trackId).map((topic) => topic.concept);
}
