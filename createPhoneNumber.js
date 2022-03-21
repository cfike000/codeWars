function createPhoneNumber(numbers){
  let area = `(${numbers.slice(0,3).join('')})`
  let num = `${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
  return `${area} ${num}`
}
