import React, {useState, useEffect} from 'react'
import {getRandomEmotionPicture} from '../services/services.js';
import EmotionPicture from '../components/EmotionPicture';
import mainHappy from "../assets/images/MainHappy.png";
import mainSad from "../assets/images/MainSad.png";

const EmotionSelectionContainer = () => {

  const [emotion, setEmotion] = useState(null)
  const [randomEmotion, setRandomEmotion] = useState
  (null);



  const runForm = () => {
    getRandomEmotionPicture(emotion).then((res) => setRandomEmotion(res));
}

    useEffect(() => {runForm()
}, []);


//   const onFavouriteClick = (banana) => {

//     const copyList = [... favoriteWorkshop]

//     const isOnList = copyList.some((workshop) => {
//         return workshop.id === banana.id
//     }) 

//     if (!isOnList) { 
//     copyList.push(banana)
//     }
//     runForm(choice1,choice2)
//     setFavoriteWorkshop(copyList)
    
// }
    const handleEmotionChange = (event) => {
      setEmotion(event.target.value);
    };


    const handleSubmit = (event) => {
      event.preventDefault();
      runForm(emotion)
    };

  return (
    <>
    <form method = "POST" onSubmit={handleSubmit}>
        <label>How are you feeling today?</label>
        <div>
          <label>
            <input
              type="radio"
              name="workshop"
              value="1"
              onChange={handleEmotionChange}
            />
            <img src={mainHappy} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop"
              value="3"
              onChange={handleEmotionChange}
            />
            <img src={mainSad} height="70" width="70" />
          </label>
          </div>
          </form>
          <h2>Or Are You Feeling?</h2>
          <EmotionPicture randomEmotion={randomEmotion} /> 
          {/* TODO add button for next */}
          </>
  )
}

export default EmotionSelectionContainer
