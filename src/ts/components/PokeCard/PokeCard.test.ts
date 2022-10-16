/* eslint-disable @typescript-eslint/naming-convention */

import type { Pokemon } from "../../pokemonTypes.js";
import PokeCard from "./PokeCard";

let screen: HTMLElement;

beforeEach(() => {
  screen = document.createElement("div");
});

describe("Given a PokemonCard component", () => {
  describe("When it's rendered with Charmander", () => {
    test("Then it should show 'Charmander' inside heading level 2", () => {
      const charmander: Pokemon = {
        id: 4,
        name: "charmander",
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
          },
        },
      };

      const pokeCard = new PokeCard(screen, "", "#", charmander);
      pokeCard.render();
      const nameTitle = screen.querySelector("h2");

      expect(nameTitle).not.toBeNull();
      expect(nameTitle.textContent).toBe(charmander.name);
    });
  });
});
