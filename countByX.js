function countBy(x, n) {
  let ans = []
  for(i=x;i<=(n*x); i += x){
    ans.push(i)
  }
  return ans
}
