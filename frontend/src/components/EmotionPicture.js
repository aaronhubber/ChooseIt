import React from 'react'
import styled from 'styled-components'




  const Workshop = styled.div`
  `

  const Label = styled.label`
  `
  const InputSubmit = styled.input`
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  font-size:30px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);};
  `

const EmotionPicture = ({randomEmotion, handleNext, onFavouriteClick}) => {

  if (!randomEmotion) return null;



  let byteSource = "data:image/png;base64," + randomEmotion.picture

  const handleFavouriteClick = () => {
    onFavouriteClick(randomEmotion)
}





  return (
    <>
    <div className='test'>
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