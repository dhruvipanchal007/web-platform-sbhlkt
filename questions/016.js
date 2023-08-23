// function findmaxnumber(numbers) {
//   let maxnumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (maxnumber < numbers[i]) {
//       maxnumber = numbers[i];
//     }
//   }
//   return maxnumber;
// }
// let numbers = [5, 10, 15, 50, 45, 65, 2, 5, 85, 100, 99];
// const largenumber = findmaxnumber(numbers);
// console.log(largenumber);

function findminnumber(numbers) {
  let minnumber = numbers[0];
  for (let i = 0; i <numbers.length; i++) {
    if (minnumber >numbers[i]) {
      minnumber = numbers[i];
    }
  }
  return minnumber;
}
let numbers = [5, 10, 15, 50, 45, 65, 2, 5, 85, 100, 99];
const smallnumber = findminnumber(numbers);
console.log(smallnumber);

