function sevenAte9(str) {
  let arr = []
  str.split('').filter((x,i) => {
    (x == 9) && (str[i-1] == 7) && (str[i+1]) == 7 ? null : arr.push(x)
  })
  return arr.join('')
}
