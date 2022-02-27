function find_average(array) {
    if(array.length === 0){
      return 0
    }else
    return array ? ((array.reduce((acc,c) => acc +c, 0))/array.length) : 0
  }
  