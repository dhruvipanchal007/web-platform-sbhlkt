function calculateseriessum(n){
  let sum=0;

  if(n<0){
    return pleaseenterpositivevalue;
  }
  for(let i=0;i<=n;i++){
    sum+=1/n;
  }
  return sum;
}
let n=2;
let series=calculateseriessum(n);
console.log(series);