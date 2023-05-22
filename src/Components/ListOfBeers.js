import React from "react";
import ItemOfTheList from "./ItemOfTheList"

const ListOfBeers = ({beers})=>{
    
    const beerItems = beers.map((beer)=>{
        return (
            <ItemOfTheList
                beer = {beer}
                key = {beer.id}
            />



        )
    }) 
    
    return(
        <table>
            <thead>
             <tr>
                <th> Name</th>
                <th> Description</th>
             </tr>   
            </thead>
            <tbody>{beerItems}</tbody>
        </table>
    )



}

export default ListOfBeers