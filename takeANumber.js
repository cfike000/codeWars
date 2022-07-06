function sumDigPow(a, b) {
  let arr = []
  for(i=a;i<=b;i++){
    (String(i).split('').reduce((acc, c, i) => acc + (c ** (i+1)), 0)) == i ?
    arr.push(i) : null
  }
  return arr
}
