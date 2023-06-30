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

projetFormation.addEventListener("mouseenter", () => {
  projetPro.style.background = "rgba(245, 245, 245, 0.0)";
  projetPro.style.borderBottom = "5px solid transparent";
});

projetFormation.addEventListener("mouseleave", () => {
  projetPro.style.background = "rgba(245, 245, 245, 0.05)";
  projetPro.style.borderBottom = "5px solid yellowgreen";
});
