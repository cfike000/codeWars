function reverseList(arr) {
  if(arr.length === 0) return []
  let newArr = []
  for(i=0;i<=arr.length-1;i++){
    newArr.unshift(arr[i])
  }
  return newArr
}
