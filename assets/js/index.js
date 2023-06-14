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

