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


module.exports = fib;
