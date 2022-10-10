function isPrime(angka) {
    if (angka > 1) {
        let isPrime = true
        for (let index = 2; index < angka; index++) {
            if(angka % index == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    } else {
        return false
    }

}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(3));
console.log(isPrime(13));
console.log(isPrime(23));
console.log(isPrime(35));