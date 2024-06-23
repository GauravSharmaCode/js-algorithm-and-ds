/* ------------------------------------Linear Search Algorithm------------------------------------

Problem - Given an array of 'n' elements anda  target (key), find the index of 'key' in the array. Return -1 if the target element is not found.


arr = [-5,2,10,4,6], key = 10 -> Should return 2
arr = [-5,2,10,4,6], key = 6 -> Should return 4
arr = [-5,2,10,4,6], key = 20 -> Should return -1

*/

function linearSearch(array, key){
    for(let i = 0; i < array.length; i++){
      if(array[i] === key) {
          return i;
      }
    }
    return -1;
  }

  console.log(linearSearch([-5,2,10,4,6], 10)) // 2
  console.log(linearSearch([-5,2,10,4,6], 6)) // 4
  console.log(linearSearch([-5,2,10,4,6], 20)) // -1

  // Time Complexiity => Big O(n)

