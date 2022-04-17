function shortcut (string) {
  let vowels = 'aeiou'
  vowels = vowels.split('')
  return string.split('').filter(x => !vowels.includes(x)).join('')
}
