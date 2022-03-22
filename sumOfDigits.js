function digital_root(n) {
  let strNum = String(n).split('')
   while(strNum.length > 1){
    strNum = String(strNum.reduce((acc, c) => acc + +c, 0)).split('')
  }
  return Number(strNum)
}
