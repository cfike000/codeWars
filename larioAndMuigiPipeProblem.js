function pipeFix(numbers){
  let max = Math.max(...numbers)
  let min = Math.min(...numbers)
  let ans = []
  for(i=min; i<=max; i++){
    ans.push(i)
  }
  return ans
}
