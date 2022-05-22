function vowelIndices(word){
  let vowels = 'aeiouy'.split('')
  return word.toLowerCase().split('').map((x,i) => vowels.includes(x) ? i+1 : 't').filter(x => x !== 't')
}
