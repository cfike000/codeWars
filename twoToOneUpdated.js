function longest(s1, s2) {
  let arr = []
  return s1.concat(s2).split('').filter(x => arr.includes(x) ? null : arr.push(x)).sort().join('')
}
