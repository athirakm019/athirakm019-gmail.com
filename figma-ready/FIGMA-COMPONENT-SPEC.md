# VELOOP REWARDS — FIGMA MASTER COMPONENT SPECIFICATION
**Version:** 1.0.0  
**Design System Standard:** Atomic Design / 8pt Grid System  
**Design Tokens:** Dark Mode Luxury Fintech Gamification  
**Target Environment:** Figma Component Library & Design System Kit  

---

## 1. COMPONENT ARCHITECTURE OVERVIEW

All components in the VELOOP Rewards design system are structured following atomic design principles:
- **Atoms:** Buttons, Badges, Icons, Counters, Tooltips, Progress Segments
- **Molecules:** Metric Cards, State Indicators, Progression Track Nodes, Tier Ribbons
- **Organisms:** `MiningBanner`, `MiningStation`, `BadgeCardGrid`, `ProgressionTrack`, `AchievementModal`
- **Templates:** Master Breakpoint Shells (1440px Desktop, 768px Tablet, 375px Mobile)

Every component uses **Auto Layout v4**, **Component Properties** (Boolean, Text, Instance Swap, Variant), and strict resizing rules (`Fixed`, `Hug contents`, `Fill container`).

---

## 2. ATOM COMPONENTS

### 2.1 `BtnMiningCta` (Primary Interactive Button)
*The central call-to-action driving the proof-of-engagement mining loop.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `State` | Variant | `Idle`, `Hover`, `Mining (Active)`, `Claim Ready`, `Cooldown / Disabled` | `Idle` |
| `Size` | Variant | `Large (Desktop)`, `Medium (Tablet)`, `Small (Mobile)` | `Large (Desktop)` |
| `ShowIcon` | Boolean | `True`, `False` | `True` |
| `Label` | Text | Any string | `"START MINING"` |

#### Layout & Styling Specs
```
Large (Desktop):
- Auto Layout: Horizontal (Left-to-Right), Align: Center, Space Between: 10px
- Padding: Top/Bottom: 16px, Left/Right: 32px
- Min Width: 220px, Height: 54px
- Corner Radius: 12px
- Border: 1px Solid

Medium (Tablet):
- Padding: Top/Bottom: 14px, Left/Right: 24px
- Height: 48px, Corner Radius: 10px

Small (Mobile):
- Padding: Top/Bottom: 12px, Left/Right: 20px
- Height: 44px, Corner Radius: 8px, Width: Fill container (100%)
```

#### State Variant Tokens
1. **`State=Idle`**:
   - Fill: Solid `#F2A900`
   - Border: None
   - Text: Inter Bold 14px (caps), `#161827`, Letter Spacing: +0.08em
   - Icon: Pickaxe/Bolt glyph in `#161827`
   - Effect: Drop Shadow `0px 4px 16px rgba(242, 169, 0, 0.35)`
2. **`State=Hover`**:
   - Fill: Solid `#FFB81C` (High-radiance gold)
   - Effect: Drop Shadow `0px 6px 24px rgba(242, 169, 0, 0.55)`
   - Scale: 102% (or simulated via padding)
3. **`State=Mining (Active)`**:
   - Fill: Linear Gradient `90deg` from `#F2A900` to `#FF6B00` (Amber pulse)
   - Text: `"MINING ACTIVE (02:44:18)"` in `#161827`
   - Icon: Rotating sync spinner / pulse circle `#161827`
   - Effect: Drop Shadow `0px 0px 20px rgba(242, 169, 0, 0.40)`
4. **`State=Claim Ready`**:
   - Fill: Linear Gradient `135deg` from `#10B981` (Emerald) to `#059669`
   - Text: `"CLAIM +38.5 VE"` in `#FFFFFF`
   - Effect: Drop Shadow `0px 4px 20px rgba(16, 185, 129, 0.45)`
5. **`State=Cooldown / Disabled`**:
   - Fill: Solid `#20263A`
   - Border: 1px Solid `#2A3042`
   - Text: `"COOLDOWN (00:14:22)"` in `#9AA4B8`
   - Icon: Hourglass / lock glyph in `#9AA4B8`
   - Effect: None

---

### 2.2 `RewardCounter` (VE Coin Metric Display)
*Displays accumulated and claimable VELOOP Reward currency.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `Format` | Variant | `Balance (Header)`, `Mining Yield (Banner)`, `Badge Reward (Card)` | `Mining Yield` |
| `ShowCoinIcon` | Boolean | `True`, `False` | `True` |
| `Value` | Text | String | `"+38.50"` |
| `Unit` | Text | String | `"VE"` |

