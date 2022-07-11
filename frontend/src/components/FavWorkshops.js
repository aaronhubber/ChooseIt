import React from "react"


const FavWorkshop = ({workshop}) => {

    return (
        <>
        <h2>Chosen Workshops</h2>
        <p className="fac-workshops">{workshop.genre}</p>
        </>
    )
}

export default FavWorkshop