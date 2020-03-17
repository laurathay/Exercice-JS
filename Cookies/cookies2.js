
// Question 1: quand on clique sur j'accepte un dialogue vous avez accepté les cookies apparait
  document.querySelector('.accept-button').addEventListener('click', function(){
    alert('Vous avez accepté les cookies');
  });
  

// Question 2: On ajoute un bouton refuser, quand on clique dessus, un dialogue vous avez refusé les cookies apparait
  document.querySelector('.refuse-button').addEventListener('click', function(){
    alert('Vous avez refusé les cookies');
  });


// Question 3: rajouter un bouton survolez moi quand on passe la souris dessus, un dialogue avec le texte "j'ai été survolé" apparait
  document.querySelector('.survolez-moi').addEventListener('mouseover', function(){
    alert('J‘ai été survolé');
  });


// Qestion 4 :rajouter un bouton changer la couleur du titre, quand on clique dessus, la couleur du texte du h1 de la page devient bleu
  document.querySelector(".change").addEventListener("click", function(){
    document.querySelector("h1").style.color='red';
  });
  // autre facon de le faire mais plus ancien et moins pratique
  //  document.querySelector(".change").addEventListener("click", function(){
  //    document.getElementByID("title").style.color='blue';
  //  });


// Question 5:rajouter un bouton changer la couleur de fond de la page, quand on clique dessus, la couleur de fond de la page devient verte
document.querySelector(".vert").addEventListener("click", function(){
  document.body.style.backgroundColor="green";
});
  // alternative
  // document.querySelector(".vert").addEventListener("click", function(){
  //  document.querySelector('body').style.backgroundColor="green"
  //  })


// Question 6: changer le bouton j'accepte. Maintenant quand on clique dessus, le dialogue s'affiche toujours, mais après avoir cliqué sur OK, le bouton j'accepte disparait de la page
document.querySelector('.accept-button').addEventListener('click',function(){
  alert('vous avez accepté les cookies');
    document.querySelector('.accept-button').remove();
});
  //alternative
  // document.getElementByID('remove-button').addEventListener('click',function(){
  // alert ('Vous avez accepté les cookies');
  // document.getElementByID('remove-button').remove();
