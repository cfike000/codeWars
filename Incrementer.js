function incrementer(nums) { 
  let count = 1
  let arr = []
  nums.forEach(x => {
    arr.push((String(x+count)).length > 1 ? String(x+count).split('')[1] : x + count)
    count++
  })
  return arr.map(x => +x)
}
