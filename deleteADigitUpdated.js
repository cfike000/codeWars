function deleteDigit(n) {
  let arr = []
  String(n).split('').forEach((x,i) => {
    arr.push(Number(String(n).split('').filter((z,ind) => ind != i).join('')))
  })
  return Math.max(...arr)
}
