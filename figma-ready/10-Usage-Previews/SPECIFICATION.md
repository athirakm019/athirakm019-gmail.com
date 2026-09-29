# Section 10 — Real-World Usage Previews & Achievement Modal

**Figma Page**: `03 Mining Banner` (Section `10 — Usage Previews & Ecosystem Mockups`)  
**Scope**: 5 Production context specifications demonstrating seamless transparent badge asset integration across the VELOOP Rewards fintech ecosystem.

---

## 1. Context 1: Dark Dashboard Mockup (`1280px × 820px`)

```
Frame: "Mockup / 01 Dark Dashboard Window" (W: 1280px, H: 820px, Fill: #161827, Radius: 20px, Stroke: 1px rgba(255,255,255,0.08))
├── Header Bar: "Browser / OS Window Chrome" (H: 40px, Fill: #0c101c, Border-Bottom: 1px rgba(255,255,255,0.06))
│   ├── Window Controls: 3 Dots (Red, Yellow, Green, D: 10px)
│   └── URL Pill: "https://rewards.veloop.io/dashboard" (Fill: #161827, Text: #9AA4B8)
│
├── Frame: "Dashboard Body" (Auto Layout Horizontal, W: Fill, H: 780px)
│   ├── Aside: "Sidebar Navigation" (W: 240px, Fill: #20263A, Padding: 24px, Gap: 16px)
│   │   ├── Brand: "◆ VELOOP" (Gold Accent, Bold 18px)
│   │   ├── Nav Items: Dashboard (Active), Mine & Earn, Achievements, VE Wallet
│   │   └── User Widget: Avatar Initials circle, User Name ("Active Miner"), Tier ("Gold Miner")
│   │
│   └── Main: "Dashboard Content Area" (W: 1040px, Padding: 32px, Auto Layout Vertical, Gap: 24px)
│       ├── Frame: "Top Stats Metrics Row" (3 Stat Cards: Total Balance, Hash Rate, Badges Unlocked)
│       │   ├── Card 1: "Total VE Balance: 1,480 VEs" (+12.4% badge)
│       │   ├── Card 2: "Active Hash Rate: 98.4 GH/s" (Optimal badge)
│       │   └── Card 3: "Badges Unlocked: 3 / 10" (Top Tier badge)
│       │
│       ├── Component: "Embedded Mining Banner" (Active Extraction State, Embedded in Card)
│       │
│       └── Frame: "Bottom Activity & Teaser Row" (2 Cards)
│           ├── Card 1: "Recent Reward Emissions" (+38 VE cycle record, +100 VE milestone bonus)
│           └── Card 2: "Next Badge in Reach" (Displays transparent 04-platinum.svg with 36% progress)
```

---

## 2. Context 2: Achievement Section Showcase

- **Layout**: 10-badge interactive collection grid with filter pills (*All*, *Unlocked*, *Locked*).
- **Surface Switcher**: Allows toggling card background between Dark `#161827`, Light Silver `#F8FAFC`, and Obsidian `#0B0E17`.
- **Transparency Validation**: Emphasizes that badges float organically over all surfaces without white boundary boxes.

---

## 3. Context 3: User Profile Page & Crest Widget (`380px × 360px`)

```
Frame: "Mockup / 03 User Profile Card" (W: 380px, H: 360px, Fill: #20263A, Radius: 20px, Padding: 24px)
├── Frame: "User Identity Header" (Auto Layout Horizontal, Gap: 16px, Align: Center)
│   ├── Avatar Circle: 54 × 54px, Gradient Fill #f59e0b to #38bdf8, Text: Initials ("VM")
│   └── Copy: User Name ("Active Miner"), Tier: "Gold Miner", Balance: "1,480 VEs"
│
├── Frame: "Equipped Crest Showcase" (Auto Layout Vertical, Gap: 10px, Margin-Top: 16px)
│   ├── Text: "Equipped Heraldic Badge:" (Inter SemiBold 12px, Fill: #9AA4B8)
│   └── Frame: "Equipped Badge Slot" (H: 80px, Fill: rgba(242,169,0,0.08), Border: 1px solid #F2A900, Radius: 14px, Align: Center)
│       ├── SVG: "03-gold-reward-hunter.svg" (W: 64px, H: 64px)
│       └── Text: "Level 03 Gold — Reward Hunter" (Inter Bold 14px, Fill: #F5F5F5)
│
└── Frame: "Recent Badge Showcase Carousel" (3 Small Slots: Level 01 Bronze, Level 02 Silver, Level 03 Gold, +7 Locked)
```

