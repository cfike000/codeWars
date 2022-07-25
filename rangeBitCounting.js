function rangeBitCount(a, b) {
  let sum = 0
  for(i=a;i<=b;i++){
   sum += ((i >>> 0).toString(2)).split('').reduce((acc,c) => acc + Number(c), 0)
  }
  return sum
}
