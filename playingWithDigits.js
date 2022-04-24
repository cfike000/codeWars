function digPow(n, p){
  let sum = 0
  let nCopy = String(n).split('')
  for(i=0;i<String(n).length;i++){
    sum += (+nCopy[i])**(p)
    p++
  }
  return sum % n == 0 ? sum / n : -1
}
