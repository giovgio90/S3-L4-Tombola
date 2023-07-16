const button = document.querySelector("button");
let tabellone = document.getElementById("tabellone");
let sceltaRandom = document.querySelector("p");

const numeriGenerati = [];

for (let i = 0; i < 75; i++) {
  let contenitoreCelle = document.createElement("div");
  let celle = document.createElement("h3");
  celle.innerText = i + 1;
  contenitoreCelle.appendChild(celle);
  tabellone.appendChild(contenitoreCelle);
}

const randomNumb = (eventButton) => {
  for (let i = 0; i < 75; i++) {
    randomic = Math.floor(Math.random() * 75) + 1;
    console.log(eventButton);
    console.log(eventButton.target);

    if (numeriGenerati.includes(randomic)) {
      break;
    }
  }

  numeriGenerati.push(randomic);
  sceltaRandom.innerText = randomic;

  const casellaEvidenziata = document.querySelector(`#tabellone div:nth-child(${randomic})`);

  casellaEvidenziata.classList.add("evidenziata");
};

button.onclick = randomNumb;
