function minValue(values){
  values.sort((a,b) => a - b)
  let newArr = [...new Set(values)];
  return Number(newArr.join(''))
}
