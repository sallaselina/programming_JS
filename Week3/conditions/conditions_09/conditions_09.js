/* Create a Magic 8-Ball program that emulates the classic fortune-telling toy.
The user will input a yes-or-no question, and the program will output a random response from the 8-Ball.
Implement the program using conditional statements to select and display one of several predefined responses. */
// prompt ask a question
let promptInput = prompt("Ask me anything! ");
//random function, run random number 1-8 then make a switch
let rand = Math.floor(Math.random() * 8) + 1;
switch (rand) {
  case 1:
    console.log("Signs point to yes");
    break;
  case 2:
    console.log("I am not sure, ask again");
    break;
  case 3:
    console.log("Consider all your options");
    break;
  case 4:
    console.log("Your days are numbered");
    break;
  case 5:
    console.log("Don't ask me that");
    break;
  case 6:
    console.log("To get the full answer, give your credit card number");
    break;
  case 7:
    console.log("I didn't understand. What do you mean?");
    break;
  case 8:
    console.log("I'm calling the police");
    break;
}
