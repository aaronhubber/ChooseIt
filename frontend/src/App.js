import React, {useEffect, useState} from 'react';
import ChoiceSelectionContainer from './containers/ChoiceSelectionContainer';
import UserHomepageContainer from './containers/UserHomepageContainer';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfilesSelectContainer from './containers/UserProfilesSelectContainer';
import { getProfilePics, getUsers, getImages} from './services/services';

function App() {


  const [allProfiles, setAllProfiles] = useState([]);
  const [allWorkshopPictures, setAllWorkshopPictures] = useState([]);


  useEffect(() => {
    getUsers().then((res) => setAllProfiles(res));
  }, []);

  useEffect(() => {
    getImages().then((res) => setAllWorkshopPictures(res));
  }, []);

  // useEffect(() => {
  //   getProfilePics().then((res) => setAllProfilePics(res));
  // }, []);

  

  return (
    <div>
    <h3> ChooseIt</h3>
    <UserProfilesSelectContainer allProfiles = {allProfiles}/>
    <UserHomepageContainer/>
    <ChoiceSelectionContainer allWorkshopPictures ={allWorkshopPictures}/>
    </div>
  );
}

export default App;
