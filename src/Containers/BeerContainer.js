import React, {useState, useEffect} from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import FavouriteList from "../Components/FavouriteList";
import ListOfBeers from "../Components/ListOfBeers";

const BeerContainer = ()=>{

    const[beers, setBeers] = useState ([]);
    const[selectedBeer, setSelectedBeer] = useState(null)
    const[favourites, setFavourites] = useState([])

    const handleChange = function(evt){
        evt.preventDefault()
        const beerId = evt.target.value
        const selected = beers.find((beer)=> beer.id === beerId)
        setSelectedBeer(selected)

    }

    const handleSubmit = function(evt){
        evt.preventDefault()
        if (selectedBeer){
            const newFav = [...favourites, selectedBeer]
            setFavourites(newFav)
            setSelectedBeer(null)
        }
    }

    useEffect(()=>{
        getBeers();
    },[])


    const getBeers = function(){
        fetch("https://api.punkapi.com/v2/beers")
        .then((res) =>{
            if (res.ok){
                return res.json();
            }else{
                throw new Error("Failed to fetch beers")
            }
        })
        .then((beers)=> {setBeers(beers)
        })
    }
    return (
        <div>
            <h1> Favourites</h1>
            <FavouriteList
                beers = {beers}
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
            />
            <h1>List Of Beers</h1>
            <ListOfBeers
                beers = {beers}
            />
        </div>
    )





}

export default BeerContainer

 