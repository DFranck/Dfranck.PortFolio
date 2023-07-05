//============================================================
// Header
//============================================================
const nom = "Franck Dufournet";
const nomArray = [...nom];
const nomSpans = nomArray.map((letter) => `<span>${letter}</span>`).join("");
const nomElement = document.querySelector("#nom");

nomElement.innerHTML = nomSpans;

//======================================
//Text animation
//======================================
const target = document.getElementById("target");
let array = [" Front-End", " Créatif", " En formation =)"];
let wordIndex = 0;
let letterIndex = 0;

const wordContainer = document.createElement("span");
target.appendChild(wordContainer);

const createLetter = () => {
  const letter = document.createElement("span");
  wordContainer.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  letterIndex++;

  if (letterIndex < array[wordIndex].length) {
    setTimeout(createLetter, 60);
  } else {
    setTimeout(removeWord, 2800);
  }
};

const removeWord = () => {
  if (wordContainer.lastChild) {
    wordContainer.removeChild(wordContainer.lastChild);
    setTimeout(removeWord, 60);
  } else {
    letterIndex = 0;
    wordIndex = (wordIndex + 1) % array.length;
    wordContainer.textContent = ""; // Clear the word container
    setTimeout(createLetter, 200);
  }
};

createLetter();

//======================================
//Bouton GO TOP
//======================================
const scrollValue = 500;
const goTop = document.getElementById("go-top");

window.addEventListener("scroll", () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > scrollValue) {
    goTop.style.opacity = 1;
  } else {
    goTop.style.opacity = 0;
  }
});
