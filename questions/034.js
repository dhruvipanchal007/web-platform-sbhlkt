function sortString(str) {
  return str.split('').sort().join('');
}

const inputString = "programming"; // Replace with your string
const sortedString = sortString(inputString);

console.log(`Sorted string in ascending order: ${sortedString}`);

