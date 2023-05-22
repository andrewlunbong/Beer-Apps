import React from "react";

const FavouriteBeerItem = ({beer, deleteItem}) => {
    return (
        <div className = "favs">
        <button onClick={deleteItem} value={beer.id}>X</button>
            <img src = {beer.image_url}></img>
            <h4>{beer.name}</h4>
            <p>{beer.tagline}</p>
        </div>
    )
}

export default FavouriteBeerItem