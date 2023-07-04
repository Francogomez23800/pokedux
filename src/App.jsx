import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, getPokemonDetails } from "./api"
import Searcher from "./Components/Searcher"
import PokemonList from "./Components/PokemonList"
import Nav from "./Components/Nav"
import { setLoading, setPokemons } from "./actions"

const App = () => {
  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      const pokemonDeatails = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
      dispatch(setPokemons(pokemonDeatails))
    }
    dispatch(setLoading(false))

    fetchPokemons();
  }, []);

  return (
    <>
    <Nav/>
    <Searcher/>
    {loading ? 
    <div className="h-[100vh] flex items-center justify-center">
    <div
    className="inline-block h-[200px] w-[200px]
     animate-spin rounded-full border-4 
    border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
  </div>
  </div>
    :
    <PokemonList pokemons={pokemons}/>
    
    }
    </>
  )
}

export default App
