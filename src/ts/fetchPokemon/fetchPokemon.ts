import type { Pokemon } from "../pokemonTypes.js";
import type { PokemonList } from "../pokemonTypes.js";

const urlApiPokemon = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemon = async (
  idPokemon: number | string
): Promise<Pokemon> => {
  try {
    const response = await fetch(`${urlApiPokemon}${idPokemon}`);

    const pokemon = (await response.json()) as Pokemon;
    return pokemon;
  } catch (error: unknown) {
    return null;
  }
};

export const fetchPokemonList = async (
  page: number,
  limit = 10
): Promise<PokemonList> => {
  const offset = page * limit;
  const limitParameters = `?limit=${limit}?offset=${offset}`;
  try {
    const response = await fetch(`${urlApiPokemon}${limitParameters}`);

    const pokemonList = (await response.json()) as PokemonList;

    return pokemonList;
  } catch (error: unknown) {
    return null;
  }
};
