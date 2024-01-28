/* Create a program that continuously prompts the user to input distance (in kilometers) 
and time (in hours) and then calculates the average speed. 
The program should terminate when the user enters 0 for the distance. 
Upon receiving a distance of 0, the program should not prompt for any further input.*/
let km;
let hrs;
let avgSpeed;

do {
  km = Number.parseInt(prompt("Enter distance in km "));
  hrs = Number.parseInt(prompt("Enter time in hrs "));
  avgSpeed = km / hrs;
  console.log(avgSpeed);
} while (km !== 0);
