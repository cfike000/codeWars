function toWeirdCase(string){
  string = string.split('')
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let cap = true
  for(i=0;i<string.length;i++){
    if (cap == true && alphabet.includes(string[i])){
      cap = false
      string[i] = string[i].toUpperCase()  
    }else{
      cap = true
      string[i] = string[i].toLowerCase()
    }
  }
  return string.join('')
}
