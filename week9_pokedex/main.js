const allPokemon = [];
const searchForm = document.querySelector("#searchForm");

const fetchData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    if (!response.ok) {
      throw new Error("Something went wrong, cannot fetch data");
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector("#container");
  data.results.forEach((result) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = ` 
      <h2>${result.name}</h2>
      `;
    container.appendChild(postElement);
  });
};

/* const searchPokemon = (event) => {
  event.preventDefault();
  const query = document.querySelector("#search").value;
  const searchResult = document.querySelector("#searchResult");
  const findResult = allPokemon.find()
  searchResult.textContent = findResult;
};
 */
