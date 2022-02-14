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
    console.log('e.target.id');
});


//when we click we change some change up 
btn.addEventListener('click', (e) => { //on aurait pu marquer mouseover/mouseout a la place de click
    e.preventDefault(); //pour ne pas qu'il apparraise en demi seconde
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});





//now lets see content into variables
//by grabbring the things from the DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');
//now submit event on the form
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.prevendDefault();
    // majuscule et option avec L pour les deux traits 

    if(nameInput.value === ''|| emailInput.value === '' ) {
        msg.classList.add('error'); //rajoute cette classe
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000) //pour que apès 3 seconde ile message disparait
    } else {
        //list item into the ul 
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));
        userList.appendChild(li);

        //Clear fields 
        nameInput.value = '';
        emailInput.value = '';
    }
}

