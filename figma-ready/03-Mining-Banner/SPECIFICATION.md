# Section 03 — Mining Banner Desktop & 6 Interactive States

**Figma Page**: `03 Mining Banner`  
**Frame Name**: `03 — Mining Banner / Desktop Master (1440 × 430)`  
**Dimensions**: `1440px × 430px` (Fixed Desktop Master)  
**Fill**: `#161827` (Base Canvas) with nested Card Frame `#20263A`  
**Border Radius**: `24px`  
**Border / Stroke**: `1px solid rgba(255, 255, 255, 0.08)`  
**Effects**: Drop Shadow `0px 24px 64px rgba(0, 0, 0, 0.55)`, Specular Top Inner Rim `inset 0 1px 0 rgba(255, 255, 255, 0.12)`  

---

## 1. Frame Layout Architecture (2-Column Grid)

```
Frame: "Mining Banner Card" (W: 1280px, H: 430px, Fill: #20263A, Radius: 24px, Auto Layout Horizontal, Padding: [48px, 56px], Gap: 48px, Align: Center)
│
├── Left Column: "Telemetry & Action Hub" (Auto Layout Vertical, W: 680px, Gap: 20px)
│   ├── Frame: "Status Badge Pill" (Auto Layout Horizontal, Padding: [6px, 14px], Radius: 999px, Fill: rgba(242,169,0,0.12), Stroke: 1px rgba(242,169,0,0.3))
│   │   ├── Circle: "Status Indicator Dot" (W: 7px, H: 7px, Fill: #10b981)
│   │   └── Text: "● STANDBY" (JetBrains Mono Bold 11px, Letter-spacing: 0.5px, Fill: #F5F5F5)
│   │
│   ├── Frame: "Header Group" (Auto Layout Vertical, Gap: 8px)
│   │   ├── Text: "Start Mining. Start Earning." (Inter ExtraBold 38px, Line-Height: 1.15, Letter-spacing: -0.5px, Fill: #FFFFFF with "Start Earning." in Gold #F2A900)
│   │   └── Text: "Activate your session to earn VEs while staying engaged." (Inter Regular 15px, Fill: #9AA4B8, Line-Height: 1.5)
│   │
│   ├── Frame: "Dual Telemetry Meters Grid" (Auto Layout Horizontal, W: Fill, Gap: 16px)
│   │   ├── Component: "Linear Progress Meter Card" (Auto Layout Vertical, W: 332px, Padding: 16px, Radius: 14px, Fill: #2A3042, Stroke: 1px rgba(255,255,255,0.06))
│   │   │   ├── Frame: "Header Row" (Auto Layout Horizontal, Align: Space-Between)
│   │   │   │   ├── Text: "MINING PROGRESS" (JetBrains Mono Bold 11px, Fill: #9AA4B8, Uppercase)
│   │   │   │   └── Text: "0%" (JetBrains Mono Bold 13px, Fill: #F2A900)
│   │   │   └── Frame: "Progress Track" (W: Fill, H: 10px, Radius: 5px, Fill: #161827)
│   │   │       └── Frame: "Progress Fill" (W: 0% / 75% / 100%, H: 10px, Radius: 5px, Fill: Linear-Gradient(#b45309 to #F2A900))
│   │   │
│   │   └── Component: "Circular Ring & Countdown Card" (Auto Layout Horizontal, W: 332px, Padding: 16px, Radius: 14px, Fill: #2A3042, Stroke: 1px rgba(255,255,255,0.06), Align: Center, Gap: 16px)
│   │       ├── SVG: "Circular Progress Ring" (W: 44px, H: 44px, Circle R: 18, Stroke: #F2A900, Center Icon: ⚡)
│   │       └── Frame: "Countdown Telemetry" (Auto Layout Vertical, Gap: 2px)
│   │           ├── Text: "SESSION DURATION" (JetBrains Mono Bold 10px, Fill: #9AA4B8, Uppercase)
│   │           ├── Text: "60:00 standby" (JetBrains Mono Bold 14px, Fill: #F5F5F5)
│   │           └── Text: "Yield: +0 VEs" (JetBrains Mono SemiBold 11px, Fill: #F2A900)
│   │
│   └── Frame: "Actions Row" (Auto Layout Horizontal, Gap: 16px, Align: Center)
│       ├── Component: "Primary Mining CTA" (Auto Layout Horizontal, Padding: [14px, 36px], Radius: 14px, Fill: #F2A900, Align: Center, Gap: 10px, Hover: Specular Elevation)
│       │   ├── Text: "MINE NOW" (Inter ExtraBold 14px, Letter-spacing: 0.5px, Fill: #0f172a)
│       │   └── Icon: "⚡" (Fill: #0f172a, W: 14px, H: 14px)
│       └── Text: "Secure Quantum Torus • 0% Transaction Gas" (Inter Regular 12px, Fill: #9AA4B8)
│
└── Right Column: "Futuristic Quantum Mining Station" (Frame W: 500px, H: 330px, Clip: False, Align: Center)
    ├── SVG: "Pedestal Base" (Ellipse: 250 × 38, Fill: #1e293b, Stroke: #38bdf8)
    ├── SVG: "Counter-Rotating Magnetic Rings" (Toroidal Coils: Outer #38bdf8, Inner #F2A900)
    ├── SVG: "Quantum Core Glow" (Radial Gradient: #38bdf8 to Transparent)
    ├── SVG: "Main Levitating VE Coin" (W: 68px, H: 68px, 3D Gold Edge, Holographic Monogram)
    ├── SVG: "Orbiting VE Coins" (3 Orbiting micro-coins at angles 45°, 135°, 220°)
    └── SVG: "HUD Machine Screen Unit" (Housing: #20263A, Screen: #0c101c, Readout: "+38 VE", Indicator: "● MINING ACTIVE")
```

