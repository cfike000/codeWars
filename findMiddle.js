function gimme (triplet) {
  let max = Math.max(...triplet)
  let min = Math.min(...triplet)
  let arr = triplet.filter(x => x !== max && x !== min)
  return triplet.indexOf(arr[0])
}
