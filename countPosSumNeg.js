function countPositivesSumNegatives(input) {
    let count = 0
    let sumNeg = []
    if(input == null || input.length == 0){
      return []
    }
    for(i=0;i<input.length; i++){
      if(input[i] > 0){
        count++
      }else{
        sumNeg.push(input[i])
      }
    }
  let sumN = sumNeg.reduce((acc, c) => acc + c, 0)
  let ans = [count, sumN]
  return ans

  
}