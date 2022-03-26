function firstNonConsecutive (arr) {
  let place = []
  if(arr.length == 0){
    return 0
  }
  arr.forEach((x, i) => {
    if(x + 1 !== arr[i+1]){
     place.push(arr[i+1])
    }
  })
  console.log(arr, place)
  return place[0] || place[0] == 0 ? place[0] : null
}
