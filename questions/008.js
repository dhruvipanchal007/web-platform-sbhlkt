function convertfahernhittocelsius(f) {
  let i = f - 32 / 1.8;
  return i;
}
let f = prompt('enter fahernhit');
let celsius = convertfahernhittocelsius(f);
console.log(celsius);
