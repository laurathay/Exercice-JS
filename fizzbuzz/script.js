
//Number.isInteger c'est pour voir si le chiffre est divisible par 3, 5 ou 15 ici pour éviter que le résultats ne divisent pas nimporte quoi et donne des 2,2222

function fizzBuzz (nombre) {

      //if (Number.isInteger(x / 15)) {
      if (Number.isInteger(nombre / 3) && Number.isInteger(nombre/5)) {
        document.querySelector('.resultat').value = ('FizzBuzz');
      }
      else if (Number.isInteger(nombre / 5)){
        document.querySelector('.resultat').value = ('Buzz');
      }
      else if (Number.isInteger(nombre/3)){
        document.querySelector('.resultat').value = ('Fizz');
      }
      else {
        document.querySelector('.resultat').value = nombre;
      }
}

document.querySelector('.fizz').addEventListener('input', function () {
  let nombre = document.querySelector('.fizz').value
  fizzBuzz(nombre)
});










