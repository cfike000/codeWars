function sortArray(array) {
  let arrCopy = array
  let odds = array.filter(x => Math.abs(x) % 2 == 1).sort((a, b) => a - b)
  let oddCount = 0
  for(i=0;i<array.length;i++){
    if(odds.includes(array[i])){
      array[i] = odds[oddCount]
      oddCount++
    }
  }
  return array
}
