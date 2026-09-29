/* ==========================================================================
   VELOP REWARDS — APPLICATION CONTROLLER
   Coordinates navigation, viewports, badge rendering, and prototype states
   ========================================================================== */

import { BADGE_DATA } from './badge-system.js';
import { MiningStation } from './mining-station.js';
import { InteractionsEngine } from './interactions.js';
import { setupHandoffTools } from './handoff.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Core Engines
  const miningStation = new MiningStation();
  const interactions = new InteractionsEngine();
  setupHandoffTools();

  // 2. Render Badges across Sections
  renderBadgeCollection();
  renderBadgeStates();
  renderProgressionPath();
  renderHandoffBadges();

  // 3. Section Navigation System
  setupNavigation();

  // 4. Viewport Simulator Controls
  setupViewportSimulator();

  // 5. Badge Filters & Surface Switcher
  setupBadgeFilters();
});

/* --------------------------------------------------------------------------
   Section Navigation System
   -------------------------------------------------------------------------- */
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

  // Direct CTA links to other sections
  document.querySelectorAll('[data-goto-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-goto-tab');
      switchTab(tab);
    });
  });
}

/* --------------------------------------------------------------------------
   Render Badge Collection Grid (Section 06)
   -------------------------------------------------------------------------- */
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

/* --------------------------------------------------------------------------
   Render Badge States Comparison (Section 07)
   -------------------------------------------------------------------------- */
function renderBadgeStates() {
  const container = document.getElementById('badgeStatesGrid');
  if (!container) return;

  // Showcase Bronze, Gold, and Legend across Unlocked vs Locked vs Hover
  const sampleBadges = [BADGE_DATA[0], BADGE_DATA[2], BADGE_DATA[9]];

  container.innerHTML = sampleBadges.map(badge => `
    <div class="card-glass" style="padding: var(--space-6);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-4);">
        <h4 style="font-family:var(--font-display); font-size:var(--text-lg);">${badge.levelDisplay} — ${badge.name}</h4>
        <span class="badge-tag gold">${badge.tier}</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4);">
        <!-- Unlocked State -->
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
          <div class="badge-card-material" style="font-size:11px;">Full metallic luster & sheen</div>
          <div class="badge-card-status">✓ Unlocked</div>
        </div>

        <!-- Locked State -->
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
          <div class="badge-card-material" style="font-size:11px;">Muted saturation + lock glyph</div>
          <div class="badge-card-status">🔒 Locked</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   Render Progression Path Journey (Section 08)
   -------------------------------------------------------------------------- */
function renderProgressionPath() {
  const track = document.getElementById('progressionTrackNodes');
  if (!track) return;

  track.innerHTML = BADGE_DATA.map((badge, idx) => {
    const isCompleted = badge.level < 3;
    const isActive = badge.level === 3; // Current user status
    const isLocked = badge.level > 3;
    const stateClass = isCompleted ? 'completed' : (isActive ? 'active' : 'locked');

    return `
      <div class="progression-node ${stateClass}" data-badge-id="${badge.id}" title="${badge.name}">
        <div class="node-icon-circle">
          <img src="${badge.assetPath}" alt="${badge.name}" />
        </div>
        <div class="node-label">Lvl 0${badge.level}</div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   Render Handoff Badges Asset Grid (Section 10)
   -------------------------------------------------------------------------- */
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

/* --------------------------------------------------------------------------
   Viewport Simulator Engine (Section 04)
   -------------------------------------------------------------------------- */
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

      if (stage) {
        stage.style.maxWidth = width;
      }
      if (metricsPill) {
        metricsPill.textContent = `${label} (${width})`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Badge Filters & Surface Switcher (Section 06)
   -------------------------------------------------------------------------- */
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

