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

// function steps(n) {
//   let initialValues = [];
//   while (n) {
//     initialValues.push(" ");
//     n--;
//   }
//   initialValues.forEach((step, i) => {
//     initialValues[i] = '#';
//     console.log(initialValues.join(''));
//   })

// }
//! pythontutor for above solution
// http://www.pythontutor.com/live.html#code=function%20steps%28n%29%20%7B%0A%20%20const%20steps%20%3D%20%5B%5D%3B%0A%20%20while%20%28n%29%20%7B%0A%20%20%20%20steps.push%28%22%20%22%29%3B%0A%20%20%20%20n--%0A%20%20%7D%0A%20%20return%20steps%0A%20%20%20%20.map%28%28step,%20i%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20steps%5Bi%5D%20%3D%20'%23'%3B%0A%20%20%20%20%20%20return%20steps.join%28''%29%3B%0A%20%20%20%20%7D%29%0A%20%20%20%20.forEach%28hey%20%3D%3E%20console.log%28hey%29%29%3B%0A%7D%0A%0Asteps%283%29%3B&cumulative=false&curInstr=30&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false


//* Solution using nested for loops
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair)
//   }
// }
//! pythontutor for the above solution
// http://www.pythontutor.com/javascript.html#code=function%20steps%28n%29%20%7B%0A%20%20for%20%28let%20row%20%3D%200%3B%20row%20%3C%20n%3B%20row%2B%2B%29%20%7B%0A%20%20%20%20let%20stair%20%3D%20''%3B%0A%0A%20%20%20%20for%20%28let%20column%20%3D%200%3B%20column%20%3C%20n%3B%20column%2B%2B%29%20%7B%0A%20%20%20%20%20%20if%20%28column%20%3C%3D%20row%29%20%7B%0A%20%20%20%20%20%20%20%20stair%20%2B%3D%20'%23'%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20stair%20%2B%3D%20'%20'%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20console.log%28stair%29%0A%20%20%7D%0A%7D%0A%0Asteps%283%29%3B&curInstr=57&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D


// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }
// pythontutor for above solution
// http://www.pythontutor.com/live.html#code=function%20steps%28n,%20row%20%3D%200,%20stair%20%3D%20''%29%20%7B%0A%20%20if%20%28n%20%3D%3D%3D%20row%29%20%7B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%0A%20%20if%20%28n%20%3D%3D%3D%20stair.length%29%20%7B%0A%20%20%20%20console.log%28stair%29%3B%0A%20%20%20%20return%20steps%28n,%20row%20%2B%201%29%3B%0A%20%20%7D%0A%0A%20%20const%20add%20%3D%20stair.length%20%3C%3D%20row%20%3F%20'%23'%20%3A%20'%20'%3B%0A%20%20steps%28n,%20row,%20stair%20%2B%20add%29%3B%0A%7D%0A%0Asteps%283%29%3B&cumulative=false&curInstr=64&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

function steps(n, initialValues = [], flag = true, index = 0) {
  if (index === n) {
    return;
  } else if (flag) {
    let num = n;
    while (num) {
      initialValues.push(" ");
      num--;
    }
    flag = false;
  }
  initialValues[index] = '#';
  console.log(initialValues.join(''));
  steps(n, initialValues, flag, ++index);
}

module.exports = steps;
