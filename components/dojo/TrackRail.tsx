import { BookOpen, Lock, Play } from "lucide-react";
import { activeDomain } from "@/data/dojoDomain";
import type { LearningTrack, TrackId } from "@/data/dojoDomain";

type TrackRailProps = {
  tracks: LearningTrack[];
  activeTrackId: TrackId;
};

export function TrackRail({ tracks, activeTrackId }: TrackRailProps) {
  return (
    <aside className="dojo-panel track-rail">
      <div className="panel-heading">
        <p className="eyebrow">Roadmap</p>
        <h2>Beginner to Mastery</h2>
      </div>
      <div className="track-list">
        {tracks.map((track) => (
          <article className={track.id === activeTrackId ? "track-tile active" : "track-tile"} key={track.id}>
            <span className="track-dot" style={{ background: track.accent }} />
            <div>
              <p>{track.level}</p>
              <h3>{track.title}</h3>
              <span>{track.focus}</span>
            </div>
            {track.id === activeTrackId ? <Play size={18} aria-label="Active" /> : <Lock size={18} aria-label="Locked" />}
          </article>
        ))}
      </div>
      <div className="source-chip">
        <BookOpen size={16} aria-hidden="true" />
        KanaDojo-style replica, {activeDomain.subject.name} content
      </div>
    </aside>
  );
}
