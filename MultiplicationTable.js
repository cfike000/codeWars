multiplicationTable = function(size) {
  let area = size
  let ans = []
  let current = 1
  while(size != 0){
    let temp = []
    for(i=1;i<=area;i++){
      temp.push(i*current)
    }
    size -= 1
    current++
    ans.push(temp)
  }
  return ans
}
