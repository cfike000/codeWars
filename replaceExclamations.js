function replace(s){
  s = s.split('')
  return s.map(x => ['a', 'e','i','o','u','A','E','I','O','U'].includes(x) ? '!' : x).join('')
}
