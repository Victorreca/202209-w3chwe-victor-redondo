import Header from "./components/Header/Header.js";
import "./components/PokeList/PokeStats.js";
// Import PokeCard from "./components/PokeCard/PokeCard.js";
// import { PokeList } from "./components/PokeList/PokeList.js";

const rootElement = document.querySelector(".root");

const header = new Header(rootElement as HTMLElement);
header.render();
