function findlargenumber(Numbers) {
  let largenumber = Numbers[0];
  for (let i = 0; i < Numbers.length; i++) {
    if (largenumber < Numbers[i]) {
      largenumber = Numbers[i];
    }
  }
  return largenumber;
}

let Numbers = [5, 10, 50, 20, 100, 4, 40, 400];
const maxnumber = findlargenumber(Numbers);
console.log(maxnumber);
