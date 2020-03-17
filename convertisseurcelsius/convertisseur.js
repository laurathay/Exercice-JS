function calculerFarenheit() {
  let celsius = document.querySelector('.celsius-deg').value;
  let farenheit = ((celsius * 9/5)+32);
  document.querySelector('.farenheit-deg').value = farenheit;

  // alert(`Résultat : ${y}`);
}

document.querySelector('.farenheit-btn').addEventListener('click', function() {
  calculerFarenheit();
});

//
// document.querySelector('.farenheit-deg').value = (`${y}`);
