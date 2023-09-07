// let N=prompt('enter n value');
// let sum=0
// let average=0;
// for(let i=0;i<N;i++){
//   let number=prompt('enter value');
//   let num=Number(number);
//   sum+=num;
//   average=sum/N;
// }
// console.log(sum);
// console.log(average);
// function displayMatrix(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//           console.log(matrix[i][j] + ' ');
//       }
//       console.log('\n');
//   }
// }

// function multipyMatrices(matrixA, matrixB) {
//   const resultMatrix = [];

//   for (let i = 0; i < matrixA.length; i++) {
//       const row = [];

//       for (let j = 0; j < matrixA[i].length; j++) {
//           row.push(matrixA[i][j] * matrixB[i][j]);
//       }

//       resultMatrix.push(row);
//   }

//   return resultMatrix;
// }

// const matrixA = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const matrixB = [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1]
// ];

// // Display Matrix A and Matrix B
// console.log("Matrix A:");
// displayMatrix(matrixA);

// console.log("Matrix B:");
// displayMatrix(matrixB);

// // Add Matrix A and Matrix B
// const resultMatrix = multipyMatrices(matrixA, matrixB);

// // Display the result matrix
// console.log("Matrix A + Matrix B:");
// displayMatrix(resultMatrix);
