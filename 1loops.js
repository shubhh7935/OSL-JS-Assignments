//PROGRAM FLOW: LOOPS

// a)display even numbers from 1 to 20

i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// b)calculate the factorial of a given number

let userChoice = prompt("Enter a number");
let number = parseInt(userChoice);
let factorial = 1;
if (number == 0 || number == 1) {
  console.log("The factorial is 1");
}
for (let i = number; i >= 2; i--) {
  factorial *= i;
}
console.log(`The factorial of ${number} is: ${factorial}`);
