import Header from "./components/Header/Header.js";
import "./components/PokeList/PokeStats.js";

const rootElement = document.querySelector(".root");

const header = new Header(rootElement as HTMLElement);
header.render();
