import { SET_POKEMONS, SET_LOADING, SET_FAVOURITE } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload: payload
  });

  export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload: payload
  });

export const setFavourite = (payload) =>({
  type:SET_FAVOURITE,
  payload: payload
})