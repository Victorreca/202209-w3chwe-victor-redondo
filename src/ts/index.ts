import apiUrl from "./PokeCard/PokeCard";

const response = await fetch(`${apiUrl}`);

console.log(response);
