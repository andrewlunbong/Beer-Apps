import React from "react";

const ListNames = ({beer}) =>{
    return (
        <option value ={beer.id}>{beer.name}</option>
    )
}

export default ListNames