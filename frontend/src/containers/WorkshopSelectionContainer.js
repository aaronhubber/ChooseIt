import React, {useState, useEffect} from 'react'
import FavoriteWorkshop from '../components/FavoriteWorkshop';
import WorkshopPicture from '../components/WorkshopPicture';
import WorkshopPicture2 from '../components/WorkshopPicture2';
import {getRandomWorkshopPicture, getRandomWorkshopPicture2} from '../services/services.js';
import gardening from "../assets/images/gardening.png";
import music from "../assets/images/music.png";
import art from "../assets/images/art.png";
import cooking from "../assets/images/cooking.png";
import styled from 'styled-components'


const FormContainer = styled.form`
`

  const Workshop = styled.div`
  `

  const Label = styled.label`
  `
  const InputSubmit = styled.input`
  `


const WorkshopSelectionContainer = () => {

  const [randomWorkshop, setRandomWorkshop] = useState(null);
  const [randomWorkshop2, setRandomWorkshop2] = useState(null);
  const [favoriteWorkshop, setFavoriteWorkshop] = useState([])
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)

  useEffect(() => {
    getRandomWorkshopPicture().then((res) => setRandomWorkshop(res));
    getRandomWorkshopPicture2().then((res) => setRandomWorkshop2(res));
  }, [favoriteWorkshop]);


  const onFavouriteClick = (banana) => {

    const copyList = [... favoriteWorkshop]

    const isOnList = copyList.some((workshop) => {
        return workshop.id === banana.id
    }) 

    if (!isOnList) { 
    copyList.push(banana)
    }

    setFavoriteWorkshop(copyList)
    
}
    const handleChoice1Change = (event) => {
      setChoice1(event.target.value);
    };

    const handleChoice2Change = (event) => {
      setChoice2(event.target.value);
    };

    const handleSubmit = () => {
      getRandomWorkshopPicture();
    };

  // const randomWorkshopPicture = (()=>{
  //  return getRandomWorkshopPicture
  // })

    // const pictureTiles = allWorkshopPictures?.map((workshopPicture, index) => {
    //     return <WorkshopPicture workshopPicture={workshopPicture} key={index} />;
    //   });

      // const profilePicTiles = allProfilePics.map((profilePic, index) => {
      //   return <UserProfilePic profilePic={profilePic} key={index} />;
      // });



  return (

    <>
    <div>
    <FormContainer onSubmit={handleSubmit}>
        <Label>Choose your Workshop</Label>
        <Workshop>
          <label>
            <input
              type="radio"
              name="workshop"
              value="1"
              onChange={handleChoice1Change}
            />
            <img src={music} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop"
              value="3"
              onChange={handleChoice1Change}
            />
            <img src={cooking} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop"
              value="2"
              onChange={handleChoice1Change}
            />
            <img src={art} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop"
              value="0"
              onChange={handleChoice1Change}
            />
            <img src={gardening} height="70" width="70" />
          </label>
        </Workshop>
        <Workshop>
          <label>
            <input
              type="radio"
              name="workshop2"
              value="1"
              onChange={handleChoice1Change}
            />
            <img src={music} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop2"
              value="3"
              onChange={handleChoice1Change}
            />
            <img src={cooking} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop2"
              value="2"
              onChange={handleChoice1Change}
            />
            <img src={art} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop2"
              value="0"
              onChange={handleChoice1Change}
            />
            <img src={gardening} height="70" width="70" />
          </label>
        </Workshop>
        <InputSubmit type="submit" value="submit" />
      </FormContainer>
      <WorkshopPicture randomWorkshop={randomWorkshop} onFavouriteClick={onFavouriteClick}/> 
      <WorkshopPicture2 randomWorkshop2={randomWorkshop2}/>
      <FavoriteWorkshop favoriteWorkshop={favoriteWorkshop}/>
    </div>
    </>
  )
}

export default WorkshopSelectionContainer
