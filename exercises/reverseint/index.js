// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString()
  let rev = ''
  
  for (let char of str) {
    rev = char + rev
  }
  
  return parseInt(rev) * Math.sign(n)
}

module.exports = reverseInt;
