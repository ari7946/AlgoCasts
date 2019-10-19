// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr.push(i)
    } else if (i === 1) {
      arr.push(i)
    } else {
      let sum = arr[i - 2] + arr[i - 1];
      arr.push(sum)
    }
  }

  return arr[n];
}

// function fib(n) {
//   if (n < 2) {
//     return n
//   }
//   let first = fib(n - 1);
//   let second = fib(n - 2);
//   return first + second;
// }
// pythontutor link for above recursive solution
http://www.pythontutor.com/live.html#code=function%20fib%28n%29%20%7B%0A%20%20if%20%28n%20%3C%202%29%20%7B%0A%20%20%20%20%20%20return%20n%0A%20%20%7D%0A%20%20let%20first%20%3D%20fib%28n%20-%201%29%3B%0A%20%20let%20second%20%3D%20fib%28n%20-%202%29%3B%0A%20%20return%20first%20%2B%20second%3B%0A%7D%0A%0A%0A%0Afib%284%29&cumulative=false&curInstr=35&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
// pythontutor link for above solution
// http://www.pythontutor.com/javascript.html#code=function%20fib%28n%29%20%7B%0A%20%20%20%20const%20arr%20%3D%20%5B%5D%3B%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%3D%20n%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20if%20%28i%20%3D%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20%20%20arr.push%28i%29%0A%20%20%20%20%7D%20else%20if%20%28%20i%20%3D%3D%3D%201%29%20%7B%0A%20%20%20%20%20%20%20%20arr.push%28i%29%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20let%20last2%20%3D%20arr%5Bi%20-%202%5D%3B%0A%20%20%20%20%20%20let%20last1%20%3D%20arr%5Bi%20-%201%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20sum%20%3D%20last2%20%2B%20last1%3B%0A%20%20%20%20%20%20arr.push%28sum%29%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20return%20arr%5Bn%5D%3B%0A%7D%0A%0Afib%288%29&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D

module.exports = fib;
