import React from 'react'

const WorkshopPicture = ({randomWorkshop, onFavouriteClick, favoriteWorkshop}) => {
  if (!randomWorkshop) return null;



  let byteSource = "data:image/png;base64," + randomWorkshop.picture

  const handleFavouriteClick = () => {
    console.log(randomWorkshop)
    onFavouriteClick(randomWorkshop)
}

  return (
    <>
    <div>
    <h3>{randomWorkshop.title}</h3>
    <h3>{randomWorkshop.description}</h3>
      <img src = {byteSource} value={randomWorkshop} />
      <button value={favoriteWorkshop} onClick={handleFavouriteClick} >Add Favourite</button>
    </div>
    </>
  )
}

export default WorkshopPicture
