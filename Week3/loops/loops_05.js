// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.
let inputNum = parseInt(prompt("Give me a number "));
let sum = 0;
let count = 0;
let avg;
while (inputNum != "0") {
  inputNum = parseInt(prompt("Give me a number "));
  count++;
  sum += inputNum;
}
if (inputNum == "0");
{
  avg = sum / count;
}
console.log(`Average of all entered numbers : ${avg}`);
