function strong(n) {
  let split = n.toString().split('')
  let arr = []
  split.forEach(x => {
    let temp = 1
    for(i=1;i<=x;i++){
      temp *= i
    }
    arr.push(temp)
  })
  
  return arr.reduce((acc,c ) => acc + c, 0) == n ? 'STRONG!!!!' : 'Not Strong !!'
  
