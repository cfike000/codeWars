function catchSignChange(arr) {
 var count = 0;
  for (var i = 1; i < arr.length; i++) {
    if ((arr[i-1] < 0 && arr[i] >= 0) || (arr[i-1] >= 0 && arr[i] < 0)) {
      count++;
    }
  }
  return count;
}
