# Section 06 — 10-Tier Badge Collection Grid Specification

**Figma Page**: `03 Mining Banner` (Section `06 — Badge Collection Grid`)  
**Frame Name**: `06 — Badge Collection / 10-Tier Master Showcase`  
**Dimensions**: `1440px × 960px`  
**Fill**: `#161827`  

---

## 1. Grid Layout Hierarchy (5 × 2 Desktop Master)

```
Frame: "06 — Badge Collection / Master Grid" (1440 × 960, Fill: #161827)
├── Frame: "Section Header" (W: 1280px, Auto Layout Vertical, Gap: 12px, Padding-Top: 60px)
│   ├── Text: "06 — HERALDIC COLLECTION" (JetBrains Mono Bold 12px, Fill: #F2A900)
│   ├── Text: "The 10-Tier Heraldic Achievement Collection" (Inter Bold 36px, Fill: #FFFFFF)
│   └── Text: "A progressive ladder of 10 handcrafted semi-3D metallic and gemstone medallions. Every badge is crafted with 100% vector transparency." (Inter Regular 16px, Fill: #9AA4B8)
│
├── Frame: "Surface Background Switcher Bar" (Auto Layout Horizontal, Gap: 12px, Margin-Bottom: 24px)
│   ├── Component: "Surface Pill: Dark #161827 (Default Active)" (Padding: [6px, 16px], Radius: 999px, Fill: #20263A, Stroke: 1px #F2A900, Text: "Dark #161827")
│   ├── Component: "Surface Pill: Light Silver #F8FAFC" (Padding: [6px, 16px], Radius: 999px, Fill: #2A3042, Text: "Light #F8FAFC")
│   └── Component: "Surface Pill: Obsidian Black #0B0E17" (Padding: [6px, 16px], Radius: 999px, Fill: #2A3042, Text: "Obsidian #0B0E17")
│
└── Frame: "5 × 2 Badge Grid Container" (W: 1280px, Auto Layout Grid: 5 Columns × 2 Rows, Gap: 24px)
    ├── Card 01: "Badge Card — Level 01 Bronze (First Step)"
    ├── Card 02: "Badge Card — Level 02 Silver (Rising Star)"
    ├── Card 03: "Badge Card — Level 03 Gold (Reward Hunter)"
    ├── Card 04: "Badge Card — Level 04 Platinum (Elite Earner)"
    ├── Card 05: "Badge Card — Level 05 Diamond (High Achiever)"
    ├── Card 06: "Badge Card — Level 06 Emerald (Reward Master)"
    ├── Card 07: "Badge Card — Level 07 Sapphire (Top Performer)"
    ├── Card 08: "Badge Card — Level 08 Ruby (Elite)"
    ├── Card 09: "Badge Card — Level 09 Master (Master Achiever)"
    └── Card 10: "Badge Card — Level 10 Legend (VELOP Legend)"
```

---

## 2. Individual Badge Card Component Anatomy (`232px × 310px`)

```
Component: "BadgeCard" (W: 232px, H: 310px, Fill: #20263A, Radius: 20px, Stroke: 1px rgba(255,255,255,0.08), Auto Layout Vertical, Align: Center, Padding: [24px, 16px], Gap: 12px)
├── Frame: "Level & Tier Pill" (Auto Layout Horizontal, Padding: [4px, 12px], Radius: 999px, Fill: rgba(255,255,255,0.06), Stroke: 1px rgba(255,255,255,0.12))
│   └── Text: "Level 0X • {Tier}" (JetBrains Mono Bold 11px, Fill: #F5F5F5)
│
├── Frame: "Badge Art Frame" (W: 140px, H: 140px, Align: Center)
│   └── SVG: "badges/{level}-{tier}-{name}.svg" (W: 140px, H: 140px, Fill: None, Background: 100% Transparent)
│
├── Frame: "Typography Lockup" (Auto Layout Vertical, Align: Center, Gap: 4px, Text-Align: Center)
│   ├── Text: "{Achievement Title}" (Inter Bold 16px, Fill: #F5F5F5)
│   └── Text: "{Material Treatment}" (Inter Regular 12px, Fill: #9AA4B8)
│
└── Frame: "Status Badge" (Auto Layout Horizontal, Padding: [4px, 10px], Radius: 6px, Fill: rgba(16,185,129,0.12), Stroke: 1px rgba(16,185,129,0.25))
    └── Text: "✓ Unlocked" (or "🔒 Locked") (JetBrains Mono Bold 10.5px, Fill: #10b981 / #94a3b8)
```

---

## 3. The 10 Badge Records Table

| # | Exact Level & Tier | Exact Achievement Name | Material & Heraldry | Default Showcase Status |
|---|---|---|---|---|
| **01** | Level 01 Bronze | **First Step** | Brushed Bronze Alloy with beginner rivets | Unlocked (Initial) |
| **02** | Level 02 Silver | **Rising Star** | Rhodium Silver with 4-point facet rising star | Unlocked (Progressed) |
| **03** | Level 03 Gold | **Reward Hunter** | 24K Polished Gold with laurel filigree | Unlocked (Equipped) |
| **04** | Level 04 Platinum | **Elite Earner** | Aerospace Platinum with stepped aerodynamic bevels | Locked (Next Target) |
| **05** | Level 05 Diamond | **High Achiever** | Brilliant Crystalline Diamond with prism flares | Locked |
| **06** | Level 06 Emerald | **Reward Master** | Imperial Emerald Gemstone with gold claws | Locked |
| **07** | Level 07 Sapphire | **Top Performer** | Royal Midnight Sapphire with titanium wings | Locked |
| **08** | Level 08 Ruby | **Elite** | Sovereign Pigeon-Blood Ruby with ruthenium plate | Locked |
| **09** | Level 09 Master | **Master Achiever** | Imperial Sovereign Shield with crown finial | Locked |
| **10** | Level 10 Legend | **VELOP Legend** | Mythic Celestial Apex with 4 cardinal gems | Locked (Ultimate Apex) |
