/* ==========================================================================
   VELOP REWARDS — MINING STATION STATE ENGINE & PARTICLE CANVAS
   ========================================================================== */

export class MiningStation {
  constructor() {
    this.state = 'active'; // default start with 'active' to showcase the prompt's 75% state immediately, but can toggle
    this.progress = 75;
    this.veReward = 38;
    this.remainingSeconds = 45 * 60 + 20; // 45:20
    this.timerInterval = null;
    this.veInterval = null;
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;

    this.init();
  }

  init() {
    this.setupCanvas();
    this.bindEvents();
    this.applyState(this.state);
  }

  setupCanvas() {
    const canvas = document.getElementById('miningParticleCanvas');
    if (!canvas) return;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      this.initParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener('resize', resize);
    this.startParticleLoop();
  }

  initParticles(width, height) {
    this.particles = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
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
      const w = rect.width;
      const h = rect.height;

      this.ctx.clearRect(0, 0, w, h);

      const speedMultiplier = this.state === 'active' ? 1.5 : (this.state === 'hover' ? 1.2 : 0.3);

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

      this.animId = requestAnimationFrame(render);
    };

    render();
  }

  bindEvents() {
    const ctaBtn = document.getElementById('primaryMiningCta');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        if (this.state === 'default') {
          this.applyState('active');
          if (window.playSfx) window.playSfx('mine');
        } else if (this.state === 'active') {
          this.applyState('completed');
          if (window.playSfx) window.playSfx('complete');
        } else if (this.state === 'completed') {
          this.applyState('default');
          if (window.playSfx) window.playSfx('claim');
        }
      });

      ctaBtn.addEventListener('mouseenter', () => {
        if (this.state === 'default') {
          this.setVisualState('hover');
        }
      });

      ctaBtn.addEventListener('mouseleave', () => {
        if (this.state === 'default') {
          this.setVisualState('default');
        }
      });
    }

    // State Switcher Buttons on UI
    document.querySelectorAll('[data-mining-state]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetState = e.currentTarget.getAttribute('data-mining-state');
        this.applyState(targetState);
        document.querySelectorAll('[data-mining-state]').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
      });
    });
  }

  setVisualState(stateName) {
    const card = document.getElementById('miningBannerCard');
    if (card) {
      card.setAttribute('data-state', stateName);
    }
  }

  applyState(state) {
    this.state = state;
    const card = document.getElementById('miningBannerCard');
    const ctaBtn = document.getElementById('primaryMiningCta');
    const statusBadge = document.getElementById('miningStatusBadge');
    const statusText = document.getElementById('miningStatusText');
    const progressText = document.getElementById('miningProgressText');
    const progressFill = document.getElementById('miningProgressFill');
    const ringFill = document.getElementById('miningProgressRingFill');
    const ringIcon = document.getElementById('ringMiniIcon');
    const timeText = document.getElementById('miningTimeText');
    const rewardText = document.getElementById('miningRewardText');
    const rateText = document.getElementById('miningRateText');
    const fluxText = document.getElementById('miningFluxText');
    const subtext = document.getElementById('miningSubtext');
    const nextBadgeProgress = document.getElementById('miningNextBadgeProgress');

    if (card) card.setAttribute('data-state', state);

    // Clear active timers
    clearInterval(this.timerInterval);
    clearInterval(this.veInterval);

    // Update Stage Journey Breadcrumb
    const updateJourney = (activeStageNum) => {
      const stageSteps = document.querySelectorAll('#miningStageJourney .stage-step');
      if (stageSteps && stageSteps.length > 0) {
        stageSteps.forEach((stepEl, idx) => {
          const stepNum = idx + 1;
          const dot = stepEl.querySelector('.stage-step-dot');
          stepEl.classList.remove('completed', 'active', 'upcoming', 'active-unlock');
          if (activeStageNum >= 6) {
            if (stepNum < 6) {
              stepEl.classList.add('completed');
              if (dot) dot.textContent = '✓';
            } else {
              stepEl.classList.add('active', 'active-unlock');
              if (dot) dot.textContent = '✓';
            }
          } else {
            if (stepNum < activeStageNum) {
              stepEl.classList.add('completed');
              if (dot) dot.textContent = '✓';
            } else if (stepNum === activeStageNum) {
              stepEl.classList.add('active');
              if (dot) dot.textContent = String(stepNum);
            } else {
              stepEl.classList.add('upcoming');
              if (dot) dot.textContent = String(stepNum);
            }
          }
        });
      }
    };

    if (state === 'default' || state === 'idle') {
      if (statusBadge) statusBadge.setAttribute('data-status', 'idle');
      if (statusText) statusText.textContent = '● READY TO MINE';
      if (progressText) progressText.textContent = '0%';
      if (progressFill) progressFill.style.width = '0%';
      if (ringFill) ringFill.style.strokeDashoffset = '113.1';
      if (ringIcon) ringIcon.textContent = '⚡';
      if (timeText) timeText.textContent = '60:00 standby';
      if (rewardText) rewardText.textContent = '+0 VEs';
      if (rateText) rateText.textContent = 'Rate: +1.2 VE/min • Standby';
      if (fluxText) fluxText.textContent = 'Node Flux: 98.4 GH/s';
      if (subtext) subtext.textContent = 'Activate your mining session and earn VEs while progressing toward your next achievement.';
      if (nextBadgeProgress) nextBadgeProgress.textContent = 'Progress: 0% towards unlock';
      if (ctaBtn) {
        ctaBtn.className = 'btn-mining-cta';
        ctaBtn.disabled = false;
        ctaBtn.innerHTML = `MINE NOW <span class="cta-arrow">⚡</span>`;
      }
      updateJourney(1);
    } else if (state === 'hover') {
      if (statusBadge) statusBadge.setAttribute('data-status', 'hover');
      if (statusText) statusText.textContent = '● READY TO MINE';
      if (progressText) progressText.textContent = '0%';
      if (progressFill) progressFill.style.width = '5%';
      if (ringFill) ringFill.style.strokeDashoffset = '107.4';
      if (ringIcon) ringIcon.textContent = '⚡';
      if (subtext) subtext.textContent = 'Click MINE NOW to spin up quantum reactor coils and start stream.';
      updateJourney(1);
    } else if (state === 'active') {
      if (statusBadge) statusBadge.setAttribute('data-status', 'active');
      if (statusText) statusText.textContent = '● MINING ACTIVE';
      if (subtext) subtext.textContent = 'Quantum extraction active. Rewards streaming to secure wallet.';
      if (progressText) progressText.textContent = '75%';
      if (progressFill) progressFill.style.width = '75%';
      if (ringFill) ringFill.style.strokeDashoffset = '28.3';
      if (ringIcon) ringIcon.textContent = '⚡';
      if (timeText) timeText.textContent = '45:20 remaining';
      if (rewardText) rewardText.textContent = '+38 VEs';
      if (rateText) rateText.textContent = 'Rate: +1.2 VE/min • Burst in 0:08s';
      if (fluxText) fluxText.textContent = 'Node Flux: 98.4 GH/s';
      if (nextBadgeProgress) nextBadgeProgress.textContent = 'Progress: 75% towards unlock';
      if (ctaBtn) {
        ctaBtn.className = 'btn-mining-cta active-mining';
        ctaBtn.innerHTML = `MINING IN PROGRESS... <span class="cta-arrow">⚡</span>`;
      }
      updateJourney(4);
      this.startLiveSimulation();
    } else if (state === 'completed') {
      if (statusBadge) statusBadge.setAttribute('data-status', 'completed');
      if (statusText) statusText.textContent = '● REWARD EARNED';
      if (subtext) subtext.textContent = 'Full extraction quota achieved! Claim your earned VEs now.';
      if (progressText) progressText.textContent = '100%';
      if (progressFill) progressFill.style.width = '100%';
      if (ringFill) ringFill.style.strokeDashoffset = '0';
      if (ringIcon) ringIcon.textContent = '✓';
      if (timeText) timeText.textContent = 'Completed (00:00)';
      if (rewardText) rewardText.textContent = '+50 VEs';
      if (rateText) rateText.textContent = 'Quota Reached: +50 VEs Earned';
      if (nextBadgeProgress) nextBadgeProgress.textContent = 'Milestone Reached! (100%)';
      if (ctaBtn) {
        ctaBtn.className = 'btn-mining-cta claim-rewards';
        ctaBtn.innerHTML = `CLAIM 50 VEs & CONTINUE <span class="cta-arrow">✓</span>`;
      }
      updateJourney(6);
    } else if (state === 'unlocked') {
      if (statusBadge) statusBadge.setAttribute('data-status', 'unlocked');
      if (statusText) statusText.textContent = '● ACHIEVEMENT UNLOCKED';
      if (subtext) subtext.textContent = 'Level 02 Silver badge unlocked! Check your badge collection.';
      if (progressText) progressText.textContent = '100%';
      if (progressFill) progressFill.style.width = '100%';
      if (ringFill) ringFill.style.strokeDashoffset = '0';
      if (ringIcon) ringIcon.textContent = '★';
      if (timeText) timeText.textContent = 'Milestone Unlocked!';
      if (rewardText) rewardText.textContent = '+50 VEs';
      if (nextBadgeProgress) nextBadgeProgress.textContent = 'Badge Unlocked! ✓';
      if (ctaBtn) {
        ctaBtn.className = 'btn-mining-cta claim-rewards';
        ctaBtn.innerHTML = `CONTINUE MINING <span class="cta-arrow">⚡</span>`;
      }
      updateJourney(6);
    }

    // Sync State Switcher Bar Buttons
    document.querySelectorAll('[data-mining-state]').forEach(btn => {
      if (btn.getAttribute('data-mining-state') === state) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  startLiveSimulation() {
    let remaining = 45 * 60 + 20; // 45:20
    let currentVe = 38;

    this.timerInterval = setInterval(() => {
      if (this.state !== 'active') return;
      remaining--;
      if (remaining <= 0) {
        this.applyState('completed');
        return;
      }
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} remaining`;
      const timeElem = document.getElementById('miningTimeText');
      if (timeElem) timeElem.textContent = formatted;
    }, 1000);

    // Subtle counter tick every 8 seconds
    this.veInterval = setInterval(() => {
      if (this.state !== 'active') return;
      currentVe++;
      const veElem = document.getElementById('miningRewardText');
      if (veElem) veElem.textContent = `+${currentVe} VEs`;
      if (currentVe >= 50) {
        this.applyState('completed');
      }
    }, 8000);
  }
}
