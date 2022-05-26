function toWeirdCase(string){
return string.split(' ').map(x => x.split('').map((word,ind) =>
   ind % 2 == 0 ?
   word.toUpperCase() :
   word.toLowerCase()).join('')).join(' ')
}
