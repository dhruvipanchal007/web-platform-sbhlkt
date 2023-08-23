function findlargenumber(numbers) {
  let maxnumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (maxnumber < numbers[i]) {
      maxnumber = numbers[i];
    }
  }
  return maxnumber;
}
let numbers = [5, 10, 25, 100];
const largenumber = findlargenumber(numbers);
console.log(largenumber);
