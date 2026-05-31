"use client";

import {
  BarChart3,
  Code2,
  Flame,
  Github,
  Home,
  Languages,
  Moon,
  Radio,
  Settings,
  SlidersHorizontal,
  Sun,
  TrendingUp,
  Trophy,
  Volume2,
  VolumeX,
  X
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
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  LanguageContext,
  isLanguage,
  otherLanguage,
  useLanguage,
  useT,
  type Language
} from "@/lib/i18n";
import { localizeDomain } from "@/lib/localize";
import type { UiStringKey } from "@/data/i18n/uiStrings";
import {
  emptyProgress,
  evaluateAnswer,
  getAccuracy,
  getNextDrill,
  getTrackDrills,
  getTrackSummary,
  getUnlockedAchievements,
  recordAttempt,
  type ProgressSnapshot
} from "@/lib/training";
import { useDojoAudio, type DojoSound } from "@/components/dojo/useDojoAudio";

const modeOptions: Array<{ id: DrillMode; labelKey: UiStringKey }> = [
  { id: "pick", labelKey: "modePick" },
  { id: "reverse", labelKey: "modeReverse" },
  { id: "input", labelKey: "modeInput" },
  { id: "debug", labelKey: "modeDebug" }
];

type Feedback = {
  state: "idle" | "correct" | "miss";
  text: string;
};

