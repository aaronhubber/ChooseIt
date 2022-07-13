import React, { useEffect, useState } from "react";
import Navigation from '../components/Navigation';
import {getProfilesId} from '../services/services.js';


const MyProfileContainer = (signOutUser, currentProfile, selectProfile) => {

    const [myProfile, setMyProfile] = useState(null)

    const runForm = () => {
        getProfilesId().then((res) => setMyProfile(res));
    }
    
        useEffect(() => {runForm()
    }, []);

    return(
    <>
    <Navigation signOutUser = {signOutUser}/>
        <h1>
            Profile Details
            
            {/* {selectProfile.id} */}
        
        </h1>
    </>
)}

// trying to find id by profile, ideally when we get to this page it would have selected the profile and stored it under either current profile or select profile and then we can access as normal. Perhaps we have to map to select an id? 

export default MyProfileContainer