import React from "react"
import Feeling from "./Feeling"

const MyEmotion = ({myEmotion}) => {

    const Ifeel = myEmotion?.map((feeling) => {
        return <Feeling feeling = {feeling}/>
    })
    return (
        <>
        <div>
        <h3>How I feel today:</h3>
        {Ifeel}
        <div id="map"></div>
        
        </div>
        </>
    )
}

export default MyEmotion;