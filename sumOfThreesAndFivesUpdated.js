function findSum(n) {
  let arr = []
  for(i=0;i<=n;i++){
    i % 3 == 0 || i % 5 == 0 ? arr.push(i) : 0
  }
  return arr.reduce((acc, c) => acc + c, 0)
}
