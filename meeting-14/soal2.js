function reverseString(inputString) {
    let updateString = ''
    for (let index = inputString.length -1; index >= 0; index--) {
        updateString += inputString[index]
    }
    return updateString
}

console.log(reverseString('hei saya'));
console.log(reverseString('John Doe'));