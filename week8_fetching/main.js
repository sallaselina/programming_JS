/* const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayData(json));
};

fetchData();
 */

const fetchData = async () => {
  try {
    const response = await fetch("https://mhw-db.com/monsters");
    if (!response.ok) {
      // if response is not okay, make a new error
      throw new Error(`Error status ${response.status}`);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector("#post-container");
  data.forEach((user) => {
    const postElement = document.createElement("div"); // loop creates a new element, the div
    postElement.innerHTML = ` 
    <h2>${user.name}</h2>
    <h3>${user.type}</h3>
    <p>${user.species}</p>
    <p>${user.description}</p>
    `;
    container.appendChild(postElement); // add the new element (postelement) to the container
  });
};
