import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FavouriteButton from './FavouriteButton';
import { useDispatch } from 'react-redux';
import { setFavourite } from '../actions';

const PokemonCard = ({ name, image, abilities, id, favourite }) => {
  const dispatch = useDispatch()
  function handleOnFavourite(){
    dispatch(setFavourite({pokemonId: id}))
  }

  function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  return (
    <div className='w-[250px] shadow-lg rounded-lg shadow-gray-500 flex flex-col items-center m-5'>
      <div className='w-full flex justify-between'>
      <h1 className='font-medium m-3'>{capitalizeFirstLetter(name)}</h1>
      <FavouriteButton isFavourite={favourite} onClick={handleOnFavourite}/>
      </div>
      <img className='w-[200px] bg-gray-200 rounded-xl' src={image} alt={name} />
      <ul className='w-full p-6'>
        {abilities.map((ability) =>( 
        <li 
          key={uuidv4()}
          className='font-semilight text-gray-500'
          >{ability}
          </li>
        )
        )}
      </ul>
    </div>
  );
};

export default PokemonCard;
