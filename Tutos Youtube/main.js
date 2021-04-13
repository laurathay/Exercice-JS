//window object is the parent object of the browser

//selecting things from the DOM with document

//single element selector 
const form = document.getElementById('my-form'); // que l'ID 
console.log(document.querySelector('.container')); //pour selectionner le premier ca aurait pu etre h1


//multiple element selector
console.log (document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


//Now manipulating the DOM and changing things (UX/UI)
const ul = document.querySelector('.items');

ul.remove();
//removing the last ul 
ul.lastElementChild.remove();

//edit content
ul.firstElementChild.textContent = 'Hello';
// avec le deuxieme ul
ul.children[1].innerText = 'Brad';
// avec le dernier ul 
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


//change la bouleur du bouton 
const btn = document.querySelector('.btn');
btn.style.background = 'red';


// NOW parlons des events 

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); //pour ne pas qu'il apparraise en demi seconde
    console.log('click');
})
