function findEvenIndex(arr){
    for(i=0; i < arr.length; i++){
      let leftSide = arr.slice(0,i)
      let rightSide = arr.slice(i+1, arr.length)
      if(leftSide.reduce((acc, c) => acc + c, 0) === rightSide.reduce((acc, c) => acc + c, 0)){
        return i
      }else{
        continue
      }
    }
    return -1
    }
  
    
  
  
