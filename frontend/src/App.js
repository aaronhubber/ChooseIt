import React, {useEffect, useState} from 'react';
import UserHomepageContainer from './containers/UserHomepageContainer';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfilesSelectContainer from './containers/UserProfilesSelectContainer';
import { getProfilePics, getUsers } from './services/services';

function App() {

  const [allProfiles, setAllProfiles] = useState([]);
  // const [allProfilePics, setAllProfilePics] = useState([]);


  useEffect(() => {
    getUsers().then((res) => setAllProfiles(res));
  }, []);

  // useEffect(() => {
  //   getProfilePics().then((res) => setAllProfilePics(res));
  // }, []);


  return (
    <div>
    <h3> ChooseIt</h3>
    <UserProfilesSelectContainer allProfiles = {allProfiles}/>
    <UserHomepageContainer/>
    </div>
  );
}

export default App;
