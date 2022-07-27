function divCon(x){
  const strings = x.filter(x => typeof x === "string").reduce((acc, c) => acc + Number(c), 0)
  const numbers = x.filter(x => typeof x === 'number').reduce((acc, c) => acc + Number(c), 0)
  return strings.length !== 0 && numbers.length !== 0 ? numbers - strings : null
}
