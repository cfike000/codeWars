function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc, c) => acc + c) + arr2.reduce((acc,c) => acc + c)
}
