
  //document.querySelector('.jour').addEventListener('click', function(){
   // document.body.style.backgroundColor="pink"; // marche que pour le body mais peut aussi s'écrire document.querySelector('body').style.colo="pink";
  //  document.querySelector("h1").style.color= "beige";
 // });


 // document.querySelector('.nuit').addEventListener('click', function(){
 //   document.body.style.backgroundColor="#b089c4";
 //   document.querySelector("h1").style.color='white';
 // });

  document.querySelector('.jour').addEventListener('click', function(){
  	document.querySelector('.toutjour').classList.toggle ('theme-nuit')
  })

  document.querySelector('.nuit').addEventListener('click', function(){
  	document.querySelector('.toutnuit').classList.toggle('theme-jour')
  })







//ce qu'on veut 
//  function (){
//  	document.querySelector('')
//  }

//  document.querySelector('.')



//document.querySelector(".menu-button").addEventListener('click', function(){
//  document.querySelector('.menu').classList.toggle('menu-ferme');
//});




// a la base 
//document.querySelector(".menu-button").addEventListener('click', function(){
//  document.querySelector('.menu').classList.toggle('menu-ferme');
//});


// en compresser

//function ouvrirFermerMenu(){
//	document.querySelector('.menu').classList.toggle('ferme');
//}

//document.querySlector('toggle-menu-haut').addEventListener('click', ouvrirFermerMenu);
//document.querySlector('toggle-menu-bas').addEventListener('click', ouvrirFermerMenu);
//document.querySlector('.fermer-menu').addEventListener('click', ouvrirFermerMenu);

// Autre possibilité avec 2 feuilles css cette solution ci dessous
//
//  document.querySelector(".toutjour")on('click','.boutonnuit',function(event)
//       {
//        if(querySelector('body').hasClass('.toutjour')
//        {
//            querySelector('body').removeClass('.toutnuit');
//        }
//        else
//        {
//             querySelector('body').addClass('.toutnuit');
//        }
//    });
//});

// const btn = document.querySelector('.btn');
// const window = document.getElementById('.window');
// var txt = ['Mode Sombre', 'Mode light'];
// var bool = 1;

// btn.addEventListener('onclick', function () {
//    window.classList.toggle('dark');
 
//    if (bool == 1) {
//        btn.innerHTML = txt[1];
//        bool = 0;
//    } else {
//        btn.innerHTML = txt[0];
//        bool = 1;
//    }
//});
