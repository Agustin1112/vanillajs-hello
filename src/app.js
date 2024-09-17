/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Genera el HTML dinámicamente
window.onload = function() {
  console.log("Hello Rigo from the console!");

  const excuses = [
    "Se me cayó el café sobre la computadora y ahora no funciona.",
    "Mi gato se escondió en el coche y no podía encontrarlo.",
    "Una nube se interpuso entre mi camino y me retrasó.",
    "Me quedé sin internet justo cuando iba a enviar el trabajo.",
    "El semáforo se quedó en rojo y no podía avanzar.",
    "Un pájaro me robó el sombrero y tuve que ir a recuperarlo.",
    "Me perdí en mi propia casa.",
    "Tuve que ayudar a un amigo a mover muebles de emergencia.",
    "Un grupo de turistas bloqueó la calle y no pude pasar.",
    "Se me acabó la batería del teléfono y no podía llamar."
  ];

  function getRandomExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
  }
  // Crear elementos HTML
  const body = document.body;
  body.style.margin = "0";
  body.style.height = "100%";
  body.style.backgroundColor = "white";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.fontFamily = "Arial, sans-serif";
  body.style.textAlign = "center";

  const container = document.createElement("div");
  const heading = document.createElement("h1");
  heading.innerText = "0MG no me vas a creer pero....";
  heading.style.color = "#000";
  heading.style.fontSize = "2em";

  const paragraph = document.createElement("p");
  paragraph.id = "excuse";
  paragraph.style.fontSize = "1.5em";
  paragraph.style.color = "#000";
  paragraph.style.fontWeight = "bold";
  paragraph.innerText = getRandomExcuse();

  container.appendChild(heading);
  container.appendChild(paragraph);
  body.appendChild(container);
};
