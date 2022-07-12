import React from 'react'

const WorkshopPicture2 = ({randomWorkshop2, onFavouriteClick, favoriteWorkshop}) => {

  if (!randomWorkshop2) return null;

  let byteSource = "data:image/png;base64," + randomWorkshop2.picture

  const handleFavouriteClick = () => {
    console.log(randomWorkshop2)
    onFavouriteClick(randomWorkshop2)
}

  return (
    <>
    <div>
    <h3>{randomWorkshop2.title}</h3>
    <h3>{randomWorkshop2.description}</h3>
      <img src = {byteSource}/>
      <button value={favoriteWorkshop} onClick={handleFavouriteClick} >Add Favourite</button>
    </div>
    </>
  )
}

export default WorkshopPicture2