function generateRange(min, max, step){
  let arr = []
  for(i=min;i<=max; i += step){
    arr.push(i)
  }
  return arr
}
