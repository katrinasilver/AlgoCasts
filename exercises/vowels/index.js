// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // let vowel = ['a', 'e', 'i', 'o', 'u']
  // let counter = 0

  // for (let char of str.toLowerCase()) {
  //   if (vowel.includes(char)) counter++
  // }

  // return counter

  let regex = new RegExp(/[aeiou]/gi)
  const vowel = str.match(regex)
  return vowel ? vowel.length : 0
}

module.exports = vowels;
