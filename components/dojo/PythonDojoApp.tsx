"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  Flame,
  Github,
  Home,
  Languages,
  Lock,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sun,
  TrendingUp,
  Trophy,
  Volume2,
  VolumeX,
  X
} from "lucide-react";
import { Fragment, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  defaultDomain,
  fillDomainTemplate,
  getDomainById,
  getTrackMark,
  learningDomains,
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
  isBlankAnswer,
  recordAttempt,
  type ProgressSnapshot
} from "@/lib/training";
import { SESSION_STORAGE_KEY, parseSession, serializeSession, type DojoSession } from "@/lib/session";
import { resolveDrillKey } from "@/lib/drillKeys";
import { withBasePath } from "@/lib/basePath";
import { useDojoAudio, type DojoSound } from "@/components/dojo/useDojoAudio";

const SOURCE_URL = "https://github.com/cskwork/mastery-dojo";
const KANADOJO_URL = "https://github.com/lingdojo/kana-dojo";

const modeOptions: Array<{ id: DrillMode; labelKey: UiStringKey; flag: string }> = [
  { id: "pick", labelKey: "modePick", flag: "-p" },
  { id: "reverse", labelKey: "modeReverse", flag: "-r" },
  { id: "input", labelKey: "modeInput", flag: "-i" },
  { id: "debug", labelKey: "modeDebug", flag: "-d" }
];

type Feedback = {
  state: "idle" | "correct" | "miss" | "empty";
  text: string;
};

type ThemeMode = "dark" | "light";
type ProgressTab = "statistics" | "streak" | "achievements";
type View = "home" | "dojo" | "progress";

function readProgress(value: string | null): ProgressSnapshot {
  if (!value) return emptyProgress;

  try {
    return { ...emptyProgress, ...(JSON.parse(value) as ProgressSnapshot) };
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

function getTrackNumber(domain: LearningDomain, trackId: TrackId): number {
  return Math.max(0, domain.tracks.findIndex((track) => track.id === trackId)) + 1;
}

// Backtick spans in prompts (`score`) render as inline literals.
function renderInline(text: string): ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) =>
    part.startsWith("`") && part.endsWith("`") && part.length > 2 ? (
      <code key={index}>{part.slice(1, -1)}</code>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}

/* ---------- shared chrome ---------- */

function CellMeter({ percent, label }: { percent: number; label: string }) {
  const filled = Math.round((Math.min(100, Math.max(0, percent)) / 100) * 20);
  return (
    <span className="md-meter" role="img" aria-label={label}>
      {Array.from({ length: 20 }, (_, index) => (
        <i key={index} className={index < filled ? "on" : undefined} />
      ))}
    </span>
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
    <div className="md-controls" role="group" aria-label={t("displayControls")}>
      <button type="button" className="md-lang" aria-label={t("toggleLanguage")} onClick={toggleLang}>
        <Languages size={16} aria-hidden="true" />
        <span>{lang === "ko" ? "KO" : "EN"}</span>
      </button>
      <button type="button" aria-label={t("toggleTheme")} onClick={onToggleTheme}>
        <ThemeIcon size={17} aria-hidden="true" />
      </button>
      <button type="button" aria-label={t("toggleSound")} onClick={onToggleSound} aria-pressed={soundEnabled}>
        <SoundIcon size={17} aria-hidden="true" />
      </button>
      <button type="button" aria-label={t("openSettings")} onClick={onOpenSettings}>
        <Settings size={17} aria-hidden="true" />
      </button>
    </div>
  );
}

function RunningHeader({
  domain,
  pageName,
  indexOpen,
  showIndexToggle,
  onToggleIndex,
  onHome,
  controls
}: {
  domain: LearningDomain;
  pageName: string;
  indexOpen?: boolean;
  showIndexToggle?: boolean;
  onToggleIndex?: () => void;
  onHome: () => void;
  controls: ReactNode;
}) {
  const t = useT();
  const IndexIcon = indexOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="md-running-head">
      <div className="md-head-left">
        {showIndexToggle ? (
          <button
            type="button"
            className="md-index-toggle"
            aria-expanded={indexOpen}
            aria-controls="md-index"
            aria-label={indexOpen ? t("closeIndex") : t("openIndex")}
            onClick={onToggleIndex}
          >
            <IndexIcon size={17} aria-hidden="true" />
            <span>{t("index")}</span>
          </button>
        ) : null}
        <button type="button" className="md-page-name" onClick={onHome} aria-label={`${t("home")} · ${domain.brand.displayName}`}>
          {pageName}
        </button>
      </div>
      <span className="md-head-title">{t("manualTitle")}</span>
      {controls}
    </header>
  );
}

