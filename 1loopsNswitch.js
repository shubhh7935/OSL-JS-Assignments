//LOOPS in JAVASCRIPT

// a) while loop to display numbers form 1 to 10
let i=1;
while (i <= 10) {
  console.log(i);
  i++;
}

//b) for loop to calculate the sum of numbers form 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//SWITCH STATEMENT
let userChoice = prompt("Enter a number between 1-7:");
let number = parseInt(userChoice);
let day;
switch (number) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid input";
}
console.log(day);
