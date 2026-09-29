# VELOOP Rewards — Design System & Visual Specification
**Task 11 — Mining Banner + 10-Level Achievement Badge Design**

---

## 1. Visual Identity & Brand Philosophy
The **VELOOP Rewards** visual system is designed to convey the sophistication, trustworthiness, and precision of an institutional fintech platform, elevated by the engaging thrill of high-value achievement loops.

### Prohibited Visual Anti-Patterns (Strictly Enforced)
To safeguard institutional credibility, the following visual devices are strictly prohibited:
- ❌ No neon lime greens (`#00FF00`) or neon magentas (`#FF00FF`).
- ❌ No rainbow or multi-hue spectrum gradients.
- ❌ No blinding, low-contrast neon outer glows.
- ❌ No arcade or casino flashing animations.
- ❌ No cartoon graphics (pickaxes, wooden minecarts, childish gems).
- ❌ No cheap mobile-game UI skeuomorphism.
- ❌ No generic stock photography.

---

## 2. Color Foundation & Tokens

```
┌────────────────────────────────────────────────────────────────────────┐
│                              PALETTE MAP                               │
│                                                                        │
│   [#161827] App Base          [#20263A] Mining Panel                   │
│   [#2A3042] Secondary UI      [#F2A900] Primary Reward Gold            │
│   [#F5F5F5] Primary Text      [#9AA4B8] Secondary Text                │
└────────────────────────────────────────────────────────────────────────┘
```

### Core Color Specifications
| Token Name | Hex Value | RGB Value | Purpose / Usage |
| :--- | :--- | :--- | :--- |
| `--bg-app` | `#161827` | `rgb(22, 24, 39)` | Master dark canvas background for all screens and frames |
| `--bg-mining-panel` | `#20263A` | `rgb(32, 38, 58)` | Primary background for the Mining Banner card |
| `--bg-secondary-ui` | `#2A3042` | `rgb(42, 48, 66)` | Telemetry tiles, sub-cards, modal containers, and inputs |
| `--gold-primary` | `#F2A900` | `rgb(242, 169, 0)` | Primary reward accent, MINE NOW CTA button, progression fills |
| `--text-primary` | `#F5F5F5` | `rgb(245, 245, 245)` | Headings, hero labels, primary values, active states |
| `--text-secondary` | `#9AA4B8` | `rgb(154, 164, 184)` | Supporting copy, descriptions, subheadings, unit labels |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | — | Card perimeters, dividers, and tile borders |
| `--border-gold-glow`| `rgba(242, 169, 0, 0.35)` | — | Hover borders, active badges, and focus rings |

### Gemstone & Metallic Accent Scale
| Material / Gemstone | Base Token | Accent Hex | Application |
| :--- | :--- | :--- | :--- |
| **Bronze** | `--brz-accent` | `#bf7d4e` | Level 01 First Step shield & monogram |
| **Silver** | `--slv-accent` | `#cbd5e1` | Level 02 Rising Star faceted rim |
| **Gold** | `--gld-accent` | `#F2A900` | Level 03 Reward Hunter royal laurels & VE tokens |
| **Platinum** | `--plt-accent` | `#94a3b8` | Level 04 Elite Earner aerodynamic wings |
| **Diamond** | `--dmd-accent` | `#38bdf8` | Level 05 High Achiever brilliant crystal cuts |
| **Emerald** | `--emr-accent` | `#10b981` | Level 06 Reward Master octagonal step cuts |
| **Sapphire** | `--sph-accent` | `#2563eb` | Level 07 Top Performer royal midnight blue |
| **Ruby** | `--rby-accent` | `#e11d48` | Level 08 Elite sovereign crimson gemstone |
| **Master** | `--mst-accent` | `#eab308` | Level 09 Master Achiever crown finial & cardinal gems |
| **Legend** | `--lgd-accent` | `#fbbf24` | Level 10 VELOOP Legend apex mythic crown & halo |

---

## 3. Typography: Inter
The entire platform employs **Inter** as its primary typeface to guarantee exceptional legibility across dense financial telemetry and micro-screens.

