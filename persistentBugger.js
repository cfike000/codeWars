function persistence(num) {
   let count = 0
   while(String(num).length !== 1){
     num = String(num).split('').reduce((acc, c) => acc * c, 1)
     count++
   }
  return count
}
