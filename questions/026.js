
function decimalToBinary(decimalNumber) {
  let binaryNumber = ''; 
 
  while (decimalNumber > 0) {
      let remainder = decimalNumber % 2; 
      binaryNumber = remainder + binaryNumber; 
      decimalNumber = Math.floor(decimalNumber / 2); 
  }

  return binaryNumber;

}
const decimalInput = 20;
const binaryOutput = decimalToBinary(decimalInput);

console.log(binaryOutput);
