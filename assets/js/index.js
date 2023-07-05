//============================================================
// Header
//============================================================
const nom = "Franck Dufournet";
const nomArray = [...nom];
const nomSpans = nomArray.map((letter) => `<span>${letter}</span>`).join("");
const nomElement = document.querySelector("#nom");

nomElement.innerHTML = nomSpans;

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
