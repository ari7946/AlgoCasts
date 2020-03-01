// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//* creates character map
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // chars[char] = chars[char] + 1 || 1
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar
}

//http://www.pythontutor.com/live.html#code=//%20maxChar%28%22abcccccccd%22%29%20%3D%3D%3D%20%22c%22%0A//%20maxChar%28%22apple%201231111%22%29%20%3D%3D%3D%20%221%22%0A%0A//*%20creates%20character%20map%0Afunction%20maxChar%28str%29%20%7B%0A%20%20const%20charMap%20%3D%20%7B%7D%3B%0A%20%20let%20max%20%3D%200%3B%0A%20%20let%20maxChar%20%3D%20''%3B%0A%0A%20%20for%20%28let%20char%20of%20str%29%20%7B%0A%20%20%20%20//%20chars%5Bchar%5D%20%3D%20chars%5Bchar%5D%20%2B%201%20%7C%7C%201%0A%20%20%20%20charMap%5Bchar%5D%20%3D%20charMap%5Bchar%5D%20%3F%20charMap%5Bchar%5D%20%2B%201%20%3A%201%3B%0A%20%20%7D%0A%0A%20%20for%20%28let%20char%20in%20charMap%29%20%7B%0A%20%20%20%20if%20%28charMap%5Bchar%5D%20%3E%20max%29%20%7B%0A%20%20%20%20%20%20max%20%3D%20charMap%5Bchar%5D%3B%0A%20%20%20%20%20%20maxChar%20%3D%20char%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20maxChar%0A%7D%0A%0AmaxChar%28%22apple%201231111%22%29%20&cumulative=false&curInstr=51&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
module.exports = maxChar;
