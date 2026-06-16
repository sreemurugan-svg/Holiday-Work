function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero!";
    }
    return num1 / num2;
}


console.log("Addition: " + add(10, 5));       
console.log("Subtraction: " + subtract(10, 5)); 
console.log("Multiplication: " + multiply(10, 5)); 
console.log("Division: " + divide(10, 5));     