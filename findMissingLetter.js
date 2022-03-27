function findMissingLetter(array)
{
  let upperCase = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',')
  let lowerCase = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',')
  let joined = upperCase.concat(lowerCase)
  console.log(joined)
  for(i=0;i<array.length;i++){
    let location = joined.indexOf(array[i])
    let next = joined.indexOf(array[i+1])
    console.log(location, next)
    if(location - next !== -1){
      let num = joined.indexOf(array[i])
      return joined[num + 1]
    }
  }v
