// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split('')
    // if the previous element is a string of single space "str[i - 1] or if the index is 0, then to upperCase, otherwise return the char as it is."
    .map((char, i) => {
      if (str[i - 1] === ' ' || i === 0) {
        return char.toUpperCase();
      }
      return char;
    })
    .join('');
}

module.exports = capitalize;
