// Remplissez vos détails
const nom = "Franck Dufournet";
const nomArray = [...nom];
const nomSpans = nomArray.map((letter) => `<span>${letter}</span>`).join("");
const profession = "Front-End & Code Créatif";
const introduction = "Découvrez le parcours inspirant de Franck Dufournet, un passionné du développement web en pleine reconversion professionnelle suite à un accident du travail. Son site offre un aperçu fascinant de son talent en HTML, CSS et SASS, et son engagement indéfectible à se perfectionner constamment. Explorez ses projets, appréciez son travail, et connectez-vous avec lui sur GitHub et LinkedIn pour un aperçu plus détaillé de sa transition réussie vers une nouvelle passion.";
const technologies = ["HTML", "CSS",  "SASS", "Git","Github","SEO","Responsive", "JavaScript", "REACT"];


// Trouver les éléments
const nomElement = document.querySelector("#nom");
const professionElement = document.querySelector("#profession");
const introductionElement = document.querySelector("#introduction");
const technologiesElement = document.querySelector("#technologies");

// Définir le contenu du texte
// nomElement.textContent = nom;
nomElement.innerHTML = nomSpans;
professionElement.textContent = profession;
introductionElement.textContent = introduction;

// Créer et ajouter des éléments de liste pour les technologies
for (let technology of technologies) {
  let li = document.createElement("li");
  li.textContent = technology;
  technologiesElement.append(li);
}

let underline = document.querySelector('nav .underline');
let links = document.querySelectorAll('nav .in-link li');

links.forEach(link => {
  link.addEventListener('mouseover', function() {
    underline.style.width = this.offsetWidth + 'px';
    underline.style.left = this.offsetLeft + 'px';
  });
});

//----------------------------SECTION PROJETS-------------------------------------

const projets = [
  
  {
    titre: "Gaming Campus",
    image: "./assets/img/Gaming Campus.png",
    description: "Intégration niveau profesionnel du site Gaming Campus réalisé lors de la formation Mastering-Front-End",
    technologies: ["HTML", "CSS"],
    lienGitHub: "https://github.com/DFranck/Formation-Mastering-Front-End/tree/master/CSS/CSS%20TP5%20int%C3%A9gration%20gaming%20campus",
    lienProjet: ""
  },
  {
    titre: "Projet 1",
    image: "chemin_vers_image1.jpg",
    description: "Description du projet 1...",
    technologies: ["HTML", "CSS", "JavaScript"],
    lienGitHub: "",
    lienProjet: ""
  },
  // Ajoutez autant de projets que vous le souhaitez...
];

const sectionProjets = document.getElementById('projet-container');

projets.forEach(projet => {
  const html = `
    <div class="projet">
      <h3 class="projet-titre">${projet.titre}</h3>
      <div class=img-container>
      <img src="${projet.image}" alt="${projet.titre}" class="projet-image">
      </div>
      <p class="projet-description">${projet.description}</p>
      <h4>Technologies utilisées:</h4>
      <ul class="projet-technologies"> 
      ${projet.technologies.map(tech => `<li>${tech}</li>`).join('')}
      </ul>
      <h5>${projet.lienGitHub ? `<a href="${projet.lienGitHub}" class="projet-lien" target="_blank"><i class="fa-brands fa-github" id="github"></i>Code Source</a>` : ''}</h5>
      <h5>${projet.lienProjet ? `<a href="${projet.lienProjet}" class="projet-lien" target="_blank">Voir le Projet</a>` : ''}</h5>
    </div>
  `;
  sectionProjets.innerHTML += html;
});
