import PokemonCard from './PokemonCard';
import '../index.css'

const PokemonList = ({ pokemons }) => {
  function renderAbilities(abilities) {
    return abilities.map((each) => {
      return each.ability.name;
    });
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <div className='grid grid-cols-4 gap-4 '>
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={renderAbilities(pokemon.abilities)}
            id={pokemon.id}
            favourite={pokemon.favourite}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;