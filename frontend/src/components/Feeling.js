import React from "react"


const Feeling = ({feeling}) => {

    return (
        <>
        <h4>I am feeling...</h4>
        <p className="fac-workshops">{feeling.title}</p>
        </>
    )
}

export default Feeling