function findSum(n) {
  let threesAndFives = []
  for(i=1;i<=n;i++){
    if(i % 3 == 0 || i % 5 == 0){
      threesAndFives.push(i)
    }
  }
  return threesAndFives.reduce((acc, c) => acc + c, 0)
}
