const form = document.querySelector(".form-container");
const orderButton = document.querySelector("#orderBtn");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");

let total;
let toppings = [];
let extras = [];

const pancakePriceCalc = () => {
  const totalPriceElement = document.querySelector("#totalPrice");
  const priceBanner = document.querySelector(".price-banner");

  total = parseInt(typeSelect.value);
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
    const itemName = item.dataset.name;
    const category = item.dataset.category;

    if (item.checked) {
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      removeItem(itemName, category);
    }
  }
};

const displayOrder = () => {
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
