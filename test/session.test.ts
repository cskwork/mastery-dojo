import { describe, expect, it } from "vitest";
import { learningDomains } from "@/data/dojoDomain";
import { parseSession, serializeSession } from "@/lib/session";
import { resolveDrillKey } from "@/lib/drillKeys";
import { emptyProgress, isBlankAnswer } from "@/lib/training";

describe("session resume", () => {
  it("round-trips a valid session", () => {
    const domain = learningDomains[1];
    const session = { domainId: domain.id, trackId: domain.tracks[2].id, mode: "debug" as const };
    expect(parseSession(serializeSession(session), learningDomains)).toEqual(session);
  });

  it("rejects missing, malformed, or unknown-domain data", () => {
    expect(parseSession(null, learningDomains)).toBeNull();
    expect(parseSession("{not json", learningDomains)).toBeNull();
    expect(parseSession("42", learningDomains)).toBeNull();
    expect(parseSession(JSON.stringify({ domainId: "cobol", trackId: "x", mode: "pick" }), learningDomains)).toBeNull();
  });

  it("falls back to the first track and pick mode when stored values went stale", () => {
    const domain = learningDomains[0];
    const parsed = parseSession(JSON.stringify({ domainId: domain.id, trackId: "gone", mode: "speedrun" }), learningDomains);
    expect(parsed).toEqual({ domainId: domain.id, trackId: domain.tracks[0].id, mode: "pick" });
  });
});

describe("drill keyboard map", () => {
  const base = { mode: "pick" as const, choiceCount: 4, solved: false, typing: false };

  it("maps number keys to choices within range", () => {
    expect(resolveDrillKey("1", base)).toEqual({ type: "choose", index: 0 });
    expect(resolveDrillKey("4", base)).toEqual({ type: "choose", index: 3 });
    expect(resolveDrillKey("5", base)).toBeNull();
  });

  it("uses Enter to check before solving and to advance after", () => {
    expect(resolveDrillKey("Enter", base)).toEqual({ type: "check" });
    expect(resolveDrillKey("Enter", { ...base, solved: true })).toEqual({ type: "next" });
  });

  it("leaves keys to the text field while typing", () => {
    const typing = { ...base, mode: "input" as const, typing: true };
    expect(resolveDrillKey("1", typing)).toBeNull();
    expect(resolveDrillKey("h", typing)).toBeNull();
    expect(resolveDrillKey("Enter", typing)).toBeNull();
  });

  it("ignores number keys in input mode and after solving", () => {
    expect(resolveDrillKey("2", { ...base, mode: "input" })).toBeNull();
    expect(resolveDrillKey("2", { ...base, solved: true })).toBeNull();
    expect(resolveDrillKey("h", base)).toEqual({ type: "hint" });
    expect(resolveDrillKey("H", { ...base, solved: true })).toBeNull();
  });
});

describe("blank answers", () => {
  it("treats whitespace and bare quotes as blank so they never count as attempts", () => {
    expect(isBlankAnswer("")).toBe(true);
    expect(isBlankAnswer("   ")).toBe(true);
    expect(isBlankAnswer("''")).toBe(true);
    expect(isBlankAnswer("0")).toBe(false);
    expect(emptyProgress.attempts).toBe(0);
  });
});
