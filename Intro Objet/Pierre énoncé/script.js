// Introduction aux objets
​
//---------------------------------------------------
// 1. Définir un objet simple.
​
let adaLovelace = {
  // 'nom', 'prenom' et 'notes' s'appellent des propriétés de l'objet
  nom: 'Lovelace',
  prenom: 'Ada',
  note: 'programmé le premier ordinateur'
}
​
console.log(`Je suis une développeuse, et je m’appelle ${adaLovelace.nom}`);
// 'Je suis une développeuse, et je m’appelle Lovelace'
​
​
//---------------------------------------------------
// 2. La variable 'developpeuse' peut contenir une personne, ou une autre.
//    Mais dans tous les cas, une developpeuse aura une propriété 'nom'.
​
let XIXSiecle = false;
let developpeuse;
​
if (XIXSiecle = true) {
  developpeuse = {
    nom: 'Lovelace',
    prenom: 'Ada',
    note: 'programmé le premier ordinateur'
  }
} else {
  developpeuse = {
    nom: 'Hopper',
    prenom: 'Grace',
    note: 'écrit le premier compilateur'
  }
}
​
console.log(`Je suis une développeuse, et je m’appelle ${developpeuse.nom}`);
// 'Je suis une développeuse, et je m’appelle Hopper'
​
​
//----------------------------------------------------
// 3. On peut ajouter une propriété à un objet même après sa création.
​
developpeuse.parleAnglais = true;
console.log(`Est-ce que je parle anglais ? ${developpeuse.parleAnglais}`)
// 'Est-ce que je parle anglais ? true'
​
​
//---------------------------------------------------
// 4. On peut mettre une fonction dans un objet.
//    Dans ce cas, cela s'appelle une 'méthode de l'objet.
​
let developpeuse = {
  nom: 'Lovelace',
  prenom: 'Ada',
  note: 'programmé le premier ordinateur',
​
  // 'parlerDeSoi' est une méthode de l'objet
  parlerDeSoi: function() {
    console.log(`Dans ma vie, j’ai fait plein de choses !`);
  }
}
​
developpeuse.parlerDeSoi();
// 'Dans ma vie, j’ai fait plein de choses !'
​
​
//---------------------------------------------------
// 5. On peut également ajouter une méthode à un objet même après sa création.
​
developpeuse.parlerDeSoi = function() {
  console.log(`Dans ma vie, j’ai fait plein de choses !`);
}
developpeuse.parlerDeSoi();
// 'Dans ma vie, j’ai fait plein de choses !'
​
​
//---------------------------------------------------
// 6. On peut accéder aux propriétés d'un objet depuis une méthode,
//    en utilisant le mot-clef 'this'.
​
let developpeuse = {
  nom: 'Lovelace',
  prenom: 'Ada',
  note: 'programmé le premier ordinateur',
​
  parlerDeSoi: function() {
    console.log(`Dans ma vie, j’ai ${this.note}.`);
  }
}
​
developpeuse.parlerDeSoi();