type ThemeMode = "dark" | "light";
type ProgressTab = "statistics" | "streak" | "achievements";

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
  theme,
  onToggleTheme,
  onToggleSound,
  onOpenSettings
}: {
  soundEnabled: boolean;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onToggleSound: () => void;
  onOpenSettings: () => void;
}) {
  const SoundIcon = soundEnabled ? Volume2 : VolumeX;
  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const t = useT();
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="kana-controls" aria-label={t("displayControls")}>
      <button type="button" className="kana-lang-toggle" aria-label={t("toggleLanguage")} onClick={toggleLang}>
        <Languages size={18} />
        <span>{lang === "ko" ? "KO" : "EN"}</span>
      </button>
      <button type="button" aria-label={t("toggleTheme")} onClick={onToggleTheme}>
        <ThemeIcon size={20} />
      </button>
      <button type="button" aria-label={t("toggleSound")} onClick={onToggleSound} aria-pressed={soundEnabled}>
        <SoundIcon size={20} />
      </button>
      <button type="button" aria-label={t("openSettings")} onClick={onOpenSettings}>
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
  const t = useT();
  const track = getTrack(domain, card.id);
  const summary = getTrackSummary(card.id, emptyProgress, domain);

  return (
    <button type="button" className={active ? "kana-dojo-card active" : "kana-dojo-card"} onClick={() => onSelect(card.id)}>
      <span className="kana-card-mark">{card.mark}</span>
      <span className="kana-card-label">{card.label}</span>
      <small>
        {track.level} · {summary.total} {t("drillsUnit")}
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
  theme,
  onDomainChange,
  onHome,
  onPlay,
  onStart,
  onToggleSound,
  onToggleTheme,
  onOpenSettings
}: {
  activeId: TrackId;
  domain: LearningDomain;
  soundEnabled: boolean;
  theme: ThemeMode;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onPlay: (sound: DojoSound) => void;
  onStart: (id: TrackId) => void;
  onToggleSound: () => void;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
}) {
  const t = useT();
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
          <h1
            className="kana-brand-home"
            role="button"
            tabIndex={0}
            aria-label={t("home")}
            onClick={onHome}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") onHome();
            }}
          >
            <span>{domain.brand.primaryName}</span>
            <span>{domain.brand.secondaryName}</span>
          </h1>
          <HeaderControls
            soundEnabled={soundEnabled}
            theme={theme}
            onToggleTheme={onToggleTheme}
            onToggleSound={onToggleSound}
            onOpenSettings={onOpenSettings}
          />
        </header>
        <DomainSwitcher domain={domain} onSelect={onDomainChange} />
        <WelcomePanel activeLabel={activeLabel} domain={domain} />
        <section className="kana-dojo-grid" aria-label={`${domain.subject.adjective} ${t("trainingDojos")}`}>
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
  progressActive = false,
  onDomainChange,
  onHome,
  onPlay,
  onSelectTrack,
  onToggleSound,
  onOpenProgress
}: {
  activeId: TrackId;
  domain: LearningDomain;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  progressActive?: boolean;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onPlay: (sound: DojoSound) => void;
  onSelectTrack: (id: TrackId) => void;
  onToggleSound: () => void;
  onOpenProgress: () => void;
}) {
  const SoundIcon = soundEnabled ? Volume2 : VolumeX;

  const t = useT();

  return (
    <aside className="kana-sidebar" aria-label={domain.training.sidebarLabel}>
      <h1
        className="kana-brand-home"
        role="button"
        tabIndex={0}
        aria-label={t("home")}
        onClick={onHome}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") onHome();
        }}
      >
        <span>{domain.brand.primaryName}</span>
        <span>{domain.brand.secondaryName}</span>
      </h1>
      <DomainSwitcher compact domain={domain} onSelect={onDomainChange} />
      <nav>
        <button type="button" onClick={onHome}>
          <Home size={24} />
          <span>{t("home")}</span>
        </button>
        <button type="button" className={progressActive ? "active" : ""} onClick={onOpenProgress}>
          <BarChart3 size={24} />
          <span>{t("progress")}</span>
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
          <span>{t("sound")}</span>
        </button>
      </nav>
      <button type="button" className="kana-sidebar-collapse" aria-label={t("collapseSidebar")} onClick={() => onPlay("tap")}>
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
  const t = useT();
  return (
    <section className="kana-mode-row" aria-label={domain.training.modeLabel}>
      {modeOptions.map((mode) => (
        <button type="button" className={activeMode === mode.id ? "active" : ""} key={mode.id} onClick={() => onModeChange(mode.id)}>
          {t(mode.labelKey)}
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
  const t = useT();
  return (
    <div className="kana-choice-grid" aria-label={t("answerChoices")}>
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
  const t = useT();

  return (
    <section className="kana-drill-card" aria-labelledby="drill-title">
      <div className="kana-drill-topline">
        <span>
          {t("level")} {drill.level}
        </span>
        <span>{drill.concept}</span>
      </div>
      <h3 id="drill-title">{drill.prompt}</h3>
      {drill.code ? <pre>{drill.code}</pre> : <div className="kana-concept-chip">{drill.concept}</div>}
      {drill.mode === "input" ? (
        <input value={answer} disabled={locked} onChange={(event) => onAnswer(event.target.value)} placeholder={t("typeAnswer")} />
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
  theme,
  onDomainChange,
  onHome,
  onModeChange,
  onSelectTrack,
  onToggleSound,
  onToggleTheme,
  onOpenSettings,
  onOpenProgress,
  onProgress,
  play
}: {
  activeId: TrackId;
  domain: LearningDomain;
  mode: DrillMode;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  theme: ThemeMode;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onModeChange: (mode: DrillMode) => void;
  onSelectTrack: (id: TrackId) => void;
  onToggleSound: () => void;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  onOpenProgress: () => void;
  onProgress: (progress: ProgressSnapshot) => void;
  play: (sound: DojoSound) => void;
}) {
  const t = useT();
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
        onOpenProgress={onOpenProgress}
      />
      <section className="kana-dojo-main" aria-label={`${track.title} dojo`}>
        <header className="kana-dojo-title">
          <h2>
            <span>{getTrackMark(domain, track.id)}</span>
            {track.title}
          </h2>
          <HeaderControls
            soundEnabled={soundEnabled}
            theme={theme}
            onToggleTheme={onToggleTheme}
            onToggleSound={onToggleSound}
            onOpenSettings={onOpenSettings}
          />
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
          <Metric label={t("xp")} value={progress.xp} />
          <Metric label={t("streak")} value={progress.streak} />
          <Metric label={t("accuracy")} value={`${getAccuracy(progress)}%`} />
          <Metric label={t("complete")} value={`${summary.percent}%`} />
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

const achievementDefs: Array<{ key: keyof LearningDomain["achievements"]; nameKey: UiStringKey; descKey: UiStringKey }> = [
  { key: "firstClear", nameKey: "achFirstClear", descKey: "achFirstClearDesc" },
  { key: "eightClears", nameKey: "achEightClears", descKey: "achEightClearsDesc" },
  { key: "allTracksStarted", nameKey: "achAllTracksStarted", descKey: "achAllTracksStartedDesc" },
  { key: "streakFive", nameKey: "achStreakFive", descKey: "achStreakFiveDesc" },
  { key: "highAccuracy", nameKey: "achHighAccuracy", descKey: "achHighAccuracyDesc" },
  { key: "fullMastery", nameKey: "achFullMastery", descKey: "achFullMasteryDesc" }
];

function ProgressTabsBar({ tab, onSelect }: { tab: ProgressTab; onSelect: (next: ProgressTab) => void }) {
  const t = useT();
  const tabs: Array<{ id: ProgressTab; labelKey: UiStringKey; Icon: typeof TrendingUp }> = [
    { id: "statistics", labelKey: "tabStats", Icon: TrendingUp },
    { id: "streak", labelKey: "tabStreak", Icon: Flame },
    { id: "achievements", labelKey: "tabAchievements", Icon: Trophy }
  ];

  return (
    <div className="kana-progress-tabs" role="tablist" aria-label={t("progressViews")}>
      {tabs.map(({ id, labelKey, Icon }) => (
        <button
          type="button"
          role="tab"
          aria-selected={tab === id}
          className={tab === id ? "active" : ""}
          key={id}
          onClick={() => onSelect(id)}
        >
          <Icon size={18} />
          <span>{t(labelKey)}</span>
        </button>
      ))}
    </div>
  );
}

function StatisticsPanel({ domain, progress }: { domain: LearningDomain; progress: ProgressSnapshot }) {
  const t = useT();
  const totalDrills = domain.drills.length;
  const completed = progress.completedIds.length;
  const overallPercent = totalDrills === 0 ? 0 : Math.round((completed / totalDrills) * 100);

  return (
    <div className="kana-progress-panel">
      <section className="kana-stat-grid" aria-label={t("overallStatistics")}>
        <Metric label={t("xp")} value={progress.xp} />
        <Metric label={t("attempts")} value={progress.attempts} />
        <Metric label={t("correct")} value={progress.correct} />
        <Metric label={t("accuracy")} value={`${getAccuracy(progress)}%`} />
        <Metric label={t("cleared")} value={`${completed}/${totalDrills}`} />
        <Metric label={t("complete")} value={`${overallPercent}%`} />
      </section>
      <section className="kana-progress-tracks" aria-label={t("trackCompletion")}>
        <h3>{t("tracksHeading")}</h3>
        {domain.tracks.map((track) => {
          const summary = getTrackSummary(track.id, progress, domain);
          return (
            <div className="kana-progress-track" key={track.id}>
              <div className="kana-progress-track-head">
                <span className="kana-nav-mark">{getTrackMark(domain, track.id)}</span>
                <strong>{track.title}</strong>
                <small>
                  {summary.completed}/{summary.total}
                </small>
              </div>
              <div className="kana-progress-bar">
                <span style={{ width: `${summary.percent}%` }} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function StreakPanel({ progress }: { progress: ProgressSnapshot }) {
  const t = useT();
  return (
    <div className="kana-progress-panel">
      <section className="kana-streak-hero" aria-label={t("currentStreakAria")}>
        <Flame size={44} />
        <strong>{progress.streak}</strong>
        <span>{t("currentStreakLabel")}</span>
      </section>
      <section className="kana-stat-grid" aria-label={t("streakStatistics")}>
        <Metric label={t("current")} value={progress.streak} />
        <Metric label={t("best")} value={progress.bestStreak} />
        <Metric label={t("attempts")} value={progress.attempts} />
        <Metric label={t("correct")} value={progress.correct} />
      </section>
    </div>
  );
}

function AchievementsPanel({ domain, progress }: { domain: LearningDomain; progress: ProgressSnapshot }) {
  const t = useT();
  const unlocked = new Set(getUnlockedAchievements(progress, domain));

  return (
    <div className="kana-progress-panel">
      <section className="kana-achievement-grid" aria-label={t("achievementsAria")}>
        {achievementDefs.map(({ key, nameKey, descKey }) => {
          const isUnlocked = unlocked.has(domain.achievements[key]);
          return (
            <article className={isUnlocked ? "kana-achievement unlocked" : "kana-achievement"} key={key}>
              <Trophy size={20} />
              <strong>{t(nameKey)}</strong>
              <small>{t(descKey)}</small>
              <em>{isUnlocked ? t("unlocked") : t("locked")}</em>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function ProgressView({
  activeId,
  domain,
  progress,
  soundEnabled,
  theme,
  tab,
  onDomainChange,
  onHome,
  onSelectTrack,
  onTabChange,
  onToggleSound,
  onToggleTheme,
  onOpenSettings,
  play
}: {
  activeId: TrackId;
  domain: LearningDomain;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  theme: ThemeMode;
  tab: ProgressTab;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onSelectTrack: (id: TrackId) => void;
  onTabChange: (next: ProgressTab) => void;
  onToggleSound: () => void;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  play: (sound: DojoSound) => void;
}) {
  return (
    <main className="kana-app-page">
      <Sidebar
        activeId={activeId}
        domain={domain}
        progress={progress}
        soundEnabled={soundEnabled}
        progressActive
        onDomainChange={onDomainChange}
        onHome={onHome}
        onPlay={play}
        onSelectTrack={onSelectTrack}
        onToggleSound={onToggleSound}
        onOpenProgress={() => play("tap")}
      />
      <section className="kana-dojo-main" aria-label="Progress">
        <header className="kana-dojo-title">
          <h2>
            <span>
              <BarChart3 size={18} />
            </span>
            Progress
          </h2>
          <HeaderControls
            soundEnabled={soundEnabled}
            theme={theme}
            onToggleTheme={onToggleTheme}
            onToggleSound={onToggleSound}
            onOpenSettings={onOpenSettings}
          />
        </header>
        <ProgressTabsBar tab={tab} onSelect={onTabChange} />
        {tab === "statistics" ? <StatisticsPanel domain={domain} progress={progress} /> : null}
        {tab === "streak" ? <StreakPanel progress={progress} /> : null}
        {tab === "achievements" ? <AchievementsPanel domain={domain} progress={progress} /> : null}
      </section>
      <BottomMeta domain={domain} />
    </main>
  );
}

function SettingsOverlay({
  domain,
  theme,
  soundEnabled,
  onClose,
  onToggleTheme,
  onToggleSound,
  onResetProgress
}: {
  domain: LearningDomain;
  theme: ThemeMode;
  soundEnabled: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  onToggleSound: () => void;
  onResetProgress: () => void;
}) {
  return (
    <div className="kana-overlay" role="dialog" aria-modal="true" aria-label="Settings" onClick={onClose}>
      <div className="kana-modal" onClick={(event) => event.stopPropagation()}>
        <header className="kana-modal-head">
          <h2>Settings</h2>
          <button type="button" aria-label="Close settings" onClick={onClose}>
            <X size={20} />
          </button>
        </header>
        <div className="kana-setting-row">
          <div>
            <strong>Theme</strong>
            <small>Light or dark appearance</small>
          </div>
          <button type="button" onClick={onToggleTheme}>
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
        <div className="kana-setting-row">
          <div>
            <strong>Sound</strong>
            <small>Drill feedback audio</small>
          </div>
          <button type="button" aria-pressed={soundEnabled} onClick={onToggleSound}>
            {soundEnabled ? "On" : "Off"}
          </button>
        </div>
        <div className="kana-setting-row">
          <div>
            <strong>Reset progress</strong>
            <small>Clear {domain.brand.primaryName} XP, streak, and clears</small>
          </div>
          <button type="button" className="danger" onClick={onResetProgress}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export function PythonDojoApp() {
  const [view, setView] = useState<"home" | "dojo" | "progress">("home");
  const [domainId, setDomainId] = useState(defaultDomain.id);
  const domain = useMemo(() => getDomainById(domainId), [domainId]);
  const defaultTrackId = useMemo(() => getDefaultTrackId(domain), [domain]);
  const [mode, setMode] = useState<DrillMode>("pick");
  const [activeId, setActiveId] = useState<TrackId>(getDefaultTrackId(defaultDomain));
  const [ready, setReady] = useState(false);
  const [loadedStorageKey, setLoadedStorageKey] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressSnapshot>(emptyProgress);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [progressTab, setProgressTab] = useState<ProgressTab>("statistics");
  const [settingsOpen, setSettingsOpen] = useState(false);
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

  useEffect(() => {
    const stored = window.localStorage.getItem("dojo-theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("dojo-theme", theme);
  }, [theme]);

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

  function openProgress() {
    audio.play("confirm");
    setView("progress");
  }

  function toggleTheme() {
    audio.play("tap");
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  function resetProgress() {
    audio.play("tap");
    setProgress(emptyProgress);
    setSettingsOpen(false);
  }

  function openSettings() {
    audio.play("tap");
    setSettingsOpen(true);
  }

  const screen =
    view === "home" ? (
      <HomeScreen
        activeId={activeId}
        domain={domain}
        soundEnabled={audio.enabled}
        theme={theme}
        onDomainChange={changeDomain}
        onPlay={audio.play}
        onStart={startDojo}
        onToggleSound={audio.toggleSound}
        onToggleTheme={toggleTheme}
        onOpenSettings={openSettings}
      />
    ) : view === "progress" ? (
      <ProgressView
        activeId={activeId}
        domain={domain}
        progress={progress}
        soundEnabled={audio.enabled}
        theme={theme}
        tab={progressTab}
        onDomainChange={changeDomain}
        onHome={goHome}
        onSelectTrack={startDojo}
        onTabChange={setProgressTab}
        onToggleSound={audio.toggleSound}
        onToggleTheme={toggleTheme}
        onOpenSettings={openSettings}
        play={audio.play}
      />
    ) : (
      <TrainingView
        activeId={activeId}
        domain={domain}
        mode={mode}
        progress={progress}
        soundEnabled={audio.enabled}
        theme={theme}
        onDomainChange={changeDomain}
        onHome={goHome}
        onModeChange={changeMode}
        onSelectTrack={startDojo}
        onToggleSound={audio.toggleSound}
        onToggleTheme={toggleTheme}
        onOpenSettings={openSettings}
        onOpenProgress={openProgress}
        onProgress={setProgress}
        play={audio.play}
      />
    );

  return (
    <>
      {screen}
      {settingsOpen ? (
        <SettingsOverlay
          domain={domain}
          theme={theme}
          soundEnabled={audio.enabled}
          onClose={() => setSettingsOpen(false)}
          onToggleTheme={toggleTheme}
          onToggleSound={audio.toggleSound}
          onResetProgress={resetProgress}
        />
      ) : null}
    </>
  );
}