function ManualList({
  domain,
  compact = false,
  onSelect
}: {
  domain: LearningDomain;
  compact?: boolean;
  onSelect: (domainId: string) => void;
}) {
  const t = useT();
  return (
    <ul className={compact ? "md-manuals compact" : "md-manuals"} aria-label={t("learningDomains")}>
      {learningDomains.map((item) => {
        const mark = item.home.cards[0]?.mark ?? item.subject.name.slice(0, 3);
        const active = item.id === domain.id;
        return (
          <li key={item.id}>
            <button type="button" className={active ? "active" : undefined} aria-pressed={active} onClick={() => onSelect(item.id)}>
              <span className="md-mark">{mark}</span>
              <strong>{item.brand.displayName}</strong>
              <small>{item.subject.name}</small>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function RunningFooter({ domain }: { domain: LearningDomain }) {
  const t = useT();
  return (
    <footer className="md-running-foot">
      <nav aria-label={t("sectionSeeAlso")}>
        <a href={SOURCE_URL} target="_blank" rel="noreferrer">
          <Github size={14} aria-hidden="true" />
          {t("sourceCode")}
        </a>
        <a href={KANADOJO_URL} target="_blank" rel="noreferrer">
          {t("kanaCredit")}
        </a>
      </nav>
      <span>{domain.footer.meta}</span>
    </footer>
  );
}

/* ---------- home ---------- */

function HomeScreen({
  activeId,
  domain,
  mode,
  progress,
  controls,
  onDomainChange,
  onHome,
  onStart
}: {
  activeId: TrackId;
  domain: LearningDomain;
  mode: DrillMode;
  progress: ProgressSnapshot;
  controls: ReactNode;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onStart: (id: TrackId) => void;
}) {
  const t = useT();
  const activeTrack = getTrack(domain, activeId);
  const activeCard = domain.home.cards.find((card) => card.id === activeId);
  const activeLabel = activeCard?.label ?? activeTrack.title;
  const activeSummary = getTrackSummary(activeTrack.id, progress, domain);
  const modeLabel = t(modeOptions.find((item) => item.id === mode)?.labelKey ?? "modePick");
  const hasHistory = progress.attempts > 0;

  return (
    <div className="md-page md-home">
      <RunningHeader domain={domain} pageName={domain.brand.displayName.toUpperCase()} onHome={onHome} controls={controls} />
      <main className="md-home-grid" aria-label={domain.home.ariaLabel}>
        <div className="md-home-main">
          <h1 className="md-display">
            {domain.brand.primaryName}
            <span>{domain.brand.secondaryName}</span>
          </h1>
          <section className="md-section" aria-labelledby="md-desc">
            <h2 id="md-desc" className="md-section-head">
              {t("sectionDescription")}
            </h2>
            <div className="md-section-body md-prose">
              <p>
                <strong>{domain.home.welcomeTitle}</strong> {domain.home.welcomeBody}
              </p>
              <p>{fillDomainTemplate(domain.home.startTemplate, { trackLabel: activeLabel.toLowerCase() })}</p>
            </div>
          </section>

          <button type="button" className="md-continue" onClick={() => onStart(activeTrack.id)}>
            <span className="md-continue-verb">{hasHistory ? t("continueLabel") : t("startLabel")}</span>
            <span className="md-continue-what">
              {getTrackNumber(domain, activeTrack.id)}. {activeTrack.title} · {modeLabel} {t("modeSuffix")}
            </span>
            <span className="md-continue-count">
              {activeSummary.completed}/{activeSummary.total}
            </span>
            <ArrowRight size={20} aria-hidden="true" />
          </button>

          <section className="md-section" aria-labelledby="md-tracks">
            <h2 id="md-tracks" className="md-section-head">
              {t("sectionTracks")}
            </h2>
            <ol className="md-tracks" aria-label={`${domain.subject.adjective} ${t("trainingDojos")}`}>
              {domain.home.cards.map((card) => {
                const track = getTrack(domain, card.id);
                const summary = getTrackSummary(card.id, progress, domain);
                const active = card.id === activeId;
                return (
                  <li key={card.id}>
                    <button type="button" className={active ? "md-track active" : "md-track"} onClick={() => onStart(card.id)}>
                      <span className="md-track-num">{getTrackNumber(domain, card.id)}</span>
                      <span className="md-mark">{card.mark}</span>
                      <span className="md-track-text">
                        <strong>{track.title}</strong>
                        <small>
                          {track.level} · {summary.total} {t("drillsUnit")} · {card.summary}
                        </small>
                      </span>
                      <span className="md-track-meter">
                        <CellMeter
                          percent={summary.percent}
                          label={`${summary.completed}/${summary.total} ${t("drillsDone")}`}
                        />
                        <small>
                          {summary.completed}/{summary.total}
                        </small>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        </div>

        <aside className="md-home-aside">
          <section className="md-section" aria-labelledby="md-manuals">
            <h2 id="md-manuals" className="md-section-head">
              {t("sectionManuals")}
            </h2>
            <ManualList domain={domain} onSelect={onDomainChange} />
          </section>
          <figure className="md-figure">
            <img
              src={withBasePath("/art/manual-figure.webp")}
              width={960}
              height={640}
              alt={t("figureAlt")}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </aside>
      </main>
      <RunningFooter domain={domain} />
    </div>
  );
}

/* ---------- dojo shell (index + main) ---------- */

function IndexPanel({
  activeId,
  domain,
  progress,
  progressActive,
  soundEnabled,
  open,
  onDomainChange,
  onHome,
  onOpenProgress,
  onSelectTrack,
  onToggleSound
}: {
  activeId: TrackId;
  domain: LearningDomain;
  progress: ProgressSnapshot;
  progressActive: boolean;
  soundEnabled: boolean;
  open: boolean;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onOpenProgress: () => void;
  onSelectTrack: (id: TrackId) => void;
  onToggleSound: () => void;
}) {
  const t = useT();
  const SoundIcon = soundEnabled ? Volume2 : VolumeX;

  return (
    <nav id="md-index" className={open ? "md-index open" : "md-index"} aria-label={domain.training.sidebarLabel} inert={!open}>
      <ul className="md-index-list">
        <li>
          <button type="button" onClick={onHome}>
            <Home size={16} aria-hidden="true" />
            <span>{t("home")}</span>
          </button>
        </li>
        <li>
          <button type="button" className={progressActive ? "active" : undefined} aria-current={progressActive ? "page" : undefined} onClick={onOpenProgress}>
            <BarChart3 size={16} aria-hidden="true" />
            <span>{t("progress")}</span>
            <small>{progress.completedIds.length}</small>
          </button>
        </li>
      </ul>
      <h2 className="md-section-head">{t("sectionTracks")}</h2>
      <ul className="md-index-list">
        {domain.tracks.map((track) => {
          const summary = getTrackSummary(track.id, progress, domain);
          const active = !progressActive && activeId === track.id;
          return (
            <li key={track.id}>
              <button
                type="button"
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => onSelectTrack(track.id)}
              >
                <span className="md-mark">{getTrackMark(domain, track.id)}</span>
                <span>{track.title}</span>
                <small>
                  {summary.completed}/{summary.total}
                </small>
              </button>
            </li>
          );
        })}
      </ul>
      <h2 className="md-section-head">{t("sectionManuals")}</h2>
      <ManualList compact domain={domain} onSelect={onDomainChange} />
      <ul className="md-index-list">
        <li>
          <button type="button" onClick={onToggleSound} aria-pressed={soundEnabled}>
            <SoundIcon size={16} aria-hidden="true" />
            <span>{t("sound")}</span>
            <small>{soundEnabled ? t("on") : t("off")}</small>
          </button>
        </li>
      </ul>
    </nav>
  );
}

function ModeFlags({
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
    <div className="md-flags" role="group" aria-label={domain.training.modeLabel}>
      {modeOptions.map((mode) => (
        <button
          type="button"
          className={activeMode === mode.id ? "active" : undefined}
          aria-pressed={activeMode === mode.id}
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
        >
          <span>{t(mode.labelKey)}</span>
          <code>{mode.flag}</code>
        </button>
      ))}
    </div>
  );
}

function DrillBlock({
  drill,
  answer,
  feedback,
  hintVisible,
  position,
  total,
  inputRef,
  onAnswer,
  onChoose,
  onSubmit
}: {
  drill: LearningDrill;
  answer: string;
  feedback: Feedback;
  hintVisible: boolean;
  position: number;
  total: number;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onAnswer: (value: string) => void;
  onChoose: (value: string) => void;
  onSubmit: () => void;
}) {
  const solved = feedback.state === "correct";
  const t = useT();
  const feedbackLabel =
    feedback.state === "correct"
      ? t("feedbackCorrect")
      : feedback.state === "miss"
        ? t("feedbackMiss")
        : feedback.state === "empty"
          ? t("feedbackEmpty")
          : hintVisible
            ? t("hint")
            : "";
  const feedbackText = feedback.text || (hintVisible ? drill.hint : "");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <article className="md-drill" aria-labelledby="drill-title">
      <div className="md-drill-tag">
        <dl>
          <div>
            <dt>{t("drill")}</dt>
            <dd>
              {position}/{total}
            </dd>
          </div>
          <div>
            <dt>{t("level")}</dt>
            <dd>{drill.level}</dd>
          </div>
        </dl>
        <p className="md-drill-concept">{drill.concept}</p>
      </div>
      <div className="md-drill-body">
        <h3 id="drill-title">{renderInline(drill.prompt)}</h3>
        {drill.code ? <pre className="md-code">{drill.code}</pre> : null}
        {drill.mode === "input" ? (
          <form className="md-prompt-line" onSubmit={handleSubmit}>
            <label htmlFor="md-answer" className="md-visually-hidden">
              {t("typeAnswer")}
            </label>
            <span aria-hidden="true">$</span>
            <input
              id="md-answer"
              ref={inputRef}
              value={answer}
              disabled={solved}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="done"
              onChange={(event) => onAnswer(event.target.value)}
              placeholder={t("typeAnswer")}
            />
          </form>
        ) : (
          <ol className="md-choices" aria-label={t("answerChoices")}>
            {drill.choices.map((choice, index) => {
              const chosen = answer === choice;
              const state = chosen ? (solved ? "correct" : feedback.state === "miss" ? "miss" : "chosen") : "";
              return (
                <li key={choice}>
                  <button type="button" className={state || undefined} disabled={solved} aria-pressed={chosen} onClick={() => onChoose(choice)}>
                    <kbd>{index + 1}</kbd>
                    <span>{choice}</span>
                    {state === "correct" ? <Check size={18} aria-hidden="true" /> : null}
                    {state === "miss" ? <X size={18} aria-hidden="true" /> : null}
                  </button>
                </li>
              );
            })}
          </ol>
        )}
        <p className={`md-feedback ${feedback.state}${hintVisible && feedback.state === "idle" ? " hint" : ""}`} aria-live="polite">
          {feedbackLabel ? <b>{feedbackLabel}</b> : null}
          {feedbackText ? <span>{renderInline(feedbackText)}</span> : null}
        </p>
      </div>
    </article>
  );
}

function TrainingView({
  activeId,
  domain,
  mode,
  progress,
  soundEnabled,
  indexOpen,
  settingsOpen,
  controls,
  onCloseIndex,
  onToggleIndex,
  onDomainChange,
  onHome,
  onModeChange,
  onSelectTrack,
  onToggleSound,
  onOpenProgress,
  onProgress,
  play
}: {
  activeId: TrackId;
  domain: LearningDomain;
  mode: DrillMode;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  indexOpen: boolean;
  settingsOpen: boolean;
  controls: ReactNode;
  onCloseIndex: () => void;
  onToggleIndex: () => void;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onModeChange: (mode: DrillMode) => void;
  onSelectTrack: (id: TrackId) => void;
  onToggleSound: () => void;
  onOpenProgress: () => void;
  onProgress: (progress: ProgressSnapshot) => void;
  play: (sound: DojoSound) => void;
}) {
  const t = useT();
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>({ state: "idle", text: "" });
  const [currentDrillId, setCurrentDrillId] = useState<string | null>(null);
  const [hintVisible, setHintVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const modeDrills = useMemo(() => getTrackDrills(activeId, mode, domain), [activeId, domain, mode]);
  const nextDrill = useMemo(() => getNextDrill(activeId, mode, progress, domain), [activeId, domain, mode, progress]);
  const drill = useMemo(() => {
    return modeDrills.find((item) => item.id === currentDrillId) ?? nextDrill;
  }, [currentDrillId, modeDrills, nextDrill]);
  const position = Math.max(0, modeDrills.findIndex((item) => item.id === drill.id)) + 1;
  const summary = getTrackSummary(activeId, progress, domain);
  const track = getTrack(domain, activeId);
  const trackNumber = getTrackNumber(domain, activeId);
  const solved = feedback.state === "correct";

  useEffect(() => {
    setCurrentDrillId(null);
    setAnswer("");
    setFeedback({ state: "idle", text: "" });
    setHintVisible(false);
  }, [activeId, domain.id, mode]);

  // Put the caret in the answer field for typed drills on pointer devices;
  // on touch screens this would pop the keyboard over the question.
  useEffect(() => {
    if (drill.mode !== "input" || solved) return;
    if (window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
  }, [drill.id, drill.mode, solved]);

  function submitAnswer(value: string) {
    if (isBlankAnswer(value)) {
      play("tap");
      setFeedback({ state: "empty", text: t("emptyAnswer") });
      if (drill.mode === "input") inputRef.current?.focus();
      return;
    }
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
    setHintVisible(false);
  }

  function chooseAnswer(value: string) {
    play("tap");
    setAnswer(value);
    if (drill.mode !== "input") submitAnswer(value);
  }

  function showHint() {
    play("tap");
    setHintVisible(true);
  }

  function primaryAction() {
    if (solved) advanceDrill();
    else submitAnswer(answer);
  }

  // Keyboard-first drilling, `less` style. Handlers read the latest render via a ref.
  const keyHandler = useRef<(event: KeyboardEvent) => void>(() => {});
  keyHandler.current = (event: KeyboardEvent) => {
    if (settingsOpen || event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target as HTMLElement | null;
    const typing = !!target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
    // Enter on a focused button is that button's own click.
    if (event.key === "Enter" && target?.tagName === "BUTTON") return;
    const action = resolveDrillKey(event.key, { mode: drill.mode, choiceCount: drill.choices.length, solved, typing });
    if (!action) return;
    event.preventDefault();
    if (action.type === "choose") chooseAnswer(drill.choices[action.index]);
    else if (action.type === "hint") showHint();
    else primaryAction();
  };

  useEffect(() => {
    const listener = (event: KeyboardEvent) => keyHandler.current(event);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  const keyHint = solved ? t("keyHintsSolved") : drill.mode === "input" ? t("keyHintsInput") : t("keyHints");

  return (
    <div className="md-page md-app">
      <RunningHeader
        domain={domain}
        pageName={`${domain.brand.displayName.toUpperCase()}(${trackNumber})`}
        indexOpen={indexOpen}
        showIndexToggle
        onToggleIndex={onToggleIndex}
        onHome={onHome}
        controls={controls}
      />
      <div className={indexOpen ? "md-app-grid index-open" : "md-app-grid"}>
        {indexOpen ? <button type="button" className="md-scrim" aria-label={t("closeIndex")} onClick={onCloseIndex} /> : null}
        <IndexPanel
          activeId={activeId}
          domain={domain}
          progress={progress}
          progressActive={false}
          soundEnabled={soundEnabled}
          open={indexOpen}
          onDomainChange={onDomainChange}
          onHome={onHome}
          onOpenProgress={onOpenProgress}
          onSelectTrack={onSelectTrack}
          onToggleSound={onToggleSound}
        />
        <main className="md-main" aria-label={`${track.title} ${t("dojoLabel")}`}>
          <header className="md-track-head">
            <h2>
              <span className="md-mark">{getTrackMark(domain, track.id)}</span>
              {track.title}
            </h2>
            <p>
              {fillDomainTemplate(domain.training.welcomeBodyTemplate, {
                trackFocus: track.focus,
                subjectName: domain.subject.name
              })}
            </p>
          </header>
          <ModeFlags activeMode={mode} domain={domain} onModeChange={onModeChange} />
          <DrillBlock
            drill={drill}
            answer={answer}
            feedback={feedback}
            hintVisible={hintVisible}
            position={position}
            total={modeDrills.length}
            inputRef={inputRef}
            onAnswer={setAnswer}
            onChoose={chooseAnswer}
            onSubmit={primaryAction}
          />
          <div className="md-statusbar">
            <dl className="md-status-stats" aria-label={domain.training.progressLabel}>
              <div>
                <dt>{t("xp")}</dt>
                <dd>{progress.xp}</dd>
              </div>
              <div>
                <dt>{t("streak")}</dt>
                <dd>{progress.streak}</dd>
              </div>
              <div>
                <dt>{t("accuracy")}</dt>
                <dd>{getAccuracy(progress)}%</dd>
              </div>
              <div>
                <dt>{t("complete")}</dt>
                <dd>{summary.percent}%</dd>
              </div>
              <span className="md-keyhint">{keyHint}</span>
            </dl>
            <div className="md-status-actions">
              <button type="button" className="md-status-home" onClick={onHome}>
                {domain.training.actions.home}
              </button>
              <button type="button" className={hintVisible ? "active" : undefined} aria-pressed={hintVisible} disabled={solved} onClick={showHint}>
                {domain.training.actions.hint}
              </button>
              <button type="button" className="primary" onClick={primaryAction}>
                {solved ? domain.training.actions.next : domain.training.actions.check}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- progress ---------- */

const achievementDefs: Array<{ key: keyof LearningDomain["achievements"]; nameKey: UiStringKey; descKey: UiStringKey }> = [
  { key: "firstClear", nameKey: "achFirstClear", descKey: "achFirstClearDesc" },
  { key: "eightClears", nameKey: "achEightClears", descKey: "achEightClearsDesc" },
  { key: "allTracksStarted", nameKey: "achAllTracksStarted", descKey: "achAllTracksStartedDesc" },
  { key: "streakFive", nameKey: "achStreakFive", descKey: "achStreakFiveDesc" },
  { key: "highAccuracy", nameKey: "achHighAccuracy", descKey: "achHighAccuracyDesc" },
  { key: "fullMastery", nameKey: "achFullMastery", descKey: "achFullMasteryDesc" }
];

function StatTable({ rows, label }: { rows: Array<[string, string | number]>; label: string }) {
  return (
    <dl className="md-stat-table" aria-label={label}>
      {rows.map(([name, value]) => (
        <div key={name}>
          <dt>{name}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProgressTabsBar({ tab, onSelect }: { tab: ProgressTab; onSelect: (next: ProgressTab) => void }) {
  const t = useT();
  const tabs: Array<{ id: ProgressTab; labelKey: UiStringKey; Icon: typeof TrendingUp }> = [
    { id: "statistics", labelKey: "tabStats", Icon: TrendingUp },
    { id: "streak", labelKey: "tabStreak", Icon: Flame },
    { id: "achievements", labelKey: "tabAchievements", Icon: Trophy }
  ];

  return (
    <div className="md-flags" role="tablist" aria-label={t("progressViews")}>
      {tabs.map(({ id, labelKey, Icon }) => (
        <button
          type="button"
          role="tab"
          aria-selected={tab === id}
          className={tab === id ? "active" : undefined}
          key={id}
          onClick={() => onSelect(id)}
        >
          <Icon size={16} aria-hidden="true" />
          <span>{t(labelKey)}</span>
        </button>
      ))}
    </div>
  );
}

function EmptyProgress({ onStart }: { onStart: () => void }) {
  const t = useT();
  return (
    <section className="md-empty" aria-labelledby="md-empty-title">
      <img src={withBasePath("/art/empty-notebook.webp")} width={480} height={480} alt={t("emptyFigureAlt")} loading="lazy" decoding="async" />
      <div>
        <h3 id="md-empty-title">{t("emptyProgressTitle")}</h3>
        <p>{t("emptyProgressBody")}</p>
        <button type="button" className="md-continue compact" onClick={onStart}>
          <span className="md-continue-verb">{t("startTraining")}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function StatisticsPanel({ domain, progress }: { domain: LearningDomain; progress: ProgressSnapshot }) {
  const t = useT();
  const totalDrills = domain.drills.length;
  const completed = progress.completedIds.length;
  const overallPercent = totalDrills === 0 ? 0 : Math.round((completed / totalDrills) * 100);

  return (
    <div className="md-panel">
      <StatTable
        label={t("overallStatistics")}
        rows={[
          [t("xp"), progress.xp],
          [t("attempts"), progress.attempts],
          [t("correct"), progress.correct],
          [t("accuracy"), `${getAccuracy(progress)}%`],
          [t("cleared"), `${completed}/${totalDrills}`],
          [t("complete"), `${overallPercent}%`]
        ]}
      />
      <section className="md-section" aria-labelledby="md-track-completion">
        <h3 id="md-track-completion" className="md-section-head">
          {t("tracksHeading")}
        </h3>
        <ol className="md-tracks static">
          {domain.tracks.map((track) => {
            const summary = getTrackSummary(track.id, progress, domain);
            return (
              <li key={track.id}>
                <div className="md-track">
                  <span className="md-track-num">{getTrackNumber(domain, track.id)}</span>
                  <span className="md-mark">{getTrackMark(domain, track.id)}</span>
                  <span className="md-track-text">
                    <strong>{track.title}</strong>
                    <small>{track.level}</small>
                  </span>
                  <span className="md-track-meter">
                    <CellMeter percent={summary.percent} label={`${summary.completed}/${summary.total} ${t("drillsDone")}`} />
                    <small>
                      {summary.completed}/{summary.total}
                    </small>
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}

function StreakPanel({ progress }: { progress: ProgressSnapshot }) {
  const t = useT();
  return (
    <div className="md-panel md-streak">
      <p className="md-streak-figure" aria-label={`${t("currentStreakAria")}: ${progress.streak}`}>
        <Flame size={36} aria-hidden="true" />
        <strong>{progress.streak}</strong>
        <span>{t("currentStreakLabel")}</span>
      </p>
      <StatTable
        label={t("streakStatistics")}
        rows={[
          [t("current"), progress.streak],
          [t("best"), progress.bestStreak],
          [t("attempts"), progress.attempts],
          [t("correct"), progress.correct]
        ]}
      />
    </div>
  );
}

function AchievementsPanel({ domain, progress }: { domain: LearningDomain; progress: ProgressSnapshot }) {
  const t = useT();
  const unlocked = new Set(getUnlockedAchievements(progress, domain));

  return (
    <ul className="md-panel md-achievements" aria-label={t("achievementsAria")}>
      {achievementDefs.map(({ key, nameKey, descKey }) => {
        const isUnlocked = unlocked.has(domain.achievements[key]);
        const Icon = isUnlocked ? Check : Lock;
        return (
          <li className={isUnlocked ? "unlocked" : undefined} key={key}>
            <Icon size={16} aria-hidden="true" />
            <strong>{t(nameKey)}</strong>
            <span>{t(descKey)}</span>
            <em>{isUnlocked ? t("unlocked") : t("locked")}</em>
          </li>
        );
      })}
    </ul>
  );
}

function ProgressView({
  activeId,
  domain,
  progress,
  soundEnabled,
  indexOpen,
  tab,
  controls,
  onCloseIndex,
  onToggleIndex,
  onDomainChange,
  onHome,
  onSelectTrack,
  onTabChange,
  onToggleSound,
  play
}: {
  activeId: TrackId;
  domain: LearningDomain;
  progress: ProgressSnapshot;
  soundEnabled: boolean;
  indexOpen: boolean;
  tab: ProgressTab;
  controls: ReactNode;
  onCloseIndex: () => void;
  onToggleIndex: () => void;
  onDomainChange: (domainId: string) => void;
  onHome: () => void;
  onSelectTrack: (id: TrackId) => void;
  onTabChange: (next: ProgressTab) => void;
  onToggleSound: () => void;
  play: (sound: DojoSound) => void;
}) {
  const t = useT();
  const empty = progress.attempts === 0;

  return (
    <div className="md-page md-app">
      <RunningHeader
        domain={domain}
        pageName={domain.brand.displayName.toUpperCase()}
        indexOpen={indexOpen}
        showIndexToggle
        onToggleIndex={onToggleIndex}
        onHome={onHome}
        controls={controls}
      />
      <div className={indexOpen ? "md-app-grid index-open" : "md-app-grid"}>
        {indexOpen ? <button type="button" className="md-scrim" aria-label={t("closeIndex")} onClick={onCloseIndex} /> : null}
        <IndexPanel
          activeId={activeId}
          domain={domain}
          progress={progress}
          progressActive
          soundEnabled={soundEnabled}
          open={indexOpen}
          onDomainChange={onDomainChange}
          onHome={onHome}
          onOpenProgress={() => play("tap")}
          onSelectTrack={onSelectTrack}
          onToggleSound={onToggleSound}
        />
        <main className="md-main" aria-label={t("progressViews")}>
          <header className="md-track-head">
            <h2>
              <span className="md-mark">
                <BarChart3 size={20} aria-hidden="true" />
              </span>
              {t("progress")}
            </h2>
          </header>
          {empty ? (
            <EmptyProgress onStart={() => onSelectTrack(activeId)} />
          ) : (
            <>
              <ProgressTabsBar tab={tab} onSelect={onTabChange} />
              {tab === "statistics" ? <StatisticsPanel domain={domain} progress={progress} /> : null}
              {tab === "streak" ? <StreakPanel progress={progress} /> : null}
              {tab === "achievements" ? <AchievementsPanel domain={domain} progress={progress} /> : null}
            </>
          )}
        </main>
      </div>
      <RunningFooter domain={domain} />
    </div>
  );
}

/* ---------- settings ---------- */

function SettingsDialog({
  domain,
  open,
  theme,
  soundEnabled,
  onClose,
  onToggleTheme,
  onToggleSound,
  onResetProgress
}: {
  domain: LearningDomain;
  open: boolean;
  theme: ThemeMode;
  soundEnabled: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  onToggleSound: () => void;
  onResetProgress: () => void;
}) {
  const t = useT();
  const { toggleLang } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [confirming, setConfirming] = useState(false);

  // Native <dialog> gives Escape-to-close, a focus trap, and focus return for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    if (!open) setConfirming(false);
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="md-dialog"
      aria-labelledby="md-settings-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="md-dialog-inner">
        <header className="md-dialog-head">
          <h2 id="md-settings-title">{t("settings")}</h2>
          <button type="button" aria-label={t("closeSettings")} onClick={onClose}>
            <X size={18} aria-hidden="true" />
          </button>
        </header>
        <dl className="md-settings">
          <div>
            <dt>
              <strong>{t("themeTitle")}</strong>
              <small>{t("themeDesc")}</small>
            </dt>
            <dd>
              <button type="button" onClick={onToggleTheme}>
                {theme === "dark" ? t("dark") : t("light")}
              </button>
            </dd>
          </div>
          <div>
            <dt>
              <strong>{t("soundTitle")}</strong>
              <small>{t("soundDesc")}</small>
            </dt>
            <dd>
              <button type="button" aria-pressed={soundEnabled} onClick={onToggleSound}>
                {soundEnabled ? t("on") : t("off")}
              </button>
            </dd>
          </div>
          <div>
            <dt>
              <strong>{t("languageTitle")}</strong>
              <small>{t("languageDesc")}</small>
            </dt>
            <dd>
              <button type="button" aria-label={t("toggleLanguage")} onClick={toggleLang}>
                {t("languageName")}
              </button>
            </dd>
          </div>
          <div className={confirming ? "md-danger confirming" : "md-danger"}>
            <dt>
              <strong>{t("resetProgressTitle")}</strong>
              <small>{confirming ? t("resetConfirm") : t("resetProgressDesc").replace("{brand}", domain.brand.primaryName)}</small>
            </dt>
            <dd>
              {confirming ? (
                <>
                  <button type="button" autoFocus onClick={() => setConfirming(false)}>
                    {t("cancel")}
                  </button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => {
                      setConfirming(false);
                      onResetProgress();
                    }}
                  >
                    {t("confirmReset")}
                  </button>
                </>
              ) : (
                <button type="button" className="danger" onClick={() => setConfirming(true)}>
                  {t("reset")}
                </button>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </dialog>
  );
}

/* ---------- app ---------- */

export function PythonDojoApp() {
  const [view, setView] = useState<View>("home");
  const [domainId, setDomainId] = useState(defaultDomain.id);
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);
  const domain = useMemo(() => localizeDomain(getDomainById(domainId), lang), [domainId, lang]);
  const defaultTrackId = useMemo(() => getDefaultTrackId(domain), [domain]);
  const [mode, setMode] = useState<DrillMode>("pick");
  const [activeId, setActiveId] = useState<TrackId>(getDefaultTrackId(defaultDomain));
  const [ready, setReady] = useState(false);
  const [loadedStorageKey, setLoadedStorageKey] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressSnapshot>(emptyProgress);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [progressTab, setProgressTab] = useState<ProgressTab>("statistics");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [sessionRestored, setSessionRestored] = useState(false);
  const pendingSession = useRef<DojoSession | null>(null);
  const audio = useDojoAudio();

  // Restore where the learner left off (domain, track, mode) before the domain effect runs.
  useEffect(() => {
    const session = parseSession(window.localStorage.getItem(SESSION_STORAGE_KEY), learningDomains);
    if (session) {
      pendingSession.current = session;
      setDomainId(session.domainId);
    } else {
      setSessionRestored(true);
    }
    // Index starts open on wide screens, closed on phones.
    setIndexOpen(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  useEffect(() => {
    const pending = pendingSession.current;
    if (pending && pending.domainId === domain.id) {
      setActiveId(domain.tracks.some((track) => track.id === pending.trackId) ? pending.trackId : defaultTrackId);
      setMode(pending.mode);
      pendingSession.current = null;
      setSessionRestored(true);
    } else if (!pending) {
      setActiveId(defaultTrackId);
      setMode("pick");
    }
    setProgress(readProgress(window.localStorage.getItem(domain.storageKey)));
    setLoadedStorageKey(domain.storageKey);
    setReady(true);
    // domain.id and storageKey change together; language changes must not reset the track.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultTrackId, domain.storageKey]);

  useEffect(() => {
    if (ready && loadedStorageKey === domain.storageKey) {
      window.localStorage.setItem(domain.storageKey, JSON.stringify(progress));
    }
  }, [domain.storageKey, loadedStorageKey, progress, ready]);

  useEffect(() => {
    if (!sessionRestored) return;
    window.localStorage.setItem(SESSION_STORAGE_KEY, serializeSession({ domainId: domain.id, trackId: activeId, mode }));
  }, [activeId, domain.id, mode, sessionRestored]);

  useEffect(() => {
    const stored = window.localStorage.getItem("dojo-theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("dojo-theme", theme);
  }, [theme]);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(stored)) setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const language = useMemo(
    () => ({ lang, setLang, toggleLang: () => setLang((current) => otherLanguage(current)) }),
    [lang]
  );

  function closeIndexOnPhone() {
    if (!window.matchMedia("(min-width: 1024px)").matches) setIndexOpen(false);
  }

  function changeDomain(nextDomainId: string) {
    audio.play(nextDomainId === domain.id ? "tap" : "confirm");
    closeIndexOnPhone();
    if (nextDomainId === domain.id) return;

    setDomainId(nextDomainId);
    setView("home");
  }

  function startDojo(trackId: TrackId) {
    audio.play("confirm");
    setActiveId(trackId);
    setView("dojo");
    closeIndexOnPhone();
  }

  function changeMode(nextMode: DrillMode) {
    audio.play("tap");
    setMode(nextMode);
  }

  function goHome() {
    audio.play("tap");
    setView("home");
    closeIndexOnPhone();
  }

  function openProgress() {
    audio.play("confirm");
    setView("progress");
    closeIndexOnPhone();
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

  function toggleIndex() {
    audio.play("tap");
    setIndexOpen((current) => !current);
  }

  const controls = (
    <HeaderControls
      soundEnabled={audio.enabled}
      theme={theme}
      onToggleTheme={toggleTheme}
      onToggleSound={audio.toggleSound}
      onOpenSettings={openSettings}
    />
  );

  const screen =
    view === "home" ? (
      <HomeScreen
        activeId={activeId}
        domain={domain}
        mode={mode}
        progress={progress}
        controls={controls}
        onDomainChange={changeDomain}
        onHome={goHome}
        onStart={startDojo}
      />
    ) : view === "progress" ? (
      <ProgressView
        activeId={activeId}
        domain={domain}
        progress={progress}
        soundEnabled={audio.enabled}
        indexOpen={indexOpen}
        tab={progressTab}
        controls={controls}
        onCloseIndex={() => setIndexOpen(false)}
        onToggleIndex={toggleIndex}
        onDomainChange={changeDomain}
        onHome={goHome}
        onSelectTrack={startDojo}
        onTabChange={setProgressTab}
        onToggleSound={audio.toggleSound}
        play={audio.play}
      />
    ) : (
      <TrainingView
        activeId={activeId}
        domain={domain}
        mode={mode}
        progress={progress}
        soundEnabled={audio.enabled}
        indexOpen={indexOpen}
        settingsOpen={settingsOpen}
        controls={controls}
        onCloseIndex={() => setIndexOpen(false)}
        onToggleIndex={toggleIndex}
        onDomainChange={changeDomain}
        onHome={goHome}
        onModeChange={changeMode}
        onSelectTrack={startDojo}
        onToggleSound={audio.toggleSound}
        onOpenProgress={openProgress}
        onProgress={setProgress}
        play={audio.play}
      />
    );

  return (
    <LanguageContext.Provider value={language}>
      {screen}
      <SettingsDialog
        domain={domain}
        open={settingsOpen}
        theme={theme}
        soundEnabled={audio.enabled}
        onClose={() => setSettingsOpen(false)}
        onToggleTheme={toggleTheme}
        onToggleSound={audio.toggleSound}
        onResetProgress={resetProgress}
      />
    </LanguageContext.Provider>
  );
}
