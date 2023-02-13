let p1 = document.getElementById('p1');
let img = document.getElementById('img');
let p2 = document.querySelector('.p2');

p1.innerHTML = 'HELLO WORLD';
img.src = 'JavaScript-logo.png';

let bouton = document.querySelector('.submit');

bouton.addEventListener('click', event => {
    bouton.innerHTML = `Nombre de clics : ${event.detail}`;
});


let img2 = document.querySelector('.img2');

// cliquer.addEventListener('click', event => {
//     img2.src = `${event.img}`;
// });


function afficher() {
    img2.src = 'Javascript.png';
};

function supprimer() {
    img2.src = '';
};





