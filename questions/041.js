let number=[10,20,30,40,50];
let totalnumber=0;
for(let i=0;i<number.length;i++){
  totalnumber=totalnumber+number[i];
}

let numberofinput=5;
let average=totalnumber/numberofinput;
console.log(totalnumber);
console.log(average);

function findmaxvalue(number){
  let maxnumber=number[0];
  for(let i=0;i<number.length;i++){
    if(maxnumber<number[i]){
      maxnumber=number[i];
    }
  }
  return maxnumber;
}
let largevalue=findmaxvalue(number);
console.log(largevalue);

function findminvalue(number){
  let smallnumber=number[0];
  for(let i=0;i<number.length;i++){
    if(smallnumber>number[i]){
      smallnumber=number[i];
    }
  }
  return smallnumber;
}
let smallvalue=findminvalue(number);
console.log(smallvalue);