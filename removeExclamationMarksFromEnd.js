function remove (string) {
 if(string[string.length-1] == '!'){
   string = string.split('')
   string.pop()
   return string.join('')
 }
  console.log(string)
  return string
}
