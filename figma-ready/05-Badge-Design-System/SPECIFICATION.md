# Section 05 — 10-Tier Heraldic Badge Design System Specification

**Figma Page**: `03 Mining Banner` (Section `05 — Badge Design System`)  
**Scope**: Unified heraldic visual language, mathematical proportions, material palettes, gemological chromatic hierarchy, and vector geometry for all 10 achievement badges.

---

## 1. Mathematical Canvas & Grid Proportions

Every badge is built on a standardized master component grid:
- **Canvas Size / ViewBox**: `200px × 200px` (`viewBox="0 0 200 200"`)
- **Safe Vector Art Area**: `180px × 180px` (Padding: `10px` all sides for glow and drop shadow clearance)
- **Background Fill**: `fill="none"` (100% genuine vector transparency — zero solid rectangles, bounding boxes, or white cards)
- **Central Anchor**: Coordinates `(100, 100)` mark the exact optical center of the central VE monogram.
- **Monogram Proportions**: Monogram V width spans `52px` (base bronze) to `68px` (apex legend); thickness `12px` to `18px` with directional bevels.

---

## 2. Geometric Progression & Heraldic Silhouette Evolution

```
Level 01: Simple Classic Heraldic Shield (Brushed Bronze)
   │
   ▼
Level 02: Octagonal Faceted Dual-Plate Rim (Rhodium Silver)
   │
   ▼
Level 03: Arched Royal Shield with Laurel Wreath & Crown Header (24K Gold)
   │
   ▼
Level 04: Aerodynamic Angular Cyber-Hexagon with Stepped Bevels (Aerospace Platinum)
   │
   ▼
Level 05: Brilliant Brilliant-Cut Faceted Octahedron (Crystalline Diamond)
   │
   ▼
Level 06: Step-Cut Octagon Emerald with Gold Jewelry Filigree Prongs (Imperial Emerald)
   │
   ▼
Level 07: Cushion-Cut Celestial Gemstone with Titanium Angel Wings (Royal Sapphire)
   │
   ▼
Level 08: Shield-Cut Ruthenium Armored Sovereign Crest with Dragon Winglets (Pigeon-Blood Ruby)
   │
   ▼
Level 09: Multi-Tier Imperial Sovereign Shield with Crown & Flanking Rubies/Sapphires (Master Sovereign)
   │
   ▼
Level 10: Mythic Celestial Apex Medallion with Halo Nova, Apex Crown & 4 Cardinal Gemstones (VELOP Legend)
```

---

## 3. Material Specifications & Color Palettes

| Level & Exact Name | Primary Material | Outer Frame Gradient | Core Field / Well | VE Monogram Style | Accent Features |
|---|---|---|---|---|---|
| **01 Bronze — First Step** | Brushed Bronze Alloy | `#bf7d4e` ➔ `#8c502b` ➔ `#3b1d0a` | `#2a1408` (Dark Umber) | `#f5caa6` (Warm Bronze) | 3 Beginner Rivet Studs, Initiation Star, Base Chevron |
| **02 Silver — Rising Star** | Rhodium Silver | `#ffffff` ➔ `#cbd5e1` ➔ `#334155` | `#0f172a` (Slate Core) | `#ffffff` ➔ `#94a3b8` (Polished Steel) | 4-Point Facet Rising Star, Twin Micro Stars on Wings |
| **03 Gold — Reward Hunter** | 24K Polished Gold | `#fffbeb` ➔ `#fde047` ➔ `#854d0e` | `#2c1a05` (Deep Amber Gold) | `#ffffff` ➔ `#f59e0b` (Radiant 24K Gold) | Arched Shield, Laurel Filigree Leaves, Gold Crown Header |
| **04 Platinum — Elite Earner** | Aerospace Platinum | `#ffffff` ➔ `#e0f2fe` ➔ `#475569` | `#090d16` (Obsidian Blue) | `#ffffff` ➔ `#94a3b8` (Platinum Cyber) | Aerodynamic Hex Wings, Stepped Bevels, Cyan Cyber Accents |
| **05 Diamond — High Achiever** | Brilliant-Cut Diamond | `#f0f9ff` ➔ `#bae6fd` ➔ `#0284c7` | `#0c2038` (Midnight Prism) | `#ffffff` ➔ `#7dd3fc` (Prismatic Flare) | Pavilions, Light Refraction Rays, Twin Prismatic Flares |
| **06 Emerald — Reward Master** | Imperial Emerald | `#fffbeb` ➔ `#ca8a04` (Gold Frame) | `#064e3b` ➔ `#022c22` (Deep Forest) | `#ffffff` ➔ `#eab308` (Chiseled Gold) | Octagonal Step Cuts, 4 Sovereign Corner Gold Prongs |
| **07 Sapphire — Top Performer** | Royal Sapphire | `#f8fafc` ➔ `#475569` (Titanium) | `#172554` ➔ `#060913` (Midnight Blue) | `#ffffff` ➔ `#3b82f6` (Deep Azure) | Cushion Cut, Titanium Wings, Sapphire Drop Pendant |
| **08 Ruby — Elite** | Pigeon-Blood Ruby | `#fffbeb` ➔ `#4c0519` (Gilded Armor) | `#881337` ➔ `#1f020a` (Deep Crimson) | `#ffffff` ➔ `#e11d48` (Crimson Radiance) | Dragon Wings, Ruthenium Plate, Ruby Teardrop Finial |
| **09 Master — Master Achiever** | Master Sovereign Alloy | `#fffbeb` ➔ `#eab308` ➔ `#451a03` | `#1e112a` (Velvet Midnight) | `#ffffff` ➔ `#f59e0b` (Multi-Bevel) | Imperial Master Crown, 5 Crown Jewels, Flanking Gems |
| **10 Legend — VELOOP Legend** | Mythic Apex Celestial | `#fffbeb` ➔ `#fde047` ➔ `#ca8a04` | `#1e1b4b` (Singularity Space) | `#ffffff` ➔ `#fde047` (Mythic Apex) | Celestial Halo, Nova Rays, Apex Crown, 4 Cardinal Gems |

---

## 4. Lighting, Reflections & Shadow Standards

- **Directional Light Source**: Upper-left illumination (`x1="20" y1="20" x2="180" y2="180"` or `x1="0" y1="0" x2="1" y2="1"`).
- **Specular Sheen Overlay**: White gradient arc (`#ffffff` opacity `0.45` to `0.00` to `#000000` opacity `0.30`) across the upper face.
- **Atmospheric Ambient Drop Shadow**: `filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.65))` on dark backgrounds.
- **Rarity Glow**: Outer `feDropShadow` tinted to the badge's jewel/metal color (e.g., `#0284c7` for Diamond, `#10b981` for Emerald, `#e11d48` for Ruby, `#f59e0b` for Legend).

---

## 5. Critical Transparency Verification Protocol

1. **No Solid Bounding Boxes**: The SVG wrapper contains only path and polygon definitions without a surrounding `<rect width="100%" height="100%" fill="#..."/>`.
2. **Universal Contrast Testing**:
   - **On Dark `#161827`**: Metallic specular highlights and neon-free glow create crisp contrast.
   - **On Light `#F8FAFC`**: Outer metallic rim strokes (`#d99365`, `#64748b`, `#854d0e`, `#1e293b`) prevent visual wash-out.
   - **On Obsidian `#0B0E17`**: Rich saturated jewel facets maintain vivid optical presence.
   - **In UI Components**: Seamlessly embeds into Profile Cards, Reward Modals, Toast Notifications, and Progression Tracks without white box clipping.
