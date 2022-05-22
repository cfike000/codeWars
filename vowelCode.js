function encode(string) {
  return string.split('').map(x =>
    x == 'a' ? 1 :
    x == 'e' ? 2 :
    x == 'i' ? 3 :
    x == 'o' ? 4 :
    x == 'u' ? 5 :
    x
  ).join('')
}

function decode(string) {
  return string.split('').map(x =>
    x == 1 ? 'a' :
    x == 2 ? 'e' :
    x == 3 ? 'i' :
    x == 4 ? 'o' :
    x == 5 ? 'u' :
    x
  ).join('')
}
