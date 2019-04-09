// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   return strings(stringA) === strings(stringB) 
// }

// function strings(str) {
//   return str.replace(/\W/gi,'').split('').sort().join('')
// }

// function anagrams(stringA, stringB) {
//   let a = buildMap(stringA)
//   let b = buildMap(stringB)
//   if (Object.keys(a).length !== Object.keys(b).length) return false
//   for (let i in a) {
//     if (a[i] !== b[i]) return false
//   }
//   return true
// }

// function buildMap(str) {
//   let map = {}
//   for (let char of str) {
//     map[char] = map[char] + 1 || 1
//   }
//   return map
// }

function anagrams(stringA, stringB) {
  let map = {}

  if (stringA.length !== stringB.length) return false

  for (let char of stringA.toLowerCase()) {
    map[char] = map[char] + 1 || 1
  }

  for (let char of stringB.toLowerCase()) {
    if (!map[char]) return false
    else map[char]--
  }

  return true
}

module.exports = anagrams;
