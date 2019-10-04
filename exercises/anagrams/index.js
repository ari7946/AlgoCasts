// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//* creates character map
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     // chars[char] = chars[char] + 1 || 1
//     charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar
// }

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('');

  if (stringA.length !== stringB.length) {
    return false
  }

  let count = 0;
  for (let charA of stringA) {
    for (let charB of stringB) {
      if (charA === charB) {
        count++;
        break;      
      }
    }
  }
  return count === stringA.length;
};

module.exports = anagrams;

// Python tutor link to nested for loop solution. 
http://www.pythontutor.com/live.html#code=function%20anagrams%28stringA,%20stringB%29%20%7B%0A%20%20stringA%20%3D%20stringA.replace%28/%5B%5E%5Cw%5D/g,%20''%29.toLowerCase%28%29.split%28''%29%3B%0A%20%20stringB%20%3D%20stringB.replace%28/%5B%5E%5Cw%5D/g,%20''%29.toLowerCase%28%29.split%28''%29%3B%0A%0A%20%20if%20%28stringA.length%20!%3D%3D%20stringB.length%29%20%7B%0A%20%20%20%20return%20false%0A%20%20%7D%0A%0A%20%20let%20count%20%3D%200%3B%0A%20%20for%20%28let%20charA%20of%20stringA%29%20%7B%0A%20%20%20%20for%20%28let%20charB%20of%20stringB%29%20%7B%0A%20%20%20%20%20%20if%20%28charA%20%3D%3D%3D%20charB%29%20%7B%0A%20%20%20%20%20%20%20%20count%2B%2B%3B%0A%20%20%20%20%20%20%20%20break%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20count%20%3D%3D%3D%20stringA.length%3B%0A%7D%3B%0A%0A%20anagrams%28'RAIL!%20SAFETY!',%20'fairy%20tales'%29%20%0Aanagrams%28'Hi%20there',%20'Bye%20there'%29%20&cumulative=false&curInstr=166&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false


