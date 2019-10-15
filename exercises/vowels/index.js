// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str
    .toLowerCase()
    .split('')
    .filter(el => {
      return el == "a" || el == "e" || el == "i" || el == "o" || el == "u"
    })
    .length;
}

module.exports = vowels;
