function squareOrSquareRoot(array) {
  let ans = array.map(x => {
    if(Number.isInteger(Math.sqrt(x))){
      return Math.sqrt(x)
    }else{
      return x**2
    }
  })
  return ans
}
