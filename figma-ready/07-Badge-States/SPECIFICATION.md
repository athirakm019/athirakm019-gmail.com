# Section 07 — Badge States & Visual Anatomy Specification

**Figma Page**: `03 Mining Banner` (Section `07 — Badge States & Anatomy`)  
**Scope**: Exact component variants, visual filters, overlays, and progress indicators for the 3 official badge states: **LOCKED**, **UNLOCKED**, and **NEWLY UNLOCKED**.

---

## 1. State Matrix & Visual Treatment

| Attribute | 1. LOCKED State | 2. UNLOCKED State | 3. NEWLY UNLOCKED State |
|---|---|---|---|
| **Layer Saturation** | `25%` (`filter: saturate(0.25)`) | `100%` (Full metallic/gem luster) | `100%` + Specular Light Sweep |
| **Layer Brightness** | `60%` (`filter: brightness(0.60)`) | `100%` | `115%` |
| **Card Border** | `1px solid rgba(255, 255, 255, 0.06)` | `1px solid rgba(255, 255, 255, 0.15)` | `2px solid #F2A900` (Gold Accent) |
| **Ambient Aura** | None (Recessed depth) | Subtle color drop shadow | `0px 0px 32px rgba(242, 169, 0, 0.45)` (Gold Bloom) |
| **Top-Right Icon** | Floating Padlock Pill (`padlock-locked.svg`) | Green Checkmark Circle (`✓`) | Golden Trophy Glyph (`trophy-unlocked.svg`) |
| **Status Tag** | `🔒 Locked` (Gray text `#94a3b8`) | `✓ Unlocked` (Emerald text `#10b981`) | `★ NEWLY UNLOCKED` (Gold text `#0f172a`) |
| **Telemetry Displayed** | Goal progress: e.g. `540 / 1,500 VEs (36%)` | Unlocked date & equip status | Celebratory banner with perk preview |
| **Visibility Rule** | **ALWAYS VISIBLE** (Never hidden) | Fully visible | Focal highlight / Modal center |

---

## 2. Component Variant Structure in Figma

```
Component: "BadgeCardState"
├── Properties:
│   ├── State: Locked | Unlocked | NewlyUnlocked
│   └── Level: 01..10
│
├── Variant 1: State="Locked"
│   ├── Card Background: #20263A
│   ├── Overlay: Padlock Pill at top-right (x: 180, y: 16)
│   ├── Badge Art: Layer Blend Pass Through 50%, Saturation 25%
│   ├── Progress Bar: Track #161827 (H: 6px), Fill #38bdf8 (W: 36%)
│   └── Label: "540 / 1,500 VEs • Need 2 more achievements"
│
├── Variant 2: State="Unlocked"
│   ├── Card Background: #20263A
│   ├── Overlay: Unlocked Checkmark at top-right (x: 180, y: 16)
│   ├── Badge Art: Full metallic color, 100% transparency outside art
│   ├── Status Tag: "✓ Unlocked" (Fill: rgba(16,185,129,0.12))
│   └── Label: "Level 03 Completed • Reward Hunter"
│
└── Variant 3: State="NewlyUnlocked"
    ├── Card Background: #20263A
    ├── Outer Stroke: 2px solid #F2A900
    ├── Effect: Drop Shadow 0 0 28px rgba(242, 169, 0, 0.5)
    ├── Banner Top: "🎉 ACHIEVEMENT UNLOCKED!" (Fill: #F2A900, Text: #0f172a)
    ├── Badge Art: 3D Floating Animation state with radial glow
    └── Button: "View Perks & Continue →" (Fill: #F2A900)
```

---

## 3. Desktop Hover Tooltip Anatomy (`.badge-custom-tooltip`)

When the user hovers over any badge card on desktop, an accessible floating tooltip appears:
- **Dimensions**: Fixed width `280px`, Auto height
- **Surface**: `#111424` (`96%` opacity, Blur: `16px`), Stroke: `1px solid rgba(255, 255, 255, 0.15)`
- **Header**: Badge Name (Inter Bold 14px) + Level/Tier pill
- **Milestone Requirement**: E.g. *"Mine and accumulate 1,500 VEs across active sessions."*
- **Status Field**: Highlighted in green (`Unlocked ✓`) or gray (`Locked 🔒`)
- **Lore & Description**: Heraldic backstory and digital reward utility.
