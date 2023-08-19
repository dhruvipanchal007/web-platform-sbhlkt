function calcsimpleInterest(p, r, n) {
  let i = (p * r * n) / 100;
  return i;
}
let p = prompt('enter principle amount');
let r = prompt('enter rate of interest');
let n = prompt('enter number of the years');
const SI = calcsimpleInterest(p, r, n);
console.log(SI);
