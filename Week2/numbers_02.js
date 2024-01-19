// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

// Sample usage - do not modify
function fahrenheitToCelsius(x) {
  return (((x - 32) * 5) / 9).toFixed(1);
}
/* fahrenheitToCelsius(x) = (x-32)*5/9;
 => fahrenheitToCelsius.toFixed(1); */

console.log(fahrenheitToCelsius(21)); // "-6,1"
