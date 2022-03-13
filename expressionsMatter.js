function expressionMatter(a, b, c) {
  let ans = []
  for(i=0; i < 3; i++){
    switch(i){
        case 0:
        ans.push(a * (b + c))
        case 1:
        ans.push(a * b * c)
        case 2:
        ans.push(a + b * c)
        case 3:
        ans.push((a+b) * c )
        case 4: 
        ans.push(a + b + c)
    }
  }
  console.log(ans)
  return Math.max(...ans)
}
