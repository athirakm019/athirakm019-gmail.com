/* ==========================================================================
   VELOP REWARDS — 10-LEVEL ACHIEVEMENT BADGE DATA & SYSTEM
   ========================================================================== */

export const BADGE_DATA = [
  {
    id: 'badge-01',
    level: 1,
    levelDisplay: 'Level 01',
    tier: 'Bronze',
    name: 'First Step',
    material: 'Bronze Metal',
    requirement: 'Activate & complete your first mining session (Earn 10 VEs)',
    status: 'locked',
    unlockedAt: null,
    description: 'The foundation of every legend starts here. Awarded upon completing your initial quantum extraction cycle.',
    colorAccent: '#bf7d4e',
    assetPath: 'assets/badges/01-bronze-first-step.svg',
    perks: ['+1% Mining Hash Boost', 'Access to Community Channels']
  },
  {
    id: 'badge-02',
    level: 2,
    levelDisplay: 'Level 02',
    tier: 'Silver',
    name: 'Rising Star',
    material: 'Silver / Rhodium Metal',
    requirement: 'Earn 100 cumulative VEs & complete 5 mining sessions',
    status: 'locked',
    unlockedAt: null,
    description: 'Demonstrating initial consistency. The polished octagonal rhodium crest signifies rising momentum.',
    colorAccent: '#cbd5e1',
    assetPath: 'assets/badges/02-silver-rising-star.svg',
    perks: ['+2.5% Mining Hash Boost', 'Early Access to Weekly Raffles']
  },
  {
    id: 'badge-03',
    level: 3,
    levelDisplay: 'Level 03',
    tier: 'Gold',
    name: 'Reward Hunter',
    material: '24K Polished Gold',
    requirement: 'Earn 500 VEs & maintain an active 7-day mining streak',
    status: 'locked',
    unlockedAt: null,
    description: 'A distinguished mark of persistence. Featuring laurel motifs and triple-bevel 24K gold heraldry.',
    colorAccent: '#f59e0b',
    assetPath: 'assets/badges/03-gold-reward-hunter.svg',
    perks: ['+5% Mining Hash Boost', 'Priority Mining Pool Allocation', 'Exclusive Gold Profile Trim']
  },
  {
    id: 'badge-04',
    level: 4,
    levelDisplay: 'Level 04',
    tier: 'Platinum',
    name: 'Elite Earner',
    material: 'Aerospace Platinum',
    requirement: 'Earn 1,500 VEs & complete 25 high-yield mining sessions',
    status: 'locked',
    unlockedAt: null,
    description: 'Sleek aerodynamic hexagonal plates engineered from pure platinum. Awarded to high-volume ecosystem participants.',
    colorAccent: '#94a3b8',
    assetPath: 'assets/badges/04-platinum-elite-earner.svg',
    perks: ['+8% Mining Hash Boost', 'Zero Network Claim Fees', 'VIP Support Desk']
  },
  {
    id: 'badge-05',
    level: 5,
    levelDisplay: 'Level 05',
    tier: 'Diamond',
    name: 'High Achiever',
    material: 'Prismatic Brilliant Diamond',
    requirement: 'Earn 5,000 VEs & sustain a 95% node efficiency score',
    status: 'locked',
    unlockedAt: null,
    description: 'Faceted crystalline architecture reflecting pure light. A hallmark of peak operational precision.',
    colorAccent: '#38bdf8',
    assetPath: 'assets/badges/05-diamond-high-achiever.svg',
    perks: ['+12% Mining Hash Boost', 'Quarterly Dividend VE Boosters', 'Diamond Status Lounge']
  },
  {
    id: 'badge-06',
    level: 6,
    levelDisplay: 'Level 06',
    tier: 'Emerald',
    name: 'Reward Master',
    material: 'Imperial Emerald Gemstone',
    requirement: 'Earn 12,000 VEs & execute 50 high-difficulty extraction protocols',
    status: 'locked',
    unlockedAt: null,
    description: 'High-jewelry step-cut natural emerald encased in solid platinum claws. Reserved for seasoned ecosystem strategists.',
    colorAccent: '#10b981',
    assetPath: 'assets/badges/06-emerald-reward-master.svg',
    perks: ['+16% Mining Hash Boost', 'Custom Hardware Allocation Token', 'Private Protocol Governance']
  },
  {
    id: 'badge-07',
    level: 7,
    levelDisplay: 'Level 07',
    tier: 'Sapphire',
    name: 'Top Performer',
    material: 'Royal Sapphire Gemstone',
    requirement: 'Earn 25,000 VEs & rank in the top 5% of monthly earners',
    status: 'locked',
    unlockedAt: null,
    description: 'Cushion-cut midnight sapphire embraced by celestial titanium wings. Symbolizes unwavering mastery and authority.',
    colorAccent: '#2563eb',
    assetPath: 'assets/badges/07-sapphire-top-performer.svg',
    perks: ['+20% Mining Hash Boost', 'Dedicated Personal Account Officer', 'Annual Physical Challenge Coin']
  },
  {
    id: 'badge-08',
    level: 8,
    levelDisplay: 'Level 08',
    tier: 'Ruby',
    name: 'Elite',
    material: 'Sovereign Ruby Gemstone',
    requirement: 'Earn 50,000 VEs & hold 100 consecutive days of mining activity',
    status: 'locked',
    unlockedAt: null,
    description: 'Deep pigeon-blood ruby chiseled into a formidable shield and anchored in dark ruthenium armor.',
    colorAccent: '#e11d48',
    assetPath: 'assets/badges/08-ruby-elite.svg',
    perks: ['+25% Mining Hash Boost', 'Exclusive Alpha Prototype Testing', 'Direct Council Advisory Access']
  },
  {
    id: 'badge-09',
    level: 9,
    levelDisplay: 'Level 09',
    tier: 'Master',
    name: 'Master Achiever',
    material: 'Imperial Sovereign Master Medal',
    requirement: 'Earn 100,000 VEs & conquer all seasonal master trials',
    status: 'locked',
    unlockedAt: null,
    description: 'An imperial masterwork adorned with twin ruby and sapphire insets, radial starburst rays, and a grand crown.',
    colorAccent: '#f59e0b',
    assetPath: 'assets/badges/09-master-master-achiever.svg',
    perks: ['+35% Mining Hash Boost', 'Custom Hall-of-Fame Avatar Frame', 'Perpetual Royalty Commission']
  },
  {
    id: 'badge-10',
    level: 10,
    levelDisplay: 'Level 10',
    tier: 'Legend',
    name: 'VELOOP Legend',
    material: 'Mythic Sovereign Legend Crest',
    requirement: 'Earn 250,000 VEs & achieve apex ecosystem mastery',
    status: 'locked',
    unlockedAt: null,
    description: 'The crowning achievement of VELOOP Rewards. Features a celestial apex crown, all four cardinal gemstones, and singularity core.',
    colorAccent: '#fbbf24',
    assetPath: 'assets/badges/10-legend-veloop-legend.svg',
    perks: ['+50% Permanent Mining Hash Boost', 'Custom Engraved 1/1 Physical Plaque', 'Lifetime Founding Partner Status']
  }
];

export function getBadgeById(id) {
  return BADGE_DATA.find(b => b.id === id);
}

export function getBadgeByLevel(lvl) {
  return BADGE_DATA.find(b => b.level === lvl);
}
