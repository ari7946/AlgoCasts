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
  // For each iteration of the oughter loop, the inner loop does the following:
  // "min" is assigned to "i"
  // if there's  a value in the array that is less than the next value of the current i (i + 1), specifically the j variable.
  // then assign the index of that value to variable min.
  // at the end of each iteration of the inner loop, check to see if the value currently of index "i" is equal to the value at index min "arr[min]".
  // If they're not equal, swap the values.
  // Lastly, "min" is assigned to "i" and the inner loop continues its iteration
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (arr[i] !== arr[min]) {
      let holder = arr[i];
      arr[i] = arr[min];
      arr[min] = holder;
    }
  }
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
