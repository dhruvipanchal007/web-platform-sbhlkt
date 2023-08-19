// function findthArea(r) {
//   let i = 4 * Math.PI * r * r;
//   return i;
// }
// let r = prompt('enter radius');
// const Area = findthArea(r);
// console.log(Area);

//volume of sphere
function findVolumeofsphere(r){
  let i=4/3*Math.PI*r*r*r;
  return i;
}
let r=prompt('enter radius');
const volume=findVolumeofsphere(r);
console.log(volume);