function noBoringZeros(n) {
  let num = String(n).split('').reverse()
  while(num[0] == 0){
    num.shift()
  }
  return +num.reverse().join('')
}
