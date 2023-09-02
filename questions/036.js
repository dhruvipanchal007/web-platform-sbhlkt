let basis=10000;
let Dapercentage=10;
let Hrapercentage=7.50;
let Ma=300;
let Pfpercentage=12.50;

let Da=(Dapercentage/100)*basis;
let Hra=(Hrapercentage/100)*basis;
let Pf=(Pfpercentage/100)*basis;

let gross=basis+Da+Hra+Ma;
let net=gross-Pf;
console.log(net);

