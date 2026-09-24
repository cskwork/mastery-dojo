---
name: MasteryDojo
description: A drill trainer set as a Unix manual page you can answer.
colors:
  terminal-paper: "#0f1114"
  terminal-paper-raised: "#171a1f"
  terminal-ink: "#e7e8e4"
  terminal-ink-muted: "#a9aeb6"
  terminal-ink-dim: "#858b95"
  terminal-rule: "#2a2e35"
  terminal-rule-strong: "#474d57"
  terminal-literal: "#9aa9ff"
  terminal-ok: "#5fd197"
  terminal-bad: "#ff8375"
  printed-paper: "#f2f3f0"
  printed-paper-raised: "#e7e9e5"
  printed-ink: "#15171b"
  printed-ink-muted: "#464c56"
  printed-ink-dim: "#5c636e"
  printed-rule: "#cdd0d3"
  printed-rule-strong: "#8f959e"
  printed-literal: "#2336c9"
  printed-ok: "#0b6e41"
  printed-bad: "#b3241a"
  status-action: "#2336c9"
  status-action-on-dark-bar: "#3f55ff"
typography:
  display:
    fontFamily: "Gothic A1, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.5rem + 4.8vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Gothic A1, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Gothic A1, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.05rem + 1.4vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Gothic A1, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Gothic A1, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    letterSpacing: "0.08em"
  literal:
    fontFamily: "Nanum Gothic Coding, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  hairline: "1px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  gutter: "clamp(16px, 4vw, 56px)"
components:
  button-reverse:
    backgroundColor: "{colors.terminal-ink}"
    textColor: "{colors.terminal-paper}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    height: "64px"
  button-reverse-hover:
    backgroundColor: "{colors.status-action}"
    textColor: "#ffffff"
  button-status-primary:
    backgroundColor: "{colors.status-action}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.terminal-ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  choice-option:
    backgroundColor: "transparent"
    textColor: "{colors.terminal-ink}"
    typography: "{typography.literal}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
    height: "58px"
  choice-option-correct:
    backgroundColor: "{colors.terminal-ok}"
    textColor: "{colors.terminal-paper}"
  answer-field:
    backgroundColor: "{colors.terminal-paper-raised}"
    textColor: "{colors.terminal-ink}"
    typography: "{typography.literal}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "58px"
---

# Design System: MasteryDojo

## Overview

**Creative North Star: "The Answerable Manual Page"**

Every domain is a manual page (`PYTHONDOJO(1)`), every track a numbered section, every drill mode a command flag (`-p -r -i -d`). The interface borrows the Unix manual's grammar, not its costume: a running header, bold section heads flush left with indented bodies, literals set in a Korean coding face, and reverse video wherever the learner's attention or selection sits. It is an Operate surface. The drill has to be readable at a glance on a phone in transit and at a desk, so structure does the work and decoration does none.

Density is moderate and ruled. Rows are separated by hairlines, never boxed in cards. Emphasis comes from scale contrast (a display-size prompt beside tiny monospaced tags) and from inversion (ink block, paper text), not from color. Color is reserved for literals and focus (ultramarine) and for answer states (green correct, red miss).

It replaced a KanaDojo-style look of rounded lavender cards floating on a scrolling token wall. That look is the anti-reference.

**Key Characteristics:**
- Two grounds: terminal man (graphite, default) and printed manual (cool grey-white). Both are complete themes.
- Reverse video marks selection, the active item, the Continue action, and the `less`-style status bar.
- Square corners everywhere; 1px rules; no shadows.
- Gothic A1 for prose and display; Nanum Gothic Coding for page names, marks, counts, code, answer options, and the typed prompt.
- Keyboard-first drilling: 1-4 choose, Enter checks or advances, H shows the hint.

## Colors

Restrained: two neutral grounds, one ink per ground, one ultramarine literal color, and two state colors.

