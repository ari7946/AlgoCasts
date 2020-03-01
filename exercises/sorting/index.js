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
//! Pythontutor for above solution
http://www.pythontutor.com/javascript.html#code=function%20bubbleSort%28arr%29%20%7B%0A%20%20//%20For%20each%20iteration%20of%20the%20outer%20loop,%20inner%20loop%20is%20shortened%20by%201%3B%0A%20%20//%20if%20element%20at%20j%20is%20greater%20than%20the%20element%20at%20j%20%2B%201,%20swap%20them.%0A%20%20//%20Iterations%20will%20continue%20to%20run%20even%20after%20the%20array%20has%20been%20sorted.%0A%20%20//%20n%5E2%20runtime%20complexity.%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20for%20%28let%20j%20%3D%200%3B%20j%20%3C%20arr.length%20-%20i%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20if%20%28arr%5Bj%5D%20%3E%20arr%5Bj%20%2B%201%5D%29%20%7B%0A%20%20%20%20%20%20%20%20let%20arrJ%20%3D%20arr%5Bj%5D%3B%0A%20%20%20%20%20%20%20%20arr%5Bj%5D%20%3D%20arr%5Bj%20%2B%201%5D%3B%0A%20%20%20%20%20%20%20%20arr%5Bj%20%2B%201%5D%20%3D%20arrJ%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0A%0AbubbleSort%28%5B10,%200,%2097,%20-30,%205%5D%29%3B&curInstr=88&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D


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
//! pythontutor for above above solution
// http://www.pythontutor.com/javascript.html#code=function%20selectionSort%28arr%29%20%7B%0A%20%20//%20For%20each%20iteration%20of%20the%20oughter%20loop,%20the%20inner%20loop%20does%20the%20following%3A%0A%20%20//%20%22min%22%20is%20assigned%20to%20%22i%22%0A%20%20//%20if%20there's%20%20a%20value%20in%20the%20array%20that%20is%20less%20than%20the%20next%20value%20of%20the%20current%20i%20%28i%20%2B%201%29,%20specifically%20the%20j%20variable.%0A%20%20//%20then%20assign%20the%20index%20of%20that%20value%20to%20variable%20min.%0A%20%20//%20at%20the%20end%20of%20each%20iteration%20of%20the%20inner%20loop,%20check%20to%20see%20if%20the%20value%20currently%20of%20index%20%22i%22%20is%20equal%20to%20the%20value%20at%20index%20min%20%22arr%5Bmin%5D%22.%0A%20%20//%20If%20they're%20not%20equal,%20swap%20the%20values.%0A%20%20//%20Lastly,%20%22min%22%20is%20assigned%20to%20%22i%22%20and%20the%20inner%20loop%20continues%20its%20iteration%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20let%20min%20%3D%20i%3B%0A%20%20%20%20for%20%28let%20j%20%3D%20i%20%2B%201%3B%20j%20%3C%20arr.length%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20if%20%28arr%5Bmin%5D%20%3E%20arr%5Bj%5D%29%20%7B%0A%20%20%20%20%20%20%20%20min%20%3D%20j%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20if%20%28arr%5Bi%5D%20!%3D%3D%20arr%5Bmin%5D%29%20%7B%0A%20%20%20%20%20%20let%20holder%20%3D%20arr%5Bi%5D%3B%0A%20%20%20%20%20%20arr%5Bi%5D%20%3D%20arr%5Bmin%5D%3B%0A%20%20%20%20%20%20arr%5Bmin%5D%20%3D%20holder%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0A%0AselectionSort%28%5B10,%200,%2097,%20-30,%205%5D%29%3B&curInstr=63&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    left[0] < right[0]
      ? results.push(left.shift())
      : results.push(right.shift());
  }
  return [...results, ...left, ...right];
}

function merged(left, right) {
  const results = [];
  while(left.length && right.lengthjp)
}

//! Pythontutor link for above solution 
// http://www.pythontutor.com/javascript.html#code=function%20mergeSort%28arr%29%20%7B%0A%20%20if%20%28arr.length%20%3D%3D%3D%201%29%20%7B%0A%20%20%20%20return%20arr%3B%0A%20%20%7D%0A%20%20const%20center%20%3D%20Math.floor%28arr.length%20/%202%29%3B%0A%20%20const%20left%20%3D%20arr.slice%280,%20center%29%3B%0A%20%20const%20right%20%3D%20arr.slice%28center%29%3B%0A%0A%20%20return%20merge%28mergeSort%28left%29,%20mergeSort%28right%29%29%3B%0A%7D%0A%0Afunction%20merge%28left,%20right%29%20%7B%0A%20%20const%20results%20%3D%20%5B%5D%3B%0A%20%20while%20%28left.length%20%26%26%20right.length%29%20%7B%0A%20%20%20%20left%5B0%5D%20%3C%20right%5B0%5D%0A%20%20%20%20%20%20%3F%20results.push%28left.shift%28%29%29%0A%20%20%20%20%20%20%3A%20results.push%28right.shift%28%29%29%3B%0A%20%20%7D%0A%20%20return%20%5B...results,%20...left,%20...right%5D%3B%0A%7D%0A%0A%0AmergeSort%28%5B10,%200,%2097,%20-30,%205%5D%29%3B&curInstr=1&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
