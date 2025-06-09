const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const loveMessages = [
  "I Love You Manaim",
  "You're My Universe",
  "Forever Yours",
  "You're My Dream",
  "My Heart Beats for You",
  "You Complete Me",
  "You're My Everything",
  "With You Always",
  "Together Forever",
  "Endless Love",
  "You're My Sunshine",
  "My Soul Belongs to You",
  "You're My Sweetheart",
  "You're My Home",
  "I Adore You Manaim",
  "You're My Favorite Person",
  "You Make Life Beautiful",
  "Forever and Always",
  "My Love Grows for You",
  "You Light Up My World",
  "Only You Manaim",
  "You're My Forever",
  "My Love, My Life",
  "Every Beat is Yours"
];


class Firework {
  constructor(x, y, color, text = null) {
    this.x = x;
    this.y = canvas.height;
    this.targetY = y;
    this.color = color;
    this.radius = 2;
    this.exploded = false;
    this.particles = [];
    this.text = text;
  }

  update() {
    if (!this.exploded) {
      this.y -= 5;
      if (this.y <= this.targetY) {
        this.explode();
      }
    } else {
      this.particles.forEach(p => p.update());
    }
  }

  draw() {
    if (!this.exploded) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      this.particles.forEach(p => p.draw());
    }
  }

  explode() {
    this.exploded = true;
    const count = 100;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 5 + 2;
      this.particles.push(new Particle(this.x, this.y, angle, speed, this.color));
    }
    if (this.text) {
      createTextExplosion(this.text, this.x, this.y);
    }
  }
}

class Particle {
  constructor(x, y, angle, speed, color) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.color = color;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05;
    this.alpha -= 0.01;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

const fireworks = [];
const activeMessages = [];

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    if (fw.exploded && fw.particles.every(p => p.alpha <= 0)) {
      fireworks.splice(i, 1);
    }
  });

  // Draw messages
  const now = Date.now();
  for (let i = activeMessages.length - 1; i >= 0; i--) {
    const { text, x, y, startTime } = activeMessages[i];
    const elapsed = now - startTime;
    if (elapsed > 3500) {
      activeMessages.splice(i, 1);
    } else {
      const opacity = 1 - elapsed / 3500;
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.font = 'bold 24px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ff69b4';
      ctx.shadowColor = '#ff69b4';
      ctx.shadowBlur = 10;
      ctx.fillText(text, x, y);
      ctx.restore();
    }
  }

  requestAnimationFrame(animate);
}

function launchFirework() {
  const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
  const y = Math.random() * canvas.height * 0.4 + canvas.height * 0.1;
  const color = `hsl(${Math.random() * 360}, 100%, 70%)`;

  // Always assign a message
  const text = loveMessages[Math.floor(Math.random() * loveMessages.length)];

  fireworks.push(new Firework(x, y, color, text));
}


function createTextExplosion(text, x, y) {
  activeMessages.push({
    text,
    x,
    y,
    startTime: Date.now()
  });
}

setInterval(launchFirework, 1200);
animate();

