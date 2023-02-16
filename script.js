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

x == y ? console.log("x est bien égaux a y: " + true) : console.log(false);

console.log("Pour utiliser la calculatrice: ");
console.log("addition(x)");
console.log("soustraction(x)");
console.log("multiplication(x)");
console.log("division(x)");
console.log("reset(x)");

let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function division(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function reset() {
  total = 0;
  return total;
}

// Questionnaire

// Question 1

const berne = document.querySelector(".berne");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const reponse = document.querySelector(".reponse");
const unique = document.querySelector(".unique");


b1.addEventListener("click", () => {

  reponse.innerHTML = "Bonne réponse";

  reponse.style.background = "orange";
  
  reponse.classList.add("test");

  berne.style.background = "green";

  unique.src = "unique.png"

  unique.classList.add ("imagev");

});

b2.addEventListener("click", () => {

  reponse.innerHTML = "Mauvaise réponse";

  reponse.style.background = "darkcyan";

  reponse.classList.add("test");

  berne.style.background = "red";

  unique.src = "unique.png";

  unique.classList.add ("imagev");

});

// Question 2

const berne1 = document.querySelector(".berne1");
const b11 = document.getElementById("b11");
const b22 = document.getElementById("b22");
const reponse1 = document.querySelector(".reponse1");
const angrboda = document.querySelector(".angrboda");

b11.addEventListener("click", () => {

  reponse1.innerHTML = "Bonne réponse"

  reponse1.style.background = "orange";

  berne1.style.background = "green";

  reponse1.classList.add("test");

angrboda.src = ("angrboda.jpg");

angrboda.classList.add("imagev");

});

b22.addEventListener("click", () => {

  reponse1.innerHTML = "Mauvaise réponse";

  reponse1.style.background = "darkcyan";

  reponse1.classList.add("test");

  berne1.style.background = "red";

  angrboda.src = "angrboda.jpg";

  angrboda.classList.add("imagev");

});

// Question 3

const berne2 = document.querySelector(".berne2");
const b111 = document.getElementById("b111");
const b222 = document.getElementById("b222");
const reponse2 = document.querySelector(".reponse2");
const odin = document.querySelector(".odin");

b111.addEventListener("click", () =>{

  reponse2.innerHTML = "Mauvaise réponse";

  berne2.style.background = "red";

  reponse2.style.background = "darkcyan";

  reponse2.classList.add ("test");

  odin.src = "freya.png";

  odin.classList.add("imagev");

});

b222.addEventListener("click", () => {

  berne2.style.background = "green";

  reponse2.innerHTML = "Bonne réponse";

  reponse2.classList.add ("test");

  reponse2.style.background = "orange";

  odin.src = "freya.png";

  odin.classList.add ("imagev");

});

// Question 4

const berne3 = document.querySelector(".berne3");
const b1111 = document.getElementById("b1111");
const b2222 = document.getElementById("b2222");
const reponse3 = document.querySelector(".reponse3");
const arbre = document.querySelector(".arbre");

b1111.addEventListener("click", () => {

  berne3.style.background = "red"

  reponse3.innerHTML = "Mauvaise réponse";

  reponse3.style.background = "darkcyan";

  reponse3.classList.add("test");

  arbre.src = "yggdrasil.jpg";

  arbre.classList.add ("imagev");

});

b2222.addEventListener("click", () => {

  berne3.style.background = "green";

  reponse3.innerHTML = "Bonne réponse";

  reponse3.style.background = "orange";

  reponse3.classList.add ("test");

  arbre.src = "yggdrasil.jpg";

  arbre.classList.add("imagev");

});

// Question 5

const berne4 = document.querySelector(".berne4");
const b11111 = document.getElementById("b11111");
const b22222 = document.getElementById("b22222");
const reponse4 = document.querySelector(".reponse4");
const creation = document.querySelector(".creation");

b11111.addEventListener("click", () =>{

  berne4.style.background = "green";

  reponse4.style.background = "orange";

  reponse4.innerHTML = "Bonne réponse";

  reponse4.classList.add("test");

  creation.src = "ginnungagap.jpg";

  creation.classList.add("imagev");
  
});

b22222.addEventListener("click", () =>{

  reponse4.style.background = "darkcyan";

  berne4.style.background = "red";

  reponse4.innerHTML = "Mauvaise réponse";

  reponse4.classList.add("test");

  creation.src = "ginnungagap.jpg";

  creation.classList.add("imagev");

});

// Question 6

const berne5 = document.querySelector(".berne5");
const b111111 = document.getElementById("b111111");
const b222222 = document.getElementById("b222222");
const reponse5 = document.querySelector(".reponse5");
const geant = document.querySelector(".geant");

b111111.addEventListener("click", () => {

  berne5.style.background = "red";

  reponse5.style.background = "darkcyan";

  reponse5.innerHTML = "Mauvaise réponse";

  reponse5.classList.add ("test");

  geant.src = "Ymir.png";

  geant.classList.add("imagev");

});

b222222.addEventListener("click", () => {

  berne5.style.background = "green";

reponse5.innerHTML= "Bonne réponse";

reponse5.style.background = "orange";

reponse5.classList.add("test");

geant.src = "Ymir.png";

geant.classList.add("imagev");

})




// Mousemove

const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

b1.addEventListener("mouseenter", () => {
    berne.style.background = "rgba(0,0,0,0.75)";
});

b2.addEventListener("mouseenter", () => {
    berne.style.background = "rgba(0,0,0,0.75)";
});

b1.addEventListener("mouseout", () => {
    berne.style.background = "grey";
});

b2.addEventListener("mouseout", () => {
    berne.style.background = "grey";
});



reponse.addEventListener("mouseover", () =>{
    reponse.style.transform = "rotate(2deg)";
});

b11.addEventListener("mouseenter", () => {
berne1.style.background = "rgba(0,0,0,0.75)";
});

b22.addEventListener("mouseenter", () => {
  berne1.style.background = "rgba(0,0,0,0.75)";
});

b11.addEventListener("mouseout", () => {
  berne1.style.background = "grey";
});

b22.addEventListener("mouseout", () => {
  berne1.style.background = "grey";
});

reponse1.addEventListener("mouseover", () => {
  reponse1.style.transform = "rotate(2deg)";
});





b111.addEventListener("mouseenter", () =>{
  berne2.style.background = "rgba(0,0,0,0.75)";
});

b222.addEventListener("mouseenter", () =>{
  berne2.style.background = "rgba(0,0,0,0.75)";
});

b111.addEventListener("mouseout", () => {
  berne2.style.background = "grey";
});

b222.addEventListener("mouseout", () => {
  berne2.style.background = "grey";
});

reponse2.addEventListener("mouseover", () => {
  reponse2.style.transform = "rotate(2deg)";
});





b1111.addEventListener("mouseenter", () => {
  berne3.style.background = "rgba(0,0,0,0.75)";
})

b2222.addEventListener("mouseenter", () =>{
berne3.style.background = "rgba(0,0,0,0.75)";
});

b1111.addEventListener("mouseout", () => {
  berne3.style.background = "grey";
});

b2222.addEventListener("mouseout", () => {
  berne3.style.background = "grey";
});

reponse3.addEventListener("mouseover", () =>{
  reponse3.style.transform = "rotate(2deg)";
});




b11111.addEventListener("mouseenter", () => {
  berne4.style.background = "rgba(0,0,0,0.75)";
});

b22222.addEventListener("mouseenter", () =>{
  berne4.style.background = "rgba(0,0,0,0.75)";
});

b11111.addEventListener("mouseout", () => {
  berne4.style.background = "grey";
});

b22222.addEventListener("mouseout", () => {
  berne4.style.background = "grey";
});

reponse4.addEventListener("mouseover", () => {
  reponse4.style.transform = "rotate(2deg)";
});



b111111.addEventListener("mouseenter", () => {
  berne5.style.background = "rgba(0,0,0,0.75)";
});

b222222.addEventListener("mouseenter", () => {
  berne5.style.background = "rgba(0,0,0,0.75)";
});

b111111.addEventListener("mouseout", () => {
  berne5.style.background = "grey";
});

b222222.addEventListener("mouseout", () => {
  berne5.style.background = "grey";
});

reponse5.addEventListener("mouseover", () => {
  reponse5.style.transform = "rotate(2deg)";
});