---

## 2. Six (6) Interactive Mining States Specification

| State # | State Name | Banner Visual Changes | Status Badge | Progress | VE Yield | CTA Button Text & Style | Machine Screen Display |
|---|---|---|---|---|---|---|---|
| **State 1** | **Idle (Default)** | Coils on standby drift, calm blue core glow | `● STANDBY` (Gray/Green) | `0%` | `+0 VEs` | `MINE NOW ⚡` (Gold Fill `#F2A900`, Ink text `#0f172a`, Active) | `REWARD YIELD`<br>`+0 VE`<br>`● STANDBY` |
| **State 2** | **Mining Active** | Coils ignite, high-speed rotation, particle emissions accelerate | `● MINING ACTIVE` (Pulsing Emerald) | `1%–10%` | `+0 VEs` | `MINING... ⚡` (Gold Fill, Opacity: 0.85, Disabled / Non-clickable) | `REWARD YIELD`<br>`+0 VE`<br>`● MINING ACTIVE` |
| **State 3** | **Mining Progress** | Progress bar at 75%, circular ring offset decreasing, energy conduit lighting | `● MINING ACTIVE` (Pulsing Emerald) | `75%` | `+38 VEs` (ticking) | `MINING... ⚡` (Countdown: `45:20 remaining`) | `REWARD YIELD`<br>`+38 VE`<br>`● MINING ACTIVE` |
| **State 4** | **Reward Earned** | Progress reaches 100%, ring checkmark `✓` displays, harmonic chime | `● QUOTA ACHIEVED` (Gold) | `100%` | `+38 VEs` (Confirmed) | `REWARD EARNED (+38 VE) ✓` (Emerald / Gold Accent `#10b981`) | `REWARD YIELD`<br>`+38 VE`<br>`● QUOTA MET` |
| **State 5** | **Achievement Unlocked** | Celebratory modal pops up over banner, confetti canvas fires, heraldic chime plays | `● MILESTONE REACHED` | `100%` | `+38 VEs` | Modal CTA: `Continue Mining →` | Unlocked Badge Medallion displayed in Modal |
| **State 6** | **Continue Mining** | Banner resets to clean standby, subtext updates to target next tier (e.g. Level 02 Silver) | `● STANDBY` | `0%` | `+0 VEs` | `CONTINUE MINING ⚡` (Gold Fill `#F2A900`, Ready for next burst) | `TARGET: LVL 02`<br>`+38 VE`<br>`● STANDBY` |

---

## 3. Figma Component Set & Variant Setup

Create a Master Component: `MiningBanner` with the following variant properties:
- **`State`**: `Idle`, `Active`, `Progress`, `RewardEarned`, `AchievementUnlocked`, `ContinueMining`
- **`Breakpoint`**: `Desktop (1440px)`, `Tablet (768px)`, `Mobile (375px)`

Use Figma **Smart Animate** transitions (`Ease-out 400ms`) between `Idle` ➔ `Active` ➔ `Progress` ➔ `RewardEarned`.
