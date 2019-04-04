// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let str = '#'
  let space = ' '
  for(let i = 0; i < n; i++) {
    if (i === n) console.log(str.repeat(i))
    else if (i === 0 ) console.log(str + space.repeat(n-1))
    else console.log(str.repeat(i + 1) + space.repeat(n-i-1))
  }
}

module.exports = steps;
