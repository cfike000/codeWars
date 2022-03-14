// return masked string
function maskify(cc) {
  if(cc.length<4){
    return cc
  }
  cc = cc.split('')
  let len = cc.length
  let last4 = (cc.slice(len-4, len)).join('')
  let ans = []
  ans.push('#'.repeat(len-4))
  return (ans.join('') + last4)
}
