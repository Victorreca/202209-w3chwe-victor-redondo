import type { Pokemon } from "../../pokemonTypes.js";
import Component from "../Component/Component.js";

class PokeCard extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    private readonly href: string,
    private readonly pokemon: Pokemon
  ) {
    super(parentElement, "poke-list__pokemon", "a");
  }

  render(): void {
    super.render();
    const {
      name,
      sprites: {
        other: { "official-artwork": picture },
      },
    } = this.pokemon;

    this.domElement.innerHTML = `
    <article class="poke-card">
      <div class="poke-card__info">
        <a href="#">
          <h2 class="poke-card__name">${name}</h2>
        </a>   
      </div>
      <div class="pokemon-card__container">
        <img src=${picture.front_default} 
          alt="Pokémon ${name}" class="pokemon-card__picture">
      </div>
    </article>`;
  }
}
export default PokeCard;
