// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.
let num = parseInt(prompt("Give a number "));
let num2;
let askAgain = prompt("Do you want to continue giving numbers? y/n ");
let count = 0;
let sum = 0;
let average;
while (askAgain == "y") {
  num2 = prompt("Give another number");
  askAgain = prompt("Do you want to continue giving numbers? y/n ");
  count++;
  sum += num + num2;
}
if (askAgain == "n") {
  average = sum / count;
}
console.log(`Average number is ${average}.`);
