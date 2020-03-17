// 1. Danielle Simonnet
// 2. Anne Hidalgo
// 3. David Belliard
// 4. Cédric Villani
// 5. Benjamin Griveaux
// 6. Rachida Dati
// 7. Serge Federbusch
// 8. Marcel Campion
// 9. Christophe Berkani

//   1. Déclarer un tableau let candidats = […]; avec les noms des candidates et candidats aux municipales
let candidats = ["Danielle Simonet", "Anne Hidalgo", "David Belliard", "Cédric Villani", "Benjamin Griveaux", "Rachida Dati", "Serge Federbusch", "Marcel Campion", "Christophe Berkani" ];



//   2. Afficher le contenu du tableau entier dans la console.
//console.log (candidats);



//   3. Afficher le nom du 2ème candidat du tableau dans la console
//console.log(candidats[1]);



//   4. Remplacer le candidat "Benjamin Griveaux" par "Agnès Buzyn". Afficher le tableau dans la console pour vérifier.
// var pos = 4, n = 1;

 //var removedItems = candidats.splice(4, 1, "Agnès Buzyn"); //  facon de Sarah :le 3ème de splice veut dire qu'on remplace par Agnes Buzyn
 //console.log(candidats);

// ma facon
 //var newLength = candidats.push('Agnès Buzyn'); 
 //console.log(candidats);

  //facon officielle et plus courte
 //candidats[4] = 'Agnes Buzyn'
 //console.log(candidats);




 //   5. Ajouter une nouvelle candidate ou candidat à la fin du tableau.
 //var newLength = candidats.push('Laura THAY'); // il y a aussi possibilité de l'écrire comme ca : candidats.push =('laura thay') 
 //console.log(candidats);



 //   6. Inverser la position du premier et du second candidat.

//candidats[0] = 'Anne Hidalgo'
//candidats[1] = 'Danielle Simonet'
//console.log(candidats);



//     6bis. inverser la position du premier et second candidat mais sans cette autre technique 6

// ne marche pas, marche avec les objets 
//const candidats ={"Danielle Simonet":1, "Anne Hidalgo":2, "David Belliard":3, "Cédric Villani":4, "Benjamin Griveaux":5, "Rachida Dati":6, "Serge Federbusch":7, "Marcel Campion":8, "Christophe Berkani":9, length:9 }
//console.log (candidats);
//Array.prototype.reverse.call(candidats);
//console.log(candidats);

// le reverse ne marche que pour tout le tableau en entier donc pour pas adapter pour cette question
//var monArray = ["un", "deux", "trois"];
//candidats.reverse();
//console.log(candidats)

//solution finale :
// candidats1 = candidats[0];
// candidats[0] = candidats[1];
// candidats[1] = candidats1;
// console.log(candidats)
 


 //     7. Trier les candidats par ordre alphabétique.
//candidats.sort();
//console.log(candidats);



 //     8. Coder une recherche : coder une fonction qui renvoie le premier candidat dont le prénom commence par une lettre donnée (par exemple la lettre 'D'). Utiliser la fonction Array.prototype.find. (edited) 

// j'y étais presque
//const found = candidats.find(candidat => candidat > start with $(D));
//console.log(found);

//2eme essaie 
//const found = candidats.find(candidat => candidat === startWith[D];
//console.log(found);


// solution finale:
// function beginWithD (candidat){
//	return candidats.startsWith[0] === 'D'; // le crochet ici veut dire trouve moi le premier élément qui commence par D 
//}

//let candidatTrouve = candidats.find(beginWithD);
//console.log(beginWithD); 


// document.querySelector('.afficher-liste').addEventListener('click', function() {
//   document.querySelector('.liste-candidats').innerHTML = '<ul> <li>Danielle Simonet,</li> <li>Anne Hidalgo,</li> <li>David Belliard,</li> <li>Cédric Villani,</li> <li>Benjamin Griveaux,</li> <li>Rachida Dati,</li> <li>Serge Federbusch,</li> <li>Marcel Campion,</li> <li>Christophe Berkani</li></ul>';
// });


//autre methode
document.querySelector('.afficher-liste').addEventListener('click', function() {
  candidats.forEach(function(candidat){
  	document.querySelector('.liste-candidats').innerHTML += `<ul><li>${candidat}</li> </ul>`;
  });
});

// Quand on rajoute un candidat dans l'input .nouveau candidat 
// Elle s'ajoute à la liste de candidats 

document.querySelector('.nouveau-candidat').addEventListener('click', function()
{
	let nouveauCandidat = document.querySelector('.nouveau-candidat').value;
	  candidats.push(function(nouveauCandidat){
  	document.querySelector('.liste-candidats').innerHTML += `<ul><li>${nouveauCandidat}</li> </ul>`;
  	  });
});


document.querySelector('.nouveau-candidat').addEventListener('click', function()
{
 candidats.push(document.querySelector('.nouveau-candidat').value);
});









