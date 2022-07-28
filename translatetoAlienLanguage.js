function translateToAlienLanguage(string) {
  return string.toLowerCase().split('').map(x => 'aeiou'.split('').includes(x) ? x + x: x).join('').split(' ').join(' ')
  .split(' ').map(x => x.split("").reverse().join('')).join(' ')
}
