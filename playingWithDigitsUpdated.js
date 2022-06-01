function digPow(n, p){
  let sum = String(n).split("")
  .map((x,i) => (Number(x) ** (p+i)))
  .reduce((acc, c) => acc + c)
  return sum % n == 0 ? sum / n : -1 
}
