import React from 'react'
import styled from 'styled-components'
import yes from "../assets/images/yes.png";
import next from "../assets/images/next.png";


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
  flex-direction:column;
  justify-content: center;
  align-items:center;
  width:50vw;`

  const Check = styled.img`
  width: 100px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);}`

const Next = styled.img`
width:100px;
cursor: pointer;
&:hover{
  transform: scale(0.9);}`

  const Picture = styled.img`
  background:white;
  border-style:solid;
  border-width:2px;
  border-color:grey;
  height:20vw;`

  const Buttons = styled.div`
  display:flex;
  flex-direction: row;
  `

const H2 = styled.h2`
text-align:center;
padding:0;
margin:0;`

const H3 = styled.h3`
text-align:center;
padding:0;
margin-bottom:8px;
margin-top:0;`

const EmotionPicture = ({randomEmotion, handleNext, onFavouriteClick}) => {

  if (!randomEmotion) return null;



  let byteSource = "data:image/png;base64," + randomEmotion.picture

  const handleFavouriteClick = () => {
    onFavouriteClick(randomEmotion)
}





  return (
    <>
    <Body>
    <H2>{randomEmotion.title}</H2>
    <H3>{randomEmotion.description}</H3>
      <Picture src = {byteSource} value={randomEmotion} />
      <Buttons>
      <Check src = {yes} onClick={handleFavouriteClick} alt = "yes"/>
      <Next src = {next} onClick={handleNext} alt = "next"/>
      {/* <button onClick={handleNext} >Next</button> */}
      {/* <button onClick={handleFavouriteClick} >Add To My Feelings</button> */}
      </Buttons>
    </Body>
    </>
  )
}

export default EmotionPicture