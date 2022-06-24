function turn(current, target) {
  return (current == 'N' && target == 'E') ||
         (current == 'E' && target == 'S') ||
         (current == 'S' && target == 'W') ||
         (current == 'W' && target == 'N') ? 'right' : 'left'
}
