function findOutlier(integers){
  let odds = []
  let evens = []
  integers.forEach(x => x % 2 == 0 ? evens.push(x) : odds.push(x))
  console.log(odds, evens)
  return odds.length > evens.length ? evens[0] : odds[0]
}
