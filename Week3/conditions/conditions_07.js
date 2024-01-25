/**
Develop a function named assignGrade that:

Accepts a single argument, a numerical score.
Returns a letter grade for the score based on these criteria:
- 'A' for scores 90 and above.
- 'B' for scores 80 to 89.
- 'C' for scores 70 to 79.
- 'D' for scores 60 to 69.
- 'F' for scores below 60.

*/

// Sample usage - do not modify
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score < 60:
      console.log("F");
      break;
    default:
      console.log("Score not applicable");
  }
}
console.log("You got a " + assignGrade(95)); // You got a A
console.log("You got a " + assignGrade(81)); // You got a B
console.log("You got a " + assignGrade(72)); // You got a C
console.log("You got a " + assignGrade(64)); // You got a D
console.log("You got a " + assignGrade(42)); // You got a F
