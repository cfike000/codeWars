function findUniq(arr) {
  return arr.sort((a,b) => a -b)[0] == arr[1] ? arr[arr.length-1] : arr[0]
}
