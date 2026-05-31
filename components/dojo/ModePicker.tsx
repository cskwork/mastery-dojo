import { Bug, CheckSquare, Keyboard, Repeat2 } from "lucide-react";
import type { DrillMode } from "@/data/dojoDomain";

const modes: { id: DrillMode; label: string; icon: React.ReactNode }[] = [
  { id: "pick", label: "Pick", icon: <CheckSquare size={18} aria-hidden="true" /> },
  { id: "reverse", label: "Reverse", icon: <Repeat2 size={18} aria-hidden="true" /> },
  { id: "input", label: "Input", icon: <Keyboard size={18} aria-hidden="true" /> },
  { id: "debug", label: "Debug", icon: <Bug size={18} aria-hidden="true" /> }
];

type ModePickerProps = {
  activeMode: DrillMode;
  onModeChange: (mode: DrillMode) => void;
};

export function ModePicker({ activeMode, onModeChange }: ModePickerProps) {
  return (
    <section className="dojo-panel">
      <div className="panel-heading">
        <p className="eyebrow">Modes</p>
        <h2>Training Style</h2>
      </div>
      <div className="mode-grid">
        {modes.map((mode) => (
          <button
            className={mode.id === activeMode ? "mode-button active" : "mode-button"}
            key={mode.id}
            type="button"
            onClick={() => onModeChange(mode.id)}
          >
            {mode.icon}
            {mode.label}
          </button>
        ))}
      </div>
    </section>
  );
}
