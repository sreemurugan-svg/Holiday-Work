function printPrimes() {
    console.log("Prime numbers between 1 and 100:");
    
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            console.log(i);
        }
    }
}

printPrimes();