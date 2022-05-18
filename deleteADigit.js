function deleteDigit(n) {
  let possib = []
  String(n).split('').forEach((x, i) =>
  possib.push(String(n).split('').filter((el, id) => id !== i)))
  return Math.max(...possib.map(x => Number(x.join(''))))
}