### Primary
- **Terminal Literal Blue** (#9aa9ff) / **Printed Literal Blue** (#2336c9): inline code in prompts, track marks, domain marks, the `$` prompt, focus outlines, and text selection. Never a fill for large areas.
- **Status Action Blue** (#2336c9 on the pale dark-theme bar, #3f55ff on the ink light-theme bar): the one filled action, Check answer / Next drill, and the Continue bar's hover.

### Neutral
- **Terminal Paper** (#0f1114) and **Printed Paper** (#f2f3f0): the page ground.
- **Raised Paper** (#171a1f / #e7e9e5): code blocks, the answer field, row hover.
- **Ink** (#e7e8e4 / #15171b): body text and every reverse-video block.
- **Muted Ink** (#a9aeb6 / #464c56): prose paragraphs and descriptions.
- **Dim Ink** (#858b95 / #5c636e): metadata, counts, secondary labels (at least 4.5:1 on its ground).
- **Rule** (#2a2e35 / #cdd0d3) and **Strong Rule** (#474d57 / #8f959e): hairlines between rows, borders of flags, options, and meter cells.

### State
- **Correct** (#5fd197 / #0b6e41): the solved option fill and the Correct tag.
- **Miss** (#ff8375 / #b3241a): the missed option's border and struck text, the Not-yet tag, destructive settings actions.

### Named Rules
**The Reverse Video Rule.** Whatever is selected, active, or next is an ink block with paper text. Do not invent a second highlight style.

**The Literal Rule.** Ultramarine means "this is a literal or has focus." It never decorates headings or backgrounds.

## Typography

**Display / Body Font:** Gothic A1 (fallback Apple SD Gothic Neo, Malgun Gothic, system-ui)
**Literal Font:** Nanum Gothic Coding (fallback ui-monospace, Menlo)

**Character:** A Korean-native grotesque carries prose and display at heavy weights; the classic Korean coding face carries anything that is a literal, a count, or an answer. Korean text uses `word-break: keep-all` so lines break between words.

### Hierarchy
- **Display** (800, clamp(2.75rem → 5.25rem), 0.95): the domain brand on home only.
- **Headline** (800, clamp(1.75rem → 2.5rem), 1.1): track and page titles in the app shell.
- **Title** (700, clamp(1.375rem → 2.125rem), 1.35, max 34ch, balanced): the drill prompt.
- **Body** (400, clamp(1rem → 1.0625rem), 1.6, max 62ch): descriptions and feedback.
- **Label** (800, 0.8125rem, 0.08em tracking, uppercase for Latin): section heads such as DESCRIPTION, TRACKS, MANUALS.
- **Literal** (Nanum Gothic Coding 400/700, 0.75–1.125rem): page names, marks, counts, code, options, typed answers, running footer.

### Named Rules
**The Literal-Only Mono Rule.** Monospace appears only for things a terminal would print: code, answers, counts, page names, flags. Prose is never set in mono.

## Layout

A sticky running header (52px) holds the page name, the manual title (hidden under 720px), and a square control group. Home is a two-column grid at 1024px and up (content + 340px manual index), single column below. The app shell adds a 288px index column on desktop that can be collapsed; on phones the same index slides in over a scrim. Main content caps at 1080px with a fluid gutter of clamp(16px, 4vw, 56px). The drill uses a tag gutter (8.5rem) beside the body from 768px; below that the tag line moves under the question so the prompt comes first. A fixed status bar sits at the bottom with safe-area padding; main content reserves 160–180px so nothing hides behind it.

## Elevation & Depth

Flat. No shadows anywhere. Depth is expressed only by inversion (reverse video), by the raised-paper tone for code and fields, and by the scrim behind the phone index and the settings dialog.

## Shapes

Square corners throughout (0px). Every container is a 1px ruled edge or a solid ink block. Adjacent options and flags share borders (negative margins), so a group reads as one ruled table.

## Components

### Continue bar
Reverse-video full-width button (64px) naming the verb (Start / Continue), the track and mode, and the cleared count. Hover turns it Status Action Blue.

### Track rows
Ordered list separated by hairlines: numbered square (inverted when current), mark, title with level and drill count, and a 20-cell meter with an `n/total` count. The meter cells are filled blocks (Rule color empty, Ink filled), never outlined boxes.

### Mode flags and tabs
A single ruled row of equal buttons, each showing the mode name and its flag (`-p`); the active one is reverse video.

### Answer options
Monospaced rows with a `kbd` number key. Chosen: an ink fill sweeps left to right (180ms). Correct: the sweep is green with a check icon. Miss: red border, struck text, X icon.

### Answer field
A `$` prompt line: raised-paper field, mono 1.125rem, focus outline on the whole line.

### Status bar
The `less` status line: reverse video, tabular stats (XP, streak, accuracy, complete), a key hint on wide screens, and Home / Hint / Check-or-Next on the right. The primary action is the only filled color on the bar.

### Settings dialog
Native `<dialog>` with a reverse-video title bar; rows of label + description + outline button. Reset asks for confirmation inline before clearing.

## Do's and Don'ts

### Do:
- **Do** mark selection and the next action with reverse video (ink block, paper text).
- **Do** keep every corner at 0px and every divider at 1px.
- **Do** set code, answers, counts, and page names in Nanum Gothic Coding, prose in Gothic A1.
- **Do** keep both themes complete; the dark (terminal) ground is the default.
- **Do** keep the drill keyboard map (1-4, Enter, H) working when adding modes.

### Don't:
- **Don't** bring back rounded floating cards, glow, or the token-wall backdrop.
- **Don't** use shadows, gradients, or glass for depth.
- **Don't** use ultramarine as a background field or heading color.
- **Don't** put an eyebrow or kicker line above a heading; metadata lives in the tag gutter or after the content.
