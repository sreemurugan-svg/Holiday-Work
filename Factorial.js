function calcFact(num) {
    if (num < 0) {
        console.log("Factorial is not defined for negative nums.");
        return;
    }

    let res = 1;
    let i = num;

    while (i > 1) {
        res *= i;
        i--;
    }

    console.log(`The factorial of ${num} is: ${res}`);
}

calcFact(5);
calcFact(0);