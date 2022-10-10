function isArithmeticProgression(inputArray) {
    let isAritmetic = true
    let difference = inputArray[1] - inputArray[0]
    for (let i = 1; i < inputArray.length; i ++) {
        if (inputArray[i] - inputArray[i-1] != difference) {
            isAritmetic = false
            break;
        }
    }
    return isAritmetic
}

console.log(isArithmeticProgression([1, 3, 5, 7, 9]));
console.log(isArithmeticProgression([1, 3, 5, 7, 8]));
console.log(isArithmeticProgression([2, 4, 8, 10, 16]));