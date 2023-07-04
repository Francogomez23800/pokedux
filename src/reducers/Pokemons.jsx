import { SET_POKEMONS, SET_LOADING, SET_FAVOURITE } from '../actions/types';

const initialState = {
  pokemons: [],
  loading:false
}

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
      case SET_FAVOURITE:
        const newPokemonList = state.pokemons.map((pokemon) => {
          if (pokemon.id === action.payload.pokemonId) {
            return { ...pokemon, favourite: !pokemon.favourite };
          }
          return pokemon;
        });
        return { ...state, pokemons: newPokemonList };
    case SET_LOADING:
      return {...state, loading: action.payload}
  default:
      return state;
  }
};