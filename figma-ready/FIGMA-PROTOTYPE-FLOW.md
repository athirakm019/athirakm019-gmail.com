# VELOOP Rewards — Figma Clickable Prototype Guide

This guide provides the complete blueprint for wiring the **VELOOP Rewards Clickable Prototype** in Figma's Prototype Mode.

---

## 1. Prototype Flow Sequence

```
[01 Login View]
       │
       ▼ On Click: "SIGN IN TO VELOOP"
[02 Dashboard View]
       │
       ▼ On Click: "Mine & Earn" / Scroll
[03 Mining Banner (State 1: Standby)]
       │
       ▼ On Click: "MINE NOW ⚡"
[04 Mining Banner (State 2: Mining Active)]
       │
       ▼ After Delay (600ms)
[05 Mining Banner (State 3: Progressing 75%)]
       │
       ▼ After Delay (1000ms)
[06 Mining Banner (State 4: Reward Earned +38 VE)]
       │
       ▼ After Delay (500ms)
[07 Modal / Achievement Unlocked (State 5)]
       │
       ├──────────────────────────────────────────┐
       ▼ On Click: "Progression Track →"           ▼ On Click: "Continue Mining ⚡"
[08 Badge Progression Track]               [09 Mining Banner (State 6: Continue)]
       │                                          │
       ▼ On Click: "View Collection"              ▼ On Click: "CONTINUE MINING ⚡"
[10 Badge Collection Grid]                 [Re-enters State 2 for Next Badge]
       │
       ▼ On Click: "Back to Dashboard"
[02 Dashboard View]
```

---

## 2. Detailed Screen Connections & Interaction Settings

### Connection 1: Login to Dashboard
- **Source**: `loginForm / btnLoginSubmit` on Frame `Auth / Login Portal`
- **Destination**: Frame `Dashboard / Main Overview`
- **Trigger**: `On click`
- **Action**: `Navigate to`
- **Animation**: `Smart Animate`
- **Easing**: `Ease out`
- **Duration**: `300ms`

### Connection 2: Dashboard to Mining Banner
- **Source**: `Sidebar / NavItem "Mine & Earn"`
- **Destination**: Frame `MiningBanner / State 1 (Idle)`
- **Trigger**: `On click`
- **Action**: `Scroll to`
- **Offset**: `0px`
- **Animation**: `Smooth scroll` (`400ms`)

### Connection 3: MINE NOW Ignition
- **Source**: `MiningBanner / btnMiningCta` (`MINE NOW ⚡`)
- **Destination**: Frame `MiningBanner / State 2 (Active)`
- **Trigger**: `On click`
- **Action**: `Navigate to`
- **Animation**: `Smart Animate`
- **Easing**: `Ease out`
- **Duration**: `200ms`

### Connection 4: Active Mining to Mid-Progress
- **Source**: Frame `MiningBanner / State 2 (Active)`
- **Destination**: Frame `MiningBanner / State 3 (Progress)`
- **Trigger**: `After delay` (`600ms`)
- **Action**: `Navigate to`
- **Animation**: `Smart Animate`
- **Easing**: `Ease in & out`
- **Duration**: `1200ms`
- *Note*: Progress fill bar expands smoothly from 15% to 75%.

### Connection 5: Progressing to Quota Met
- **Source**: Frame `MiningBanner / State 3 (Progress)`
- **Destination**: Frame `MiningBanner / State 4 (Reward)`
- **Trigger**: `After delay` (`1000ms`)
- **Action**: `Navigate to`
- **Animation**: `Smart Animate`
- **Easing**: `Ease out`
- **Duration**: `800ms`
- *Note*: Progress reaches 100%, button transitions to emerald `REWARD EARNED (+38 VE) ✓`.

### Connection 6: Quota Met to Celebratory Modal
- **Source**: Frame `MiningBanner / State 4 (Reward)`
- **Destination**: Frame `Modal / Achievement Unlocked`
- **Trigger**: `After delay` (`500ms`)
- **Action**: `Open overlay`
- **Overlay Settings**:
  - Position: `Centered`
  - Close when clicking outside: `True`
  - Add background behind overlay: `Checked` (`#070913`, Opacity: `85%`, Blur: `16px`)
- **Animation**: `Move in` from bottom (`Spring: Gentle, 350ms`)

### Connection 7: Modal to Badge Progression
- **Source**: `Modal / btnModalProgression` (`Progression Track →`)
- **Destination**: Frame `Section 08 / Badge Progression Track`
- **Trigger**: `On click`
- **Action**: `Navigate to`
- **Animation**: `Smart Animate`
- **Easing**: `Ease out` (`300ms`)
- **Close Overlay**: `Checked`

### Connection 8: Modal to Continue Mining
- **Source**: `Modal / btnModalContinue` (`Continue Mining ⚡`)
- **Destination**: Frame `MiningBanner / State 6 (Continue)`
- **Trigger**: `On click`
- **Action**: `Navigate to`
- **Animation**: `Smart Animate`
- **Easing**: `Ease out` (`300ms`)
- **Close Overlay**: `Checked`

### Connection 9: Continue Mining for Next Tier
- **Source**: `MiningBanner / btnMiningCta` (`CONTINUE MINING ⚡`)
- **Destination**: Frame `MiningBanner / State 2 (Active)`
- **Trigger**: `On click`
- **Action**: `Navigate to`
- **Animation**: `Smart Animate` (`200ms`)
- *Note*: Sequence loops for Level 02 Silver (Rising Star), Level 03 Gold, etc.

---

## 3. Best Practices for Smooth Smart Animate Transitions

1. **Exact Layer Name Matching**:
   Ensure these layer names are identical across all banner states:
   - `miningBannerCard`
   - `miningProgressFill`
   - `miningRingSvg`
   - `machineScreenReward`
   - `primaryMiningCta`
2. **Auto Layout Consistency**:
   Keep padding and alignment settings consistent between states so elements morph and slide smoothly rather than popping abruptly.
3. **No Flashing Gaming Effects**:
   Avoid flickering flash effects or screen shakes. Transitions use standard cubic-bezier curves (`Ease out`, `300ms–400ms`) to preserve fintech credibility.
