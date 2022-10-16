import type { PokeApiPokemon } from "../typesPokemon.js";
import fetchPokemon from "./PokeList.js";

export const pokemonUnity = async (url: string) => {
  const result = await fetch(url);
  const resultJason = (await result.json()) as PokeApiPokemon;
  return resultJason;
};

const {
  name,
  sprites: {
    other: {
      "official-artwork": { front_default: defaultImage },
    },
  },
} = await pokemonUnity("https://pokeapi.co/api/v2/pokemon/2/");

const pokeTest = await fetchPokemon(0);
