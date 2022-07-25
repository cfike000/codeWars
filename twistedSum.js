function twistedSum(n) {
  let sum = 0
  for(i=1;i<=n;i++){
    String(i).length === 1 ? sum += i :
    sum += String(i).split('').reduce((acc,c) => acc + Number(c), 0)
  }
  return sum
}
