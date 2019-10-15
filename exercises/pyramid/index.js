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
  let bar = (n * 2) - 1;
  let i = 0;
  while (bar > 0) {
    initialValues.push(" ");
    bar--;
  }

  for (let i = 0; i < n; i++) {
    initialValues[((initialValues.length - 1) / 2) + i] = '#';
    initialValues[((initialValues.length - 1) / 2) - i] = '#';
    console.log(initialValues.join(''))
  }
}
//! pythontutor link for above solution
// http://www.pythontutor.com/live.html#code=function%20pyramid%28n%29%20%7B%0A%20%20%20%20let%20initialValues%20%3D%20%5B%5D%3B%0A%20%20let%20bar%20%3D%20%28n%20*%202%29%20-%201%3B%0A%20%20%20%20let%20i%20%3D%200%3B%0A%20%20while%20%28bar%20%3E%200%29%20%7B%0A%20%20%20%20initialValues.push%28%22%20%22%29%3B%0A%20%20%20%20bar--%3B%0A%20%20%7D%0A%20%20%0A%20%20while%28n%29%20%7B%0A%20%20%20%20%20%20initialValues%5B%28%28initialValues.length%20-%201%29%20/%202%29%20%2B%20i%5D%20%3D%20'%23'%3B%0A%20%20%20%20%20%20%20%20initialValues%5B%28%28initialValues.length%20-%201%29%20/%202%29%20-%20i%5D%20%3D%20'%23'%3B%0A%20%20%20%20console.log%28initialValues.join%28''%29%29%0A%20%20%20%20%20%20%20%20i%2B%2B%3B%0A%20%20%20%20%20%20%20%20n--%3B%0A%20%20%7D%0A%7D%0A%0Apyramid%283%29&cumulative=false&curInstr=40&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false



//* Stephen's iterative solution
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }
//! pythontutor for above solution
// http://www.pythontutor.com/live.html#code=function%20pyramid%28n%29%20%7B%0A%20%20const%20midpoint%20%3D%20Math.floor%28%282%20*%20n%20-%201%29%20/%202%29%3B%0A%20%20%20%20for%20%28let%20row%20%3D%200%3B%20row%20%3C%20n%3B%20row%2B%2B%29%20%7B%0A%20%20%20%20%20%20let%20level%20%3D%20''%3B%0A%20%20%20%20%0A%20%20%20%20for%20%28let%20column%20%3D%200%3B%20column%20%3C%202%20*%20n%20-%201%3B%20column%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28midpoint%20-%20row%20%3C%3D%20column%20%26%26%20midpoint%20%2B%20row%20%3E%3D%20column%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20level%20%2B%3D%20'%23'%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20level%20%2B%3D%20'%20'%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20console.log%28level%29%3B%0A%20%20%7D%0A%7D%0A%0Apyramid%283%29&cumulative=false&curInstr=83&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

module.exports = pyramid;
