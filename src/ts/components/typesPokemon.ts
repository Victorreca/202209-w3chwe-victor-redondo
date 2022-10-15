export interface PokeList {
  count: number;
  next: string | undefined;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokeApiPokemon {
  abilities: Ability[];
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  species: {
    name: string;
    url: string;
  };
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
