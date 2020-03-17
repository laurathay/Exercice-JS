//---------------------  Le cours --------------------

// Définition de la classe 'Candidat'.
// (Par convention, les classes sont nommées en commençant par une majuscule.)
class Candidat {
  // 'constructor' est la méthode appelée pour construire l'objet.
  constructor(prenom, nom, parti) {
    this.prenom = prenom;
    this.nom = nom;
    this.parti = parti;
  }
  direBonjour() {
    console.log(`Bonjour ! Je m'appelle ${this.prenom} !`);
  }
  // En revanche on peut nommer les autres méthodes comme on veut.
  nomComplet() {
    return `${this.prenom} ${this.nom}`;
  }
}
// On instancie de nouveaux objets à partir d'une classe avec le mot-clef 'new'.
let uneCandidate = new Candidat('Danielle', 'Simonnet', 'LFI');
uneCandidate.direBonjour(); // 'Bonjour, je m'appelle Danielle !'

// ------------------- Exercice -----------------------

// 1. Définir en haut du fichier une classe Candidat, qui contienne un prénom, un nom et un parti 
class Candidat{
  constructor(prenom, nom, parti){
    this.prenom = prenom;
    this.nom = nom;
    this.parti = parti; 
  }
}

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

//2. Modifier le tableau candidats, pour le remplir en utilisant notre classe (new Candidat (..)) 
//plutot qu'en créant des objets directement. 
// let uneCandidate = new Candidat ('Antoinette', 'Guhl', 'EELV');

// let candidats = [
//   new Candidat('Antoinette', 'Guhl', 'EELV'), // pas besoin de = entre Candidat et ()
//   new Candidat('Danielle','Simonet','LFI'),     // on met des , et non des ; pcq ici on est pas dans une fonction
//   new Candidat('Anne', 'Hidalgo', 'PS'),
// ];

//3. Modifier le code du Javascript exécuter quand on clique sur Ajouter un candidat,
// pour que l'objet nouvellement crée avec notre class Candidat. 

  let newcandidats = [
{
  new Candidat = ('Antoinette', 'Guhl', 'EELV');
  new Candidat = ('Danielle','Simonet','LFI');
  new Candidat = ('Anne', 'Hidalgo', 'PS');
}
];









