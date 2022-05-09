function deleteNth(arr,n){
  let newArr = []
  for(i=0;i<arr.length;i++){
    newArr.filter(x => x == arr[i]).length < n ? newArr.push(arr[i]) : 0
  }
  return newArr
}
