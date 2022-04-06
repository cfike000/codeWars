function tripleTrouble(one, two, three){
  let leng = one.length
  let ans = []
  for(i=0;i<leng;i++){
    ans.push(one[i] + two[i] + three[i])
  }
  return ans.join('')
 }
