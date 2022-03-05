function DNAStrand(dna){
    let sol = []
    for(i = 0; i < dna.length; i++){
      if(dna[i] == 'T'){
        sol.push('A')
      }else if(dna[i] == 'A'){
        sol.push('T')
      }else if(dna[i] == 'G'){
        sol.push('C')
      }else if(dna[i] == 'C'){
        sol.push('G')
      }
      
      }
    return sol.join('')
  }