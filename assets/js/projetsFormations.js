const sectionProjets = document.getElementById("projet-container");
const projetsFormations = [];

fetch("assets/json/projetsFormations.json")
  .then((res) => res.json())
  .then((data) => {
    projetsFormations.push(...data);
    projetsFormations.forEach((projet) => {
      const html = `
      <p class="projet-description before">${projet.descriptionBefore}</p>
      <div class="projet">
      <h3 class="projet-titre">${projet.titre}</h3>
      <div class=img-container>
      <img src="${projet.image}" alt="${projet.titre}" class="projet-image">
      </div>
          <div class="description-container">
          
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
          </div>
          <p class="projet-description after">${projet.descriptionAfter}</p>
      `;
      sectionProjets.innerHTML += html;
    });
  });
