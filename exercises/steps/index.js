// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let initialValues = [];
  while (n) {
    initialValues.push(" ");
    n--
  }
  const steps = initialValues.map((step, i) => {
    initialValues[i] = '#';
    return initialValues.slice().join('');
  })
  steps.forEach(hey => console.log(hey));
}


module.exports = steps;
