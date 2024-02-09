/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

/* this is my own solution

let replaceText = document.getElementById("content");

function textFunction() {
  replaceText.textContent = "Hello World!";
}
const button = document.querySelector("#changeButton");
button.addEventListener("click", textFunction); */

//test your code first and that the files are connected, f.ex. alert("HELLO");
// this is Margit's example
const textChanger = () => {
  document.getElementById("content").textContent = "Hello World!";
};
