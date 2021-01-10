// Define the numbers and the operation here
const FirstNumber = prompt("enter the first number: ");;
const SecondNumber = prompt("enter the second number: ");;
const operator = prompt("enter your operations: ");

// Write if-statements here


if(operator === "+"){
    console.log(FirstNumber + SecondNumber)
} else if (operator === "-") {
    console.log(FirstNumber - SecondNumber)
} else if (operator === "/"){
  console.log(FirstNumber / SecondNumber)
} else if (operator === "*"){
    console.log(FirstNumber * SecondNumber)
} else {
    console.log("This operation is not available")
}
