// import pokemons from './pokemons.json';

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

let pokemons = [];
export async function initPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const data = await response.json();
  pokemons = data.results;
}

export async function getPokemonDetails(pokemonURL) {
  const response = await fetch(pokemonURL);
  const data = await response.json();
  return data;
}

export function getAllPokemons() {
  return pokemons;
}

/**
 * pokemonName is unused.
 * You could use this property to filter the pokemons by name.
 * Take a look: Array.prototype.filter()
 *
 * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
 * It should be case independend.
 */
export function getPokemonsByName(pokemonName) {
  const filterPokemons = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemonName.toLowerCase();
    const normalizedCurrentPokemonName = pokemon.name.toLowerCase();
    return normalizedCurrentPokemonName.match(normalizedPokemonName);
  });

  return filterPokemons;
}

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  const sortedPokemons = pokemons.sort((pokemonNameA, pokemonNameB) => {
    const nameA = pokemonNameA.name.toLowerCase();
    const nameB = pokemonNameB.name.toLowerCase();
    if (nameA > nameB) {
      return 1;
    }

    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });

  /**
   * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
   *
   * See Array.prototype.sort()
   */
  // return pokemons

  if (sortDirection === 'DESC') {
    sortedPokemons.reverse();
  }

  return sortedPokemons;
}
