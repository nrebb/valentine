const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionArea = document.getElementById("questionArea");
const yayArea = document.getElementById("yayArea");

const noArea = document.querySelector(".noArea");

// YES click -> show YAY screen + hide question/buttons
yesBtn.addEventListener("click", () => {
  questionArea.classList.add("hidden");
  yayArea.classList.remove("hidden");
});

// NO hover/click -> move away
function moveNoButton() {
  const area = noArea.getBoundingClientRect();

  // random position inside the card area
  const maxX = 240;
  const maxY = 140;

  const x = Math.floor(Math.random() * maxX) - maxX / 2;
  const y = Math.floor(Math.random() * maxY) - maxY / 2;

  noArea.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
