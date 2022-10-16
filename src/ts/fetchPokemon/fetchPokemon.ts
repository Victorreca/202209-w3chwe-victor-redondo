import type { Pokemon } from "../pokemonTypes.js";
import type { PokemonList } from "../pokemonTypes.js";

const urlApiPokemon = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemon = async (idPokemon: number | string) => {
  try {
    const response = await fetch(`${urlApiPokemon}${idPokemon}`);

    if (!response.ok) return response.statusText;

    const pokemon = (await response.json()) as Pokemon;
    return pokemon;
  } catch (error: unknown) {
    throw new Error(`Error${(error as Error).message}`);
  }
};

export const fetchPokemonList = async (page: number, limit = 10) => {
  const offset = page * limit;
  const limitParameters = `?limit=${limit}?offset=${offset}`;
  try {
    const response = await fetch(`${urlApiPokemon}${limitParameters}`);
    if (!response.ok) return response;

    const pokemonList = (await response.json()) as PokemonList;

    return pokemonList;
  } catch (error: unknown) {
    throw new Error(`Error${(error as Error).message}`);
  }
};
