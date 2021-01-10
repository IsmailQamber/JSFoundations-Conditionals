// Define the numbers and the operation here
const FirstNumber = 3;
const SecondNumber = 5;
const operator = window.prompt("enter your operations: ");

// Write if-statements here


if(operator === "+"){
    console.log(FirstNumber + SecondNumber)
} else if (operator === "-") {
    console.log(FirstNumber - SecondNumber)
} else if (operator === "/"){
  console.log(FirstNumber / SecondNumber)
} else {
    console.log("This operation is not available")
}