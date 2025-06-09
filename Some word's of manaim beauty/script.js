// Reveal secret message
function revealSecret() {
  document.getElementById("secretMessage").style.display = "block";
}

// Full image viewer
function showFullImage(src) {
  const fullImage = document.getElementById("fullImage");
  const fullscreen = document.getElementById("fullscreen");
  fullImage.src = src;
  fullscreen.style.display = "flex";
}

function closeFullImage() {
  document.getElementById("fullscreen").style.display = "none";
}

// Dark mode toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Scroll to top button logic
window.onscroll = function () {
  document.querySelector(".scroll-top").style.display =
    window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Typewriter effect
const text = "You are the reason I smile every day, Manaim ❤️ You are my heart Manaim ❤️ ";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Heart rain background animation
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: 10 + Math.random() * 10,
    speed: 1 + Math.random() * 2,
    alpha: 0.8 + Math.random() * 0.2
  };
}

function drawHeart(heart) {
  ctx.globalAlpha = heart.alpha;
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(heart.x, heart.y);
  ctx.bezierCurveTo(heart.x + heart.size, heart.y - heart.size, heart.x + 2 * heart.size, heart.y + heart.size, heart.x, heart.y + 2 * heart.size);
  ctx.bezierCurveTo(heart.x - 2 * heart.size, heart.y + heart.size, heart.x - heart.size, heart.y - heart.size, heart.x, heart.y);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y += heart.speed;
    drawHeart(heart);
    if (heart.y > canvas.height) {
      hearts[index] = createHeart();
    }
  });
  requestAnimationFrame(animateHearts);
}

for (let i = 0; i < 50; i++) {
  hearts.push(createHeart());
}
animateHearts();

