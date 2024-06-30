//Directions
//Given an array of integer, sort the array
// ---Examples
// const = [-6, 20, 8, -2, 4]
// bubbleSort(arr)=>should return [-6, -2, 4, 8, 20]
// ------ Bubble sort idea
// Start with the entire array as unsorted.
//Find the minimum element in the unsorted portion.
//Swap it with the first unsorted element.
//Repeat steps 2 and 3 for the remaining unsorted elements.
//Continue until the entire array is sorted.

function selectionSort(arr) {
    // Selection sort
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) { // Fix: Start from i + 1
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Swap
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

const arr = [8, 20, -2, 4, -6];
console.log(`Unsorted Array: ${arr}`);
selectionSort(arr);
console.log(`Sorted Array: ${arr}`);
