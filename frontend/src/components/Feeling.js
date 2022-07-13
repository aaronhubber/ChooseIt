import React from "react"
import styled from 'styled-components'

const FeelingImg = styled.img`
width:10em;
height: 10em;
border-style:solid;
border-width:2px;
border-color:grey;
background: white;
`



const Feeling = ({feeling}) => {

let byteSource = "data:image/png;base64," + feeling.picture


    return (
        <>
        <div>
        {/* {feeling.title} */}
        <FeelingImg src = {byteSource} value={feeling}></FeelingImg>
        </div>
        </>
    )
}

  

export default Feeling