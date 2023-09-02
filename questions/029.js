function countDigits(number) {
  return String(number).length;
}

let digit1=prompt('enter 1 digitnumber');
let digit2=prompt('enter 2 digitnumber');
let digit3=prompt('enter 3 digitnumber');

let  armstrongnumber=digit1*digit1*digit1 + digit2*digit2*digit2 + digit3*digit3*digit3;
console.log(armstrongnumber);

