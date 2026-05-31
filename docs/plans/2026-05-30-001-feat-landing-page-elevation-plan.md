# feat: Nine Fives Landing Page Elevation

**Status:** partially executed (no-invent subset shipped 2026-05-31)
**Date:** 2026-05-30
**Type:** feat (design + frontend)
**Plan depth:** Deep
**Target file:** `index.html` (homepage) + `assets/css/*`, `assets/js/*`

---

## Execution Log — 2026-05-31

User constraint: **do not invent content; leave existing copy/products/sections as-is.** Executed the design-system, media-framing, hero-polish, performance, responsive, and accessibility work via three parallel composer agents with disjoint file ownership. The content-creating units (trust strip, differentiator trio, product grid, dev-proof/final-CTA, new footer content) are **deferred** because they require invented copy/products.

**Shipped:**
- **U1** Tokens: `--nf-accent` (`oklch(0.66 0.16 260)`), `--nf-accent-fill`, `--nf-surface-panel`, spacing tokens; `--font-heading-weight` → **700**; body tracking `0.06rem` → `0.005em`. *(`assets/css/theme-vars.css`)*
- **U2** New `assets/css/section-nf-home.css` (re-homed inline rules + new styling); removed two inline `<style>` blocks and pruned 5 unused render-blocking CSS links from `index.html`.
- **U3 (partial, no copy change)** Hero headline now renders bold + is the semantic `h1`; scroll-progress + spec labels recolored to accent; glassmorphism labels sharpened to zero-radius; **`prefers-reduced-motion` → static fallback** (verified). Headline text unchanged; CTAs/newsletter rewrite deferred (content).
- **U4** Media framing: bright videos now sit in dark instrument bezels (hairline border + panel + shadow, zero radius); videos got `preload="none"` + `loading="lazy"`; new `assets/js/nf-home.js` does IntersectionObserver play/pause + reduced-motion pause. *(captions omitted — would be invented content)*
- **U8 (defect-only)** Removed emoji glyphs from the "Stop installing, Start testing" heading; bold section headings. *(asymmetric relayout + copy rewrite deferred)*
- **U11** Perf/responsive: tablet (≤989px) now gets the static fallback instead of the 5.3 MiB 3D stack; three.js deferred to idle/first-interaction; mobile drawer visible without JS; video row stacks on phones; Assistant woff2 preloaded.
- **U12 (partial)** Single descriptive `h1`; OG/Twitter/canonical/Organization JSON-LD added reusing existing title + description (no invented copy).

**Deferred (require invented content):** U5 trust strip, U6 differentiator trio, U7 product grid, U9 final CTA, U10 footer content rebuild, and the copy rewrites within U3/U8.

---

## Execution Log — 2026-05-31 (round 2)

User directives: (1) **fix the hero's "weird spacing"** — make the scroll-driven 3D model **fill the screen, work on mobile, and feel more immersive**; (2) **implement the rest of the plan**, sourcing only from facts/data already present (no invented marketing copy); (3) **drop all copy rewrites** (U6 copy condensing, U3 hero headline, U8 feature copy are removed from scope entirely). Executed via three parallel composer agents, disjoint file ownership.

