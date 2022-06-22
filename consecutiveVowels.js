function getTheVowels(word) {
  const vowels = 'aeiou';
  let k = 0, i = word.indexOf('a');
  for (; i >= 0; i = word.indexOf(vowels[k % 5], i)) k++;
  return k;
}
