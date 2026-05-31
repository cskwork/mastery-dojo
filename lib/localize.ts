import type { DojoCardConfig, LearningDomain, LearningDrill, LearningTrack } from "@/data/dojoTypes";
import { domainTextKo } from "@/data/i18n/ko";
import type { DomainTextKo } from "@/data/i18n/types";
import { localizeLevel, type Language } from "@/lib/i18n";
import { uiStrings } from "@/data/i18n/uiStrings";

// Generic Korean chrome shared by every domain, so per-domain overlays only carry
// domain-specific prose (welcome copy, cards, tracks, drills).
const FOOTER_LINK_LABELS_KO: Record<string, string> = {
  terms: "약관",
  privacy: "개인정보",
  security: "보안",
  "patch notes": "패치 노트",
  credits: "크레딧",
  about: "소개"
};

function localizeTrack(track: LearningTrack, overlay: DomainTextKo | undefined): LearningTrack {
  const text = overlay?.tracks[track.id];
  return {
    ...track,
    title: text?.title ?? track.title,
    focus: text?.focus ?? track.focus,
    level: text?.level ?? localizeLevel(track.level, "ko")
  };
}

function localizeCard(card: DojoCardConfig, overlay: DomainTextKo | undefined): DojoCardConfig {
  const text = overlay?.cards[card.id];
  return {
    ...card,
    label: text?.label ?? card.label,
    summary: text?.summary ?? card.summary
  };
}

function localizeDrill(drill: LearningDrill, overlay: DomainTextKo | undefined): LearningDrill {
  const text = overlay?.drills[drill.id];
  if (!text) return drill;

  // answer / choices / code / acceptedAnswers stay language-neutral.
  return {
    ...drill,
    concept: text.concept ?? drill.concept,
    prompt: text.prompt,
    hint: text.hint,
    explanation: text.explanation
  };
}

function localizeToKorean(domain: LearningDomain): LearningDomain {
  const overlay = domainTextKo[domain.id];
  const subjectName = overlay?.subjectName ?? domain.subject.name;

  return {
    ...domain,
    metadata: {
      ...domain.metadata,
      title: overlay?.metadata?.title ?? domain.metadata.title,
      description: overlay?.metadata?.description ?? domain.metadata.description
    },
    subject: { ...domain.subject, name: subjectName },
    home: {
      ...domain.home,
      ariaLabel: `${domain.brand.primaryName} 홈`,
      floatingActionLabel: overlay?.floatingActionLabel ?? `${domain.brand.primaryName} 훈련 시작`,
      welcomeTitle: overlay?.welcomeTitle ?? domain.home.welcomeTitle,
      welcomeBody: overlay?.welcomeBody ?? domain.home.welcomeBody,
      startTemplate: "아래에서 도장을 선택하고 지금 {trackLabel} 훈련을 시작하세요!",
      cards: domain.home.cards.map((card) => localizeCard(card, overlay))
    },
    training: {
      ...domain.training,
      sidebarLabel: `${domain.brand.primaryName} 내비게이션`,
      modeLabel: "훈련 모드",
      welcomeTitleTemplate: "{trackTitle} 도장에 오신 것을 환영합니다!",
      welcomeBodyTemplate: "{trackFocus}. 초급부터 숙련까지 짧은 {subjectName} 드릴로 훈련하세요.",
      progressLabel: "진행 요약",
      actions: {
        home: uiStrings.home.ko,
        hint: uiStrings.hint.ko,
        check: uiStrings.checkAnswer.ko,
        next: uiStrings.nextDrill.ko
      }
    },
    footer: {
      ...domain.footer,
      links: domain.footer.links.map((link) => ({
        ...link,
        label: FOOTER_LINK_LABELS_KO[link.label] ?? link.label
      })),
      communityAria: "커뮤니티",
      sourceAria: "소스",
      meta: overlay?.footerMeta ?? domain.footer.meta
    },
    tracks: domain.tracks.map((track) => localizeTrack(track, overlay)),
    drills: domain.drills.map((drill) => localizeDrill(drill, overlay))
  };
}

// Returns a fully localized copy of the domain. English is the canonical source,
// so "en" returns the domain unchanged.
export function localizeDomain(domain: LearningDomain, lang: Language): LearningDomain {
  if (lang === "en") return domain;
  return localizeToKorean(domain);
}