**New unit — U13. Immersive full-bleed hero (NEW, replaces U11's mobile-fallback decision):**
- Goal: 3D hero fills the viewport (`100dvh/svh`, no 960px letterbox, no 2:1 frame bands), the "weird spacing" after the scroll section is removed, and the live 3D runs on mobile (remove `model-3d-banner--desktop-only` gating). Keeps reduced-motion + no-WebGL2 static fallback.
- Files: `assets/css/section-model-3d-banner.css`, `assets/js/model-3d-banner.js`, `index.html` (class removal only).
- Note: this **reverses U11's tablet/mobile fallback decision** per explicit user request for an immersive mobile hero; the deferred-init + reduced-motion fallback are retained to bound the perf cost.

**U5 / U7 / U9 / U10 — now in scope (content sourced from existing data, not invented):**
- U5 Trust strip: existing facts only (YC, "Founded 2025", protocols SCPI/REST/Web UI/USB-C/PoE).
- U7 Product grid: the 8 modules + PD8X chassis pulled verbatim from `MODULE_LABELS`/`MODULE_DETAILS` in `model-3d-banner.js`; tiles link to `pages/catalog.html` and the two existing datasheet PDFs.
- U9 Final CTA: buttons using existing nav destinations (`pages/catalog.html`, `pages/contact.html`) + relocated newsletter; no new marketing copy.
- U10 Footer: columns built from existing header nav links + datasheets/docs, retaining the existing YC badge + legal disclaimer.

**Removed from scope (copy rewrites):** U6 differentiator trio, U3 hero headline/CTA copy, U8 feature-section copy. The hero intro copy is left untouched (only the section is made immersive).

---

## Summary

The Nine Fives homepage opens with a portfolio-grade, scroll-driven three.js 3D rack hero, then collapses into a generic Shopify-Dawn template: four identical centered-text-then-video blocks, bright UI captures slammed onto pure black, an emoji headline, no product showcase, buried social proof, and a newsletter email field as the *only* call to action on the entire page.

This plan **raises the post-hero page to the level of the hero** while protecting everything that already works. It keeps the dark industrial identity (`#0b0f14`, zero border-radius, Assistant typeface, the colorful logo) and the 3D hero intact, and adds the design hierarchy, committed color story, media art-direction, conversion architecture, performance discipline, and accessibility correctness the page currently lacks.

The plan was produced from a five-subagent design audit (browser screenshot capture + four parallel design-lens analysts applying `impeccable`, `ce-frontend-design`, and `emil-design-engineering`, two running on GPT 5.5). All raw reports and screenshots live in `docs/design-audit/`.

---

## Problem Frame

**Who is affected:** Engineers and procurement at RF/test labs evaluating networked test equipment from a YC-backed hardware startup. They need fast credibility (is this real, who's behind it), a way to see the products, and a path to act (catalog, datasheets, quote/demo, docs).

**What's wrong today:**
- The page establishes a flawless mood for one screen, then abandons it.
- It gives a serious technical buyer nothing to *do* except hand over an email.
- Bright media and an emoji headline actively undercut the "lab-grade instrument" impression the hero earns.
- It has correctness debt (no reduced-motion on the 3D hero, ~29 MiB eager media, a tablet/no-JS responsive bug) hiding under the polish.

**Goal:** An ambitious, on-brand homepage that feels like calibrated equipment end to end — memorable, technically credible, fast, accessible, and built to convert a B2B hardware buyer — without losing the hero or the identity.

**Scope decisions (confirmed via delegated authority — user asked to "be ambitious, think independently" and skipped the scope gate):**
- **Full restructure** (not polish-only). New sections are in scope.
- **Inventing plausible on-brand content/copy is allowed**, with CTAs wired to existing pages (`pages/catalog.html`, `pages/contact.html`, `pages/documentation.html`, `assets/docs/*.pdf`). Non-existent destinations (quote/demo) point at `pages/contact.html` as a stand-in.
- **Elevate into an improved original** — faithful-clone fidelity to ninefives.com is no longer a goal.

---

## Requirements

| ID | Requirement | Source |
|----|-------------|--------|
| R1 | Preserve the scroll-driven 3D hero, the near-black/zero-radius identity, the Assistant typeface, and the colorful logo. | All lenses ("what to preserve") |
| R2 | Every bright media element must be art-directed so it no longer slams onto pure black (dark bezel/frame, caption, or dark recapture). | impeccable P1, ce-frontend P0, emil Polish |
| R3 | Remove the emoji headline; convey meaning typographically. | impeccable P1, ce-frontend P0, emil A11y |
| R4 | Add a real B2B conversion path: primary CTAs (catalog / quote / docs) above the fold and at page end; newsletter demoted to secondary. | impeccable P0, ce-frontend P0 |
| R5 | Add a product lineup that surfaces the modules named in the hero and links to catalog + datasheets. | ce-frontend P0 |
| R6 | Surface YC + founding year + supported protocols as visible social/credibility proof, not a footer afterthought. | ce-frontend P1 |
| R7 | Commit to a single disciplined signal-blue accent derived from `#334fb4`, brightened for AA on dark, used <~15% of surface. | impeccable P1, ce-frontend P1 |
| R8 | Strengthen typography: 700-weight headings, larger display scale, tighter body tracking, capped line length. | impeccable P1, ce-frontend P1 |
| R9 | Break the repetitive centered text+video rhythm into varied, captioned, asymmetric sections. | impeccable P1, ce-frontend P1 |
| R10 | Add a real footer (nav, products, docs, contact, social, the existing trademark/legal). | ce-frontend P1 |
| R11 | Respect `prefers-reduced-motion` for the 3D hero and the autoplay videos. | emil P0/P2 |
| R12 | Cut page weight and eager loading: posters + lazy-load for the 6 videos, defer/conditionally load three.js, static fallback as LCP. | emil P1, tech P1 |
| R13 | Fix responsive bugs: tablet (750–989px) loading the full 3D stack; mobile drawer off-canvas under slow/failed JS; two-up videos too small on phones. | tech P1 |
| R14 | Fix semantics + SEO: descriptive H1, OG/Twitter/structured-data meta. | tech P2 |

---

## Key Technical Decisions

1. **Token-first, then components.** All visual changes flow from a small set of new/changed CSS custom properties (accent ramp, heading weight, spacing rhythm, media-frame). This keeps the existing Dawn token system authoritative and avoids scattering magic numbers. *(see `assets/css/theme-vars.css`)*

2. **One homepage stylesheet.** The scattered inline `<style>` blocks and one-off `nf-*` classes move into a new `assets/css/section-nf-home.css`. This is the home for all new section styling and the consolidation target for existing inline rules. Avoids growing the inline-style debt the audit flagged.

3. **Accent = brightened `#334fb4`.** Use `oklch(0.66 0.16 260)` (~`#5590f3`) for text/actions/focus/scroll-progress so it passes AA on `#0b0f14`; keep raw `#334fb4` only for large fills where contrast allows. Single accent, disciplined usage.

4. **Sharpness is non-negotiable.** Every new component (buttons, product tiles, media bezels, trust strip) uses `border-radius: 0`. The hero's rounded glassmorphism spec labels are corrected *toward* the system, not away from it.

5. **Progressive enhancement for the hero.** The static `hero-fallback.webp` becomes the guaranteed LCP element; three.js hydrates after first paint/idle and only when `(prefers-reduced-motion: no-preference)` and the viewport/capability warrants it. Reduced-motion and tablet users get the polished static composition.

6. **No test framework exists** (static site, no build). Verification is visual + behavioral via the local server (`python3 -m http.server 8923`), browser DevTools, contrast math, reduced-motion emulation, and Lighthouse-style spot checks. Each unit lists concrete verification steps instead of automated tests.

---

## High-Level Technical Design

### Current vs. proposed homepage sequence

```
CURRENT                              PROPOSED
─────────────────────────           ─────────────────────────────────────
Announcement bar                     Announcement bar
Header (sticky)                      Header (sticky)
3D hero + newsletter-only CTA   ──▶  3D hero + dual CTA (catalog / quote)   [U3]
                                     Trust strip (YC · 2025 · protocols)    [U5]
Rich text: Rack Config               Differentiator trio (3 up)            [U6]
Video: rack-config.mp4          ──▶  Product lineup grid (8 modules)       [U7]
Rich text: Stop installing (emoji)   Feature deep-dives (asymmetric,       [U8]
Video: stop-installing.mp4             captioned, framed media, no emoji)
Rich text: Choose interface          Developer proof (terminal) + final    [U9]
Videos: interface 1/2                  conversion CTA
Rich text: Enterprise Grade          Real footer (nav/products/docs/       [U10]
Videos: enterprise 1/2                 contact/social/legal)
Footer (trademark only)
```

### Accent + type token model

```
--nf-accent:        oklch(0.66 0.16 260)   /* ~#5590f3, AA on #0b0f14, for text/CTA/focus */
--nf-accent-fill:   #334fb4                 /* large fills only */
--nf-surface-panel: oklch(0.24 0.035 255)  /* ~#142030, media bezels & raised panels */
--font-heading-weight: 700                  /* was 400 */
--nf-h1: clamp(4rem, 6vw, 6rem)
--nf-h2: clamp(3.2rem, 5vw, 5rem)
--nf-space-section: clamp(10rem, 14vw, 18rem)   /* between major sections */
--nf-space-group:   clamp(3rem, 5vw, 6rem)      /* text-to-media within a section */
```

### Media-frame pattern (applies to every bright capture)

```
.nf-media-frame {
  background: var(--nf-surface-panel);
  border: 1px solid rgba(244,247,251,.14);
  box-shadow: 0 24px 80px rgba(0,0,0,.45);
  border-radius: 0;            /* identity */
}
.nf-media-frame__rail { /* optional 32px top label strip, instrument-style */ }
.nf-media-frame figcaption { /* what am I looking at */ }
```

*Directional guidance, not final implementation.*

---

## Output Structure

```
assets/css/
  section-nf-home.css        (NEW — all homepage section + new-component styling)
  theme-vars.css             (MODIFIED — accent ramp, heading weight, spacing tokens)
docs/
  design-audit/              (audit inputs: screenshots + per-lens reports)
  plans/
    2026-05-30-001-feat-landing-page-elevation-plan.md
index.html                   (MODIFIED — restructured sections, meta, CTAs, footer)
assets/js/
  model-3d-banner.js         (MODIFIED — reduced-motion + deferred/conditional load)
```

---

## Implementation Units

> No automated tests exist (static marketing site). Each unit's "Verify" steps are run against `http://localhost:8923/index.html`. Sequence by phase; U-IDs are stable.

### Phase 0 — Foundations

### U1. Design-token foundation
**Goal:** Establish the accent ramp, heading weight, spacing rhythm, and surface-panel tokens that every later unit consumes.
**Requirements:** R7, R8
**Dependencies:** none
**Files:** `assets/css/theme-vars.css`, `assets/css/section-nf-home.css` (new, token consumers)
**Approach:** Add `--nf-accent`, `--nf-accent-fill`, `--nf-surface-panel`, `--nf-space-section`, `--nf-space-group`, `--nf-media-border`. Change `--font-heading-weight` from `400` to `700`. Reduce body `letter-spacing` from `0.06rem` toward `0.005em` for prose (keep wider tracking on nav/labels via a utility class). Do not restyle components yet — just define and apply the type/tracking globals.
**Verify:** Headings across the page render bold; body paragraphs read tighter; accent token resolves to an AA-passing color on `#0b0f14` (contrast ≥ 4.5:1 for text use — check with DevTools/contrast tool).
**Test expectation:** none — token change verified visually + via contrast math.

### U2. Homepage stylesheet consolidation + CSS hygiene
**Goal:** Move scattered inline styles into one homepage stylesheet and stop loading CSS the homepage doesn't use.
**Requirements:** R12 (partial — render-blocking reduction)
**Dependencies:** U1
**Files:** `index.html` (remove inline `<style>` blocks at L29–48 & L430–442; prune unused `<link>`s), `assets/css/section-nf-home.css`
**Approach:** Relocate `.nf-rt-padding`, `.nf-cl-padding`, `.nf-video-*`, header overrides, utility-bar rules into `section-nf-home.css` with named tokens replacing magic numbers (`calc(40px*0.75)` → token). Remove homepage-unused component CSS links (cart-notification, price, predictive-search, slideshow, slider, list-payment) — confirm each is truly unused on `index.html` before removing.
**Verify:** Page renders identically to pre-change baseline (diff screenshots); Network panel shows fewer render-blocking CSS requests; no console errors; search modal + menu drawer still work (predictive-search/search CSS retained only if used).
**Test expectation:** none — verified by before/after visual diff + Network panel.

### Phase 1 — Hero & media (highest visual leverage)

### U3. Hero elevation
**Goal:** Make the hero's words match the rack: stronger headline, real CTAs, accent details, sharpened labels, and reduced-motion safety.
**Requirements:** R1, R3 (tone), R4, R7, R8, R11
**Dependencies:** U1
**Files:** `index.html` (the `model-3d-banner__intro` block L259–275, labels L249–257), `assets/css/section-model-3d-banner.css`, `assets/js/model-3d-banner.js`
**Approach:**
- Rewrite headline to a concrete claim, e.g. *"Networked RF test equipment that works the second you plug it in."* Keep one supporting line.
- Replace the newsletter-only block with a **CTA row**: primary "Explore the catalog" (`pages/catalog.html`, accent-fill, sharp, ~48–52px), secondary "Read the docs" (`pages/documentation.html`, 1px outline). Move newsletter to footer (U10).
- Recolor the scroll-progress indicator + per-module spec chips with `--nf-accent`.
- Sharpen `.model-3d-banner__label` to `border-radius: 0`, dark panel bg, 1px accent border (remove glassmorphism).
- In `model-3d-banner.js`: when `prefers-reduced-motion: reduce`, skip three.js init and present the static `hero-fallback.webp` composition with headline + CTAs.
**Verify:** Headline + two CTAs visible above the fold at 1440px and 390px; CTAs navigate correctly; scroll still drives rack assembly; spec labels are sharp-cornered and accent-bordered; with reduced-motion emulated, no 3D loads and the static hero shows headline + CTAs.
**Test expectation:** none — verified visually + via reduced-motion emulation + link checks.

### U4. Media art-direction framing
**Goal:** Stop every bright capture from slamming onto black; give media a dark instrument frame, a caption, and motion/perf manners.
**Requirements:** R2, R9 (partial), R11, R12 (partial)
**Dependencies:** U1, U2
**Files:** `assets/css/section-nf-home.css`, `index.html` (the video sections L299–387)
**Approach:** Introduce `.nf-media-frame` (dark panel bg, 1px hairline border, soft outer shadow, zero radius) wrapping every `<video>`/screenshot. Add `<figcaption>` labels ("NineVue rack configuration", "Driverless setup in 10s", etc.). Add `loading="lazy"`, `preload="none"`, and a `poster` frame to each video; pause/poster under `prefers-reduced-motion: reduce`. (Bright clips like the Windows settings capture get the heaviest framing/letterbox; dark terminal clips need only a hairline.)
**Verify:** No raw bright rectangle on black remains; each clip sits in a bezel with a caption; videos don't autoplay-fetch until near viewport (Network panel); reduced-motion shows posters, not playing loops.
**Test expectation:** none — verified visually + Network panel + reduced-motion emulation.

### Phase 2 — Conversion structure (net-new sections)

### U5. Trust strip
**Goal:** Borrow credibility in one glance directly under the hero.
**Requirements:** R6
**Dependencies:** U1
**Files:** `index.html` (new section after hero), `assets/css/section-nf-home.css`
**Approach:** Thin horizontal band reusing the `utility-bar--bottom-border` hairline treatment: "Backed by Y Combinator · Founded 2025 · SCPI · REST · Web UI · USB-C & PoE." Quiet, single row, accent used only on the YC mark or dividers.
**Verify:** Band renders full-width under the hero, wraps gracefully at 390px, links the YC mark to the YC company page.
**Test expectation:** none — visual + responsive check.

### U6. Differentiator trio
**Goal:** Replace the wall of sequential paragraphs with three scannable differentiators.
**Requirements:** R9
**Dependencies:** U1
**Files:** `index.html`, `assets/css/section-nf-home.css`
**Approach:** Three-column, left-aligned, cardless row: **Driverless** (first test in 10s), **Networked rack config** (version-controlled source of truth), **Enterprise + developer** (NI TestStand/Keysight *and* curl). Compresses the ideas currently spread across four text blocks. Stacks to one column on mobile.
**Verify:** Three columns at ≥750px, single column on mobile, no card chrome, headings 700-weight.
**Test expectation:** none — visual + responsive check.

### U7. Product lineup grid
**Goal:** Surface the 8 hero-named modules and let buyers reach catalog + datasheets — the single biggest content gap.
**Requirements:** R5, R4
**Dependencies:** U1
**Files:** `index.html`, `assets/css/section-nf-home.css`
**Approach:** Sharp-cornered grid of tiles (these *are* cards — each is a click target, satisfying the cardless-default exception). Each tile: model number (e.g. `POE-ATTEN-6G`), one spec line ("0–95.25 dB, 0.25 dB resolution"), link to `pages/catalog.html` and/or the relevant `assets/docs/*.pdf` datasheet where one exists. Hover = 1px accent tick/underline (`@media (hover: hover)` only). Use the spec text already present in the 3D scene as source of truth.
**Verify:** Grid shows the modules; each tile links correctly; hover affordance appears only on hover-capable devices; tap targets ≥44px; grid reflows to 2-up/1-up on smaller widths.
**Test expectation:** none — visual + link + tap-target check.

### U8. Feature deep-dive rework
**Goal:** Turn the four identical centered blocks into varied, captioned, asymmetric sections with corrected copy.
**Requirements:** R2, R3, R9
**Dependencies:** U1, U4
**Files:** `index.html` (sections L283–387), `assets/css/section-nf-home.css`
**Approach:** Alternate text-left/media-right and media-left/text-right using `grid-template-columns: minmax(28rem,42rem) 1fr`. Fold the four blocks into 2–3 escalating sections (explain → prove → deepen). Remove the emoji heading → typographic two-line lockup ("Stop installing drivers. / Start testing in 10 seconds."). Strip buzzwords ("reimagined", "Enterprise Grade", "bridge the gap") and the `&mdash;` toward literal proof copy. Apply `.nf-media-frame` (from U4) to all media.
**Verify:** No emoji in any heading; sections alternate alignment; copy contains no em-dashes/banned buzzwords; media framed + captioned; reads coherently top to bottom.
**Test expectation:** none — visual + copy review (grep for `&mdash;`, emoji, banned terms).

### U9. Developer proof + final conversion CTA
**Goal:** Use the strongest media (pyvisa/curl terminals) as the closing technical argument, then convert.
**Requirements:** R4, R9
**Dependencies:** U1, U4
**Files:** `index.html`, `assets/css/section-nf-home.css`
**Approach:** Promote the terminal section as "No drivers. Just `curl` and test." Follow with a final CTA block: primary "Request a quote / Talk to us" (`pages/contact.html`), secondary "Browse the catalog", tertiary newsletter opt-in.
**Verify:** Terminal section reads as proof; final CTA block present with working links; newsletter present but visually secondary.
**Test expectation:** none — visual + link check.

### U10. Real footer
**Goal:** Replace the trademark-only footer with an orienting, multi-column footer.
**Requirements:** R10
**Dependencies:** U1
**Files:** `index.html` (footer L391–423), `assets/css/section-footer.css` / `section-nf-home.css`
**Approach:** Use the existing `grid--4-col-tablet` (currently one cell filled). Columns: Products (catalog, datasheets), Docs (documentation, reference manuals), Company (about, contact), and a brand column with the YC badge + newsletter opt-in (relocated from hero) + the trademark/legal disclaimer it already holds.
**Verify:** Footer shows 4 columns at tablet+, stacks on mobile, all links resolve to existing pages/PDFs, legal text retained.
**Test expectation:** none — visual + link check.

### Phase 3 — Correctness & reach

### U11. Performance + responsive correctness
**Goal:** Cut eager weight and fix the real responsive bugs.
**Requirements:** R12, R13
**Dependencies:** U2, U3, U4
**Files:** `index.html`, `assets/css/section-model-3d-banner.css`, `assets/js/model-3d-banner.js`, `assets/css/component-menu-drawer.css`, `assets/css/section-nf-home.css`
**Approach:**
- Videos: confirm `preload="none"` + `poster` + IntersectionObserver play/pause (from U4) cover all 6; stack `.nf-video-row` to one column below tablet.
- Hero: gate three.js init behind capability + viewport; raise the desktop-only cutoff so tablets 750–989px get the static fallback (or gate on pointer/WebGL/device-memory). Mark `hero-fallback.webp` `fetchpriority="high"` as the LCP path; init three.js post-idle.
- Mobile drawer: make `details[open] > .menu-drawer` visible by default and treat `.menu-opening` as transition enhancement, so slow/failed JS doesn't leave nav off-canvas.
- Preload the two Assistant WOFF2 weights.
**Verify:** Network panel shows videos deferred until near-viewport; tablet width does not download the GLB/three.js stack; LCP is the fallback image; drawer opens even with JS throttled/disabled; videos stack on phones. Lighthouse perf score improves vs. baseline.
**Test expectation:** none — verified via Network panel, throttling, device-emulation, Lighthouse.

### U12. Accessibility + SEO + semantics
**Goal:** Close the semantic/SEO gaps surfaced by the audit.
**Requirements:** R11, R14
**Dependencies:** U3, U8
**Files:** `index.html` (`<head>` L1–67, hero heading, footer)
**Approach:** Make the hero marketing headline the page `h1` (logo becomes a non-heading link), keeping one H1 above the fold. Ensure any residual decorative glyphs are `aria-hidden`. Add OG + Twitter card meta, a richer `<title>`, canonical URL, and `Organization`/`Product` JSON-LD structured data with a social share image. Confirm autoplay videos respect reduced-motion (cross-check U4).
**Verify:** Exactly one descriptive H1; heading outline is logical; OG/Twitter tags present (validate with a card inspector or DOM check); JSON-LD parses; screen-reader pass on hero + headings reads cleanly (no "cross mark").
**Test expectation:** none — verified via DOM/heading-outline inspection, structured-data validation, screen-reader spot check.

---

## Scope Boundaries

**In scope:** Everything in U1–U12 above — the homepage (`index.html`) and the CSS/JS it depends on.

**Deferred to follow-up work:**
- Applying the same elevation to `pages/catalog.html`, `pages/about-us.html`, `pages/contact.html`, `pages/documentation.html` (the homepage sets the system; inner pages adopt it later).
- Re-recording bright UI captures against a dark application theme (U4 frames them as a faster interim fix; native dark recaptures are a larger media task).
- A build step / CSS bundling pipeline (U2 prunes and consolidates manually; tooling is a separate decision).
- Real backend wiring for newsletter/quote/demo forms (they remain inert per the clone's design).

**Outside this product's identity:**
- Light mode / lightening the surface — the near-black industrial theme is the brand.
- Rounded corners, soft cards, glassmorphism, gradient text — all violate the zero-radius sharp identity.
- A second typeface or a multi-color palette beyond the single signal-blue accent.

---

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Restructuring `index.html` breaks the 3D hero web component wiring | Hero is the crown jewel | Treat the `model-3d-banner` block as a sealed unit; change only its intro/labels (U3); regression-screenshot the hero after every hero-touching unit |
| Pruning CSS removes a class the homepage actually uses | Visual breakage | Before/after visual diff in U2; remove links one at a time, re-check search modal + drawer |
| Reduced-motion gating accidentally disables the hero for everyone | Loses the best asset | Test both `no-preference` and `reduce` explicitly; default path must keep 3D |
| Inventing product/CTA content drifts from real Nine Fives facts | Credibility | Source all specs/model numbers from the existing 3D scene + catalog; CTAs point only at existing pages; mark any placeholder copy clearly |
| Tablet hero cutoff change degrades a currently-working tablet experience | Regression | Confirm intended behavior (static fallback on tablet) is acceptable; verify the fallback composition looks finished at 768–989px |

---

## Verification Strategy (whole-page)

Run against `http://localhost:8923/index.html`:
1. **Visual regression** — capture the same shot set as `docs/design-audit/screenshots/` after each phase; the hero must stay pixel-stable.
2. **Reduced-motion** — emulate `prefers-reduced-motion: reduce`; hero + videos must be static, page must still convey everything.
3. **Responsive** — 390 / 768 / 990 / 1440; check drawer, video stacking, product grid reflow, no overflow.
4. **Contrast** — body text, captions, and accent-on-dark all ≥ AA.
5. **Performance** — Network panel (deferred video, no tablet GLB load) + a Lighthouse pass vs. baseline.
6. **A11y/SEO** — single descriptive H1, clean heading outline, OG/JSON-LD present, screen-reader spot check.

---

## Sources & Research

- `docs/design-audit/screenshots/` — desktop hero (0/29/81%), four content sections, captured during this audit.
- Five-subagent audit (1 browser capture + 4 analysts; impeccable & technical on GPT 5.5) applying `impeccable`, `ce-frontend-design`, and `emil-design-engineering`. Findings converged on: bright-media contrast (P0), missing conversion path + product grid (P0), emoji headline (P0), reduced-motion gap on the 3D hero (P0), flat typography + unused accent (P1), ~29 MiB eager media + tablet/no-JS responsive bugs (P1).
