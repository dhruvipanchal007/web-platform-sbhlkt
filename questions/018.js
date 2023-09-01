// Prompt the user to enter a number
let inputNumber = prompt("Enter a number:");

// Convert the input string to a number
let num = Number(inputNumber);

// Initialize a variable to store the sum of digits
let sum = 0;

// Loop through each digit of the number
while (num > 0) {
    // Get the last digit using the remainder (%) operator
    let digit = num % 10;

    // Add the digit to the sum
    sum += digit;

    // Remove the last digit by integer division
    num = Math.floor(num / 10);
}

// Display the sum of digits
alert("The sum of the digits is: " + sum);
