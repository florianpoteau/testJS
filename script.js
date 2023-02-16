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

const berne = document.querySelector(".berne");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const reponse = document.querySelector(".reponse");


b1.addEventListener("click", () => {

  reponse.innerHTML = "Bonne réponse";

  reponse.style.background = "orange";
  
  reponse.classList.add("test");

  berne.style.background = "green";
});

b2.addEventListener("click", () => {

  reponse.innerHTML = "Mauvaise réponse";

  reponse.style.background = "darkcyan";

  reponse.classList.add("test");

  berne.style.background = "red";

});

const berne1 = document.querySelector(".berne1");
const b11 = document.getElementById("b11");
const b22 = document.getElementById("b22");
const reponse1 = document.querySelector(".reponse1");

b11.addEventListener("click", () => {

  reponse1.innerHTML = "Bonne réponse"

  reponse1.style.background = "orange";

  berne1.style.background = "green";

  reponse1.classList.add("test1");
});

b22.addEventListener("click", () => {

  reponse1.innerHTML = "Mauvaise réponse";

  reponse1.style.background = "orange";

  reponse1.classList.add("test1");

  berne1.style.background = "red";

});

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
})

reponse1.addEventListener("mouseover", () => {
  reponse1.style.transform = "rotate(2deg)";
})



