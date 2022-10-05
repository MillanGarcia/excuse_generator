/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  let excuse = [];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const words = [who, action, what, when];
  //write your code here
  function Vaciar() {
    document.getElementById("demo").reset();
  }

  function ExcGen3(array) {
    for (let i = 0; i < array.length; i++) {
      let RandomNumber1 = Math.floor(Math.random() * array[i].length);
      excuse.push(array[i][RandomNumber1]);
    }
    if (excuse.length > 4) {
      let nuevo = excuse.slice(4, 8);
      excuse.length = 0;
      let result1 = nuevo.join(" ");
      document.getElementById("demo").innerHTML = result1;
    } else {
      let result = excuse.join(" ");
      document.getElementById("demo").innerHTML = result;
    }
  }
  // Agrega función onclick al elemento
  document.getElementById("btn").onclick = function() {
    ExcGen3(words);
  }; // Encuentra el elemento "p" en el sitio
};

/*function ExcGen2(array) {
  array.forEach(element => {
    let RandomNumber = Math.floor(Math.random() * element.length);
    excuse.push(element[RandomNumber]);
  });
}*/

/* 
function ExcGen(quien, accion, que, cuando) {
  let RandomNumber = 0;
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      let RandomNumber = Math.floor(Math.random() * 4);
      excuse.push(quien[RandomNumber]);
    } else if (i === 1) {
      let RandomNumber = Math.floor(Math.random() * 4);
      excuse.push(accion[RandomNumber]);
    } else if (i === 2) {
      let RandomNumber = Math.floor(Math.random() * 4);
      excuse.push(que[RandomNumber]);
    } else if (i === 3) {
      let RandomNumber = Math.floor(Math.random() * 4);
      excuse.push(cuando[RandomNumber]);
    }
  }
}
ExcGen(who, action, what, when);
*/
