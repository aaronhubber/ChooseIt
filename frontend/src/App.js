import React from 'react';
import UserHomepageContainer from './containers/UserHomepageContainer';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfilesSelectContainer from './containers/UserProfilesSelectContainer';


function App() {
  return (
    <div>
    <h1> ChooseIt</h1>
    <UserProfilesSelectContainer/>
    <UserHomepageContainer/>
    </div>
  );
}

export default App;
