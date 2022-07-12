import React from 'react'

const EmotionPicture = ({randomEmotion, handleNext, onFavouriteClick}) => {

  if (!randomEmotion) return null;



  let byteSource = "data:image/png;base64," + randomEmotion.picture

  const handleFavouriteClick = () => {
    onFavouriteClick(randomEmotion)
}





  return (
    <>
    <div>
    <h3>{randomEmotion.title}</h3>
    <h3>{randomEmotion.description}</h3>
      <img src = {byteSource} value={randomEmotion} />
      <button onClick={handleNext} >Next</button>
      <button onClick={handleFavouriteClick} >Add To My Feelings</button>
    </div>
    </>
  )
}

export default EmotionPicture