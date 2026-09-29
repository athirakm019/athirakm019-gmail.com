# VELOOP Rewards — Requirements Traceability Matrix (RTM)
**Task 11 — Mining Banner + 10-Level Achievement Badge Design**

This document tracks every functional, UI/UX, visual, responsive, badge, prototype, and Figma requirement derived directly from the assignment specification.

---

| ID | Requirement Specification | Source / Section | Priority | Implementation Plan | Figma Requirement | Completion Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **REQ-01** | Primary app dark background `#161827` | Section 4 (Design Direction) | P0 (Critical) | Set as global canvas base in `css/tokens.css` and `css/main.css` | Frame 01–10 default fill `#161827` | Completed |
| **REQ-02** | Mining panel background `#20263A` | Section 4 & 5 | P0 (Critical) | Card container fill token `--bg-mining-panel: #20263A` | Mining card component fill `#20263A` | Completed |
| **REQ-03** | Secondary UI background `#2A3042` | Section 4 | P1 (High) | Telemetry tiles and secondary cards fill token `--bg-secondary-ui: #2A3042` | Sub-card components fill `#2A3042` | Completed |
| **REQ-04** | Primary reward gold accent `#F2A900` | Section 4 | P0 (Critical) | Token `--gold-primary: #F2A900` for CTA, rewards, indicators, progress fills | Primary color style `Gold/Primary #F2A900` | Completed |
| **REQ-05** | Primary text `#F5F5F5` & Secondary text `#9AA4B8` | Section 4 | P0 (Critical) | Set global text tokens `--text-primary: #F5F5F5` and `--text-secondary: #9AA4B8` | Typography styles with specified fills | Completed |
| **REQ-06** | Primary typography: Inter | Section 4 | P0 (Critical) | Import Google Font `Inter` with fallbacks; use across all headings and copy | Text style `Inter` (Regular, Medium, SemiBold, Bold) | Completed |
| **REQ-07** | Mining Banner Purpose: Communicate "This is where users can mine and earn VEs" | Section 5 (Mining Banner) | P0 (Critical) | Immediate visual clarity via bold heading, live telemetry, and active machine | Core Banner Frame 03 hero placement | Completed |
| **REQ-08** | Banner Desktop Dimensions: 100% width, 410–450px height (1440 × 430px) | Section 5 | P0 (Critical) | Responsive container with max-width 1440px, fixed desktop height 430px | Desktop frame 1440 × 430px | Completed |
| **REQ-09** | Banner Mobile Dimensions: 100% width, 330–520px height (~375 × 500px) | Section 5 | P0 (Critical) | Vertical stack media query at `<=480px`, min-height 480px | Mobile artboard 375 × 500px | Completed |
| **REQ-10** | Banner Tablet Dimensions: 100% width, 380–540px height | Section 5 | P1 (High) | Fluid grid media query at `768px–1024px` | Tablet artboard 768 × 480px | Completed |
| **REQ-11** | Banner Heading: `Start Mining Start Earning` | Section 5 | P0 (Critical) | Render as `H2` with gradient emphasis on `Start Earning` | Frame 03 Heading element | Completed |
| **REQ-12** | Banner Supporting Text: `Activate your session to earn VEs while staying engaged.` | Section 5 | P0 (Critical) | Precision subtext below heading | Frame 03 Body copy element | Completed |
| **REQ-13** | Banner Progress Label: `Mining Progress` with example `75%` | Section 5 | P0 (Critical) | Dedicated telemetry tile with label and dynamic percentage indicator | Telemetry HUD component | Completed |
| **REQ-14** | Banner Reward Indicator: `+38 VEs` | Section 5 | P0 (Critical) | Prominent golden reward readout with live ticker updates | Reward counter component | Completed |
| **REQ-15** | Banner Primary CTA: `MINE NOW` | Section 5 | P0 (Critical) | High-contrast gold button with hover state and click interaction | Primary CTA button variant | Completed |
| **REQ-16** | Futuristic Mining Station: Machine body, screen, VE indicator, main VE coin, smaller VE coins, active status | Section 5 | P0 (Critical) | Vector SVG + CSS 3D assembly with toroidal coils, holographic display, floating coins | Mining Station vector group | Completed |
| **REQ-17** | Machine Screen Display: `+38 VE` | Section 5 | P0 (Critical) | Centered digital HUD on machine screen | Machine Screen text element | Completed |
| **REQ-18** | Mining Station Status: `● MINING ACTIVE` | Section 5 | P0 (Critical) | Glowing emerald/gold status badge with pulsating dot | Status indicator variant | Completed |
| **REQ-19** | Mining Interaction: Complete 7-step sequence (START → MINE NOW → MINING ACTIVE → PROGRESS → REWARD → ACHIEVEMENT UNLOCKED → BADGE PROGRESSION → CONTINUE MINING) | Section 6 (Mining Interaction) | P0 (Critical) | JS state machine in `js/mining-station.js` and `js/bundle.js` with audio chime & confetti | Smart Animate Prototype connections | Completed |
| **REQ-20** | Responsive support: 320px+, 375px, 768px+, 1280px+, 1440px, 1920px | Section 7 (Responsive Design) | P0 (Critical) | CSS flex/grid layout + interactive live viewport switcher in Section 04 | Frame 04 multi-breakpoint showcase | Completed |
| **REQ-21** | 10 Exact Badge Tiers: Bronze (First Step), Silver (Rising Star), Gold (Reward Hunter), Platinum (Elite Earner), Diamond (High Achiever), Emerald (Reward Master), Sapphire (Top Performer), Ruby (Elite), Master (Master Achiever), Legend (VELOP Legend) | Section 8 (10-Level System) | P0 (Critical) | Strict adherence in data model `js/badge-system.js` and all cards | Frame 05 & 06 10-tier catalog | Completed |
| **REQ-22** | Badge Visual Hierarchy: Distinct materials from base bronze to imperial legend | Section 9 (Badge Design) | P0 (Critical) | Custom handcrafted vector SVGs with layered bevels, gemstones, and crowns | Frame 05 Badge design matrix | Completed |
| **REQ-23** | 100% Transparent Badge Assets: No solid white/black bounding boxes or cards | Section 10 (Transparent Assets) | P0 (Critical) | Standalone vector SVGs in `assets/badges/` on transparent `viewBox="0 0 200 200"` | Exportable SVG components | Completed |
| **REQ-24** | Badge Asset Naming: `bronze.svg`, `silver.svg`, `gold.svg`, `platinum.svg`, `diamond.svg`, `emerald.svg`, `sapphire.svg`, `ruby.svg`, `master.svg`, `legend.svg` | Section 10 | P0 (Critical) | Files saved with exact names in `assets/badges/` | Component names matching files | Completed |
| **REQ-25** | Badge States: 1. Locked, 2. Unlocked, 3. Newly Unlocked | Section 11 (Badge States) | P0 (Critical) | CSS filters, padlock overlay, celebratory modal and confetti triggers | Frame 07 component variants | Completed |
| **REQ-26** | Badge Collection Layout: Desktop 5 × 2 grid, Mobile 2-column | Section 12 (Badge Collection) | P0 (Critical) | Responsive grid with filter tabs (All, Unlocked, Locked) and surface switcher | Frame 06 5×2 master grid | Completed |
| **REQ-27** | Badge Progression: Linear connected path Bronze → Legend with gold indicators | Section 13 (Badge Progression) | P0 (Critical) | Horizontal connected node track with goal gradient ("2 more achievements to Platinum") | Frame 08 progression timeline | Completed |
| **REQ-28** | Usage Previews: 1. Dark dashboard, 2. Achievement section, 3. User profile, 4. Reward modal, 5. Notification | Section 14 (Usage Previews) | P0 (Critical) | Implemented in Section 09 with interactive modal and toast triggers | Frame 09 contextual mockups | Completed |
| **REQ-29** | Interactive Prototype Flow | Section 15 (Prototype) | P0 (Critical) | Complete clickable prototype demonstrating full mining-to-unlock cycle | Prototype interaction links | Completed |
| **REQ-30** | Figma Handoff Package: 10 structured frames (01 Cover to 10 Handoff) | Section 16 (Figma Requirements) | P0 (Critical) | Documented in `docs/FIGMA_HANDOFF.md` with explicit coordinates & styles | 10 Master Figma frames | Completed |
| **REQ-31** | Accessibility: WCAG AA contrast, keyboard nav, focus states, ARIA roles | Section 18 (Accessibility) | P1 (High) | Contrast verification >= 4.5:1, semantic HTML, ARIA progressbar, focus rings | Accessibility documentation | Completed |
| **REQ-32** | Prohibited Visuals: No neon green/pink, no rainbow gradients, no cartoon graphics | Section 4 | P0 (Critical) | Enforced across palette, badges, and particle effects | Design System compliance | Completed |
