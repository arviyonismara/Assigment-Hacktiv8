function urutHuruf(inputString) {
    const arrayString = inputString.split('')
    return arrayString.sort().join('')
}

console.log(urutHuruf('saya'));
console.log(urutHuruf('akumasuk'));