function assigngrade(score){
  if(score>=80){
    return dist;
  }
  else if(score>=60 &&score<=79){
    return first;
  }
  else if(score>=50 && score<=59){
    return second;
  }
  else if(score>=35 && score<=49){

    return pass;
  }
  else {
    return fail;
  }
}
let score=prompt('enter score');
const Grade=assigngrade(score);
console.log(Grade);