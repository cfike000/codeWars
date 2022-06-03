function isIsogram(str){
  let map = {}
  let ans = true
  str.toLowerCase().split('').forEach(x => {
    map[x] ? ans = false : map[x] = 1
  })
  return ans
}
