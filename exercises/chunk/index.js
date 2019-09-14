// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//* forEach
// function chunk(array, size) {
//   const arr = [];
//   array.forEach(el => {
//     const last = arr[arr.length - 1];

//     if (!last || last.length == size) {
//       arr.push([el])
//     } else {
//       last.push(el)
//     }
//   })
//   return arr;
// }

//* for of loop
// 

//* while loop
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    let sliced = array.slice(index, index + size);
    chunked.push(sliced);
    index += size;
  }
  return chunked;
}

module.exports = chunk;
// Pythontutor solution w/ while loop
//http://pythontutor.com/visualize.html#code=//*%20while%20loop%0Afunction%20chunk%28array,%20size%29%20%7B%0A%20%20const%20chunked%20%3D%20%5B%5D%3B%0A%20%20let%20index%20%3D%200%3B%0A%0A%20%20while%28index%20%3C%20array.length%29%20%7B%0A%20%20%20%20let%20sliced%20%3D%20array.slice%28index,%20index%20%2B%20size%29%3B%0A%20%20%20%20chunked.push%28sliced%29%3B%0A%20%20%20%20index%20%2B%3D%20size%3B%0A%20%20%7D%0A%0A%20%20return%20chunked%3B%0A%7D%0Achunk%28%5B1,%202,%203,%204%5D,%202%29%20--%3E%20%5B%5B%201,%202%5D,%20%5B3,%204%5D%5D%0Achunk%28%5B1,%202,%203,%204,%205%5D,%202%29%20--%3E%20%5B%5B%201,%202%5D,%20%5B3,%204%5D,%20%5B5%5D%5D&cumulative=false&curInstr=13&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false


// Pythontutor solution using a "for of" loop
//http: //pythontutor.com/visualize.html#code=function%20chunk%28array,%20size%29%20%7B%0A%20%20const%20arr%20%3D%20%5B%5D%3B%0A%20%20for%20%28let%20el%20of%20array%29%20%7B%0A%20%20%20%20const%20last%20%3D%20arr%5Barr.length%20-%201%5D%3B%0A%0A%20%20%20%20if%20%28!last%20%7C%7C%20last.length%20%3D%3D%20size%29%20%7B%0A%20%20%20%20%20%20arr.push%28%5Bel%5D%29%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20last.push%28el%29%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0A%0Achunk%28%5B1,%202,%203,%204%5D,%202%29%20--%3E%20%5B%5B%201,%202%5D,%20%5B3,%204%5D%5D%0Achunk%28%5B1,%202,%203,%204,%205%5D,%202%29%20--%3E%20%5B%5B%201,%202%5D,%20%5B3,%204%5D,%20%5B5%5D%5D&cumulative=false&curInstr=22&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false