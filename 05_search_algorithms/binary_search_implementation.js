/* ------------------------------------Binary Search------------------------------------

Problem - Given a sorted array of 'n' elements and a target element 'key', find the index of 't' in the array. Return -1 if not found in the array.

arr = [-5,2,4,6,10], key = 10 -> Should return 4
arr = [-5,2,4,6,10], key = 6 -> Should return 3
arr = [-5,2,4,6,10], key = 20 -> Should return -1

Pseudocode 

- If array is empty, return -1

- If array has elements find middle elementin the array. If target is equal to the middle element, return the middle element index.

- If target is less than the middle element, binary search the left half of the array.

- If target is greater than the middle element, binary search the right half of the array.

*/

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] < key) {
            left = mid + 1; // Adjust left pointer
        } else {
            right = mid - 1; // Adjust right pointer
        }
    }
    return -1;
}

console.log(binarySearch([-5,2,4,6,10],10))//4
console.log(binarySearch([-5,2,4,6,10],6))//3
console.log(binarySearch([-5,2,4,6,10],20))//-1


// Time Complexity => Big O (log n)