import Header from "./components/Header/Header.js";
import PokeList from "./components/PokeList/PokeList.js";
import { fetchPokemonList } from "./fetchPokemon/fetchPokemon.js";
import { fetchPokemon } from "./fetchPokemon/fetchPokemon.js";
import type { Pokemon } from "./pokemonTypes.js";

const rootElement: HTMLElement = document.querySelector(".root");

const header = new Header(rootElement);
header.render();

const { results } = await fetchPokemonList(0, 10);
const pokemons: Pokemon[] = [];
results.forEach(async ({ url }, index) => {
  const pokemonId = url.split("/").at(-2);

  const pokemon = await fetchPokemon(pokemonId);

  pokemons.push(pokemon);
  if (index >= results.length - 1) {
    const pokeList = new PokeList(rootElement, pokemons);

    pokeList.render();
  }
});
