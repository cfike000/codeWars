function luckCheck(ticket){
  var length = ticket.length; 
  var left = ticket.split('').splice(0, length/2);
  var right = ticket.split('').splice((length % 2 == 0? length/2: length/2 + 1), length);
  return left.reduce((a, b) => +a + +b) == right.reduce((a, b) => +a + +b);
}
