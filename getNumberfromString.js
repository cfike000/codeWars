function getNumberFromString(s) {
  return Number(s.split('').map
  (x => '1234567890'.split('').includes(x) ? x : null).join(''))
}
