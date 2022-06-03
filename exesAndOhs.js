function XO(str) {
  let split = str.toLowerCase().split('')
  return split.filter(x => x == 'x').length ==
         split.filter(x => x == 'o').length
}
