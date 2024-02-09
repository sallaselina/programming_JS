// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.
let sum = 0;
let count = 0;
while (inputNum != 0) {
  let inputNum = Number(prompt("Give me a number "));
  sum += inputNum;
  count++;
  if (inputNum == 0);
  break;
}

console.log(`Average of all entered numbers : ${sum / count}`);
