// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//! ****reference code: creates character map
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
//! end of reference code to create characater map.

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('');

//   if (stringA.length !== stringB.length) {
//     return false
//   }

//   let count = 0;
//   for (let charA of stringA) {
//     for (let charB of stringB) {
//       if (charA === charB) {
//         count++;
//         break;      
//       }
//     }
//   }
//   return count === stringA.length;
// };

//* Solution using a character map helper function
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // checks if the character maps have the same number of keys
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   // if there isn't a corresponding character in both char maps
//   // then return false
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   // else, return true;
//   return true;
// }

// // helper function character map
// function buildCharMap(str) {
//   const charMap = {};
//   // remove any non-alphabetic characters and spaces. Then turn all chars to lowercase
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
//}
//! end of solution using character map helper function



//* Solution using the SORT method
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// "cleans" the string
function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    // split method turns string into array makes each char its own element by passing an empty string as its only argument
    .split('')
    // sort works on chars and numbers
    // in this case it sorts alphabetically
    .sort()
    // join method converts array back to string and "joins" the chars
    .join('');
}
//! end of solution using sort method

module.exports = anagrams;

// Python tutor link solution using character map helper function
// http://www.pythontutor.com/live.html#code=//*%20Solution%20using%20a%20character%20map%20helper%20function%0Afunction%20anagrams%28stringA,%20stringB%29%20%7B%0A%20%20const%20aCharMap%20%3D%20buildCharMap%28stringA%29%3B%0A%20%20const%20bCharMap%20%3D%20buildCharMap%28stringB%29%3B%0A%0A%20%20//%20checks%20if%20the%20character%20maps%20have%20the%20same%20number%20of%20keys%0A%20%20if%20%28Object.keys%28aCharMap%29.length%20!%3D%3D%20Object.keys%28bCharMap%29.length%29%20%7B%0A%20%20%20%20return%20false%3B%0A%20%20%7D%0A%0A%20%20//%20if%20there%20isn't%20a%20corresponding%20character%20in%20both%20char%20maps%0A%20%20//%20then%20return%20false%0A%20%20for%20%28let%20char%20in%20aCharMap%29%20%7B%0A%20%20%20%20if%20%28aCharMap%5Bchar%5D%20!%3D%3D%20bCharMap%5Bchar%5D%29%20%7B%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20//%20else,%20return%20true%3B%0A%20%20return%20true%3B%0A%7D%0A%0A//%20helper%20function%20character%20map%0Afunction%20buildCharMap%28str%29%20%7B%0A%20%20const%20charMap%20%3D%20%7B%7D%3B%0A%20%20//%20remove%20any%20non-alphabetic%20characters%20and%20spaces.%20Then%20turn%20all%20chars%20to%20lowercase%0A%20%20for%20%28let%20char%20of%20str.replace%28/%5B%5E%5Cw%5D/g,%20''%29.toLowerCase%28%29%29%20%7B%0A%20%20%20%20charMap%5Bchar%5D%20%3D%20charMap%5Bchar%5D%20%2B%201%20%7C%7C%201%3B%0A%20%20%7D%0A%20%20return%20charMap%3B%0A%7D%0A%0A%20%20anagrams%28'RAIL!%20SAFETY!',%20'fairy%20tales'%29%20//%20true%0A%20%20anagrams%28'Hi%20there',%20'Bye%20there'%29%20//%20false%0A&cumulative=false&curInstr=134&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// Python tutor link to nested for loop solution. 
//http://www.pythontutor.com/live.html#code=function%20anagrams%28stringA,%20stringB%29%20%7B%0A%20%20stringA%20%3D%20stringA.replace%28/%5B%5E%5Cw%5D/g,%20''%29.toLowerCase%28%29.split%28''%29%3B%0A%20%20stringB%20%3D%20stringB.replace%28/%5B%5E%5Cw%5D/g,%20''%29.toLowerCase%28%29.split%28''%29%3B%0A%0A%20%20if%20%28stringA.length%20!%3D%3D%20stringB.length%29%20%7B%0A%20%20%20%20return%20false%0A%20%20%7D%0A%0A%20%20let%20count%20%3D%200%3B%0A%20%20for%20%28let%20charA%20of%20stringA%29%20%7B%0A%20%20%20%20for%20%28let%20charB%20of%20stringB%29%20%7B%0A%20%20%20%20%20%20if%20%28charA%20%3D%3D%3D%20charB%29%20%7B%0A%20%20%20%20%20%20%20%20count%2B%2B%3B%0A%20%20%20%20%20%20%20%20break%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20count%20%3D%3D%3D%20stringA.length%3B%0A%7D%3B%0A%0A%20anagrams%28'RAIL!%20SAFETY!',%20'fairy%20tales'%29%20%0Aanagrams%28'Hi%20there',%20'Bye%20there'%29%20&cumulative=false&curInstr=166&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false


