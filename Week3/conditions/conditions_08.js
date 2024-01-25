/*
Compose a function called pluralize that:

Accepts two arguments: a noun and a number.
Returns a string combining the number and the appropriately pluralized form of the noun, such as '5 cats' or '1 dog'.

 */

// Sample usage - do not modify
function pluralize(pet, number) {
  if (number === 1) {
    return number + " " + pet;
  } else {
    return number + " " + pet + "s";
  }
}

console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("dog", 1));
console.log("I have " + pluralize("parrot", 7));
