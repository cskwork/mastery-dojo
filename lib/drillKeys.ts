import type { DrillMode } from "@/data/dojoTypes";

// Keyboard map for the drill screen, in the spirit of `less`:
// 1-9 choose an option, Enter checks or advances, H reveals the hint.
export type DrillKeyAction =
  | { type: "choose"; index: number }
  | { type: "check" }
  | { type: "next" }
  | { type: "hint" }
  | null;

export type DrillKeyContext = {
  mode: DrillMode;
  choiceCount: number;
  solved: boolean;
  // True when focus is inside a text field; typed characters belong to the field.
  typing: boolean;
};

export function resolveDrillKey(key: string, context: DrillKeyContext): DrillKeyAction {
  if (key === "Enter") {
    // Inside the answer field the form's own submit handles Enter.
    if (context.typing) return null;
    return context.solved ? { type: "next" } : { type: "check" };
  }

  if (context.typing) return null;

  if (key === "h" || key === "H") return context.solved ? null : { type: "hint" };

  if (context.mode !== "input" && !context.solved && /^[1-9]$/.test(key)) {
    const index = Number(key) - 1;
    return index < context.choiceCount ? { type: "choose", index } : null;
  }

  return null;
}
