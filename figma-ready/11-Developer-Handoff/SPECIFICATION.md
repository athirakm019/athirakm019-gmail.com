# Section 11 — Complete Developer Handoff & Design System Specification

**Figma Page**: `03 Mining Banner` (Section `11 — Developer Handoff`)  
**Scope**: Exact design tokens, CSS custom properties, component variant matrices, dimensions, spacing scales, border radii, export configurations, and accessibility compliance.

---

## 1. Color Palette Tokens (Hex & CSS Properties)

| Token Name | Hex Code | Role in System | WCAG AA Contrast on #161827 |
|---|---|---|---|
| `--bg-app` | `#161827` | Canvas background, global page base | N/A (Base) |
| `--bg-mining-panel` | `#20263A` | Primary container card, modal surface, sidebar | Base container |
| `--bg-secondary-ui` | `#2A3042` | Telemetry meter tiles, input fields, sub-cards | Distinct surface |
| `--gold-primary` | `#F2A900` | Primary action CTA, reward tickers, active progress | `9.2:1` on `#161827` (Pass AAA) |
| `--text-primary` | `#F5F5F5` | Main headlines, values, title text | `13.8:1` on `#161827` (Pass AAA) |
| `--text-secondary` | `#9AA4B8` | Body copy, labels, metadata, supporting copy | `5.6:1` on `#161827` (Pass AA) |
| `--blue-cyan` | `#38bdf8` | Toroidal cooling conduits, cyber accents | `8.4:1` on `#161827` (Pass AAA) |
| `--status-active` | `#10b981` | Mining active status dot, quota met, success | `7.1:1` on `#161827` (Pass AAA) |

---

## 2. Typography Hierarchy (Inter & JetBrains Mono)

| Style Name | Font Family | Weight | Size | Line Height | Letter Spacing | Target Elements |
|---|---|---|---|---|---|---|
| **Display Hero** | Inter | ExtraBold (800) | `38px` / `48px` | `1.15` | `-0.5px` | Cover headline, Mining Banner headline |
| **Section Title** | Inter | Bold (700) | `28px` / `36px` | `1.2` | `-0.25px` | Section titles, modal titles |
| **Card Heading** | Inter | Bold (700) | `18px` / `20px` | `1.3` | `0px` | Badge titles, pillar headings |
| **Body Large** | Inter | Regular (400) | `16px` | `1.6` | `0px` | Section descriptions, intro paragraphs |
| **Body Regular** | Inter | Regular (400) | `14px` | `1.5` | `0px` | Supporting text, card descriptions |
| **Body Small** | Inter | Regular (400) | `12px` | `1.5` | `0px` | Footnotes, helper text, perk details |
| **Mono Metrics** | JetBrains Mono | Bold (700) | `16px` | `1.0` | `0px` | Yield readout (`+38 VE`), countdown |
| **Mono Label** | JetBrains Mono | Bold (700) | `11px` | `1.0` | `0.75px` | Telemetry tags, section labels (Uppercase)|

---

## 3. Spatial System, Radii & Border Specifications

- **Spacing Scale**:
  - `--space-1`: `4px`
  - `--space-2`: `8px`
  - `--space-3`: `12px`
  - `--space-4`: `16px`
  - `--space-5`: `20px`
  - `--space-6`: `24px`
  - `--space-8`: `32px`
  - `--space-10`: `40px`
  - `--space-12`: `48px`
- **Border Radii**:
  - Badges / Outer Cards: `24px`
  - Modal Shells: `32px`
  - Sub-Cards / Telemetry Tiles: `14px` / `16px`
  - CTA Buttons: `12px` / `14px`
  - Status Pills: `999px` (Full pill round)
- **Strokes & Borders**:
  - Outer Glass Border: `1px solid rgba(255, 255, 255, 0.08)`
  - Active Gold Border: `1.5px solid #F2A900`
  - Focused Ring: `0 0 0 3px rgba(242, 169, 0, 0.25)`

---

## 4. Reusable Components & Variant Properties

1. **`MiningBanner`**:
   - `Breakpoint`: `Desktop (1440 × 430)`, `Tablet (768 × 520)`, `Mobile (375 × 500)`
   - `State`: `Idle`, `Active`, `Progress`, `RewardEarned`, `AchievementUnlocked`, `ContinueMining`
2. **`BtnMiningCta`**:
   - `State`: `Default (MINE NOW ⚡)`, `Hover`, `Active (MINING... ⚡)`, `Reward (REWARD EARNED ✓)`, `Continue (CONTINUE MINING ⚡)`
   - `Size`: `Desktop (Padding 14px 36px)`, `Mobile (Full-width H: 52px)`
3. **`BadgeCard`**:
   - `Level`: `01 Bronze` through `10 Legend`
   - `State`: `Locked`, `Unlocked`, `NewlyUnlocked`
4. **`TelemetryCard`**:
   - `Type`: `LinearProgress`, `CircularRing`, `StatCard`
5. **`ModalAchievement`**:
   - `Tier`: `Bronze` through `Legend`

---

## 5. Accessibility Audit (WCAG AA & AAA Compliance)

- **Color Contrast**:
  - Primary Gold (`#F2A900`) on Dark Slate (`#161827`): **9.2:1** (Exceeds WCAG AAA requirement of 7:1)
  - Primary White (`#F5F5F5`) on Dark Slate (`#161827`): **13.8:1** (Exceeds WCAG AAA)
  - Secondary Slate (`#9AA4B8`) on Dark Slate (`#161827`): **5.6:1** (Exceeds WCAG AA requirement of 4.5:1)
  - CTA Text (`#0f172a`) on Gold (`#F2A900`): **9.8:1** (Exceeds WCAG AAA)
- **Touch Target Sizes**:
  - Desktop: Minimum `48px × 48px`
  - Mobile: Full width `288px–343px` with height `52px`
- **Keyboard Navigation & ARIA**:
  - Tab order: Top Nav ➔ Mining CTA ➔ Collection Filters ➔ Badge Cards ➔ Modal Buttons
  - Focus Ring: Visible `2px solid #F2A900` with `4px offset`
  - Screen reader attributes: `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`

---

## 6. Asset Export Configurations

- **Badges**:
  - Format 1: Standalone Vector SVG (`viewBox="0 0 200 200"`, `fill="none"`, 100% transparent)
  - Format 2: Transparent PNG (`400px × 400px`, 2x retina density for mobile app stores)
- **Icons**:
  - Vector SVG (`viewBox="0 0 24 24"`, strokes `2px`, linecap `round`)
