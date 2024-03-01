"use strict";

const addCarForm = document.querySelector("#addCar");
const searchCarForm = document.querySelector("#searchForm");

const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (event) => {
  event.preventDefault(); // prevents the page from reloading, console.log is visible
  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;

  const newCar = new Car(license, maker, model, owner, price, color);
  cars.push(newCar);

  displayTable();

  addCarForm.reset();
};

const displayTable = () => {
  const table = document.querySelector("#carsTable");
  table.innerHTML = table.rows[0].innerHTML;
  cars.forEach((car) => {
    const row = table.insertRow(-1);
    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

const searchCar = (event) => {
  event.preventDefault();
  const licenseQuery = document
    .querySelector("#search")
    .value.trim()
    .toLowerCase(); // converting all inputs to lowercase because of case sensitivity, makes searching more accurate when all info is in one format
  const display = document.querySelector("#searchResult");

  if (licenseQuery === "") {
    // !licenseQuery is valid as well
    display.textContent = "Please enter license number";
  }
  try {
    const result = cars.find(({ license }) =>
      license.toLowerCase().includes(licenseQuery)
    );
    display.textContent = result
      ? `Found ${result.maker}, ${result.model}, ${result.owner} ` // if statement
      : "No car with that license plate"; // else
  } catch (error) {
    console.error("Error found:", error);
    display.textContent = "there was an error, please try again later";
  }

  searchCarForm.reset();
};

addCarForm.addEventListener("submit", addCar);
searchCarForm.addEventListener("submit", searchCar);
