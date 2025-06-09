const messages = [
  "Manaim, your eyes hold a universe that I could get lost in forever.",
  "Every smile of yours feels like sunshine breaking through the clouds.",
  "You don’t just walk—you float, with elegance that steals every breath.",
  "Your presence is like poetry written in light, calm and breathtaking.",
  "Even the stars pause to admire the radiance of your soul.",
  "You’re the kind of beautiful that no mirror can ever reflect.",
  "The way your laughter dances in the air, it's pure music to my heart.",
  "You are not just pretty—you’re the very definition of enchanting.",
  "Your beauty doesn’t just glow—it lights up everything around you.",
  "Even roses envy the grace and bloom you carry with every step."
];

function showPopup(text) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerText = text;

  overlay.addEventListener('click', () => {
    popup.remove();
    overlay.remove();
  });

  document.body.appendChild(overlay);
  document.body.appendChild(popup);
}

// Add 💌 notes
const noteCount = 40;
for (let i = 0; i < noteCount; i++) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = '💌';
  note.style.left = Math.random() * 95 + '%';
  note.style.top = Math.random() * 100 + 100 + '%'; // Start from below screen
  note.addEventListener('click', () => showPopup(messages[Math.floor(Math.random() * messages.length)]));
  document.body.appendChild(note);
}

// Letter events
document.querySelectorAll('.letter').forEach(letter => {
  letter.addEventListener('click', () => {
    showPopup(messages[Math.floor(Math.random() * messages.length)]);
  });
});

