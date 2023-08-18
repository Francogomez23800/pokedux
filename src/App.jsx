import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getPokemonDetails } from "./api";
import Searcher from "./Components/Searcher";
import PokemonList from "./Components/PokemonList";
import Nav from "./Components/Nav";
import { setLoading, setPokemons } from "./actions";

const App = () => {
  const allPokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      const pokemonDetails = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonDetails));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, [dispatch]);

  useEffect(() => {
    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [allPokemons, searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Nav />
      <Searcher onSearch={handleSearch} />
      {loading ? (
        <div className="h-[50vh] flex items-center justify-center">
          <div
            className="inline-block h-[100px] w-[100px] animate-spin rounded-full border-4 border-solid 
            border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </>
  );
};

export default App;
