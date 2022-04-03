function nbYear(p0, percent, aug, p) {
    let count = 0
    let pop = p0
    while (pop < p){
      pop = pop + (pop * percent/100) + aug
      count++
       console.log(pop, p)
    }
 
  return count
}
