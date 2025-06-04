import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let random = (array) => array[Math.floor(Math.random() * array.length)];

  return random(who) + " " + random(action) + " " + random(what) + " " + random(when) + ".";
}

window.onload = function () {
  document.getElementById("excusa").innerHTML = generarExcusa();
};