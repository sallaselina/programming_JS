/* Create a Magic 8-Ball program that emulates the classic fortune-telling toy.
The user will input a yes-or-no question, and the program will output a random response from the 8-Ball.
Implement the program using conditional statements to select and display one of several predefined responses. */
// prompt ask a question
const askButton = document.querySelector("button");
const answer = document.querySelector(".placeholder");
const userQuestion = document.querySelector("#userQuestion").value;
// let promptInput = prompt("Ask me anything! "); // commenting these out
// console.log(`You entered ${promptInput}`);

//random function, run random number 1-8 then make a switch
userQuestion.textContent;
const askFunction = () => {
  let rand = Math.floor(Math.random() * 8) + 1;
  switch (rand) {
    case 1:
      answer.textContent = "Signs point to yes";
      break;
    case 2:
      answer.textContent = "I'm not sure, ask again";
      break;
    case 3:
      answer.textContent = "Consider all your options";
      break;
    case 4:
      answer.textContent = "Your days are numbered";
      break;
    case 5:
      answer.textContent = "Don't ask me that";
      break;
    case 6:
      answer.textContent =
        "To get the full answer, give your credit card number";
      break;
    case 7:
      answer.textContent = "I didn't understand. What do you mean?";
      break;
    case 8:
      answer.textContent = "I'm calling the police";
      break;
    default:
      answer.textContent = "Ask again.";
  }
};

askButton.addEventListener("click", askFunction);
