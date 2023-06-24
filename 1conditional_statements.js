//PROGRAM FLOW: CONDITIONAL STATEMENTS

// a)checks if a given number is positive, negative, or zero.

// let userChoice = prompt("Enter a number");
// let number = parseInt(userChoice);
// if (number < 0) {
//   console.log(`your number: ${number} is a negative number`);
// } else if (number > 0) {
//   console.log(`your number: ${number} is a positive number`);
// } else console.log(`your number: ${number} is zero`);
const inputNumber = document.getElementById("input-number");
const submitNumber = document.getElementById("submit-number");
const result = document.getElementById("result");
submitNumber.addEventListener("click", () => {

  const theNumber = inputNumber.value;
  console.log(theNumber);
  if (theNumber > 0) {
    result.innerHTML = `${theNumber} is a Positive Number`;
    result.classList.add("green")
  } else if (theNumber < 0) {
    result.innerHTML = `${theNumber} is a Negative Number`;
    result.classList.add("red")
  } else {
    result.innerHTML = `Your number is ${theNumber}`;
    result.classList.add("blue")
  }
});

