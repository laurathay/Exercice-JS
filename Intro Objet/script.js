// 1. Choisir une scientifique dans la Liste de femmes scientifiques sur Wikipedia (https://fr.wikipedia.org/wiki/Liste_de_femmes_scientifiques).
//Ahn In-Young

// Créer un objet Javascript nommé `uneScientifique` avec trois propriété : 'nom', 'année de naissance', et 'réalisations'.
// let uneScientifique = {
// 	nom: "In-Young",
// 	naissance: "12 aout 1954",
// 	realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong."
// }

// 2. Utilisez console.log pour afficher le nom de la scientifique dans la console, avec un message de bienvenue. Par exemple "Bonjour, je m’apelle [NOM] et je suis une scientifique !"
// console.log(`Bonjour, je m\’apelle ${uneScientifique.nom} et je suis une scientifique !`)

// 3. Écrivez une nouvelle ligne de code, qui ajoute une propriété 'aRecuUnPrixNobel' à votre scientifique, et mettez la propriété à 'true'. (NB: ne modifiez pas le code que vous avez écrit plus haut pour créer votre objet. Faites cette étape avec une **nouvelle** ligne de code.)
//   let uneScientifique = {
// 	nom: "In-Young",
// 	naissance: "12 aout 1954",
// 	realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong.",
// 	aRecuUnPrixNobel = true
// }

// 4. Ajoutez à votre objet 'uneScientifique' une méthode nommée 'parlerDeLinformatique' , qui affiche dans la console le message 'En informatique, nous sommes tous perchés sur des épaules de géantes.'qui (NB: pareil, ne modifiez pas votre code précédent ! Ajoutez une nouvelle ligne de code.)
//	  let uneScientifique = {
//	nom: "In-Young",
// 	naissance: "12 aout 1954",
// 	realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong.",
// 	aRecuUnPrixNobel = true,
//  parlerDeLinformatique : function (){
//			console.log ("En informatique, nous sommes tous perchés sur des épaules de géantes.")
//		} 
// }

// 5. Ajoutez une nouvelle méthode 'direBonjour', qui affiche dans la console le même message que dans la question 2. Mais cette fois, utilisez le mot-clef 'this' pour afficher le nom de votre scientifique (de manière à ce que ça marche potentiellement pour n'importe quelle scientifique).
//	  let uneScientifique = {
// 		nom: "In-Young",
// 		naissance: "12 aout 1954",
// 		realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong.",
//  	parlerDeLinformatique : function (){
//			console.log ("En informatique, nous sommes tous perchés sur des épaules de géantes.")
//		} 
// 		direBonjour: function() {
// 		console.log (`bonjour, je suis ${this.nom}. et je suis une scientifique`);
// 		}		
// }

// 6. Appelez la méthode 'direBonjour' de votre scientifique – et vérifiez que ça affiche bien un message dans la console.
//uneScientifique.direBonjour();

// 7. Sans modifier le code précédent, changez le nom de votre scientifique en 'WonderWoman'. 
// 	  Appelez ensuite à nouveau la méthode 'direBonjour', et vérifiez que cela fonctionne toujours.
// 	  let uneScientifique = {
// 		nom: "WonderWoman",
// 		naissance: "12 aout 1954",
// 		realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong.",
//  	parlerDeLinformatique : function (){
//			console.log ("En informatique, nous sommes tous perchés sur des épaules de géantes.")
//		} 
// 		direBonjour: function() {
// 		console.log (`bonjour, je suis ${this.nom}. et je suis une scientifique`);
// 		}
		
// 	}

// uneScientifique.direBonjour();

// 8. Écrivez une nouvelle méthode 'decrireLesReussites', 
// et danc cette méthode, utilisez un if/else pour afficher dans la console 
// 'J’ai reçu un prix Nobel !' si sa propriété 'aRecuUnPrixNobel' est 'true', 
// et 'Je n’ai pas reçu de prix Nobel, mais j’ai fait encore mieux que ça !' 
// si sa propriété 'aRecuUnPrixNobel' est 'false'.
// let uneScientifique = {
// 	nom: "WonderWoman",
// 	naissance: "12 aout 1954",
// 	realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong.",	
// 	aRecuUnPrixNobel: true,
// 	parlerDeLinformatique : function (){
// 		console.log ("En informatique, nous sommes tous perchés sur des épaules de géantes.")
// 	} 
// 	direBonjour: function() {
// 		console.log(`bonjour, je suis ${this.nom}. et je suis une scientifique`)
// 	},

// 	decrireLesReussites: function(){
// 		if (this.aRecuUnPrixNobel) {
// 			uneScientifique = { 
// 				reponse: "Jai recu un prix Nobel!"
// 			}		
// 		} else {
// 			uneScientifique = {
// 				reponse: "Je nai pas recu de prix Nobel, mais j'ai fait encore mieux que ca "
// 			}
// 		}
// 	}
// }

// uneScientifique.direBonjour();

// 9. Appelez la méthode 'decrireLesReussites()' de votre scientifique, et vérifiez que ça fonctionne.
//uneScientifique.decrireLesReussites = true;
//console.log(`Popopoooo ${uneScientifique.decrireLesReussites} `)

// 10. Mettez la propriété 'aRecuUnPrixNobel' de votre scientifique à false (pareil, sans ajouter de ligne de code).
let uneScientifique = {
	nom: "WonderWoman",
	naissance: "12 aout 1954",
	realisations: "la première femme sud-coréenne à visiter l'Antarctique et la première femme asiatique à devenir responsable d'une base antarctique : la base antarctique du roi Sejong.",	
	aRecuUnPrixNobel: false,
	parlerDeLinformatique : function (){
		console.log("En informatique, nous sommes tous perchés sur des épaules de géantes.")
	}, 
	direBonjour: function() {
		console.log(`bonjour, je suis ${this.nom}. et je suis une scientifique`)
	},
	decrireLesReussites: function(){
		if (this.aRecuUnPrixNobel) {
			return { 
				reponse: "Jai recu un prix Nobel!"
			}		
		} else {
			return {
				reponse: "Je nai pas recu de prix Nobel, mais j'ai fait encore mieux que ca "
			}
		}
	}
}

//uneScientifique.direBonjour();


// 11. Appelez à nouveau la méthode 'decrireLesReussites()', et vérifiez que le bon message s'affiche dans la console.
console.log(uneScientifique.decrireLesReussites());
