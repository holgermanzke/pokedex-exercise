import 'babel-polyfill';

import {
  createNoPokemons,
  setChild,
  resetInput,
  createPokemonElements
} from './api/elements';
import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);

function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');

  // Get All Pokemons
  const allPokemons = getAllPokemons();
  const allSortedPokemons = sortPokemonsByName(allPokemons);

  // Reset input and results
  resetInput(searchInput);
  setChild(resultsElement, createPokemonElements(allSortedPokemons));

  // Add event listeners

  /**
   * Find the correct event to listen for input changes.
   */
  searchInput.addEventListener('input', event => {
    // removeChilds(resultsElement);
    const searchValue = event.target.value;
    let pokemons = getPokemonsByName(searchValue);
    pokemons = sortPokemonsByName(pokemons, 'ASC');
    if (pokemons.length > 0) {
      const filterResults = createPokemonElements(pokemons);
      setChild(resultsElement, filterResults);
    } else {
      const filterResults = createNoPokemons();
      setChild(resultsElement, filterResults);
    }
    /**
     * Search for your pokemons now, create elements and add them to your results.
     */
  });
}
/**
 * Later, you can add sort functionality.
 */
