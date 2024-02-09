/* Create a program that continuously prompts the user to input distance (in kilometers) 
and time (in hours) and then calculates the average speed. 
The program should terminate when the user enters 0 for the distance. 
Upon receiving a distance of 0, the program should not prompt for any further input.*/

//declare empty global variables
let km;
let hrs;
//use while if structure for the loop

while (km != 0) {
  km = Number(prompt("Enter distance in km "));
  if (distance === 0) {
    console.log("Cannot count average speed");
    break;
  }
  hrs = Number(prompt("Enter time in hrs "));
  let avgSpeed = km / hrs;
  console.log(`Average speed is ${avgSpeed} kilometers per hour`);
}
