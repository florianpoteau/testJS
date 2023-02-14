

let p1 = document.getElementById("p1");
let img = document.getElementById("img");
let p2 = document.querySelector(".p2");

p1.innerHTML = "HELLO WORLD";
img.src = "JavaScript-logo.png";

let bouton = document.querySelector(".submit");

bouton.addEventListener("click", (event) => {
  bouton.innerHTML = `Nombre de clics : ${event.detail}`;
});

let img2 = document.querySelector(".img2");

// cliquer.addEventListener('click', event => {
//     img2.src = `${event.img}`;
// });

function afficher() {
  img2.src = "Javascript.png";
}

function supprimer() {
  img2.src = "";
}

let x = 5;
let y = "5";

// If Else sur une ligne

x==y ? console.log("x est bien égaux a y: " + true) : console.log(false);

console.log("Pour utiliser la calculatrice: ")
console.log("addition(x)");
console.log("soustraction(x)");
console.log("multiplication(x)");
console.log("division(x)");
console.log("reset(x)");

let total = 0;

function addition (x) {
    total += x;
    return total
}

function soustraction (x) {
    total -= x;
    return total
}

function multiplication (x) {
    if (total === 0) {
        return (total = x);
    }
else {
    total *= x;
    return total
}
}

function division (x) {
    if (total === 0) {
        return (total = x)
    }
else {
    total /= x;
    return total
}
}

function reset () {
    total = 0;
    return total
}

const berne = document.querySelector(".berne");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const reponse = document.getElementById("reponse");


b1.addEventListener("click", () =>{
    reponse.style.visibility = "visible";
    berne.style.background = "green";
})

b2.addEventListener("click", () => {
    reponse.style.visibility = "visible";
    berne.style.background = "red";
} )