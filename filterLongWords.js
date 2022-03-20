function filterLongWords(sentence, n) {
  sentence = sentence.split(' ')
  return sentence.filter(x => x.length > n)
}
