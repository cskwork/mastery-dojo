import type { CurriculumTopic } from "@/data/curriculumFactory";
import type { DomainTextKo, DrillTextKo } from "@/data/i18n/types";

// Korean prose for one curriculum topic: [conceptKo, answerKo].
// The English answer/hint/concept stay canonical and are read from the topic itself.
export type TopicKo = readonly [conceptKo: string, answerKo: string];

// Chrome (non-drill) Korean copy for a factory-generated domain.
export type FactoryChromeKo = Omit<DomainTextKo, "drills">;

const DEBUG_HINT_KO = "상황을 해결하는 방법이나 도구를 명시하시오.";

// buildCurriculumDrills emits 4 drills per topic with ids `${prefix}-${topic.id}-${mode}`.
// This mirrors that id scheme exactly so every generated drill has a matching overlay
// entry. Templates match the established LinuxDojo overlay; English answer/hint stay
// canonical inside explanations.
function drillsForTopic(prefix: string, topic: CurriculumTopic, ko: TopicKo | undefined): Record<string, DrillTextKo> {
  const conceptKo = ko?.[0] ?? topic.concept;
  const answerKo = ko?.[1] ?? topic.answer;
  const base = `${prefix}-${topic.id}`;
  const sharedExplanation = `${topic.answer} is the key move for ${topic.concept}. ${topic.hint}`;

  return {
    [`${base}-pick`]: {
      concept: conceptKo,
      prompt: `${conceptKo}에 대한 최선의 답을 고르시오.`,
      hint: answerKo,
      explanation: sharedExplanation
    },
    [`${base}-reverse`]: {
      concept: conceptKo,
      prompt: `다음 설명이 가리키는 개념은? ${topic.answer}`,
      hint: topic.hint,
      explanation: `${topic.concept}: ${topic.hint}`
    },
    [`${base}-input`]: {
      concept: conceptKo,
      prompt: `${conceptKo}의 핵심 답을 입력하시오.`,
      hint: answerKo,
      explanation: sharedExplanation
    },
    [`${base}-debug`]: {
      concept: conceptKo,
      prompt: `이 ${conceptKo} 시나리오에서 가장 안전한 조치는?`,
      hint: DEBUG_HINT_KO,
      explanation: sharedExplanation
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
