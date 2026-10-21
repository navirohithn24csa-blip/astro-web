/**
 * AstroChat - Cosmic Starfield & Constellations Canvas Background
 */

(function () {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const stars = [];
  const shootingStars = [];
  const STAR_COUNT = Math.min(Math.floor((width * height) / 4500), 160);
  const MOUSE = { x: null, y: null, radius: 140 };

  // Generate stars
  function initStars() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() * 1.5 + 0.5,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        color: getRandomStarColor(),
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }
  }

  function getRandomStarColor() {
    const colors = [
      'rgba(255, 255, 255, ',
      'rgba(245, 158, 11, ', // Starlight Gold
      'rgba(147, 197, 253, ', // Ethereal Blue
      'rgba(216, 180, 254, ', // Mystic Purple
      'rgba(103, 232, 249, '  // Cyan
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Shooting star spawn
  function spawnShootingStar() {
    if (shootingStars.length >= 2) return;
    const startX = Math.random() * width * 0.8;
    const startY = Math.random() * height * 0.4;
    const length = Math.random() * 120 + 80;
    const speed = Math.random() * 8 + 8;
    const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // approx 45 degrees

    shootingStars.push({
      x: startX,
      y: startY,
      length: length,
      speed: speed,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  // Handle Resize
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initStars();
  });

  // Track Mouse
  window.addEventListener('mousemove', (e) => {
    MOUSE.x = e.clientX;
    MOUSE.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    MOUSE.x = null;
    MOUSE.y = null;
  });

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle dark cosmic ambient glow in canvas
    const gradient = ctx.createRadialGradient(
      width * 0.5,
      height * 0.4,
      50,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.8
    );
    gradient.addColorStop(0, 'rgba(30, 27, 75, 0.25)'); // deep indigo
    gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.4)');
    gradient.addColorStop(1, 'rgba(3, 7, 18, 0.85)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw and connect stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Twinkle
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha > 0.95) {
        s.alpha = 0.95;
        s.twinkleDir = -1;
      } else if (s.alpha < 0.2) {
        s.alpha = 0.2;
        s.twinkleDir = 1;
      }

      // Drift
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = width;
      if (s.x > width) s.x = 0;
      if (s.y < 0) s.y = height;
      if (s.y > height) s.y = 0;

      // Mouse interaction
      if (MOUSE.x !== null && MOUSE.y !== null) {
        const dx = MOUSE.x - s.x;
        const dy = MOUSE.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE.radius) {
          const force = (1 - dist / MOUSE.radius) * 1.5;
          s.x -= (dx / dist) * force;
          s.y -= (dy / dist) * force;
          s.radius = s.baseRadius * 1.8;
        } else {
          s.radius = s.baseRadius;
        }
      }

      // Render star
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color + s.alpha + ')';
      ctx.shadowBlur = s.radius * 4;
      ctx.shadowColor = s.color + '0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw faint constellation lines between nearby stars
      for (let j = i + 1; j < stars.length; j++) {
        const s2 = stars[j];
        const dist = Math.hypot(s.x - s2.x, s.y - s2.y);
        if (dist < 90) {
          const lineAlpha = (1 - dist / 90) * 0.12 * Math.min(s.alpha, s2.alpha);
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Update and draw shooting stars
    if (Math.random() < 0.015) {
      spawnShootingStar();
    }

    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const meteor = shootingStars[i];
      meteor.x += meteor.dx;
      meteor.y += meteor.dy;
      meteor.alpha -= meteor.decay;

      if (meteor.alpha <= 0 || meteor.x > width || meteor.y > height) {
        shootingStars.splice(i, 1);
        continue;
      }

      const tailX = meteor.x - meteor.dx * (meteor.length / meteor.speed);
      const tailY = meteor.y - meteor.dy * (meteor.length / meteor.speed);

      const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${meteor.alpha})`);
      grad.addColorStop(0.3, `rgba(216, 180, 254, ${meteor.alpha * 0.7})`);
      grad.addColorStop(1, 'rgba(147, 51, 234, 0)');

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  }

  initStars();
  animate();
})();
