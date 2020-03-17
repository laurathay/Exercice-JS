// conversion des fahreheit en celsius 

// function convertirEnCelsius (fahrenheit){
// 	let celsius=(farenheit -32) * 5/9;
// 	return celsius;
// }

// console.log(convertirEnCelsius(115));

// // conversion des grammes en kilos 

// function convertirEnGrammes (kilos){
// 	let grammes = (kilos * 1000);
// 	return grammes; 
// }

// console.log(convertirEnKilos(20));
// alert (`le résultat est ${convertirEnGrammes}(5)`);






// Exercice "convertisseur de devises"
// Faire un concertisseur de livres en euros
// La page doit avoir un champs "livres£", et un bouton "convertir en euros €"
// Quand on clique sur le bouton, l'équivalent en euros s'affiche 

// Bonus: afficher le resultat directement dans le texte de la page 
// Permettre de faire aussi la conversion dans le sens inverse

		// 1ere question :
		// function convertirEnEuros (livres{
		//	let euros = (livres *1,15);
		//	return euros;
		//}

		//console.log(convertirEnEuros());


//2eme question 
function convertirEnEuros (){
	let livres = document.querySelector('.livres-money').value;
	let euros = (livres *1,15);
	document.querySelector('.euros-money').value = euros;
	
}

document.querySelector('.button-livres-money').addEventListener('click', function(){
	convertirEnEuros();
})

//3eme question 
function convertirEnLivres (){
	let euros = document.querySelector('.euros-money2').value;
	let livres = (euros /1,15);
	document.querySelector('.livres-money2').value = livres;
	
}

document.querySelector('.button-euros-money2').addEventListener('click', function(){
	convertirEnLivres();
})

//4eme question 

//- lorsque l'utilisateur met une somme dans un input 
//- s'il clique sur le bouton convertir en £ ca s'affichera dans le input 
//- s'il clique sur l'autre bouton convertir en € ca s'affichera dans l'

function convertiMerde (){
	let euros = document.querySelector('.money2').value;
	let livres = (euros /1,15);
	document.querySelector('.donne-money').value = livres;
}

document.querySelector('.if-euros-button').addEventListener('click', function(){
	convertiMerde();
})

function convertiMerdeBis (){
	let livres = document.querySelector('.money2').value;
	let euros = (livres * 1,15);
	document.querySelector('.donne-money').value = euros;
}

document.querySelector('.if-livres-button').addEventListener('click', function(){
	convertiMerdeBis();
})

// devoir a la maison; faire un input puis 2 boutons et un autre input lorsque l'on met un chiffre il se transforme direct dans lautre input avec KEYPRESS

// function calculerFarenheit() {
//   let celsius = document.querySelector('.celsius-deg').value;
//   let farenheit = ((celsius * 9/5)+32);
//   document.querySelector('.farenheit-deg').value = farenheit;

//   // alert(`Résultat : ${y}`);
// }

// document.querySelector('.farenheit-btn').addEventListener('click', function() {
//   calculerFarenheit();
// });

//
// document.querySelector('.farenheit-deg').value = (`${y}`);
