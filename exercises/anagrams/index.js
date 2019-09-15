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
  var found = false;


  for (let charB of stringB) {
    if (!found) {
      if (charA === charB) {
        count++;
        found = true
      }
    }
  }
  found = false;
}
return count == stringA.length ? true : false;
}

module.exports = anagrams;
