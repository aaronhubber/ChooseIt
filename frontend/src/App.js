import React, {useEffect, useState} from 'react';
import UserHomepageContainer from './containers/UserHomepageContainer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfilesSelectContainer from './containers/UserProfilesSelectContainer';
import { getProfiles, getImages} from './services/services';
import ScheduleContainer from './containers/ScheduleContainer'
import UserProfile from './components/UserProfile';
import ChoiceHomeContainer from './containers/ChoiceHomeContainer';
import WorkshopSelectionContainer from './containers/WorkshopSelectionContainer';
import EmotionSelectionContainer from './containers/EmotionSelectionContainer';
import styled from 'styled-components';

const MainContainer = styled.div`
`

function App() {


  const [allWorkshopPictures, setAllWorkshopPictures] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null)
  const [allProfiles, setAllProfiles] = useState([]);


  // useEffect(() => {
  //   getUsers();
  // }, []);

  useEffect(() => {
    getProfiles().then((result) => setAllProfiles(result));
  }, []);

  useEffect(() => {
    getImages().then((res) => setAllWorkshopPictures(res));
  }, []);


  const selectProfile = (currentProfile) => {
    setCurrentProfile(currentProfile);
  };


  return (
    <MainContainer>
    <Router>
        <Routes>

          <Route path="/" element={ 
            currentProfile? 
            (<UserHomepageContainer currentProfile = {currentProfile} />):
            (<UserProfilesSelectContainer 
              allProfiles = {allProfiles} 
              selectProfile = {selectProfile}/>)}/>

            <Route path="/workshopchoice" element=
            {<WorkshopSelectionContainer 
            allWorkshopPictures = {allWorkshopPictures}
            currentProfile = {currentProfile}
            />}/>

            <Route path="/todo" element={
            <ScheduleContainer 
            currentProfile = {currentProfile}/>}/>

            <Route path="/whatchoice" element={
            <ChoiceHomeContainer
            currentProfile = {currentProfile}
            />}/>

            {/* <Route path="/emotionchoice" element={
            <EmotionSelectionContainer
            currentProfile = {currentProfile}
            />}/> */}

        </Routes>
    </Router>
    </MainContainer>
  );
}

export default App;
