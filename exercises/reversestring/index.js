// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {

//   let reversed = ''
//   for (let i in str) {
//     reversed = str[i] += reversed
//   }
//   return reversed
// }

function reverse(str) {
  if (str === '') return ''

  return reverse(str.slice(1)) + str.charAt(0)
}

module.exports = reverse;
