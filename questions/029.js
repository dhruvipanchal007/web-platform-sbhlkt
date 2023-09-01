function countDigits(number) {
  return String(number).length;
}

function isArmstrong(number) {
  let num = number;
  let power = countDigits(number);
  let sum = 0;

  while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, power);
      num = Math.floor(num / 10);
  }

  return sum === number;
}

function findFirstNArmstrongNumbers(n) {
  let armstrongNumbers = [];
  let number = 1;

  while (armstrongNumbers.length < n) {
      if (isArmstrong(number)) {
          armstrongNumbers.push(number);
      }
      number++;
  }

  return armstrongNumbers;
}

// Find and display the first 5 Armstrong numbers
let first5ArmstrongNumbers = findFirstNArmstrongNumbers(5);
console.log("The first 5 Armstrong numbers are:", first5ArmstrongNumbers.join(", "));
