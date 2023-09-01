function capital(text) {
  let code = text.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    return "capital";
  }
  else if(code>=97 && code<=122) {
    return "small";
  }
  else {
    return "special"
  }
}
let text=prompt('enter alphabate');
const character=capital(text);
console.log(character);

