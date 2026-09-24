import type { DrillMode, LearningDomain, TrackId } from "@/data/dojoTypes";

// Where the learner left off. Stored once for the whole app (not per domain) so
// reopening the site lands on the last domain, track, and drill mode.
export const SESSION_STORAGE_KEY = "dojo-session-v1";

export type DojoSession = {
  domainId: string;
  trackId: TrackId;
  mode: DrillMode;
};

const DRILL_MODES: DrillMode[] = ["pick", "reverse", "input", "debug"];

export function isDrillMode(value: unknown): value is DrillMode {
  return typeof value === "string" && (DRILL_MODES as string[]).includes(value);
}

// Parses a stored session and drops anything that no longer matches a registered
// domain or track, so renamed curricula fall back to defaults instead of crashing.
export function parseSession(raw: string | null, domains: LearningDomain[]): DojoSession | null {
  if (!raw) return null;

  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!value || typeof value !== "object") return null;
  const { domainId, trackId, mode } = value as Record<string, unknown>;
  const domain = domains.find((item) => item.id === domainId);
  if (!domain) return null;

  const track = domain.tracks.find((item) => item.id === trackId) ?? domain.tracks[0];
  if (!track) return null;

  return { domainId: domain.id, trackId: track.id, mode: isDrillMode(mode) ? mode : "pick" };
}

export function serializeSession(session: DojoSession): string {
  return JSON.stringify(session);
}