```
Font Family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Type Hierarchy Scale
| Level | Font Size | Line Height | Weight | Letter Spacing | CSS Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | 42px (2.625rem) | 1.15 | 800 (ExtraBold) | -0.025em | `.mining-heading` (Desktop) |
| **Display 2** | 32px (2.0rem) | 1.2 | 700 (Bold) | -0.02em | Section Titles, Modal Titles |
| **Heading 1** | 24px (1.5rem) | 1.25 | 700 (Bold) | -0.015em | `.card-title`, Previews |
| **Heading 2** | 20px (1.25rem) | 1.3 | 600 (SemiBold) | -0.01em | Sub-headers, Telemetry large |
| **Body Large** | 16px (1.0rem) | 1.5 | 400 / 500 | 0 | Supporting text, intros |
| **Body Default**| 14px (0.875rem) | 1.5 | 400 (Regular) | 0 | General card copy, table data |
| **Caption** | 12px (0.75rem) | 1.4 | 500 (Medium) | +0.02em | Labels, timestamps, tags |
| **Micro** | 10px (0.625rem) | 1.3 | 600 (SemiBold) | +0.05em (Uppercase) | Telemetry captions, status tags |

---

## 4. Spacing, Radii & Depth Tokens

### Spacing Scale (4px Base Grid)
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `20px`
- `--space-6`: `24px`
- `--space-8`: `32px`
- `--space-10`: `40px`
- `--space-12`: `48px`

### Corner Radii
- `--radius-xs`: `4px` (Small tags, status pills)
- `--radius-sm`: `8px` (Buttons, small inputs)
- `--radius-md`: `12px` (Telemetry tiles, secondary cards)
- `--radius-lg`: `16px` (Badge cards, profile widgets)
- `--radius-xl`: `24px` (Mining Banner container)
- `--radius-full`: `9999px` (Pills, badges, avatars)

### Elevation & Drop Shadows
- `--shadow-subtle`: `0 4px 12px rgba(0, 0, 0, 0.35)`
- `--shadow-medium`: `0 8px 24px rgba(0, 0, 0, 0.45)`
- `--shadow-card`: `0 16px 36px rgba(0, 0, 0, 0.55)`
- `--shadow-gold-cta`: `0 8px 24px rgba(242, 169, 0, 0.4)`
- `--shadow-modal`: `0 24px 64px rgba(0, 0, 0, 0.75)`

---

## 5. Component Anatomy & Specifications

### 1. Primary Button: MINE NOW (`.btn-mining-cta`)
- **Dimensions**: Desktop Height `48px`, Padding `0 28px`, Border Radius `12px`.
- **Background**: Solid Gold Gradient (`linear-gradient(135deg, #F2A900, #d97706)`).
- **Text**: `14px`, SemiBold `600`, Color `#0f172a` (High-contrast dark ink).
- **Hover State**: Transform `translateY(-2px)`, Shadow `0 12px 28px rgba(242, 169, 0, 0.5)`.
- **Active / Mining State**: Background `#20263A`, Border `1px solid #F2A900`, Text `#F5F5F5`.

### 2. The Mining Banner Card (`.mining-banner-card`)
- **Desktop Dimensions**: Max-Width `1440px`, Height `410–450px` (Target `1440 × 430px`).
- **Tablet Dimensions**: Height `380–540px`.
- **Mobile Dimensions**: Stacked layout, Height `330–520px` (Target `375 × 500px`).
- **Background**: Panel `#20263A` with subtle radial lighting and circuit grid backdrop.
- **Border**: `1px solid rgba(255, 255, 255, 0.08)`.

### 3. Dual Progress Telemetry HUD
- **Linear Bar**: Height `8px`, Track `#2A3042`, Fill Gold Gradient (`#F2A900` to `#d97706`), Radius `9999px`.
- **SVG Circular Ring**: Diameter `44px`, Stroke `4px`, Dasharray `113.1`, Centered Lightning Bolt icon.
- **Values Displayed**: Percentage (`75%`), Hash rate (`98.4 GH/s`), Live countdown (`45:20 remaining`).

### 4. Badge Cards (`.badge-card`)
- **Dimensions**: Width `232px`, Height `310px`, Radius `16px`.
- **Background**: `#20263A`, Border `1px solid rgba(255, 255, 255, 0.08)`.
- **States**:
  1. *Unlocked*: Full color SVG, checkmark tag, active perks list.
  2. *Locked*: 45% opacity, grayscale filter, padlock tag, milestone requirement text.
  3. *Newly Unlocked*: 3D rotation, golden border aura, congratulations chime and confetti.

---

## 6. Responsive Behavior Principles
1. **Desktop (>= 1280px)**: Strict 2-column horizontal split. Telemetry & CTA on left (55% width), 3D Quantum Mining Station on right (45% width).
2. **Tablet (768px – 1024px)**: Rebalanced grid, scaling reactor down by 15%, keeping all telemetry tiles accessible.
3. **Mobile (320px – 480px)**: Vertical stack. Telemetry HUD stacks above full-width thumb CTA button. Reactor machine scales compactly to prevent viewport overflow. Zero horizontal scrollbar allowed.

---

## 7. Interaction & Motion Principles
- **Duration**: Fast micro-interactions: `150ms–250ms`; Major state transitions: `400ms–600ms`.
- **Easing**: Custom cubic-bezier `cubic-bezier(0.16, 1, 0.3, 1)` (spring-damped deceleration).
- **Audio Feedback**: Harmonic synthesized chime generated via browser Web Audio API on badge unlock. Zero external audio file download required.
