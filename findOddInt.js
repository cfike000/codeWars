function findOdd(A){
  let map = {}
  A.forEach(x => {
    map[x] ? map[x]++ : map[x] = 1
  })
  let odd = 0
  for(x in map){
   map[x] % 2 == 1 ? odd = x: console.log(x)
  }
  return Number(odd)
}
