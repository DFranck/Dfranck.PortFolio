// span qui se déplace sous la bar de nav

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
