/* ==========================================================================
   VELOP REWARDS — DEVELOPER HANDOFF & ASSET UTILITIES
   ========================================================================== */

export function setupHandoffTools() {
  // One-click copy buttons
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

  // Badge SVG Copy & Download Buttons
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
        console.error('Failed to copy SVG code', err);
      }
    });
  });

  // High-Resolution 400x400 Transparent PNG Exporter (Client-side HTML5 Canvas)
  document.querySelectorAll('[data-download-png]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const badgeId = e.currentTarget.getAttribute('data-download-png');
      const badgeCard = document.querySelector(`[data-badge-id="${badgeId}"] img.badge-svg`) ||
                        document.querySelector(`[data-badge-id="${badgeId}"] img`);
      if (!badgeCard) return;

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
          a.download = `${badgeId}-400px.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      };
      img.src = badgeCard.src;
    });
  });
}
