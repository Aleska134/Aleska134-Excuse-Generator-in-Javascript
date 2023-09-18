/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

var obj = {
  who: ["The dog ", "My grandma ", "His turtle ", "My bird "],
  action: ["ate ", "peed ", "crushed ", "broke "],
  what: ["my homework ", "the keys ", "the car "],
  when: [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]
};

function aleatorio() {
  //write your code here
  let w = 0;
  let x = 0;
  let y = 0;
  let z = 0;
  w = Math.floor(Math.random() * (4 - 0) + 0);
  x = Math.floor(Math.random() * (4 - 0) + 0);
  y = Math.floor(Math.random() * (3 - 0) + 0);
  z = Math.floor(Math.random() * (5 - 0) + 0);

  return obj.who[w] + obj.action[x] + obj.what[y] + obj.when[z];
}

document.write(aleatorio());
