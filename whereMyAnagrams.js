function anagrams(word, words) {
  let wordSplit = word.split('').sort()
  let ans = []
  for(i=0;i<words.length;i++){
    if(wordSplit.join('') == words[i].split('').sort().join('')){
      ans.push(words[i])
    }
  }
  return ans
}
