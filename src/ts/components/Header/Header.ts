import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "header", "main-header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = "<h1 class='main-title'>Pokémon</h1>";
  }
}
export default Header;
