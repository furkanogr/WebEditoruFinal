function smallestMult(n) {
    let isFound = false;
    let currNumber = 0;
  
    while(!isFound) {
      currNumber += n;
  
      for(let i=n; i>=1; i--) {
        if(currNumber % i !== 0) {
          break;
        }
        if(i===1)
          isFound = true;
      }
    }
  
    return currNumber;
  }
  
  smallestMult(20);