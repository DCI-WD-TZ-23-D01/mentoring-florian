// Beispiel vom Aufruf eines Promises anhand von FETCH mit den beiden Variaten:
// 1. .then().catch()
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Ein Fehler ist aufgetreten"));

// 2. async/await
const getPokemonData = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await res.json();
    console.log(data);
} catch (error) {
    console.log("Ein Fehler ist aufgetreten");
  }
};
getPokemonData();
