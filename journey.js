const bg = document.querySelector(".float-bg");

/* Floating hearts & roses */
for (let i = 0; i < 30; i++) {
  const span = document.createElement("span");
  span.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 8 + Math.random() * 10 + "s";
  bg.appendChild(span);
}

/* Happy Valentine's floating text */
for (let i = 0; i < 12; i++) {
  const text = document.createElement("span");
  text.innerText = "Happy Valentine’s";
  text.classList.add("valentine-text");
  text.style.left = Math.random() * 100 + "vw";
  text.style.animationDuration = 15 + Math.random() * 10 + "s";
  bg.appendChild(text);
}

/* Store YES moment */
let yesMoment = null;

function revealJourney() {
  const name = document.getElementById("partnerName").value.trim();
  if (!name) return;

  yesMoment = new Date(); // 🔒 lock moment

  document.querySelector(".name-input").style.display = "none";
  document.querySelector(".reveal").classList.remove("hidden");

  document.getElementById("finalName").textContent = name.toUpperCase();
  document.getElementById("dateTime").textContent =
    yesMoment.toLocaleDateString() +
    " • " +
    yesMoment.toLocaleTimeString();
}