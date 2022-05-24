function remove (string) {
  return string.split('').filter(x => x == '!' ? '' : x).join('') + '!'
}
