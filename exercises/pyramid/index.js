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

function pyramid(n) {
  let initialValues = [];
  let bar = (n * 2) - 1;
  let i = 0;
  while (bar > 0) {
    initialValues.push(" ");
    bar--;
  }

  while (n) {
    initialValues[((initialValues.length - 1) / 2) + i] = '#';
    initialValues[((initialValues.length - 1) / 2) - i] = '#';
    console.log(initialValues.join(''))
    i++;
    n--;
  }
}

module.exports = pyramid;
