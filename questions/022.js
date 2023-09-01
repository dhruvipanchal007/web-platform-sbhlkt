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
function findprimenumber(){
  let primes=[];
  let num=2;

  while(primes.length<100){
    if(isprime(num)){
      primes.push(num);
    }
    num++;
  }
  return primes;
}
const Primenumbers=findprimenumber();
console.log(Primenumbers);