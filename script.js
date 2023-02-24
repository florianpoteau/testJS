let p1 = document.getElementById("p1");
let img = document.getElementById("img");
let p2 = document.querySelector(".p2");

p1.innerHTML = "HELLO WORLD";
p1.style.textAlign = "center";
img.src = "image/JavaScript-logo.png";

let bouton = document.querySelector(".submit");

bouton.addEventListener("click", (event) => {
  bouton.innerHTML = `Nombre de clics : ${event.detail}`;
});

let img2 = document.querySelector(".img2");

// cliquer.addEventListener('click', event => {
//     img2.src = `${event.img}`;
// });

function afficher() {
  img2.src = "image/Javascript.png";
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

// Constante

const bonne = "Bonne réponse";
const mauvaise = "Mauvaise réponse";
const styleBonneRep = "orange";
const styleMauvaiseRep = "darkcyan";
const berneStyleBonne = "green";
const berneStyleMauvaise = "red";

// Question 1

let berne = document.querySelector(".berne");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let reponse = document.querySelector(".reponse");
let divImg = document.querySelector(".unique");
let explication = document.querySelector(".explication");

let imagepng = "image/unique.png";
let exemple01 = "Alejandro est uniiique, il fait des sites uniiique, avec son code unique, franchement... juste, uniiique";


// Fonction

function questionnaire (bouton, rep, bonne, style, container, berneStyle, img, png, exemple, exemples) {
bouton.addEventListener("click", () => {

  rep.innerHTML = bonne;

  rep.style.background = style;
  
  rep.classList.add("test");

  container.style.background = berneStyle;

  img.src = png;

  img.classList.add ("imagev");

  exemple.innerHTML = exemples;

});
}

// Fonction mousemove enter question

function mousemoves (bouton, container) {
  bouton.addEventListener("mouseenter", () => {
    container.style.background = "rgba(0,0,0,0.75)";
  })
  }

  // Fonction mousemove out question

  function mousemoves1 (bouton, container) {
    bouton.addEventListener("mouseout", () => {
      container.style.background = "grey";
    })
  }

  // fonction mousemove rotate question

  function mousemoves2 (reponse) {
    reponse.addEventListener("mouseover", () => {
      reponse.style.transform = "rotate(2deg)";
    }) 
  }

// Question 1

questionnaire(b1, reponse, bonne, styleBonneRep, berne, berneStyleBonne, divImg, imagepng, explication, exemple01);
questionnaire(b2, reponse, mauvaise, styleMauvaiseRep, berne, berneStyleMauvaise, divImg, imagepng, explication, exemple01);
mousemoves(b1, berne);
mousemoves(b2, berne);
mousemoves1(b1, berne);
mousemoves1(b2, berne);
mousemoves2(reponse);



// Question 2

berne = document.querySelector(".berne1");
b1 = document.getElementById("b11");
b2 = document.getElementById("b22");
reponse = document.querySelector(".reponse1");
divImg = document.querySelector(".angrboda");
explication = document.querySelector(".explication1");
imagepng = "image/angrboda.jpg";
exemple01 = "La femme de Loki était Angrboda, il s'agissait des 2 derniers géants de midgard, ensemble ils donna naissance a Jormungand (le serpent monde), Fenrir (un loup gigantesque), ainsi que Hel (la déesse des morts)";

questionnaire(b1, reponse, bonne, styleBonneRep, berne, berneStyleBonne, divImg, imagepng, explication, exemple01);
questionnaire(b2, reponse, mauvaise, styleMauvaiseRep, berne, berneStyleMauvaise, divImg, imagepng, explication, exemple01);
mousemoves(b1, berne);
mousemoves(b2, berne);
mousemoves1(b1, berne);
mousemoves1(b2, berne);
mousemoves2(reponse);



// Question 3

berne = document.querySelector(".berne2");
b1 = document.getElementById("b111");
b2 = document.getElementById("b222");
reponse = document.querySelector(".reponse2");
divImg = document.querySelector(".odin");
explication = document.querySelector(".explication2");
imagepng = "image/frigg.jpg";
exemple01 = "Frigg était la femme d'Odin, assise à coté de son époux sur le siège magique, Hlidskialf, elle peut voir et entendre tout ce qui se passe dans le monde et bien qu'elle connaisse le destin de tous elle n'énonce jamais de prophéties. Elle peut voir l'avenir, et elle connaît le destin de tous les hommes et de tous les dieux, mais elle ne partage cette connaissance avec nul autre.";

questionnaire(b1, reponse, mauvaise, styleMauvaiseRep, berne, berneStyleMauvaise, divImg, imagepng, explication, exemple01);
questionnaire(b2, reponse, bonne, styleBonneRep, berne, berneStyleBonne, divImg, imagepng, explication, exemple01);
mousemoves(b1, berne);
mousemoves(b2, berne);
mousemoves1(b1, berne);
mousemoves1(b2, berne);
mousemoves2(reponse);




// Question 4

berne = document.querySelector(".berne3");
b1 = document.getElementById("b1111");
b2 = document.getElementById("b2222");
reponse = document.querySelector(".reponse3");
divImg = document.querySelector(".arbre");
explication = document.querySelector(".explication3");
imagepng = "image/yggdrasil.jpg";
exemple01 = "L'arbre monde, que l'on nomme aussi Yggdrasil, est l'arbre se trouvant entre les royaumes, il relie les mondes entre eux et sert de pont entre les royaumes pour les dieux nordiques";

questionnaire(b1, reponse, mauvaise, styleMauvaiseRep, berne, berneStyleMauvaise, divImg, imagepng, explication, exemple01);
questionnaire(b2, reponse, bonne, styleBonneRep, berne, berneStyleBonne, divImg, imagepng, explication, exemple01);
mousemoves(b1, berne);
mousemoves(b2, berne);
mousemoves1(b1, berne);
mousemoves1(b2, berne);
mousemoves2(reponse);




// Question 5

berne = document.querySelector(".berne4");
b1 = document.getElementById("b11111");
b2 = document.getElementById("b22222");
reponse = document.querySelector(".reponse4");
divImg = document.querySelector(".creation");
explication = document.querySelector(".explication4");
imagepng = "image/ginnungagap.jpg";
exemple01 = "Le ginnungagap est la bonne réponse, le ginnungagap s'est produit lorsque la glace du royaume de niflheim ainsi que le feu du royaume de muspelheim se sont percuté créant ainsi la vie";

questionnaire(b1, reponse, bonne, styleBonneRep, berne, berneStyleBonne, divImg, imagepng, explication, exemple01);
questionnaire(b2, reponse, mauvaise, styleMauvaiseRep, berne, berneStyleMauvaise, divImg, imagepng, explication, exemple01);
mousemoves(b1, berne);
mousemoves(b2, berne);
mousemoves1(b1, berne);
mousemoves1(b2, berne);
mousemoves2(reponse);



// Question 6

berne = document.querySelector(".berne5");
b1 = document.getElementById("b111111");
b2 = document.getElementById("b222222");
reponse = document.querySelector(".reponse5");
divImg = document.querySelector(".geant");
explication = document.querySelector(".explication5");
imagepng = "image/Ymir.png";
exemple01 = "Ymir était le premier des géant, né lors du ginnungagap lorsque la glace et le feu se rencontrèrent";

questionnaire(b1, reponse, mauvaise, styleMauvaiseRep, berne, berneStyleMauvaise, divImg, imagepng, explication, exemple01);
questionnaire(b2, reponse, bonne, styleBonneRep, berne, berneStyleBonne, divImg, imagepng, explication, exemple01);
mousemoves(b1, berne);
mousemoves(b2, berne);
mousemoves1(b1, berne);
mousemoves1(b2, berne);
mousemoves2(reponse);



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

// Keypress

const keypress = document.querySelector(".keypress");
const key = document.getElementById("key");
const keycode = document.getElementById("keycode");

document.addEventListener("keypress", (e) => {
console.log(e);
key.textContent = e.key;
keycode.innerHTML = e.keyCode;

const ring = () => {
  const audio = new Audio();
  audio.src = "./son/Enter.mp3";
  audio.play();
}

if(e.key === "f" || e.key === "g" || e.key === "q" || e.key === "s" || e.key === "d"){
  keypress.style.background = "pink";
}
else if ( e.key === "h" || e.key === "j" || e.key === "k" || e.key === "l" || e.key === "m"){
  keypress.style.background = "teal";
}

else {
  keypress.style.background = "cyan";
}

ring();
})

// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 120) {
    nav.style.top = 0;
  }
  else{
    nav.style.top = "-50px";
  }
})
