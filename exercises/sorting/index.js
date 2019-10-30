// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // For each iteration of the outer loop, inner loop is shortened by 1;
  // if element at j is greater than the element at j + 1, swap them.
  // Iterations will continue to run even after the array has been sorted.
  // n^2 runtime complexity.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let arrJ = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = arrJ;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
