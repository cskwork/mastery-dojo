"use client";

import {
  BarChart3,
  Code2,
  Github,
  Home,
  Moon,
  Radio,
  Settings,
  SlidersHorizontal,
  Volume2,
  VolumeX
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  defaultDomain,
  fillDomainTemplate,
  getDomainById,
  getTrackMark,
  learningDomains,
  type DojoCardConfig,
  type DrillMode,
  type LearningDomain,
  type LearningDrill,
  type LearningTrack,
  type TrackId
} from "@/data/dojoDomain";
import {
  emptyProgress,
  evaluateAnswer,
  getAccuracy,
  getNextDrill,
  getTrackDrills,
  getTrackSummary,
  recordAttempt,
  type ProgressSnapshot
} from "@/lib/training";
import { useDojoAudio, type DojoSound } from "@/components/dojo/useDojoAudio";

const modeOptions: Array<{ id: DrillMode; label: string }> = [
  { id: "pick", label: "Pick" },
  { id: "reverse", label: "Reverse" },
  { id: "input", label: "Input" },
  { id: "debug", label: "Debug" }
];

type Feedback = {
  state: "idle" | "correct" | "miss";
  text: string;
};

function readProgress(value: string | null): ProgressSnapshot {
  if (!value) return emptyProgress;

  try {
    return JSON.parse(value) as ProgressSnapshot;
  } catch {
    return emptyProgress;
  }
}

function getDefaultTrackId(domain: LearningDomain): TrackId {
  return domain.tracks[0]?.id ?? domain.home.cards[0]?.id ?? "default";
}

function getTrack(domain: LearningDomain, trackId: TrackId): LearningTrack {
  const track = domain.tracks.find((item) => item.id === trackId) ?? domain.tracks[0];
  if (!track) {
    throw new Error("The active domain must define at least one track.");
  }

  return track;
}

function TokenBackdrop({ domain }: { domain: LearningDomain }) {
  const tokens = useMemo(() => {
    const pool = domain.tokenPool.length > 0 ? domain.tokenPool : [domain.subject.name];
    return Array.from({ length: 336 }, (_, index) => pool[index % pool.length]);
  }, [domain]);

  return (
    <div className="kana-token-backdrop" aria-hidden="true">
      {tokens.map((token, index) => (
        <span key={`${token}-${index}`}>{token}</span>
      ))}
    </div>
  );
}

function HeaderControls({
  soundEnabled,
  onTap,
  onToggleSound
}: {
  soundEnabled: boolean;
  onTap: () => void;
  onToggleSound: () => void;
}) {
  const SoundIcon = soundEnabled ? Volume2 : VolumeX;

  return (
    <div className="kana-controls" aria-label="Display controls">
      <button type="button" aria-label="Toggle theme" onClick={onTap}>
        <Moon size={20} />
      </button>
      <button type="button" aria-label="Toggle sound" onClick={onToggleSound} aria-pressed={soundEnabled}>
        <SoundIcon size={20} />
      </button>
      <button type="button" aria-label="Open settings" onClick={onTap}>
        <Settings size={20} />
      </button>
    </div>
  );
}

function DomainSwitcher({
  domain,
  compact = false,
  onSelect
}: {
  domain: LearningDomain;
  compact?: boolean;
  onSelect: (domainId: string) => void;
}) {
  return (
    <section className={compact ? "kana-domain-switcher compact" : "kana-domain-switcher"} aria-label="Learning domains">
      {learningDomains.map((item) => {
        const mark = item.home.cards[0]?.mark ?? item.subject.name.slice(0, 3);

        return (
          <button
            type="button"
            className={item.id === domain.id ? "active" : ""}
            aria-pressed={item.id === domain.id}
            key={item.id}
            onClick={() => onSelect(item.id)}
          >
            <span>{mark}</span>
            <strong>{item.brand.displayName}</strong>
            <small>{item.subject.name}</small>
          </button>
        );
      })}
    </section>
  );
}

function WelcomePanel({ activeLabel, domain }: { activeLabel: string; domain: LearningDomain }) {
  return (
    <section className="kana-welcome" aria-labelledby="welcome-title">
      <h2 id="welcome-title">{domain.home.welcomeTitle}</h2>
      <p>{domain.home.welcomeBody}</p>
      <p>{fillDomainTemplate(domain.home.startTemplate, { trackLabel: activeLabel.toLowerCase() })}</p>
    </section>
  );
}

