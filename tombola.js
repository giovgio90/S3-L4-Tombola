let tabelloneElement = document.getElementById("tabellone");

for (let i = 1; i <= 76; i++) {
  let numeroElement = document.createElement("div");
  numeroElement.classList.add("numero");
  numeroElement.innerText = i;
  tabelloneElement.appendChild(numeroElement);
}

let estraiButton = document.getElementById("button");
estraiButton.addEventListener("click", estraiNumero);

const numeriEstratti = [];

const cellaNum = function () {
  const cella = document.createElement("li");
  tabelloneElement.appendChild(cella);
  if (i <= 76) {
    cella.innerText = i;
  }
};
