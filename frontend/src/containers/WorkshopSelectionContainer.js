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
// import img from '../assets/images/background.png';




const FormContainer = styled.form`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
  const BothFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin-left:100px;
  margin-right:100px;
  gap:50px;
`


  const OptionBox = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:500px;
  background: white;
  border-style:solid;
  border-color:grey;
  border-width:2px;
  margin-top:30px;
  padding:10px;
  `

  
  const Workshop = styled.div`
   display:flex;
    flex:flex-wrap;

  `

  const Label = styled.label`

  `
  const InputSubmit = styled.input`
  width:150px;
  background-color: #296364;
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size:30px;
  margin: 10px 2px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);};

  `
  const Div = styled.div`
  background-color:white;
  border-style:solid;
  border-color:grey;
  border-width: 2px;
 `


const Title = styled.h1`
text-align:center;
color:black;

`

  const WorkshopRandomContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;`


const DownloadButton = styled.button`
display: flex;
justify-content:center;
margin:auto;
  background-color: #296364;
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-size:20px;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);}`;

const Info = styled.p`
margin-left:10px;`

const InfoDiv = styled.div`
background:white;
border-color:grey;
border-style:solid;
border-width:2px;
margin-top:15px;
margin-top:15px;
margin-left:15px;
margin-right:15px;`
  
const WorkshopSelectionContainer = ({signOutUser, currentProfile}) => {

  const [randomWorkshop, setRandomWorkshop] = useState(null);
  const [randomWorkshop2, setRandomWorkshop2] = useState(null);
  const [showImages, setShowImages] = useState(false);
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
      setShowImages(true)
      runForm(choice1, choice2)
    };

  return (

    <>
    <div>
    <Navigation signOutUser = {signOutUser}/>
    <InfoDiv>
    <Title>Choose A Workshop</Title>
    <Info>Here you can choose which workshop you would like to do. There are four pictures on the left and four on the right, chose two that you would like to make a choice between. Then click the submit button. This will make two images appear, click the button next to the one you like best and that will be added to a list to show you which workshop you have chosen most often.</Info>
    </InfoDiv>
    <FormContainer method = "POST" onSubmit={handleSubmit}>
    <BothFlex>
        <OptionBox>
        <Label>Choose Your 1st Workshop</Label>
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
        </OptionBox>
        <OptionBox>
        <Label>Choose Your 2nd Workshop</Label>
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
        </OptionBox>
        </BothFlex>
        <InputSubmit type="submit" value="submit"/>
      </FormContainer>
      <WorkshopRandomContainer>

      {showImages ?  <WorkshopPicture randomWorkshop={randomWorkshop} onFavouriteClick={onFavouriteClick}/> : null}
      {showImages ? <WorkshopPicture randomWorkshop={randomWorkshop2} onFavouriteClick={onFavouriteClick}/> : null}

      <FavoriteWorkshop favoriteWorkshop={favoriteWorkshop}/>
      </WorkshopRandomContainer>
    </div>
    </>
  )
}

export default WorkshopSelectionContainer
