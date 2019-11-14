import {
  createNoPokemons,
  setChild,
  removeChilds,
  resetInput,
  createPokemonElements
} from './api/elements';
import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName
} from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get All Pokemons
let pokemons = getAllPokemons();
pokemons = sortPokemonsByName(pokemons);

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createPokemonElements(pokemons));

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

/**
 * Later, you can add sort functionality.
 */
