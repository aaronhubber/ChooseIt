import React from 'react'
import styled from 'styled-components'


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

  const Body = styled.div`
  margin:auto;
  background:white;
  border-style:solid;
  border-color:grey;
  border-width:2px;
  padding:20px;
  display:flex;
  flex-direction:column;`

const EmotionPicture = ({randomEmotion, handleNext, onFavouriteClick}) => {

  if (!randomEmotion) return null;



  let byteSource = "data:image/png;base64," + randomEmotion.picture

  const handleFavouriteClick = () => {
    onFavouriteClick(randomEmotion)
}





  return (
    <>
    <Body>
    <h3>{randomEmotion.title}</h3>
    <h3>{randomEmotion.description}</h3>
      <img src = {byteSource} value={randomEmotion} />
      <button onClick={handleNext} >Next</button>
      <button onClick={handleFavouriteClick} >Add To My Feelings</button>
    </Body>
    </>
  )
}

export default EmotionPicture