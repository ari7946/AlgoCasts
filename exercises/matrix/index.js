// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const total = n * n;
  const arr = [];

  let num = n;
  while (num) {
    arr.push(" ");
    num--;
  }

  const matrix = arr.map((el, i) => {
    let counter1 = n + (n - 1);
    return arr.map((ele, ii) => {
      //last array
      if (i + 1 === n) {
        return counter1++
      } //first array
      else if (i == 0) {
        return ii + 1
      }
    })
  });

  //reverse the last array
  matrix[matrix.length - 1].reverse();
  if (matrix.length - 2 === 1) {
    matrix[1][0] = matrix[2][0] + 1
    matrix[1][1] = matrix[1][0] + 1
    matrix[1][2] = matrix[0][2] + 1;
  // } else if (n >= 4) {
  //   const lastIndex = matrix.length - 1;
  //   const sliced = matrix.slice(1, lastIndex);
  //   const firstRow = matrix[0];
  //   const lastRow = matrix[lastIndex];
  //   const numRows = sliced.length;
  //   for (let i = 0; i < numRows; i++) {
  //     for (let j = 0; j < sliced[i].length; j++) {
  //       console.log('j', matrix[i][j]);
  //       sliced[i][0] = lastRow[i] + numRows;
  //     }
  //   }

  //   let count = 0;
  //   while (numRows >= count) {
  //     sliced[0][count] = lastRow[0] + numRows + count;
  //     sliced[0][matrix.length - 1] = lastRow[lastRow.length - 1] - numRows

  //     sliced[1][count ? count : null] = total;
  //     sliced[1][matrix.length - 1] = lastRow[lastRow.length - 1] - numRows + 1
  //     count++;
  //   }
  //   sliced[1][numRows] = total - 1;
  }

  return matrix;
}

module.exports = matrix;
