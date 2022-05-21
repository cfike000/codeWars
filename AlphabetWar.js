function alphabetWar(fight) {
    let left = 0;
    let right = 0;

    for (i = 0; i < fight.length; i++) {
        (fight[i] === 'w')
        ? left += 4
        : (fight[i] === 'p')
        ? left += 3
        : (fight[i] === 'b')
        ? left += 2
        : (fight[i] === 's')
        ? left += 1
        : (fight[i] === 'm')
        ? right += 4
        : (fight[i] === 'q')
        ? right += 3
        : (fight[i] === 'd')
        ? right += 2
        : (fight[i] === 'z')
        ? right += 1
        : left += 0;
    }
    return (left > right) 
      ? `Left side wins!`
      : (left < right)
      ? `Right side wins!`
      : `Let's fight again!`

}
