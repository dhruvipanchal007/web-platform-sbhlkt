function decimaltohexadecimal(decimalnumber){
  let hexadecimal='';
  let hexacharacter='123456789ABCDEF';
  while(decimalnumber>0){
    let reminder=decimalnumber % 16;
    hexadecimal=hexacharacter[reminder]+hexadecimal;
    decimalnumber=Math.floor(decimalnumber/16);
  }
  return hexadecimal;
}
let decimalnumber=40;
let hexadecimal=decimaltohexadecimal(decimalnumber);
console.log(hexadecimal);