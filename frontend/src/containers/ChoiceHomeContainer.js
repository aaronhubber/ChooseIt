import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation';


const ChoiceHomeContainer = ( signOutUser, currentProfile) => {
  return (
    <>
     <Navigation signOutUser = {signOutUser}/>
    <Link style={{ textDecoration: "none" }} to="/workshopchoice">
      <h2>WorkshopChoice</h2>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/emotionchoice">
    <h2>Emotion Choice</h2>
    </Link>
    </>
  )
}

export default ChoiceHomeContainer
