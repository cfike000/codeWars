function deleteDigit(n) {
  let poss = []
  let test = String(n).split('')
  String(n).split("").forEach((x,i) => {
    (test.splice(i,1))
    poss.push(test)
    test = String(n).split('')
  })
  return Math.max(...poss.map(x => Number(x.join(''))))
}
