function sameCase(a, b){
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  if(!alphabet.includes(a) || !alphabet.includes(b)){
    return -1
  }
  
  let caseA = ''
  let caseB = ''
  a == a.toUpperCase() ? caseA = 'up' : caseA = 'down'
  b == b.toUpperCase() ? caseB = 'up' : caseB = 'down'
  
  return caseA == caseB ? 1 : 0
}
