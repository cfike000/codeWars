function addLength(str) {
str = str.split(' ')
  return str.map(x => (x + ' ' + x.length))
}
