// span qui se déplace sous la bar de nav
const underline = document.querySelector("nav .underline");
const links = document.querySelectorAll("nav .in-link li");
const scrollValue = 500;
//======================================
// Nav link soulignés
//======================================
links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    underline.style.width = this.offsetWidth + "px";
    underline.style.left = this.offsetLeft + "px";
  });
});

//======================================
//Bouton GO TOP
//======================================
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
