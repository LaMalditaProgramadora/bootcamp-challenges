const API = "https://pokeapi.co/api/v2/pokemon/";
const pokemons = document.getElementById("pokemons");

class Pokedex {
  constructor() {
    fetch(API)
      .then((response) => response.json())
      .then((pokemonJson) => this.createPokeContainer(pokemonJson));
  }

  createPokeContainer(pokemonJson) {
    const pokeList = pokemonJson.results;
    pokeList.forEach((element, i) => {
      fetch(element.url)
        .then((response) => response.json())
        .then((pokemon) => this.pokemonHTML(pokemon));

      const pokeDiv = document.createElement("div");
      pokeDiv.classList.add("pokemon", `pokemon${i + 1}`);

      const pokeName = document.createElement("p");
      pokeName.innerText = element.name;

      pokeDiv.append(pokeName);
      pokemons.append(pokeDiv);
    });
  }

  pokemonHTML(pokemon) {
    const pokeDiv = document.querySelector(`.pokemon${pokemon.id}`);
    const pokeimg = document.createElement("img");
    pokeimg.setAttribute("src", pokemon.sprites.front_default);

    pokeDiv.addEventListener("click", () => {
      this.pokemonAlert(pokemon.id);
    });

    pokeDiv.prepend(pokeimg);
  }

  pokemonAlert(id) {
    fetch(API + id)
      .then((response) => response.json())
      .then((details) => {
        const responseDetails = `Name: ${details.name}\nHeight: ${details.height}\nWeight: ${details.weight}\nBase Experience: ${details.base_experience}\n`;
        alert(responseDetails);
      });
  }
}

let pokedex = new Pokedex();
