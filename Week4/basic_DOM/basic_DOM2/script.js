/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
/* this is my solution
 let fruitName = document.getElementById("fruitInput").value;

function addFruit() {
  let node = document.createElement("li");
  let text = document.createTextNode(fruitName);
  node.appendChild(text);
  document.getElementById("fruitList").appendChild(node);
}

const button = document.querySelector("#addFruitBtn");
button.addEventListener("click", addFruit); */
// this is Margit's, note! make local variables rather than global

const button = document.querySelector("#addFruitBtn");
const addDetails = () => {
  const input = document.querySelector("#fruitInput"); //always value!!
  const fruitList = document.querySelector("#fruitList"); // creating a variable for the ul html element and connect it
  if (input) {
    // making an if statement for empty inputs
    const li = document.createElement("li"); //creating a new list item
    li.textContent = input.value.trim(); //list item content will be the same as input, trim it
    fruitList.appendChild(li); // adding the new list item to the ul
    input.value = ""; // emptying the value, this works
  } else {
    alert("Please write a fruit name");
  }
};

button.addEventListener("click", addDetails);
