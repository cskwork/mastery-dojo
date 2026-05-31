import { RotateCcw, Sparkles, Terminal } from "lucide-react";
import { activeDomain } from "@/data/dojoDomain";
import { getAccuracy, type ProgressSnapshot } from "@/lib/training";

type HeaderProps = {
  progress: ProgressSnapshot;
  onReset: () => void;
};

export function Header({ progress, onReset }: HeaderProps) {
  return (
    <header className="dojo-header">
      <div className="brand-lockup">
        <img src={activeDomain.metadata.iconPath} alt="" className="brand-mark" />
        <div>
          <p className="eyebrow">{activeDomain.brand.displayName}</p>
          <h1>{activeDomain.tracks[0]?.title ?? activeDomain.subject.name}</h1>
        </div>
      </div>
      <div className="header-stats" aria-label="Practice stats">
        <span>
          <Sparkles size={16} aria-hidden="true" /> {progress.xp} XP
        </span>
        <span>
          <Terminal size={16} aria-hidden="true" /> {getAccuracy(progress)}%
        </span>
        <button className="icon-command" type="button" onClick={onReset}>
          <RotateCcw size={16} aria-hidden="true" /> Reset
        </button>
      </div>
    </header>
  );
}
