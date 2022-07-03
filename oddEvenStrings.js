function sortMyString(S) {
    let odd = []
    let even = []
    S.split('').forEach((x,i) => i % 2 === 0 ? even.push(x) : odd.push(x))
    return `${even.join('')} ${odd.join('')}`
}
