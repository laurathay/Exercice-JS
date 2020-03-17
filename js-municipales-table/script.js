// class Candidat{
//   constructor(prenom, nom, parti){
//     this.prenom = prenom;
//     this.nom = nom;
//     this.parti = parti; 
//   }
// }

let candidats = [
  {
    prenom: "Danielle",
    nom: "Simonet",
    parti: "LFI"
  },
  {
    prenom: "Anne",
    nom: "Hidalgo",
    parti: "PS"
  },
  {
    prenom: "Cédric",
    nom: "Villani",
    parti: "-"
  },
  {
    prenom: "Agnès",
    nom: "Buzin",
    parti: "LREM"
  },
  {
    prenom: "Rachida",
    nom: "Dati",
    parti: "LR"
  },
  {
    prenom: "Serge",
    nom: "Federbusch",
    parti: "PCD"
  },
  {
    prenom: "Marcel",
    nom: "Campion",
    parti: "Libérons Paris"
  },
  {
    prenom: "Christophe",
    nom: "Berkani",
    parti: "Pari(s) Citoyen"
  }
];

// Cette fonction met à jour la table de la page HTML avec le contenu du tableau 'candidats'.
function mettreAJourLaTable() {
  document.querySelector('.tbody-candidats').innerHTML = '';
  candidats.forEach(function(candidat) {
    document.querySelector('.tbody-candidats').innerHTML += `<tr><td>${candidat.prenom}</td><td>${candidat.nom}</td><td>${candidat.parti}</td</tr>`;
  });
}

// let uneCandidate = new Candidat ('Antoinette', 'Guhl', 'EELV');

// let candidats = [
// {
//   new Candidat = ('Antoinette', 'Guhl', 'EELV');
  
// }
// ]


// Évènement 'click' du bouton "Afficher un candidat"
document.querySelector('.ajouter-candidat').addEventListener('click', function() {
  // Création d'un nouvel objet pour le nouveau candidat
  let nouveauCandidat = {
    prenom: document.querySelector('.nouveau-candidat-prenom').value,
    nom: document.querySelector('.nouveau-candidat-nom').value,
    parti: document.querySelector('.nouveau-candidat-parti').value
  }
  // On ajoute le nouveau candidat au tableau Javascript
  candidats.push(nouveauCandidat);

  // Maintenant que le tableau Javascript est à jour, on peut mettre à jour la
  // table dans la page HTML.
  mettreAJourLaTable();

  // Finalement, on vide les trois champs de textes (maintenant que leur
  // contenu a été ajouté au tableau).
  document.querySelector('.nouveau-candidat-prenom').value = '';
  document.querySelector('.nouveau-candidat-nom').value = '';
  document.querySelector('.nouveau-candidat-parti').value = '';
});

// Évènement 'click' du bouton "Trier le tableau"
document.querySelector('.bouton-trier').addEventListener('click', function() {
  // On trie le tableau par ordre alphabétique de prénom.
  candidats.sort(function(candidatA, candidatB) {
    // Pour contrôler finement le tri, on donne à la méthode 'sort' une fonction.
    // Cela permet par exemple de spécifier qu'on veut trier par ordre de prénom
    // (plutôt que par ordre de nom, ou de parti.)
    //
    // Voir la documentation de Array.prototype.sort pour les détails.
    return candidatA.prenom > candidatB.prenom;
  });

  // Maintenant que le tableau Javascript a été modifié, on peut mettre à jour la
  // table dans la page HTML.
  mettreAJourLaTable();
});


// Au chargement initial du script, on appelle tout de suite la fonction
// 'mettreAJourLaTable' pour remplir la table dès le premier affichage de la page.
mettreAJourLaTable();
