let a = 10;
let b = 20; 
function swap(x,y){
  let temp = x; // 10 
  x = y; 
  y = temp; 
  console.log(x,y) // 20, 10
}
swap(a,b)