function DojoCard({
  card,
  active,
  domain,
  onSelect
}: {
  card: DojoCardConfig;
  active: boolean;
  domain: LearningDomain;
  onSelect: (id: TrackId) => void;
}) {
  const track = getTrack(domain, card.id);
  const summary = getTrackSummary(card.id, emptyProgress, domain);

  return (
    <button type="button" className={active ? "kana-dojo-card active" : "kana-dojo-card"} onClick={() => onSelect(card.id)}>
      <span className="kana-card-mark">{card.mark}</span>
      <span className="kana-card-label">{card.label}</span>
      <small>
        {track.level} · {summary.total} drills
      </small>
      <em>{card.summary}</em>
    </button>
  );
}

function BottomMeta({ domain }: { domain: LearningDomain }) {
  return (
    <div className="kana-footer-meta">
      <div className="kana-socials" aria-label="Community links">
        <a href="#community" aria-label={domain.footer.communityAria}>
          <Radio size={17} />
        </a>
        <a href="#source" aria-label={domain.footer.sourceAria}>
          <Github size={17} />
        </a>
      </div>
      <span>{domain.footer.meta}</span>
    </div>
  );
}

function FooterLinks({ domain }: { domain: LearningDomain }) {
  return (
    <footer className="kana-footer">
      <nav aria-label="Site links">
        {domain.footer.links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <BottomMeta domain={domain} />
    </footer>
  );
}

function HomeScreen({
  activeId,
  domain,
  soundEnabled,
  onDomainChange,
  onPlay,
  onStart,
  onToggleSound
}: {
  activeId: TrackId;
  domain: LearningDomain;
  soundEnabled: boolean;
  onDomainChange: (domainId: string) => void;
  onPlay: (sound: DojoSound) => void;
  onStart: (id: TrackId) => void;
  onToggleSound: () => void;
}) {
  const activeCard = domain.home.cards.find((card) => card.id === activeId);
  const activeLabel = activeCard?.label ?? getTrack(domain, activeId).title;

  return (
    <main className="kana-page">
      <TokenBackdrop domain={domain} />
      <button type="button" className="kana-floating-action" aria-label={domain.home.floatingActionLabel} onClick={() => onStart(activeId)}>
        <Code2 size={24} />
      </button>
      <section className="kana-home" aria-label={domain.home.ariaLabel}>
        <header className="kana-header">
          <h1>
            <span>{domain.brand.primaryName}</span>
            <span>{domain.brand.secondaryName}</span>
          </h1>
          <HeaderControls soundEnabled={soundEnabled} onTap={() => onPlay("tap")} onToggleSound={onToggleSound} />
        </header>
        <DomainSwitcher domain={domain} onSelect={onDomainChange} />
        <WelcomePanel activeLabel={activeLabel} domain={domain} />
        <section className="kana-dojo-grid" aria-label={`${domain.subject.adjective} training dojos`}>
          {domain.home.cards.map((card) => (
            <DojoCard key={card.id} card={card} active={card.id === activeId} domain={domain} onSelect={onStart} />
          ))}
        </section>
        <FooterLinks domain={domain} />
      </section>
    </main>
  );
}

function Sidebar({
  activeId,
  domain,
  progress,
  soundEnabled,
  onDomainChange,
  onHome,
  onPlay,
  onSelectTrack,
  onToggleSound
}: {
  activeId: TrackId;
  domain: LearningDomain;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onPlay: (sound: DojoSound) => void;
  onSelectTrack: (id: TrackId) => void;
  onToggleSound: () => void;
}) {
  const SoundIcon = soundEnabled ? Volume2 : VolumeX;

  return (
    <aside className="kana-sidebar" aria-label={domain.training.sidebarLabel}>
      <h1>
        <span>{domain.brand.primaryName}</span>
        <span>{domain.brand.secondaryName}</span>
      </h1>
      <DomainSwitcher compact domain={domain} onSelect={onDomainChange} />
      <nav>
        <button type="button" onClick={onHome}>
          <Home size={24} />
          <span>Home</span>
        </button>
        <button type="button" onClick={() => onPlay("tap")}>
          <BarChart3 size={24} />
          <span>Progress</span>
          <small>{progress.completedIds.length}</small>
        </button>
        {domain.tracks.map((track) => (
          <button
            type="button"
            className={activeId === track.id ? "active" : ""}
            key={track.id}
            onClick={() => onSelectTrack(track.id)}
          >
            <span className="kana-nav-mark">{getTrackMark(domain, track.id)}</span>
            <span>{track.title}</span>
          </button>
        ))}
        <button type="button" onClick={onToggleSound} aria-pressed={soundEnabled}>
          <SoundIcon size={24} />
          <span>Sound</span>
        </button>
      </nav>
      <button type="button" className="kana-sidebar-collapse" aria-label="Collapse sidebar" onClick={() => onPlay("tap")}>
        <SlidersHorizontal size={20} />
      </button>
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="kana-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ModeSelector({
  activeMode,
  domain,
  onModeChange
}: {
  activeMode: DrillMode;
  domain: LearningDomain;
  onModeChange: (mode: DrillMode) => void;
}) {
  return (
    <section className="kana-mode-row" aria-label={domain.training.modeLabel}>
      {modeOptions.map((mode) => (
        <button type="button" className={activeMode === mode.id ? "active" : ""} key={mode.id} onClick={() => onModeChange(mode.id)}>
          {mode.label}
        </button>
      ))}
    </section>
  );
}

function ChoiceGrid({
  drill,
  answer,
  locked,
  onChoose
}: {
  drill: LearningDrill;
  answer: string;
  locked: boolean;
  onChoose: (choice: string) => void;
}) {
  return (
    <div className="kana-choice-grid" aria-label="Answer choices">
      {drill.choices.map((choice) => (
        <button
          type="button"
          className={answer === choice ? "active" : ""}
          disabled={locked}
          key={choice}
          onClick={() => onChoose(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}

function DrillCard({
  drill,
  answer,
  feedback,
  onAnswer,
  onChoose
}: {
  drill: LearningDrill;
  answer: string;
  feedback: Feedback;
  onAnswer: (value: string) => void;
  onChoose: (value: string) => void;
}) {
  const locked = feedback.state === "correct";

  return (
    <section className="kana-drill-card" aria-labelledby="drill-title">
      <div className="kana-drill-topline">
        <span>Level {drill.level}</span>
        <span>{drill.concept}</span>
      </div>
      <h3 id="drill-title">{drill.prompt}</h3>
      {drill.code ? <pre>{drill.code}</pre> : <div className="kana-concept-chip">{drill.concept}</div>}
      {drill.mode === "input" ? (
        <input value={answer} disabled={locked} onChange={(event) => onAnswer(event.target.value)} placeholder="type the answer" />
      ) : (
        <ChoiceGrid drill={drill} answer={answer} locked={locked} onChoose={onChoose} />
      )}
      <p className={`kana-feedback ${feedback.state}`}>{feedback.text || drill.hint}</p>
    </section>
  );
}

function TrainingView({
  activeId,
  domain,
  mode,
  progress,
  soundEnabled,
  onDomainChange,
  onHome,
  onModeChange,
  onSelectTrack,
  onToggleSound,
  onProgress,
  play
}: {
  activeId: TrackId;
  domain: LearningDomain;
  mode: DrillMode;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onModeChange: (mode: DrillMode) => void;
  onSelectTrack: (id: TrackId) => void;
  onToggleSound: () => void;
  onProgress: (progress: ProgressSnapshot) => void;
  play: (sound: DojoSound) => void;
}) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>({ state: "idle", text: "" });
  const [currentDrillId, setCurrentDrillId] = useState<string | null>(null);
  const nextDrill = useMemo(() => getNextDrill(activeId, mode, progress, domain), [activeId, domain, mode, progress]);
  const drill = useMemo(() => {
    return getTrackDrills(activeId, mode, domain).find((item) => item.id === currentDrillId) ?? nextDrill;
  }, [activeId, currentDrillId, domain, mode, nextDrill]);
  const summary = getTrackSummary(activeId, progress, domain);
  const track = getTrack(domain, activeId);

  useEffect(() => {
    setCurrentDrillId(null);
    setAnswer("");
    setFeedback({ state: "idle", text: "" });
  }, [activeId, domain.id, mode]);

  function submitAnswer(value: string) {
    const correct = evaluateAnswer(drill, value);
    setCurrentDrillId(drill.id);
    play(correct ? "success" : "miss");
    setFeedback({ state: correct ? "correct" : "miss", text: correct ? drill.explanation : drill.hint });
    onProgress(recordAttempt(progress, drill, correct));
  }

  function advanceDrill() {
    play("confirm");
    setCurrentDrillId(null);
    setAnswer("");
    setFeedback({ state: "idle", text: "" });
  }

  function chooseAnswer(value: string) {
    play("tap");
    setAnswer(value);
    if (drill.mode !== "input") submitAnswer(value);
  }

  return (
    <main className="kana-app-page">
      <Sidebar
        activeId={activeId}
        domain={domain}
        progress={progress}
        soundEnabled={soundEnabled}
        onDomainChange={onDomainChange}
        onHome={onHome}
        onPlay={play}
        onSelectTrack={onSelectTrack}
        onToggleSound={onToggleSound}
      />
      <section className="kana-dojo-main" aria-label={`${track.title} dojo`}>
        <header className="kana-dojo-title">
          <h2>
            <span>{getTrackMark(domain, track.id)}</span>
            {track.title}
          </h2>
          <HeaderControls soundEnabled={soundEnabled} onTap={() => play("tap")} onToggleSound={onToggleSound} />
        </header>
        <section className="kana-section-panel">
          <h3>{fillDomainTemplate(domain.training.welcomeTitleTemplate, { trackTitle: track.title.toLowerCase() })}</h3>
          <p>
            {fillDomainTemplate(domain.training.welcomeBodyTemplate, {
              trackFocus: track.focus,
              subjectName: domain.subject.name
            })}
          </p>
        </section>
        <section className="kana-stat-grid" aria-label={domain.training.progressLabel}>
          <Metric label="XP" value={progress.xp} />
          <Metric label="Streak" value={progress.streak} />
          <Metric label="Accuracy" value={`${getAccuracy(progress)}%`} />
          <Metric label="Complete" value={`${summary.percent}%`} />
        </section>
        <ModeSelector activeMode={mode} domain={domain} onModeChange={onModeChange} />
        <DrillCard drill={drill} answer={answer} feedback={feedback} onAnswer={setAnswer} onChoose={chooseAnswer} />
        <div className="kana-action-bar">
          <button type="button" onClick={onHome}>
            {domain.training.actions.home}
          </button>
          <button type="button" onClick={() => play("tap")}>
            {domain.training.actions.hint}
          </button>
          <button
            type="button"
            className="primary"
            onClick={() => (feedback.state === "correct" ? advanceDrill() : submitAnswer(answer))}
          >
            {feedback.state === "correct" ? domain.training.actions.next : domain.training.actions.check}
          </button>
        </div>
      </section>
      <BottomMeta domain={domain} />
    </main>
  );
}

export function PythonDojoApp() {
  const [view, setView] = useState<"home" | "dojo">("home");
  const [domainId, setDomainId] = useState(defaultDomain.id);
  const domain = useMemo(() => getDomainById(domainId), [domainId]);
  const defaultTrackId = useMemo(() => getDefaultTrackId(domain), [domain]);
  const [mode, setMode] = useState<DrillMode>("pick");
  const [activeId, setActiveId] = useState<TrackId>(getDefaultTrackId(defaultDomain));
  const [ready, setReady] = useState(false);
  const [loadedStorageKey, setLoadedStorageKey] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressSnapshot>(emptyProgress);
  const audio = useDojoAudio();

  useEffect(() => {
    setActiveId(defaultTrackId);
    setMode("pick");
    setProgress(readProgress(window.localStorage.getItem(domain.storageKey)));
    setLoadedStorageKey(domain.storageKey);
    setReady(true);
  }, [defaultTrackId, domain.storageKey]);

  useEffect(() => {
    if (ready && loadedStorageKey === domain.storageKey) {
      window.localStorage.setItem(domain.storageKey, JSON.stringify(progress));
    }
  }, [domain.storageKey, loadedStorageKey, progress, ready]);

  function changeDomain(nextDomainId: string) {
    audio.play(nextDomainId === domain.id ? "tap" : "confirm");
    if (nextDomainId === domain.id) return;

    setDomainId(nextDomainId);
    setView("home");
  }

  function startDojo(trackId: TrackId) {
    audio.play("confirm");
    setActiveId(trackId);
    setView("dojo");
  }

  function changeMode(nextMode: DrillMode) {
    audio.play("tap");
    setMode(nextMode);
  }

  function goHome() {
    audio.play("tap");
    setView("home");
  }

  if (view === "home") {
    return (
      <HomeScreen
        activeId={activeId}
        domain={domain}
        soundEnabled={audio.enabled}
        onDomainChange={changeDomain}
        onPlay={audio.play}
        onStart={startDojo}
        onToggleSound={audio.toggleSound}
      />
    );
  }

  return (
    <TrainingView
      activeId={activeId}
      domain={domain}
      mode={mode}
      progress={progress}
      soundEnabled={audio.enabled}
      onDomainChange={changeDomain}
      onHome={goHome}
      onModeChange={changeMode}
      onSelectTrack={startDojo}
      onToggleSound={audio.toggleSound}
      onProgress={setProgress}
      play={audio.play}
    />
  );
}
