let mixNums = [12, 5, 8, 130, 44, 17, 9];

let evenNums = mixNums.filter(function(num) {
    return num % 2 === 0;
});

console.log("Original Array: " + mixNums);
console.log("Even Numbers Array: " + evenNums);