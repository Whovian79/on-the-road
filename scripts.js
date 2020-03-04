//User greeting and instruction
let name = prompt("What is your name?");

while (!name) {
  name = prompt("What is your name?");
}

console.log(name);

alert(
  "Welcome, " +
    name +
    "! All questions MUST completed with a whole number. If a cost does not apply to you, please enter '0'."
);