#### Layout & Styling Specs
```
- Auto Layout: Horizontal, Align: Center, Gap: 8px
- Coin Asset: Instance of 've-coin-gold.svg' (Size: 24x24px for Banner, 20x20px for Card, 18x18px for Header)
- Value Text:
  - Font: JetBrains Mono (or Inter Bold with tabular numerals)
  - Banner: 28px Bold, Color: #F5F5F5
  - Header: 18px SemiBold, Color: #F5F5F5
  - Card: 14px Bold, Color: #F2A900
- Unit Tag:
  - Background: rgba(242, 169, 0, 0.12), Border: 1px solid rgba(242, 169, 0, 0.30)
  - Padding: 2px 6px, Corner Radius: 4px
  - Text: 11px Bold Inter, Color: #F2A900
```

---

### 2.3 `ProgressBar` (Segmented & Linear Goal-Gradient)
*Visualizes mining progress toward the 3-hour session completion and badge milestones.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `Type` | Variant | `Segmented (Badge Tier)`, `Continuous (Timer Bar)` | `Continuous` |
| `Progress` | Variant | `0%`, `25%`, `50%`, `75%`, `100%` | `50%` |
| `ShowPercentage` | Boolean | `True`, `False` | `True` |

#### Layout & Styling Specs
```
Continuous (Timer Bar):
- Track Frame:
  - Auto Layout: Horizontal, Height: 8px, Width: Fill container
  - Background: #121420
  - Border: 1px Solid #2A3042
  - Corner Radius: 999px (Full pill)
- Fill Indicator:
  - Height: 100%
  - Width: Variant-driven (0%, 25%, 50%, 75%, 100%)
  - Fill: Linear Gradient (90deg, #F2A900 0%, #FFB81C 100%)
  - Effect: Outer Glow 0px 0px 8px rgba(242, 169, 0, 0.50)
  - Corner Radius: 999px

Segmented (10-Node Tier Track):
- Auto Layout: Horizontal, Gap: 6px, Height: 6px, Width: Fill container
- 10 Child Segments:
  - Height: 100%, Width: Fill (Equal flex distribution)
  - Corner Radius: 3px
  - Inactive Segment: Fill #2A3042
  - Active/Completed Segment: Fill #F2A900 (Glow: 0px 0px 4px rgba(242, 169, 0, 0.40))
  - Current Segment: Fill #FFB81C with pulsing 1px stroke
```

---

### 2.4 `BadgeDetailsTooltip` (Desktop Hover State)
*Displays tier unlock requirements and reward perks upon hovering any badge node.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `BadgeTier` | Variant | `Bronze` through `Legend` (10 options) | `Silver` |
| `LockStatus` | Variant | `Locked`, `Unlocked` | `Unlocked` |

#### Layout & Styling Specs
```
- Frame Specs:
  - Auto Layout: Vertical, Gap: 6px, Padding: 12px 16px
  - Corner Radius: 10px
  - Fill: #161827 (95% Opacity with 16px Background Blur)
  - Border: 1px Solid #2A3042
  - Effect: Drop Shadow 0px 12px 32px rgba(0, 0, 0, 0.65)
  - Max Width: 240px
- Child Elements:
  1. Header Row (Auto Layout Horizontal, Space Between):
     - Badge Name: Inter SemiBold 13px, Color: #F5F5F5
     - Status Badge: Inter Medium 10px, (Locked: #9AA4B8 / Unlocked: #10B981)
  2. Requirement Row:
     - Text: Inter Regular 11px, Color: #9AA4B8
     - Example: "Requires: 15 Mining Sessions"
  3. Perk / Reward Tag:
     - Fill: rgba(242, 169, 0, 0.10), Border: 1px Solid rgba(242, 169, 0, 0.25)
     - Padding: 3px 8px, Corner Radius: 4px
     - Text: Inter Bold 10px, Color: #F2A900 ("Perk: +10% Yield Boost")
```

---

## 3. MOLECULE & ORGANISM COMPONENTS

### 3.1 `MiningStation` (Quantum Toroidal Reactor Organism)
*The visual centerpiece machine on the right side of the Mining Banner.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `State` | Variant | `Idle / Offline`, `Active Mining`, `Ready to Claim` | `Active Mining` |
| `Breakpoint` | Variant | `Desktop (340px)`, `Tablet (280px)`, `Mobile (160px)` | `Desktop` |

