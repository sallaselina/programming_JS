const form = document.querySelector(".form-container"); // using the form-container class to select the element

const priceCalc = () => {
  const typeSelect = document.querySelector("#type"); //pancake type
  let total = parseInt(typeSelect.value);
  const checkboxes = document.querySelectorAll("input[type='checkbox']"); // this is how to choose all elements of a certain type
  const priceBanner = document.querySelector("#totalPrice");

  for (const checkbox of checkboxes) {
    // for each loop used for collections, i.e. arrays and nodelists! this is a nodelist
    if (checkbox.checked) {
      total += parseInt(checkbox.value);
    }
  }
  priceBanner.textContent = `${total} €`;
};
form.addEventListener("change", priceCalc);

/* let pancakeType = document.getElementById("type");
let total = document.getElementById("totalPrice");
function typePrice() {
  total.textContent = pancakeType.value + "€";
  total2.textContent = pancakeType.value + "€";
}
pancakeType.addEventListener("change", typePrice); */
