// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

// Sample usage - do not modify
function fahrenheitToCelsius(fahrenheit) {
  let answer = ((fahrenheit - 32) * 5) / 9;
  return answer.toFixed(1);
}

console.log(fahrenheitToCelsius(21)); // "-6,1"
