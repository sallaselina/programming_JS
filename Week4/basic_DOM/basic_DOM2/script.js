/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
let fruitName = document.getElementById("fruitInput").value;

function addFruit() {
  let node = document.createElement("li");
  let text = document.createTextNode(fruitName);
  node.appendChild(text);
  document.getElementById("fruitList").appendChild(node);
}

const button = document.querySelector("#addFruitBtn");
button.addEventListener("click", addFruit);
