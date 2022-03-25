function removeExclamationMarks(s) {
  s = s.split('');
  let newArr = s.filter(x => x !== '!').join('')
  return newArr
  
}
