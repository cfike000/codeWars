function points(games) {
  let score = 0
  games.forEach(x => {
    x[0] > x[2] ? score += 3 :
    x[0] == x[2] ? score += 1 : 0
  })
  return score
}
