function duplicateCount(text){
  let map = {}
  text.toLowerCase().split('').forEach(x => {
    map[x] ? map[x]++ : map[x] = 1
  })
  let count = 0
  for (const property in map) {
  map[property] -= 1
  map[property] !== 0 ? count++ : null
}
  return count
}
