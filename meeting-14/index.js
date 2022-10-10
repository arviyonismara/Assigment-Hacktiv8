const testPromise = (angka1, angka2) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (angka1 > angka2) {
            console.log('if pertama', 123);
            const hasil = angka1 - angka2
            resolve(hasil)
        } else if (angka1 < angka2) {
            console.log('if kedua');
            const hasil = angka1 + angka2
            resolve(hasil)
        } else {
            console.log('else');
            reject(0)
        }
        //satuannya ms
    }, 2000)
})

const testPromise2 = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data> 3) {
            console.log('resolve promise2');
            resolve(data)
        } else {
            console.log('reject promise2');
            reject(data)
        }
    }, 1000)
})

const testPromise3 = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data > 6) {
            console.log('resolve promise3');
            resolve(data)
        } else {
            console.log('reject promise3');
            reject(data)
        }
    }, 1000)
})

// testPromise(10, 5)
//     .then(data => {
//         return testPromise2(data)
//     })
//     .then(data2 => {
//         console.log(data2, 'ini data2 dari promise2');
//         return testPromise3(data2)
//     })
//     .then(data3 => {
//         console.log(data3, ' ini data3 dari promise3');
//     })
//     .catch(textError => {
//         console.log(textError, 'ini error')
//     })

//contoh async await untuk menggantikan promise
//(notes: untuk mendapatkan error, diperlukan try catch dan await dimasukkan ke dalam try)
async function newFunction () {
    try {
        const result = await testPromise(10, 5)
        const result2 = await testPromise2(result)
        const result3 = await testPromise3(result2)
        console.log(result3);
    } catch (error) {
        console.log(error, 'ini reject data');
    }
}

newFunction()