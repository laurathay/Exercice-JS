function makeDark() {
  document.querySelector('body').classList.add('theme-nuit');
  document.querySelector('body').classList.remove('theme-jour');
  document.querySelector('body').classList.remove('theme-crepuscule');
}

function makeLight() {
  document.querySelector('body').classList.add('theme-jour');
  document.querySelector('body').classList.remove('theme-nuit');
  document.querySelector('body').classList.remove('theme-crepuscule');
}

function makeSunset() {
  document.querySelector('body').classList.add('theme-crepuscule');
  document.querySelector('body').classList.remove('theme-nuit');
  document.querySelector('body').classList.remove('theme-jour');
}

document.querySelector('.bouton-nuit-haut').addEventListener('click', makeDark);
document.querySelector('.bouton-jour-haut').addEventListener('click', makeLight);
document.querySelector('.bouton-nuit-bas').addEventListener('click', makeDark);
document.querySelector('.bouton-jour-bas').addEventListener('click', makeLight);
document.querySelector('.bouton-crepuscule-haut').addEventListener('click', makeSunset);
document.querySelector('.bouton-crepuscule-bas').addEventListener('click', makeSunset);













