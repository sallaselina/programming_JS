/* Create a Magic 8-Ball program that emulates the classic fortune-telling toy.
The user will input a yes-or-no question, and the program will output a random response from the 8-Ball.
Implement the program using conditional statements to select and display one of several predefined responses. */
// prompt ask a question
const askButton = document.querySelector("#btn");
const answer = document.querySelector(".placeholder");
const userQuestion = document.querySelector("#userQuestion");
let showAnswer = document.querySelector(".answerHere");
let ball;
// let promptInput = prompt("Ask me anything! "); // commenting these out
// console.log(`You entered ${promptInput}`);
const askQuestion = () => {
  answer.textContent = userQuestion.value;
};
//random function, run random number 1-8 then make a switch

const askFunction = () => {
  let rand = Math.floor(Math.random() * 8) + 1;
  switch (rand) {
    case 1:
      ball = "Signs point to yes";
      break;
    case 2:
      ball = "I'm not sure, ask again";
      break;
    case 3:
      ball = "Consider all your options";
      break;
    case 4:
      ball = "Your days are numbered";
      break;
    case 5:
      ball = "Don't ask me that";
      break;
    case 6:
      ball = "To get the full answer, give your credit card number";
      break;
    case 7:
      ball = "I didn't understand. What do you mean?";
      break;
    case 8:
      ball = "I'm calling the police";
      break;
    default:
      ball = "Ask again.";
  }
  showAnswer.textContent = ball;
};

askButton.addEventListener("click", askQuestion);
askButton.addEventListener("click", askFunction);
