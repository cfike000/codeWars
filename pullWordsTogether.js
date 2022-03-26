function sentencify(words) {
  let firstLetter = words[0].charAt(0).toUpperCase()
  let firstWord = `${firstLetter}${words[0].split('').slice(1,words[0].length).join('')}`
  return words.length > 1 ? firstWord + ' ' + words.slice(1, words.length).join(' ') + '.'
  : firstLetter + words[0].split('').slice(1, words[0].length).join('') + '.'
}
