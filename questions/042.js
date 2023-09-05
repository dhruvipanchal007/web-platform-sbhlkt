let N=prompt('enter n value');
let sum=0
let average=0;
for(let i=0;i<N;i++){
  let number=prompt('enter value');
  let num=Number(number);
  sum+=num;
  average=sum/N;
}
console.log(sum);
console.log(average);
