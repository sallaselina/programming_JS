const text = document.querySelector("h1"); //remember quotation marks when you are selecting the element
const text2 = document.querySelector("#first");
const text3 = document.querySelector(".second");

const longText = document.querySelectorAll("p");

console.log(text.textContent); // use textContent to print out the text you want
console.log(text2.textContent);
console.log(text3.textContent);
console.log(longText);

const myFunction1 = () => alert("onclick event, function mentioned in HTML");

const myFunction2 = () => alert("addeventlistener example");

// that is how I select a button
const button = document.querySelector("#myButton"); // make a variable for the element selection
button.addEventListener("click", myFunction2); // addeventlistener will trigger the function, from the event

/* myFunction1(); */
