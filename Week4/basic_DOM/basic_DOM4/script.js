const form = document.querySelector(".form-container"); // using the form-container class to select the element

const priceCalc = () => {
  const typeSelect = document.querySelector("#type"); //pancake type
  let total = parseInt(typeSelect.value);
  const checkboxes = document.querySelectorAll("input[type='checkbox']"); // this is how to choose all elements of a certain type
  const priceBanner = document.querySelector("#totalPrice");

  for (const checkbox of checkboxes) {
    // for each loop used for collections, i.e. arrays and nodelists! this is a nodelist
    if (checkbox.checked) {
      //checking if checkbox is checked
      total += parseInt(checkbox.value); // adding to the total the value of the checkbox
    }
  }
  priceBanner.textContent = `${total} €`;
};
form.addEventListener("change", priceCalc);
