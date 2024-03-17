"use strict";
class Car {
  constructor(licensePlate, maker, model, currentOwner, price, color) {
    this.licensePlate = licensePlate;
    this.maker = maker;
    this.model = model;
    this.currentOwner = currentOwner;
    this.price = price;
    this.color = color;
  }
}
const licensePlate = document.getElementById("license").value;
const maker = document.getElementById("maker").value;
const model = document.getElementById("model").value;
const currentOwner = document.getElementById("owner").value;
const price = document.getElementById("price").value;
const color = document.getElementById("color").value;
const table = document.querySelector("table");
const submitButton = document.querySelector("button");
const allCars = [];

const addCar = () => {
  const newCar = new Car(
    licensePlate,
    maker,
    model,
    currentOwner,
    price,
    color
  );
  allCars.push(newCar);
};

/* const displayTable = () => {
  const displayPlate = document.querySelector("#displayPlate");
  const displayMaker = document.querySelector("#displayMaker");
  const displayModel = document.querySelector("#displayModel");
  const displayOwner = document.querySelector("#displayOwner");
  const displayPrice = document.querySelector("#displayPrice");
  const displayColor = document.querySelector("#displayColor");
  displayPlate.textContent = licensePlate;
  displayMaker.textContent = maker;
  displayModel.textContent = model;
  displayOwner.textContent = currentOwner;
  displayPrice.textContent = price;
  displayColor.textContent = color;
}; */
const addRow = () => {
  const row = document.querySelector("table").insertRow(1);
  const plateCell = row.insertCell(0);
  const makerCell = row.insertCell(1);
  const modelCell = row.insertCell(2);
  const ownerCell = row.insertCell(3);
  const priceCell = row.insertCell(4);
  const colorCell = row.insertCell(5);
  plateCell.textContent = licensePlate;
  makerCell.textContent = maker;
  modelCell.textContent = model;
  ownerCell.textContent = currentOwner;
  priceCell.textContent = price;
  colorCell.textContent = color;
};

submitButton.addEventListener("click", addCar);
submitButton.addEventListener("click", addRow);
