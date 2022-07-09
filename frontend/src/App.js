import React, {useEffect, useState} from 'react';
import ChoiceSelectionContainer from './containers/ChoiceSelectionContainer';
import UserHomepageContainer from './containers/UserHomepageContainer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfilesSelectContainer from './containers/UserProfilesSelectContainer';
import { getProfilePics, getUsers, getImages} from './services/services';
import ScheduleContainer from './containers/ScheduleContainer'
import UserProfile from './components/UserProfile';
import ChoiceHomeContainer from './containers/ChoiceHomeContainer';

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
    <Router>
        <Routes>
          <Route path="/home" element={UserProfile?(<UserHomepageContainer/>):(<UserProfilesSelectContainer 
          allProfiles = {allProfiles}/>)}/>
          <Route path="/workshopchoice" element={<ChoiceSelectionContainer
          allWorkshopPictures ={allWorkshopPictures}/>}/>
          <Route path="/todo" element={<ScheduleContainer/>}/>
          <Route path="/makeachoice" element={<ChoiceHomeContainer/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
