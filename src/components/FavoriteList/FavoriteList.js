import FavoriteCard from "../FavoriteCard/FavoriteCard"

export default function FavoriteList({favorites}) {
        return <>
        {favorites !== [] && favorites.map((favorite) => 
            <FavoriteCard key={favorite._id} data={favorite}/>
        )}
    </>
}
