import Component from "../Component/Component.js";
import type { Pokemon } from "../../pokemonTypes.js";

export class PokeList extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemons: Pokemon[]
  ) {
    super(parentElement, "poke-list", "div");
  }
}
export default PokeList;
