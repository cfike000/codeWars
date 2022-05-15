function deleteNth(arr,n){
  let newArr = []
  arr.forEach(x => {
    newArr.filter(i => i == x).length < n ? newArr.push(x) : 0
    })
  return newArr
}
