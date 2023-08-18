import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import ScrollRevealFade from './ScrollRevealFade';
import '../index.css';

const PokemonList = ({ pokemons }) => {
  const loading = useSelector(state => state.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 20;
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  function renderAbilities(abilities) {
    return abilities.map((each) => {
      return each.ability.name;
    });
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="grid sm:grid-cols-1 2sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {currentPokemons.map((pokemon, index) => (
          <ScrollRevealFade key={index}>
            <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              abilities={renderAbilities(pokemon.abilities)}
              id={pokemon.id}
              favourite={pokemon.favourite}
            />
          </ScrollRevealFade>
        ))}
      </div>
      {!loading ? (
        <div className="flex justify-center m-10">
          <button
            className="mr-2 px-4 py-2 bg-purple-700 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Página anterior
          </button>
          <button
            className="ml-2 px-4 py-2 bg-purple-700 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={indexOfLastPokemon >= pokemons.length}
            onClick={handleNextPage}
          >
            Página siguiente
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PokemonList;
