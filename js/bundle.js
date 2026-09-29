/* ==========================================================================
   VELOP REWARDS — COMPLETE STANDALONE BUNDLE
   Zero-dependency, works on both http:// servers and direct file:/// opening
   ========================================================================== */

(function() {
  'use strict';

  // 1. Full Badge Catalog Data with Embedded SVGs
  const BADGE_DATA = [
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

  function getBadgeById(id) {
    return BADGE_DATA.find(b => b.id === id);
  }

  // 2. Centralized Mining & Badge State Manager (Single Source of Truth)
  class MiningStateManager {
    constructor() {
      this.storagePrefix = 'veloop_mining_state_';
      this.userId = this.getCurrentUserId();
      this.state = this.loadState();
      this.subscribers = [];
      this.miningInterval = null;
      this.syncBadgeDataWithState();
    }

    getCurrentUserId() {
      if (typeof VeloopAuth !== 'undefined' && VeloopAuth.session) {
        const u = VeloopAuth.session.getUser();
        if (u) return u.id || u.email || 'miner_guest';
      }
      return 'miner_guest';
    }

    getDefaultState() {
      return {
        miningStatus: 'idle', // 'idle' | 'active' | 'completed'
        miningProgress: 0, // 0 to 100
        earnedVEs: 0, // VEs in current burst/session
        totalVEBalance: 0, // cumulative balance
        currentMiningStage: 1, // 1: Start Mining, 2: Mining Active, 3: Progressing, 4: Reward Earned, 5: Achievement Unlocked, 6: Next Badge Progress
        unlockedBadges: [], // e.g. ['badge-01']
        currentBadgeLevel: 0, // highest unlocked level (0 = none)
        nextBadgeLevel: 1, // next target level (1 = Bronze)
        sessionStarted: false,
        sessionRemainingTime: 60,
        sessionsCompleted: 0
      };
    }

    loadState() {
      this.userId = this.getCurrentUserId();
      const key = this.storagePrefix + this.userId;
      try {
        const saved = localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.miningStatus === 'active') {
            parsed.miningStatus = 'idle';
            parsed.miningProgress = 0;
            parsed.sessionStarted = false;
          }
          return Object.assign(this.getDefaultState(), parsed);
        }
      } catch (e) {
        console.warn('Could not load mining state', e);
      }
      return this.getDefaultState();
    }

    saveState() {
      this.userId = this.getCurrentUserId();
      const key = this.storagePrefix + this.userId;
      try {
        localStorage.setItem(key, JSON.stringify(this.state));
      } catch (e) {
        console.warn('Could not save mining state', e);
      }
    }

    subscribe(callback) {
      this.subscribers.push(callback);
      try { callback(this.state); } catch (e) {}
    }

    notify() {
      this.saveState();
      this.syncBadgeDataWithState();
      this.subscribers.forEach(cb => {
        try { cb(this.state); } catch (e) { console.error(e); }
      });
    }

    syncBadgeDataWithState() {
      BADGE_DATA.forEach(badge => {
        badge.status = this.state.unlockedBadges.includes(badge.id) ? 'unlocked' : 'locked';
      });
    }

    startMining(onProgress, onMilestoneReached) {
      if (this.state.miningStatus === 'active') return;

      this.state.miningStatus = 'active';
      this.state.sessionStarted = true;
      this.state.currentMiningStage = 2; // Stage 2: Mining Active
      this.state.miningProgress = 0;
      this.state.earnedVEs = 0;
      this.state.sessionRemainingTime = 60;
      this.notify();

      if (window.playSfx) window.playSfx('mine');

      this.state.currentMiningStage = 3; // Stage 3: Progressing

      const totalSteps = 45; // ~4.5 seconds of high-energy extraction
      let step = 0;
      const sessionQuotaVE = 38;

      clearInterval(this.miningInterval);
      this.miningInterval = setInterval(() => {
        step++;
        const progressPercent = Math.min(100, Math.round((step / totalSteps) * 100));
        this.state.miningProgress = progressPercent;

        if (progressPercent >= 75) {
          this.state.earnedVEs = sessionQuotaVE;
        } else if (progressPercent >= 45) {
          this.state.earnedVEs = 25;
        } else if (progressPercent >= 20) {
          this.state.earnedVEs = 10;
        } else {
          this.state.earnedVEs = 0;
        }

        this.state.sessionRemainingTime = Math.max(0, 60 - Math.round(step * 1.3));

        this.notify();

        if (progressPercent >= 100) {
          clearInterval(this.miningInterval);
          this.completeMiningSession(sessionQuotaVE, onMilestoneReached);
        }
      }, 100);
    }

    completeMiningSession(sessionRewardVE, onMilestoneReached) {
      this.state.miningStatus = 'completed';
      this.state.miningProgress = 100;
      this.state.earnedVEs = sessionRewardVE;
      this.state.totalVEBalance += sessionRewardVE;
      this.state.sessionsCompleted += 1;
      this.state.currentMiningStage = 4; // Stage 4: Reward Earned

      if (window.playSfx) window.playSfx('complete');

      // Determine next badge to unlock
      const targetBadgeIndex = this.state.unlockedBadges.length;
      let unlockedBadge = null;

      if (targetBadgeIndex < BADGE_DATA.length) {
        const nextBadge = BADGE_DATA[targetBadgeIndex];
        this.state.unlockedBadges.push(nextBadge.id);
        this.state.currentBadgeLevel = nextBadge.level;
        this.state.nextBadgeLevel = Math.min(10, nextBadge.level + 1);
        unlockedBadge = nextBadge;
        this.state.currentMiningStage = 5; // Stage 5: Achievement Unlocked
      }

      this.notify();

      setTimeout(() => {
        if (onMilestoneReached && unlockedBadge) {
          onMilestoneReached(unlockedBadge);
        }
      }, 450);
    }

    continueMiningStage() {
      this.state.miningStatus = 'idle';
      this.state.currentMiningStage = 6; // Stage 6: Next Badge Progress
      this.state.sessionStarted = false;
      this.state.miningProgress = 0;
      this.state.earnedVEs = 0;
      this.notify();
    }
  }

  // 3. Mining Station Controller & Canvas Simulation
  class MiningStation {
    constructor(stateManager) {
      this.stateManager = stateManager;
      this.canvas = null;
      this.ctx = null;
      this.particles = [];
      this.init();
    }

    init() {
      this.setupCanvas();
      this.bindEvents();
      this.stateManager.subscribe(state => this.renderState(state));
    }

    setupCanvas() {
      const canvas = document.getElementById('miningParticleCanvas');
      if (!canvas) return;
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        canvas.width = (rect.width || 400) * (window.devicePixelRatio || 1);
        canvas.height = (rect.height || 340) * (window.devicePixelRatio || 1);
        this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        this.initParticles(rect.width || 400, rect.height || 340);
      };

      resize();
      window.addEventListener('resize', resize);
      this.startParticleLoop();
    }

    initParticles(width, height) {
      this.particles = [];
      for (let i = 0; i < 35; i++) {
        this.particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.3) * 0.8,
          speedY: (Math.random() - 0.6) * 0.8,
          alpha: Math.random() * 0.6 + 0.2,
          color: Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(245, 158, 11,'
        });
      }
    }

    startParticleLoop() {
      if (!this.canvas) return;
      const render = () => {
        const rect = this.canvas.getBoundingClientRect();
        const w = rect.width || 400;
        const h = rect.height || 340;

        this.ctx.clearRect(0, 0, w, h);
        const isMining = this.stateManager && this.stateManager.state.miningStatus === 'active';
        const speedMultiplier = isMining ? 2.0 : 0.4;

        this.particles.forEach(p => {
          p.x += p.speedX * speedMultiplier;
          p.y += p.speedY * speedMultiplier;

          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;

          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          this.ctx.fillStyle = `${p.color}${p.alpha})`;
          this.ctx.fill();
        });

        requestAnimationFrame(render);
      };

      render();
    }

    bindEvents() {
      const ctaBtn = document.getElementById('primaryMiningCta');
      if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
          const s = this.stateManager.state;
          if (s.miningStatus === 'idle') {
            this.stateManager.startMining(
              null,
              (unlockedBadge) => {
                if (window.interactionsEngine) {
                  window.interactionsEngine.openModal(unlockedBadge.id);
                }
              }
            );
          }
        });
      }

      document.querySelectorAll('[data-mining-state]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetState = e.currentTarget.getAttribute('data-mining-state');
          this.applyVisualPreset(targetState);
          document.querySelectorAll('[data-mining-state]').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
        });
      });
    }

    applyVisualPreset(preset) {
      const card = document.getElementById('miningBannerCard');
      if (card) card.setAttribute('data-state', preset);
    }

    renderState(state) {
      const card = document.getElementById('miningBannerCard');
      const ctaBtn = document.getElementById('primaryMiningCta');
      const statusText = document.getElementById('miningStatusText');
      const progressText = document.getElementById('miningProgressText');
      const progressFill = document.getElementById('miningProgressFill');
      const ringFill = document.getElementById('miningProgressRingFill');
      const ringIcon = document.getElementById('ringMiniIcon');
      const timeText = document.getElementById('miningTimeText');
      const rewardText = document.getElementById('miningRewardText');
      const subtext = document.getElementById('miningSubtext');
      const machineReward = document.getElementById('machineScreenReward');
      const machineStatus = document.getElementById('machineStatusIndicator');

      const nextBadge = BADGE_DATA.find(b => b.level === state.nextBadgeLevel) || BADGE_DATA[0];

      if (state.miningStatus === 'idle') {
        if (card) card.setAttribute('data-state', 'default');
        if (statusText) statusText.textContent = '● STANDBY';
        if (progressText) progressText.textContent = `${state.miningProgress}%`;
        if (progressFill) progressFill.style.width = `${state.miningProgress}%`;
        if (ringFill) ringFill.style.strokeDashoffset = '113.1';
        if (ringIcon) ringIcon.textContent = '⚡';
        if (timeText) timeText.textContent = '60:00 standby';
        if (rewardText) rewardText.textContent = `+${state.earnedVEs} VEs`;
        if (machineReward) machineReward.textContent = `+${state.earnedVEs} VE`;
        if (machineStatus) {
          const txt = machineStatus.querySelector('text');
          if (txt) txt.textContent = 'STANDBY';
        }
        if (subtext) {
          if (state.currentMiningStage === 6) {
            subtext.textContent = `Target: Level 0${nextBadge.level} ${nextBadge.tier} (${nextBadge.name}). Continue mining to unlock!`;
          } else {
            subtext.textContent = 'Activate your session to earn VEs while staying engaged.';
          }
        }
        if (ctaBtn) {
          ctaBtn.className = 'btn-mining-cta';
          ctaBtn.disabled = false;
          ctaBtn.style.pointerEvents = 'auto';
          ctaBtn.style.opacity = '1';
          if (state.currentMiningStage === 6) {
            ctaBtn.innerHTML = `CONTINUE MINING <span class="cta-arrow">⚡</span>`;
          } else {
            ctaBtn.innerHTML = `MINE NOW <span class="cta-arrow">⚡</span>`;
          }
        }
      } else if (state.miningStatus === 'active') {
        if (card) card.setAttribute('data-state', 'active');
        if (statusText) statusText.textContent = '● MINING ACTIVE';
        if (subtext) subtext.textContent = `Mining in progress... target: Level 0${nextBadge.level} ${nextBadge.name}.`;
        if (progressText) progressText.textContent = `${state.miningProgress}%`;
        if (progressFill) progressFill.style.width = `${state.miningProgress}%`;
        if (ringFill) {
          const offset = Math.max(0, 113.1 * (1 - state.miningProgress / 100));
          ringFill.style.strokeDashoffset = offset.toFixed(1);
        }
        if (ringIcon) ringIcon.textContent = '⚡';
        if (timeText) timeText.textContent = `${state.sessionRemainingTime}s remaining`;
        if (rewardText) rewardText.textContent = `+${state.earnedVEs} VEs`;
        if (machineReward) machineReward.textContent = `+${state.earnedVEs} VE`;
        if (machineStatus) {
          const txt = machineStatus.querySelector('text');
          if (txt) txt.textContent = 'MINING ACTIVE';
        }
        if (ctaBtn) {
          ctaBtn.className = 'btn-mining-cta active-mining';
          ctaBtn.disabled = true;
          ctaBtn.style.pointerEvents = 'none';
          ctaBtn.style.opacity = '0.85';
          ctaBtn.innerHTML = `MINING... <span class="cta-arrow">⚡</span>`;
        }
      } else if (state.miningStatus === 'completed') {
        if (card) card.setAttribute('data-state', 'completed');
        if (statusText) statusText.textContent = '● QUOTA ACHIEVED';
        if (subtext) subtext.textContent = `Full extraction quota achieved! +${state.earnedVEs} VEs credited.`;
        if (progressText) progressText.textContent = '100%';
        if (progressFill) progressFill.style.width = '100%';
        if (ringFill) ringFill.style.strokeDashoffset = '0';
        if (ringIcon) ringIcon.textContent = '✓';
        if (timeText) timeText.textContent = 'Milestone Reached (00:00)';
        if (rewardText) rewardText.textContent = `+${state.earnedVEs} VEs`;
        if (machineReward) machineReward.textContent = `+${state.earnedVEs} VE`;
        if (machineStatus) {
          const txt = machineStatus.querySelector('text');
          if (txt) txt.textContent = 'QUOTA MET';
        }
        if (ctaBtn) {
          ctaBtn.className = 'btn-mining-cta claim-rewards';
          ctaBtn.disabled = true;
          ctaBtn.innerHTML = `REWARD EARNED (+${state.earnedVEs} VE) <span class="cta-arrow">✓</span>`;
        }
      }
    }
  }

  // 3. Interactions Engine (Tooltips, Modal, Audio, Confetti)
  class InteractionsEngine {
    constructor() {
      this.audioEnabled = false;
      this.audioCtx = null;
      this.tooltipElem = null;
      this.modalElem = null;
      this.lockedModalElem = null;
      this.toastElem = null;
      this.confettiCanvas = null;
      this.confettiCtx = null;
      this.confettiParticles = [];
      this.confettiAnimId = null;
      this.init();
    }

    init() {
      this.setupTooltip();
      this.setupModal();
      this.setupLockedModal();
      this.setupToast();
      this.setupAudio();
      this.bindGlobalEvents();
    }

    setupTooltip() {
      let tooltip = document.getElementById('badgeCustomTooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'badgeCustomTooltip';
        tooltip.className = 'badge-custom-tooltip';
        document.body.appendChild(tooltip);
      }
      this.tooltipElem = tooltip;

      document.addEventListener('mouseover', (e) => {
        const card = e.target.closest('[data-badge-id]');
        if (card) {
          const badgeId = card.getAttribute('data-badge-id');
          const badge = getBadgeById(badgeId);
          if (badge) this.showTooltip(badge, card);
        }
      });

      document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('[data-badge-id]');
        if (card) this.hideTooltip();
      });
    }

    showTooltip(badge, targetElem) {
      if (!this.tooltipElem) return;
      this.tooltipElem.innerHTML = `
        <div class="tooltip-header">
          <div class="tooltip-name">${badge.name}</div>
          <div class="tooltip-tier">${badge.levelDisplay} • ${badge.tier}</div>
        </div>
        <div class="tooltip-req"><strong>Requirement:</strong> ${badge.requirement}</div>
        <div class="tooltip-req" style="margin-top:2px;">
          <strong>Status:</strong> <span style="color:${badge.status === 'unlocked' ? '#34d399' : '#94a3b8'}">${badge.status === 'unlocked' ? 'Unlocked ✓' : 'Locked 🔒'}</span>
        </div>
        <div class="tooltip-desc" style="margin-top:6px;">${badge.description}</div>
      `;

      const rect = targetElem.getBoundingClientRect();
      const tooltipWidth = 280;
      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      let top = rect.top - 140;

      if (left < 16) left = 16;
      if (left + tooltipWidth > window.innerWidth - 16) left = window.innerWidth - tooltipWidth - 16;
      if (top < 80) top = rect.bottom + 12;

      this.tooltipElem.style.left = `${left + window.scrollX}px`;
      this.tooltipElem.style.top = `${top + window.scrollY}px`;
      this.tooltipElem.classList.add('visible');
    }

    hideTooltip() {
      if (this.tooltipElem) this.tooltipElem.classList.remove('visible');
    }

    setupModal() {
      this.modalElem = document.getElementById('achievementModal');
      this.confettiCanvas = document.getElementById('modalConfettiCanvas');
      if (this.confettiCanvas) {
        this.confettiCtx = this.confettiCanvas.getContext('2d');
      }

      const closeBtn = document.getElementById('modalCloseBtn');
      const continueBtn = document.getElementById('modalContinueBtn');
      const progressionBtn = document.getElementById('modalProgressionBtn');

      if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
      if (progressionBtn) {
        progressionBtn.addEventListener('click', () => {
          this.closeModal();
          const tabBtn = document.querySelector('[data-tab="progression"]');
          if (tabBtn) tabBtn.click();
          const target = document.getElementById('section-progression');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      }
      if (continueBtn) {
        continueBtn.addEventListener('click', () => {
          this.closeModal();
          const tabBtn = document.querySelector('[data-tab="mining-banner"]');
          if (tabBtn) tabBtn.click();
          const target = document.getElementById('miningBannerCard');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      }

      if (this.modalElem) {
        this.modalElem.addEventListener('click', (e) => {
          if (e.target === this.modalElem) this.closeModal();
        });
      }
    }

    openModal(badgeId = 'badge-03') {
      const badge = getBadgeById(badgeId) || BADGE_DATA[2];
      if (!this.modalElem) return;

      const modalTitle = document.getElementById('modalBadgeTitle');
      const modalSubtitle = document.getElementById('modalBadgeSubtitle');
      const modalImage = document.getElementById('modalBadgeImage');
      const modalPills = document.getElementById('modalRewardPills');

      if (modalTitle) modalTitle.textContent = `${badge.tier} — ${badge.name}`;
      if (modalSubtitle) modalSubtitle.textContent = `Congratulations! You've unlocked Level 0${badge.level}. ${badge.description}`;
      if (modalImage) modalImage.src = badge.assetPath;

      if (modalPills && badge.perks) {
        modalPills.innerHTML = badge.perks.map(perk => `
          <div class="modal-reward-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${perk}</span>
          </div>
        `).join('');
      }

      this.modalElem.classList.add('active');
      this.startConfetti();
      this.playSfx('unlock');
    }

    closeModal() {
      if (!this.modalElem) return;
      this.modalElem.classList.remove('active');
      this.stopConfetti();
      if (window.miningStateManager && window.miningStateManager.state.currentMiningStage === 5) {
        window.miningStateManager.continueMiningStage();
      }
    }

    setupLockedModal() {
      this.lockedModalElem = document.getElementById('lockedBadgeModal');
      const closeBtn = document.getElementById('lockedModalCloseBtn');
      const dismissBtn = document.getElementById('lockedModalDismissBtn');
      const mineBtn = document.getElementById('lockedModalMineBtn');

      if (closeBtn) closeBtn.addEventListener('click', () => this.closeLockedModal());
      if (dismissBtn) dismissBtn.addEventListener('click', () => this.closeLockedModal());
      if (mineBtn) {
        mineBtn.addEventListener('click', () => {
          this.closeLockedModal();
          const miningTab = document.querySelector('[data-tab="mining-banner"]');
          if (miningTab) miningTab.click();
          const banner = document.getElementById('miningBannerCard');
          if (banner) banner.scrollIntoView({ behavior: 'smooth' });
        });
      }

      if (this.lockedModalElem) {
        this.lockedModalElem.addEventListener('click', (e) => {
          if (e.target === this.lockedModalElem) this.closeLockedModal();
        });
      }
    }

    openLockedModal(badgeId = 'badge-04') {
      const badge = getBadgeById(badgeId) || BADGE_DATA[3];
      if (!this.lockedModalElem) return;

      const title = document.getElementById('lockedModalBadgeTitle');
      const subtitle = document.getElementById('lockedModalBadgeSubtitle');
      const img = document.getElementById('lockedModalBadgeImage');
      const req = document.getElementById('lockedModalRequirement');
      const pills = document.getElementById('lockedModalRewardPills');
      const progressPercent = document.getElementById('lockedModalProgressPercent');
      const progressFill = document.getElementById('lockedModalProgressFill');
      const currentText = document.getElementById('lockedModalProgressCurrent');
      const targetText = document.getElementById('lockedModalProgressTarget');

      if (title) title.textContent = `${badge.levelDisplay}: ${badge.tier} — ${badge.name}`;
      if (subtitle) subtitle.textContent = badge.description;
      if (img) img.src = badge.assetPath;
      if (req) req.textContent = badge.requirement;

      const dummyProgress = {
        4: { earned: 540, target: 1500, percent: 36 },
        5: { earned: 1480, target: 5000, percent: 29 },
        6: { earned: 1480, target: 12000, percent: 12 },
        7: { earned: 1480, target: 25000, percent: 6 },
        8: { earned: 1480, target: 50000, percent: 3 },
        9: { earned: 1480, target: 100000, percent: 1.5 },
        10: { earned: 1480, target: 250000, percent: 0.6 }
      }[badge.level] || { earned: 540, target: 1500, percent: 36 };

      if (progressPercent) progressPercent.textContent = `${dummyProgress.percent}% Complete`;
      if (progressFill) progressFill.style.width = `${dummyProgress.percent}%`;
      if (currentText) currentText.textContent = `${dummyProgress.earned.toLocaleString()} VEs Earned`;
      if (targetText) targetText.textContent = `${dummyProgress.target.toLocaleString()} VEs Required`;

      if (pills && badge.perks) {
        pills.innerHTML = badge.perks.map(perk => `
          <div class="modal-reward-item">
            <span>🔒</span>
            <span>${perk}</span>
          </div>
        `).join('');
      }

      this.lockedModalElem.classList.add('active');
      this.playSfx('click');
    }

    closeLockedModal() {
      if (!this.lockedModalElem) return;
      this.lockedModalElem.classList.remove('active');
    }

    startConfetti() {
      if (!this.confettiCanvas) return;
      const canvas = this.confettiCanvas;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      this.confettiParticles = [];
      const colors = ['#f59e0b', '#fbbf24', '#38bdf8', '#ffffff', '#10b981'];

      for (let i = 0; i < 45; i++) {
        this.confettiParticles.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 80,
          y: canvas.height / 2 + (Math.random() - 0.5) * 80,
          vx: (Math.random() - 0.5) * 7,
          vy: (Math.random() - 0.7) * 7,
          size: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: Math.random() * 0.015 + 0.008
        });
      }

      const render = () => {
        this.confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
        let activeCount = 0;

        this.confettiParticles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.12;
          p.alpha -= p.decay;

          if (p.alpha > 0) {
            activeCount++;
            this.confettiCtx.fillStyle = p.color;
            this.confettiCtx.globalAlpha = Math.max(0, p.alpha);
            this.confettiCtx.beginPath();
            this.confettiCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.confettiCtx.fill();
          }
        });

        if (activeCount > 0) {
          this.confettiAnimId = requestAnimationFrame(render);
        }
      };

      render();
    }

    stopConfetti() {
      if (this.confettiAnimId) cancelAnimationFrame(this.confettiAnimId);
    }

    setupToast() {
      this.toastElem = document.getElementById('toastNotification');
    }

    showToast(badgeId = 'badge-03') {
      const badge = getBadgeById(badgeId) || BADGE_DATA[2];
      if (!this.toastElem) return;

      const title = this.toastElem.querySelector('.toast-title');
      const desc = this.toastElem.querySelector('.toast-desc');
      const img = this.toastElem.querySelector('.toast-badge-thumb img');

      if (title) title.textContent = badge.name;
      if (desc) desc.textContent = `You've unlocked Level 0${badge.level} ${badge.tier} tier!`;
      if (img) img.src = badge.assetPath;

      this.toastElem.classList.add('show');
      this.playSfx('toast');

      setTimeout(() => {
        this.toastElem.classList.remove('show');
      }, 4500);
    }

    setupAudio() {
      const sfxToggle = document.getElementById('sfxToggleBtn');
      if (sfxToggle) {
        sfxToggle.addEventListener('click', () => {
          this.audioEnabled = !this.audioEnabled;
          sfxToggle.classList.toggle('gold', this.audioEnabled);
          sfxToggle.querySelector('.sfx-state').textContent = this.audioEnabled ? 'ON' : 'OFF';
          if (this.audioEnabled && !this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            this.playSfx('chime');
          }
        });
      }
      window.playSfx = (type) => this.playSfx(type);
    }

    playSfx(type) {
      if (!this.audioEnabled) return;
      try {
        if (!this.audioCtx) {
          this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }

        const ctx = this.audioCtx;
        const now = ctx.currentTime;

        if (type === 'unlock') {
          [440, 554.37, 659.25, 880].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.08);
            gain.gain.setValueAtTime(0.12, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 1.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 1.2);
          });
        } else if (type === 'mine') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.exponentialRampToValueAtTime(580, now + 0.4);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.5);
        } else if (type === 'complete' || type === 'claim') {
          [523.25, 783.99].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.1);
            gain.gain.setValueAtTime(0.1, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.6);
          });
        }
      } catch (e) {
        console.warn('Audio playback not supported or blocked:', e);
      }
    }

    bindGlobalEvents() {
      // Badge clicks in Collection, Progression track, and Profile preview
      document.addEventListener('click', (e) => {
        const card = e.target.closest('[data-badge-id]');
        if (card) {
          const badgeId = card.getAttribute('data-badge-id');
          const badge = getBadgeById(badgeId);
          if (badge) {
            if (badge.status === 'locked') {
              this.openLockedModal(badgeId);
            } else {
              this.openModal(badgeId);
            }
          }
        }
      });

      const toastTestBtn = document.getElementById('testToastBtn');
      if (toastTestBtn) {
        toastTestBtn.addEventListener('click', () => this.showToast('badge-03'));
      }

      const modalTestBtn = document.getElementById('testModalBtn');
      if (modalTestBtn) {
        modalTestBtn.addEventListener('click', () => this.openModal('badge-10'));
      }

      // Context 4 & 5 prototype triggers
      const modalLegendBtn = document.getElementById('openModalLegendBtn');
      if (modalLegendBtn) {
        modalLegendBtn.addEventListener('click', () => this.openModal('badge-10'));
      }
      const modalGoldBtn = document.getElementById('openModalGoldBtn');
      if (modalGoldBtn) {
        modalGoldBtn.addEventListener('click', () => this.openModal('badge-03'));
      }
      const toastMiniBtn = document.getElementById('openToastMiniBtn');
      if (toastMiniBtn) {
        toastMiniBtn.addEventListener('click', () => this.showToast('badge-03'));
      }
      const triggerRewardModalBtn = document.getElementById('triggerRewardModalPreviewBtn');
      if (triggerRewardModalBtn) {
        triggerRewardModalBtn.addEventListener('click', () => this.openModal('badge-10'));
      }
      const triggerToastPreviewBtn = document.getElementById('triggerToastPreviewBtn');
      if (triggerToastPreviewBtn) {
        triggerToastPreviewBtn.addEventListener('click', () => this.showToast('badge-03'));
      }
    }
  }

  // 4. Developer Handoff Tools
  function setupHandoffTools() {
    document.querySelectorAll('[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-copy-target');
        const targetElem = document.getElementById(targetId);
        if (!targetElem) return;

        const textToCopy = targetElem.innerText || targetElem.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = e.currentTarget.innerHTML;
          e.currentTarget.innerHTML = `✓ Copied!`;
          e.currentTarget.style.borderColor = '#10b981';
          e.currentTarget.style.color = '#10b981';

          setTimeout(() => {
            e.currentTarget.innerHTML = originalText;
            e.currentTarget.style.borderColor = '';
            e.currentTarget.style.color = '';
          }, 2000);
        });
      });
    });

    document.querySelectorAll('[data-copy-badge-svg]').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const path = e.currentTarget.getAttribute('data-copy-badge-svg');
        try {
          const res = await fetch(path);
          const svgText = await res.text();
          await navigator.clipboard.writeText(svgText);

          const originalText = e.currentTarget.innerHTML;
          e.currentTarget.innerHTML = `✓ SVG Copied!`;
          setTimeout(() => {
            e.currentTarget.innerHTML = originalText;
          }, 2000);
        } catch (err) {
          // Fallback if fetch over file:// is restricted
          navigator.clipboard.writeText(`<!-- ${path} asset path reference -->`);
          const originalText = e.currentTarget.innerHTML;
          e.currentTarget.innerHTML = `✓ Path Copied!`;
          setTimeout(() => {
            e.currentTarget.innerHTML = originalText;
          }, 2000);
        }
      });
    });

    // High-Resolution 400x400 Transparent PNG Exporter (Client-side HTML5 Canvas)
    document.querySelectorAll('[data-download-png]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const badgeId = e.currentTarget.getAttribute('data-download-png');
        const badge = getBadgeById(badgeId);
        if (!badge) return;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 400;
          canvas.height = 400;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, 400, 400);
          ctx.drawImage(img, 0, 0, 400, 400);

          canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${badge.assetPath.split('/').pop().replace('.svg', '')}-400px.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          });
        };
        img.src = badge.assetPath;
      });
    });
  }

  // 5. DOM Renderers
  function renderBadgeCollection() {
    const grid = document.getElementById('badgeCollectionGrid');
    if (!grid) return;

    grid.innerHTML = BADGE_DATA.map(badge => `
      <div class="badge-card ${badge.status}" data-badge-id="${badge.id}">
        ${badge.status === 'locked' 
          ? `<div class="badge-lock-overlay" title="Locked">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                 <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
               </svg>
             </div>`
          : `<div class="badge-unlocked-overlay" title="Unlocked">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                 <polyline points="20 6 9 17 4 12"></polyline>
               </svg>
             </div>`
        }
        <div class="badge-art-frame">
          <img src="${badge.assetPath}" alt="${badge.name} Badge" class="badge-svg" loading="lazy" />
        </div>
        <div class="badge-level-pill">${badge.levelDisplay} • ${badge.tier}</div>
        <div class="badge-card-name">${badge.name}</div>
        <div class="badge-card-material">${badge.material}</div>
        <div class="badge-card-status">
          ${badge.status === 'unlocked' ? '✓ Unlocked' : '🔒 Locked'}
        </div>
      </div>
    `).join('');
  }

  function renderBadgeStates() {
    const container = document.getElementById('badgeStatesGrid');
    if (!container) return;

    const sampleBadges = [BADGE_DATA[0], BADGE_DATA[2], BADGE_DATA[9]];

    container.innerHTML = sampleBadges.map(badge => `
      <div class="card-glass" style="padding: var(--space-6);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-4);">
          <h4 style="font-family:var(--font-display); font-size:var(--text-lg);">${badge.levelDisplay} — ${badge.name}</h4>
          <span class="badge-tag gold">${badge.tier}</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4);">
          <div class="badge-card unlocked" style="pointer-events:none;">
            <div class="badge-unlocked-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div class="badge-art-frame" style="width:110px; height:110px;">
              <img src="${badge.assetPath}" alt="${badge.name}" class="badge-svg" />
            </div>
            <div class="badge-card-name" style="font-size:14px;">Unlocked State</div>
            <div class="badge-card-material" style="font-size:11px;">Full metallic luster</div>
            <div class="badge-card-status">✓ Unlocked</div>
          </div>

          <div class="badge-card locked" style="pointer-events:none;">
            <div class="badge-lock-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div class="badge-art-frame" style="width:110px; height:110px;">
              <img src="${badge.assetPath}" alt="${badge.name}" class="badge-svg" />
            </div>
            <div class="badge-card-name" style="font-size:14px;">Locked State</div>
            <div class="badge-card-material" style="font-size:11px;">Muted saturation + lock</div>
            <div class="badge-card-status">🔒 Locked</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderProgressionPath() {
    const track = document.getElementById('progressionTrackNodes');
    if (!track) return;

    const state = window.miningStateManager ? window.miningStateManager.state : {
      unlockedBadges: [],
      currentBadgeLevel: 0,
      nextBadgeLevel: 1
    };

    const unlockedCount = state.unlockedBadges.length;

    track.innerHTML = BADGE_DATA.map(badge => {
      const isCompleted = state.unlockedBadges.includes(badge.id);
      const isActive = !isCompleted && badge.level === state.nextBadgeLevel;
      const stateClass = isCompleted ? 'completed' : (isActive ? 'active' : 'locked');

      return `
        <div class="progression-node ${stateClass}" data-badge-id="${badge.id}" title="${badge.name} (${isCompleted ? 'Unlocked' : (isActive ? 'Next Target' : 'Locked')})">
          <div class="node-icon-circle">
            <img src="${badge.assetPath}" alt="${badge.name}" />
          </div>
          <div class="node-label">Lvl 0${badge.level}</div>
        </div>
      `;
    }).join('');

    // Synchronize Progression Overview Header & Metrics
    const heading = document.getElementById('progressionLevelHeading');
    if (heading) heading.textContent = `Level ${unlockedCount} of 10`;

    const standing = document.getElementById('progressionStandingText');
    const currentBadge = BADGE_DATA.find(b => b.level === state.currentBadgeLevel);
    const standingName = currentBadge ? `${currentBadge.tier} Miner (${currentBadge.name})` : 'Recruit Miner (Beginner Tier)';
    if (standing) standing.innerHTML = `<strong style="color:var(--text-gold);">${standingName}</strong>`;

    const nextTitle = document.getElementById('progressionNextTitle');
    const nextBadge = BADGE_DATA.find(b => b.level === state.nextBadgeLevel);
    if (nextTitle) {
      if (unlockedCount >= 10) {
        nextTitle.textContent = 'All 10 Milestones Achieved!';
        nextTitle.style.color = '#fbbf24';
      } else if (nextBadge) {
        nextTitle.textContent = `Level 0${nextBadge.level} — ${nextBadge.tier}: ${nextBadge.name}`;
        nextTitle.style.color = 'var(--blue-cyan)';
      }
    }

    const pctLabel = document.getElementById('progressionPercentLabel');
    const pct = unlockedCount * 10;
    if (pctLabel) pctLabel.innerHTML = `Current Progress: <strong>${pct}% (${unlockedCount} of 10 Tiers)</strong>`;

    const milestonesRem = document.getElementById('progressionMilestonesRemaining');
    if (milestonesRem) {
      const rem = 10 - unlockedCount;
      milestonesRem.textContent = rem > 0 ? `${rem} achievements to reach Legend` : 'Maximum Tier Mastered!';
    }

    const progressBarFill = document.getElementById('progressionProgressBarFill');
    if (progressBarFill) progressBarFill.style.width = `${pct}%`;

    // Next frontier callout widget
    const calloutImg = document.getElementById('progressionNextCalloutImg');
    const calloutTitle = document.getElementById('progressionNextCalloutTitle');
    const calloutDesc = document.getElementById('progressionNextCalloutDesc');
    if (nextBadge && unlockedCount < 10) {
      if (calloutImg) calloutImg.src = nextBadge.assetPath;
      if (calloutTitle) calloutTitle.textContent = `Next Frontier: Level 0${nextBadge.level} ${nextBadge.tier} (${nextBadge.name})`;
      if (calloutDesc) calloutDesc.textContent = `${nextBadge.requirement} — Earn VEs to unlock!`;
    } else {
      if (calloutTitle) calloutTitle.textContent = 'Grandmaster of the VELOOP Forge';
      if (calloutDesc) calloutDesc.textContent = 'All 10 heraldic achievement badges successfully unlocked.';
    }
  }

  function renderHandoffBadges() {
    const container = document.getElementById('handoffBadgeAssetList');
    if (!container) return;

    container.innerHTML = BADGE_DATA.map(badge => `
      <div class="card-glass" style="padding: var(--space-4); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap: var(--space-4);">
        <div style="display:flex; align-items:center; gap: var(--space-3);">
          <div style="width:54px; height:54px; flex-shrink:0;">
            <img src="${badge.assetPath}" alt="${badge.name}" style="width:100%; height:100%; object-fit:contain;" />
          </div>
          <div>
            <div style="font-family:var(--font-display); font-weight:700; font-size:14px;">${badge.levelDisplay} — ${badge.name}</div>
            <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-secondary);">${badge.assetPath}</div>
          </div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn-pill-action" data-copy-badge-svg="${badge.assetPath}">Copy SVG</button>
          <a href="${badge.assetPath}" download="${badge.assetPath.split('/').pop()}" class="btn-pill-action gold" style="text-decoration:none;">Download SVG</a>
          <button class="btn-pill-action" data-download-png="${badge.id}" title="Export 400x400 Transparent PNG">Export PNG (400px)</button>
        </div>
      </div>
    `).join('');
  }

  function setupNavigation() {
    const pills = document.querySelectorAll('.nav-pill');
    const sections = document.querySelectorAll('.case-section');

    function switchTab(targetId) {
      pills.forEach(pill => {
        if (pill.getAttribute('data-tab') === targetId) {
          pill.classList.add('active');
          pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          pill.classList.remove('active');
        }
      });

      sections.forEach(sec => {
        if (sec.id === `section-${targetId}`) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    document.querySelectorAll('[data-goto-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-goto-tab');
        switchTab(tab);
      });
    });
  }

  function setupViewportSimulator() {
    const buttons = document.querySelectorAll('[data-viewport-width]');
    const stage = document.getElementById('responsiveStageContainer');
    const metricsPill = document.getElementById('viewportMetricsDisplay');

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const width = e.currentTarget.getAttribute('data-viewport-width');
        const label = e.currentTarget.getAttribute('data-viewport-label');

        buttons.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (stage) stage.style.maxWidth = width;
        if (metricsPill) metricsPill.textContent = `${label} (${width})`;
      });
    });
  }

  function setupBadgeFilters() {
    const filterBtns = document.querySelectorAll('[data-badge-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.getAttribute('data-badge-filter');
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const cards = document.querySelectorAll('#badgeCollectionGrid .badge-card');
        cards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else if (filter === 'unlocked') {
            card.style.display = card.classList.contains('unlocked') ? 'flex' : 'none';
          } else if (filter === 'locked') {
            card.style.display = card.classList.contains('locked') ? 'flex' : 'none';
          }
        });
      });
    });

    const surfaceBtns = document.querySelectorAll('[data-surface-bg]');
    const grid = document.getElementById('badgeCollectionGrid');
    surfaceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.getAttribute('data-surface-bg');
        surfaceBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (!grid) return;
        if (mode === 'light') {
          grid.className = 'badges-showcase-grid light-surface';
        } else if (mode === 'obsidian') {
          grid.className = 'badges-showcase-grid obsidian-surface';
        } else {
          grid.className = 'badges-showcase-grid';
        }
      });
    });
  }

  // 6. User Profile Crest & Mockup Synchronization
  function syncDashboardMockup(state) {
    if (!state) return;
    const unlockedCount = state.unlockedBadges.length;

    // Metrics in Section 09 Mockup
    const balanceEl = document.getElementById('mockupTotalBalance');
    if (balanceEl) balanceEl.textContent = `${state.totalVEBalance} VEs`;

    const badgesEl = document.getElementById('mockupBadgesUnlocked');
    if (badgesEl) badgesEl.textContent = `${unlockedCount} / 10`;

    // User profile telemetry
    const user = (typeof VeloopAuth !== 'undefined' && VeloopAuth.session)
      ? VeloopAuth.session.getUser()
      : null;

    const currentBadge = BADGE_DATA.find(b => b.level === state.currentBadgeLevel);
    const tierName = currentBadge ? currentBadge.tier : 'Recruit';

    if (user) {
      const nameParts = (user.name || user.email || 'Miner').trim().split(/\s+/);
      const initials = nameParts.length > 1
        ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
        : (nameParts[0].slice(0, 2)).toUpperCase();
      const displayName = user.name || user.email.split('@')[0];

      const sbAvatar = document.getElementById('sidebarAvatar');
      if (sbAvatar) sbAvatar.textContent = initials;
      const sbName = document.getElementById('sidebarUserName');
      if (sbName) sbName.textContent = displayName;
      const sbTier = document.getElementById('sidebarUserTier');
      if (sbTier) sbTier.textContent = `${tierName} Miner`;

      const profAvatar = document.getElementById('profileMockupAvatar');
      if (profAvatar) profAvatar.textContent = initials;
      const profName = document.getElementById('profileMockupName');
      if (profName) profName.textContent = displayName;
      const profTier = document.getElementById('profileMockupTier');
      if (profTier) profTier.textContent = tierName;
      const profBal = document.getElementById('profileMockupBalance');
      if (profBal) profBal.textContent = `VE Balance: ${state.totalVEBalance} VEs`;
    }
  }

  function updateAuthCrestTier(state) {
    if (!state) return;
    const tierEl = document.getElementById('userTierMini');
    if (tierEl) {
      const currentBadge = BADGE_DATA.find(b => b.level === state.currentBadgeLevel);
      const tierName = currentBadge ? currentBadge.tier : 'Recruit';
      tierEl.textContent = `${tierName} Miner`;
    }
  }

  function setupAuthNav() {
    if (typeof VeloopAuth === 'undefined') return;

    const user = VeloopAuth.session.getUser();
    const avatarEl = document.getElementById('userAvatarMini');
    const nameEl = document.getElementById('userNameMini');
    const tierEl = document.getElementById('userTierMini');
    const logoutBtn = document.getElementById('btnLogoutNav');

    if (user) {
      if (avatarEl) {
        const nameParts = (user.name || user.email || 'U').trim().split(/\s+/);
        const initials = nameParts.length > 1
          ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
          : (nameParts[0].slice(0, 2)).toUpperCase();
        avatarEl.textContent = initials;
      }
      if (nameEl) {
        nameEl.textContent = user.name || user.email.split('@')[0];
      }
      if (tierEl) {
        const state = window.miningStateManager ? window.miningStateManager.state : null;
        const currentBadge = state ? BADGE_DATA.find(b => b.level === state.currentBadgeLevel) : null;
        tierEl.textContent = (currentBadge ? currentBadge.tier : 'Recruit') + ' Miner';
      }
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
          await VeloopAuth.logout();
        } catch (err) {
          console.error('Logout error:', err);
        }
        window.location.href = 'login.html';
      });
    }
  }

  // 7. Bootstrap Everything on DOMContentLoaded or Immediately
  function initApp() {
    window.miningStateManager = new MiningStateManager();
    window.interactionsEngine = new InteractionsEngine();
    window.miningStation = new MiningStation(window.miningStateManager);
    setupHandoffTools();
    setupNavigation();
    setupViewportSimulator();
    setupBadgeFilters();
    renderHandoffBadges();
    setupAuthNav();

    // Subscribe reactive UI renderers to state changes
    window.miningStateManager.subscribe((state) => {
      renderBadgeCollection();
      renderBadgeStates();
      renderProgressionPath();
      syncDashboardMockup(state);
      updateAuthCrestTier(state);
    });

    // Run Full Flow Prototype Trigger Button in Section 09
    const runFullFlowBtn = document.getElementById('runFullFlowBtn');
    if (runFullFlowBtn) {
      runFullFlowBtn.addEventListener('click', () => {
        const tabBtn = document.querySelector('[data-tab="mining-banner"]');
        if (tabBtn) tabBtn.click();
        const banner = document.getElementById('miningBannerCard');
        if (banner) banner.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const ctaBtn = document.getElementById('primaryMiningCta');
          if (ctaBtn && !ctaBtn.disabled) {
            ctaBtn.click();
          }
        }, 500);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