---

## 4. Context 4: Celebratory Achievement Unlocked Modal (`480px × 540px`)

```
Frame: "Modal / Achievement Unlocked" (W: 480px, H: 540px, Fill: #20263A, Radius: 32px, Border: 1.5px solid #F2A900, Effect: Drop Shadow 0 24px 64px rgba(0,0,0,0.75), Auto Layout Vertical, Align: Center, Padding: [36px, 32px], Gap: 20px)
│
├── SVG: "Confetti Shower Canvas" (Overlay width 100%, multi-color celebratory particles)
├── Frame: "Close Button (X)" (Position: Absolute, Top: 20px, Right: 20px, Circle: 32px, Fill: rgba(255,255,255,0.08))
├── Frame: "Top Celebration Tag" (Padding: [6px, 16px], Radius: 999px, Fill: rgba(242,169,0,0.15), Stroke: 1px #F2A900)
│   └── Text: "🎉 ACHIEVEMENT UNLOCKED!" (JetBrains Mono Bold 11px, Fill: #F2A900)
│
├── Frame: "Floating Badge Art Frame" (W: 160px, H: 160px, Align: Center)
│   ├── Vector: "Radial Golden Aura" (Ellipse: 160 × 160, Radial #F2A900 to Transparent, Opacity: 40%)
│   └── SVG: "badges/{unlockedBadge}.svg" (W: 150px, H: 150px, 100% Transparent Background)
│
├── Frame: "Typography Lockup" (Auto Layout Vertical, Align: Center, Text-Align: Center, Gap: 6px)
│   ├── Text: "Gold — Reward Hunter" (Inter ExtraBold 24px, Fill: #FFFFFF)
│   └── Text: "Congratulations! You've unlocked Level 03. Your quantum hash power has been boosted by +15%." (Inter Regular 13px, Fill: #9AA4B8, Line-Height: 1.5)
│
├── Frame: "Reward Perks List" (Auto Layout Vertical, W: Fill, Gap: 8px)
│   ├── Perk 1: "✓ +100 VE Instant Bonus Credited" (Fill: #2A3042, Padding: [8px, 14px], Radius: 10px, Text: 12px #F5F5F5)
│   └── Perk 2: "✓ 24K Gold Profile Crest Badge Equipped" (Fill: #2A3042, Padding: [8px, 14px], Radius: 10px, Text: 12px #F5F5F5)
│
└── Frame: "Modal CTA Buttons" (Auto Layout Horizontal, W: Fill, Gap: 12px)
    ├── Button: "Continue Mining ⚡" (W: Fill Container, H: 46px, Radius: 12px, Fill: #F2A900, Text: #0f172a Bold 13px)
    └── Button: "Progression Track →" (W: Hug, H: 46px, Radius: 12px, Fill: #2A3042, Border: 1px rgba(255,255,255,0.1), Text: #F5F5F5 13px)
```

---

## 5. Context 5: Floating Toast Notification (`360px × 84px`)

```
Frame: "Toast Notification" (W: 360px, H: 84px, Fill: #20263A, Radius: 16px, Border: 1px solid rgba(242,169,0,0.4), Effect: Drop Shadow 0 12px 36px rgba(0,0,0,0.5), Auto Layout Horizontal, Padding: [14px, 16px], Gap: 14px, Align: Center)
├── SVG: "Transparent Badge Thumbnail" (W: 52px, H: 52px, Fill: None, Image: 03-gold-reward-hunter.svg)
└── Frame: "Notification Body" (Auto Layout Vertical, Gap: 3px)
    ├── Tag: "ACHIEVEMENT UNLOCKED" (JetBrains Mono Bold 9.5px, Fill: #F2A900, Letter-spacing: 0.5px)
    ├── Text: "Reward Hunter (Level 03)" (Inter Bold 14px, Fill: #FFFFFF)
    └── Text: "You've advanced to Gold Tier. +38 VEs credited." (Inter Regular 11.5px, Fill: #9AA4B8)
```
