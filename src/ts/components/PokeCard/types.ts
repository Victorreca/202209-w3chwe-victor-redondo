interface PokemonCard {
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

export default PokemonCard;
