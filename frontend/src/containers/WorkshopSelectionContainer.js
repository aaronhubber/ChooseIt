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
import Navigation from '../components/Navigation';


const FormContainer = styled.form`
`

  const Workshop = styled.div`
  `

  const Label = styled.label`
  `
  const InputSubmit = styled.input`
  `


const WorkshopSelectionContainer = ({signOutUser, currentProfile}) => {

  const [randomWorkshop, setRandomWorkshop] = useState(null);
  const [randomWorkshop2, setRandomWorkshop2] = useState(null);
  const [favoriteWorkshop, setFavoriteWorkshop] = useState([])
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)


  const runForm = () => {
    getRandomWorkshopPicture(choice1).then((res) => setRandomWorkshop(res));
    getRandomWorkshopPicture2(choice2).then((res) => setRandomWorkshop2(res));}

    useEffect(() => {runForm()
}, [favoriteWorkshop]);


  const onFavouriteClick = (banana) => {

    const copyList = [... favoriteWorkshop]

    const isOnList = copyList.some((workshop) => {
        return workshop.id === banana.id
    }) 

    if (!isOnList) { 
    copyList.push(banana)
    }
    runForm(choice1,choice2)
    setFavoriteWorkshop(copyList)
    
}
    const handleChoice1Change = (event) => {
      setChoice1(event.target.value);
    };

    const handleChoice2Change = (event) => {
      setChoice2(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      runForm(choice1, choice2)
    };

  return (

    <>
    <div>
    <Navigation signOutUser = {signOutUser}/>
    <FormContainer method = "POST" onSubmit={handleSubmit}>
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
              onChange={handleChoice2Change}
            />
            <img src={music} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop2"
              value="3"
              onChange={handleChoice2Change}
            />
            <img src={cooking} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop2"
              value="2"
              onChange={handleChoice2Change}
            />
            <img src={art} height="70" width="70" />
          </label>

          <label>
            <input
              type="radio"
              name="workshop2"
              value="0"
              onChange={handleChoice2Change}
            />
            <img src={gardening} height="70" width="70" />
          </label>
        </Workshop>
        <InputSubmit type="submit" value="submit" text = "NEXT!"/>
      </FormContainer>
      <WorkshopPicture randomWorkshop={randomWorkshop} onFavouriteClick={onFavouriteClick}/> 
      <WorkshopPicture2 randomWorkshop2={randomWorkshop2}/>
      <FavoriteWorkshop favoriteWorkshop={favoriteWorkshop}/>
    </div>
    </>
  )
}

export default WorkshopSelectionContainer
