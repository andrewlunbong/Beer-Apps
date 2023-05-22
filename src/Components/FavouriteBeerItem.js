import React from "react";

const FavouriteBeerItem = ({beer}) => {
    return (
        <div>
            <img src = {beer.image_url}></img>
            <h4>{beer.name}</h4>
            <p>{beer.tagline}</p>
        </div>
    )
}

export default FavouriteBeerItem