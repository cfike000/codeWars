function adjacentElementsProduct(array) {
  let possib = []
  array.forEach((x,i) => {
    i !== array.length-1 ? possib.push(x * array[i+1]) : 0
  })
  return Math.max(...possib)
}
