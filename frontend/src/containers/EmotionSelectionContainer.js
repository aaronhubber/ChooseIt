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
`

const EmotionsDiv = styled.div`
`
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
    <h2>How am I feeling today?</h2>
    <p>You can look through emotions below by clicking on the next button. If you find a picture that looks how you feel you can add it to your feelings with the other button. 
    <p></p>Its ok to feel lots of things at the same time and you can add more than one. Also if you don't feel anything like the pictures then thats ok too, people feel things differently and you can talk to people about how you are feeling. </p>
    <EmotionsDiv>
    <EmotionPicture randomEmotion={randomEmotion} handleNext={handleNext} onFavouriteClick={onFavouriteClick}/> 
    <MyEmotion myEmotion={myEmotion}/>
    </EmotionsDiv>
    </MainBody>
          
    </>
  )
}

export default EmotionSelectionContainer
