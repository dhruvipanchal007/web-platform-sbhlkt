function daysnumber(number) {
  if ((number <=1)) {
    return 'sunday';
  } else if ((number <= 2)) {
    return 'Monday';
  } else if ((number <= 3)) {
    return 'Tuesday';
  } else if ((number <= 4)) {
    return 'wensday';
  } else if ((number <= 5)) {
    return 'thursday';
  } else if ((number <= 6)) {
    return 'friday';
  } else if ((number <= 7)) {
    return 'saturday';
  } else {
    return 'null';
  }
}
let number = prompt('enter number between 1 to 7');
const Days = daysnumber(number);
console.log(Days);
