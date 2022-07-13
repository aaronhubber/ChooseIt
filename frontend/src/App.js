import React, {useEffect, useState} from 'react';
import UserHomepageContainer from './containers/UserHomepageContainer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfilesSelectContainer from './containers/UserProfilesSelectContainer';
import { getProfiles, getImages, postUser, getRandomWorkshopPicture} from './services/services';
import ScheduleContainer from './containers/ScheduleContainer'
import UserProfile from './components/UserProfile';
import ChoiceHomeContainer from './containers/ChoiceHomeContainer';
import WorkshopSelectionContainer from './containers/WorkshopSelectionContainer';
import EmotionSelectionContainer from './containers/EmotionSelectionContainer';
import MyProfileContainer from './containers/MyProfileContainer';
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


 const signOutUser = () => {
  setCurrentProfile(null)
 }

  const selectProfile = (currentProfile) => {
    setCurrentProfile(currentProfile);
  };

  const addProfile = (file,data) => {
    postUser(file, data).then((profileWithID) => {
      const temp = [...allProfiles];
      temp.push(profileWithID);
      setAllProfiles(temp);
    });
  };


  return (
    <MainContainer>
    <Router>
        <Routes>
          <Route path="/" element={ 
            currentProfile? 
            (<UserHomepageContainer currentProfile = {currentProfile}  signOutUser = {signOutUser}/>):
            (<UserProfilesSelectContainer 
              allProfiles = {allProfiles} 
              selectProfile = {selectProfile}
              addProfile = {addProfile}
              signOutUser = {signOutUser}
              />)}/>

            <Route path="/workshopchoice" element={
            <WorkshopSelectionContainer 
            signOutUser = {signOutUser}
            allWorkshopPictures = {allWorkshopPictures}
            currentProfile = {currentProfile}/>}/>
             
            <Route path="/todo" element={
            <ScheduleContainer 
            signOutUser = {signOutUser}
            currentProfile = {currentProfile}/>}/>
        
            <Route path="/whatchoice" element={
           <ChoiceHomeContainer
            signOutUser = {signOutUser}
            currentProfile = {currentProfile}/>}/>

            <Route path="/emotionchoice" element={<EmotionSelectionContainer
            signOutUser = {signOutUser}
            currentProfile = {currentProfile}/>}/>

            <Route path="/myprofile" element={<MyProfileContainer
            signOutUser = {signOutUser}
            selectProfile = {selectProfile}
            currentProfile = {currentProfile}/>}/>

        </Routes>
    </Router>
    </MainContainer>
  );
}

export default App;
