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


  // useEffect(() => {
  //   getProfilePics().then((res) => setAllProfilePics(res));
  // }, []);

  const selectProfile = (profile) => {
    setCurrentProfile(profile);
  };

// const getUsers = () => {
//     fetch("http://localhost:8080/userprofiles")
//     .then((res) => res.json())
//     .then(allProfiles => setAllProfiles(allProfiles));
//     // .catch(error => console.error);
// };

  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<UserHomepageContainer/>}/>
          <Route path = "/selectprofile" element={<UserProfilesSelectContainer allProfiles = {allProfiles}/>}/>
          <Route path="/workshopchoice" element={<WorkshopSelectionContainer allWorkshopPictures = {allWorkshopPictures}/>}/>
          <Route path="/todo" element={<ScheduleContainer/>}/>
          <Route path="/whatchoice" element={<ChoiceHomeContainer/>}/>
          {/* <Route path="/emotionchoice" element={<EmotionSelectionContainer/>}/> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
