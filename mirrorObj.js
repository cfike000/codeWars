function mirror (obj) {
  var ob={};
  for (var i in obj){
    ob[i]=i.split("").reverse().join("");
  }
  return ob;
};
