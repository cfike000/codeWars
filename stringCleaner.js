function stringClean(s){
  return s.split("").filter(x =>!'1234567890'.split('').includes(x)).join('')
}
