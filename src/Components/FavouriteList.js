import React from "react";
import ListNames from "./ListNames";
import FavouriteBeerItem from "./FavouriteBeerItem";


const FavouriteList = ({beers, handleChange, handleSubmit, favourites, deleteItem})=>{

    const beerNames = beers.map((beer)=>{
        return (
            <ListNames
                beer = {beer}
                key = {beer.id}
                
            /> 
        )
    })

    const favBeers = favourites.map((beer) => {
        return(
        <FavouriteBeerItem
            beer ={beer}
            key = {beer.id}
            handleChange = {handleChange}
            handleSubmit = {handleChange}
            favourites = {favourites}
            deleteItem={deleteItem}
        />)
    })

    return (
        <div>
            <div  className="flex">
                {favBeers}
            </div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange}>{beerNames}</select>
                <input type="submit" value = "Add" onClick={handleSubmit}></input>
            </form>
        </div>
    )

}

export default FavouriteList