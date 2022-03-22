function sumArray(array) {
  if(array){
    array.sort((a, b) => a-b)
    console.log(array)
    return array.length > 2 ? array.slice(1, array.length-1).reduce((acc, c) => acc + c, 0) : 0
  }else{
    return 0
  }
}
