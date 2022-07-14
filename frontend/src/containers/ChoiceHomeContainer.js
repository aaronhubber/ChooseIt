import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation';
import styled from 'styled-components'
import PencilWorkshop from "../assets/images/PencilWorkshop.jpg"
import EggEmotion from "../assets/images/EggEmotion.jpg"


const  MainFlex = styled.div`
display:flex;
flex-direction: row;
justify-content:space-around;
padding:10vw;
`

const ChoiceTile = styled.div`
border-style:solid;
border-width:2px;
border-color:grey;
padding: 2%;
margin:2%;
background-color:white ;
&:hover{
    transform:scale(1.1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
height:20em;
width:20em;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;`


const Img = styled.img`
width:250px;
border-style:solid;
border-width:2px;
border-color:grey;
`

const H2 = styled.h1`
text-align:center;
padding-bottom:3vh;`

const ChoiceHomeContainer = ( signOutUser, currentProfile) => {
  return (
    <>
    <Navigation signOutUser = {signOutUser}/>
    <MainFlex>
    <ChoiceTile>
    <Link style={{ textDecoration: "none" }} to="/workshopchoice">
      <H2>Workshop Choice</H2>
    <Img src = {PencilWorkshop}/>
    </Link>
    </ChoiceTile>
    <ChoiceTile>
    <Link style={{ textDecoration: "none" }} to="/emotionchoice">
    <H2>Emotion Choice</H2>
    <Img src = {EggEmotion}/>
    </Link>
    </ChoiceTile>
    </MainFlex>
    </>
  )
}

export default ChoiceHomeContainer
