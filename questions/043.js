

function isarmstrong(number) {
  let numstr = number.toString();
  let n = numstr.length;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    let digit = Number(numstr[i]);
    sum += Math.pow(digit, n);
  }

  if (sum === number) {
    return true;
  } else {
    return false;
  }
}
let number=prompt('enter number');
let Arm=isarmstrong(number);
console.log(Arm);
