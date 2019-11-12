/**
 * <div class="results__empty">
 *    No Pokemons found
 * </div>
 */
export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}

export function createPokemonElements(pokemons) {
  /**
   * This function could receive an array of pokemons and creates elements for each of them.
   * You can use createPokemon to create a single element.
   */
  const listElement = document.createElement('ul');
  pokemons.forEach(pokemon => {
    const pokemonElement = createPokemonElement(pokemon);
    listElement.appendChild(pokemonElement);
  });
  return listElement;
}

export function createPokemonElement(pokemon) {
  const itemElement = document.createElement('li');
  itemElement.innerHTML = pokemon.name;
  // const itemElement2 = document.createElement('li');
  // itemElement2.innerHTML = pokemon.id;
  return itemElement;
  /**
   * This function could create a new element and displays the properties of a pokemon.
   */
}

export function removeChilds(parent) {
  parent.innerHTML = '';
}

export function appendChild(parent, child) {
  parent.appendChild(child);
}

export function setChild(parent, child) {
  removeChilds(parent);
  appendChild(parent, child);
}

export function resetInput(input) {
  input.value = '';
}
