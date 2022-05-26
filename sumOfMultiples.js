function sumMul(n,m){
if(n > m || n == 0){
  return 'INVALID'
}
  let sum = 0
  for(i=n;i<m;i+=n){
    sum += i
  }
  return sum
}
