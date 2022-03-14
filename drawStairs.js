function drawStairs(n) {
  let str = ''
 for(i=0; i<n; i++){
   if(i==n-1){
     str += ' '.repeat(i) + 'I'
   }else{
   str +=' '.repeat(i) + 'I\n'
   }

  }
    console.log(str)
  return str
}
