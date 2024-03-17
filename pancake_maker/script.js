const form = document.querySelector(".form-container");
const orderButton = document.querySelector("#orderBtn");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");

let total;
let toppings = []; // arrays for the toppings and extras
let extras = [];

const pancakePriceCalc = () => {
  // calculating the total
  const totalPriceElement = document.querySelector("#totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value); // first, total includes the type selected! make it a number
  totalPriceElement.textContent = `$${total}`;
  checkToppings();

  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};
const addItem = (itemName, category) => {
  // function to add item to array
  if (category === "toppings") {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};

const removeItem = (itemName, category) => {
  if (category === "toppings") {
    toppings.pop(itemName);
  } else {
    extras.pop(itemName);
  }
};

const checkToppings = () => {
  toppings = [];
  extras = [];
  for (const item of checkboxes) {
    // for of loop to check the checkboxes by their name and category
    const itemName = item.dataset.name;
    const category = item.dataset.category;

    if (item.checked) {
      // if checkbox is checked, it is added to the total and added into the array or removed from it
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  }
};

const displayOrder = () => {
  // more advanced, how to display the order, make new variables in the function scope
  const customerName = document.getElementById("name").value;
  const orderType = document.querySelector("#orderType");
  const orderToppings = document.querySelector("#orderToppings");
  const orderExtras = document.querySelector("#orderExtras");
  const orderName = document.querySelector("#orderName");
  const orderPrice = document.querySelector("#orderPrice");
  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings.join(", ");
  orderExtras.textContent = extras.join(", ");
  orderName.textContent = customerName;
  orderPrice.textContent = total;
};

form.addEventListener("change", pancakePriceCalc);
orderButton.addEventListener("click", displayOrder);
