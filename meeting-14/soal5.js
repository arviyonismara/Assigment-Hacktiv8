function threeStepsAB(inputString) {
    const findA =  inputString.split('').reduce((indices, letter, index) => {
      letter === 'a' && indices.push(index);
      return indices;
    }, [])
    const findB =  inputString.split('').reduce((indices, letter, index) => {
        letter === 'b' && indices.push(index);
        return indices;
      }, [])
    if(findA.length > 0 && findB.length > 0) {
        let isThreeStep = false
        for (let i = 0; i < findA.length; i++) {
            for(let j =0; j< findB.length; j++) {
                if (findA[i] - findB[j] == 4 || findA[i] - findB[j] == -4 ) {
                    isThreeStep = true
                }
            }
        }
        return isThreeStep
    } else {
        return false;
    }
    // console.log(findA, findB);
}

console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are boring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));