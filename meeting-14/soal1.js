function compareNumber(angka1, angka2) {
    if(angka1 < angka2) {
        return true
    } else if (angka1 > angka2) {
        return false
    } else {
        return -1
    }
}

console.log(compareNumber(5, 8));
console.log(compareNumber(5, 4));
console.log(compareNumber(5, 5));
console.log(compareNumber(3, 3));
console.log(compareNumber(2, 7));
console.log(compareNumber(56, 3));