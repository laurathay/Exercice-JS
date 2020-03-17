document.querySelector('.bouton-nuit').addEventListener('click', function() {
  document.querySelector('body').classList.add('theme-nuit');
  document.querySelector('body').classList.remove('theme-jour');
});

document.querySelector('.bouton-jour').addEventListener('click', function() {
  document.querySelector('body').classList.add('theme-jour');
  document.querySelector('body').classList.remove('theme-nuit');
});
