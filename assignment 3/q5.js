//Create a simple calculator that performs +, -, *, / based on user input.
let num1 = 20;
let num2 = 4;
let operator = "/"; 

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero";
    }
} else {
    result = "Invalid operator";
}

console.log("Result:", result);
