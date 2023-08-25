function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  
  for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  
  return true;
}

function generatePrimeNumbers(count) {
  const primes = [];
  let num = 2;
  
  while (primes.length < count) {
      if (isPrime(num)) {
          primes.push(num);
      }
      num++;
  }
  
  return primes;
}

const primeCount = 100;
const primeNumbers = generatePrimeNumbers(primeCount);

console.log(`The first ${primeCount} prime numbers are:`);
console.log(primeNumbers.join(', '));
