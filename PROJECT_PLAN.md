# VELOOP Rewards — Complete Project Development Plan
**Task 11 — Mining Banner + 10-Level Achievement Badge Design**

## 1. Executive Summary
VELOOP Rewards is a next-generation fintech loyalty platform operating on a dark canvas (`#161827`). This project delivers:
1. **The Interactive Mining Banner (Part A)**: Real-time telemetry, responsive layout across all viewports, a futuristic quantum mining machine, and a continuous 7-stage reward cycle.
2. **The 10-Level Achievement Badge System (Part B)**: 10 heraldic vector SVG badges with 100% transparent backgrounds, locked/unlocked/newly unlocked states, a 5×2 collection grid, and a linear progression pathway.
3. **Usage Previews & Interactive Prototype (Part C)**: 5 real-world context previews (Dark Dashboard, Achievements, User Profile, Reward Modal, Notification Toast).
4. **Figma Developer Handoff Package**: Comprehensive frame dimensions, design tokens, Auto Layout specifications, component variants, and code-to-canvas architecture.

---

## 2. Technical Stack & Architecture
- **Markup**: Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`).
- **Styling**: Modular CSS3 with CSS Custom Properties (`tokens.css`, `main.css`, `mining-banner.css`, `badges.css`, `components.css`).
- **Vector Graphics**: Hand-crafted standalone SVGs with gradients, drop shadows, bevels, and 100% transparent canvases (`viewBox="0 0 200 200"`).
- **Interaction Engine**: Vanilla JavaScript (ES6+) with zero external dependencies. Dual support for modular imports and consolidated single-file distribution (`bundle.js`) to guarantee flawless offline execution over `file:///`.
- **Motion & Audio**: 60fps/120fps CSS transforms, Canvas particle engine, and Web Audio API synthesizer for harmonic celebratory chimes without external audio asset dependencies.

---

## 3. Phased Execution Roadmap

### Phase 1: Requirements Analysis & Specification
- Extract all functional, UI/UX, visual, responsive, badge, and Figma requirements into `REQUIREMENTS.md`.
- Formulate this comprehensive `PROJECT_PLAN.md`.

### Phase 2: Project Directory Structuring
- Organize folders: `css/`, `js/`, `assets/badges/`, `assets/icons/`, `assets/images/`, `docs/`, `screenshots/`.
- Establish dual naming for badge assets: clean names (`bronze.svg` to `legend.svg`) alongside numbered aliases.
- Provide `package.json` for npm users while maintaining zero-dependency offline execution.

### Phase 3: Research & Behavioral Science Synthesis
- Author `docs/RESEARCH.md`:
  - Octalysis Gamification Framework (Core Drives 2, 4, 6, 7).
  - Cross-industry benchmarking: Revolut, Robinhood, PlayStation, Steam, Apple Watch, Strava, Duolingo, Amex Centurion.
  - Progression pacing, status psychology, rarity tier distribution, and reward anticipation.

### Phase 4: Design Direction & Design System Documentation
- Author `docs/DESIGN_SYSTEM.md`:
  - Tokens: Background `#161827`, Mining panel `#20263A`, Secondary UI `#2A3042`, Gold `#F2A900`, Primary text `#F5F5F5`, Secondary text `#9AA4B8`.
  - Typography: `Inter` typography scale, weights, letter-spacing, line-heights.
  - Strict exclusion of non-fintech elements (no neon greens/pinks, no cartoon pickaxes).

### Phase 5: Mining Banner Implementation
- Desktop (1440 × 430px), Tablet (768 × 480px), Mobile (375 × 500px).
- Copy: Heading `Start Mining Start Earning`, Subtext `Activate your session to earn VEs while staying engaged.`, Progress `Mining Progress` (75%), Reward `+38 VEs`, CTA `MINE NOW`.
- Mining Station: Machine body, digital screen showing `+38 VE`, status `● MINING ACTIVE`, floating VE coin, smaller orbiting VE tokens, magnetic rings.

### Phase 6: Mining Interaction Flow Engine
- 7-Stage Reward Loop:
  `START` → `MINE NOW` → `MINING ACTIVE` → `PROGRESS` → `REWARD` → `ACHIEVEMENT UNLOCKED` → `BADGE PROGRESSION` → `CONTINUE MINING`.
- Ticking countdown timer, real-time incrementing VE counter, synchronized linear progress bar and SVG circular progress ring.

### Phase 7: Responsive Layout & Viewport Simulator
- Media queries covering 320px, 375px, 768px, 1280px, 1440px, 1920px.
- Interactive multi-breakpoint switcher for instant live validation.

### Phase 8 & 9: 10-Level Achievement System & Badge Design
- Strict adherence to 10 tier names:
  1. Level 01: Bronze (First Step)
  2. Level 02: Silver (Rising Star)
  3. Level 03: Gold (Reward Hunter)
  4. Level 04: Platinum (Elite Earner)
  5. Level 05: Diamond (High Achiever)
  6. Level 06: Emerald (Reward Master)
  7. Level 07: Sapphire (Top Performer)
  8. Level 08: Ruby (Elite)
  9. Level 09: Master (Master Achiever)
  10. Level 10: Legend (VELOP Legend)
- Distinct heraldic materials and progressive complexity.

### Phase 10: Standalone Transparent SVG Badges
- 10 pure vector SVGs saved in `assets/badges/` with transparent backgrounds.
- Surface background preview (Dark `#161827`, Light Silver `#F8FAFC`, Obsidian `#0B0E17`) validating zero background clipping.

### Phase 11: Badge States
- Locked (muted grayscale, padlock indicator, requirement modal).
- Unlocked (full luster, checkmark, perk readout).
- Newly Unlocked (congratulations modal, confetti burst, chime SFX).

### Phase 12: Badge Collection Grid
- 5 × 2 desktop grid, 2-column mobile layout.
- Filter tabs: All (10), Unlocked (3), Locked (7).
- Interactive hover tooltips.

### Phase 13: Badge Progression Track
- 10-step connected progression timeline with gold fill.
- Milestone proximity indicator ("2 more achievements to reach Platinum").

### Phase 14: Real-World Usage Previews
- 5 mockups: Dark Dashboard, Achievement Section, User Profile, Reward Modal, Notification Toast.

### Phase 15: Interactive Prototype
- Complete end-to-end interactive journey test runner.

### Phase 16 & 17: Figma Handoff & Code-to-Canvas Architecture
- Author `docs/FIGMA_HANDOFF.md` with 10 master frame specifications.
- Clean semantic DOM structure mapped to Figma frames and components.

### Phase 18: Accessibility (WCAG 2.1 AA)
- High contrast, focus rings, keyboard tab index, ARIA attributes.

### Phase 19: Comprehensive Testing
- Automated and manual verification across browsers and viewports.

### Phase 20: QA Audit & Final Review
- Author `docs/QA_REPORT.md` and `FINAL_CHECKLIST.md`.

---

## 4. Deliverables Checklist
- [x] `REQUIREMENTS.md` & `docs/REQUIREMENTS.md`
- [x] `PROJECT_PLAN.md` & `docs/PROJECT_PLAN.md`
- [ ] `docs/RESEARCH.md`
- [ ] `docs/DESIGN_SYSTEM.md`
- [ ] `docs/FIGMA_HANDOFF.md`
- [ ] `docs/QA_REPORT.md`
- [ ] `FINAL_CHECKLIST.md`
- [ ] `package.json`
- [ ] 10 Transparent SVGs (`bronze.svg` to `legend.svg`) in `assets/badges/`
- [ ] Updated `index.html`, `css/tokens.css`, `css/mining-banner.css`, `js/bundle.js`
