// function convertkmtoMeter(km) {
//   let i = km * 1000;
//   return i;
// }
// let km = prompt('enter kilometer');
// const Meter = convertkmtoMeter(km);
// console.log(Meter);


// convert feet
// function convertkmtoFeet(km){
//   let i=km*3280.84;
//   return i;
// }
// let km=prompt('enter km');
// const feet=convertkmtoFeet(km);
// console.log(feet);


// convert inches
// function convertkmtoinches(km){
//     let i=km*39370.1;
//     return i;
//   }
//   let km=prompt('enter km');
//   const inches=convertkmtoinches(km);
//   console.log(inches);

// convert cm
function convertkmtocm(km){
  let i=km*100000;
  return i;
}
let km=prompt('enter km');
const cm=convertkmtocm(km);
console.log(cm);