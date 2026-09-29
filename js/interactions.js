/* ==========================================================================
   VELOP REWARDS — INTERACTIONS, TOOLTIPS, MODAL CELEBRATION & SFX
   ========================================================================== */

import { BADGE_DATA, getBadgeById } from './badge-system.js';

export class InteractionsEngine {
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

  /* --------------------------------------------------------------------------
     1. Interactive Tooltip Engine
     -------------------------------------------------------------------------- */
  setupTooltip() {
    let tooltip = document.getElementById('badgeCustomTooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'badgeCustomTooltip';
      tooltip.className = 'badge-custom-tooltip';
      document.body.appendChild(tooltip);
    }
    this.tooltipElem = tooltip;

    // Attach listeners to badge cards
    document.addEventListener('mouseover', (e) => {
      const card = e.target.closest('[data-badge-id]');
      if (card) {
        const badgeId = card.getAttribute('data-badge-id');
        const badge = getBadgeById(badgeId);
        if (badge) {
          this.showTooltip(badge, card);
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest('[data-badge-id]');
      if (card) {
        this.hideTooltip();
      }
    });
  }

  showTooltip(badge, targetElem) {
    if (!this.tooltipElem) return;

    this.tooltipElem.innerHTML = `
      <div class="tooltip-header">
        <div class="tooltip-name">${badge.name}</div>
        <div class="tooltip-tier">${badge.levelDisplay}</div>
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

    // Boundary check
    if (left < 16) left = 16;
    if (left + tooltipWidth > window.innerWidth - 16) left = window.innerWidth - tooltipWidth - 16;
    if (top < 80) top = rect.bottom + 12;

    this.tooltipElem.style.left = `${left + window.scrollX}px`;
    this.tooltipElem.style.top = `${top + window.scrollY}px`;
    this.tooltipElem.classList.add('visible');
  }

  hideTooltip() {
    if (this.tooltipElem) {
      this.tooltipElem.classList.remove('visible');
    }
  }

  /* --------------------------------------------------------------------------
     2. Achievement Unlocked Modal
     -------------------------------------------------------------------------- */
  setupModal() {
    this.modalElem = document.getElementById('achievementModal');
    this.confettiCanvas = document.getElementById('modalConfettiCanvas');
    if (this.confettiCanvas) {
      this.confettiCtx = this.confettiCanvas.getContext('2d');
    }

    const closeBtn = document.getElementById('modalCloseBtn');
    const continueBtn = document.getElementById('modalContinueBtn');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        this.closeModal();
        // Route to achievements tab smoothly
        const tabBtn = document.querySelector('[data-tab="achievements"]');
        if (tabBtn) tabBtn.click();
      });
    }

    // Close on background click
    if (this.modalElem) {
      this.modalElem.addEventListener('click', (e) => {
        if (e.target === this.modalElem) this.closeModal();
      });
    }
  }

  openModal(badgeId = 'badge-03') {
    const badge = getBadgeById(badgeId) || BADGE_DATA[2]; // Default Gold - Reward Hunter
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
        p.vy += 0.12; // gentle gravity
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
    if (this.confettiAnimId) {
      cancelAnimationFrame(this.confettiAnimId);
    }
  }

  /* --------------------------------------------------------------------------
     3. Toast Notification
     -------------------------------------------------------------------------- */
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

  /* --------------------------------------------------------------------------
     4. Web Audio Synthesizer (Sophisticated Futuristic Chimes)
     -------------------------------------------------------------------------- */
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

    // Expose global sfx trigger
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
        // Grand 3-note harmonic major chord chime
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
        // High-tech ascending frequency swell
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
        // Crisp dual chime
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
      } else {
        // Subtle soft blip
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      console.warn('Audio playback not supported or blocked:', e);
    }
  }

  bindGlobalEvents() {
    // Click on badge cards to trigger modal or preview
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

    // Test notification button
    const toastTestBtn = document.getElementById('testToastBtn');
    if (toastTestBtn) {
      toastTestBtn.addEventListener('click', () => {
        this.showToast('badge-03');
      });
    }

    // Test modal button
    const modalTestBtn = document.getElementById('testModalBtn');
    if (modalTestBtn) {
      modalTestBtn.addEventListener('click', () => {
        this.openModal('badge-10'); // trigger Legend preview
      });
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
