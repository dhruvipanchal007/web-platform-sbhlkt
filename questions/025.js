let inputnumber=prompt('enter number');
let num=Number(inputnumber);

if(isNaN(num)){
  console.log('invalid outtput')
}
else{
  let reverseNum=0;
  let originalNum=num;

  while(num>0){
    let digit=num %10;
    reverseNum=reverseNum*10+digit;
    num=Math.floor(num/10);
  }
  if(originalNum===reverseNum){
    console.log('plaindrome');
  }
  else{
    console.log('not');
  }
}


