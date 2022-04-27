function sumDigits(number) {
 return String(number)
   .split('')
   .filter(x => Number.isInteger(Number(x)))
   .map(x => +x)
   .reduce((acc, c) => acc + c, 0)
}
