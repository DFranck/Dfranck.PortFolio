// const mouse = document.createElement("span");
// const mouseFollow = document.createElement("span");
// document.body.appendChild(mouse);
// document.body.appendChild(mouseFollow);
// mouse.classList = "mouse";
// mouseFollow.classList = "mouse-follow";
// document.addEventListener("mousemove", (e) => {
//   mouse.style.top = e.pageY + "px";
//   mouse.style.left = e.pageX + "px";
//   mouseFollow.style.top = e.pageY + "px";
//   mouseFollow.style.left = e.pageX + "px";
// });

//==================================================
// Changement de style des titre h2 section projets
//==================================================
const projetFormation = document.querySelector(".projets-formations");
const projetPro = document.querySelector(".projets-professionnels");

projetPro.addEventListener("mouseenter", () => {
  projetFormation.style.background = "rgba(245, 245, 245, 0.0)";
  projetFormation.style.borderBottom = "5px solid transparent";
});

projetPro.addEventListener("mouseleave", () => {
  projetFormation.style.background = "rgba(245, 245, 245, 0.05)";
  projetFormation.style.borderBottom = "5px solid yellowgreen";
});
