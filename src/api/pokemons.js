/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */

import pokemons from 'json-pokemon';

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
