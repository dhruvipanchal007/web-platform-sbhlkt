function checknumber(number) {
  if (number > 0) {
    return positive;
  } else if (number < 0) {
    return negative;
  } else {
    return zero;
  }
}
let number = prompt('enter number');
const findnumber = checknumber(number);
console.log(findnumber);