const rabbit = document.querySelector(".rabbit");
const popup = document.getElementById("rabbit-popup");

rabbit.addEventListener("click", () => {
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
  const rabbit = document.querySelector(".rabbit");
  const popup = document.getElementById("rabbit-popup");

  if (!rabbit || !popup) return;

  rabbit.addEventListener("click", () => {
    popup.style.display = "flex";

    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const rabbit = document.querySelector(".rabbit");
  const overlay = document.getElementById("heart-overlay");

  if (!rabbit || !overlay) return;

  rabbit.addEventListener("click", () => {
    overlay.style.display = "flex";

    setTimeout(() => {
      overlay.style.display = "none";
    }, 3000);
  });
});
const noBtn = document.querySelector(".no-btn");
const fateOverlay = document.getElementById("fate-overlay");

if (noBtn && fateOverlay) {
  noBtn.addEventListener("click", () => {
    fateOverlay.style.display = "flex";

    setTimeout(() => {
      fateOverlay.style.display = "none";
    }, 3000);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.querySelector(".no-btn");
  const fateOverlay = document.getElementById("fate-overlay");

  if (!noBtn || !fateOverlay) return;

  noBtn.addEventListener("click", () => {
    fateOverlay.style.display = "flex";

    setTimeout(() => {
      fateOverlay.style.display = "none";
    }, 3000);
  });
});
