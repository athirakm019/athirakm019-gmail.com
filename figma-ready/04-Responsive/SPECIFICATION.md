# Section 04 — Mining Banner Responsive Architecture

**Figma Page**: `03 Mining Banner` (Section / Frame `04 — Responsive Architecture`)  
**Scope**: 4 Multi-Breakpoint Layout Frames adapting ergonomic structure across viewports.

---

## 1. Breakpoint Specification Matrix

| Device Type | Figma Frame Name | Frame Dimensions | Layout Mode | Heading Size | Padding | Station Illustration Placement | Minimum Touch Target |
|---|---|---|---|---|---|---|---|
| **Desktop** | `Banner / 01 Desktop (1440)` | `1440px × 430px` | 2-Column Horizontal (`1.15fr / 0.85fr`) | `38px / 44px` | `48px 56px` | Right Column (500 × 330px) | `48px` height |
| **Tablet** | `Banner / 02 Tablet (768)` | `768px × 520px` | Rebalanced 2-Column or Stacked | `30px / 36px` | `36px 36px` | Compact Right / Center (340 × 240px) | `48px` height |
| **Mobile Standard**| `Banner / 03 Mobile (375)` | `375px × 500px` | Single-Column Vertical Stack | `24px / 28px` | `24px 20px` | Stacked Upper Center (200 × 160px) | `52px` full-width |
| **Mobile Compact** | `Banner / 04 Mobile (320)` | `320px × 540px` | Single-Column Vertical Micro | `21px / 26px` | `20px 16px` | Stacked Upper Center (170 × 140px) | `52px` full-width |

---

## 2. Responsive Adaptation Rules (Layout Evolution vs. Mere Scaling)

### A. Desktop (`1440 × 430px`):
- **Spatial Balance**: Wide horizontal arrangement separating telemetry and quantum machine visually.
- **Reading Order**: Eye moves left-to-right from Status Badge ➔ Heading ➔ Dual Telemetry ➔ Primary CTA ➔ Levitating Quantum Coin.
- **CTA Ergonomics**: Left-aligned primary button with trailing energy lightning glyph (`MINE NOW ⚡`).

### B. Tablet (`768 × 520px`):
- **Spatial Balance**: Reduced horizontal gaps (from 48px to 24px) while maintaining side-by-side prominence.
- **Telemetry Grouping**: The Dual Telemetry cards collapse from 332px each to 220px each or wrap neatly into stacked compact rows.
- **Illustration Scaling**: Reactor scale adjusted to `0.85×`, preserving legibility of HUD machine screen (`+38 VE`).

### C. Mobile (`375 × 500px`):
- **Layout Inversion**: Single-column vertical flow.
- **Order of Hierarchy**:
  1. Top Status Badge (`● STANDBY` / `● MINING ACTIVE`)
  2. Headline (`Start Mining. Start Earning.`)
  3. Compact Quantum Station reactor centered (`200 × 160px`)
  4. Stacked Telemetry (Linear progress track + circular countdown pill)
  5. Full-Width Sticky/Bottom CTA Button (`MINE NOW ⚡`, height: `52px` for thumb reachability)
- **Zero Clipping**: All text blocks set to `Auto Layout: Fill Container` with `Hug Contents` height.

### D. Ultra-Narrow Mobile (`320px`):
- **Padding Conservation**: Side margins tightened to `16px`.
- **Typography Sizing**: Headline scales to `21px` with `tight` letter spacing to prevent 4-line wrapping.
- **Touch Target Fidelity**: CTA maintains full `320 - 32 = 288px` width and `50px` height with font-size `13px` bold.
