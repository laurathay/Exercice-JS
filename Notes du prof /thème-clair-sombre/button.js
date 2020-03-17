// LA PREMIERE VERSION 
//document.querySelector('.bouton-nuit').addEventListener('click', function() {
//  document.querySelector('body').style.color='white';
//  document.querySelector('body').style.backgroundColor='black';
//});

//document.querySelector('.bouton-jour').addEventListener('click', function() {
//  document.querySelector('body').style.color='black';
//  document.querySelector('body').style.backgroundColor='white';
//});


// NOUVELLE FACON DE FAIRE AVEC 4 BOUTONS 
//du coup on modifie les noms des boutons en faisant 4 comme maintenant on a 4 boutons

//document.querySelector('.bouton-nuit-haut').addEventListener('click', function() {
//  document.querySelector('body').style.color='white';
//  document.querySelector('body').style.backgroundColor='black';
//});

//document.querySelector('.bouton-jour-haut').addEventListener('click', function() {
//  document.querySelector('body').style.color='black';
//  document.querySelector('body').style.backgroundColor='white';
//});

//document.querySelector('.bouton-nuit-bas').addEventListener('click', function() {
//  document.querySelector('body').style.color='white';
//  document.querySelector('body').style.backgroundColor='black';
//});

//document.querySelector('.bouton-jour-bas').addEventListener('click', function() {
//  document.querySelector('body').style.color='black';
//  document.querySelector('body').style.backgroundColor='white';
//});

//Enfin on réunit en mode compresser (on copie colle les deux lignes en bas)

//function dark(){
//	document.querySelector('body').style.color='white';
//  document.querySelector('body').style.backgroundColor='black';
//}

//function light(){
//	  document.querySelector('body').style.color='black';
//  document.querySelector('body').style.backgroundColor='white';

//}

//ensuite on copie colle toutes les premières lignes car 4 boutons en bas 
//document.querySelector('.bouton-nuit-haut').addEventListener('click', function() {
//document.querySelector('.bouton-jour-haut').addEventListener('click', function() {
//document.querySelector('.bouton-nuit-bas').addEventListener('click', function() {
//document.querySelector('.bouton-jour-bas').addEventListener('click', function() {


// ET MAINTENANT ON CHANGE LE TOUT de facon plus compresser 

//function makeDark(){
//	document.querySelector('body').classList.add('theme-nuit');
//  document.querySelector('body').classList.remove('theme-jour');
//}

//function makeLight(){
//	  document.querySelector('body').classList.add('theme-jour');
//  document.querySelector('body').classList.remove('theme-nuit');
//}


//document.querySelector('.bouton-nuit-haut').addEventListener('click', makeDark() {
//document.querySelector('.bouton-jour-haut').addEventListener('click', makeLight() {
//document.querySelector('.bouton-nuit-bas').addEventListener('click', makeDark() {
//document.querySelector('.bouton-jour-bas').addEventListener('click', makeLight() {

// MAINTENANT ON RAJOUTE DEUX BOUTONS CREPUSCULES ET ON A RAJOUTER DEUX AUTRES CLASSES DU COUP

document.querySelector('.bouton-crepu-haut').addEventListener('click', function() {
  document.querySelector('body').style.color='#dbd2b3';
  document.querySelector('body').style.backgroundColor='#bcf0f4';
});

document.querySelector('.bouton-crepu-bas').addEventListener('click', function() {
  document.querySelector('body').style.color='#dbd2b3';
  document.querySelector('body').style.backgroundColor='#bcf0f4';
});


// le truc finale 
function makeDark(){
	document.querySelector('body').classList.add('theme-nuit');
 	document.querySelector('body').classList.remove('theme-jour');
 	document.querySelector('body').classList.remove('theme-crepu'); //ne pas oublier de rajouter celle la 

}

function makeLight(){
	document.querySelector('body').classList.add('theme-jour');
  	document.querySelector('body').classList.remove('theme-nuit');
    document.querySelector('body').classList.remove('theme-crepu');

}

function makeTwilight(){
	document.querySelector('body').classList.add('theme-crepu');
	document.querySelector('body').classList.remove('theme-jour');
	document.querySelector('body').classList.remove('theme-nuit'); // on rajoute le theme nuit aussi pcq une fois qu'on clique sur le bouton on vuet que les deux s'enlevent

}

document.querySelector('.bouton-nuit-haut').addEventListener('click', makeDark() {
document.querySelector('.bouton-jour-haut').addEventListener('click', makeLight() {
document.querySelector('.bouton-nuit-bas').addEventListener('click', makeDark() {
document.querySelector('.bouton-jour-bas').addEventListener('click', makeLight() {
document.querySelector('.bouton-crepu-haut').addEventListener('click', makeTwilight(){
document.querySelector('.bouton-crepu-bas').addEventListener('click', makeTwilight(){
