# Section 09 — Interactive Prototype Flow Specification

**Figma Page**: `03 Mining Banner` (Section `09 — Interactive Prototype Flow`)  
**Scope**: Complete screen-by-screen prototype map connecting the entire user experience from Login to Dashboard, Mining Loop, Modal Celebration, Collection, Progression Roadmap, and Loop Return.

---

## 1. Master Prototype Flow Diagram

```
[Screen 01: Login Portal]
       │
       ▼ (On Click: "SIGN IN TO VELOOP" -> Smart Animate 300ms)
[Screen 02: Dashboard Overview]
       │
       ▼ (On Click: "Mine & Earn" Nav Tab / Banner Anchor -> Smooth Scroll)
[Screen 03: Mining Banner (State 1: Standby)]
       │
       ▼ (On Click: "MINE NOW ⚡" -> Instant / Dissolve 150ms)
[Screen 04: Mining Banner (State 2: Mining Active)]
       │
       ▼ (After Delay: 800ms -> Smart Animate Ease-out 1200ms)
[Screen 05: Mining Banner (State 3: Progressing 75%)]
       │
       ▼ (After Delay: 1200ms -> Smart Animate Ease-out 800ms)
[Screen 06: Mining Banner (State 4: Reward Earned +38 VE)]
       │
       ▼ (After Delay: 600ms -> Open Overlay: Centered, Move In Bottom 350ms)
[Screen 07: Achievement Unlocked Modal (State 5)]
       │
       ├──────────────────────────────────────────┐
       ▼ (On Click: "View Progression Track →")     ▼ (On Click: "Continue Mining ⚡" / Close)
[Screen 08: Badge Progression Track]       [Screen 10: Mining Banner (State 6: Continue)]
       │                                          │
       ▼ (On Click: "View Collection")            ▼ (On Click: "CONTINUE MINING ⚡")
[Screen 09: Badge Collection Grid]         [Re-enters State 2 for Next Badge]
       │
       ▼ (On Click: "Back to Dashboard")
[Screen 02: Dashboard Overview]
```

---

## 2. Exact Figma Prototype Connection Wiring Table

| # | Source Frame / Element | Destination Frame | Trigger Event | Action | Animation & Transition | Easing & Duration |
|---|---|---|---|---|---|---|
| **01** | `loginForm / btnLoginSubmit` | `Dashboard / Main Overview` | **On click** | Navigate to | Smart Animate | Ease out (`300ms`) |
| **02** | `Dashboard / NavItem "Mine & Earn"` | `MiningBanner / State 1 (Idle)` | **On click** | Scroll to | Smooth Scroll | Cubic bezier (`400ms`) |
| **03** | `MiningBanner / btnMiningCta` | `MiningBanner / State 2 (Active)` | **On click** | Navigate to | Smart Animate | Ease out (`200ms`) |
| **04** | `MiningBanner / State 2 (Active)` | `MiningBanner / State 3 (Progress)`| **After delay** (`600ms`) | Navigate to | Smart Animate | Ease in & out (`1200ms`) |
| **05** | `MiningBanner / State 3 (Progress)`| `MiningBanner / State 4 (Reward)` | **After delay** (`1000ms`) | Navigate to | Smart Animate | Ease out (`800ms`) |
| **06** | `MiningBanner / State 4 (Reward)` | `Modal / AchievementUnlocked` | **After delay** (`500ms`) | Open overlay | Move In (from bottom) | Gentle spring (`350ms`), Background blur `16px`, Overlay opacity `85%` |
| **07** | `Modal / btnModalProgression` | `Section 08 / Progression Track` | **On click** | Navigate to | Smart Animate | Ease out (`300ms`), Close overlay checked |
| **08** | `Modal / btnModalContinue` | `MiningBanner / State 6 (Continue)` | **On click** | Navigate to | Smart Animate | Ease out (`300ms`), Close overlay checked |
| **09** | `Modal / btnModalClose (X)` | `MiningBanner / State 6 (Continue)` | **On click** | Close overlay | Dissolve | Ease out (`200ms`) |
| **10** | `Progression / btnBackToBanner` | `MiningBanner / State 6 (Continue)` | **On click** | Navigate to | Smart Animate | Ease out (`300ms`) |
| **11** | `MiningBanner / State 6 (Continue)`| `MiningBanner / State 2 (Active)` | **On click** (`btnContinue`) | Navigate to | Smart Animate | Ease out (`200ms`), Sequence repeats for Level 02 Silver |

---

## 3. Overlay & Micro-Animation Specifications

### Modal Overlay Settings:
- **Overlay Position**: `Centered`
- **Close when clicking outside**: `Checked` (`true`)
- **Add background behind overlay**: `Checked`, Color: `#070913`, Opacity: `85%`, Background Blur: `16px`
- **Animation**: `Move in` from bottom with gentle overshoot spring.

### Smart Animate Property Matching:
- Ensure the progress track frame name `miningProgressFill` is identical across States 1, 2, 3, 4, 6 so Figma smoothly interpolates its width:
  - State 1: `width: 0%`
  - State 2: `width: 15%`
  - State 3: `width: 75%`
  - State 4: `width: 100%`
  - State 6: `width: 0%`
- Ensure circular SVG ring `strokeDashoffset` is represented via stroke percentage or matching vector layers for continuous rotation.
