function digital_root(n) {
  while(String(n).length > 1){
 n = String(n).split('').reduce((acc, c) => Number(acc) + Number(c))}
  return n
}
