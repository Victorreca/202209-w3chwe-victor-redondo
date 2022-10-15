import type PokemonList from "./types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemon = async (offset: number) => {
  const response = await fetch(`${apiUrl}?offset=${offset}&limit=10`);

  const json = (await response.json()) as PokemonList;
  return json;
};

export default fetchPokemon;
