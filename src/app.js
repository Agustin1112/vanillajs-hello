window.onload = function() {
  console.log("Hello Rigo from the console!");

  const quien = [
    "Mi perro",
    "Mi vecino",
    "Un amigo",
    "Mi hermano",
    "Un extraño"
  ];

  const accion = [
    "se comió",
    "se perdió",
    "me robó",
    "se quedó atrapado en",
    "decidió no salir de"
  ];

  const que = [
    "mi tarea",
    "mi teléfono",
    "las llaves",
    "mi comida",
    "mi trabajo"
  ];

  const cuando = [
    "justo antes de entregarlo.",
    "cuando iba camino a casa.",
    "mientras estaba en clase.",
    "hace un rato.",
    "en el parque."
  ];

  function getRandomExcuse() {
    const randomQuien = quien[Math.floor(Math.random() * quien.length)];
    const randomAccion = accion[Math.floor(Math.random() * accion.length)];
    const randomQue = que[Math.floor(Math.random() * que.length)];
    const randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
    return `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}`;
  }

  const body = document.body;
  body.style.margin = "0";
  body.style.height = "100%";
  body.style.backgroundColor = "white";
  body.style.display = "flex";
  body.style.flexDirection = "column"; // Cambiado a columna
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.fontFamily = "Arial, sans-serif";
  body.style.textAlign = "center";

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

  body.appendChild(heading);
  body.appendChild(paragraph);
};