#### Nested Layer Hierarchy
```
MiningStation (Frame, Auto Layout: Center, Center)
│
├── MachineGlowAura (Vector, Radial Gradient: Center #F2A900 [0.18], Outer transparent)
│
├── QuantumReactorSilhouette (Vector Instance: 'mining-station-reactor.svg')
│   ├── OuterShieldRing (Stroke: #2A3042 2px, Segment Accents: #F2A900)
│   ├── FluxCoils (3x Symmetrical Coils, Fill: Metallic Titanium #343C54)
│   ├── CoreChamber (Circle, Linear Gradient: #161827 to #20263A)
│   └── ToroidalEnergyPlasma (Ring Vector, Pulsing Glow #F2A900 with #FF8400 Highlights)
│
├── FloatingHUDDisplay (Frame, Auto Layout: Vertical, Absolute Positioned top-center)
│   ├── StatusPill (Auto Layout Horizontal, Fill: rgba(22, 24, 39, 0.90), Border: #2A3042)
│   │   ├── StatusDot (Circle 6x6px, Fill: #10B981 [Active] / #9AA4B8 [Idle])
│   │   └── StatusLabel (Text: "● MINING ACTIVE" Inter Bold 9px)
│   └── LiveYieldCounter (Text: "+38.50 VE" JetBrains Mono Bold 14px, #F2A900)
│
└── LevitatingCoinGroup (Frame, Floats above reactor core)
    └── VECoinGold (Vector Instance: 've-coin-gold.svg', 48x48px, Drop Shadow: Gold glow)
```

---

### 3.2 `MiningBanner` (Primary Master Banner Organism)
*The responsive showcase component spanning the top of the dashboard.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `State` | Variant | `Idle`, `Active`, `ClaimReady`, `Completed` | `Active` |
| `Breakpoint` | Variant | `Desktop (1440px)`, `Tablet (768px)`, `Mobile (375px)` | `Desktop` |
| `ShowStation` | Boolean | `True`, `False` | `True` |

#### Auto Layout Structure (Desktop Variant: 1440 × 430px)
```
MiningBanner (Frame: Width Fill/1440px, Height Fixed 430px)
- Fill: #20263A
- Border: 1px Solid #2A3042
- Corner Radius: 20px
- Padding: 40px 48px
- Layout: Horizontal, Space Between, Align Center
- Clip Content: True
- Effects: Drop Shadow 0px 16px 40px rgba(0, 0, 0, 0.45), Inner Glow 0px 1px 0px rgba(255, 255, 255, 0.06)

├── LeftColumnContent (Frame: Auto Layout Vertical, Width: 600px, Gap: 20px)
│   ├── TopMetaRow (Auto Layout Horizontal, Gap: 12px, Align: Center)
│   │   ├── SessionPill (Fill: rgba(242, 169, 0, 0.12), Border: #F2A900, Text: "SESSION #08")
│   │   └── TierIndicator (Fill: #2A3042, Text: "LEVEL 2: SILVER TIER")
│   ├── Headline ("Quantum Mining Active", Inter Bold 36px, #F5F5F5)
│   ├── Subtitle ("Proof-of-engagement yields 12.83 VE per hour. Next badge unlock at 50 VE.", Inter Regular 15px, #9AA4B8)
│   ├── MiningMetricsRow (Auto Layout Horizontal, Gap: 24px)
│   │   ├── MetricA: ("HOURLY RATE", "12.83 VE/h")
│   │   ├── MetricB: ("ESTIMATED YIELD", "+38.50 VE")
│   │   └── MetricC: ("TIME REMAINING", "02:44:18")
│   ├── TimerProgressBar (Instance of ProgressBar, Progress=50%)
│   └── ActionButtonGroup (Auto Layout Horizontal, Gap: 16px)
│       ├── PrimaryCTA (Instance of BtnMiningCta, State=Active)
│       └── SecondaryLink ("View Mining Station Rules >", Inter SemiBold 13px, #9AA4B8)
│
└── RightColumnStation (Frame: Width: 420px, Height: 350px, Align: Center)
    └── MiningStationInstance (Instance of MiningStation, State=Active, Breakpoint=Desktop)
```

#### Auto Layout Structure (Mobile Variant: 375 × 620px)
```
MiningBanner Mobile (Frame: Width 375px, Height Hug/620px)
- Padding: 20px 16px
- Layout: Vertical, Gap: 20px, Align Center
- Child 1: StationCompact (Height: 180px, Width: 180px, Align Center)
- Child 2: ContentStack (Width: Fill container, Gap: 16px)
  - TopMetaRow (Wrap/Row, Gap: 8px)
  - Headline (24px Bold, Center)
  - Subtitle (13px Regular, Center)
  - MetricsGrid (2x2 Grid or Horizontal Scroll, Gap: 10px)
  - TimerProgressBar (Width: Fill container)
  - PrimaryCTA (Width: Fill container, Height: 46px)
```

