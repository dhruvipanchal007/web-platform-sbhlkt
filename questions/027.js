function decimaltooctal(decimalnumber){
let octalnumber='';
while(decimalnumber>0){
  let reminder=decimalnumber % 8;
  octalnumber=reminder+octalnumber;
  decimalnumber=Math.floor(decimalnumber/8);
}
return octalnumber;
}
const decimalinput=40;
const octalinput=decimaltooctal(decimalinput);
console.log(octalinput);