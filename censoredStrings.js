function uncensor(infected, discovered) {
  discovered = discovered.split('')
  return infected.split('').map(x => x == '*' ? discovered.shift() : x).join('')
}
