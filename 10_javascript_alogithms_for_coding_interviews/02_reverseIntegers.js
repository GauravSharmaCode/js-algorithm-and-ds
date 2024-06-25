//Directions
//Given an integer, return a new integer that is reverse of it
// ---Examples
// reverseInteger(15) === (51)
// reverseInteger(981) === (189)
// reverseInteger(-15) === (-51)
// reverseInteger(500) === (5)    -- Edge Case
// reverseInteger(-90) === (-9)   -- Edge Case

function reverseInteger(n){
    const reversed = n.toString().split('').reverse().join('')

    reversedInteger = parseInt(reversed) * Math.sign(n)

    //console.log(parseInt(reversed) * Math.sign(n))

    return reversedInteger

}

console.log(reverseInteger(15))
console.log(reverseInteger(981))
console.log(reverseInteger(-51))
console.log(reverseInteger(500))
console.log(reverseInteger(-90))




