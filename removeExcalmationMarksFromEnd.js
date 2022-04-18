function remove (string) {  
  string = string.split('').reverse()
  while(string[0] == '!'){
    string.shift()
  }
  return string.reverse().join('')
}
