const sequenceSum = (begin, end, step) => {
  let seq = []
  for(i=begin; i<=end;i += step){
    seq.push(i)
  }
  return seq.reduce((acc, c) => acc + c, 0)
};
