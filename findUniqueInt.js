function findUniq(arr) {
    let newArr = []
    arr.sort()
    return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
  }