function areYouPlayingBanjo(name) {
  let firstLet = name.charAt(0)
  return firstLet == 'R' || firstLet == 'r' ? `${name} plays banjo` : `${name} does not play banjo`
} 
