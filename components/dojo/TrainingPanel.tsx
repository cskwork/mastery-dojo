import { Check, ChevronRight, Lightbulb, X } from "lucide-react";
import type { LearningDrill } from "@/data/dojoDomain";

type TrainingPanelProps = {
  drill: LearningDrill;
  result: "idle" | "correct" | "miss";
  answer: string;
  onAnswer: (value: string) => void;
  onSubmit: (value: string) => void;
};

export function TrainingPanel({ drill, result, answer, onAnswer, onSubmit }: TrainingPanelProps) {
  const feedback = result === "correct" ? drill.explanation : result === "miss" ? drill.hint : drill.concept;

  return (
    <section className="training-panel">
      <div className="training-topline">
        <span>Level {drill.level}</span>
        <span>{drill.mode}</span>
      </div>
      <div>
        <p className="eyebrow">{drill.concept}</p>
        <h2>{drill.prompt}</h2>
      </div>
      {drill.code ? <pre className="code-window">{drill.code}</pre> : <div className="concept-window">{drill.answer}</div>}
      <div className="choice-grid">
        {drill.choices.map((choice) => (
          <button className="choice-button" key={choice} type="button" onClick={() => onSubmit(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <form
        className="answer-row"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(answer);
        }}
      >
        <input value={answer} onChange={(event) => onAnswer(event.target.value)} placeholder="Type answer" />
        <button className="primary-command" type="submit">
          <ChevronRight size={18} aria-hidden="true" /> Check
        </button>
      </form>
      <div className={`feedback-strip ${result}`}>
        {result === "correct" && <Check size={18} aria-hidden="true" />}
        {result === "miss" && <X size={18} aria-hidden="true" />}
        {result === "idle" && <Lightbulb size={18} aria-hidden="true" />}
        <span>{feedback}</span>
      </div>
    </section>
  );
}
