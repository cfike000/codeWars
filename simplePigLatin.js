function pigIt(str){
  str = str.split(" ");
  for(var i = 0; i <str.length; i ++) {
    str[i] = (str[i].slice(1) + str[i].slice(0, 1) + "ay");
  }
  return str.join(" ");
}
