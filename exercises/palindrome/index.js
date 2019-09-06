// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str
//     .split('')
//     .reduce((acc, cur) => cur + acc) === str;
// }

function palindrome(str) {
  return str
  // splits string and turns it into an array
    .split('')
    // "every" returns true if every element satisfies the given condition
    .every((char, i ) => char === str[(str.length - 1) - i])
}

module.exports = palindrome;
