import Component from "../Component/Component.js";
import type { Pokemon } from "../../pokemonTypes.js";
import PokeCard from "../PokeCard/PokeCard.js";

export class PokeList extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemons: Pokemon[]
  ) {
    super(parentElement, "poke-list", "div");
    // Estará en un div con class= poke-list
  }

  render() {
    super.render();
    this.newPokemons(this.pokemons);
  }

  newPokemons(pokemons: Pokemon[]): void {
    // Creamos método, y le pasamos el array de pokemons
    pokemons.forEach((pokemon) => {
      const pokeCard = new PokeCard(this.domElement, "", "#", pokemon);
      pokeCard.render();
    });
  }
}
export default PokeList;
