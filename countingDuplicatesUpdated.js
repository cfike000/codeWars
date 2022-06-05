function duplicateCount(text){
  let map = {}
  text.toLowerCase().split('').forEach(x => {
    map[x] ? map[x]++ : map[x] = 1
  })
  let ans = 0
  for(x in map){
    map[x] >1  ? ans++ : null
  }
  return ans
}
