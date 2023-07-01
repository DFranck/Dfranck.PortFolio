const nom = "Franck Dufournet";
const nomArray = [...nom];
const nomSpans = nomArray.map((letter) => `<span>${letter}</span>`).join("");
const nomElement = document.querySelector("#nom");

nomElement.innerHTML = nomSpans;
