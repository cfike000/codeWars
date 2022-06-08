function numberOfPairs(gloves)
{
  let count = 0
  let map = {}
  gloves.forEach(x => {
    map[x] ? map[x]++ : map[x] = 1
  })
  for (x in map){
    map[x] >= 2 ? (count += Math.floor(map[x]/2)) : null
  }
  return count
}
