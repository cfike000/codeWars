function longest(s1, s2) {
    let uniqueArr = []
    s1 = s1.split('')
    s2 = s2.split('')
  for(i=0; i < s1.length; i++){
    if(!uniqueArr.includes(s1[i])){
      uniqueArr.push(s1[i]);
    }
  }
  for(i=0; i<s2.length;i++){
    if(!uniqueArr.includes(s2[i])){
      uniqueArr.push(s2[i])
    }
  }
    uniqueArr.sort()
    return uniqueArr.join('')
  }