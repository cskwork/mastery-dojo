import type { CurriculumTopic } from "@/data/curriculumFactory";
import type { DomainTextKo, DrillTextKo } from "@/data/i18n/types";

// Korean prose for one curriculum topic: [conceptKo, answerKo, hintKo?].
// answer/code stay language-neutral; conceptKo/answerKo/hintKo are the Korean prose.
// hintKo is optional so a topic without a translated hint still compiles and falls
// back to the canonical English hint (surfaced as the trailing `// hint:` comment).
export type TopicKo = readonly [conceptKo: string, answerKo: string, hintKo?: string];

// Chrome (non-drill) Korean copy for a factory-generated domain.
export type FactoryChromeKo = Omit<DomainTextKo, "drills">;

const DEBUG_HINT_KO = "상황을 해결하는 방법이나 도구를 명시하시오.";

// buildCurriculumDrills emits 4 drills per topic with ids `${prefix}-${topic.id}-${mode}`.
// This mirrors that id scheme exactly so every generated drill has a matching overlay
// entry. Every emitted string is Korean: the explanation is composed from the same
// three Korean tokens (conceptKo/answerKo/hintKo) that the English curriculum derives
// its explanation from (`${answer} is the key move for ${concept}. ${hint}`), and the
// reverse drill mirrors the canonical English shape (hint as the clue) in Korean.
function drillsForTopic(prefix: string, topic: CurriculumTopic, ko: TopicKo | undefined): Record<string, DrillTextKo> {
  const conceptKo = ko?.[0] ?? topic.concept;
  const answerKo = ko?.[1] ?? topic.answer;
  const hintKo = ko?.[2] ?? topic.hint;
  const base = `${prefix}-${topic.id}`;
  // Mirrors the English `${answer} is the key move for ${concept}. ${hint}`.
  // The em-dash note form stays natural whether answerKo is a noun or a verb phrase
  // (avoids an awkward `…입니다` copula on verb-phrase answers).
  const coreExplanation = `${conceptKo}의 핵심 — ${answerKo}. ${hintKo}`;

  return {
    [`${base}-pick`]: {
      concept: conceptKo,
      prompt: `${conceptKo}에 대한 최선의 답을 고르시오.`,
      hint: hintKo,
      explanation: coreExplanation
    },
    [`${base}-reverse`]: {
      concept: conceptKo,
      prompt: `다음 설명이 가리키는 개념은? ${hintKo}`,
      hint: coreExplanation,
      explanation: coreExplanation
    },
    [`${base}-input`]: {
      concept: conceptKo,
      prompt: `${conceptKo}의 핵심 답을 입력하시오.`,
      hint: hintKo,
      explanation: coreExplanation
    },
    [`${base}-debug`]: {
      concept: conceptKo,
      prompt: `이 ${conceptKo} 시나리오에서 가장 안전한 조치는?`,
      hint: DEBUG_HINT_KO,
      explanation: coreExplanation
    }
  };
}

// Assembles a full Korean overlay for a factory domain from its canonical topics,
// translated chrome, and per-topic Korean keyed by the English concept.
// baseDrills lets hybrid domains (python, postgres, redis) supply hand-written
// overlay entries for their non-factory drills.
export function buildFactoryOverlay(input: {
  prefix: string;
  topics: readonly CurriculumTopic[];
  chrome: FactoryChromeKo;
  topicsKo: Record<string, TopicKo>;
  baseDrills?: Record<string, DrillTextKo>;
}): DomainTextKo {
  const drills: Record<string, DrillTextKo> = { ...(input.baseDrills ?? {}) };

  for (const topic of input.topics) {
    Object.assign(drills, drillsForTopic(input.prefix, topic, input.topicsKo[topic.concept]));
  }

  return { ...input.chrome, drills };
}
