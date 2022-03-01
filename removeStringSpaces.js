function noSpace(x){ 
    x = x.split('')
    for(i = 0; i < x.length; i++){
      if(x[i] == ' '){
        x[i] = ''
        console.log(x, i)
      }
    }
    return x.join('')
  }