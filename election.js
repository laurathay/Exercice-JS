function saluer(nom){
	alert(`Bonjour ${nom}`);
}

document.querySelector('.button-saluer-1').addEventListener('click', function ()
{
	//c'est pour dire que quand on écrit un nom dans l'input ca nous affichera l'aleter personnalisé et la ca veut dire que la valeur de l'ID sera le nom
	let nom = document.querySelector('#prenom-1').value; 
	saluer('pierre')
});


//autre possibilité 
// function saluer(){
// 	let nom = document.querySelector('#prenom-1').value; 
// 	alert(`Bonjour ${nom}`);
// }

// document.querySelector('.button-saluer-1').addEventListener('click', function ()
// {
// 	saluer();
// });




//la pour vérifier si la personne peut voter ou non 


//l'action que l'on veut que l'utilisateur voit i.e. l'alerte
//function vote(age){
//	alert(` ${age}`);
//}

//QUAND l'action se produira i.e. quand l'utilisateur cliquera sur le bouton OK selon son age il pourra voter 
document.querySelector('.button-age').addEventListener('click',function()
{ 	
	// selon la valeur de son age il pourra ou non voter 
	let age = document.querySelector('#age-pers').value;
	if (age < 18){
	 	alert ('impossible de voter'); 
	}	
	else{
	 	alert ('va voter');  
	}
});


// - la personne entre son age et son prenom 
// - la personne > 18 ans donc électeurs 
// - la personne <18 ans donc impossible 


// conversion des fahreheit en celsius 

function convertirEnCelsius (fahrenheit){
	let celsius=(farenheit -32) * 5/9;
	return celsius;
}

console.log(convertirEnCelsius(115));

// conversion des grammes en kilos 

function convertirEnGrammes (kilos){
	let grammes = (kilos * 1000);
	return grammes; 
}

console.log(convertirEnKilos(20));
alert ('le résultat est ${convertirEnGrammes(5))}');

// Exercice "convertisseur de devises"
// Faire un concertisseur de livres en euros
// La page doit avoir un champs "livres£", et un bouton "convertir en euros €"
// Quand on clique sur le bouton, l'équivalent en euros s'affiche 

// Bonus: afficher le resultat directement dans le texte de la page 
// Permettre de faire aussi la conversion dans le sens inverse

function convertirEnEuros (livres){
	let euros = (livres *1,15);
	return euros;
}

console.log(convertirEnEuros(20));


