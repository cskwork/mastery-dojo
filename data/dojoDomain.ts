import { pythonDomain } from "@/domains/python";
import { postgresqlDomain } from "@/domains/postgresql";
import { redisStreamsDomain } from "@/domains/redisStreams";
import type { LearningDomain as LearningDomainConfig, TrackId } from "@/data/dojoTypes";

export type {
  DojoCardConfig,
  DrillMode,
  LearningDomain,
  LearningDrill,
  LearningTrack,
  TrackId
} from "@/data/dojoTypes";

export const learningDomains = [pythonDomain, postgresqlDomain, redisStreamsDomain] satisfies LearningDomainConfig[];

export const defaultDomain: LearningDomainConfig = pythonDomain;

export const activeDomain: LearningDomainConfig = defaultDomain;

export function getDomainById(domainId: string): LearningDomainConfig {
  return learningDomains.find((domain) => domain.id === domainId) ?? defaultDomain;
}

export function fillDomainTemplate(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, String(value)), template);
}

export function getTrackMark(domain: LearningDomainConfig, trackId: TrackId): string {
  return domain.trackMarks[trackId] ?? trackId.slice(0, 2).toLowerCase();
}
