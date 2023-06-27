const underline = document.querySelector("nav .underline");
const links = document.querySelectorAll("nav .in-link li");
const nom = "Franck Dufournet";
const nomArray = [...nom];
const nomSpans = nomArray.map((letter) => `<span>${letter}</span>`).join("");
const profession = "Front-End & Code Créatif";
const introduction =
  "Découvrez le parcours inspirant de Franck Dufournet, un passionné du développement web en pleine reconversion professionnelle suite à un accident du travail. Son site offre un aperçu fascinant de son talent en HTML, CSS et SASS, et son engagement indéfectible à se perfectionner constamment. Explorez ses projets, appréciez son travail, et connectez-vous avec lui sur GitHub et LinkedIn pour un aperçu plus détaillé de sa transition réussie vers une nouvelle passion.";
const technologies = [
  "HTML",
  "CSS",
  "SASS",
  "Git",
  "Github",
  "SEO",
  "Responsive",
  "JavaScript",
  "REACT",
];

const scrollValue = 500;
const nomElement = document.querySelector("#nom");
const professionElement = document.querySelector("#profession");
const introductionElement = document.querySelector("#introduction");
const technologiesElement = document.querySelector("#technologies");
const goTop = document.getElementById("go-top");
let imgUpscale;
//===================================
//MOUSEMOVE
//===================================
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

//====================================
//Création Link Soulignés
//====================================

nomElement.innerHTML = nomSpans;
professionElement.textContent = profession;
introductionElement.textContent = introduction;

for (let technology of technologies) {
  let li = document.createElement("li");
  li.textContent = technology;
  technologiesElement.append(li);
}

// span qui se déplace sous la bar de nav

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    underline.style.width = this.offsetWidth + "px";
    underline.style.left = this.offsetLeft + "px";
  });
});

//----------------------------SECTION PROJETS-------------------------------------

const projets = [
  {
    titre: "ohmyfood",
    image: "./assets/img/ohmyfood.png",
    description: `ohmyfood, est l'intégration du projet 3 de la formation d'OpenClassroom. Il consiste en l'intégration d'une maquette en un site web en utilisant uniquement HTML et CSS (SASS autorisé). Voici un résumé de ce projet :

    Objectif : L'objectif principal du projet 3 est de de coder en "Mobile first"et de versionner le code sur GitHub afin de le rendre accessible sur GitHub Pages.`,
    technologies: ["HTML", "CSS", "SASS"],
    lienGitHub: "https://github.com/DFranck/Formation-OpenClassroom-Projet3",
    lienProjet: "https://dfranck.github.io/Formation-OpenClassroom-Projet3/",
  },
  {
    titre: "Booki",
    image: "./assets/img/Booki.png",
    description: `Le projet 2 d'OpenClassroom est un projet pratique qui fait partie de la formation de développeur web. Il consiste en l'intégration d'une maquette en un site web en utilisant uniquement HTML et CSS. Voici un résumé de ce projet :

    Objectif : L'objectif principal du projet 2 est d'apprendre et de mettre en pratique les bases de l'intégration web en utilisant HTML et CSS. Les étudiants sont appelés à développer des compétences essentielles en intégration, comme la création de la structure de base d'un site web, le style, la mise en page, et la réactivité.`,
    technologies: ["HTML", "CSS"],
    lienGitHub:
      "https://github.com/DFranck/Formation-OpenClassromm/tree/main/Projet%202",
    lienProjet: "",
  },
  {
    titre: "Le Resto",
    image: "./assets/img/Le Resto.png",
    description: `Cette réalisation, qui fait partie de ma formation "Mastering-Front-End", met en évidence une maîtrise avancée des technologies CSS et SASS. Elle intègre l'utilisation de mixins et de variables CSS, ce qui renforce la cohérence du design et facilite la maintenance du code. Ce travail a été effectué en SASS, un préprocesseur CSS, démontrant ainsi une approche professionnelle du développement web.`,
    technologies: ["HTML", "CSS", "SASS"],
    lienGitHub:
      "https://github.com/DFranck/Formation-Mastering-Front-End/tree/master/SASS/SASS%20TP2",
    lienProjet: "",
  },
  {
    titre: "La montagne",
    image: "./assets/img/La montagne.png",
    description: `Cette intégration de ma formation "Mastering-Front-End" présente une utilisation avancée des technologies CSS et SASS. Il intègre les mixins et les variables CSS, contribuant à la cohérence du design et à la facilité de maintenance du code. ce dernier a été réalisé en SASS, un préprocesseur CSS, attestant d'une approche professionnelle du développement web.`,
    technologies: ["HTML", "CSS", "SASS"],
    lienGitHub:
      "https://github.com/DFranck/Formation-Mastering-Front-End/tree/master/SASS/SASS%20TP1",
    lienProjet: "",
  },
  {
    titre: "Gaming Campus",
    image: "./assets/img/Gaming Campus.png",
    description: `J'ai eu le plaisir lors de ma formation "Mastering-Front-End" de travailler sur le projet d'intégration du le Gaming Campus, une école dédiée aux jeux vidéo et à l'esport. J'ai utilisé HTML et CSS pour réaliser l'intégration de cette interface. J'ai également mis en œuvre les techniques de Responsive Design pour assurer une excellente expérience utilisateur sur tous les types d'appareils, qu'il s'agisse d'ordinateurs de bureau, de tablettes ou de smartphones.`,
    technologies: ["HTML", "CSS"],
    lienGitHub:
      "https://github.com/DFranck/Formation-Mastering-Front-End/tree/master/CSS/CSS%20TP5%20int%C3%A9gration%20gaming%20campus",
    lienProjet: "",
  },
];

const sectionProjets = document.getElementById("projet-container");

projets.forEach((projet) => {
  const html = `
    <div class="projet">
      <h3 class="projet-titre">${projet.titre}</h3>
      <div class=img-container>
      <img src="${projet.image}" alt="${projet.titre}" class="projet-image">
      </div>
      <p class="projet-description">${projet.description}</p>
      <h4>Technologies utilisées:</h4>
      <ul class="projet-technologies"> 
      ${projet.technologies.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
      <h5>${
        projet.lienGitHub
          ? `<a href="${projet.lienGitHub}" class="projet-lien" target="_blank"><i class="fa-brands fa-github" id="github"></i>Code Source</a>`
          : ""
      }</h5>
      <h5>${
        projet.lienProjet
          ? `<a href="${projet.lienProjet}" class="projet-lien" target="_blank"><i class="fa-solid fa-globe"></i>Version déployée</a>`
          : ""
      }</h5>
    </div>
  `;
  sectionProjets.innerHTML += html;
});

window.addEventListener("scroll", () => {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > scrollValue) {
    goTop.style.opacity = 1;
  } else {
    goTop.style.opacity = 0;
  }
});
