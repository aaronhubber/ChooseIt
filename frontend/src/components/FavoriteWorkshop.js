import React from "react"
import FavWorkshops from "./FavWorkshops"

const FavouriteWorkshops = ({favoriteWorkshop}) => {

    const bestWorkshop = favoriteWorkshop?.map((workshop) => {
        return <FavWorkshops workshop = {workshop}/>
    })
    return (
        <>
        <div>
        <h3>Favourite Workshops:</h3>
        {bestWorkshop}
        <div id="map"></div>
        
        </div>
        </>
    )
}

export default FavouriteWorkshops;