import type { LearningDrill, TrackId } from "@/data/dojoTypes";

export type CurriculumTopic = {
  id: string;
  trackId: TrackId;
  level: number;
  concept: string;
  answer: string;
  hint: string;
  explanation: string;
  code?: string;
};

function compactAcceptedAnswer(answer: string): string[] {
  const normalized = answer.toLowerCase();
  const words = normalized.split(/\s+/).filter(Boolean);
  return Array.from(new Set([normalized, words.slice(0, 3).join(" "), words.at(0) ?? normalized].filter(Boolean)));
}

function choicesFor(answer: string, pool: string[]): string[] {
  const choices = [answer, ...pool.filter((item) => item !== answer)].slice(0, 4);

  while (choices.length < 4) {
    choices.push(["Not the right tool", "A syntax-only detail", "A runtime guess", "An unrelated command"][choices.length]);
  }

  return choices;
}

export function buildCurriculumDrills(prefix: string, topics: CurriculumTopic[]): LearningDrill[] {
  return topics.flatMap((topic, index) => {
    const trackTopics = topics.filter((item) => item.trackId === topic.trackId);
    const answerPool = trackTopics.map((item) => item.answer);
    const conceptPool = trackTopics.map((item) => item.concept);

    return [
      {
        id: `${prefix}-${topic.id}-pick`,
        trackId: topic.trackId,
        mode: "pick",
        level: topic.level,
        concept: topic.concept,
        prompt: `Choose the best answer for ${topic.concept}.`,
        answer: topic.answer,
        acceptedAnswers: compactAcceptedAnswer(topic.answer),
        choices: choicesFor(topic.answer, answerPool.slice(index + 1).concat(answerPool.slice(0, index))),
        code: topic.code,
        hint: topic.hint,
        explanation: topic.explanation
      },
      {
        id: `${prefix}-${topic.id}-reverse`,
        trackId: topic.trackId,
        mode: "reverse",
        level: topic.level,
        concept: topic.concept,
        prompt: `Which concept does this describe? ${topic.hint}`,
        answer: topic.concept,
        acceptedAnswers: compactAcceptedAnswer(topic.concept),
        choices: choicesFor(topic.concept, conceptPool.slice(index + 1).concat(conceptPool.slice(0, index))),
        hint: topic.explanation,
        explanation: `${topic.concept}: ${topic.explanation}`
      },
      {
        id: `${prefix}-${topic.id}-input`,
        trackId: topic.trackId,
        mode: "input",
        level: topic.level,
        concept: topic.concept,
        prompt: `Type the key answer for ${topic.concept}.`,
        answer: topic.answer,
        acceptedAnswers: compactAcceptedAnswer(topic.answer),
        choices: choicesFor(topic.answer, answerPool.slice(index + 2).concat(answerPool.slice(0, index + 1))),
        code: topic.code,
        hint: topic.hint,
        explanation: topic.explanation
      },
      {
        id: `${prefix}-${topic.id}-debug`,
        trackId: topic.trackId,
        mode: "debug",
        level: topic.level,
        concept: topic.concept,
        prompt: `What is the safest move in this ${topic.concept} scenario?`,
        answer: topic.answer,
        acceptedAnswers: compactAcceptedAnswer(topic.answer),
        choices: choicesFor(topic.answer, answerPool.slice(index + 3).concat(answerPool.slice(0, index + 2))),
        code: topic.code ?? `${topic.concept}\n${topic.hint}`,
        hint: "Name the practice or tool that addresses the situation.",
        explanation: topic.explanation
      }
    ];
  });
}
