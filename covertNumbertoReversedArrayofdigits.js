function digitize(n) {
    n = n.toString().split('').reverse()
    console.log(n)
    return n.map(Number);
    
  }