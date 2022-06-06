function alphabetPosition(text) {
  const alpha = '0abcdefghijklmnopqrstuvwxyz'
  return text.toLowerCase().split('')
  .filter(x => alpha.includes(x)).map(x => alpha.indexOf(x)).filter(x => x != 0).join(' ')
 }
