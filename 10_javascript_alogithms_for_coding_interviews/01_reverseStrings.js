//Directions
//Given a string, return a new string with the reversed order of characters
// ---Examples
// reverse('hi') === ('hi')
// reverse('hello') === ('olleh')
// reverse('gauravSharmaCode') === ('edoCamrahSvaruag')

// ---------------------------------------- Conventional Approach ---------------------------------------- 
// function reverse(str){
//     let reversed = '' 
    
//     for (let i = 0; i < str.length; i++ )
//     {
//         reversed = str[i] + reversed
//     }

//     return reversed
// }

// ---------------------------------------- Modern Approach ---------------------------------------- 
// function reverse(str){
//     let reversed = '' 
    
//     for (char of str){
//         reversed = char + reversed
//     }

//     return reversed
// }


// ---------------------------------------- Built in reverse method ---------------------------------------- 
// Works with arrays only. 
// APPROACH
// -- Convert str to arr using split method
// -- Pass arr to built-in reverse ()
// -- return reversed 
// function reverse (str){
//     const strToArray = str.split('')

//     reversedArr = strToArray.reverse()

//     reversedStr = reversedArr.join('')
    
//     return reversedStr
// }


// ---------------------------------------- Single Line Approach Using Built-in Functions ---------------------------------------- 
function reverse(str){
   return str.split('').reverse().join('')
}

console.log (reverse(`gauravSharmaCode`))