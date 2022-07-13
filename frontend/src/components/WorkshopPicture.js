import React from 'react'
import styled from 'styled-components'

const WorkshopTile = styled.div`
 display: flex;
  flex-direction:column;
  /* justify-content:space-between; */
  align-items:center;
  width:250px;
  background: white;
  border-style:solid;
  border-color:grey;
  border-width:2px;
  margin-top:30px;
  margin-bottom:30px;
  padding:10px;
`
const Img = styled.img`
width:10em;
height: 10em;
border-style:solid;
border-width:2px;
border-color:grey;
`
const Like = styled.h1`
font-size: 60px;
padding:0px;
&:hover{
  color: #C41E3A;
  transform: scale(1.4);
  cursor:pointer;
}
`
const H3 = styled.h2`
text-align:center;`

const WorkshopPicture = ({randomWorkshop, onFavouriteClick, favoriteWorkshop}) => {
  if (!randomWorkshop) return null;



  let byteSource = "data:image/png;base64," + randomWorkshop.picture

  const handleFavouriteClick = () => {
    console.log(randomWorkshop)
    onFavouriteClick(randomWorkshop)
}

  return (
    <>
    <WorkshopTile>
    {/* <h3>{randomWorkshop.title}</h3> */}
    <H3>{randomWorkshop.description}</H3>
      <Img src = {byteSource} value={randomWorkshop} />
      {/* <button value={favoriteWorkshop} onClick={handleFavouriteClick} >Add Favourite</button> */}
      <Like value={favoriteWorkshop} onClick={handleFavouriteClick} >&#9829;</Like>
    </WorkshopTile>
    </>
  )
}

export default WorkshopPicture
