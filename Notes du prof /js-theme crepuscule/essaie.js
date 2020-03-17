function makeDark() {
  document.querySelector('body').classList.add('theme-nuit');
  document.querySelector('body').classList.remove('theme-jour');
  document.querySelector('body').classList.remove('theme-crepuscule');
  document.querySelector('body').classList.remove('theme-matrix');
}

function makeLight() {
  document.querySelector('body').classList.add('theme-jour');
  document.querySelector('body').classList.remove('theme-nuit');
  document.querySelector('body').classList.remove('theme-crepuscule');
  document.querySelector('body').classList.remove('theme-matrix');

}

function makeSunset() {
  document.querySelector('body').classList.add('theme-crepuscule');
  document.querySelector('body').classList.remove('theme-nuit');
  document.querySelector('body').classList.remove('theme-jour');
  document.querySelector('body').classList.remove('theme-matrix');

}

function makeMatrix() {
  document.querySelector('body').classList.add('theme-matrix');
  document.querySelector('body').classList.remove('theme-nuit');
  document.querySelector('body').classList.remove('theme-jour');
  document.querySelector('body').classList.remove('theme-crepuscule');

}

document.querySelector('.bouton-nuit-haut').addEventListener('click', makeDark);
document.querySelector('.bouton-jour-haut').addEventListener('click', makeLight);
document.querySelector('.bouton-nuit-bas').addEventListener('click', makeDark);
document.querySelector('.bouton-jour-bas').addEventListener('click', makeLight);
document.querySelector('.bouton-crepuscule-haut').addEventListener('click', makeSunset);
document.querySelector('.bouton-crepuscule-bas').addEventListener('click', makeSunset);
document.querySelector('.bouton-matrix-bas').addEventListener('click', makeMatrix);
document.querySelector('.bouton-matrix-haut').addEventListener('click', makeMatrix);


makeMatrix(); //on le met tout en bas pour afficher le theme direct sans event



function changerTheme(classDuTheme){
	document.querySelector('body').classList.add();

}

// a comprendre  pour MathRandom 
//function getRandomTheme(max) {
//  return Math.floor(Math.random() * Math.floor(max));
//}

//console.log(getRandomInt(3));
// expected output: 0, 1 or 2




//c'est le JS de matrix

//var c = document.getElementById("c");
//var ctx = c.getContext("2d");
 
//making the canvas full screen
//c.height = window.innerHeight;
//c.width = window.innerWidth;
 
//Caractères Chinois pris depuis l'unicode charset
//var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
//Convertir chaque string comme une seul Array
//chinese = chinese.split("");
 
//var font_size = 10;
//var columns = c.width/font_size; //Nombre de Colonnes
//Un seul par colonne
//var drops = [];


//for(var x = 0; x < columns; x++)
//	drops[x] = 1; 
 
//Dessiner les caractères
//function draw()
//{
//	BG Noire pour les Canvas
//	translucent BG to show trail
//	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//	ctx.fillRect(0, 0, c.width, c.height);
 
//	ctx.fillStyle = "#0F0"; //Texte Vert
//	ctx.font = font_size + "px arial";
	//looping over drops
//	for(var i = 0; i < drops.length; i++)
//	{
//		//Choisir un caractère chinois à imprimer
//		var text = chinese[Math.floor(Math.random()*chinese.length)];
//		x = i*font_size, y = value of drops[i]*font_size
//		ctx.fillText(text, i*font_size, drops[i]*font_size);
// 
//		if(drops[i]*font_size > c.height && Math.random() > 0.975)
//			drops[i] = 0;
// 
//		drops[i]++;
//	}
//}
 
//setInterval(draw, 33);