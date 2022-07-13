import React, {useState, useEffect} from 'react'
import {getRandomEmotionPicture} from '../services/services.js';
import EmotionPicture from '../components/EmotionPicture';
import MyEmotion from '../components/MyEmotion';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

const MainBody = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
width:80%;
margin:auto;
`

const EmotionsDiv = styled.div`
margin:50px;
width:70vw;
display:flex;
align-content:space-between;
gap:100px;
`

const InfoDiv = styled.div`
background:white;
border-color:grey;
border-style:solid;
border-width:2px;
margin-top:15px;`

const H2 = styled.h2`
text-align:center;
padding:0;
margin-top:5px;`

const Info = styled.p`
margin-left:10px;`

const EmotionSelectionContainer = (signOutUser, currentProfile) => {


  const [randomEmotion, setRandomEmotion] = useState(null);
  const [myEmotion, setMyEmotion] = useState([])

  const runForm = () => {
    getRandomEmotionPicture().then((res) => setRandomEmotion(res));
}

    useEffect(() => {runForm()
}, []);


  const onFavouriteClick = (banana) => {
    const copyList = [... myEmotion]
    const isOnList = copyList.some((workshop) => {
        return workshop.id === banana.id
    }) 
    if (!isOnList) { 
    copyList.push(banana)
    }
    setMyEmotion(copyList)
}

    const handleNext = () => {
      getRandomEmotionPicture().then((res) => setRandomEmotion(res))
  }

  return (
    <>
    <Navigation signOutUser = {signOutUser}/>
    <MainBody>
    <InfoDiv>
    <H2>How am I feeling today?</H2>
    <Info>You can look through emotions below by clicking on the next button. If you find a picture that looks how you feel you can add it to your feelings with the other button. <br/>
    Its ok to feel lots of things at the same time and you can add more than one. Also if you don't feel anything like the pictures then thats ok too, people feel things differently and you can talk to people about how you are feeling. </Info>
    </InfoDiv>
    <EmotionsDiv>
    <EmotionPicture randomEmotion={randomEmotion} handleNext={handleNext} onFavouriteClick={onFavouriteClick}/> 
    <MyEmotion myEmotion={myEmotion}/>
    </EmotionsDiv>
    </MainBody>
          
    </>
  )
}

export default EmotionSelectionContainer
