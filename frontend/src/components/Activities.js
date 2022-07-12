import React from "react"


const Activities = ({activity1}) => {

    return (
        <>
        <h4>I am feeling...</h4>
        <p className="fac-workshops">{activity1.title}</p>
        </>
    )
}

export default Activities