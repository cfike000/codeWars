function arrayDiff(a, b) {
  console.log(a,b)
  return a.filter(x => !b.includes(x))
}