---

### 3.3 `BadgeCard` (Achievement Grid Card Organism)
*The 10 individual achievement milestone cards in the badge collection.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `State` | Variant | `Locked`, `Unlocked`, `Newly Unlocked` | `Unlocked` |
| `Level` | Variant | `Level 01` through `Level 10` | `Level 02` |
| `BadgeName` | Text | Any string | `"Silver — Rising Star"` |
| `Requirement` | Text | Any string | `"Mine 25 VE Tokens"` |
| `Perk` | Text | Any string | `"+5% Daily Yield Boost"` |

#### Card Layout Specifications (Width: 220px, Height: 290px)
```
BadgeCard Frame:
- Auto Layout: Vertical, Align: Center, Padding: 24px 16px 20px 16px, Gap: 14px
- Corner Radius: 16px
- Border: 1px Solid

State Styling Matrix:
1. `State=Unlocked`:
   - Fill: Solid #20263A
   - Border: 1px Solid #2A3042 (Hover: 1px Solid #F2A900)
   - Badge Artwork: 100% Opacity, Dynamic Gemstone Glow
   - Title: Inter SemiBold 15px, #F5F5F5
   - Subtitle/Tier: Inter Medium 11px, #F2A900
   - Requirement: Inter Regular 11px, #9AA4B8
   - Status Chip: Auto Layout Horizontal, Fill rgba(16, 185, 129, 0.12), Text "UNLOCKED" in #10B981
   - Effect: Drop Shadow 0px 8px 24px rgba(0, 0, 0, 0.35)

2. `State=Locked`:
   - Fill: Solid #1A1D2B (Darkened surface)
   - Border: 1px Solid #20263A
   - Badge Artwork: 28% Opacity + Grayscale Filter + Padlock Icon Overlay (32x32px '#9AA4B8')
   - Title: Inter SemiBold 15px, #9AA4B8
   - Subtitle/Tier: Inter Medium 11px, #60687A
   - Requirement: Inter Regular 11px, #60687A
   - Status Chip: Fill rgba(154, 164, 184, 0.08), Text "LOCKED" in #60687A
   - Effect: None

3. `State=Newly Unlocked`:
   - Fill: Linear Gradient 165deg (#20263A 0%, #2A2210 100%)
   - Border: 2px Solid #F2A900
   - Badge Artwork: 100% Opacity + Radial Sparkle Burst + Pulse Animation Ring
   - Status Chip: Fill #F2A900, Text "NEW UNLOCK!" in #161827 (Bold)
   - Effect: Drop Shadow 0px 0px 32px rgba(242, 169, 0, 0.45)
```

---

### 3.4 `AchievementModal` (Unlock Celebration Dialog Organism)
*Celebratory modal triggered immediately when a badge milestone threshold is reached.*

#### Component Properties & Variants
| Property | Type | Options | Default |
| :--- | :--- | :--- | :--- |
| `State` | Variant | `Visible`, `Hidden` | `Visible` |
| `UnlockedTier` | Variant | `Bronze` through `Legend` | `Gold` |

#### Modal Specifications (Master Frame: 480 × 560px)
```
Backdrop Scrim:
- Size: 100vw × 100vh (Figma Frame: 1440 × 1000px)
- Fill: rgba(10, 11, 18, 0.78)
- Backdrop Filter: Background Blur 12px

Modal Container Frame:
- Width: 480px, Height: Hug contents (approx 540px)
- Corner Radius: 24px
- Fill: #161827
- Border: 1px Solid #F2A900
- Padding: 40px 36px 36px 36px
- Auto Layout: Vertical, Align Center, Gap: 20px
- Effect: Drop Shadow 0px 24px 64px rgba(0, 0, 0, 0.85), Inner Glow 0px 1px 0px rgba(242, 169, 0, 0.30)

Child Elements (Top to Bottom):
1. CloseButton: Top-right corner (Absolute, 32x32px, Icon 'X' #9AA4B8)
2. CelebrationTag: Auto Layout Horizontal, Fill rgba(242, 169, 0, 0.15), Border #F2A900
   - Text: "★ BADGE UNLOCKED! ★" Inter Bold 11px, #F2A900
3. LevitatingBadgeArtwork:
   - Size: 160 × 160px
   - Nested Instance: Selected Badge Vector (e.g. '03-gold-reward-hunter.svg')
   - Background Aura: Radial Gradient Gold Glow (Size: 220x220px behind badge)
4. TitleBlock:
   - Level Header: "LEVEL 03 ACHIEVED" Inter Bold 13px, #F2A900, Letter Spacing +0.10em
   - Badge Name: "Gold — Reward Hunter" Inter Bold 24px, #F5F5F5
   - Description: "You have accumulated over 50 VE tokens through mining sessions!" Inter Regular 14px, #9AA4B8, Align Center
5. PerkUnlockCard:
   - Width: Fill container, Padding: 14px 18px, Fill #20263A, Border 1px Solid #2A3042, Corner Radius: 12px
   - Auto Layout: Horizontal, Align Center, Gap: 12px
   - Icon: Sparkle/Lightning #F2A900 (20x20px)
   - Perk Text: "+10% Permanent Mining Speed Boost Unlocked" Inter SemiBold 13px, #F5F5F5
6. ButtonRow:
   - Primary: BtnMiningCta ("EQUIP BADGE", Width: Fill)
   - Secondary: ("Share Achievement", Ghost Button, Color #9AA4B8)
```

