function decimaltohexadecimal(decimalnumber){
  let hexadecimal='';
  while(decimalnumber>0){
    let reminder=decimalnumber % 16;
    hexadecimal=reminder+hexadecimal;
    decimalnumber=decimalnumber/16;
  }
  return hexadecimal;
}
let decimalnumber=40;
let hexadecimal=decimaltohexadecimal(decimalnumber);
console.log(hexadecimal);