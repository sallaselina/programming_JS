/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

let replaceText = document.getElementById("content");

function textFunction() {
  return (replaceText.textContent = "Hello World!");
}
const button = document.querySelector("#changeButton");
button.addEventListener("click", textFunction);
