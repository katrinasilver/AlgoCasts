// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // return str.split('').reverse().join('') === str

  for (let i in str) {
    return str[i] === str[str.length-1]
  }

  // return str.split('').every((c, i) => {
  //   return c === str[str.length-i-1]
  // })

  // let reverse = ''
  // for (let char of str.toLowerCase()) {
  //   if (/[a-z0-9]/.test(char)) reverse = char + reverse
  // }
  // return reverse === str
}

module.exports = palindrome;
