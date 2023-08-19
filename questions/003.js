function calcareaofcircle(r) {
  let a = Math.PI * r * r;
  return a;
}

let r = prompt('enter raddius');
const area = calcareaofcircle(r);
console.log(area);
