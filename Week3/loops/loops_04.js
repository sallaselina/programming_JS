// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.
let input = Number.parseInt(prompt("Enter a number "));
let evenNumbers = [];
let enteredNumbers = 0;

while (enteredNumbers < 20) {
  input = Number.parseInt(prompt("Enter a number "));
  enteredNumbers += 1;
  if (input % 2 == 0) {
    evenNumbers.push(input);
  }
}

console.log(`You entered ${evenNumbers.length} even numbers.`);
