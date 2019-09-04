// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }
// function reverse(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed
// }
function reverse(str) {
  return str
    .split('')
    .reduce((acc, cur) => cur + acc, '')
}


module.exports = reverse;
