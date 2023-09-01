function isprime(number){
    if(number<=1){
      return false;
    }
    if(number<=3){
      return true;
    }
    for (let i=2;i*i<=number;i++)
    if(number % i=== 0){
      return false;
    }
    return true;
  }
  let number=prompt('enter number');
  const N=isprime(number);
  console.log(N);
//   return true means prime