// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''
    for ( let char of str){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1
        }else 
            charMap[char] = 1
    }

    for (let key in charMap){
        value = charMap[key]
        if ( value > max){
            max = value
            maxChar = key
        }
    }
    return maxChar
  }
  
  console.log(maxChar("apple 1231111"));
  console.log(maxChar("abcccccccd"))