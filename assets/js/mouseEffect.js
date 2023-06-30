const mouse = document.createElement("span");
const mouseFollow = document.createElement("span");
document.body.appendChild(mouse);
document.body.appendChild(mouseFollow);
mouse.classList = "mouse";
mouseFollow.classList = "mouse-follow";
document.addEventListener("mousemove", (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
  mouseFollow.style.top = e.pageY + "px";
  mouseFollow.style.left = e.pageX + "px";
});
