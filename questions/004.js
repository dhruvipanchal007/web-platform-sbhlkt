// function clacareaofRectangle(l,b,h){
//   let i=l*b*h;
//   return i;
// }
// let l=prompt('enter length of rectangle');
// let b=prompt('enter breath of rectangle');
// let h=prompt('enter height of rectangle');
// const Area=clacareaofRectangle(l,b,h);
// console.log(Area);

//calculate area of tringle
// function calcareaoftriangel(l, b) {
//   let i = l * b * 0.5;
//   return i;
// }
// let l = prompt('enter length of triangle');
// let b = prompt('enter breath of triangle');
// const Area = calcareaoftriangel(l, b);
// console.log(Area);

// calculate area of cube
function calcareaofCube(l) {
  let i = l*l*l;
  return i;
}
let l = prompt('enter length of cube');
const area = calcareaofCube(l);
console.log(area);
