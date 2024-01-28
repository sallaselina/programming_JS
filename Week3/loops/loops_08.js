// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.
function minArray(array) {
  return Math.min(...array);
}
function maxArray(array) {
  return Math.max(...array);
}

let howMany = Number.parseInt(
  prompt("How many numbers would you like to input?")
);
let collectData = [];
let x = Number.parseInt(prompt("Enter a number"));
collectData.push(x);

while (collectData.length < howMany) {
  x = Number.parseInt(prompt("Enter a number"));
  collectData.push(x);
}

let min = minArray(collectData);
let max = maxArray(collectData);

console.log(`Biggest number is ${max} and smallest number is ${min}`);
