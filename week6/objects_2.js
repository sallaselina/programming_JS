/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
const library = [
  {
    title: "Dracula",
    author: "Bram Stoker",
    yearPublished: 1897,
  },
  {
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    yearPublished: 2000,
  },
];
/* function Library(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

const Dracula = new Library("Dracula", "Bram Stoker", 1897);
const houseOfLeaves = new Library(
  "House of Leaves",
  "Mark Z. Danielewski",
  2000
); */

/*  Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console. */

// Your code here

/* console.log(library[0].title);
library[1].yearPublished = 2004;
console.log(library[1]); */

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
/* library[0].genres = ["Horror", "Gothic novel"];
library[0]["isAvailable"] = true;
console.log(library[0]); */

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
const book3 = new Book("Northern Lights", "Philip Pullman", 1995, "fantasy");
library.push(book3);
//console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

createBook = function (title, author, yearPublished, genres) {
  console.log(new Book(title, author, yearPublished, genres));
};
createBook("Frankenstein", "Mary Shelley", 1818, "horror");

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

/* const libraryToJSON = JSON.stringify(library);
const JSONObject = JSON.parse(libraryToJSON);
console.log(library.book1.title) */
