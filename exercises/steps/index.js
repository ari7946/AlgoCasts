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
    return initialValues.join('');
  })
  steps.forEach(step => console.log(step));
}
//! pythontutor for above solution
// http://www.pythontutor.com/live.html#code=function%20steps%28n%29%20%7B%0A%20%20const%20steps%20%3D%20%5B%5D%3B%0A%20%20while%20%28n%29%20%7B%0A%20%20%20%20steps.push%28%22%20%22%29%3B%0A%20%20%20%20n--%0A%20%20%7D%0A%20%20return%20steps%0A%20%20%20%20.map%28%28step,%20i%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20steps%5Bi%5D%20%3D%20'%23'%3B%0A%20%20%20%20%20%20return%20steps.join%28''%29%3B%0A%20%20%20%20%7D%29%0A%20%20%20%20.forEach%28hey%20%3D%3E%20console.log%28hey%29%29%3B%0A%7D%0A%0Asteps%283%29%3B&cumulative=false&curInstr=30&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

module.exports = steps;
