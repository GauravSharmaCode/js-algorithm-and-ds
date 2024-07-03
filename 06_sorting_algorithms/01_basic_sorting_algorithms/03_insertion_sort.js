//Takes an element and swap it to its correct position.
//Given an array of integer, sort the array
// ---Examples
// const = [-6, 20, 8, -2, 4]
// bubbleSort(arr)=>should return [-6, -2, 4, 8, 20]
// ------ Insertion Sort Idea
//Start with the entire array as unsorted.
//Assume the first element is sorted.
//Compare the second element with the first element and swap them if necessary.
//Move to the third element and compare it with the sorted elements before it. Swap as needed to place it in the correct position among the first three elements.
//Continue this process, comparing each element with the ones before it and swapping as necessary.
//Repeat until the entire array is sorted.

function insertionSort(arr) {
    // Insertion sort
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

const arr = [8, 20, -2, 4, -6];
console.log(`Unsorted Array: ${arr}`);
insertionSort(arr);
console.log(`Sorted Array: ${arr}`);


// Time Complexity => Big O(n^2)