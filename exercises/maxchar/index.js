// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let frequent = ''
  let counter = 0

  let chars = {}
  for (let c of str) {
    chars[c] = chars[c] + 1 || 1
  }

  for(let char in chars) {
    if (chars[char] > counter) {
      counter = chars[char]
      frequent = char
    }
  }

  return frequent
}

module.exports = maxChar;
