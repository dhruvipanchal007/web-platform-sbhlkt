// let text = 'CPROGRAMMING';
// let length = text.length;
// for (let i = 0; i < length; i++) {
//   console.log(text.substring(0, i + 1));
// }

// function findmaxvalue(number) {
//   let largenumber = number[0];
//   for (let i = 0; i < number.length; i++) {
//     if (largenumber < number[i]){
//     largenumber = number[i];
//     }
//   }
//   return largenumber;
// }

// let number=[2,500,40,20,35,14];
// let maxnumber=findmaxvalue(number);
// console.log(maxnumber);
function minvalue(number){
  let smallnumber=number[0];
  for(let i=0;i<number.length;i++){
    if(smallnumber>number[i]){
      smallnumber=number[i];
    }
  }
  return smallnumber
}
let number=[5,10,15,20,2];
let minnumber=minvalue(number);
console.log(minnumber)