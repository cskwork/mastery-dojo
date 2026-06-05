import { describe, expect, it } from "vitest";
import { learningDomains } from "@/data/dojoDomain";
import { localizeDomain } from "@/lib/localize";

// Guards Korean translation completeness at the per-drill level. Code tokens,
// commands, SQL keywords, and official product names stay language-neutral inside
// otherwise-Korean prose, so the invariant is: every localized prompt / hint /
// explanation must contain at least one Hangul syllable. A fully-English field
// (a real regression / missing overlay) would have none.
const hasHangul = (value: string): boolean => /[가-힣]/.test(value);

describe("ko drill coverage", () => {
  for (const domain of learningDomains) {
    it(`${domain.id}: every drill prompt/hint/explanation is Korean`, () => {
      const ko = localizeDomain(domain, "ko");
      const english: string[] = [];

      for (const drill of ko.drills) {
        for (const field of ["prompt", "hint", "explanation"] as const) {
          if (!hasHangul(drill[field])) english.push(`${drill.id}.${field}: ${drill[field]}`);
        }
      }

      expect(english, english.slice(0, 5).join("\n")).toHaveLength(0);
    });
  }
});
