import { Flame, Trophy } from "lucide-react";
import type { LearningTrack } from "@/data/dojoDomain";
import { getAccuracy, getTrackSummary, getUnlockedAchievements, type ProgressSnapshot } from "@/lib/training";

type ProgressPreviewProps = {
  track: LearningTrack;
  progress: ProgressSnapshot;
};

export function ProgressPreview({ track, progress }: ProgressPreviewProps) {
  const summary = getTrackSummary(track.id, progress);
  const achievements = getUnlockedAchievements(progress);

  return (
    <section className="dojo-panel">
      <div className="panel-heading">
        <p className="eyebrow">Progress</p>
        <h2>{summary.completed}/{summary.total} clear</h2>
      </div>
      <div className="meter" aria-label={`${summary.percent}% complete`}>
        <span style={{ width: `${summary.percent}%` }} />
      </div>
      <div className="progress-pair">
        <span>
          <Flame size={17} aria-hidden="true" /> {progress.bestStreak} streak
        </span>
        <span>
          <Trophy size={17} aria-hidden="true" /> {achievements.length} badges
        </span>
      </div>
      <p className="progress-note">Accuracy {getAccuracy(progress)}% across {progress.attempts} attempts.</p>
    </section>
  );
}
