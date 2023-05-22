import React from "react";
import ListNames from "./ListNames";


const FavouriteList = ({beers,handleChange})=>{

    const beerNames = beers.map((beer)=>{
        return (
            <ListNames
                beer = {beer}
                key = {beer.id}
                handleChange = {handleChange}
            /> 
        )
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange}>{beerNames}</select>
                <input type="submit" value = "Add" onClick={handleSubmit}></input>
            </form>
        </div>
    )

}

export default FavouriteList