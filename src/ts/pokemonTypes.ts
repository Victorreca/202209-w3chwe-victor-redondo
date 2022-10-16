export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonList {
  count: number;
  results: [{ name: string; url: string }];
}
