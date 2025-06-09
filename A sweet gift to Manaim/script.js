// Typing effect
const text = `Manaim, you are a poem written in the language of beauty.
Your eyes shine brighter than the stars.
Your smile is the sunrise that brightens my darkest days.
You are elegance, kindness, and love — all wrapped in the heart of a girl.
You don’t just walk into a room, you light it up.
You are a blessing I thank the universe for every day. 🌸💖`;

let i = 0;
function typeText() {
  const target = document.getElementById("love-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}
window.onload = function () {
  typeText();
  startHearts();
};

// Show hidden message
function showSecret() {
  document.getElementById("secret-text").style.display = "block";
}

// Music toggle
function toggleMusic() {
  const music = document.getElementById("bg-music");
  music.paused ? music.play() : music.pause();
}

// Full image popup
function openFullImage() {
  document.getElementById("full-image").style.display = "flex";
}
function closeFullImage() {
  document.getElementById("full-image").style.display = "none";
}

// Falling hearts animation
function startHearts() {
  const canvas = document.getElementById('heart-canvas');
  const ctx = canvas.getContext('2d');
  let hearts = [];

  resize();
  window.addEventListener('resize', resize);

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawHeart(x, y, size) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fillStyle = '#ff4d88';
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      drawHeart(h.x, h.y, h.size);
      h.y += h.speed;
      if (h.y > canvas.height) h.y = -10;
    });
    requestAnimationFrame(animate);
  }

  function generateHearts() {
    for (let i = 0; i < 50; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 8,
        speed: Math.random() * 1 + 0.5
      });
    }
  }

  generateHearts();
  animate();
}



