import {
  createNoPokemons,
  setChild,
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
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */
  console.log(getPokemonsByName('pika'));
  console.log('Great! This event is fired:', event, searchInput.value);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
