function pointsPer48(ppg, mpg) {
  var num = (48/mpg) * ppg
  return +num.toFixed(1) || 0
}
