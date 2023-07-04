//===========================================================
// Projets
//===========================================================

const sectionProjets = document.getElementById("projet-container");
const projetsFormations = [];

fetch("assets/json/projetsFormations.json")
  .then((res) => res.json())
  .then((data) => {
    projetsFormations.push(...data);
    projetsFormations.forEach((projet) => {
      const html = `
      <div class="card">
      <h3 class="projet-titre">${projet.titre}</h3>
      <img src="${projet.image}" alt="${projet.titre}" class="projet-image">
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
  });

//*********************Cards */