function narcissistic(value) {
  let numArr = String(value).split('').map(x => x ** String(value).length)
  return numArr.reduce((acc, c) => acc + c, 0) == value
}
