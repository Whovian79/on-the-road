//User greeting and instruction
let name = prompt("What is your name?");

while (!name) {
  name = prompt("What is your name?");
}

console.log(name);

alert(
  "Welcome, " +
    name +
    "! All questions MUST completed. If a cost does not apply to you, please enter '0'."
);

//Car Rental
let rent = prompt("How much is your vehicle rental?");

rent = Number(rent);

while (rent !== 0 && !rent) {
  alert("All fields must be completed with numbers only.");
  rent = Number(prompt("How much is your vehicle rental?"));
}
