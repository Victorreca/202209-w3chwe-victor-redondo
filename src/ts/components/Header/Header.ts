import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h1 class='main-title'>Pokémon</h1>
    <img src="images/pokemon-logo.svg" alt="logo pokémon" >
    <nav class="menu">
      <ul>
        <li><a href="#">View Pokémons</a></li>
        <li><a href="#">My Pokémons</a></li>
    </ul>
</nav>`;
  }
}
export default Header;
