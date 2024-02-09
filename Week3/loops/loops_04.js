// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.
//test program with fewer numbers than in the assigment, will make testing easier
let input = Number.parseInt(prompt("Enter a number "));
let sum = 0;
let counter = 0;
let evenCount = 0;

while (counter < 20) {
  input = Number.parseInt(prompt("Enter a number "));
  sum += input;
  counter += 1;
  if (input % 2 == 0) {
    evenCount++;
  }
}

console.log(`You entered ${evenCount} even numbers.`);