---

## 4. FIGMA COMPONENT NAMING & COMPONENT SET MAPPINGS

When setting up your Figma Asset Library, group components using Figma's slash-naming hierarchy:

```
Components/
├── Buttons/
│   ├── BtnMiningCta/
│   │   └── [State=Idle, Size=Large]
│   └── BtnGhost/
│
├── Cards/
│   ├── BadgeCard/
│   │   └── [State=Unlocked, Level=01-Bronze]
│   └── MetricSummaryCard/
│
├── Banners/
│   └── MiningBanner/
│       └── [State=Active, Breakpoint=Desktop]
│
├── Illustrations/
│   ├── MiningStation/
│   │   └── [State=Active, Breakpoint=Desktop]
│   └── Badges/
│       ├── 01-Bronze-First-Step
│       ├── 02-Silver-Rising-Star
│       ├── 03-Gold-Reward-Hunter
│       ├── 04-Platinum-Elite-Earner
│       ├── 05-Diamond-High-Achiever
│       ├── 06-Emerald-Reward-Master
│       ├── 07-Sapphire-Top-Performer
│       ├── 08-Ruby-Elite
│       ├── 09-Master-Master-Achiever
│       └── 10-Legend-Veloop-Legend
│
├── Navigation/
│   ├── DashboardNavHeader/
│   └── MobileTabBar/
│
└── Overlays/
    ├── AchievementModal/
    └── BadgeDetailsTooltip/
```

---

## 5. AUTO-LAYOUT & CONSTRAINT RULES TABLE

| Component | Parent Container | H-Constraint | V-Constraint | Auto-Layout Direction | Padding (T R B L) | Gap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `MiningBanner` | Dashboard Shell | Left & Right (Fill) | Top (Fixed) | Horizontal / Vertical | `40 48 40 48` (Desktop) | `32px` |
| `LeftColumnContent` | `MiningBanner` | Left (Fill) | Top & Bottom | Vertical | `0 0 0 0` | `20px` |
| `MiningStation` | `MiningBanner` | Right (Fixed) | Center | Vertical | `0 0 0 0` | `0px` |
| `BadgeGrid` | Main Content | Left & Right (Fill) | Top (Hug) | Horizontal (Wrap) | `0 0 0 0` | `20px 20px` |
| `BadgeCard` | `BadgeGrid` | Fixed (220px) | Fixed (290px) | Vertical | `24 16 20 16` | `14px` |
| `BtnMiningCta` | Content Frames | Fill or Fixed | Fixed (54/48/44) | Horizontal | `16 32 16 32` | `10px` |
| `ModalContainer` | Screen Center | Center | Center | Vertical | `40 36 36 36` | `20px` |

---

## 6. DESIGN SYSTEM VARIABLES / TOKENS IN FIGMA

Create Figma Color Variables mapped to these exact tokens:

```
Token Collection: VELOOP-Tokens
├── Surfaces/
│   ├── bg-app: #161827
│   ├── bg-panel: #20263A
│   ├── bg-panel-secondary: #2A3042
│   ├── bg-overlay: rgba(10, 11, 18, 0.78)
│   └── bg-card-locked: #1A1D2B
├── Accents/
│   ├── gold-primary: #F2A900
│   ├── gold-hover: #FFB81C
│   ├── gold-muted: rgba(242, 169, 0, 0.15)
│   ├── emerald-success: #10B981
│   ├── ruby-accent: #E0115F
│   └── sapphire-accent: #0F52BA
├── Text/
│   ├── text-primary: #F5F5F5
│   ├── text-secondary: #9AA4B8
│   ├── text-muted: #60687A
│   └── text-on-gold: #161827
└── Borders/
    ├── border-subtle: #2A3042
    ├── border-panel: #343C54
    └── border-active: #F2A900
```
