# Section 01 — Cover Frame Specification

**Figma Page**: `01 Cover` (or Page `01` in single-page structures)  
**Frame Name**: `01 — Cover / Project Hero`  
**Frame Dimensions**: `1440px × 1000px` (Fixed)  
**Fill**: `#161827` (Solid Dark Slate `--bg-app`)  
**Clip Content**: Checked (`true`)  

---

## 1. Frame Layout Hierarchy

```
Frame: "01 — Cover / Project Hero" (1440 × 1000, Fill: #161827)
├── Vector: "Atmospheric Ambient Glow / Radial" (Ellipse: 900 × 700, Fill: Radial #38bdf8 to #161827, Opacity: 15%, Layer Blur: 140px)
├── Vector: "Gold Glow Accent" (Ellipse: 600 × 500, Fill: Radial #F2A900 to #161827, Opacity: 12%, Layer Blur: 160px)
├── Frame: "Cover Container" (Auto Layout Vertical, W: 1280px, Hug H, Align: Center, Gap: 48px, Padding: [100px, 80px, 100px, 80px])
│   ├── Frame: "Brand Header Bar" (Auto Layout Horizontal, W: Fill Container, H: 48px, Align: Space-Between)
│   │   ├── Frame: "Logo Lockup" (Auto Layout Horizontal, Gap: 12px, Align: Center)
│   │   │   ├── SVG: "veloop-logo-crest.svg" (W: 40px, H: 40px)
│   │   │   └── Text: "VELOOP REWARDS" (Inter Bold 18px, Letter-spacing: 1.5px, Fill: #F5F5F5)
│   │   └── Frame: "Internship Badge Tag" (Auto Layout Horizontal, Padding: [6px, 16px], Radius: 999px, Fill: rgba(242,169,0,0.12), Stroke: 1px #F2A900)
│   │       └── Text: "TASK 11 — UI/UX INTERNSHIP DELIVERABLE" (JetBrains Mono Bold 11px, Fill: #F2A900, Uppercase)
│   ├── Frame: "Hero Title & Metadata" (Auto Layout Vertical, W: Fill Container, Align: Center, Gap: 20px, Text-Align: Center)
│   │   ├── Frame: "Category Tag" (Auto Layout Horizontal, Padding: [6px, 18px], Radius: 999px, Fill: rgba(56,189,248,0.12), Stroke: 1px #38bdf8)
│   │   │   └── Text: "FINTECH REWARDS • QUANTUM MINING • 10-TIER HERALDIC GAMIFICATION" (JetBrains Mono Bold 12px, Fill: #38bdf8)
│   │   ├── Text: "VELOOP Rewards" (Space Grotesk / Inter ExtraBold 64px, Line-Height: 1.1, Letter-spacing: -1.5px, Fill: #FFFFFF)
│   │   ├── Text: "Mining Station & 10-Tier Achievement Badge System" (Inter SemiBold 28px, Line-Height: 1.3, Fill: #F2A900)
│   │   └── Text: "A comprehensive end-to-end design system, high-frequency mining telemetry engine, and prestigious heraldic achievement progression designed for institutional fintech engagement." (Inter Regular 16px, Line-Height: 1.6, W: 780px, Fill: #9AA4B8)
│   ├── Frame: "Core 7-Stage Reward Loop Ribbon" (Auto Layout Horizontal, W: Hug, Padding: [14px, 28px], Radius: 16px, Fill: #20263A, Stroke: 1px rgba(255,255,255,0.08), Gap: 12px, Align: Center)
│   │   ├── Text: "START" (JetBrains Mono Bold 12px, Fill: #9AA4B8)
│   │   ├── Text: "➔" (Fill: rgba(255,255,255,0.2))
│   │   ├── Text: "MINE NOW" (JetBrains Mono Bold 12px, Fill: #38bdf8)
│   │   ├── Text: "➔" (Fill: rgba(255,255,255,0.2))
│   │   ├── Text: "EARN VEs" (JetBrains Mono Bold 12px, Fill: #F2A900)
│   │   ├── Text: "➔" (Fill: rgba(255,255,255,0.2))
│   │   ├── Text: "PROGRESS" (JetBrains Mono Bold 12px, Fill: #9AA4B8)
│   │   ├── Text: "➔" (Fill: rgba(255,255,255,0.2))
│   │   ├── Text: "ACHIEVE" (JetBrains Mono Bold 12px, Fill: #10b981)
│   │   ├── Text: "➔" (Fill: rgba(255,255,255,0.2))
│   │   ├── Text: "UNLOCK" (JetBrains Mono Bold 12px, Fill: #f59e0b)
│   │   ├── Text: "➔" (Fill: rgba(255,255,255,0.2))
│   │   └── Text: "CONTINUE" (JetBrains Mono Bold 12px, Fill: #38bdf8)
│   └── Frame: "Pillar Cards Row" (Auto Layout Horizontal, W: 1120px, Gap: 24px, Distribute: Space-Between)
│       ├── Component: "Cover Pillar Card 1" (W: 350px, Padding: 24px, Radius: 20px, Fill: #20263A, Stroke: 1px rgba(255,255,255,0.08))
│       │   ├── Text: "01 / MINING STATION" (JetBrains Mono Bold 11px, Fill: #F2A900)
│       │   ├── Text: "Quantum Reactor Node" (Inter Bold 18px, Fill: #F5F5F5, Margin-Top: 8px)
│       │   └── Text: "Real-time extraction HUD with +38 VE yield, circular ring, live countdown, and magnetic torus visualization." (Inter Regular 13px, Fill: #9AA4B8, Line-Height: 1.5)
│       ├── Component: "Cover Pillar Card 2" (W: 350px, Padding: 24px, Radius: 20px, Fill: #20263A, Stroke: 1px rgba(255,255,255,0.08))
│       │   ├── Text: "02 / HERALDIC SYSTEM" (JetBrains Mono Bold 11px, Fill: #38bdf8)
│       │   ├── Text: "10-Level Semi-3D Badges" (Inter Bold 18px, Fill: #F5F5F5, Margin-Top: 8px)
│       │   └── Text: "Handcrafted metallic alloys and natural gemstones with 100% transparent vector backgrounds on 200×200 canvases." (Inter Regular 13px, Fill: #9AA4B8, Line-Height: 1.5)
│       └── Component: "Cover Pillar Card 3" (W: 350px, Padding: 24px, Radius: 20px, Fill: #20263A, Stroke: 1px rgba(255,255,255,0.08))
│           ├── Text: "03 / USER EXPERIENCE" (JetBrains Mono Bold 11px, Fill: #10b981)
│           ├── Text: "Progressive Unlock Flow" (Inter Bold 18px, Fill: #F5F5F5, Margin-Top: 8px)
│           └── Text: "Celebratory unlock modal with HTML5 canvas confetti, harmonic Web Audio synthesizer, and goal-gradient pacing." (Inter Regular 13px, Fill: #9AA4B8, Line-Height: 1.5)
```

---

## 2. Visual Design & Style Tokens

- **Canvas Background**: `#161827`
- **Panel Containers**: `#20263A` (Frosted glass appearance, `backdrop-filter: blur(16px)`)
- **Primary Accent**: `#F2A900` (Warm gold 24K)
- **Secondary Accent**: `#38bdf8` (Quantum blue)
- **Primary Text**: `#F5F5F5`
- **Secondary Text**: `#9AA4B8`
- **Card Elevation**: `0px 16px 36px rgba(0, 0, 0, 0.45)`, Border: `1px solid rgba(255, 255, 255, 0.08)`
