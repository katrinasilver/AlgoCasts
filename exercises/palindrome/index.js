// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // str = str.replace(/\W/g, '') // use if only spaces are not included
  // return str.split('').reverse().join('') === str

  for (let i in str) {
    return str[i] === str[str.length-1]
  }
}

module.exports = palindrome;
