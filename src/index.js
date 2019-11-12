import {
  createNoPokemons,
  setChild,
  removeChilds,
  resetInput,
  createPokemonElements
} from './api/elements';
import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get All Pokemons
const pokemons = getAllPokemons();

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
  const pokemons = getPokemonsByName(searchValue);
  if (pokemons.length > 0) {
    const filterResults = createPokemonElements(pokemons);
    setChild(resultsElement, filterResults);
  } else {
    const filterResults = createNoPokemons();
    setChild(resultsElement, filterResults);
  }
  console.log(pokemons.length);
  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
