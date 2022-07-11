import React from 'react'

const EmotionPicture = ({randomEmotion}) => {

  if (!randomEmotion) return null;



  let byteSource = "data:image/png;base64," + randomEmotion.picture

//   const handleFavouriteClick = () => {
//     console.log(randomWorkshop)
//     onFavouriteClick(randomWorkshop)
// }

  return (
    <>
    <div>
    <h3>{randomEmotion.title}</h3>
    <h3>{randomEmotion.description}</h3>
      <img src = {byteSource} value={randomEmotion} />
      {/* <button value={favoriteWorkshop} onClick={handleFavouriteClick} >Add Favourite</button> */}
    </div>
    </>
  )
}

export default EmotionPicture