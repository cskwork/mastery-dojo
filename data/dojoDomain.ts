import { pythonDomain } from "@/domains/python";
import { postgresqlDomain } from "@/domains/postgresql";
import { redisStreamsDomain } from "@/domains/redisStreams";
import { springBootDomain } from "@/domains/springBoot";
import { javaDomain } from "@/domains/java";
import { sqldDomain } from "@/domains/sqld";
import { informationProcessingPracticalDomain } from "@/domains/informationProcessingPractical";
import { linuxDomain } from "@/domains/linux";
import { kafkaDomain } from "@/domains/kafka";
import { sparkDomain } from "@/domains/spark";
import { flinkDomain } from "@/domains/flink";
import { dsaDomain } from "@/domains/dsa";
import type { LearningDomain as LearningDomainConfig, TrackId } from "@/data/dojoTypes";

export type {
  DojoCardConfig,
  DrillMode,
  LearningDomain,
  LearningDrill,
  LearningTrack,
  TrackId
} from "@/data/dojoTypes";

export const learningDomains = [
  pythonDomain,
  postgresqlDomain,
  redisStreamsDomain,
  springBootDomain,
  javaDomain,
  sqldDomain,
  informationProcessingPracticalDomain,
  linuxDomain,
  kafkaDomain,
  sparkDomain,
  flinkDomain,
  dsaDomain
] satisfies LearningDomainConfig[];

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
