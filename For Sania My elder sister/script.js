const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const message = document.getElementById("secretMessage");
const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quote");
const typingText = document.getElementById("typingText");

const typingMessage = "Sania – a name that means kindness, strength, and dreams. A future doctor whose heart beats with compassion and whose soul glows with love. You are meant for greatness.";
let index = 0;

function type() {
  if (index < typingMessage.length) {
    typingText.innerHTML += typingMessage.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
type();

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    message.classList.remove("hidden");
    musicBtn.textContent = "Pause Music ⏸️";
  } else {
    bgMusic.pause();
    message.classList.add("hidden");
    musicBtn.textContent = "Play Music 🎵";
  }
});

const quotes = [
  "Dream big, Sania. You're made to shine.",
  "Your heart is your stethoscope. Trust it.",
  "One day, you'll wear a white coat and save lives.",
  "The world needs doctors like you – full of love.",
  "Every dream begins with believing. Keep going!",
  "You are strong, brave, and born to inspire.",
  "No one can stop a girl who believes in herself.",
  "Your kindness is your superpower.",
  "You are magic in human form, Sania.",
  "The world is waiting for your healing hands.",
  "Your journey is beautiful. Just like your soul.",
  "Even stars are jealous of your glow.",
  "A sister, a friend, a future doctor — you're everything!"
];

quoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[random];
});

let quoteIndex = 0;
setInterval(() => {
  quoteDisplay.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}, 5000);

document.addEventListener('click', function (e) {
  const sparkle = document.createElement('span');
  sparkle.textContent = '✨';
  sparkle.style.position = 'absolute';
  sparkle.style.left = e.pageX + 'px';
  sparkle.style.top = e.pageY + 'px';
  sparkle.style.fontSize = '20px';
  sparkle.style.animation = 'fadeOut 1s ease-out';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// Floating Magical Stars
const starContainer = document.getElementById("starContainer");
const numberOfStars = 100;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  star.style.opacity = Math.random();
  starContainer.appendChild(star);
}

// Lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
