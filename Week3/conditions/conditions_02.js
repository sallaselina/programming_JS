/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

getTemperature(Number(prompt("What is the current temperature in Celsius?")));
if (getTemperature >= 15) {
  console.log("You don't need a jacket.");
} else {
  console.log("You need to wear a jacket.");
}
