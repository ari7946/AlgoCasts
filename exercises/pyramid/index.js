// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//* Brute force solution
function pyramid(n) {
  let initialValues = [];
  // bar sets the number of initial empty strings required for a pyramid
  let bar = (n * 2) - 1;
  // variable i is used increment and decrement the indices, starting from the center
  let i = 0;

  // bar sets the number of initial empty strings required for a pyramid
  while (bar > 0) {
    initialValues.push(" ");
    bar--;
  }

  while (n) {
    // on the first iteration, i is 0, so # is added to the center of the array. Note that the number passed to pyramid must be odd
    // After that, "i" is incremented in order to target the next indices
    initialValues[((initialValues.length - 1) / 2) + i] = '#';
    initialValues[((initialValues.length - 1) / 2) - i] = '#';
    console.log(initialValues.join(''))
    i++;
    n--;
  }
}
//! pythontutor link for above solution
// http://www.pythontutor.com/live.html#code=function%20pyramid%28n%29%20%7B%0A%20%20%20%20let%20initialValues%20%3D%20%5B%5D%3B%0A%20%20let%20bar%20%3D%20%28n%20*%202%29%20-%201%3B%0A%20%20%20%20let%20i%20%3D%200%3B%0A%20%20while%20%28bar%20%3E%200%29%20%7B%0A%20%20%20%20initialValues.push%28%22%20%22%29%3B%0A%20%20%20%20bar--%3B%0A%20%20%7D%0A%20%20%0A%20%20while%28n%29%20%7B%0A%20%20%20%20%20%20initialValues%5B%28%28initialValues.length%20-%201%29%20/%202%29%20%2B%20i%5D%20%3D%20'%23'%3B%0A%20%20%20%20%20%20%20%20initialValues%5B%28%28initialValues.length%20-%201%29%20/%202%29%20-%20i%5D%20%3D%20'%23'%3B%0A%20%20%20%20console.log%28initialValues.join%28''%29%29%0A%20%20%20%20%20%20%20%20i%2B%2B%3B%0A%20%20%20%20%20%20%20%20n--%3B%0A%20%20%7D%0A%7D%0A%0Apyramid%283%29&cumulative=false&curInstr=40&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

module.exports = pyramid;
