function menFromBoys(arr){
  let boys = arr.filter(x => x % 2 == 1 || x % 2 == -1).sort((a,b) => b - a)
  let men =  arr.filter(x => x % 2 == 0).sort((a,b) => a - b)
  return [...new Set(men.concat(boys))]
}
