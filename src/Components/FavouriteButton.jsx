const FavouriteButton = ({isFavourite, onClick}) =>{
    return(
        <button 
        onClick={onClick}
        className={`w-8 h-8 text-xl flex justify-center rounded-full m-2
        ${isFavourite ? 'text-white bg-yellow-500': 'shadow-sm shadow-gray-500 hover:text-white hover:bg-yellow-500'}`}>
            ★
        </button>
    )
}

export default FavouriteButton