let allPokemon = [];
const searchForm = document.querySelector("#searchForm");

const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
    .then((response) => response.json())
    .then((json) => {
      allPokemon = json.results;
      displayData(allPokemon);
    });
};

fetchData();

const displayData = (data) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  data.forEach((pokemon) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = ` 
      <h2>${pokemon.name}</h2>
      `;
    container.appendChild(postElement);
  });
};
const searchPokemon = (searchTerm) => {
  const filteredData = allPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  displayData(filteredData);
};
document
  .querySelector("#search")
  .addEventListener("input", (e) => searchPokemon(e.target.value));
