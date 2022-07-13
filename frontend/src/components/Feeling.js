import React from "react"




const Feeling = ({feeling}) => {

let byteSource = "data:image/png;base64," + feeling.picture


    return (
        <>
        <div>
        {/* {feeling.title} */}
        <img src = {byteSource} value={feeling}></img>
        </div>
        </>
    )
}

  

export default Feeling