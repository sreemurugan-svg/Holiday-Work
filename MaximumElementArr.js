let scrs = [45, 72, 98, 34, 88, 12];

let maxEle = scrs[0];

for (let i = 1; i < scrs.length; i++) {
    if (scrs[i] > maxEle) {
        maxEle = scrs[i];
    }
}

console.log("The maximum element in the array is: " + maxEle);