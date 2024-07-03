//Directions
//Given an array of integer, sort the array
// ---Examples
// const = [-6, 20, 8, -2, 4]
// bubbleSort(arr)=>should return [-6, -2, 4, 8, 20]
// ------ Selection Sort Idea
// Identify the pivot element in the array
// - Pick the first element as pivot
// - Pick the last element as pivot (our approach)
// - Pick a random element as pivot
// - Pick the median as pivot
// Put everything that's smaller than the pivot into the 'left' array and everything that's greater than the pivot into a 'right' array
// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
// Repeatedly concatenate the left array, pivot and right array till one sorted array remains. 

function quickSort(arr) {
    // Base case: arrays with less than 2 elements are sorted by definition
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    let left = [];
    let right = [];

    // Partition the array into left and right based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right arrays and concatenate them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]


// Time Complexity => Big O(nlogn)