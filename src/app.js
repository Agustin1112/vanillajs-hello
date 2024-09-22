const cardIcons = ["♦", "♥", "♠", "♣"];
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const iconTopLeft = document.querySelector(".icon.top-left");
const iconBottomRight = document.querySelector(".icon.bottom-right");
const numberElement = document.querySelector(".number");
const btn = document.querySelector(".btn");

function generateRandomCard(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCard() {
  const icon = generateRandomCard(cardIcons);
  const number = generateRandomCard(cardNumbers);

  iconTopLeft.innerHTML = icon;
  iconBottomRight.innerHTML = icon;
  numberElement.innerHTML = number;

  // Cambio color de iconos según el palo
  const isRedSuit = icon === "♦" || icon === "♥";
  iconTopLeft.style.color = isRedSuit ? "red" : "black";
  iconBottomRight.style.color = iconTopLeft.style.color;
}

window.onload = generateCard; // Genero una carta al cargar
btn.addEventListener("click", generateCard); // Genero una carta al hacer clic
