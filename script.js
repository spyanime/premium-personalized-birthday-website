/* Personalized Name */
const personName = "Pinky"; // Change this to the birthday person's name
document.getElementById("name").innerText = personName;

/* Wishes */
const wishes = [
  `🎉 Happy Birthday ${personName}! May your day be filled with joy!`,
  `🎂 Wishing you success and happiness, ${personName}!`,
  `💖 ${personName}, you deserve all the love today!`,
  `🌟 Keep shining bright, ${personName}!`,
  `🎁 May all your dreams come true, ${personName}!`
];

function showWish() {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById("wishBox").innerHTML = randomWish;
}

/* Music */
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
  document.getElementById("musicBtn").innerText = "Music Playing...";
}

/* Panda Surprise */
function showPanda() {
  const panda = document.getElementById("panda");
  panda.classList.add("show");
  document.getElementById("wishBox").innerHTML = `🐼 The Panda says: Happy Birthday ${personName}, lots of hugs and smiles!`;
}

/* Confetti Animation */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 1 + 1
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,0,100,0.8)";
  ctx.beginPath();
  for (let c of confetti) {
    ctx.moveTo(c.x, c.y);
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updateConfetti();
}

function updateConfetti() {
  for (let c of confetti) {
    c.y += c.d;
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawConfetti, 20);
