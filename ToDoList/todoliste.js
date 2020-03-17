toDoListe = ['acheter des légumes', 'finir le dossier de stage', 'faire les exercices de Javascript'];

document.querySelector('.boutonAfficher').addEventListener('click', function() {
    toDoListe.forEach(function(laListe) {
      document.querySelector('ul').innerHTML += `<li><input type="checkbox" class="checkbox"><label>${laListe}</label></li>`;
    });
});



document.querySelector('.boutonAjouter').addEventListener('click', function() {
  let laNouvelleTache = document.querySelector('.inputAjouter').value;
  toDoListe.push(laNouvelleTache);
  document.querySelector('ul').innerHTML += `<li>${laNouvelleTache}<input type="checkbox" class="checkbox"></li>`;
  document.querySelector('.inputAjouter').value = '';
});
