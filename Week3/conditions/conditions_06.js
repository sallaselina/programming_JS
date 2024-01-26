/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */

// Sample usage - do not modify
function greaterNum(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
//return x > y ? x : y;

console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
