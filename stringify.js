function stringy(size) {
  let arr = []
  for(i=0;i<size; i++){
    if(i % 2 == 0){
      arr.push(1)
    }else{
      arr.push(0)
    }
  }
  return arr.join('')
}
