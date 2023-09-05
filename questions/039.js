// for(let i=1;i<=5;i++){
//   let str="";
//   for(let j=1;j<=i;j++){
//     str +="*";
//   }
//   console.log(str);
// }
// let num = 1;
// for (let i = 1; i <= 4; i++) {
//   let str = '';

//   for (let j = 1; j <= i; j++) {
//     str+=num;
//     num++;
//     if(j<i){
//       str+=',';
//     }
//   }
//   console.log(str);
// }

for(let i=1;i<=5;i++){
  let str="";
  for(let j=1;j<=i;j++){
    if((i+j)%2===0){
      str+='1';
    }
    else{
      str+='0';
    }
  }
  console.log(str);
}
